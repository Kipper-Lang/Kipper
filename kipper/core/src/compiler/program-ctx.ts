/**
 * A file context for a single Kipper file, which may be used for parsing or compiling a Kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { ParseTreeWalker } from "antlr4ts/tree";
import { ANTLRErrorListener, Token, TokenStream } from "antlr4ts";
import { CompilationUnitContext, KipperLexer, KipperParser, KipperParseStream } from "./parser";
import {
	CompilableParseToken,
	FunctionDeclaration,
	KipperFileListener,
	RootFileParseToken,
	VariableDeclaration,
	KipperFunction,
	ScopeFunctionDeclaration,
	ScopeVariableDeclaration,
	TranslatedCodeLine,
} from "./semantics";
import { BuiltInFunction } from "./runtime-built-ins";
import { KipperLogger } from "../logger";
import { UndefinedSemanticsError } from "../errors";
import { KipperCompileTarget } from "./compile-target";
import { KipperSemanticChecker } from "./semantics/semantic-checker";
import { KipperTypeChecker } from "./semantics";
import { KipperTargetBuiltInGenerator } from "./translation";

/**
 * The program context class used to represent a program for a compilation.
 * @since 0.0.3
 */
export class KipperProgramContext {
	/**
	 * The private field '_stream' that actually stores the variable data,
	 * which is returned inside the {@link this.stream}.
	 * @private
	 */
	private readonly _stream: KipperParseStream;

	/**
	 * The private field '_parseTreeEntry' that actually stores the variable data,
	 * which is returned inside the {@link this.parseTreeEntry}.
	 * @private
	 */
	private readonly _antlrParseTree: CompilationUnitContext;

	/**
	 * The private field '_parser' that actually stores the variable data,
	 * which is returned inside the {@link this.parser}.
	 * @private
	 */
	private readonly _parser: KipperParser;

	/**
	 * The private field '_lexer' that actually stores the variable data,
	 * which is returned inside the {@link this.lexer}.
	 * @private
	 */
	private readonly _lexer: KipperLexer;

	/**
	 * The private field '_builtInGlobals' that actually stores the variable data,
	 * which is returned inside the getter {@link this.builtInGlobals}.
	 * @private
	 */
	private _builtInGlobals: Array<BuiltInFunction>;

	/**
	 * The private field '_processedParseTree' that actually stores the variable data,
	 * which is returned inside the {@link this.processedParseTree}.
	 * @private
	 */
	private _processedParseTree: RootFileParseToken | undefined;

	/**
	 * The private field '_compiledCode' that will store the cached code, once 'compileProgram' has been called. This is
	 * to avoid running the function unnecessarily and generate code again, even though it already exists.
	 * @private
	 */
	private _compiledCode: Array<Array<string>> | undefined;

	/**
	 * The global scope of this program, containing all variable and function definitions
	 * @private
	 */
	private _globalScope: Array<ScopeVariableDeclaration | ScopeFunctionDeclaration>;

	/**
	 * Represents the compilation translation for the program. This contains the
	 * {@link KipperTargetSemanticAnalyser}, which performs semantic analysis
	 * specific for the translation, and {@link KipperTargetCodeGenerator}, which
	 * translates the Kipper code into a translation language.
	 */
	public readonly target: KipperCompileTarget;

	/**
	 * The logger that should be used to log warnings and errors.
	 * @public
	 */
	public logger: KipperLogger;

	/**
	 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
	 * invalid use of tokens is detected.
	 * @since 0.7.0
	 */
	private readonly _semanticChecker: KipperSemanticChecker;

	/**
	 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an invalid
	 * use of types and identifiers is detected.
	 * @since 0.7.0
	 */
	private readonly _typeChecker: KipperTypeChecker;

	constructor(
		stream: KipperParseStream,
		parseTreeEntry: CompilationUnitContext,
		parser: KipperParser,
		lexer: KipperLexer,
		logger: KipperLogger,
		target: KipperCompileTarget,
	) {
		this.logger = logger;
		this.target = target;
		this._semanticChecker = new KipperSemanticChecker(this);
		this._typeChecker = new KipperTypeChecker(this);
		this._stream = stream;
		this._antlrParseTree = parseTreeEntry;
		this._parser = parser;
		this._lexer = lexer;
		this._builtInGlobals = [];
		this._globalScope = [];
		this._processedParseTree = undefined;
	}

	/**
	 * Asserts a certain truth.
	 * @param ctx The token context item.
	 * @returns The {@link this._semanticChecker default semantic checker instance}, which contains the functions that
	 * may be used to check semantic integrity and cohesion.
	 */
	public semanticCheck(ctx: CompilableParseToken<any> | undefined): KipperSemanticChecker {
		// Set the active traceback data on the item
		this._semanticChecker.setTracebackData(
			ctx,
			ctx?.antlrRuleCtx.start.line,
			ctx?.antlrRuleCtx.start.charPositionInLine,
		);
		return this._semanticChecker;
	}

