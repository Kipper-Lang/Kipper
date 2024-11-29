/**
 * Semantics for AST Node {@link IncrementOrDecrementPostfixExpression}.
 * @since 0.5.0
 */
import type { KipperPostfixOperator } from "../../../../../const";
import type { Expression } from "../../expression";
import type { PostfixExpressionSemantics } from "../postfix-expression-semantics";

/**
 * Semantics for AST Node {@link IncrementOrDecrementPostfixExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementPostfixExpressionSemantics extends PostfixExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.10.0
	 */
	operator: KipperPostfixOperator;
	/**
	 * The operand that is modified by the operator.
	 * @since 0.10.0
	 */
	operand: Expression;
}
