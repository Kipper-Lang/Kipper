/**
 * Errors for the {@link KipperCompiler} that are used throughout this library. All errors inherit from the core
 * {@link KipperError}
 * @since 0.0.2
 */
import type { InputMismatchException, LexerNoViableAltException, NoViableAltException } from "antlr4ts";
import type { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import type { RecognitionException } from "antlr4ts/RecognitionException";
import type { Recognizer } from "antlr4ts/Recognizer";
import type { CompilableASTNode, KipperFileStream, KipperProgramContext } from "./compiler";
import { addLeftIndent, getParseRuleSource } from "./tools";

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
	streamSrc: KipperFileStream | undefined;
	/**
	 * The AST Node that caused the error.
	 * @since 0.10.0
	 */
	errorNode: CompilableASTNode | undefined;
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
	 * The cause of this error. This is used to chain errors together.
	 * @since 0.12.0
	 */
	public cause?: KipperError;

	constructor(msg: string, cause?: KipperError) {
		super(msg);
		this.name = this.constructor.name === "KipperError" ? "Error" : this.constructor.name;
		this.tracebackData = {
			location: { line: undefined, col: undefined },
			filePath: undefined,
			tokenSrc: undefined,
			streamSrc: undefined,
			errorNode: undefined,
		};
		this.cause = cause;
	}

	/**
	 * Update traceback context data that are associated with this error.
	 * @param traceback The traceback data.
	 * @since 0.3.0
	 */
	public setTracebackData(traceback: TracebackMetadata) {
		this.tracebackData = traceback;
	}

	/**
	 * Get the traceback of this item.
	 * @note The metadata in this traceback should be set using {@link setTracebackData}.
	 * @since 0.3.0
	 */
	public getTraceback(): string {
		// Sanitize the traceback message (No actual newlines)
		this.message = this.message.replace(/\n/g, "\\n");

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
				if (startOfError === srcLine.length - 1) {
					let countOfLeadingSpaces = 0;
					for (const char of srcLine) {
						if (char === " ") {
							countOfLeadingSpaces++;
						} else {
							break;
						}
					}
					startOfError = countOfLeadingSpaces; // Set the start of the error to the first non-space character
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
			`${this.name}: ${this.message}`.replace(/\\n/g, `\n`)
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
		return (
			this.tracebackData.tokenSrc ??
			(this.tracebackData.errorNode?.antlrRuleCtx
				? getParseRuleSource(this.tracebackData.errorNode.antlrRuleCtx)
				: undefined)
		);
	}

	/**
	 * Returns the program ctx containing the metadata of the program compilation in which the error occurred.
	 * @since 0.10.2
	 */
	public get programCtx(): KipperProgramContext | undefined {
		return this.tracebackData.errorNode?.programCtx;
	}
}

/**
 * An error that is thrown when the compiler is misconfigured or have invalid input.
 * @since 0.10.0
 */
export class KipperConfigError extends KipperError {
	constructor(msg: string) {
		super(msg);
	}
}

/**
 * Internal error for Kipper. This error should always be printed with its stack.
 * @since 0.3.0
 */
export class KipperInternalError extends Error {
	constructor(msg: string) {
		super(msg);
		this.name = this.constructor.name === "KipperInternalError" ? "InternalError" : this.constructor.name;
	}
}

/**
 * Error that is thrown when an AST factory is unable to create an AST node based on the given context.
 * @since 0.10.0
 */
export class ASTFactoryError extends KipperInternalError {
	constructor(msg: string = "") {
		super(msg || "Failed to create AST node from ANTLR rule context. Likely invalid rule context instance.");
		this.name = "InternalError";
	}
}

/**
 * Error that is thrown whenever an {@link ParserASTNode} can not determine its own metadata and fails to process
 * itself during {@link CompilableASTNode.semanticAnalysis semantic analysis}.
 * @since 0.6.0
 */
export class UnableToDetermineSemanticDataError extends KipperInternalError {
	constructor() {
		super("Failed to determine metadata for one or more AST nodes.");
		this.name = "InternalError";
	}
}

/**
 * Error that is thrown whenever the {@link CompilableASTNode.semanticData} field of an AST node is undefined.
 * @since 0.6.0
 */
export class UndefinedSemanticsError extends KipperInternalError {
	constructor() {
		super(
			"Failed to determine semantics for one or more AST nodes. Most likely the semantic analysis failed or the" +
				" property was accessed too early during semantic analysis",
		);
		this.name = "InternalError";
	}
}

/**
 * Error that is thrown whenever the {@link Declaration.scopeDeclaration} field of an AST Node is undefined.
 *
 * This indicates a
 * @since 0.10.0
 */
export class UndefinedDeclarationCtxError extends KipperInternalError {
	constructor() {
		super(
			"Failed to determine the declaration context for a declaration. Most likely the semantic analysis failed" +
				" or the property was accessed too early during semantic analysis.",
		);
		this.name = "InternalError";
	}
}

/**
 * Error that is thrown whenever the {@link ScopeNode.innerScope} of an {@link ScopeNode} is undefined or can't be
 * determined.
 *
 * This indicates a severe error in the compiler, as that should always be syntactically impossible.
 * @since 0.10.0
 */
export class UnableToGetInnerScopeError extends KipperInternalError {
	constructor() {
		super(
			"Failed to get the inner scope of a scope-node. This indicates a severe bug in the compiler, as that should" +
				" always be syntactically impossible.",
		);
		this.name = "InternalError";
	}
}

/**
 * Error that is thrown whenever {@link CheckedType.getCompilableType} is called, despite the type not being compilable.
 *
 * This is thrown to avoid the compiler from using {@link UndefinedType} for a compilation, as that would cause
 * undefined behavior.
 * @since 0.10.0
 */
export class TypeNotCompilableError extends KipperInternalError {
	constructor() {
		super(
			"Failed to determine the compilation type for a type. Most likely the type checking failed or the" +
				" compilation was run despite type checking errors.",
		);
	}
}

/**
 * Error that is thrown whenever a type is used for type checking that can not be used for type checking.
 * @since 0.11.0
 */
export class TypeCanNotBeUsedForTypeCheckingError extends KipperInternalError {
	constructor() {
		super("This Type can not be used for type checking. This is a bug in the compiler.");
	}
}

/**
 * Error that is thrown whenever a parent node attempts to access the {@link CompilableASTNode.semanticData} of a child,
 * but the child had an error during semantic analysis. This is to prevent the parent from using the child's data
 * despite the child having an error.
 *
 * This will unlike {@link UndefinedSemanticsError} not be thrown to indicate a fatal error/bug in the compiler, but
 * is used to early abort the semantic analysis of a parent node. This therefore only affects the control flow of the
 * compiler and not the correctness of the compiler.
 * @since 0.10.0
 */
export class MissingRequiredSemanticDataError extends KipperInternalError {
	constructor(msg: string = "") {
		super(msg || "Can not analyse AST node due to missing semantic data in children.");
	}
}

/**
 * Error that is thrown whenever a generic type is initialised that contains more than one spread argument.
 * @since 0.12.0
 */
export class GenericCanOnlyHaveOneSpreadError extends KipperInternalError {
	constructor() {
		super("Only one generic argument can be a spread argument.");
	}
}

/**
 * Error that is thrown whenever a variable, type or function is registered in the universe scope where the identifier
 * is already in use.
 * @since 0.12.0
 */
export class DuplicateUniverseKeyError extends KipperInternalError {
	constructor(key: string) {
		super(`Duplicate key '${key}' in universe scope.`);
	}
}

/**
 * An error that is raised whenever a feature is used that has not been implemented yet.
 * @since 0.6.0
 */
export class KipperNotImplementedError extends KipperError {
	constructor(msg: string) {
		super(`${msg} Update Kipper or watch out for future releases.`);
		this.name = "NotImplementedError";
	}
}

/**
 * Syntax error indicating a generic syntax error.
 */
export class KipperSyntaxError extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "SyntaxError";
	}
}

