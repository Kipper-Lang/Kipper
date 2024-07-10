/**
 * Semantics for AST Node {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
import type { Expression } from "../../expression";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
export interface TangledPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The child expression contained in this tangled expression.
	 * @since 0.10.0
	 */
	childExp: Expression;
}
