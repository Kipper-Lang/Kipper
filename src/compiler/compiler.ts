/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.1
 */
import { CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperErrorListener } from "./error-handler";
import { KipperLexer, KipperParser } from "./parser";
import { KipperLogger } from "../logger";
import { KipperParseStream } from "./parse-stream";
import { KipperProgramContext } from "./program-ctx";
import { BuiltInFunction, builtInWebPrintFunction } from "./logic";

/**
 * Compilation Configuration for a Kipper program. This interface is wrapped using {@link RuntimeCompileConfig} and may
 * only be passed to {@link KipperCompiler.compile} if that class was used to wrap this interface.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * List of global items, which should be made available inside Kipper as a built-in. If this is set, then the
	 * default globals will be overwritten! If you wish to only extend the globals write to {@link extendGlobals}.
	 */
	globals?: Array<BuiltInFunction>;
	/**
	 * Extends the {@link globals} with the specified items. If {@link globals} is undefined, then it will simply extend
	 * the default array.
	 */
	extendGlobals?: Array<BuiltInFunction>;
}

/**
 * Runtime Compile config, which wraps the {@link CompileConfig} interface and allows this class to be passed onto
 * the {@link KipperCompiler.compile} function as a valid argument.
 *
 * This class will store both the default values and actual values for the compilation. All actual values will be
 * processed and generated on construction.
 * @since 0.1.0
 */
export class RuntimeCompileConfig {
	/**
	 * Original user-defined {@link CompileConfig}, which may not be overwritten anymore, as the compile-arguments
	 * were processed using the {@link constructor}.
	 */
	public readonly userOptions: CompileConfig;

	/**
	 * The default globals, which will be used to set {@link userOptions.globals}, if it has not been set/is
	 * {@link undefined}.
	 */
	public static readonly defaultGlobals: Array<BuiltInFunction> = [builtInWebPrintFunction];

	/**
	 * The actual globals that will be used inside a compilation with this configuration. This has been merged with the
	 * {@link userOptions.extendGlobals} argument as well, if it has been defined.
	 */
	public readonly actualGlobals: Array<BuiltInFunction>;

	constructor(options: CompileConfig) {
		this.userOptions = options;

		// Setting the actual values that will be used inside the compilation
		this.actualGlobals = (options.globals ?? RuntimeCompileConfig.defaultGlobals).concat(options.extendGlobals ?? []);
	}
}

/**
 * The result of a {@link KipperCompiler} compilation
 * @since 0.0.3
 */
export class KipperCompileResult {
	/**
	 * The private '_fileCtx' that actually stores the variable data,
	 * which is returned inside the getter 'fileCtx'.
	 * @private
	 */
	private readonly _programCtx: KipperProgramContext;

	/**
	 * The private '_result' that actually stores the variable data,
	 * which is returned inside the getter 'result'.
	 * @private
	 */
	private readonly _result: Array<string>;

	constructor(fileCtx: KipperProgramContext, result: Array<string>) {
		this._programCtx = fileCtx;
		this._result = result;
	}