/**
 * Error that is thrown when a return statement is used outside a function.
 * @since 0.10.0
 */
export class InvalidReturnStatementError extends KipperSyntaxError {
	constructor() {
		super("A return statement can only be used inside a function body.");
	}
}

/**
 * Error that is thrown when a jump statement (either 'break' or 'continue') are used outside a loop.
 * @since 0.10.0
 */
export class InvalidJumpStatementError extends KipperSyntaxError {
	constructor() {
		super("A jump statement can only be used inside a loop.");
	}
}

/**
 * Error that is thrown whenever a function is defined without a body.
 * @since 0.10.0
 */
export class MissingFunctionBodyError extends KipperSyntaxError {
	constructor() {
		super("Missing declaration body of function.");
	}
}

/**
 * Error that is thrown whenever a unary expression is used with an invalid operand.
 * @since 0.10.0
 */
export class InvalidUnaryExpressionOperandError extends KipperSyntaxError {
	constructor() {
		super("Invalid operand for the specified unary expression.");
	}
}

/**
 * Error that is thrown whenever the parser or lexer report a syntax error.
 * @since 0.10.0
 */
export class LexerOrParserSyntaxError<Token> extends KipperSyntaxError {
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
	 * Create a new {@link LexerOrParserSyntaxError} instance.
	 * @param recognizer The Antlr4 Parser - should normally always be KipperParser.
	 * @param offendingSymbol The token that caused the error.
	 * @param msg The msg that was generated as the error message in the Parser.
	 * @param error The error instance that raised the syntax error in the Lexer.
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
	 * Returns the Antlr4 Parser - should normally always be {@link KipperParser}.
	 */
	public get recognizer(): Recognizer<Token, any> {
		return this._recognizer;
	}

