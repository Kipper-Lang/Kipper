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
import { KipperParseStream } from "./parse-stream";
import { KipperProgramContext } from "./program-ctx";
import { BuiltInFunction, defaultNodeBuiltIns, defaultWebBuiltIns, isBrowser } from "./logic";
import { KipperCompileTarget } from "./target";
import { TypeScriptTarget } from "./target/typescript";

/**
 * Compilation Configuration for a Kipper program. This interface will be wrapped using {@link CompilerEvaluatedOptions}
 * if it's passed to {@link KipperCompiler.compile}.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * List of global items, which should be made available inside Kipper as a built-in. If this is set, then the
	 * default builtInGlobals will be overwritten! If you wish to only extend the builtInGlobals write to {@link extendGlobals}.
	 */
	globals?: Array<BuiltInFunction>;
	/**
	 * Extends the {@link globals} with the specified items. If {@link globals} is undefined, then it will simply extend
	 * the default array.
	 */
	extendGlobals?: Array<BuiltInFunction>;
	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	fileName?: string;
	/**
	 * The target languages for the compilation.
	 * @since 0.5.0
	 */
	target?: KipperCompileTarget;
}

/**
 * Runtime Compile config, which wraps the {@link CompileConfig} interface and allows this class to be passed onto
 * the {@link KipperCompiler.compile} function as a valid argument.
 *
 * This class will store both the default values and actual values for the compilation. All actual values will be
 * processed and generated on construction.
 * @since 0.1.0
 */
export class CompilerEvaluatedOptions implements CompileConfig {
	/**
	 * Original user-defined {@link CompileConfig}, which may not be overwritten anymore, as the compile-arguments
	 * were processed using the {@link constructor}.
	 */
	public readonly userOptions: CompileConfig;

	/**
	 * The default configuration for this class.
	 * @since 0.2.0
	 */
	public static readonly defaults = {
		globals: isBrowser ? defaultWebBuiltIns : defaultNodeBuiltIns, // Assume node if it's not a browser
		extendGlobals: [],
		fileName: "anonymous-script",
		target: new TypeScriptTarget(),
	};

	/**
	 * The actual builtInGlobals that will be used inside a compilation with this configuration. This has been merged
	 * with the {@link userOptions.extendGlobals} argument as well, if it has been defined.
	 */
	public readonly globals: Array<BuiltInFunction>;

	/**
	 * Extensions to the globals that should not replace the main {@link globals} array.
	 */
	public readonly extendGlobals: Array<BuiltInFunction>;

	public readonly fileName: string;

	public readonly target: KipperCompileTarget;

	constructor(options: CompileConfig) {
		this.userOptions = options;

		// Write all items
		this.globals = options.globals ?? CompilerEvaluatedOptions.defaults.globals;
		this.extendGlobals = options.extendGlobals ?? CompilerEvaluatedOptions.defaults.extendGlobals;
		this.fileName = options.fileName ?? CompilerEvaluatedOptions.defaults.fileName;
		this.target = options.target ?? CompilerEvaluatedOptions.defaults.target;
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
	 * @param lineEnding The line ending for each line of the file.
	 */
	public write(lineEnding: string = "\n"): string {
		let genCode: string = "";
		for (let line of this.result) {
			for (let token of line) {
				genCode = genCode.concat(token);
			}
			genCode = genCode.concat(lineEnding);
		}
		return genCode;
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
	 * @param target The {@link KipperCompileTarget} which specifies the compilation target for the
	 * language. Per default this is {@link TypeScriptTarget}.
	 * @returns The generated and parsed {@link CompilationUnitContext}.
	 * @throws KipperSyntaxError If a syntax exception was encountered while running.
	 */
	public async parse(
		parseStream: KipperParseStream,
		target: KipperCompileTarget = new TypeScriptTarget(),
	): Promise<KipperProgramContext> {
		this._logger.info(`Parsing '${parseStream.name}'.`);

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
			return new KipperProgramContext(parseStream, result, parser, lexer, this.logger, target);
		})();
	}

	/**
	 * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code.
	 *
	 * This function is async to not render-block the browser and allow rendering to happen in-between the
	 * async processing.
	 * @param stream {string | KipperParseStream} The input to compile, which may be either a {@link String} or
	 * {@link KipperParseStream}.
	 * @param compilerOptions {BuiltInFunction[]} Compilation Configuration, which defines how the compiler should handle the
	 * program and compilation. This uses per default {@link CompilerEvaluatedOptions} with an empty interface as user args
	 * (Default values will be used).
	 * @returns The created {@link KipperCompileResult} instance.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	public async compile(
		stream: string | KipperParseStream,
		compilerOptions: CompileConfig = new CompilerEvaluatedOptions({}),
	): Promise<KipperCompileResult> {
		// Handle compiler options
		const config: CompilerEvaluatedOptions =
			compilerOptions instanceof CompilerEvaluatedOptions
				? compilerOptions
				: new CompilerEvaluatedOptions(compilerOptions);

		// Handle the input and format it
		let inStream: KipperParseStream = await KipperCompiler._handleStreamInput(stream, compilerOptions.fileName);

		// Log as the initialisation finished
		this.logger.info(`Starting compilation for '${inStream.name}'.`);

		try {
			// The file context storing the metadata for the "virtual file"
			const fileCtx: KipperProgramContext = await this.parse(inStream);

			// If there are builtInGlobals to register, register them
			let globals = [...config.globals, ...config.extendGlobals];
			if (globals.length > 0) {
				fileCtx.registerGlobals(globals);
			}
			this.logger.debug(
				`Registered ${globals.length} global function${globals.length <= 1 ? "s" : ""} for the Kipper program '${
					inStream.name
				}'.`,
			);

			// Start actual async compilation
			const code = await fileCtx.compileProgram();

			// After the code is done, return the compilation result as an instance
			this.logger.info(`Compilation finished successfully!`);
			return new KipperCompileResult(fileCtx, code);
		} catch (e) {
			this.logger.reportError(LogLevel.FATAL, `Failed to compile '${inStream.name}'.`);
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
