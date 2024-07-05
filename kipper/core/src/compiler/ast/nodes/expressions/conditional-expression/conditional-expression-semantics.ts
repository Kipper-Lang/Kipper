/**
 * Semantics for AST Node {@link ConditionalExpression}.
 * @since 0.5.0
 */
import type { ExpressionSemantics } from "../expression-semantics";
import type { Expression } from "../expression";

/**
 * Semantics for AST Node {@link ConditionalExpression}.
 * @since 0.11.0
 */
export interface ConditionalExpressionSemantics extends ExpressionSemantics {
	/**
	 * The condition of the ternary statement.
	 * @since 0.11.0
	 */
	condition: Expression;
	/**
	 * The true branch of the ternary statement.
	 * @since 0.11.0
	 */
	trueBranch: Expression;
	/**
	 * The false branch of the ternary statement.
	 * @since 0.11.0
	 */
	falseBranch: Expression;
}
