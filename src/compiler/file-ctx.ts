/**
 * A file context for a single kipper file, which may be used for parsing or compiling a kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import {KipperParser, KipperLexer, CompilationUnitContext} from "./parser";
import {KipperParseStream} from "./parse-stream";
import {KipperFileListener} from "./listener";
import {ParseTreeWalker} from "antlr4ts/tree";
import {Token, ANTLRErrorListener, TokenStream} from "antlr4ts";

/**
 * The file context class used to represent a file in a compilation.
 *
 * In this case, even a simple stream or string are represented using this class, as a virtual "file" is created for
 * them and their environment.
 * @since 0.0.3
 */
export class KipperFileContext {
  /**
   * The private '_stream' that actually stores the variable data,
   * which is returned inside the getter 'stream'
   * @private
   */
  private readonly _stream: KipperParseStream;

  /**
   * The private '_startItem' that actually stores the variable data,
   * which is returned inside the getter 'startItem'
   * @private
   */
  private readonly _startItem: CompilationUnitContext;

  /**
   * The private '_parser' that actually stores the variable data,
   * which is returned inside the getter 'parser'
   * @private
   */
  private readonly _parser: KipperParser;

  /**
   * The private '_lexer' that actually stores the variable data,
   * which is returned inside the getter 'lexer'
   * @private
   */
  private readonly _lexer: KipperLexer;

  /**
   * The private '_typescriptCode' that will store the cached code, once 'typescriptCode' has been called. This is to
   * avoid running the function unnecessarily and generate code again, even though it already exists.
   * @private
   */
  private _typescriptCode: Array<string> | undefined;

  constructor(stream: KipperParseStream, startItem: CompilationUnitContext, parser: KipperParser, lexer: KipperLexer) {
    this._stream = stream;
    this._startItem = startItem;
    this._parser = parser;
    this._lexer = lexer;
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
  get startItem(): CompilationUnitContext {
    return this._startItem;
  }

  /**
   * Returns the {@link KipperParser}, which parsed this "virtual" file and generated the {@link this.startItem} ctx
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
   * Returns the {@link TokenStream}, which contains all lexer tokens in a stream
   */
  get tokenStream(): TokenStream {
    return this.parser.inputStream;
  }

  /**
   * Returns the typescript code counterpart to this "virtual" file. This getter uses caching, so it will only be
   * populated in case 'translate()' has been called before!
   */
  get typescriptCode(): Array<string> | undefined {
    return this._typescriptCode;
  }

  /**
   * Translate the parse tree of this virtual file into an array of valid TypeScript code lines.
   * @param listener {KipperFileListener} The listener to generate the TypeScript code. The function will return the
   * generated {@link KipperFileListener.itemBuffer}, which stores the translated code items. Generates a new one per
   * default!
   */
  translate(listener: KipperFileListener = new KipperFileListener(this)): Array<string> {
    // The walker used to go through the parse tree.
    const walker = new ParseTreeWalker();

    // Walking through the parse tree using the listener.
    walker.walk(listener, this.startItem);

    // Walking through every parse item and appending the generated {@link KipperParseToken.tsCode} array to the
    // existing item array.
    let genCode: Array<string> = [];
    for (let parseItem of listener.itemBuffer) {
      genCode = genCode.concat(parseItem.tsCode);
    }

    // Cache the result
    this._typescriptCode = genCode;

    return genCode;
  }
}
