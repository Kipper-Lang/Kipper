/**
 * A file context for a single Kipper file, which may be used for parsing or compiling a Kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { ParseTreeWalker } from "antlr4ts/tree";
import { ANTLRErrorListener, Token, TokenStream } from "antlr4ts";
import { CompilationUnitContext, KipperLexer, KipperParser } from "./parser";
import { KipperParseStream } from "./parse-stream";
import { KipperFileListener } from "./listener";
import {
	BuiltInFunction,
	KipperType,
	kipperTypes,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeVariableDeclaration,
} from "./logic";
import { KipperLogger } from "../logger";
import { CompoundStatement, FunctionDefinition, RootFileParseToken, VariableDeclaration } from "./tokens";
import {
	BuiltInOverwriteError,
	DuplicateFunctionDefinitionError,
	DuplicateVariableDefinitionError,
	InvalidGlobalError,
	UnknownFunctionDefinition,
	UnknownTypeError,
	UnknownVariableDefinition,
} from "../errors";

/**
 * CompileAssert namespace containing tools for validating certain compile-required truths, which, if false, will
 * trigger corresponding errors.
 * @since 0.2.0
 */
export class CompileAssert {
	public readonly programCtx: KipperProgramContext;

	constructor(programCtx: KipperProgramContext) {
		this.programCtx = programCtx;
	}

	/**
	 * Asserts that the passed type identifier exists.
	 * @param type The type to check.
	 */
	public assertTypeExists(type: string): void {
		if (kipperTypes.find((val) => val === type) === undefined) {
			throw new UnknownTypeError(type);
		}
	}

	/**
	 * Asserts that the passed variable identifier is defined.
	 * @param identifier The identifier of the function.
	 */
	public functionIsDefined(identifier: string): void {
		if (!this.programCtx.getGlobalFunction(identifier)) {
			throw new UnknownFunctionDefinition(identifier);
		}
	}

	/**
	 * Asserts that the passed variable identifier is defined.
	 * @param identifier The identifier of the variable.
	 */
	public variableIsDefined(identifier: string): void {
		if (!this.programCtx.getGlobalFunction(identifier)) {
			throw new UnknownVariableDefinition(identifier);
		}
	}

	/**
	 * Asserts that the passed function identifier is not defined.
	 * @param identifier The identifier of the function.
	 */
	public functionIdentifierNotUsed(identifier: string): void {
		if (this.programCtx.getGlobalFunction(identifier)) {
			throw new DuplicateFunctionDefinitionError(identifier);
		}
	}

	/**
	 * Asserts that the passed variable identifier is not defined.
	 * @param identifier The identifier of the variable.
	 * @param scope The scope to use. If undefined, then it will use the global scope of the
	 * {@link KipperProgramContext program ctx}.
	 */
	public variableIdentifierNotUsed(identifier: string, scope?: CompoundStatement | KipperProgramContext): void {
		let actualScope: ScopeDeclaration[];
		if (scope === undefined) {
			actualScope = this.programCtx.globalScope;
		} else if (scope instanceof CompoundStatement) {
			actualScope = scope.localScope;
		} else {
			actualScope = scope.globalScope;
		}

		if (actualScope.find((v) => v instanceof ScopeVariableDeclaration && v.identifier === identifier)) {
			throw new DuplicateVariableDefinitionError(identifier);
		}
	}

	/**
	 * Asserts that the passed identifier does not exist as a built-in global.
	 * @param identifier The identifier to check.
	 */
	public builtInNotDefined(identifier: string): void {
		if (this.programCtx.builtInGlobals.find((val) => val.identifier === identifier)) {
			throw new BuiltInOverwriteError(identifier);
		}
	}

	/**
	 * Asserts that a new global with the passed identifier may be created.
	 * @param identifier The identifier to check.
	 */
	public globalCanBeRegistered(identifier: string): void {
		let identifierAlreadyExists: boolean =
			this.programCtx.globalScope.find((val) => val.identifier == identifier) !== undefined;
		let globalAlreadyExists: boolean =
			this.programCtx.builtInGlobals.find((val) => val.identifier == identifier) !== undefined;

		// If the identifier is already used or the global already exists, throw an error
		if (identifierAlreadyExists || globalAlreadyExists) {
			throw new InvalidGlobalError(identifier);
		}
	}
}

/**
 * The program context class used to represent a file in a compilation.
 *
 * In this case, even a simple stream or string are represented using this class, as a virtual "file" is created for
 * them and their environment.
 * @since 0.0.3
 */
export class KipperProgramContext {
	/**
	 * The private '_stream' that actually stores the variable data,
	 * which is returned inside the {@link this.stream}.
	 * @private
	 */
	private readonly _stream: KipperParseStream;

	/**
	 * The private '_parseTreeEntry' that actually stores the variable data,
	 * which is returned inside the {@link this.parseTreeEntry}.
	 * @private
	 */
	private readonly _antlrParseTree: CompilationUnitContext;

	/**
	 * The private '_parser' that actually stores the variable data,
	 * which is returned inside the {@link this.parser}.
	 * @private
	 */
	private readonly _parser: KipperParser;

