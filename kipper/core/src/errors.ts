/**
 * Errors for the {@link KipperCompiler} that are used throughout this library. All errors inherit from the core
 * {@link KipperError}
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import { InputMismatchException, LexerNoViableAltException, NoViableAltException, ParserRuleContext } from "antlr4ts";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { Recognizer } from "antlr4ts/Recognizer";
import { getParseRuleSource } from "./utils";

/**
 * The core error for the Kipper module.
 */
export class KipperError extends Error {
	/**
	 * Traceback metadata.
	 * @private
	 * @since 0.3.0
	 */
	private tracebackData: {
		/**
		 * Represents the line and column of the error.
		 * @since 0.3.0
		 */
		location: { line: number | undefined; col: number | undefined };
		/**
		 * Represents the path to the file where the error occurred.
		 * @since 0.3.0
		 */
		filePath: string | undefined;
		/**
		 * Represents the original line of code that caused this error.
		 * @since 0.4.0
		 */
		tokenSrc: string | undefined;
	};

	/**
	 * The original {@link ParserRuleContext antlr4 context} instance for this token.
	 * @since 0.3.0
	 */
	public antlrCtx: ParserRuleContext | undefined;

	constructor(msg: string, token?: ParserRuleContext) {
		super(msg);
		this.name = this.constructor.name;
		this.tracebackData = { location: { line: undefined, col: undefined }, filePath: undefined, tokenSrc: undefined };
		this.antlrCtx = token;
	}

	/**
	 * Update traceback context based on a file-line and column.
	 * @param traceback The traceback data.
	 * @since 0.3.0
	 */
	public setMetadata(traceback: {
		location: { line: number | undefined; col: number | undefined };
		filePath: string | undefined;
		tokenSrc: string | undefined;
	}) {
		this.tracebackData = traceback;
	}

	/**
	 * Get the traceback of this item.
	 * @note The metadata in this traceback should be set using {@link setMetadata}.
	 * @since 0.3.0
	 */
	public getTraceback(): string {
		return (
			`Traceback:\n  File '${this.tracebackData.filePath ?? "Unknown"}', ` +
			`line ${this.tracebackData.location ? this.tracebackData.location.line : "'Unknown'"}, ` +
			`col ${this.tracebackData.location ? this.tracebackData.location.col : "'Unknown'"}:\n` +
			`${this.tokenSrc ? "    " + this.tokenSrc + "\n" : ""}` +
			`${this.tokenSrc ? "    " + "^".repeat(this.tokenSrc.length) + "\n" : ""}` +
			`${this.name}: ${this.message}`
		);
	}

	/**
	 * Returns the line where the error occurred.
	 * @since 0.4.0
	 */
	public get line(): number | undefined {
		return this.tracebackData.location.line;
	}

	/**
	 * Returns the column where the error occurred.
	 * @since 0.4.0
	 */
	public get col(): number | undefined {
		return this.tracebackData.location.col;
	}

	/**
	 * The path to the file where the error occurred.
	 * @since 0.4.0
	 */
	public get filePath(): string | undefined {
		return this.tracebackData.filePath;
	}

	/**
	 * Returns the token source where the error occurred.
	 * @since 0.4.0
	 */
	public get tokenSrc(): string | undefined {
		// Get the token source, if it was not set already - The fallback option requires this.antlrCtx to be set,
		// otherwise it will default to undefined.
		return this.tracebackData.tokenSrc ?? (this.antlrCtx ? getParseRuleSource(this.antlrCtx) : undefined);
	}
}

/**
 * Internal error for Kipper. This error should always be printed with its stack.
 * @since 0.3.0
 */
export class KipperInternalError extends Error {
	constructor(msg: string) {
		super(`Internal error: ${msg} - Report this bug to the developer with the traceback!`);
		this.name = this.constructor.name;
	}
}

/**
 * SyntaxError that is used to indicate a syntax error detected by the antlr4 lexer
 */
export class KipperSyntaxError<Token> extends KipperError {
	private readonly _recognizer: Recognizer<Token, any>;

