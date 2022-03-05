/**
 * Parse tokens for the kipper language. In comparison to the antlr4 generated parser tokens, these tokens will only
 * contain the major statements of Kipper, to simplify the compilation process and allow the listener to directly
 * translate items.
 *
 * These major statements are:
 * - Function definition
 * - Declaration
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { KipperParser } from "./parser";
import { Interval } from "antlr4ts/misc/Interval";
import { KipperFileContext } from "./file-ctx";

/**
 * Kipper Parse token, which is the base class all tokens will extend from
 * @since 0.0.6
 */
export abstract class KipperParseToken {
  /**
   * The private '_antlrContext' that actually stores the variable data,
   * which is returned inside the getter 'antlrContext'
   * @private
   */
  private readonly _antlrContext: ParserRuleContext;
  /**
   * The private '_fileCtx' that actually stores the variable data,
   * which is returned inside the getter 'fileCtx'
   * @private
   */
  private readonly _fileCtx: KipperFileContext;

  protected constructor(antlrContext: ParserRuleContext, fileCtx: KipperFileContext) {
    this._antlrContext = antlrContext;
    this._fileCtx = fileCtx;
  }

  /**
   * The kipper code that was used to generate this parse token
   */
  get kipperCode(): string {
    let inputStream = this.antlrContext.start.inputStream;
    let start = this.antlrContext.start.startIndex;

    // If {@link inputStream} is undefined, then we will try to fetch the text using {@link ParserRuleContext.text}
    if (inputStream === undefined)
      return this.antlrContext.text;

    // If {@link this.antlrContext.stop} is defined, then use {@link this.antlrContext.stop.stopIndex}, otherwise use
    // the last index of the "virtual" file/buffer, which is {@link inputStream.size} - 2 (Accounting for the
    // additional EOF at the end that we do not want, and the fact arrays start at 0)
    let end = this.antlrContext.stop !== undefined ? this.antlrContext.stop.stopIndex : inputStream.size - 2;
    return inputStream.getText(new Interval(start, end));
  }

  /**
   * The antlr context containing the antlr4 metadata for this parse token
   */
  get antlrContext(): ParserRuleContext {
    return this._antlrContext;
  }

  /**
   * The parser that parsed the {@link antlrContext}
   */
  get parser(): KipperParser {
    return this.fileCtx.parser;
  }

  /**
   * The file context instance containing the metadata for the listener and this parse token.
   */
  get fileCtx(): KipperFileContext {
    return this._fileCtx;
  }

  /**
   * Generates the typescript for this item, and all children (if they exist)
   */
  abstract get tsCode(): Array<string>;
}
