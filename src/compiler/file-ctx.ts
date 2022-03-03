/**
 * A file context for a single kipper file, which may be used for parsing or compiling a kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { CompilationUnitContext } from "./parser";
import { KipperParseStream } from "./parse-stream";
import { KipperFileListener } from "./listener";
import { ParseTreeWalker } from "antlr4ts/tree";

/**
 * The file context class used to represent a file in a compilation.
 *
 * In this case, even a simple stream or string are represented using this class, as a virtual "file" is created for
 * them and their environment.
 * @since 0.0.3
 */
export class KipperFileContext {
  /**
   * The private '_stream' that actually contains the instance,
   * which is used inside the getter 'stream'
   * @private
   */
  private readonly _stream: KipperParseStream;

  /**
   * The private '_startItem' that actually contains the instance,
   * which is used inside the getter 'startItem'
   * @private
   */
  private readonly _startItem: CompilationUnitContext;

  constructor(
    stream: KipperParseStream,
    startItem: CompilationUnitContext) {
    this._stream = stream;
    this._startItem = startItem;
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
   * Translate the parse tree of this virtual file into an array of valid TypeScript code lines.
   * @param listener {KipperFileListener} The listener to generate the TypeScript code. The function will return the
   * generated {@link KipperFileListener.itemBuffer}, which stores the translated code items.
   */
  async translate(
    listener: KipperFileListener = new KipperFileListener(this)
  ): Promise<Array<string>> {
    // The walker used to go through the parse tree
    const walker = new ParseTreeWalker();

    // Walking through the parse tree using the listener
    walker.walk(listener, this.startItem);

    return listener.itemBuffer;
  }
}
