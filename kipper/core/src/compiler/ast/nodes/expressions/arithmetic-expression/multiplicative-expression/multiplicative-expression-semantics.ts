/**
 * Semantics for AST Node {@link MultiplicativeExpression}.
 * @since 0.5.0
 */
import type { Expression } from "../../expression";
import type { KipperMultiplicativeOperator } from "../../../../../const";
import type { ArithmeticExpressionSemantics } from "../arithmetic-expression-semantics";

/**
 * Semantics for AST Node {@link MultiplicativeExpression}.
 * @since 0.5.0
 */
export interface MultiplicativeExpressionSemantics extends ArithmeticExpressionSemantics {
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
	operator: KipperMultiplicativeOperator;
}
