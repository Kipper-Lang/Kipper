/**
 * Semantics for AST Node {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.5.0
 */
import type { KipperPostfixOperator } from "../../../../../const";
import type { UnaryExpressionSemantics } from "../unary-expression-semantics";

/**
 * Semantics for AST Node {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementUnaryExpressionSemantics extends UnaryExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperPostfixOperator;
}
