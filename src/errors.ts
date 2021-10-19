import {CommonToken, InputMismatchException, LexerNoViableAltException, NoViableAltException} from "antlr4ts";
import {RecognitionException} from "antlr4ts/RecognitionException";
import {FailedPredicateException} from "antlr4ts/FailedPredicateException";

class KipperError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, KipperError.prototype);
  }
}

/**
 * SyntaxError that is used to indicate a syntax error detected by the antlr4 lexer
 */
class KipperSyntaxError extends KipperError {
  private readonly _offendingSymbol: CommonToken;
  private readonly _line: number;
  private readonly _column: number;
  private readonly _msg: string;
  private readonly _error: RecognitionException |
    NoViableAltException |
    LexerNoViableAltException |
    InputMismatchException |
    FailedPredicateException;

  /**
   * KipperSyntaxError Constructor
   * @param offendingSymbol The token that caused the error
   * @param line The line of the element that caused the error
   * @param column The column of the element that caused the error
   * @param msg The msg that was generated as the error message in the Parser
   * @param error The error instance that raised the syntax error in the Lexer
   */
  constructor(
    offendingSymbol: CommonToken,
    line: number,
    column: number,
    msg: string,
    error: RecognitionException |
      NoViableAltException |
      LexerNoViableAltException |
      InputMismatchException |
      FailedPredicateException
  ) {
    super(msg);

    this._offendingSymbol = offendingSymbol;
    this._line = line
    this._column = column;
    this._msg = msg
    this._error = error;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, KipperSyntaxError.prototype);
  }

  /**
   * Returns the token that caused the error
   */
  get offendingSymbol(): CommonToken {
    return this._offendingSymbol;
  }

  /**
   * Returns the line of the element that caused the error
   */
  get line(): number {
    return this._line;
  }

  /**
   * Returns the column of the element that caused the error
   */
  get column(): number {
    return this._column;
  }

  /**
   * Returns the msg that was generated as the error message in the Parser
   */
  get msg(): string {
    return this._msg;
  }

  /**
   * Returns the error instance that raised the syntax error in the Lexer
   */
  get error(): RecognitionException | NoViableAltException | LexerNoViableAltException |
    InputMismatchException | FailedPredicateException {
    return this._error;
  }
}
