/**
 * Type semantics for AST Node {@link TypeSpecifierExpression}.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../../analysis";
import type { ExpressionTypeSemantics } from "../expression-type-semantics";

/**
 * Type semantics for AST Node {@link TypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface TypeSpecifierExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type that is being stored by this type specifier. This is the type that would be used to determine what
	 * values should be stored in a variable.
	 * @since 0.10.0
	 */
	storedType: ProcessedType;
}
