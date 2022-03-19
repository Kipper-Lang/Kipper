/**
 * A file context for a single Kipper file, which may be used for parsing or compiling a Kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { ParseTreeWalker } from "antlr4ts/tree";
import { Token, ANTLRErrorListener, TokenStream } from "antlr4ts";
import { KipperParser, KipperLexer, CompilationUnitContext } from "./parser";
import { KipperParseStream } from "./parse-stream";
import { KipperFileListener } from "./listener";
import { Function } from "./built-ins";
import { KipperLogger } from "../logger";
import { RootFileParseToken } from "./tokens";

/**
 * The program context class used to represent a file in a compilation.
 *
 * In this case, even a simple stream or string are represented using this class, as a virtual "file" is created for
 * them and their environment.
 * @since 0.0.3
 */
export class KipperProgramContext {
	/**
	 * The private '_stream' that actually stores the variable data,
	 * which is returned inside the getter 'stream'.
	 * @private
	 */
	private readonly _stream: KipperParseStream;

	/**
	 * The private '_parseTreeEntry' that actually stores the variable data,
	 * which is returned inside the getter 'parseTreeEntry'.
	 * @private
	 */
	private readonly _antlrParseTree: CompilationUnitContext;

	/**
	 * The private '_parser' that actually stores the variable data,
	 * which is returned inside the getter 'parser'.
	 * @private
	 */
	private readonly _parser: KipperParser;

	/**
	 * The private '_lexer' that actually stores the variable data,
	 * which is returned inside the getter 'lexer'.
	 * @private
	 */
	private readonly _lexer: KipperLexer;

	/**
	 * The private '_globals' that actually stores the variable data,
	 * which is returned inside the getter 'globals'.
	 * @private
	 */
	private _globals: Array<Function>;

	/**
	 * The private '_processedParseTree' that actually stores the variable data,
	 * which is returned inside the getter 'processedParseTree'.
	 * @private
	 */
	private _processedParseTree: RootFileParseToken | undefined;

	/**
	 * The private '_typescriptCode' that will store the cached code, once 'typescriptCode' has been called. This is to
	 * avoid running the function unnecessarily and generate code again, even though it already exists.
	 * @private
	 */
	private _compiledCode: Array<string> | undefined;

	/**
	 * The logger that should be used to log warnings and errors.
	 * @public
	 */
	public logger: KipperLogger;

	constructor(
		stream: KipperParseStream,
		parseTreeEntry: CompilationUnitContext,
		parser: KipperParser,
		lexer: KipperLexer,
		logger: KipperLogger,
	) {
		this.logger = logger;
		this._stream = stream;
		this._antlrParseTree = parseTreeEntry;
		this._parser = parser;
		this._lexer = lexer;
		this._globals = [];
		this._processedParseTree = undefined;
	}

	/**
	 * Returns the {@link KipperParseStream} which contains the raw file data.
	 */
	get stream(): KipperParseStream {
		return this._stream;
	}

	/**
	 * Returns the start item of the parser tree (top item).
	 */
	get antlrParseTree(): CompilationUnitContext {
		return this._antlrParseTree;
	}

	/**
	 * Returns the {@link KipperParser}, which parsed this "virtual" file and generated the {@link this.parseTreeEntry} ctx
	 * context.
	 */
	get parser(): KipperParser {
		return this._parser;
	}

	/**
	 * Returns the {@link KipperLexer}, which lexed this "virtual" file and generated the tokens for it.
	 */
	get lexer(): KipperLexer {
		return this._lexer;
	}

	/**
	 * Returns the {@link ANTLRErrorListener} instances, which actively listen for errors on this "virtual" file.
	 *
	 * Considering this file is only generated after the lexing and parse step, no more errors will be handled by these
	 * listeners, though they may be used to manually raise errors, so they are properly handled and formatted.
	 */
	get errorHandler(): ANTLRErrorListener<Token>[] {
		return this.parser.getErrorListeners();
	}

