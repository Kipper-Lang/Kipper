/**
 * Semantics for arithmetic expressions ({@link MultiplicativeExpression} and {@link AdditiveExpression}).
 * @since 0.6.0
 */
import type { ExpressionSemantics } from "../expression-semantics";
import type { Expression } from "../expression";
import type { KipperArithmeticOperator } from "../../../../const";

/**
 * Semantics for arithmetic expressions ({@link MultiplicativeExpression} and {@link AdditiveExpression}).
 * @since 0.6.0
 */
export interface ArithmeticExpressionSemantics extends ExpressionSemantics {
	/**
	 * The left operand of the expression.
	 * @since 0.10.0
	 */
	leftOp: Expression;
	/**
	 * The right operand of the expression.
	 * @since 0.10.0
	 */
	rightOp: Expression;
	/**
	 * The operator using the two values {@link this.leftOp leftOp} and {@link this.rightOp rightOp} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperArithmeticOperator;
}
