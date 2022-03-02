/**
 * A file context for a single kipper file, which may be used for parsing or compiling a kipper file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { CompilationUnitContext } from "./parser";
import { KipperParseStream } from "./parse-stream";

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

  constructor(stream: KipperParseStream, startItem: CompilationUnitContext) {
    this._stream = stream;
    this._startItem = startItem;
  }

  /**
   * Returns the {@link KipperParseStream} which contains the raw file data.
   */
  get stream() {
    return this._stream;
  }

  /**
   * Returns the start item of the parser tree (top item).
   */
  get startItem() {
    return this._startItem;
  }
}
