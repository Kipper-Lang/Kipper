/**
 * Semantics for AST Node {@link ConstantExpression}.
 * @since 0.5.0
 */
import type { ExpressionSemantics } from "../../expression-semantics";

/**
 * Semantics for AST Node {@link ConstantExpression}.
 * @since 0.5.0
 */
export interface ConstantExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of the constant expression. This is usually either a {@link String} or {@link Number}.
	 * @since 0.5.0
	 */
	value: any;
}
