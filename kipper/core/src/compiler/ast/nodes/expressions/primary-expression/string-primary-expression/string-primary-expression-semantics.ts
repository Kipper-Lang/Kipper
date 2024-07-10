/**
 * Semantics for AST Node {@link StringPrimaryExpression}.
 * @since 0.5.0
 */
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link StringPrimaryExpression}.
 * @since 0.5.0
 */
export interface StringPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The value of the constant string expression.
	 * @since 0.5.0
	 */
	value: string;
	/**
	 * The quotation marks that this string has used.
	 *
	 * This is important to keep track of, so that the translated string is valid and does not produce a syntax error
	 * due to unescaped quotation marks inside it.
	 * @since 0.10.0
	 */
	quotationMarks: `"` | `'`;
}