	/**
	 * Returns the token that caused the error.
	 */
	public get offendingSymbol(): Token | undefined {
		return this._offendingSymbol;
	}

	/**
	 * Returns the msg that was generated as the error message in the Parser.
	 */
	public get msg(): string {
		return this._msg;
	}

	/**
	 * Returns the error instance that raised the syntax error in the Lexer.
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
 * Error that is thrown when a built-in {@link BuiltInVariable variable} or {@link BuiltInFunction function} is
 * registered that does not have a function in the {@link KipperCompileTarget.builtInGenerator} class assigned at
 * compile start.
 * @since 0.10.0
 */
export class BuiltInOrInternalGeneratorFunctionNotFoundError extends KipperError {
	constructor(identifier: string) {
		super(`Target built-in or internal generator does not contain a function for '${identifier}'.`);
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
 * Error that is thrown when a variable is used that is undefined/has not been assigned.
 * @since 0.10.0
 */
export class UndefinedReferenceError extends IdentifierError {
	constructor(reference: string) {
		super(`Reference '${reference}' is used before being assigned.`);
		this.name = "ReferenceError";
	}
}

/**
 * Error that is thrown when an identifier is used that is unknown to the program.
 * @since 0.6.0
 */
export class UnknownReferenceError extends IdentifierError {
	constructor(identifier: string) {
		super(`Unknown reference '${identifier}'.`);
		this.name = "ReferenceError";
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
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * another member.
 */
export class IdentifierAlreadyUsedByMemberError extends IdentifierError {
	constructor(identifier: string, kind: "interface" | "class") {
		super(`Redeclaration of ${kind} member '${identifier}'.`);
	}
}

/**
 * Error that is thrown when a new identifier is registered, but the used identifier is already in use by
 * a parameter declaration.
 * @since 0.10.0
 */
export class IdentifierAlreadyUsedByParameterError extends IdentifierError {
	constructor(identifier: string) {
		super(`Redeclaration of parameter '${identifier}'.`);
	}
}

/**
 * Error that is thrown whenever an identifier is declared that would overwrite a built-in function or variable.
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
 * Represents all errors in the mismatching type group.
 * @since 0.7.0
 */
export class TypeError extends KipperError {
	constructor(msg: string, cause?: TypeError) {
		super(`${msg}${cause?.message ? `\n${addLeftIndent(cause.message, "~> ")}` : ""}`, cause);
		this.name = "TypeError";
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
 * Error that is thrown whenever an invalid bitwise operation is used, where the types are conflicting or can not
 * interact with one another.
 * @since 0.6.0
 */
export class BitwiseOperationTypeError extends TypeError {
	constructor(firstType: string, secondType: string) {
		super(`Bitwise expressions are only allowed for type 'num'. Received '${firstType}' and '${secondType}'.`);
	}
}

/**
 * Error that is thrown whenever an argument is not assignable to the parameter's type.
 */
export class ArgumentAssignmentTypeError extends TypeError {
	constructor(paramIdentifier: string, expectedType: string, receivedType: string, cause?: TypeError) {
		super(
			`Type '${receivedType}' is not assignable to parameter '${paramIdentifier}' of type '${expectedType}'.`,
			cause,
		);
	}
}

/**
 * Error that is thrown whenever an assignments consists of invalid types.
 *
 * This may also be thrown in case of an invalid return type.
 * @since 0.8.3
 */
export class AssignmentTypeError extends TypeError {
	constructor(expectedType: string, receivedType: string, cause?: TypeError) {
		super(`Type '${receivedType}' is not assignable to type '${expectedType}'.`, cause);
	}

	static formatGenericTypes(identifier: string, genericTypes?: Array<string>): string {
		const params = genericTypes?.join(", ");
		return `${identifier}${params ? `<${params}>` : ""}`;
	}
}

/**
 * Error that is thrown whenever a property is assigned to that is not defined in the object.
 * @since 0.11.0
 */
export class PropertyAssignmentTypeError extends TypeError {
	constructor(identifier: string, propertyType: string, valueType: string, cause?: TypeError) {
		super(`Type '${valueType}' is not assignable to property '${identifier}' of type '${propertyType}'.`, cause);
	}
}

/**
 * Error that is thrown whenever a property is missing in this type but is required in another type.
 * @since 0.11.0
 */
export class PropertyNotFoundTypeError extends TypeError {
	constructor(thisType: string, objType: string, identifier: string) {
		super(`Property '${identifier}' not found in '${thisType}' but required in object of type '${objType}'.`);
	}
}

/**
 * Error that is thrown whenever a generic argument is used that is not assignable to the expected type.
 * @since 0.12.0
 */
export class GenericArgumentTypeError extends TypeError {
	constructor(identifier: string, expectedType: string, receivedType: string, cause?: TypeError) {
		super(`Type '${receivedType}' is not assignable to generic argument '${identifier}' of type '${expectedType}'.`);
	}
}

/**
 * Error that is thrown whenever a function type is casted to a function with a different amount of arguments.
 * @since 0.12.0
 */
export class MismatchingArgCountBetweenFuncTypesTypeError extends TypeError {
	constructor(expected: number, received: number) {
		super(`Function type expects ${expected} arguments, received ${received}.`);
	}
}

/**
 * Error that is thrown when an invalid amount of generic arguments is passed to a type.
 * @since 0.12.0
 */
export class InvalidAmountOfGenericArgumentsError extends TypeError {
	constructor(typeIdentifier: string, expected: number, received: number, spreadPresent: boolean) {
		super(
			`Type '${typeIdentifier}' ${spreadPresent ? "expects at least" : "only accepts"} ${expected} generic` +
				`argument${expected === 1 ? "" : "s"}, received ${received}.`,
		);
	}
}

/**
 * Error that is thrown whenever a type is used that is not a generic type.
 * @since 0.12.0
 */
export class CanNotUseNonGenericAsGenericTypeError extends TypeError {
	constructor(identifier: string) {
		super(`Type '${identifier}' does not accept generic arguments.`);
	}
}

/**
 * Error that is thrown whenever a type is used that is not a function type.
 * @since 0.12.0
 */
export class TypeNotAssignableToUnionError extends TypeError {
	constructor(type: string, unionType: Array<string>, cause?: TypeError) {
		super(`Type '${type}' is not assignable to union type '${unionType.join(" | ")}'.`, cause);
	}
}

/**
 * Error that is thrown whenever a read-only variable is being assigned to.
 * @since 0.8.3
 */
export class ReadOnlyWriteTypeError extends TypeError {
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
 * Error that is thrown whenever a declaration type is used that is unknown to the program.
 */
export class UnknownTypeTypeError extends TypeError {
	constructor(type: string) {
		super(`Unknown type '${type}'.`);
	}
}

/**
 * Error that is thrown whenever a type is used that is not a type.
 * @since 0.11.0
 */
export class ReferenceCanNotBeUsedAsTypeError extends TypeError {
	constructor(identifier: string) {
		super(`Reference '${identifier}' can not be used as a type.`);
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
 * Error that is thrown whenever a type is used with the 'typeof' operator that is not valid.
 * @since 0.9.0
 */
export class InvalidTypeofOperandError extends TypeError {
	constructor(type: string) {
		super(`Typeof operand '${type}' is not valid.`);
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
 * Error that is thrown whenever an expression is called that is not a function or a variable storing a function.
 * @since 0.10.0
 */
export class ExpressionNotCallableError extends TypeError {
	constructor(type: string) {
		super(`Expression of type '${type}' is not callable.`);
	}
}

/**
 * Error that is thrown when not all code paths of a function return a value.
 * @since 0.10.0
 */
export class IncompleteReturnsInCodePathsError extends TypeError {
	constructor() {
		super("Not all code paths of function return a value.");
	}
}

/**
 * Error that is thrown whenever a value is indexed or accessed that is not a string, array or object.
 * @since 0.10.0
 */
export class ValueNotIndexableTypeError extends TypeError {
	constructor(type: string) {
		super(`Value of type '${type}' is not indexable.`);
	}
}

/**
 * Error that is thrown whenever the given value can not be accessed using the given access method.
 * @since 0.12.0
 */
export class ValueTypeNotIndexableWithGivenAccessor extends TypeError {
	constructor(type: string, accessType: string) {
		super(`Value of type '${type}' can not be accessed using '${accessType}' style indexing`);
	}
}

/**
 * Error that is thrown when a key is used that has a different type than the key type of the object.
 * @since 0.10.0
 */
export class InvalidKeyTypeError extends TypeError {
	constructor(objType: string, keyType: string) {
		super(`Key of type '${keyType}' can not be used to access object-like of type '${objType}'.`);
	}
}

/**
 * Error that is thrown whenever the given identifier does not exist on an object.
 * @since 0.12.0
 */
export class PropertyDoesNotExistError extends TypeError {
	constructor(objType: string, identifier: string) {
		super(`Property '${identifier}' does not exist on type '${objType}'`);
	}
}

/**
 * Error that is thrown whenever a type is used for an instanceof expression that is not a class.
 * @since 0.12.0
 */
export class InvalidInstanceOfTypeError extends TypeError {
	constructor(type: string) {
		super(`Type '${type}' can not be used with 'instanceof' operator. Expects a class.`);
	}
}

/**
 * Error that is thrown whenever a type is used for a matches expression that is not an interface.
 * @since 0.12.0
 */
export class InvalidMatchesTypeError extends TypeError {
	constructor(type: string) {
		super(`Type '${type}' can not be used with 'matches' operator. Expects an interface.`);
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