	/**
	 * Performs a type check on {@link CompilableParseToken the ctx argument}.
	 * @param ctx The token context item.
	 * @returns The {@link this._typeChecker default type checker instance}, which contains the functions that may be used
	 * to check certain types.
	 */
	public typeCheck(ctx: CompilableParseToken<any> | undefined): KipperTypeChecker {
		// Set the active traceback data on the item
		this._typeChecker.setTracebackData(ctx, ctx?.antlrRuleCtx.start.line, ctx?.antlrRuleCtx.start.charPositionInLine);
		return this._typeChecker;
	}

	/**
	 * Returns the identifier of the file.
	 */
	public get fileName(): string {
		return this.stream.name;
	}

	/**
	 * Returns the file path of the file.
	 */
	public get filePath(): string {
		return this.stream.filePath;
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
			// Use line 1 and col 1, as this is a pre-processing error.
			this.semanticCheck(undefined).globalCanBeRegistered(g.identifier);
		}

		this._builtInGlobals = this._builtInGlobals.concat(newGlobals);
	}

	/**
	 * Runs the semantic analysis for this {@link KipperProgramContext program}. This function will log debugging messages
	 * and warnings using the {@link this.logger} and throw errors in case any are encountered while running.
	 *
	 * If {@link this.processedParseTree} is undefined, then it will automatically run
	 * {@link this.generateProcessedParseTree} to generate it.
	 * @since 0.6.0
	 */
	public async semanticAnalysis(): Promise<void> {
		if (!this._processedParseTree) {
			this._processedParseTree = await this.generateProcessedParseTree(new KipperFileListener(this));
		}

		return await this._processedParseTree.semanticAnalysis();
	}

	/**
	 * Translates the {@link CompilableParseToken} contained in the {@link this.processedParseTree}. This function should
	 * only be used if {@link semanticAnalysis} has been run before, otherwise it will throw an
	 * {@link UndefinedSemanticsError}.
	 *
	 * If {@link this.processedParseTree} is undefined, then it will automatically run
	 * {@link this.generateProcessedParseTree} to generate it.
	 * @since 0.6.0
	 */
	public async translate(): Promise<Array<TranslatedCodeLine>> {
		if (!this._processedParseTree) {
			throw new UndefinedSemanticsError();
		}

		let genCode: Array<TranslatedCodeLine> = await this._processedParseTree.translate();

		// Append required typescript code for Kipper for the program to work properly
		return (await this.generateRequirements()).concat(genCode);
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
	public async compileProgram(): Promise<Array<TranslatedCodeLine>> {
		// Getting the proper processed parse tree contained of proper Kipper tokens that are compilable
		this._processedParseTree = await this.generateProcessedParseTree(new KipperFileListener(this));

		// Running the semantic analysis
		this.logger.info(`Analysing '${this.stream.name}'.`);
		await this.semanticAnalysis();

		// Translating the context instances and children
		this.logger.info(`Translating '${this.stream.name}' to '${this.target.targetName}'.`);
		let genCode: Array<TranslatedCodeLine> = await this.translate();

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
	private async generateProcessedParseTree(listener: KipperFileListener): Promise<RootFileParseToken> {
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
	private async generateRequirements(): Promise<Array<Array<string>>> {
		let code: Array<TranslatedCodeLine> = [];

		// Generating the code for the global functions
		for (let globalSpec of this._builtInGlobals) {
			code = [...code, ...(await this.target.builtInGenerator.getHandlerFunction(globalSpec.identifier)(globalSpec))];
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
	public getGlobalFunction(identifier: string): KipperFunction | undefined {
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
	 * @param identifier The identifier of the variable.
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
	 * @param token The token that should be added.
	 * @param identifier The identifier of the global variable.
	 */
	public async addGlobalVariable(
		token: VariableDeclaration | FunctionDeclaration,
		identifier: string,
	): Promise<ScopeVariableDeclaration | ScopeFunctionDeclaration> {
		this.semanticCheck(token).builtInNotDefined(identifier);

		// Check that the identifier is not used by some other definition and that there has not been a previous definition.
		if (token instanceof VariableDeclaration) {
			// May not redeclare a variable
			this.semanticCheck(token).functionIdentifierNotDeclared(identifier);
			this.semanticCheck(token).variableIdentifierNotDeclared(identifier);
		} else {
			this.semanticCheck(token).variableIdentifierNotDeclared(identifier);
			this.semanticCheck(token).functionIdentifierNotDefined(identifier);
		}

		const declaration =
			token instanceof VariableDeclaration ? new ScopeVariableDeclaration(token) : new ScopeFunctionDeclaration(token);
		this._globalScope = this._globalScope.concat(declaration);
		return declaration;
	}
}
