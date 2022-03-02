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
  syntaxError(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    throw new KipperSyntaxError<Token>(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
  }
}
