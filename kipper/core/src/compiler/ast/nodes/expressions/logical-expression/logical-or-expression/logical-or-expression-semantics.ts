/**
 * Semantics for AST Node {@link LogicalOrExpression}.
 * @since 0.5.0
 */
import type {KipperLogicalOrOperator} from "../../../../../const";
import type {Expression} from "../../expression";
import type {LogicalExpressionSemantics} from "../logical-expression-semantics";

/**
 * Semantics for AST Node {@link LogicalOrExpression}.
 * @since 0.5.0
 */
export interface LogicalOrExpressionSemantics extends LogicalExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical-or expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalOrOperator;
	/**
	 * The first expression (left-hand side) used in this logical-or expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The second expression (right-hand side) used in this logical-or expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
