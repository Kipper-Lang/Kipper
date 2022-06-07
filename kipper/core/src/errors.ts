/**
 * Errors for the {@link KipperCompiler} that are used throughout this library. All errors inherit from the core
 * {@link KipperError}
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.2
 */
import type {
	InputMismatchException,
	LexerNoViableAltException,
	NoViableAltException,
	ParserRuleContext,
} from "antlr4ts";
import type { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import type { RecognitionException } from "antlr4ts/RecognitionException";
import type { Recognizer } from "antlr4ts/Recognizer";
import { getParseRuleSource } from "./utils";
import { KipperParseStream } from "./compiler";

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
		/**
		 * The original stream/code of the program.
		 * @since 0.8.0
		 */
		streamSrc: KipperParseStream | undefined;
	};

	/**
	 * The original {@link ParserRuleContext antlr4 context} instance for this token.
	 * @since 0.3.0
	 */
	public antlrCtx: ParserRuleContext | undefined;

	constructor(msg: string, token?: ParserRuleContext) {
		super(msg);
		this.name = this.constructor.name;
		this.tracebackData = {
			location: { line: undefined, col: undefined },
			filePath: undefined,
			tokenSrc: undefined,
			streamSrc: undefined,
		};
		this.antlrCtx = token;
	}

	/**
	 * Update traceback context data.
	 * @param traceback The traceback data.
	 * @since 0.3.0
	 */
	public setTracebackData(traceback: {
		location: { line: number | undefined; col: number | undefined };
		filePath: string | undefined;
		tokenSrc: string | undefined;
		streamSrc: KipperParseStream | undefined;
	}) {
		this.tracebackData = traceback;
	}

	/**
	 * Get the traceback of this item.
	 * @note The metadata in this traceback should be set using {@link setTracebackData}.
	 * @since 0.3.0
	 */
	public getTraceback(): string {
		const tokenSrc = (() => {
			if (
				this.tracebackData.location?.line !== undefined &&
				this.tracebackData.location?.col !== undefined &&
				this.tracebackData.streamSrc !== undefined &&
				this.tracebackData.tokenSrc !== undefined
			) {
				const srcLine = this.tracebackData.streamSrc.lines[this.tracebackData.location.line - 1];
				let startOfError = this.tracebackData.location.col;

				// In case the error is at the exact end of the line, mark the whole line as the error origin
				if (startOfError === this.tracebackData.tokenSrc.length) {
					startOfError = 0;
				}

				let endOfError = startOfError + this.tracebackData.tokenSrc.length;

				// Generate underline
				const underline: string = Array.from(srcLine)
					.map((_, i) => (i >= startOfError && i < endOfError ? "^" : " "))
					.join("");

				return `${srcLine}\n    ${underline}`;
			} else {
				return (
					(this.tokenSrc ? `${this.tokenSrc}\n` : "") + (this.tokenSrc ? "    " + "^".repeat(this.tokenSrc.length) : "")
				);
			}
		})();

		return (
			`Traceback:\n  File '${this.tracebackData.filePath ?? "Unknown"}', ` +
			`line ${this.tracebackData.location ? this.tracebackData.location.line : "'Unknown'"}, ` +
			`col ${this.tracebackData.location ? this.tracebackData.location.col : "'Unknown'"}:\n` +
			`${tokenSrc ? `    ${tokenSrc}\n` : ""}` +
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
		super(`Internal error: ${msg} - Report this bug to the developer using the traceback!`);
		this.name = this.constructor.name;
	}
}

/**
 * An error that is raised whenever a feature is used that has not been implemented yet.
 * @since 0.6.0
 */
export class KipperNotImplementedError extends KipperError {
	constructor(msg: string) {
		super(`${msg} Update Kipper or watch out for future updates.`);
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
	 * @param recognizer The Antlr4 Parser - should normally always be KipperParser
	 * @param offendingSymbol The token that caused the error
	 * @param msg The msg that was generated as the error message in the Parser
	 * @param error The error instance that raised the syntax error in the Lexer
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
 * Error that is thrown when trying to register a global that already exists in {@link KipperProgramContext.builtIns}.
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
		super(`Invalid reference to declared '${identifier}'. `);
		this.name = "UndefinedIdentifierError";
	}
}

/**
 * Error that is thrown when an identifier is used that is unknown to the program.
 * @since 0.6.0
 */
