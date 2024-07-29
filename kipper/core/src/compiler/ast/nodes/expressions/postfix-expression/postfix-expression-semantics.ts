/**
 * Semantics for AST Node {@link PostfixExpression}.
 * @since 0.11.0
 */
import type { KipperPostfixOperator } from "../../../../const";
import type { ExpressionSemantics } from "../expression-semantics";

/**
 * Semantics for AST Node {@link PostfixExpression}.
 * @since 0.11.0
 */
export interface PostfixExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.11.0
	 */
	operator: KipperPostfixOperator;
}
