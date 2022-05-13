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
	KipperArithmeticOperator,
	KipperFunction,
	KipperRef,
	KipperType,
	kipperTypes,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeVariableDeclaration,
	TranslatedCodeLine,
} from "./logic";
import { KipperLogger, LogLevel } from "../logger";
import {
	CompilableParseToken,
	CompoundStatement,
	Expression,
	FunctionDeclaration,
	ParameterDeclaration,
	RootFileParseToken,
	VariableDeclaration,
} from "./tokens";
import {
  BuiltInOverwriteError,
  FunctionDefinitionAlreadyExistsError,
  IdentifierAlreadyUsedByFunctionError,
  IdentifierAlreadyUsedByVariableError,
  InvalidArgumentTypeError,
  InvalidGlobalError,
  KipperError,
  KipperNotImplementedError,
  UndefinedIdentifierError,
  UndefinedSemanticsError,
  UnknownFunctionIdentifierError,
  UnknownIdentifier,
  UnknownTypeError,
  UnknownVariableIdentifierError,
  VariableDefinitionAlreadyExistsError,
} from "../errors";
import { KipperCompileTarget } from "./target";

/**
 * CompileAssert namespace containing tools for validating certain compile-required truths, which, if false, will
 * trigger corresponding errors.
 * @since 0.2.0
 */
export class CompileAssert {
	public readonly programCtx: KipperProgramContext;

	private line: number | undefined;

	private col: number | undefined;

	private ctx: CompilableParseToken<any> | undefined;

	constructor(programCtx: KipperProgramContext) {
		this.programCtx = programCtx;
	}

	/**
	 * Sets the traceback related line and column info.
	 * @param ctx The token context.
	 * @param line The line that is being processed at the moment.
	 * @param col The column that is being processed at the moment.
	 * @since 0.3.0
	 */
	public setTracebackData(ctx?: CompilableParseToken<any>, line?: number, col?: number): void {
		this.line = line;
		this.col = col;
		this.ctx = ctx;
	}

	/**
	 * Updates the error and adds the proper traceback data, and returns it.
	 *
	 * This function also automatically logs the error.
	 * @param error The error to update.
	 * @returns The Kipper error.
	 */
	private assertError(error: KipperError): KipperError {
		// Update error metadata
		error.setMetadata({
			location: { line: this.line ?? 1, col: this.col ?? 1 },
			filePath: this.programCtx.filePath,
			tokenSrc: undefined,
		});
		error.antlrCtx = this.ctx?.antlrRuleCtx;

		// Log the error
		this.programCtx.logger.reportError(LogLevel.ERROR, error);

		return error;
	}

	/**
	 * Modifies the metadata for a {@link KipperNotImplementedError}
	 * @param error The {@link KipperNotImplementedError} instance.
	 * @since 0.6.0
	 */
	public notImplementedError(error: KipperNotImplementedError): KipperNotImplementedError {
		return this.assertError(error);
	}

	/**
	 * Asserts that the passed type identifier exists.
	 * @param type The type to check.
	 * @since 0.5.0
	 */
	public typeExists(type: string): void {
		if (kipperTypes.find((val) => val === type) === undefined) {
			throw this.assertError(new UnknownTypeError(type));
		}
	}

	/**
	 * Checks whether an identifier is declared. If the variable is defined it will also pass.
	 * @param identifier The identifier to check for.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.6.0
	 */
	public identifierIsDeclared(identifier: string, scope?: CompoundStatement): void {
		const val = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalIdentifier(identifier);
		if (!val) {
			throw this.assertError(new UnknownIdentifier(identifier));
		}

		const isBuiltinDeclared = "handler" in val; // BuiltInFunction 'handler' property -> always declared/defined
		const isDeclarationDeclared = val instanceof ScopeDeclaration; // User-defined -> always declared, sometimes defined
		if (!isBuiltinDeclared && !isDeclarationDeclared) {
			throw this.assertError(new UnknownIdentifier(identifier));
		}
	}

