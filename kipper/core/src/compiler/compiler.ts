/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @since 0.0.1
 */
import type { TranslatedCodeLine } from "./const";
import { defaultOptimisationOptions, OptimisationOptions } from "./optimiser";
import { BuiltInFunction, kipperInternalBuiltIns, kipperRuntimeBuiltIns } from "./runtime-built-ins";
import { KipperCompileTarget } from "./target-presets";
import { CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperAntlrErrorListener } from "../antlr-error-listener";
import { KipperLexer, KipperParser, KipperParseStream, ParseData } from "./parser";
import { KipperLogger } from "../logger";
import { KipperProgramContext } from "./program-ctx";
import { KipperError } from "../errors";

/**
 * Compilation Configuration for a Kipper program. This interface will be wrapped using {@link EvaluatedCompileConfig}
 * if it's passed to {@link KipperCompiler.compile}.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * The built-in functions that will be available in a Kipper program. This option overwrites the default built-ins,
	 * if you wish to only add new built-in functions write to {@link extendBuiltIns}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	builtIns?: Array<BuiltInFunction>;

	/**
	 * Extends the {@link builtIns} with the specified items. If {@link builtIns} is undefined, then it will simply extend
	 * the default array.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	extendBuiltIns?: Array<BuiltInFunction>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	fileName?: string;

	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	target: KipperCompileTarget;

	/**
	 * Options for the {@link KipperOptimiser}.
	 * @since 0.8.0
	 */
	optimisationOptions?: OptimisationOptions;

	/**
	 * If set to true, the compiler will check for warnings and add them to {@link KipperProgramContext.warnings} and
	 * {@link KipperCompileResult.warnings}.
	 * @since 0.9.0
	 */
	warnings?: boolean;

	/**
	 * If set to true, the compiler will attempt to recover from compilation errors if they are encountered. This will
	 * mean the compiler can process multiple errors, without aborting on the first one encountered. This though can
	 * result in invalid errors being generated, as a result of other errors. (Error recovery does not include syntax
	 * error recovery and if a syntax error is encountered, the compiler aborts immediately.)
	 *
	 * Generally though, it is good to use compiler error recovery, which is why it is enabled per default and should
	 * rarely be disabled.
	 *
	 * If set to false, the compiler will stop processing on the first error that is encountered. Unlike
	 * {@link abortOnFirstError} it will *not* throw the error, but instead simple store it in
	 * {@link KipperProgramContext.errors} and {@link KipperCompileResult.errors}.
	 * @since 0.10.0
	 */
	recover?: boolean;

	/**
	 * If set to true, the compiler will throw the first error that is encountered and cancel the compilation.
	 *
	 * This per default overwrites {@link recover}.
	 * @since 0.10.0
	 */
	abortOnFirstError?: boolean;
}

/**
 * Runtime Compile config class, which implements the {@link CompileConfig} interface and is able to be
 * passed onto the {@link KipperCompiler.compile} function as a valid config argument.
 *
 * This class will store both the {@link defaults default values} and actual values for the compilation. All actual
 * values will be processed and evaluated on construction, so that every option is not undefined.
 * @since 0.1.0
 */
export class EvaluatedCompileConfig implements CompileConfig {
	/**
	 * Original user-defined {@link CompileConfig}, which may not be overwritten anymore, as the compile-arguments
	 * were already processed using the {@link constructor} of this class.
	 */
	public readonly userOptions: CompileConfig;

	/**
	 * The default configuration for this class.
	 * @since 0.2.0
	 */
	public static readonly defaults = {
		builtIns: kipperRuntimeBuiltIns, // Default built-in globals
		extendGlobals: [], // Use no custom globals per default
		fileName: "anonymous-script", // Default name if no name is specified
		optimisationOptions: defaultOptimisationOptions,
		warnings: true, // Always generate warnings by default
		recover: true, // Always try to recover from compilation errors
		abortOnFirstError: false, // This should never be enabled per default
	};

