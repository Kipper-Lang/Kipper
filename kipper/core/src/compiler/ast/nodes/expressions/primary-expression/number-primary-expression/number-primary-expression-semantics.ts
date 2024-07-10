/**
 * Semantics for AST Node {@link NumberPrimaryExpression}.
 * @since 0.5.0
 */
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link NumberPrimaryExpression}.
 * @since 0.5.0
 */
export interface NumberPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The value of the constant number expression.
	 *
	 * This can be either:
	 * - A Default 10-base number (N)
	 * - A Float 10-base number (N.N)
	 * - A Hex 16-base number (0xN)
	 * - A Octal 8-base number (0oN)
	 * - A Binary 2-base number (0bN)
	 * - An Exponent 10-base number (NeN)
	 * - An Exponent Float 10-base number (N.NeN)
	 * @since 0.5.0
	 */
	value: string;
}
