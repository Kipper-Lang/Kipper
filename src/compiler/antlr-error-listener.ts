/**
 * Error handler for a syntax error that was caught by Antlr4
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import {KipperLogger, LogLevel} from "../logger";
import {KipperSyntaxError} from "../errors";
import {KipperParseStream} from "./parse-stream";

/**
 * The Error Handler for the Kipper implementation of {@link ANTLRErrorListener}
 */
export class KipperAntlrErrorListener<Token> implements ANTLRErrorListener<Token> {
  public readonly logger: KipperLogger;

  public readonly parseStream: KipperParseStream;

  constructor(logger: KipperLogger, parseStream: KipperParseStream) {
    this.logger = logger;
    this.parseStream = parseStream;
  }

	syntaxError<T extends Token>(
		recognizer: Recognizer<T, any>,
		offendingSymbol: T | undefined,
		line: number,
		charPositionInLine: number,
		msg: string,
		e: RecognitionException | undefined,
	) {
		// Capitalising the error message
		msg = msg.charAt(0).toUpperCase() + msg.slice(1);

    // Create new error and add traceback metadata
    const err = new KipperSyntaxError<T>(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    err.setMetadata({location: {line: line, col: charPositionInLine}, filePath: this.parseStream.filePath});

    // Log the error
    this.logger.reportError(LogLevel.ERROR, err);

    // Throw the error
    throw err;
	}
}