	/**
	 * The built-in functions that will be available in a Kipper program.
	 *
	 * This will be extended by {@link extendBuiltIns}. All built-in functions defined here must be implemented by the
	 * {@link target.builtInGenerator}.
	 */
	public readonly builtIns: Array<BuiltInFunction>;

	/**
	 * Extensions to the global built-in functions that should not replace the primary {@link builtIns}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	public readonly extendBuiltIns: Array<BuiltInFunction>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	public readonly fileName: string;

	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	public readonly target: KipperCompileTarget;

	/**
	 * Options for the {@link KipperOptimiser}.
	 * @since 0.8.0
	 */
	public readonly optimisationOptions: OptimisationOptions;

	/**
	 * If set to true, the compiler will check for warnings and add them to {@link KipperProgramContext.warnings} and
	 * {@link KipperCompileResult.warnings}.
	 * @since 0.9.0
	 */
	public readonly warnings: boolean;

	/**
	 * If set to true, the compiler will attempt to recover from compilation errors if they are encountered. This will
	 * lead to more errors being reported and allowing for bigger more detailed compiler logs, but can in rare cases
	 * lead to misleading errors that are caused as a result of another compilation errors.
	 *
	 * Generally though, it is considered a good practise to use compiler error recovery, which is why it is enabled per
	 * default.
	 * @since 0.10.0
	 */
	public readonly recover: boolean;

	/**
	 * Throws an error and cancels the compilation on the first error that is encountered.
	 *
	 * This per default overwrites {@link recover}.
	 * @since 0.10.0
	 */
	public readonly abortOnFirstError: boolean;

	constructor(options: CompileConfig) {
		this.userOptions = options;

		// Evaluate all config options
		this.target = options.target;
		this.builtIns = options.builtIns ?? Object.values(EvaluatedCompileConfig.defaults.builtIns);
		this.extendBuiltIns = options.extendBuiltIns ?? EvaluatedCompileConfig.defaults.extendGlobals;
		this.fileName = options.fileName ?? EvaluatedCompileConfig.defaults.fileName;
		this.optimisationOptions = options.optimisationOptions ?? EvaluatedCompileConfig.defaults.optimisationOptions;
		this.warnings = options.warnings ?? EvaluatedCompileConfig.defaults.warnings;
		this.recover = options.recover ?? EvaluatedCompileConfig.defaults.recover;
		this.abortOnFirstError = options.abortOnFirstError ?? EvaluatedCompileConfig.defaults.abortOnFirstError;
	}
}

/**
 * The result of a {@link KipperCompiler} compilation.
 * @since 0.0.3
 */
export class KipperCompileResult {
	public readonly _programCtx: KipperProgramContext;
	public readonly _result: Array<TranslatedCodeLine> | undefined;

	constructor(fileCtx: KipperProgramContext, result: Array<TranslatedCodeLine> | undefined) {
		this._programCtx = fileCtx;
		this._result = result;
	}

	/**
	 * The program context for the compilation run, which stores the content of the program and meta-data.
	 */
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The result of the compilation in TypeScript form (every line is represented as an entry in the array).
	 */
	public get result(): Array<TranslatedCodeLine> | undefined {
		return this._result;
	}

	/**
	 * Returns true, if the compilation was successful without errors.
	 * @since 0.10.0
	 */
	public get success(): boolean {
		return Boolean(this.result);
	}

	/**
	 * The list of warnings that were raised during the compilation process.
	 *
	 * Warnings are non-fatal errors, which are raised when the compiler encounters a situation that it considers to
	 * be problematic, but which do not prevent the program from being compiled.
	 * @since 0.9.0
	 */
	public get warnings(): Array<KipperError> {
		return this.programCtx.warnings;
	}

