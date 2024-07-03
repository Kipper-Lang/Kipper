/**
 * Type semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../../../analysis";
import type { PrimaryExpressionTypeSemantics } from "../primary-expression-type-semantics";

/**
 * Type semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.10.0
 */
export interface IdentifierPrimaryExpressionTypeSemantics extends PrimaryExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to.
	 *
	 * This will always be the value type of the reference that the
	 * {@link IdentifierPrimaryExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	evaluatedType: ProcessedType;
}
