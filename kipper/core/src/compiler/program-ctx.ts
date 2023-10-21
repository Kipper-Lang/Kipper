/**
 * A file context for a single source code file, which stores the important information about the contents of the file.
 *
 * This may be used as an interface for semantically analysing its contents (the AST) and generating code for the
 * target language.
 * @since 0.0.3
 */
import type { ANTLRErrorListener, Token, TokenStream } from "antlr4ts";
import type { CompilationUnitContext, KipperLexer, KipperParser, KipperParseStream } from "./parser";
import type { BuiltInFunction, BuiltInVariable, InternalFunction } from "./runtime-built-ins";
import type { KipperCompileTarget } from "./target-presets";
import type { TranslatedCodeLine } from "./const";
import type { KipperWarning } from "../warnings";
import type { CompilableASTNode, Expression, RootASTNode } from "./ast";
import { KipperFileASTGenerator } from "./ast";
import type { EvaluatedCompileConfig } from "./compile-config";
import { GlobalScope, InternalReference, KipperSemanticChecker, KipperTypeChecker, Reference } from "./analysis";
import { KipperError, KipperInternalError, UndefinedSemanticsError } from "../errors";
import { KipperOptimiser, OptimisationOptions } from "./optimiser";
import { KipperLogger, LogLevel } from "../logger";
import { KipperWarningIssuer } from "./analysis/analyser/warning-issuer";
import { ParseTreeWalker } from "antlr4ts/tree";

/**
 * The program context class used to represent a program for a compilation.
 *
 * This stores all related data for a compilation, such as the AST, the semantic data, the type data, the scope tree,
 * etc. and will handle all issues according to the {@link this.compileConfig compileConfig}.
 * @since 0.0.3
 */
export class KipperProgramContext {
	private readonly _stream: KipperParseStream;

	private readonly _antlrParseTree: CompilationUnitContext;

	private readonly _errors: Array<KipperError>;

	private readonly _warnings: Array<KipperWarning>;

	private readonly _builtInFunctionReferences: Array<Reference<BuiltInFunction>>;

	private readonly _builtInVariableReferences: Array<Reference<BuiltInVariable>>;

	private readonly _internalReferences: Array<InternalReference<InternalFunction>>;

	private _abstractSyntaxTree: RootASTNode | undefined;

	/**
	 * The field compiledCode that will store the cached code, once 'compileProgram' has been called. This is
	 * to avoid running the function unnecessarily and generate code again, even though it already exists.
	 * @private
	 */
	private _compiledCode: Array<TranslatedCodeLine> | undefined;

	/**
	 * The global scope of this program, containing all variable and function declarations
	 * @private
	 */
	private readonly _globalScope: GlobalScope;

	/**
	 * Represents the compilation translation target for the program. This contains the:
	 * - {@link KipperTargetSemanticAnalyser}, which performs semantic analysis specific for the target.
	 * - {@link KipperTargetCodeGenerator}, which translates the Kipper code (AST) into another language.
	 * - {@link KipperTargetBuiltInGenerator}, which generates the internal and built-in functions for the target.
	 */
	public readonly target: KipperCompileTarget;

	/**
	 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
	 * invalid use of AST nodes is detected.
	 * @since 0.7.0
	 */
	public readonly semanticChecker: KipperSemanticChecker;

	/**
	 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an invalid
	 * use of types and identifiers is detected.
	 * @since 0.7.0
	 */
	public readonly typeChecker: KipperTypeChecker;

	/**
	 * Kipper Code Optimiser, which performs
	 * @since 0.8.0
	 */
	public readonly optimiser: KipperOptimiser;

	/**
	 * The warning issuer, which is used to check for certain conditions and issues if needed.
	 * @since 0.10.0
	 */
	public readonly warningIssuer: KipperWarningIssuer;

	/**
	 * Returns the {@link KipperParser}, which parsed this program and generated the
	 * {@link this.antlrParseTree parse tree}.
	 */
	public readonly parser: KipperParser;

	/**
	 * Returns the {@link KipperLexer}, which lexed this program and generated the tokens for it.
	 * @private
	 */
	public readonly lexer: KipperLexer;

	/**
	 * The compilation config for this program.
	 * @since 0.10.0
	 * @private
	 */
	public readonly compileConfig: EvaluatedCompileConfig;