	/**
	 * The list of errors that were raised during the compilation process.
	 *
	 * Errors are fatal errors, which are raised when the compiler encounters a situation that it considers to be
	 * problematic, which prevents it from compiling the program.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		return this.programCtx.errors;
	}

	/**
	 * Creates a string from the compiled code that can be written to a file in a human-readable way.
	 * @param lineEnding The line ending for each line of the file. Default line ending is LF ('\n').
	 */
	public write(lineEnding: string = "\n"): string {
		if (this.result === undefined) {
			throw Error("Can not generate code for a failed compilation");
		}

		return this.result.map((line: TranslatedCodeLine) => line.join("") + lineEnding).join("");
	}
}

/**
 * The main Compiler class that contains the functions for parsing and compiling a file.
 *
 * This class will per default use a {@link KipperLogger} and log events while processing. To define custom behaviour
 * initialise {@link KipperLogger} yourself and overwrite {@link KipperLogger.emitHandler}.
 * @since 0.0.1
 */
export class KipperCompiler {
	/**
	 * The private field '_logger' that actually stores the variable data,
	 * which is returned inside the {@link this.logger}.
	 * @private
	 */
	private readonly _logger: KipperLogger;

	constructor(logger: KipperLogger = new KipperLogger(() => {})) {
		this._logger = logger;
	}

	/**
	 * Returns the initialised logger for this class
	 */
	public get logger(): KipperLogger {
		return this._logger;
	}

	/**
	 * Handles the input for a file-based function of the {@link KipperCompiler}.
	 * @param stream The input, which may be either a {@link String} or {@link KipperParseStream}.
	 * @param name The encoding to read the file with.
	 */
	private static async _handleStreamInput(
		stream: string | KipperParseStream,
		name: string = "anonymous-script",
	): Promise<KipperParseStream> {
		if (stream instanceof KipperParseStream) {
			return stream;
		} else {
			return new KipperParseStream({
				name: name,
				stringContent: stream,
			});
		}
	}

	/**
	 * Parses a file and generates a parse tree using the Antlr4 {@link KipperLexer} and {@link KipperParser}.
	 * @param parseStream The {@link KipperParseStream} instance that contains the required file content.
	 * @returns An object containing the parse data.
	 * @throws KipperSyntaxError If a syntax exception was encountered while running.
	 */
	public async parse(parseStream: KipperParseStream): Promise<ParseData> {
		this._logger.info(`Parsing file content.`);

		// Creating the char stream, based on the input
		const inputStream: CodePointCharStream = parseStream.charStream;

		// Error listener that will log syntax errors
		const errorListener = new KipperAntlrErrorListener(this.logger, parseStream);

		// Create the lexer and parser, which will parse this inputStream
		const lexer = new KipperLexer(inputStream);
		lexer.removeErrorListeners(); // removing all error listeners
		lexer.addErrorListener(errorListener); // adding our own error listener

		// Let the lexer run and generate a token stream
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new KipperParser(tokenStream);

		parser.removeErrorListeners(); // removing all error listeners
		parser.addErrorListener(errorListener); // adding our own error listener

		// Get the root parse item of the parse tree
		const parseTree = parser.compilationUnit();

		this._logger.debug(`Finished generation of parse tree.`);
		return { parseStream, parseTree, parser, lexer };
	}

	/**
	 * Creates a new {@link KipperProgramContext} based on the passed {@link parseData} and {@link compilerOptions}.
	 * @param parseData The parsing data of the file.
	 * @param compilerOptions The compilation config.
	 * @return The newly created {@link KipperProgramContext} instance, which contains the metadata of the compiled
	 * program.
	 * @since 0.10.0
	 */
	public async getProgramCtx(
		parseData: ParseData,
		compilerOptions: CompileConfig | EvaluatedCompileConfig,
	): Promise<KipperProgramContext> {
		const config: EvaluatedCompileConfig =
			compilerOptions instanceof EvaluatedCompileConfig ? compilerOptions : new EvaluatedCompileConfig(compilerOptions);

		// Creates a new program context using the parse data and compilation configuration
		let programCtx = new KipperProgramContext(
			parseData.parseStream,
			parseData.parseTree,
			parseData.parser,
			parseData.lexer,
			this.logger,
			config.target,
			Object.values(kipperInternalBuiltIns),
			config,
		);

		// Register all available built-in functions
		let globals = [...config.builtIns, ...config.extendBuiltIns];
		if (globals.length > 0) {
			programCtx.registerBuiltIns(globals);
		}
		this.logger.debug(`Registered ${globals.length} global function${globals.length === 1 ? "" : "s"}.`);

		return programCtx;
	}