	/**
	 * The private '_lexer' that actually stores the variable data,
	 * which is returned inside the {@link this.lexer}.
	 * @private
	 */
	private readonly _lexer: KipperLexer;

	/**
	 * The private '_builtInGlobals' that actually stores the variable data,
	 * which is returned inside the getter {@link this.builtInGlobals}.
	 * @private
	 */
	private _builtInGlobals: Array<BuiltInFunction>;

	/**
	 * The private '_processedParseTree' that actually stores the variable data,
	 * which is returned inside the {@link this.processedParseTree}.
	 * @private
	 */
	private _processedParseTree: RootFileParseToken | undefined;

	/**
	 * The private '_typescriptCode' that will store the cached code, once 'typescriptCode' has been called. This is to
	 * avoid running the function unnecessarily and generate code again, even though it already exists.
	 * @private
	 */
	private _compiledCode: Array<Array<string>> | undefined;

	/**
	 * The global scope of this program, containing all variable and function definitions
	 * @private
	 */
	private _globalScope: Array<ScopeVariableDeclaration | ScopeFunctionDeclaration>;

	/**
	 * The logger that should be used to log warnings and errors.
	 * @public
	 */
	public logger: KipperLogger;

	/**
	 * The asserter that is used to validate compiler-required truths, which, if false, will trigger corresponding errors.
	 * @public
	 * @since 0.2.0
	 */
	public assert: CompileAssert;

	constructor(
		stream: KipperParseStream,
		parseTreeEntry: CompilationUnitContext,
		parser: KipperParser,
		lexer: KipperLexer,
		logger: KipperLogger,
	) {
		this.logger = logger;
		this.assert = new CompileAssert(this);
		this._stream = stream;
		this._antlrParseTree = parseTreeEntry;
		this._parser = parser;
		this._lexer = lexer;
		this._builtInGlobals = [];
		this._globalScope = [];
		this._processedParseTree = undefined;
	}

	/**
	 * Returns the {@link KipperParseStream} which contains the raw file data.
	 */
	public get stream(): KipperParseStream {
		return this._stream;
	}

	/**
	 * Returns the start item of the parser tree (top item).
	 */
	public get antlrParseTree(): CompilationUnitContext {
		return this._antlrParseTree;
	}

	/**
	 * Returns the {@link KipperParser}, which parsed this "virtual" file and generated the {@link this.parseTreeEntry} ctx
	 * context.
	 */
	public get parser(): KipperParser {
		return this._parser;
	}

	/**
	 * Returns the {@link KipperLexer}, which lexed this "virtual" file and generated the tokens for it.
	 */
	public get lexer(): KipperLexer {
		return this._lexer;
	}

	/**
	 * Returns the {@link ANTLRErrorListener} instances, which actively listen for errors on this "virtual" file.
	 *
	 * Considering this file is only generated after the lexing and parse step, no more errors will be handled by these
	 * listeners, though they may be used to manually raise errors, so they are properly handled and formatted.
	 */
	public get errorHandler(): ANTLRErrorListener<Token>[] {
		return this.parser.getErrorListeners();
	}

	/**
	 * Returns the {@link TokenStream}, which contains all lexer tokens in a stream.
	 */
	public get tokenStream(): TokenStream {
		return this.parser.inputStream;
	}

	/**
	 * Returns the builtInGlobals registered for this Kipper program. These global functions defined in the array will be
	 * available inside the compiled Kipper program and callable using their specified identifier. This is designed to
	 * allow calling external typescript functions, which can not be natively implemented inside Kipper.
	 */
	public get builtInGlobals(): Array<BuiltInFunction> {
		return this._builtInGlobals;
	}

	/**
	 * The global scope of this file, which contains all {@link ScopeDeclaration} instances that are accessible in the
	 * entire program.
	 */
	public get globalScope(): Array<ScopeVariableDeclaration | ScopeFunctionDeclaration> {
		return this._globalScope;
	}

	/**
	 * Returns the typescript code counterpart to this "virtual" file.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be an empty array.
	 */
	public get compiledCode(): Array<Array<string>> | undefined {
		return this._compiledCode;
	}

	/**
	 * Returns the processed parse tree, which is a converted antlr4 parse tree in a customised Kipper form, which allows
	 * it to be used for semantic analysis and translation to typescript.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be {@link undefined}.
	 */
	public get processedParseTree(): RootFileParseToken | undefined {
		return this._processedParseTree;
	}

	/**
	 * Registers new builtInGlobals that are available inside the Kipper program.
	 *
	 * Globals must be registered *before* {@link compileProgram} is run to properly include them in the result code.
	 */
	public registerGlobals(newGlobals: BuiltInFunction | Array<BuiltInFunction>) {
		// If the function is not an array already, make it one
		if (!(newGlobals instanceof Array)) {
			newGlobals = [newGlobals];
		}

		// Make sure the global is valid and doesn't interfere with other identifiers
		for (let g of newGlobals) {
			this.assert.globalCanBeRegistered(g.identifier);
		}

		this._builtInGlobals = this._builtInGlobals.concat(newGlobals);
	}

