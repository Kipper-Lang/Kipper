/**
 * Error handler for a syntax error that was caught by Antlr4
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { KipperSyntaxError } from "../errors";

/**
 * The Error Handler for the Kipper implementation of {@link ANTLRErrorListener}
 */
export class KipperErrorListener<Token> implements ANTLRErrorListener<Token> {
  syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    // Capitalising the error message
    msg = msg.charAt(0).toUpperCase() + msg.slice(1);

    throw new KipperSyntaxError<T>(
      recognizer,
      offendingSymbol,
      line,
      charPositionInLine,
      msg,
      e
    );
  }
}