export class UnknownIdentifierError extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown identifier '${identifier}'.`);
		this.name = "UnknownIdentifierError";
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
 * Error that is thrown whenever an identifier is declared that interferes with a built-in function or variable.
 * No double definitions or overwrites of global built-in definitions allowed!
 */
export class BuiltInOverwriteError extends IdentifierError {
	constructor(identifier: string) {
		super(`May not overwrite built-in identifier '${identifier}'.`);
	}
}

/**
 * Error that is thrown whenever an identifier is declared that interferes with a reserved identifier.
 * @since 0.8.0
 */
export class ReservedIdentifierOverwriteError extends IdentifierError {
	constructor(identifier: string) {
		super(`May not overwrite reserved identifier '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new function is defined or declared and the used identifier is
 * already in use by a previous function definition.
 */
export class FunctionDefinitionAlreadyExistsError extends IdentifierError {
	constructor(identifier: string) {
		super(`Definition of function '${identifier}' already exists.`);
	}
}

/**
 * Error that is thrown when a new variable is defined or declared and the used identifier is
 * already in use by a previous function definition.
 */
export class VariableDefinitionAlreadyExistsError extends IdentifierError {
	constructor(identifier: string) {
		super(`Definition of variable '${identifier}' already exists.`);
	}
}

/**
 * Represents all errors in the mismatching type group.
 * @since 0.7.0
 */
export class TypeError extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "TypeError";
	}
}

/**
 * Error that is thrown whenever a return type is used that may not be returned.
 * @since 0.6.0
 */
export class InvalidReturnTypeError extends TypeError {
	constructor(type: string) {
		super(`Type '${type}' can not be returned.`);
		this.name = "InvalidReturnTypeError";
	}
}

/**
 * Error that is thrown whenever an invalid arithmetic operation is used, where the types are conflicting or can not
 * interact with one another.
 * @since 0.6.0
 */
export class InvalidArithmeticOperationError extends TypeError {
	constructor(firstType: string, secondType: string) {
		super(`Invalid arithmetic operation between types '${firstType}' and '${secondType}'.`);
		this.name = "InvalidArithmeticOperationError";
	}
}

/**
 * Error that is thrown whenever an argument is not assignable to the parameter's type.
 */
export class InvalidArgumentTypeError extends TypeError {
	constructor(paramIdentifier: string, expectedType: string, receivedType: string) {
		super(
			`Argument of type '${receivedType}' is not assignable to parameter '${paramIdentifier}' of type '${expectedType}'.`,
		);
	}
}

/**
 * Error that is thrown whenever a conversion is used that is not supported.
 * @since 0.8.0
 */
export class InvalidConversionError extends TypeError {
	constructor(originalType: string, destType: string) {
		super(`Type conversion from '${originalType}' to '${destType}' is not allowed.`);
	}
}

/**
 * Error that is thrown whenever a variable type is used that is unknown the kipper language.
 */
export class UnknownTypeError extends TypeError {
	constructor(type: string) {
		super(`Unknown type '${type}'!`);
	}
}

/**
 * Error that is thrown whenever an assignment expression is invalid.
 * @since 0.7.0
 */
export class InvalidAssignmentError extends KipperError {
	constructor(msg: string) {
		super(msg);
	}
}

/**
 * Generic error with arguments of a function call.
 * @since 0.6.0
 */
export class ArgumentError extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "ArgumentError";
	}
}

/**
 * Error that is thrown when an invalid amount of arguments is passed to a function.
 * @since 0.6.0
 */
export class InvalidAmountOfArgumentsError extends ArgumentError {
	constructor(func: string, expected: number, received: number) {
		super(`Expected ${expected} arguments for function '${func}', received ${received}.`);
	}
}

/**
 * Error that is thrown whenever a token is unable to fetch its metadata from the antlr4 context instances or a
 * compilation is started without the required semantic data.
 */
export class UnableToDetermineMetadataError extends KipperInternalError {
	constructor() {
		super(`Failed to determine metadata for one or more parse tree or AST nodes.`);
	}
}

/**
 * Error that is thrown whenever the {@link CompilableASTNode.semanticData} field of a token is undefined.
 * @since 0.6.0
 */
export class UndefinedSemanticsError extends KipperInternalError {
	constructor() {
		super(`Failed to determine semantics for one or more tokens. Did you forget to run 'semanticAnalysis'?`);
	}
}