	/**
	 * The logger that should be used to log warnings and errors.
	 */
	public logger: KipperLogger;

	/**
	 * Contains all the internal functions, which are used by Kipper to provide internal functionality. These
	 * internal built-ins are commonly used to provide the logic for keywords and other internal logic.
	 *
	 * This contains *every* internal functions that also must be implemented by the {@link this.target target's}
	 * {@link KipperTargetBuiltInGenerator}.
	 * @since 0.8.0
	 */
	public readonly internals: Array<InternalFunction>;

	/**
	 * Returns the built-in global functions registered for this Kipper program. These global functions defined in the
	 * array will be available in the Kipper program and callable using their specified identifier.
	 *
	 * This is designed to allow calling external compiler-generated functions, which are natively implemented in the
	 * {@link this.target target language}
	 * @private
	 * @since 0.8.0
	 */
	public readonly builtInFunctions: Array<BuiltInFunction>;

	/**
	 * Returns the built-in global variables registered for this Kipper program. These global variables defined in the
	 * array will be available in the Kipper program and can be accessed using their specified identifier.
	 *
	 * This is designed to allow accessing external compiler-generated variables, which are natively implemented in the
	 * {@link this.target target language}.
	 * @private
	 */
	public readonly builtInVariables: Array<BuiltInVariable>;

	constructor(
		stream: KipperParseStream,
		parseTreeEntry: CompilationUnitContext,
		parser: KipperParser,
		lexer: KipperLexer,
		logger: KipperLogger,
		target: KipperCompileTarget,
		internals: Array<InternalFunction>,
		compileConfig: EvaluatedCompileConfig,
		semanticChecker?: KipperSemanticChecker,
		typeChecker?: KipperTypeChecker,
		optimiser?: KipperOptimiser,
		warningIssuer?: KipperWarningIssuer,
	) {
		this.logger = logger;
		this.target = target;
		this.internals = internals;
		this.semanticChecker = semanticChecker ?? new KipperSemanticChecker(this);
		this.typeChecker = typeChecker ?? new KipperTypeChecker(this);
		this.optimiser = optimiser ?? new KipperOptimiser(this);
		this.warningIssuer = warningIssuer ?? new KipperWarningIssuer(this);
		this.parser = parser;
		this.lexer = lexer;
		this.compileConfig = compileConfig;
		this.builtInVariables = [];
		this.builtInFunctions = [];
		this._stream = stream;
		this._antlrParseTree = parseTreeEntry;
		this._globalScope = new GlobalScope(this);
		this._abstractSyntaxTree = undefined;
		this._builtInFunctionReferences = [];
		this._builtInVariableReferences = [];
		this._internalReferences = [];
		this._warnings = [];
		this._errors = [];

		// Register all built-in functions
		const globalFunctions = [...compileConfig.builtInFunctions, ...compileConfig.extendBuiltInFunctions];
		this.registerBuiltInFunctions(globalFunctions);
		this.logger.debug(
			`Registered ${globalFunctions.length} global function${globalFunctions.length === 1 ? "" : "s"}.`,
		);

		// Register all built-in variables
		const globalVariables = [...compileConfig.builtInVariables, ...compileConfig.extendBuiltInVariables];
		this.registerBuiltInVariables(globalVariables);
		this.logger.debug(
			`Registered ${globalVariables.length} global variable${globalVariables.length === 1 ? "" : "s"}.`,
		);
	}

	/**
	 * Asserts a certain truth.
	 * @param ctx The AST node context item.
	 * @returns The {@link this.semanticChecker semantic checker instance}, which contains the functions that may be used
	 * to check semantic integrity and cohesion.
	 */
	public semanticCheck(ctx: CompilableASTNode | undefined): KipperSemanticChecker {
		// Set the active traceback data on the item
		this.semanticChecker.setTracebackData({ ctx });
		return this.semanticChecker;
	}

	/**
	 * Performs a type check on {@link CompilableASTNode the ctx argument}.
	 * @param ctx The AST node context item.
	 * @returns The {@link this.typeChecker type checker instance}, which contains the functions that may be used to check
	 * certain types.
	 */
	public typeCheck(ctx: CompilableASTNode | undefined): KipperTypeChecker {
		// Set the active traceback data on the item
		this.typeChecker.setTracebackData({ ctx });
		return this.typeChecker;
	}