	private readonly _offendingSymbol: Token | undefined;

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
	 * @param {string} msg The msg that was generated as the error message in the Parser
	 * @param {RecognitionException} error The error instance that raised the syntax error in the Lexer
	 */
	public constructor(
		recognizer: Recognizer<Token, any>,
		offendingSymbol: Token | undefined,
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
		this._msg = msg;
		this._error = error;
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
export class InvalidGlobalError extends KipperError {
	constructor(identifier: string) {
		super(`Global definition '${identifier}' already exists or identifier is already in use.`);
	}
}

/**
 * Represents all errors in the identifier error group.
 * @since 0.3.0
 */
export abstract class IdentifierError extends KipperError {
	protected constructor(msg: string) {
		super(msg);
		this.name = "IdentifierError";
	}
}

/**
 * Error that is thrown when a variable is used that is only declared and has no value set.
 */
export class UndefinedIdentifierError extends IdentifierError {
	constructor(identifier: string) {
		super(`Identifier '${identifier}' has been declared, but not defined.`);
    this.name = "UndefinedIdentifierError";
	}
}

/**
 * Error that is thrown when an identifier is used that is unknown to the program.
 * @since 0.6.0
 */
export class UnknownIdentifier extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown identifier '${identifier}'.`);
    this.name = "UnknownIdentifier";
	}
}

/**
 * Error that is thrown when a variable definition is used, but it is unknown to the program.
 * @deprecated
 */
export class UnknownVariableIdentifierError extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown variable identifier '${identifier}'.`);
		console.warn("'UnknownVariableIdentifier' is deprecated, replace with 'UnknownIdentifier'");
	}
}

/**
 * Error that is thrown when a function definition is used, but it is unknown to the program.
 * @deprecated
 */
export class UnknownFunctionIdentifierError extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown function identifier '${identifier}'.`);
		console.warn("'UnknownFunctionIdentifierError' is deprecated, replace with 'UnknownIdentifier'");
	}
}

/**
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * a variable definition or declaration.
 */
export class IdentifierAlreadyUsedByVariableError extends IdentifierError {
	constructor(identifier: string) {
		super(`Identifier '${identifier}' already in use by a variable.`);
	}
}

/**
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * a function definition or declaration.
 */
export class IdentifierAlreadyUsedByFunctionError extends IdentifierError {
	constructor(identifier: string) {
		super(`Identifier '${identifier}' already in use by a function.`);
	}
}

/**
 * Represents all errors in the invalid overwrite group.
 * @since 0.3.0
 */
export abstract class InvalidOverwriteError extends KipperError {
	protected constructor(msg: string) {
		super(msg);
		this.name = "InvalidOverwriteError";
	}
}

/**
 * Error that is thrown when a new function definition or declaration is registered and the used identifier is
 * already in use by a previous function definition.
 */
export class FunctionDefinitionAlreadyExistsError extends InvalidOverwriteError {
	constructor(identifier: string) {
		super(`Definition of function '${identifier}' already exists.`);
	}
}

/**
 * Error that is thrown when a new variable definition or declaration is registered and the used identifier is
 * already in use by a previous function definition.
 */
export class VariableDefinitionAlreadyExistsError extends InvalidOverwriteError {
	constructor(identifier: string) {
		super(`Definition of variable '${identifier}' already exists.`);
	}
}

/**
 * Represents all errors in the mismatching type group.
 * @since 0.3.0
 */
export class MismatchedTypesErrors extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "InvalidOverwriteError";
	}
}

/**
 * Invalid argument type that is not assignable/usable on the parameter.
 */
export class InvalidArgumentTypeError extends MismatchedTypesErrors {
	constructor(argIdentifier: string, expectedType: string, receivedType: string) {
		super(
			`Argument of type '${receivedType}' is not assignable to parameter '${argIdentifier}' of type '${expectedType}'.`,
		);
	}
}

/**
 * This error is thrown whenever a variable type is used that is unknown the kipper language.
 */
export class UnknownTypeError extends KipperError {
	constructor(type: string) {
		super(`Unknown type '${type}'!`);
	}
}

/**
 * This error is thrown whenever an identifier is registered that interferes with a built-in function or variable.
 * No double definitions or overwrites of global built-in definitions allowed!
 */
export class BuiltInOverwriteError extends KipperError {
	constructor(identifier: string) {
		super(`May not overwrite built-in identifier '${identifier}'.`);
	}
}

/**
 * This error is thrown whenever a token is unable to fetch its metadata from the antlr4 context instances or a
 * compilation is started without the required semantic data.
 */
export class UnableToDetermineMetadataError extends KipperInternalError {
	constructor() {
		super(`Failed to determine metadata for one or more tokens.`);
	}
}

/**
 * This error is thrown whenever the semantics of a token is undefined.
 * @since 0.6.0
 */
export class UndefinedSemanticsError extends KipperInternalError {
	constructor() {
		super(`Failed to determine semantics for one or more tokens. Did you forget to run 'token.semanticAnalysis'?`);
	}
}
