/**
 * Main Compiler file for interacting with the entire Kipper Compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.1
 */
import { CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperErrorListener } from "./error-handler";
import { KipperLexer, KipperParser } from "./parser";
import { CompilationUnitContext } from "./parser/KipperParser";
import { KipperLogger } from "../logger";
import { KipperParseStream, KipperStreams } from "./parse-stream";

/**
 * The result of a {@link KipperCompiler} compilation
 * @since 0.0.3
 */
export class KipperCompileResult {
  private readonly _stream: KipperParseStream;

  constructor(stream: KipperParseStream) {
    this._stream = stream;
  }

  /**
   * The stream that was used for the compilation
   */
  get stream(): KipperParseStream {
    return this._stream;
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
   * The private '_errorListener' that actually contains the instance,
   * which is used inside the getter 'errorListener'
   * @private
   */
  private readonly _errorListener: KipperErrorListener<any>;

  /**
   * The private '_logger' that actually contains the instance,
   * which is used inside the getter 'logger'
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
   * Parses a file and generates the antlr4 tree ({@link CompilationUnitContext}, using
   * {@link KipperParser.compilationUnit} (the highest item of the tree / entry point to the tree)
   * @param {KipperParseStream} parseInput The {@link KipperParseStream} instance that contains the required string
   * content
   * @returns {CompilationUnitContext} The generated and parsed {@link CompilationUnitContext}
   */
  async parse(parseInput: KipperParseStream): Promise<CompilationUnitContext> {
    this._logger.info(`Parsing '${parseInput.name}'`);

    // Creating the char stream, based on the input
    const inputStream: CodePointCharStream = parseInput.charStream;

    // Create the lexer and parser, which will parse this inputStream
    const lexer = new KipperLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new KipperParser(tokenStream);

    parser.removeErrorListeners(); // removing all error listeners
    parser.addErrorListener(this._errorListener); // adding our own error listener

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return (() => {
      let result = parser.compilationUnit();
      this._logger.debug(`Finished generation of parse tree for file '${parseInput.name}'`);
      return result;
    })();
  }

  /**
   * Handles the input for a file-based function of the {@link KipperCompiler}
   * @param stream The input, which may be either a {@link String} or {@link KipperParseStream}
   * @param name The encoding to read the file with
   */
  private static _handleStreamInput(stream: string | KipperParseStream, name?: string): KipperParseStream {
    if (stream instanceof KipperParseStream) {
      return stream;
    } else {
      return KipperStreams.fromString(stream, name);
    }
  }

  /**
   * Compiles a file and generates a {@link KipperCompileResult} instance representing the generated code
   * @param stream The input to compile, which may be either a {@link String} or {@link CodePointCharStream}.
   * @param {boolean} preferLogging If set to true, all warnings and errors will be logged rather than errors
   * raised. This option is needed if you want information about warnings.
   * @param streamName The name that should be used to differentiate this specific stream
   * @returns The created {@link KipperCompileResult} instance
   */
  async compile(stream: string | KipperParseStream, preferLogging: boolean = true, streamName?: string): Promise<KipperCompileResult> {
    let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream);

    this._logger.info(`Starting compilation for '${inStream.name}'`);
    const compilationUnit: CompilationUnitContext = await this.parse(inStream);

    throw new Error("Not implemented");

    return new KipperCompileResult(inStream);
  }

  /**
   * Analyses the syntax of the given file. Any warnings or errors will be logged.
   * @param stream The input to analyse, which may be either a {@link String} or {@link CodePointCharStream}.
   * @param {boolean} preferLogging If set to true, all warnings and errors will be logged rather than errors
   * raised. This option is needed if you want information about warnings.
   * @param streamName The name that should be used to differentiate this specific stream
   */
  async syntaxAnalyse(stream: string | KipperParseStream, preferLogging: boolean = true, streamName?: string) {
    let inStream: KipperParseStream = KipperCompiler._handleStreamInput(stream);

    this._logger.info(`Starting syntax check for '${inStream.name}'`);
    const compilationUnit: CompilationUnitContext = await this.parse(inStream);
  }
}