	/**
	 * Performs a warning check on {@link CompilableASTNode the ctx argument}.
	 * @param ctx The AST node context item.
	 * @returns The {@link this.warningIssuer warning issuer instance}, which contains the functions that may be used to
	 * issue warnings.
	 * @param ctx
	 */
	public warningCheck(ctx: CompilableASTNode | undefined): KipperWarningIssuer {
		// Set the active traceback data on the item
		this.warningIssuer.setTracebackData({ ctx });
		return this.warningIssuer;
	}

	/**
	 * Returns the file name of the Kipper file.
	 */
	public get fileName(): string {
		return this.stream.name;
	}

	/**
	 * Returns the path of the Kipper file.
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
	 * The root node of the Antlr4 generated parse tree.
	 *
	 * This parse tree can be used in a {@link KipperFileASTGenerator} to generate an abstract syntax tree.
	 */
	public get antlrParseTree(): CompilationUnitContext {
		return this._antlrParseTree;
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
	 * The global scope of this file, which contains all {@link ScopeDeclaration} instances that are accessible in the
	 * entire program.
	 */
	public get globalScope(): GlobalScope {
		return this._globalScope;
	}

	/**
	 * Returns the cached compiled code.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be an empty array.
	 */
	public get compiledCode(): Array<TranslatedCodeLine> | undefined {
		return this._compiledCode;
	}

	/**
	 * A list of all references to internal functions. This is used to determine which internal functions are used and
	 * which aren't.
	 *
	 * This is primarily used for optimisations in KipperOptimiser, by applying tree-shaking to unused internal functions,
	 * so they will not be generated.
	 * @since 0.8.0
	 */
	public get internalReferences(): Array<InternalReference<InternalFunction>> {
		return this._internalReferences;
	}

	/**
	 * A list of all references to built-in functions. This is used to determine which built-ins are used and which
	 * aren't.
	 *
	 * This is primarily used for optimisations in KipperOptimiser, by applying tree-shaking to unused built-in functions,
	 * so they will not be generated.
	 * @since 0.10.0
	 */
	public get builtInFunctionReferences(): Array<Reference<BuiltInFunction>> {
		return this._builtInFunctionReferences;
	}

	/**
	 * A list of all references to built-in variables. This is used to determine which built-ins are used and which
	 * aren't.
	 *
	 * This is primarily used for optimisations in KipperOptimiser, by applying tree-shaking to unused built-in variables,
	 * so they will not be generated.
	 * @since 0.10.0
	 */
	public get builtInVariableReferences(): Array<Reference<BuiltInVariable>> {
		return this._builtInVariableReferences;
	}

	/**
	 * Returns the abstract syntax tree, which is a converted antlr4 parse tree in a specialised Kipper form, which allows
	 * it to be used for semantic analysis and translation to other languages.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be {@link undefined}.
	 */
	public get abstractSyntaxTree(): RootASTNode | undefined {
		return this._abstractSyntaxTree;
	}

	/**
	 * The list of warnings that were raised during the compilation process.
	 *
	 * Warnings are non-fatal errors, which are raised when the compiler encounters a situation that it considers to be
	 * problematic, which do not prevent the program from being compiled.
	 * @since 0.9.0
	 */
	public get warnings(): Array<KipperWarning> {
		return this._warnings;
	}

	/**
	 * The list of errors that were raised during the compilation process.
	 *
	 * Errors are fatal errors, which are raised when the compiler encounters a situation that it considers to be
	 * problematic, which prevents it from compiling the program.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		return this._errors;
	}

	/**
	 * Returns true if the file has any errors, false otherwise.
	 *
	 * This is equivalent to checking if the length of {@link errors} is greater than 0.
	 * @since 0.10.0
	 */
	public get hasFailed(): boolean {
		return this.errors.length > 0;
	}

	/**
	 * Returns an array of all built-in functions and variables.
	 * @since 0.10.0
	 */
	public get builtIns(): Array<BuiltInFunction | BuiltInVariable> {
		return [...this.builtInFunctions, ...this.builtInVariables];
	}

	/**
	 * Adds a new warning to the list of warnings for this file and reports the warning to the logger.
	 * @param warning The warning to add to the list of reported warnings of this program.
	 * @since 0.9.0
	 */
	public reportWarning(warning: KipperWarning): void {
		this.warnings.push(warning);
		this.logger.reportWarning(warning);
	}

	/**
	 * Adds a new error to the list of errors for this file and reports the error to the logger.
	 * @param error The error to add to the list of reported errors of this program.
	 * @since 0.10.0
	 */
	public reportError(error: KipperError): void {
		this.errors.push(error);
		this.logger.reportError(LogLevel.ERROR, error);

		// If the node is defined, add the error to the list of errors caused by the node
		if (error.tracebackData.errorNode) {
			error.tracebackData.errorNode.addError(error);
		}
	}

	/**
	 * Converting and processing the antlr4 parse tree into a Kipper parse tree that may be used to semantically analyse
	 * the program and compile it.
	 * @param listener The listener instance to walk through the antlr4 parse tree. If undefined a new default one
	 * is created based on the metadata from this {@link KipperProgramContext}.
	 * @private
	 * @since 0.8.0
	 * @see {@link compileProgram}
	 */
	private async generateAbstractSyntaxTree(listener?: KipperFileASTGenerator): Promise<RootASTNode> {
		if (listener === undefined) {
			listener = new KipperFileASTGenerator(this, this.antlrParseTree);
		} else if (listener.rootNode.programCtx !== this) {
			throw new Error("Field 'listener.rootNode.programCtx' must match this instance");
		}

		try {
			// The walker used to go through the parse tree.
			const walker = new ParseTreeWalker();

			// Walking through the parse tree using the listener and generating the processed Kipper parse tree
			this.logger.debug(`Translating antlr4 parse tree into the corresponding Kipper AST.`);
			walker.walk(listener, this.antlrParseTree);
		} catch (e) {
			if (e instanceof KipperError) {
				// Log the Kipper error
				this.logger.reportError(LogLevel.ERROR, e);
			}
			throw e;
		}

		/* istanbul ignore if: internal errors should rarely happen if ever, and only in very very bad situations */
		if (!listener.rootNode) {
			throw new KipperInternalError("Missing AST root node in listener instance");
		}

		// Caching the result
		this._abstractSyntaxTree = listener.rootNode;

		const countNodes: number = listener.rootNode.children.length;
		this.logger.debug(`Finished generation of Kipper AST.`);
		this.logger.debug(`Parsed ${countNodes} top-level ${countNodes <= 1 ? "node" : "nodes"}.`);
		return listener.rootNode;
	}

	/**
	 * Runs the semantic analysis for this {@link KipperProgramContext program}. This function will log debugging messages
	 * and warnings using the {@link this.logger logger of this instance} and throw errors in case any logical issues are
	 * detected.
	 *
	 * If {@link this.processedParseTree} is undefined, then it will automatically run
	 * {@link this.generateAbstractSyntaxTree} to generate it.
	 * @since 0.6.0
	 * @see {@link compileProgram}
	 */
	public async semanticAnalysis(): Promise<void> {
		try {
			if (!this._abstractSyntaxTree) {
				this._abstractSyntaxTree = await this.generateAbstractSyntaxTree();
			}

			await this._abstractSyntaxTree.semanticAnalysis();
		} catch (e) {
			if (e instanceof KipperError) {
				// Log the Kipper error
				this.logger.reportError(LogLevel.ERROR, e);
			}
			throw e;
		}

		// After finishing the semantic analysis, check whether errors were generated
		if (this.errors) {
			return;
		}
	}

	/**
	 * Processes the {@link abstractSyntaxTree} and generates a new optimised one based on the {@link options}.
	 * @param options The options for the optimisation. If undefined, the {@link defaultOptimisationOptions} are used.
	 * @since 0.8.0
	 * @see {@link compileProgram}
	 */
	public async optimise(options?: OptimisationOptions): Promise<RootASTNode> {
		if (!this.abstractSyntaxTree) {
			// TODO! Change this error to a more fitting one
			throw new UndefinedSemanticsError();
		}

		try {
			const result = await this.optimiser.optimise(this.abstractSyntaxTree, options);

			// Caching the result
			this._abstractSyntaxTree = result;

			return result;
		} catch (e) {
			if (e instanceof KipperError) {
				// Log the Kipper error
				this.logger.reportError(LogLevel.ERROR, e);
			}
			throw e;
		}
	}

	/**
	 * Translates the {@link CompilableASTNode} contained in the {@link this.processedParseTree}. This function should
	 * only be used if {@link semanticAnalysis} has been run before, otherwise it will throw an
	 * {@link UndefinedSemanticsError}.
	 *
	 * If {@link this.processedParseTree} is undefined, then it will automatically run
	 * {@link this.generateAbstractSyntaxTree} to generate it.
	 * @since 0.6.0
	 * @see {@link compileProgram}
	 */
	public async translate(): Promise<Array<TranslatedCodeLine>> {
		if (!this.abstractSyntaxTree) {
			// TODO! Change this error to a more fitting one
			throw new UndefinedSemanticsError();
		}

		try {
			return await this.abstractSyntaxTree.translate();
		} catch (e) {
			if (e instanceof KipperError) {
				// Log the Kipper error
				this.logger.reportError(LogLevel.ERROR, e);
			}

			// Re-throw the error
			throw e;
		}
	}

	/**
	 * Translate the parse tree of this virtual file into the {@link target target language}.
	 *
	 * Steps of compilation:
	 * - Generating a Kipper abstract syntax tree - ({@link generateAbstractSyntaxTree})
	 * - Semantically analysing the AST - ({@link semanticAnalysis})
	 * - Optimising the AST - ({@link optimise})
	 * - Generating the final source code for the specified target - ({@link translate})
	 */
	public async compileProgram(): Promise<Array<TranslatedCodeLine> | undefined> {
		// Getting the processed AST tree
		this._abstractSyntaxTree = await this.generateAbstractSyntaxTree();

		// Running the semantic analysis for the AST
		this.logger.info(`Analysing semantics.`);
		await this.semanticAnalysis();

		// If the semantic analysis failed, return an empty array
		if (this.hasFailed) {
			return undefined;
		}

		// Optimising the AST
		this.logger.info(`Optimising file content.`);
		await this.optimise(this.compileConfig.optimisationOptions);

		// Translating the context instances and children
		this.logger.info(`Generating code for target '${this.target.targetName}'.`);
		let genCode: Array<TranslatedCodeLine> = await this.translate();

		this.logger.debug(`Lines of generated code: ${genCode.length}.`);
		this.logger.debug(`Number of processed root items: ${this._abstractSyntaxTree.children.length}.`);

		// Cache the result
		this._compiledCode = genCode;

		// Finished compilation
		return genCode;
	}

	/**
	 * Generates the required code for the execution of this Kipper program.
	 *
	 * This primarily includes the Kipper built-ins, which require
	 * {@link KipperTargetBuiltInGenerator target-specific generation}.
	 * @returns The generated code for the requirements.
	 * @since 0.8.0
	 * @private
	 * @see {@link KipperTargetBuiltInGenerator}
	 */
	public async generateRequirements(): Promise<Array<Array<string>>> {
		let code: Array<TranslatedCodeLine> = [];

		// Generating the code for the builtin wrappers
		for (const internalSpec of this.internals) {
			this.logger.debug(`Generating code for internal function '${internalSpec.identifier}'.`);
			this.semanticCheck(undefined).globalCanBeGenerated(internalSpec.identifier);

			// Fetch the function for handling this built-in
			const func: (func: InternalFunction, programCtx: KipperProgramContext) => Promise<Array<TranslatedCodeLine>> =
				Reflect.get(this.target.builtInGenerator, internalSpec.identifier);
			code = [...code, ...(await func(internalSpec, this))];
		}

		// Generating the code for the global functions
		for (const builtInSpec of this.builtIns) {
			this.logger.debug(`Generating code for built-in '${builtInSpec.identifier}'.`);
			this.semanticCheck(undefined).globalCanBeGenerated(builtInSpec.identifier);

			// Fetch the function for handling this built-in
			const func: (
				func: BuiltInFunction | BuiltInVariable,
				programCtx: KipperProgramContext,
			) => Promise<Array<TranslatedCodeLine>> = Reflect.get(this.target.builtInGenerator, builtInSpec.identifier);
			code = [...code, ...(await func(builtInSpec, this))];
		}
		return code;
	}

	/**
	 * Searches for a built-in function with the specific {@link identifier} from the {@link builtIns}.
	 *
	 * If the identifier is unknown, this function will return undefined.
	 * @param identifier The identifier to search for.
	 * @since 0.8.0
	 * @see {@link getBuiltInVariable}
	 */
	public getBuiltInFunction(identifier: string): BuiltInFunction | undefined {
		return this.builtInFunctions.find((funcSpec) => funcSpec.identifier === identifier);
	}

	/**
	 * Searches for a built-in variable with the specific {@link identifier} from the {@link builtIns}.
	 *
	 * If the identifier is unknown, this function will return undefined.
	 * @param identifier The identifier to search for.
	 * @since 0.10.0
	 * @see {@link getBuiltInFunction}
	 */
	public getBuiltInVariable(identifier: string): BuiltInVariable | undefined {
		return this.builtInVariables.find((varSpec) => varSpec.identifier === identifier);
	}

	/**
	 * Registers new builtIns that are available inside the Kipper program.
	 *
	 * Globals must be registered *before* {@link compileProgram} is run to properly include them in the result code.
	 *
	 * If {@link builtInFunctions} is an empty array, this function will do nothing.
	 * @param builtInFunctions The built-in functions to register. May be a single value or an array.
	 * @since 0.8.0
	 * @see {@link registerBuiltInVariables}
	 */
	public registerBuiltInFunctions(builtInFunctions: BuiltInFunction | Array<BuiltInFunction>) {
		builtInFunctions = Array.isArray(builtInFunctions) ? builtInFunctions : [builtInFunctions];

		// Make sure the global is valid and doesn't interfere with other identifiers
		// If an error occurs, line 1 and col 1 will be used, as the ctx is undefined.
		for (let g of builtInFunctions) {
			this.semanticCheck(undefined).globalCanBeRegistered(g.identifier);
		}
		this.builtInFunctions.push(...builtInFunctions);
	}

	/**
	 * Registers new built-in variables that should be available inside the Kipper program.
	 *
	 * Globals must be registered *before* {@link compileProgram} is run to properly include them in the result code.
	 *
	 * If {@link builtInVariables} is an empty array, this function will do nothing.
	 * @param builtInVariables The built-in variables to register. May be a single value or an array.
	 * @since 0.10.0
	 * @see {@link registerBuiltInFunctions}
	 */
	public registerBuiltInVariables(builtInVariables: BuiltInVariable | Array<BuiltInVariable>) {
		builtInVariables = Array.isArray(builtInVariables) ? builtInVariables : [builtInVariables];

		// Make sure the global is valid and doesn't interfere with other identifiers
		for (let g of builtInVariables) {
			// If an error occurs, line 1 and col 1 will be used, as the ctx is undefined.
			this.semanticCheck(undefined).globalCanBeRegistered(g.identifier);
		}
		this.builtInVariables.push(...builtInVariables);
	}

	/**
	 * Clears all built-in functions. This removes any built-in functions that were registered for the target.
	 * @since 0.10.0
	 */
	public clearBuiltInFunctions() {
		this.builtInFunctions.splice(0);
	}

	/**
	 * Clears all built-in variables. This removes any built-in functions that were registered for the target.
	 * @since 0.10.0
	 */
	public clearBuiltInVariables() {
		this.builtInVariables.splice(0);
	}

	/**
	 * Adds a new built-in reference.
	 * @param exp The expression referencing {@link refTarget}.
	 * @param refTarget The built-in identifier referenced.
	 * @since 0.8.0
	 */
	public addBuiltInReference(exp: Expression, refTarget: BuiltInFunction | BuiltInVariable) {
		const ref = {
			refTarget: refTarget,
			srcExpr: exp,
		} satisfies Reference<BuiltInFunction | BuiltInVariable>;

		if ("valueType" in ref.refTarget) {
			this._builtInVariableReferences.push(<Reference<BuiltInVariable>>ref);
		} else {
			this._builtInFunctionReferences.push(<Reference<BuiltInFunction>>ref);
		}
	}

	/**
	 * Adds a new internal reference.
	 * @param exp The expression referencing {@link ref}.
	 * @param ref The internal identifier referenced.
	 * @since 0.8.0
	 */
	public addInternalReference(exp: Expression, ref: InternalFunction) {
		this._internalReferences.push({
			refTarget: ref,
			srcExpr: exp,
		});
	}
}
