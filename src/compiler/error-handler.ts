import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { KipperSyntaxError } from "../errors";

export class KipperErrorListener<Token> implements ANTLRErrorListener<Token> {
  // eslint-disable-next-line max-params
  syntaxError(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    throw new KipperSyntaxError<Token>(
      msg,
      {
        recognizer,
        offendingSymbol,
        line,
        column: charPositionInLine,
        error: e
      });
  }
}
