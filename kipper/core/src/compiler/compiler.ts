/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @since 0.0.1
 */
import type { TranslatedCodeLine } from "./const";
import { kipperInternalBuiltInFunctions } from "./runtime-built-ins";
import { CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperAntlrErrorListener } from "../antlr-error-listener";
import { KipperLexer, KipperParser, KipperParseStream, ParseData } from "./parser";
import { KipperLogger } from "../logger";
import { KipperProgramContext } from "./program-ctx";
import { KipperError } from "../errors";
import { CompileConfig, EvaluatedCompileConfig } from "./compile-config";

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
			Object.values(kipperInternalBuiltInFunctions),
			config,
		);

		// Register all available built-in functions
		let globals = [...config.builtInFunctions, ...config.extendBuiltInFunctions];
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
				programCtx.reportError(e);

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
