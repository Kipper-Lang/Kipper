/**
 * Semantics for AST Node {@link AdditiveExpression}.
 * @since 0.5.0
 */
import type { ArithmeticExpressionSemantics } from "../arithmetic-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperAdditiveOperator } from "../../../../../const";

/**
 * Semantics for AST Node {@link AdditiveExpression}.
 * @since 0.5.0
 */
export interface AdditiveExpressionSemantics extends ArithmeticExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	leftOp: Expression;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	rightOp: Expression;
	/**
	 * The operator using the two values {@link this.leftOp leftOp} and {@link this.rightOp rightOp} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperAdditiveOperator;
}
