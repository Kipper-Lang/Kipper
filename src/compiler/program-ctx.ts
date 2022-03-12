/**
 * A file context for a single kipper file, which may be used for parsing or compiling a kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { KipperParser, KipperLexer, CompilationUnitContext } from "./parser";
import { KipperParseStream } from "./parse-stream";
import { KipperFileListener } from "./listener";
import { ParseTreeWalker } from "antlr4ts/tree";
import { Token, ANTLRErrorListener, TokenStream } from "antlr4ts";
import { GlobalFunction } from "./built-ins";
import { CompilableParseToken } from "./tokens";

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
	private readonly _parseTreeEntry: CompilationUnitContext;

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
	private _globals: Array<GlobalFunction>;

	/**
	 * The private '_processedParseTree' that actually stores the variable data,
	 * which is returned inside the getter 'processedParseTree'.
	 * @private
	 */
	private _processedParseTree: Array<CompilableParseToken>;

	/**
	 * The private '_typescriptCode' that will store the cached code, once 'typescriptCode' has been called. This is to
	 * avoid running the function unnecessarily and generate code again, even though it already exists.
	 * @private
	 */
	private _compiledCode: Array<string> | undefined;

	constructor(
		stream: KipperParseStream,
		parseTreeEntry: CompilationUnitContext,
		parser: KipperParser,
		lexer: KipperLexer,
	) {
		this._stream = stream;
		this._parseTreeEntry = parseTreeEntry;
		this._parser = parser;
		this._lexer = lexer;
		this._globals = [];
		this._processedParseTree = [];
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
	get parseTreeEntry(): CompilationUnitContext {
		return this._parseTreeEntry;
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
	 * Returns the globals registered for this kipper program. These global functions defined in the array will be
	 * available inside the compiled kipper program and callable using their specified identifier. This is designed to
	 * allow calling external typescript functions, which can not be natively implemented inside kipper.
	 */
	get globals(): Array<GlobalFunction> {
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
	 * Returns the processed parse tree, which is a converted antlr4 parse tree in a customised kipper form, which allows
	 * it to be used for semantic analysis and translation to typescript.
	 *
	 * If the function {@link compileProgram} has not been called yet, this item will be an empty array.
	 */
	get processedParseTree(): Array<CompilableParseToken> {
		return this._processedParseTree;
	}

	/**
	 * Registers new globals that are available inside the kipper program.
	 *
	 * Globals must be registered *before* {@link compileProgram} is run to properly include them in the result code.
	 */
	registerGlobals(newGlobals: Array<GlobalFunction>) {
		this._globals = this._globals.concat(newGlobals);
	}

	/**
	 * Translate the parse tree of this virtual file into an array of valid TypeScript code lines.
	 *
	 * Steps of compilation:
	 * - Walking through the parsed antlr4 tree - ({@link parseTreeEntry})
	 * - Generating a proper Kipper parse tree, which is eligible for semantic analysis and compilation -
	 *   ({@link getProcessedParseTree})
	 * - Running the semantic analysis - ({@link semanticallyAnalyseCode})
	 * - Generating the final source code - ({@link translate})
	 */
	compileProgram(): Array<string> {
		// Getting the proper processed parse tree contained of proper kipper tokens that are compilable
		this._processedParseTree = this.getProcessedParseTree(new KipperFileListener(this));

		// Walking through every parse item and appending the generated {@link KipperParseToken.tsCode} array to the
		// existing item array.
		let genCode: Array<string> = [];
		for (let parseItem of this._processedParseTree) {
			genCode = genCode.concat(parseItem.compileCtxAndChildren());
		}

		// Cache the result
		this._compiledCode = genCode;

		return genCode;
	}

	/**
	 * Converting and processing the antlr4 parse tree into a Kipper parse tree that may be used to semantically analyse
	 * the program and compile it.
	 * @param listener The listener instance to iterate through the antlr4 parse tree
	 * @private
	 */
	private getProcessedParseTree(listener: KipperFileListener): Array<CompilableParseToken> {
		// The walker used to go through the parse tree.
		const walker = new ParseTreeWalker();

		// Walking through the parse tree using the listener.
		walker.walk(listener, this.parseTreeEntry);
		return listener.processedParseTree;
	}

	/**
	 * Translates the {@link _processedParseTree}
	 * @private
	 */
	private translate() {
		// TODO! Implement after {@link semanticallyAnalyseCode} was finished
	}

	/**
	 * Analyse the semantics of the code and checks its logical content. If an error is raised, it will be directly
	 * raised from here!
	 */
	private semanticallyAnalyseCode(): void {
		// TODO! Implement after {@link getProcessedParseTree} was properly implemented using Kipper tokens
	}
}