	/**
	 * Checks whether an identifier is defined. If the variable is declared it will also fail!
	 * @param identifier The identifier to check for.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.6.0
	 */
	public identifierIsDefined(identifier: string, scope?: CompoundStatement): void {
		const val = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalIdentifier(identifier);
		if (!val) {
			throw this.assertError(new UnknownIdentifier(identifier));
		}

		const isBuiltinDefined = "handler" in val; // BuiltInFunction 'handler' property -> always defined
		const isDeclarationDefined = val instanceof ScopeDeclaration && val.isDefined; // User-defined -> may be defined
		if (!isBuiltinDefined && !isDeclarationDefined) {
			throw this.assertError(new UndefinedIdentifierError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier is defined.
	 * @param identifier The identifier of the function.
	 * @deprecated
	 */
	public functionIsDefined(identifier: string): void {
		console.warn("'CompileAssert.functionIsDefined' is deprecated, replace with 'identifierIsDefined'");
		if (!this.programCtx.getGlobalFunction(identifier)) {
			throw this.assertError(new UnknownFunctionIdentifierError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier is defined.
	 * @param identifier The identifier of the variable.
	 * @deprecated
	 */
	public variableIsDefined(identifier: string): void {
		console.warn("'CompileAssert.variableIsDefined' is deprecated, replace with 'identifierIsDefined'");
		if (!this.programCtx.getGlobalVariable(identifier)) {
			throw this.assertError(new UnknownVariableIdentifierError(identifier));
		}
	}

	/**
	 * Asserts that the passed function identifier has not been declared yet.
	 * @param identifier The identifier of the function.
	 */
	public functionIdentifierNotDeclared(identifier: string): void {
		if (this.programCtx.getGlobalFunction(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been declared yet.
	 * @param identifier The identifier of the variable.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 */
	public variableIdentifierNotDeclared(identifier: string, scope?: CompoundStatement): void {
		const check = (v: { identifier: string }) => v instanceof ScopeVariableDeclaration && v.identifier === identifier;

		// Always check in the global scope
		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}

		// Also check in the local scope if it was passed
		if (scope !== undefined && scope?.localScope.find(check)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been defined yet.
	 * @param identifier The identifier to check for in the global scope.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 */
	public variableIdentifierNotDefined(identifier: string, scope?: CompoundStatement): void {
		const check = (v: { identifier: string }) => {
			// Return true only if the identifier match and the variable is DEFINED
			return v instanceof ScopeVariableDeclaration && v.identifier === identifier && v.isDefined;
		};

		// Always check in the global scope
		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new VariableDefinitionAlreadyExistsError(identifier));
		}

		// Also check in the local scope if it was passed
		if (scope !== undefined && scope?.localScope.find(check)) {
			throw this.assertError(new VariableDefinitionAlreadyExistsError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been defined yet.
	 * @param identifier The identifier to check for in the global scope.
	 */
	public functionIdentifierNotDefined(identifier: string): void {
		// Always check in the global scope
		const check = (v: { identifier: string }) => {
			// Return true only if the identifier match and the function is DEFINED
			return v instanceof ScopeFunctionDeclaration && v.identifier === identifier && v.isDefined;
		};

		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new FunctionDefinitionAlreadyExistsError(identifier));
		}
	}

	/**
	 * Checks whether the argument type matches the type of the argument value passed.
	 *
	 * @param arg The parameter that the value was passed to.
	 * @param receivedType The type that was received.
	 * @example
	 * call print("x"); // <-- Types must match
	 * @since 0.3.0
	 */
	public argumentTypesMatch(arg: ParameterDeclaration, receivedType: KipperType): void {
		const semanticData = arg.ensureSemanticDataExists();

		if (semanticData.type !== receivedType) {
			throw this.assertError(new InvalidArgumentTypeError(semanticData.identifier, semanticData.type, receivedType));
		}
	}

	/**
	 * Checks whether the assignment of the expression to the variable is valid.
	 * @todo Implement assignment checks!
	 */
	// eslint-disable-next-line no-unused-vars
	private assignmentValid(assignVar: ScopeVariableDeclaration, exp: Expression<any>): void {}

	/**
	 * Checks whether the passed type allows the arithmetic operation.
	 * @param exp1 The first expression.
	 * @param exp2 The second expression.
	 * @param op The arithmetic operation that is performed.
	 * @todo Implement arithmetic checks!
	 */
	private arithmeticExpressionValid(exp1: Expression<any>, exp2: Expression<any>, op: KipperArithmeticOperator): void {}

	/**
	 * Asserts that the passed identifier does not exist as a built-in global.
	 * @param identifier The identifier to check.
	 */
	public builtInNotDefined(identifier: string): void {
		if (this.programCtx.builtInGlobals.find((val) => val.identifier === identifier)) {
			throw this.assertError(new BuiltInOverwriteError(identifier));
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
			throw this.assertError(new InvalidGlobalError(identifier));
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownFunctionIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 */
	public getExistingReference(identifier: string, scope?: CompoundStatement): KipperRef {
		const ref = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalIdentifier(identifier);
		if (ref === undefined) {
			throw this.assertError(new UnknownIdentifier(identifier));
		} else {
			return ref;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownFunctionIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 */
	public getExistingVariable(identifier: string, scope?: CompoundStatement): ScopeVariableDeclaration {
		const variable = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalVariable(identifier);
		if (variable === undefined) {
			throw this.assertError(new UnknownIdentifier(identifier));
		} else {
			return variable;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownFunctionIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @since 0.5.0
	 */
	public getExistingFunction(identifier: string): KipperFunction {
		const func = this.programCtx.getGlobalFunction(identifier);
		if (func === undefined) {
			throw this.assertError(new UnknownIdentifier(identifier));
		} else {
			return func;
		}
	}
}

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
	 * Represents the compilation target for the program. This contains the
	 * {@link KipperTargetSemanticAnalyser}, which performs semantic analysis
	 * specific for the target, and {@link KipperTargetCodeGenerator}, which
	 * translates the Kipper code into a target language.
	 */
	public readonly target: KipperCompileTarget;

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
	private readonly _assert: CompileAssert;

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
		this._assert = new CompileAssert(this);
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
	 * @returns The default asserter that has the line and col arguments set as traceback info in case an exception
	 * is encountered.
	 */
	public assert(ctx: CompilableParseToken<any> | undefined): CompileAssert {
		// Set the active traceback data on the item
		this._assert.setTracebackData(ctx, ctx?.antlrRuleCtx.start.line, ctx?.antlrRuleCtx.start.charPositionInLine);
		return this._assert;
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
			this.assert(undefined).globalCanBeRegistered(g.identifier);
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
    this.logger.info(`Running the semantic analysis for '${this.stream.name}'.`);
    await this.semanticAnalysis();

		// Translating the context instances and children
		this.logger.info(`Translating code to '${this.target.targetName}' for '${this.stream.name}'.`);
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
	 * @param token The token that should be added.
	 */
	public addNewGlobalScopeEntry(token: VariableDeclaration | FunctionDeclaration): void {
		const semanticData = token.ensureSemanticDataExists();
		this.assert(token).builtInNotDefined(semanticData.identifier);

		// Check that the identifier is not used by some other definition and that there has not been a previous definition.
		if (token instanceof VariableDeclaration) {
			this.assert(token).functionIdentifierNotDeclared(semanticData.identifier);
			this.assert(token).variableIdentifierNotDefined(semanticData.identifier);
		} else {
			this.assert(token).variableIdentifierNotDeclared(semanticData.identifier);
			this.assert(token).functionIdentifierNotDefined(semanticData.identifier);
		}

		this._globalScope = this._globalScope.concat(
			token instanceof VariableDeclaration ? new ScopeVariableDeclaration(token) : new ScopeFunctionDeclaration(token),
		);
	}
}