	/**
	 * Returns the {@link TokenStream}, which contains all lexer tokens in a stream.
	 */
	get tokenStream(): TokenStream {
		return this.parser.inputStream;
	}

	/**
	 * Returns the globals registered for this Kipper program. These global functions defined in the array will be
	 * available inside the compiled Kipper program and callable using their specified identifier. This is designed to
	 * allow calling external typescript functions, which can not be natively implemented inside Kipper.
	 */
	get globals(): Array<Function> {
		return this._globals;
	}

	/**
	 * Returns the typescript code counterpart to this "virtual" file.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be an empty array.
	 */
	get compiledCode(): Array<string> | undefined {
		return this._compiledCode;
	}

	/**
	 * Returns the processed parse tree, which is a converted antlr4 parse tree in a customised Kipper form, which allows
	 * it to be used for semantic analysis and translation to typescript.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be {@link undefined}.
	 */
	get processedParseTree(): RootFileParseToken | undefined {
		return this._processedParseTree;
	}

	/**
	 * Registers new globals that are available inside the Kipper program.
	 *
	 * Globals must be registered *before* {@link compileProgram} is run to properly include them in the result code.
	 */
	registerGlobals(newGlobals: Array<Function>) {
		this._globals = this._globals.concat(newGlobals);
	}

	/**
	 * Translate the parse tree of this virtual file into an array of valid TypeScript code lines.
	 *
	 * Steps of compilation:
	 * - Walking through the parsed antlr4 tree - ({@link antlrParseTree})
	 * - Generating a proper Kipper parse tree, which is eligible for semantic analysis and compilation -
	 *   ({@link generateProcessedParseTree})
	 * - Running the semantic analysis - ({@link processedParseTree.semanticAnalysis})
	 * - Generating the final source code - ({@link processedParseTree.translateCtxAndChildren})
	 */
	compileProgram(): Array<string> {
		// Getting the proper processed parse tree contained of proper Kipper tokens that are compilable
		this._processedParseTree = this.generateProcessedParseTree(new KipperFileListener(this));

		// Run the semantic analysis to validate the code
		this.logger.debug(`Running semantic analysis for '${this.stream.name}'`);
		this._processedParseTree.semanticAnalysis();

		// Translating the context instances and children
		this.logger.info(`Translating code to TypeScript for '${this.stream.name}'`);
		let genCode: Array<string> = this._processedParseTree.translateCtxAndChildren();

		// Append required typescript code for Kipper for the program to work properly
		genCode = this.generateRequired().concat(genCode);

		this.logger.info(
			`Generated ${genCode.length} lines - Processed ${this._processedParseTree.children.length} root items.`,
		);

		// Cache the result
		this._compiledCode = genCode;

		// Finished compilation
		return genCode;
	}

	/**
	 * Converting and processing the antlr4 parse tree into a Kipper parse tree that may be used to semantically analyse
	 * the program and compile it.
	 * @param listener The listener instance to iterate through the antlr4 parse tree
	 * @private
	 */
	private generateProcessedParseTree(listener: KipperFileListener): RootFileParseToken {
		// The walker used to go through the parse tree.
		const walker = new ParseTreeWalker();

		// Walking through the parse tree using the listener and generating the processed Kipper parse tree
		this.logger.debug(`Generating processed Kipper parse tree for '${this.stream.name}'`);
		walker.walk(listener, this.antlrParseTree);

		this.logger.debug(
			`Finished generation of processed Kipper parse tree for '${this.stream.name}'` +
				` - Parsed ${listener.kipperParseTree.children.length} root items.`,
		);
		return listener.kipperParseTree;
	}

	/**
	 * Generates the required code for the execution of this kipper program
	 * @private
	 */
	private generateRequired(): Array<string> {
		let code: Array<string> = [];

		// Generating the code for the global functions
		for(let global of this._globals) {
			code = code.concat(global.handler);
		}
		return code;
	}
}
