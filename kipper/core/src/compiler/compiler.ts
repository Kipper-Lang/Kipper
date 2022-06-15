/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.1
 */
import { CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperAntlrErrorListener } from "./antlr-error-listener";
import { KipperLexer, KipperParser } from "./parser";
import { KipperLogger, LogLevel } from "../logger";
import { KipperParseStream } from "./parser";
import { KipperProgramContext } from "./program-ctx";
import { type BuiltInFunction, kipperInternalBuiltIns, kipperRuntimeBuiltIns } from "./runtime-built-ins";
import { KipperCompileTarget } from "./compile-target";
import { TypeScriptTarget } from "../targets/typescript";
import type { TranslatedCodeLine } from "./semantics";
import { defaultOptimisationOptions, OptimisationOptions } from "./optimiser";

/**
 * Compilation Configuration for a Kipper program. This interface will be wrapped using {@link EvaluatedCompileOptions}
 * if it's passed to {@link KipperCompiler.compile}.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * The built-in functions that will be available in a Kipper program. This option overwrites the default built-ins,
	 * if you wish to only add new built-in functions write to {@link extendBuiltIns}.
	 */
	builtIns?: Array<BuiltInFunction>;
	/**
	 * Extends the {@link builtIns} with the specified items. If {@link builtIns} is undefined, then it will simply extend
	 * the default array.
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
	target?: KipperCompileTarget;
	/**
	 * Options for the {@link KipperOptimiser}.
	 * @since 0.8.0
	 */
	optimisationOptions?: OptimisationOptions;
}

/**
 * Runtime Compile config class, which implements the {@link CompileConfig} interface and is able to be
 * passed onto the {@link KipperCompiler.compile} function as a valid config argument.
 *
 * This class will store both the {@link defaults default values} and actual values for the compilation. All actual
 * values will be processed and evaluated on construction, so that every option is not undefined.
 * @since 0.1.0
 */
export class EvaluatedCompileOptions implements CompileConfig {
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
		extendGlobals: [], // No globals
		fileName: "anonymous-script", // Default name if no name is specified.
		target: new TypeScriptTarget(), // Default target is TypeScript.
		optimisationOptions: defaultOptimisationOptions,
	};

	/**, // Include all built-ins to allow the user to modify the functions in the target language.
	 * The built-in functions that will be available in a Kipper program.
	 *
	 * This will be extended by {@link extendBuiltIns}.
	 */
	public readonly builtIns: Array<BuiltInFunction>;

	/**
	 * Extensions to the global built-in functions that should not replace the primary {@link builtIns}.
	 */
	public readonly extendBuiltIns: Array<BuiltInFunction>;

	public readonly fileName: string;

	public readonly target: KipperCompileTarget;

	public readonly optimisationOptions: OptimisationOptions;

	constructor(options: CompileConfig) {
		this.userOptions = options;

		// Evaluate all config options
		this.builtIns = options.builtIns ?? Object.values(EvaluatedCompileOptions.defaults.builtIns);
		this.extendBuiltIns = options.extendBuiltIns ?? EvaluatedCompileOptions.defaults.extendGlobals;
		this.fileName = options.fileName ?? EvaluatedCompileOptions.defaults.fileName;
		this.target = options.target ?? EvaluatedCompileOptions.defaults.target;
		this.optimisationOptions = options.optimisationOptions ?? EvaluatedCompileOptions.defaults.optimisationOptions;
	}
}

/**
 * The result of a {@link KipperCompiler} compilation.
 * @since 0.0.3
 */
export class KipperCompileResult {
	/**
	 * The private field '_fileCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.fileCtx}.
	 * @private
	 */
	private readonly _programCtx: KipperProgramContext;

	/**
	 * The private field '_result' that actually stores the variable data,
	 * which is returned inside the {@link this.result}.
	 * @private
	 */
	private readonly _result: Array<Array<string>>;

	constructor(fileCtx: KipperProgramContext, result: Array<Array<string>>) {
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
	public get result(): Array<Array<string>> {
		return this._result;
	}

	/**
	 * Creates a string from the compiled code that can be written to a file in a human-readable way.
	 * @param lineEnding The line ending for each line of the file. Default line ending is LF ('\n').
	 */
	public write(lineEnding: string = "\n"): string {
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
			return new KipperParseStream(stream, name);
		}
	}

	/**
	 * Parses a file and generates the antlr4 tree ({@link CompilationUnitContext}), using
	 * {@link KipperParser.compilationUnit} (the highest item of the tree / entry point to the tree).
	 *
	 * This function is async to not render-block the browser and allow rendering to happen in-between the
	 * async processing.
	 * @param parseStream The {@link KipperParseStream} instance that contains the required string
	 * content.
	 * @param target The {@link KipperCompileTarget} which specifies the compilation translation for the
	 * language. Per default this is {@link TypeScriptTarget}.
	 * @returns The generated and parsed {@link CompilationUnitContext}.
	 * @throws KipperSyntaxError If a syntax exception was encountered while running.
	 */
	public async parse(
		parseStream: KipperParseStream,
		target: KipperCompileTarget = new TypeScriptTarget(),
	): Promise<KipperProgramContext> {
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

		// Parse the input, where `compilationUnit` is whatever entry point you defined
		return (() => {
			let result = parser.compilationUnit();
			this._logger.debug(`Finished generation of parse tree for file '${parseStream.name}'.`);
			return new KipperProgramContext(
				parseStream,
				result,
				parser,
				lexer,
				this.logger,
				target,
				Object.values(kipperInternalBuiltIns),
			);
		})();
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
		compilerOptions: CompileConfig = new EvaluatedCompileOptions({}),
	): Promise<KipperCompileResult> {
		// Handle compiler options
		const config: EvaluatedCompileOptions =
			compilerOptions instanceof EvaluatedCompileOptions
				? compilerOptions
				: new EvaluatedCompileOptions(compilerOptions);

		// Handle the input and format it
		let inStream: KipperParseStream = await KipperCompiler._handleStreamInput(stream, compilerOptions.fileName);

		// Log as the initialisation finished
		this.logger.info(`Starting compilation for '${inStream.name}'.`);

		try {
			// The file context storing the metadata for the "virtual file"
			const fileCtx: KipperProgramContext = await this.parse(inStream);

			// If there are builtIns to register, register them
			let globals = [...config.builtIns, ...config.extendBuiltIns];
			if (globals.length > 0) {
				fileCtx.registerBuiltIns(globals);
			}
			this.logger.debug(
				`Registered ${globals.length} global function${globals.length === 1 ? "" : "s"} for the program '${
					inStream.name
				}'.`,
			);

			// Start compilation of the Kipper program
			const code = await fileCtx.compileProgram(config.optimisationOptions);

			// After the compilation is done, return the compilation result as an instance
			this.logger.info(`Compilation finished successfully without errors.`);
			return new KipperCompileResult(fileCtx, code);
		} catch (e) {
			// Report the failure of the compilation
			this.logger.reportError(LogLevel.FATAL, `Failed to compile '${inStream.name}'.`);

			// Re-throw error
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
		let inStream: KipperParseStream = await KipperCompiler._handleStreamInput(stream);

		this.logger.info(`Starting syntax check for '${inStream.name}'.`);

		// Parsing the content, if an error is found, it will be reported
		await this.parse(inStream);

		// If no exception was raised, then everything should be alright!
		this.logger.info("Finished syntax check successfully.");
	}
}
