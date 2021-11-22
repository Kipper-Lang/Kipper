import { CommonToken, InputMismatchException, LexerNoViableAltException, NoViableAltException } from "antlr4ts";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { KipperParser } from "./compiler/parser";

export class KipperError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, KipperError.prototype);
  }
}

/**
 * SyntaxError that is used to indicate a syntax error detected by the antlr4 lexer
 */
export class KipperSyntaxError<Token> extends KipperError {
  private readonly _recognizer: Recognizer<Token, any>

  private readonly _offendingSymbol: Token | undefined

  private readonly _line: number

  private readonly _column: number

  private readonly _msg: string

  private readonly _error:
    | RecognitionException
    | NoViableAltException
    | LexerNoViableAltException
    | InputMismatchException
    | FailedPredicateException
    | undefined

  /**
   * KipperSyntaxError Constructor
   * @param {Recognizer<KipperParser, any>} recognizer The Antlr4 Parser - should normally always be KipperParser
   * @param {CommonToken} offendingSymbol The token that caused the error
   * @param {number} line The line of the element that caused the error
   * @param {number} column The column of the element that caused the error
   * @param {string} msg The msg that was generated as the error message in the Parser
   * @param {RecognitionException} error The error instance that raised the syntax error in the Lexer
   */
  constructor(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    column: number,
    msg: string,
    error:
      | RecognitionException
      | NoViableAltException
      | LexerNoViableAltException
      | InputMismatchException
      | FailedPredicateException
      | undefined
  ) {
    super(msg);

    this._recognizer = recognizer;
    this._offendingSymbol = offendingSymbol;
    this._line = line;
    this._column = column;
    this._msg = msg;
    this._error = error;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, KipperSyntaxError.prototype);
  }

  /**
   * Returns the Antlr4 Parser - should normally always be {@link KipperParser}
   */
  get recognizer(): Recognizer<Token, any> {
    return this._recognizer;
  }

  /**
   * Returns the token that caused the error
   */
  get offendingSymbol(): Token | undefined {
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
  get error():
    | RecognitionException
    | NoViableAltException
    | LexerNoViableAltException
    | InputMismatchException
    | FailedPredicateException
    | undefined {
    return this._error;
  }

  /**
   * Reports the syntax error and writes onto the console
   */
  async reportError(): Promise<void> {}
}
