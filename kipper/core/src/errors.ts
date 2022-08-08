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
import type { KipperParseStream } from "./compiler";
import { getParseRuleSource } from "./utils";

/**
 * The interface representing the traceback data for a {@link KipperError}.
 * @since 0.9.0
 */
export interface TracebackMetadata {
	/**
	 * The line and column of the error.
	 * @since 0.3.0
	 */
	location: { line: number | undefined; col: number | undefined };
	/**
	 * The path to the file where the error occurred.
	 * @since 0.3.0
	 */
	filePath: string | undefined;
	/**
	 * The line of code that caused this error.
	 * @since 0.4.0
	 */
	tokenSrc: string | undefined;
	/**
	 * The token stream (source code) of the program.
	 * @since 0.8.0
	 */
	streamSrc: KipperParseStream | undefined;
}

/**
 * The base error for the Kipper module. If a compiler error occurs in the Kipper module, this error is thrown.
 * @since 0.1.0
 */
export class KipperError extends Error {
	/**
	 * The traceback metadata for this error. It contains the line and column of the error, the path to the file,
	 * the line of code that caused the error, and the token stream (source code) of the program.
	 * @since 0.3.0
	 */
	public tracebackData: TracebackMetadata;

	/**
	 * The {@link ParserRuleContext antlr4 context} instance, which is the context in which the error occurred.
	 * @since 0.3.0
	 */
	public antlrCtx?: ParserRuleContext;

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

				return `${srcLine}\n  ${underline}`;
			} else {
				return (
					(this.tokenSrc ? `${this.tokenSrc}\n` : "") + (this.tokenSrc ? "  " + "^".repeat(this.tokenSrc.length) : "")
				);
			}
		})();

		return (
			`Traceback:\nFile '${this.tracebackData.filePath ?? "Unknown"}', ` +
			`line ${this.tracebackData.location ? this.tracebackData.location.line : "'Unknown'"}, ` +
			`col ${this.tracebackData.location ? this.tracebackData.location.col : "'Unknown'"}:\n` +
			`${tokenSrc ? `  ${tokenSrc}\n` : ""}` +
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
 * Warning, which is thrown whenever a compiler encounters an item that could potentially be problematic that it can
 * not solve itself.
 *
 * This is primarily like a {@link KipperError}, but should be not used as one.
 * @since 0.10.0
 */
export class KipperWarning extends KipperError {
	constructor(msg: string, token?: ParserRuleContext) {
		super(msg, token);
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
		super(`${msg} Update Kipper or watch out for future releases.`);
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
		super(`Invalid reference to undefined identifier '${identifier}'. `);
	}
}

/**
 * Error that is thrown when an identifier is used that is unknown to the program.
 * @since 0.6.0
 */
export class UnknownIdentifierError extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown identifier '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * a variable definition or declaration.
 */
export class IdentifierAlreadyUsedByVariableError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of variable '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * a function definition or declaration.
 */
export class IdentifierAlreadyUsedByFunctionError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of function '${identifier}'.`);
	}
}

/**
 * Error that is thrown whenever an identifier is declared that interferes with a built-in function or variable.
 * No double definitions or overwrites of global built-in definitions allowed!
 */
export class BuiltInOverwriteError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of built-in identifier '${identifier}'.`);
	}
}

/**
 * Error that is thrown whenever an identifier is declared that interferes with a reserved identifier.
 * @since 0.8.0
 */
export class ReservedIdentifierOverwriteError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of reserved identifier '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new function is defined or declared and the used identifier is
 * already in use by a previous function definition.
 */
export class FunctionDefinitionAlreadyExistsError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of function '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new variable is defined or declared and the used identifier is
 * already in use by a previous function definition.
 */
export class VariableDefinitionAlreadyExistsError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of variable '${identifier}'.`);
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
export class FunctionReturnTypeError extends TypeError {
	constructor(type: string) {
		super(`Type '${type}' can not be returned.`);
	}
}

/**
 * Error that is thrown whenever an invalid arithmetic operation is used, where the types are conflicting or can not
 * interact with one another.
 * @since 0.6.0
 */
export class ArithmeticOperationTypeError extends TypeError {
	constructor(firstType?: string, secondType?: string) {
		if (firstType && secondType) {
			// If the types caused the error, specify them in the error message
			super(`Invalid arithmetic operation between operands of type '${firstType}' and '${secondType}'.`);
		} else {
			super(`Invalid arithmetic operation.`);
		}
	}
}

/**
 * Error that is thrown whenever an argument is not assignable to the parameter's type.
 */
export class ArgumentTypeError extends TypeError {
	constructor(paramIdentifier: string, expectedType: string, receivedType: string) {
		super(`Type '${receivedType}' is not assignable to parameter '${paramIdentifier}' of type '${expectedType}'.`);
	}
}

/**
 * Error that is thrown whenever an assignments consists of invalid types.
 * @since 0.8.3
 */
export class AssignmentTypeError extends TypeError {
	constructor(leftExpType: string, rightExpType: string) {
		super(`Type '${rightExpType}' is not assignable to type '${leftExpType}'.`);
	}
}

/**
 * Error that is thrown whenever a read-only variable is being assigned to.
 * @since 0.8.3
 */
export class ReadOnlyTypeError extends TypeError {
	constructor(identifier: string) {
		super(`'${identifier}' is read-only and may not be assigned to.`);
	}
}

/**
 * Error that is thrown whenever a conversion is used that is not supported.
 * @since 0.8.0
 */
export class InvalidConversionTypeError extends TypeError {
	constructor(originalType: string, destType: string) {
		super(`Invalid conversion from '${originalType}' to '${destType}'.`);
	}
}

/**
 * Error that is thrown whenever a variable type is used that is unknown to the program.
 */
export class UnknownTypeError extends TypeError {
	constructor(type: string) {
		super(`Unknown type '${type}'.`);
	}
}

/**
 * Error that is thrown whenever a relational comparison is used with types that are not comparable.
 * @since 0.9.0
 */
export class InvalidRelationalComparisonTypeError extends TypeError {
	constructor(type1: string, type2: string) {
		super(`Type '${type1}' is not comparable to type '${type2}'.`);
	}
}

/**
 * Error that is thrown whenever a unary operator is used with an expression of an invalid type.
 * @since 0.9.0
 */
export class InvalidUnaryExpressionTypeError extends TypeError {
	constructor(operator: string, type: string) {
		super(`Unary operator '${operator}' is not allowed for type '${type}'.`);
	}
}

/**
 * Error that is thrown whenever a constant declaration is not defined.
 * @since 0.8.3
 */
export class UndefinedConstantError extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "UndefinedConstantError";
	}
}

/**
 * Error that is thrown whenever an assignment expression is semantically invalid.
 * @since 0.7.0
 */
export class InvalidAssignmentError extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "InvalidAssignmentError";
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
		super(`Function '${func}' only accepts ${expected} argument${expected === 1 ? "" : "s"}, received ${received}.`);
	}
}

/**
 * Error that is thrown whenever an {@link ParserASTNode} can not determine its own metadata and fails to process
 * itself during {@link CompilableASTNode.semanticAnalysis semantic analysis}.
 * @since 0.6.0
 */
export class UnableToDetermineSemanticDataError extends KipperInternalError {
	constructor() {
		super(`Failed to determine metadata for one or more AST nodes.`);
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
