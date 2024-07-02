/**
 * Semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.5.0
 */
import type { Expression } from "../../expression";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.5.0
 */
export interface ArrayPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The value of the constant list expression.
	 * @since 0.5.0
	 */
	value: Array<Expression>;
}
