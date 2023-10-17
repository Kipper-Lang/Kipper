/**
 * Semantics for AST Node {@link EqualityExpressionSemantics}.
 * @since 0.5.0
 */
import type { KipperEqualityOperator } from "../../../../../const";
import type { Expression } from "../../expression";
import type { ComparativeExpressionSemantics } from "../comparative-expression-semantics";

/**
 * Semantics for AST Node {@link EqualityExpressionSemantics}.
 * @since 0.5.0
 */
export interface EqualityExpressionSemantics extends ComparativeExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this equality expression.
	 * @since 0.9.0
	 */
	operator: KipperEqualityOperator;
	/**
	 * The first expression (left-hand side) used in this equality expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The second expression (right-hand side) used in this equality expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
