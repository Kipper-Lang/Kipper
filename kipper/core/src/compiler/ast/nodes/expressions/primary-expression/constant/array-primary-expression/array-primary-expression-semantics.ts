/**
 * Semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.5.0
 */
import type { Expression } from "../../../expression";
import type { ConstantExpressionSemantics } from "../constant-expression-semantics";

/**
 * Semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.5.0
 */
export interface ArrayPrimaryExpressionSemantics extends ConstantExpressionSemantics {
	/**
	 * The value of the constant list expression.
	 * @since 0.5.0
	 */
	value: Array<Expression>;
}
