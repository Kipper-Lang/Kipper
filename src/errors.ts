/**
 * Errors for the {@link KipperCompiler} that are used throughout this library. All errors inherit from the base
 * {@link KipperError}
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import { InputMismatchException, LexerNoViableAltException, NoViableAltException } from "antlr4ts";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";

/**
 * The base error for the Kipper module
 */
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
	 * @param {Recognizer<KipperParser, any>} recognizer The Antlr4 Parser - should normally always be KipperParser
	 * @param {Token | undefined} offendingSymbol The token that caused the error
	 * @param {number} line The line of the element that caused the error
	 * @param {number} column The column of the element that caused the error
	 * @param {string} msg The msg that was generated as the error message in the Parser
	 * @param {RecognitionException} error The error instance that raised the syntax error in the Lexer
	 */
	public constructor(
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
			| undefined,
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
	public get recognizer(): Recognizer<Token, any> {
		return this._recognizer;
	}

	/**
	 * Returns the token that caused the error
	 */
	public get offendingSymbol(): Token | undefined {
		return this._offendingSymbol;
	}

	/**
	 * Returns the line of the element that caused the error
	 */
	public get line(): number {
		return this._line;
	}

	/**
	 * Returns the column of the element that caused the error
	 */
	public get column(): number {
		return this._column;
	}

	/**
	 * Returns the msg that was generated as the error message in the Parser
	 */
	public get msg(): string {
		return this._msg;
	}

	/**
	 * Returns the error instance that raised the syntax error in the Lexer
	 */
	public get error():
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
	public async reportError(): Promise<void> {}
}

/**
 * Error that is thrown when trying to register a global that already exists in {@link KipperProgramContext.builtInGlobals}.
 */
export class GlobalAlreadyRegisteredError extends KipperError {
	constructor(identifier: string) {
		super(`Global definition of function '${identifier}' already exists!`);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GlobalAlreadyRegisteredError.prototype);
	}
}

/**
 * Error that is thrown when a new identifier is registered (function or variable identifier), but that identifier is
 * already in use by another variable or function. No double definitions or overwrites of old definitions allowed!
 */
export class DuplicateIdentifierError extends KipperError {
	constructor(identifier: string) {
		super(`Definition of variable or function '${identifier}' already exists!`);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GlobalAlreadyRegisteredError.prototype);
	}
}

/**
 * Error that is thrown when an identifier is registered that interferes with a built-in function or variable.
 * No double definitions or overwrites of global built-in definitions allowed!
 */
export class NoBuiltInOverwriteError extends KipperError {
	constructor(identifier: string) {
		super(`May not overwrite built-in identifier '${identifier}'!`);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GlobalAlreadyRegisteredError.prototype);
	}
}

/**
 * This error is raised whenever a token is unable to fetch its metadata from the antlr4 context instances.
 */
export class UnableToDetermineMetadataError extends KipperError {
	constructor(msg: string) {
		super(msg);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GlobalAlreadyRegisteredError.prototype);
	}
}

/**
 * This error is raised when a variable type is used that is unknown the kipper language.
 */
export class UnknownTypeError extends KipperError {
	constructor(type: string) {
		super(`Unknown type '${type}'! Valid types: 'void', 'bool', 'string', 'char', 'num' and 'list'`);

		// Set the prototype explicitly.
		Object.setPrototypeOf(this, GlobalAlreadyRegisteredError.prototype);
	}
}
