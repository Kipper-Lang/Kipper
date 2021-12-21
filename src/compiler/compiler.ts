// Main Compiler file for interacting with the entire Kipper Compiler

import { CharStreams, CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperErrorListener } from "./error-handler";
import { KipperLexer, KipperParser } from "./parser";
import { ParserFile } from "./parser-file";
import { CompilationUnitContext } from "./parser/KipperParser";
import { Logger } from "tslog";

export class KipperCompiler {
  /**
   * The private '_errorListener' that actually contains the instance,
   * which is used inside the getter 'errorListener'
   * @private
   */
  private readonly _errorListener: KipperErrorListener<any>;

  constructor() {
    // using a general error listener for the entire compiler instance
    this._errorListener = new KipperErrorListener();
  }

  /**
   * Returns the error listener that was initialised at the construction of this class
   */
  get errorListener(): KipperErrorListener<any> {
    return this._errorListener;
  }

  /**
   * Fetches the content of a file and returns the entire content as a string
   * @param {string} fileLocation The relative or absolute path to the file
   * @param {string} encoding The encoding that should be used to read the file
   * @returns {ParserFile} A new instance that contains the string content
   */
  async getParseFile(fileLocation: string, encoding: BufferEncoding): Promise<ParserFile> {
    const file = new ParserFile(fileLocation, encoding);
    await file.readContent();
    return file;
  }

  /**
   * Parses a file and generates the antlr4 tree, using the function .compilationUnit (parent item of the tree)
   * @param {ParserFile} inFile The parserFile instance that contains the required string content
   * @returns {CompilationUnitContext} The generated and parsed CompilationUnitContext
   */
  async parse(inFile: ParserFile): Promise<CompilationUnitContext> {
    // Create the lexer and parser
    const inputStream: CodePointCharStream = CharStreams.fromString(inFile.stringContent);
    const lexer = new KipperLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new KipperParser(tokenStream);

    parser.removeErrorListeners(); // removing all error listeners
    parser.addErrorListener(this._errorListener); // adding our own error listener

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
  }

  /**
   * Compiles a file and generates the C counterpart
   * @param {string} fileLocation The entry-file of the program
   * @param {string} encoding The encoding that should be used to read the file
   * @returns {string} The compiled C code
   */
  async compile(fileLocation: string, encoding: BufferEncoding): Promise<string> {
    const inFile: ParserFile = await this.getParseFile(fileLocation, encoding);
    const compilationUnit: CompilationUnitContext = await this.parse(inFile);

    // TODO! Implement parsing function - add to this function
    //  Add Visitor class and implementation for generating logic stream (lexing and parsing)
    //  Compile C-tokens using the logic stream (compilation)
    //  Validate the existence of all items (linker)
    //  Generate Code (code generator)

    return "";
  }

  /**
   * Analysing the syntax of the given file
   * @param {string} fileLocation The entry-file of the program
   * @param {string} encoding The encoding that should be used to read the file
   * @returns {void} When the check successfully finished
   * @throws {KipperSyntaxError} If a syntax-error is encountered
   */
  async syntaxAnalyse(fileLocation: string, encoding: BufferEncoding): Promise<void> {
    const inFile: ParserFile = await this.getParseFile(fileLocation, encoding);
    const compilationUnit: CompilationUnitContext = await this.parse(inFile);
  }
}

export class CLIKipperCompiler extends KipperCompiler {
  /**
   * The private '_verbose' boolean that actually contains the value,
   * which is used inside the getter 'verbose'
   * @private
   */
  private readonly _verbose: boolean;

  /**
   * The private '_debug' boolean that actually contains the value,
   * which is used inside the getter 'debug'
   * @private
   */
  private readonly _debug: boolean;

  /**
   * The private '_logger' instance, which contains the 'tslog' {@link Logger}
   * @private
   */
  private readonly _logger: Logger;

  /**
   * Initialises the CLI Kipper Compiler
   * @param verbose If set to true, the compiler will log everything
   * @param debug If set to true, the compiler will log also debug messages (not as verbose)
   */
  constructor(verbose = false, debug = false) {
    super();
    this._verbose = verbose;
    this._debug = debug;
    this._logger = new Logger(
      {
        name: "Kipper-Logger",
        minLevel: verbose ? "silly" : (debug ? "debug" : "info"),
        displayDateTime: false,
        displayFunctionName: false,
        displayRequestId: false,
        displayLoggerName: false,
        displayFilePath: "hidden"
      }
    );
  }

  /**
   * Returns whether the compiler should log content verbose. (Everything is logged)
   */
  get verbose(): boolean {
    return this._verbose;
  }

  /**
   * Returns whether the compiler was set to log debug messages.
   */
  get debug(): boolean {
    return this._debug;
  }

  /**
   * Returns the logger for the current CLI run
   */
  get logger(): Logger {
    return this._logger;
  }

  /**
   * Logs the start of processing
   * @returns {void} Nothing
   * @private
   */
  private async logInit(): Promise<void> {
    this._logger.info(`Starting log output`);
  }

  async syntaxAnalyse(fileLocation: string, encoding: BufferEncoding): Promise<void> {
    await this.logInit();
    await super.syntaxAnalyse(fileLocation, encoding);
  }
}
