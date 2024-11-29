/**
 * Semantics for AST Node {@link LogicalAndExpression}.
 * @since 0.5.0
 */
import type { KipperLogicalAndOperator } from "../../../../../const";
import type { Expression } from "../../expression";
import type { LogicalExpressionSemantics } from "../logical-expression-semantics";

/**
 * Semantics for AST Node {@link LogicalAndExpression}.
 * @since 0.5.0
 */
export interface LogicalAndExpressionSemantics extends LogicalExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical-and expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalAndOperator;
	/**
	 * The first expression (left-hand side) used in this logical-and expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The second expression (right-hand side) used in this logical-and expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
