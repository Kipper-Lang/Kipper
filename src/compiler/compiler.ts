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
import { KipperFileContext } from "./file-ctx";

/**
 * The result of a {@link KipperCompiler} compilation
 * @since 0.0.3
 */
export class KipperCompileResult {
  /**
   * The private '_fileCtx' that actually stores the variable data,
   * which is returned inside the getter 'fileCtx'
   * @private
   */
  private readonly _fileCtx: KipperFileContext;

  /**
   * The private '_result' that actually stores the variable data,
   * which is returned inside the getter 'result'
   * @private
   */
  private readonly _result: Array<string>;

  constructor(fileCtx: KipperFileContext, result: Array<string>) {
    this._fileCtx = fileCtx;
    this._result = result;
  }

  /**
   * The "virtual" file context for the compilation run, which stores the content of the file and meta-data.
   */
  get fileCtx(): KipperFileContext {
    return this._fileCtx;
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
   * which is returned inside the getter 'errorListener'
   * @private
   */
  private readonly _errorListener: KipperErrorListener<any>;

  /**
   * The private '_logger' that actually stores the variable data,
   * which is returned inside the getter 'logger'
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
  private static _handleStreamInput(stream: string | KipperParseStream, name: string = "inline-stream"): KipperParseStream {
    if (stream instanceof KipperParseStream) {
      return stream;
    } else {
      return new KipperParseStream(name, stream);
    }
  }

  /**
   * Parses a file and generates the antlr4 tree ({@link CompilationUnitContext}, using
   * {@link KipperParser.compilationUnit} (the highest item of the tree / entry point to the tree)
   * @param {KipperParseStream} parseStream The {@link KipperParseStream} instance that contains the required string
   * content
   * @returns {CompilationUnitContext} The generated and parsed {@link CompilationUnitContext}
   * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
   */
  async parse(parseStream: KipperParseStream): Promise<KipperFileContext> {
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
      return new KipperFileContext(parseStream, result, parser, lexer);
    })();
  }

  /**
   * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code.
   * @param stream The input to compile, which may be either a {@link String} or {@link KipperParseStream}.
   * @param streamName The name that should be used to differentiate this specific stream. Only available if
   * {@link stream} is a {@link KipperParseStream}.
   * @returns The created {@link KipperCompileResult} instance.
   * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
   */
  async compile(stream: string | KipperParseStream, streamName?: string): Promise<KipperCompileResult> {
    let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream, streamName);

    this.logger.info(`Starting compilation for '${inStream.name}'`);

    // The file context storing the metadata for the "virtual file"
    const fileCtx: KipperFileContext = await this.parse(inStream);

    // Translate and compile the code
    this.logger.info(`Starting translation for '${inStream.name}'`);
    const code = fileCtx.translate();

    this.logger.info(`Finished compilation - Returning compilation result`);

    // Return the result for the compilation
    return new KipperCompileResult(fileCtx, code);
  }

  /**
   * Analyses the syntax of the given file. Errors will be raised as an exception and warnings logged using the
   * {@link this.logger}.
   * @param stream The input to analyse, which may be either a {@link String} or {@link KipperParseStream}.
   * @param streamName The name that should be used to differentiate this specific stream. Only available if
   * {@link stream} is a {@link KipperParseStream}.
   * @throws {KipperSyntaxError} If a syntax exception was encountered while running.
   */
  async syntaxAnalyse(stream: string | KipperParseStream, streamName?: string): Promise<void>  {
    let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream, streamName);

    this.logger.info(`Starting syntax check for '${inStream.name}'`);

    // Parsing the content, if an error is found, it will be reported
    await this.parse(inStream);

    // If no exception was raised, then everything should be alright!
    this.logger.info("Finished syntax check successfully!");
  }
}
