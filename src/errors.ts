import { InputMismatchException, LexerNoViableAltException, NoViableAltException } from "antlr4ts";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { Logger } from "tslog";
import Command from "@oclif/command";

/**
 * The base error for the Kipper module
 */
export class KipperError extends Error {
  /**
   * Initialises the base {@link KipperError}
   * @param msg The error message that should be logged
   */
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, KipperError.prototype);
  }
}

/**
 * A CLI Abort Error which should always be caught by the oclif CLI wrapper.
 * This is only used in the {@link CLIKipperCompiler}.
 */
export class KipperCLIAbortError extends KipperError {}

/**
 * SyntaxError that is used to indicate a syntax error detected by the antlr4 lexer
 */
export class KipperSyntaxError<Token> extends KipperError {
  private readonly _recognizer: Recognizer<Token, any>;

  private readonly _offendingSymbol: Token | undefined;

  private readonly _line: number;

  private readonly _column: number;

  private readonly _msg: string;

  private readonly _error:
    | RecognitionException
    | NoViableAltException
    | LexerNoViableAltException
    | InputMismatchException
    | FailedPredicateException
    | undefined;

  /**
   * KipperSyntaxError Constructor
   * @param msg The error message that should be logged
   * @param context {unknown} The error context config
   */
  constructor(
    msg: string,
    context: {
      recognizer: Recognizer<Token, any>,
      offendingSymbol: Token | undefined,
      line: number,
      column: number,
      error:
        | RecognitionException
        | NoViableAltException
        | LexerNoViableAltException
        | InputMismatchException
        | FailedPredicateException
        | undefined
    }
  ) {
    super(msg);

    this._msg = msg;
    this._recognizer = context.recognizer;
    this._offendingSymbol = context.offendingSymbol;
    this._line = context.line;
    this._column = context.column;
    this._error = context.error;

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
}

/**
 * Handles the call of a function from {@link CLIKipperCompiler}
 * @param logger The logger instance to use to log info. Should be acquired from {@link CLIKipperCompiler.logger}
 * @param command The command where the {@link func} should be called
 * @param func The function to call
 * @returns {void} Nothing
 */
export async function handleCLICall(logger: Logger, command: Command, func: () => Promise<void>): Promise<void> {
  try {
    await func();
  } catch (error) {
    logger.prettyError(error);
  }
}
