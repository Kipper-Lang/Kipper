/**
 * Semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.5.0
 */
import type { Reference } from "../../../../../semantics";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.5.0
 */
export interface IdentifierPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The identifier of the {@link IdentifierPrimaryExpressionSemantics.ref reference}.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The reference that the {@link IdentifierPrimaryExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	ref: Reference;
}