	/**
	 * Translate the parse tree of this virtual file into an array of valid TypeScript code lines.
	 *
	 * Steps of compilation:
	 * - Walking through the parsed antlr4 tree - ({@link antlrParseTree})
	 * - Generating a proper Kipper parse tree, which is eligible for semantic analysis and compilation -
	 *   ({@link generateProcessedParseTree})
	 * - Running the semantic analysis - ({@link processedParseTree.semanticAnalysis})
	 * - Generating the final source code - ({@link processedParseTree.translateCtxAndChildren})
	 */
	public async compileProgram(): Promise<Array<Array<string>>> {
		// Getting the proper processed parse tree contained of proper Kipper tokens that are compilable
		this._processedParseTree = this.generateProcessedParseTree(new KipperFileListener(this));

		// Translating the context instances and children
		this.logger.info(`Translating code to TypeScript for '${this.stream.name}'.`);
		let genCode: Array<Array<string>> = await this._processedParseTree.compileCtx();

		// Append required typescript code for Kipper for the program to work properly
		genCode = this.generateRequirements().concat(genCode);

		this.logger.debug(
			`Lines of generated code: ${genCode.length}. Number of processed root items: ` +
				`${this._processedParseTree.children.length}`,
		);

		// Cache the result
		this._compiledCode = genCode;

		// Finished compilation
		return genCode;
	}

	/**
	 * Converting and processing the antlr4 parse tree into a Kipper parse tree that may be used to semantically analyse
	 * the program and compile it.
	 *
	 *
	 * @param listener The listener instance to iterate through the antlr4 parse tree
	 * @private
	 */
	private generateProcessedParseTree(listener: KipperFileListener): RootFileParseToken {
		// The walker used to go through the parse tree.
		const walker = new ParseTreeWalker();

		// Walking through the parse tree using the listener and generating the processed Kipper parse tree
		this.logger.debug(`Translating antlr4 parse tree into the corresponding Kipper parse tree '${this.stream.name}'.`);
		walker.walk(listener, this.antlrParseTree);

		const numRootItems: number = listener.kipperParseTree.children.length;
		this.logger.debug(
			`Finished generation of processed Kipper parse tree for '${this.stream.name}'.` +
				` Parsed ${numRootItems} root ${numRootItems <= 1 ? "item" : "items"}`,
		);
		return listener.kipperParseTree;
	}

	/**
	 * Generates the required code for the execution of this kipper program
	 * @private
	 */
	private generateRequirements(): Array<Array<string>> {
		let code: Array<Array<string>> = [];

		// Generating the code for the global functions
		for (let global of this._builtInGlobals) {
			code = [...code, global.handler];
		}
		return code;
	}

	/**
	 * Tries to fetch the specific identifier from the global scope.
	 */
	public getGlobalIdentifier(
		identifier: string,
	): BuiltInFunction | ScopeVariableDeclaration | ScopeFunctionDeclaration | undefined {
		return this.getGlobalFunction(identifier) ?? this.getGlobalVariable(identifier);
	}

	/**
	 * Tries to fetch a global function from the {@link this.builtInGlobals} array based on the passed {@link identifier}
	 * @param identifier The identifier of the function
	 */
	public getGlobalFunction(identifier: string): BuiltInFunction | ScopeFunctionDeclaration | undefined {
		// First try to fetch from the built-in globals. If 'undefined' is returned, try to fetch it from the 'globalScope'
		return (
			this.builtInGlobals.find((value) => {
				return value.identifier === identifier;
			}) ?? <ScopeFunctionDeclaration | undefined>this.globalScope.find((value) => {
				return value instanceof ScopeFunctionDeclaration && value.identifier == identifier;
			})
		);
	}

	/**
	 * Tries to fetch a global variable from the {@link this.globalScope} based on the passed {@link identifier}.
	 * @param identifier The identifier of the variable
	 */
	public getGlobalVariable(identifier: string): ScopeVariableDeclaration | undefined {
		// Casting the type, as the return type will always be either ScopeDeclaration or undefined
		// This is automatically the case, as we require the type inside find() to match ScopeDeclaration!
		return <ScopeVariableDeclaration | undefined>this.globalScope.find((value) => {
			return value instanceof ScopeVariableDeclaration && value.identifier == identifier;
		});
	}

	/**
	 * Adds a new declaration entry to the global scope.
	 */
	public addNewGlobalScopeEntry(token: VariableDeclaration | FunctionDefinition) {
		this.assert.builtInNotDefined(token.identifier);
		this.assert.functionIdentifierNotUsed(token.identifier);
		this.assert.variableIdentifierNotUsed(token.identifier);
		this._globalScope = this._globalScope.concat(
			token instanceof VariableDeclaration ? new ScopeVariableDeclaration(token) : new ScopeFunctionDeclaration(token),
		);
	}

	/**
	 * Return the proper {@link KipperType} if the type exists. If not raise an error.
	 * @param type The type string to check
	 * @throws UnknownTypeError If the type is unknown to Kipper!
	 * @since 0.1.2
	 */
	public verifyType(type: string): KipperType {
		this.assert.assertTypeExists(type);

		// If the type does not exist in Kipper -> raise error
		return <KipperType>type;
	}
}
