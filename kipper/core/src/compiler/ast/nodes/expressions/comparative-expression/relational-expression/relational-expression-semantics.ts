/**
 * Semantics for AST Node {@link RelationalExpression}.
 * @since 0.5.0
 */
import type { KipperRelationalOperator } from "../../../../../const";
import type { Expression } from "../../expression";
import type { ComparativeExpressionSemantics } from "../comparative-expression-semantics";

/**
 * Semantics for AST Node {@link RelationalExpression}.
 * @since 0.5.0
 */
export interface RelationalExpressionSemantics extends ComparativeExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this relational expression.
	 * @since 0.9.0
	 */
	operator: KipperRelationalOperator;
	/**
	 * The first expression (left-hand side) used in this relational expression.
	 * @since 0.9.0
	 */
	leftOp: Expression;
	/**
	 * The second expression (right-hand side) used in this relational expression.
	 * @since 0.9.0
	 */
	rightOp: Expression;
}