	/**
	 * The program context for the compilation run, which stores the content of the program and meta-data.
	 */
	get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The result of the compilation in TypeScript form (every line is represented as an entry in the array).
	 */
	get result(): Array<string> {
		return this._result;
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
	 * The private '_errorListener' that actually stores the variable data,
	 * which is returned inside the getter 'errorListener'.
	 * @private
	 */
	private readonly _errorListener: KipperErrorListener<any>;

	/**
	 * The private '_logger' that actually stores the variable data,
	 * which is returned inside the getter 'logger'.
	 * @private
	 */
	private readonly _logger: KipperLogger;

	constructor(logger: KipperLogger = new KipperLogger(() => {})) {
		// using a general error listener for the entire compiler instance
		this._errorListener = new KipperErrorListener<any>();
		this._logger = logger;
	}

	/**
	 * Returns the {@link KipperErrorListener} that is responsible for handling antlr4 errors
	 */
	get errorListener(): KipperErrorListener<any> {
		return this._errorListener;
	}

	/**
	 * Returns the initialised logger for this class
	 */
	get logger(): KipperLogger {
		return this._logger;
	}

	/**
	 * Handles the input for a file-based function of the {@link KipperCompiler}.
	 * @param stream The input, which may be either a {@link String} or {@link KipperParseStream}.
	 * @param name The encoding to read the file with.
	 */
	private static _handleStreamInput(
		stream: string | KipperParseStream,
		name: string = "anonymous-script",
	): KipperParseStream {
		if (stream instanceof KipperParseStream) {
			return stream;
		} else {
			return new KipperParseStream(name, stream);
		}
	}

	/**
	 * Parses a file and generates the antlr4 tree ({@link CompilationUnitContext}), using
	 * {@link KipperParser.compilationUnit} (the highest item of the tree / entry point to the tree).
	 * @param {KipperParseStream} parseStream The {@link KipperParseStream} instance that contains the required string
	 * content.
	 * @returns {CompilationUnitContext} The generated and parsed {@link CompilationUnitContext}.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	async parse(parseStream: KipperParseStream): Promise<KipperProgramContext> {
		this._logger.info(`Parsing '${parseStream.name}'`);

		// Creating the char stream, based on the input
		const inputStream: CodePointCharStream = parseStream.charStream;

		// Create the lexer and parser, which will parse this inputStream
		const lexer = new KipperLexer(inputStream);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new KipperParser(tokenStream);

		parser.removeErrorListeners(); // removing all error listeners
		parser.addErrorListener(this._errorListener); // adding our own error listener

		// Parse the input, where `compilationUnit` is whatever entry point you defined
		return (() => {
			let result = parser.compilationUnit();
			this._logger.debug(`Finished generation of parse tree for file '${parseStream.name}'`);
			return new KipperProgramContext(parseStream, result, parser, lexer, this.logger);
		})();
	}

	/**
	 * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code.
	 * @param stream {string | KipperParseStream} The input to compile, which may be either a {@link String} or
	 * {@link KipperParseStream}.
	 * @param config {BuiltInFunction[]} Compilation Configuration, which defines how the compiler should handle the
	 * program and compilation. This uses per default {@link RuntimeCompileConfig} with an empty interface as user args
	 * (Default values will be used).
	 * @returns The created {@link KipperCompileResult} instance.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	async compile(
		stream: string | KipperParseStream,
		config: RuntimeCompileConfig = new RuntimeCompileConfig({}),
	): Promise<KipperCompileResult> {
		let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream);

		this.logger.info(`Starting compilation for '${inStream.name}'`);

		// The file context storing the metadata for the "virtual file"
		const fileCtx: KipperProgramContext = await this.parse(inStream);

		// If there are globals to register, register them
		let globals = config.actualGlobals;
		if (globals !== undefined && globals.length > 0) {
			this.logger.debug(`Registering the following globals for the Kipper program '${inStream.name}':`);
			for (let item of globals) {
				this.logger.debug(` - ${item.name} -> ${item.returnType}`);
			}
			fileCtx.registerGlobals(globals);
		} else {
			this.logger.debug(`Registered no globals for the Kipper program '${inStream.name}'`);
		}

		// Translate and compile the code
		this.logger.info(`Starting compilation for '${inStream.name}'`);
		const code = fileCtx.compileProgram();

		this.logger.info(`Finished compilation - Returning compilation result`);

		// Return the result for the compilation
		return new KipperCompileResult(fileCtx, code);
	}

	/**
	 * Analyses the syntax of the given file. Errors will be raised as an exception and warnings logged using the
	 * {@link this.logger}.
	 * @param stream The input to analyse, which may be either a {@link String} or {@link KipperParseStream}.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	async syntaxAnalyse(stream: string | KipperParseStream): Promise<void> {
		let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream);

		this.logger.info(`Starting syntax check for '${inStream.name}'`);

		// Parsing the content, if an error is found, it will be reported
		await this.parse(inStream);

		// If no exception was raised, then everything should be alright!
		this.logger.info("Finished syntax check successfully!");
	}
}
