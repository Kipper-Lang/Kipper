/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @since 0.0.1
 */
import type { InternalFunction } from "./runtime-built-ins";
import { kipperInternalBuiltInFunctions } from "./runtime-built-ins";
import type { CodePointCharStream, Token } from "antlr4ts";
import { CommonTokenStream } from "antlr4ts";
import { KipperAntlrErrorListener } from "../antlr-error-listener";
import type { LexerParserData } from "./lexer-parser";
import { KipperLexer, KipperParser, KipperFileStream } from "./lexer-parser";
import { KipperLogger } from "../logger";
import { KipperProgramContext } from "./program-ctx";
import type { KipperSyntaxError } from "../errors";
import { KipperError } from "../errors";
import type { CompileConfig } from "./compile-config";
import { EvaluatedCompileConfig } from "./compile-config";
import { KipperCompileResult } from "./compile-result";
import * as Channel from "./lexer-parser/lexer-channels";
import { PragmaProcessor } from "./pragma-processor";

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
	 * An array of all internal functions that are available to the compiler
	 * @since 0.10.0
	 * @private
	 */
	private get internalFunctions(): Array<InternalFunction> {
		return Object.values(kipperInternalBuiltInFunctions);
	}

	/**
	 * Handles the input for a file-based function of the {@link KipperCompiler}.
	 * @param stream The input, which may be either a {@link String} or {@link KipperFileStream}.
	 * @param name The encoding to read the file with.
	 */
	private async handleStreamInput(
		stream: string | KipperFileStream,
		name: string = "anonymous-script",
	): Promise<KipperFileStream> {
		if (stream instanceof KipperFileStream) {
			return stream;
		} else {
			return new KipperFileStream({
				name: name,
				stringContent: stream,
			});
		}
	}

	/**
	 * Returns all tokens for a specific channel from the token stream.
	 * @param tokenStream The token stream to get the tokens from.
	 * @param channel The channel to get the tokens from.
	 * @private
	 * @since 0.11.0
	 */
	private getTokensForChannel(tokenStream: CommonTokenStream, channel: number): Array<Token> {
		const tokens: Array<Token> = [];
		for (let i = 0; i < tokenStream.size; i++) {
			const token = tokenStream.get(i);
			if (token.channel === channel) {
				tokens.push(token);
			}
		}
		return tokens;
	}

	/**
	 * Parses a file and generates a parse tree using the Antlr4 {@link KipperLexer} and {@link KipperParser}.
	 * @param parseStream The {@link KipperFileStream} instance that contains the required file content.
	 * @returns An object containing the parse data.
	 * @throws KipperSyntaxError If a syntax exception was encountered while running.
	 */
	public async parse(parseStream: KipperFileStream): Promise<LexerParserData> {
		this._logger.info(`Parsing file content.`);

		// Creating the char stream, based on the input
		const inputStream: CodePointCharStream = parseStream.charStream;

		// Error listener that will log syntax errors
		const errorListener = new KipperAntlrErrorListener(this.logger, parseStream);

		// Create the lexer and parser, which will parse this inputStream
		const lexer = new KipperLexer(inputStream);
		lexer.removeErrorListeners(); // removing all error listeners
		lexer.addErrorListener(errorListener); // adding our own error listener

		// Let the lexer run and generate a token stream for each channel
		const tokenStream = new CommonTokenStream(lexer);
		tokenStream.fill();

		const channels: LexerParserData["channels"] = {
			ALL: tokenStream,
			DEFAULT_TOKEN_CHANNEL: this.getTokensForChannel(tokenStream, Channel.DEFAULT_TOKEN_CHANNEL),
			HIDDEN: this.getTokensForChannel(tokenStream, Channel.HIDDEN),
			COMMENT: this.getTokensForChannel(tokenStream, Channel.COMMENT),
			PRAGMA: this.getTokensForChannel(tokenStream, Channel.PRAGMA),
		};

		const parser = new KipperParser(channels.ALL);
		parser.removeErrorListeners(); // removing all error listeners
		parser.addErrorListener(errorListener); // adding our own error listener

		// Get the root parse item of the parse tree
		const parseTree = parser.compilationUnit();

		this._logger.debug(`Finished generation of parse tree.`);
		return { channels, fileStream: parseStream, parseTree, parser, lexer };
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
		parseData: LexerParserData,
		compilerOptions: CompileConfig | EvaluatedCompileConfig,
	): Promise<KipperProgramContext> {
		const config: EvaluatedCompileConfig =
			compilerOptions instanceof EvaluatedCompileConfig ? compilerOptions : new EvaluatedCompileConfig(compilerOptions);

		// Creates a new program context using the parse data and compilation configuration
		return new KipperProgramContext(parseData, this.logger, config.target, this.internalFunctions, config);
	}

	/**
	 * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code.
	 *
	 * This function is async to not render-block the browser and allow rendering to happen in-between the
	 * async processing.
	 * @param stream The input to compile, which may be either a {@link String} or
	 * {@link KipperFileStream}.
	 * @param compilerOptions Compilation Configuration, which defines how the compiler should handle the
	 * program and compilation.
	 * @returns The created {@link KipperCompileResult} instance.
	 * @throws {KipperError} If any syntactical, semantic or logical issues were encountered during the compilation.
	 */
	public async compile(
		stream: string | KipperFileStream,
		compilerOptions: CompileConfig,
	): Promise<KipperCompileResult> {
		// Handle the input and format it
		let inStream: KipperFileStream = await this.handleStreamInput(stream, compilerOptions.fileName);

		// Log as the initialisation finished
		this.logger.info(`Starting compilation for '${inStream.name}'.`);

		let parseData: LexerParserData | undefined;
		let programCtx: KipperProgramContext | undefined;
		try {
			parseData = await this.parse(inStream);

			// Process any pragmas which were registered
			const pragmaModifiedCompilerOptions = await PragmaProcessor.process(compilerOptions, parseData.channels.PRAGMA);

			programCtx = await this.getProgramCtx(parseData, pragmaModifiedCompilerOptions);

			// Start compilation of the Kipper program
			this.logger.debug("Creating ctx object for compilation metadata and semantic data");
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
				this.logger.debug(`Detected thrown KipperError ${e.name}. Attempting error handling.`);
				if (programCtx !== undefined) {
					// Add the error to the programCtx, as that should not have been done yet by the semantic analysis in the
					// RootASTNode class and CompilableASTNode classes.
					programCtx.reportError(e);
				}

				if (compilerOptions.abortOnFirstError) {
					// If 'abortOnFirstError' is set, then we abort the compilation and throw the error
					// This ignores whatever error it is (syntax error, semantic error etc.) and simply throws it
					throw e as KipperError;
				} else if (programCtx === undefined) {
					// If there is no programCtx, then there was a syntaxError, which automatically crashes the compilation
					// That means we will simply return the result with the given syntax errors
					return new KipperCompileResult(programCtx, undefined, [<KipperSyntaxError>e]);
				} else if (!compilerOptions.recover) {
					// If an error was thrown and the user does not want to recover from it, simply abort the compilation
					// (The internal semantic analysis algorithm in RootASTNode and CompilableASTNode will have thrown this error,
					// as they noticed 'compilerOptions.recover' is false)
					return new KipperCompileResult(programCtx);
				}

				// If none of the cases were hit that means there was very likely a bug -> report it as a warning
				this.logger.warn(`Failed to process thrown KipperError ${e.name}. Report this bug to the developers!`);
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
	 * @param stream The input to analyse, which may be either a {@link String} or {@link KipperFileStream}.
	 * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
	 */
	public async syntaxAnalyse(stream: string | KipperFileStream): Promise<void> {
		// TODO! Remove this function and replace it with a new compilation option 'noCodeGeneration'
		// Maybe? -> Open for debate
		let inStream: KipperFileStream = await this.handleStreamInput(stream);

		this.logger.info(`Starting syntax check for '${inStream.name}'.`);

		// Parsing the content, if an error is found, it will be reported
		await this.parse(inStream);

		// If no exception was raised, then everything should be alright!
		this.logger.info("Finished syntax check successfully.");
	}
}
