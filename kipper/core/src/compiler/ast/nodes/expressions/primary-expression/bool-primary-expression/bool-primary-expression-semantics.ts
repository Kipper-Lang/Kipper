/**
 * Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
import type { KipperBoolTypeConstants } from "../../../../../const";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
export interface BoolPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The value of this boolean constant expression.
	 * @since 0.8.0
	 */
	value: KipperBoolTypeConstants;
}
