/**
 * Semantics for a comparative expression, which compares two operands against each other using a specified
 * operator.
 * @since 0.9.0
 */
import type { KipperComparativeOperator } from "../../../../const";
import type { ExpressionSemantics } from "../expression-semantics";
import type { Expression } from "../expression";

/**
 * Semantics for a comparative expression, which compares two operands against each other using a specified
 * operator.
 * @since 0.9.0
 */
export interface ComparativeExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this comparative expression.
	 * @since 0.9.0
	 */
	operator: KipperComparativeOperator;
	/**
	 * The left expression (left-hand side) used in this comparative expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The right expression (right-hand side) used in this comparative expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
