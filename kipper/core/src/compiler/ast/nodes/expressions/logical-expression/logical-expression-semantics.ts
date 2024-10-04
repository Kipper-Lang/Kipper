/**
 * Semantics for logical expressions, which combine two expressions/conditions and evaluate based on the input to a
 * boolean value.
 * @since 0.9.0
 */
import type {KipperLogicalAndOperator, KipperLogicalOrOperator} from "../../../../const";
import type {Expression} from "../expression";
import type {ExpressionSemantics} from "../expression-semantics";

/**
 * Semantics for logical expressions, which combine two expressions/conditions and evaluate based on the input to a
 * boolean value.
 * @since 0.9.0
 */
export interface LogicalExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalAndOperator | KipperLogicalOrOperator;
	/**
	 * The first expression (left-hand side) used in this logical expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The second expression (right-hand side) used in this logical expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