	/**
	 * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code.
	 *
	 * This function is async to not render-block the browser and allow rendering to happen in-between the
	 * async processing.
	 * @param stream The input to compile, which may be either a {@link String} or
	 * {@link KipperParseStream}.
	 * @param compilerOptions Compilation Configuration, which defines how the compiler should handle the
	 * program and compilation.
	 * @returns The created {@link KipperCompileResult} instance.
	 * @throws {KipperError} If any syntactical, semantic or logical issues were encountered during the compilation.
	 */
	public async compile(
		stream: string | KipperParseStream,
		compilerOptions: CompileConfig,
	): Promise<KipperCompileResult> {
		// Handle the input and format it
		let inStream: KipperParseStream = await KipperCompiler._handleStreamInput(stream, compilerOptions.fileName);

		// Log as the initialisation finished
		this.logger.info(`Starting compilation for '${inStream.name}'.`);

		let parseData: ParseData;
		try {
			parseData = await this.parse(inStream);
		} catch (e) {
			// Report the failure of the compilation
			this.logger.fatal(`Failed to compile '${inStream.name}'.`);
			throw e;
		}

		// Get the program context, which will store the meta-data of the program
		const programCtx = await this.getProgramCtx(parseData, compilerOptions);

		try {
			// Start compilation of the Kipper program
			const code = await programCtx.compileProgram();

			// After the compilation is done, return the compilation result as an instance
			if (programCtx.errors.length > 0) {
				let errs = programCtx.errors.length;
				this.logger.fatal(`Encountered ${errs} error${errs === 1 ? "" : "s"} during compilation.`);
			} else {
				this.logger.info(`Compilation finished successfully without errors.`);
			}

			return new KipperCompileResult(programCtx, code);
		} catch (e) {
			// Report the failure of the compilation
			this.logger.fatal(`Failed to compile '${inStream.name}'.`);

			if (e instanceof KipperError) {
				// Add the error to the programCtx, as that should not have been done yet by the semantic analysis in the
				// RootASTNode class and CompilableASTNode classes.
				programCtx.addError(e);

				if (compilerOptions.recover === false) {
					// If an error was thrown and the user does not want to recover from it, simply abort the compilation
					// (The internal semantic analysis algorithm in RootASTNode and CompilableASTNode will have thrown this error,
					// as they noticed 'compilerOptions.recover' is false)
					return new KipperCompileResult(programCtx, undefined);
				}
			}

			// Re-throw the error in every other case
			throw e;
		}
	}

	/**
	 * Analyses the syntax of the given file. Errors will be raised as an exception and warnings logged using the
	 * {@link this.logger}.
	 *
	 * If this function executes without any errors, then the syntax check succeeded.
	 *
	 * This function is async to not render-block the browser and allow rendering to happen in-between the
	 * async processing.
	 * @param stream The input to analyse, which may be either a {@link String} or {@link KipperParseStream}.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	public async syntaxAnalyse(stream: string | KipperParseStream): Promise<void> {
		// TODO! Remove this function and replace it with a new compilation option 'noCodeGeneration'
		let inStream: KipperParseStream = await KipperCompiler._handleStreamInput(stream);

		this.logger.info(`Starting syntax check for '${inStream.name}'.`);

		// Parsing the content, if an error is found, it will be reported
		await this.parse(inStream);

		// If no exception was raised, then everything should be alright!
		this.logger.info("Finished syntax check successfully.");
	}
}
