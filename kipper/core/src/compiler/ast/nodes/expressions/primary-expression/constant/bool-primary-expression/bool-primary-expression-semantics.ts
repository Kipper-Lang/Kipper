/**
 * Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
import type { KipperBoolTypeLiterals } from "../../../../../../const";
import type { ConstantExpressionSemantics } from "../constant-expression-semantics";

/**
 * Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
export interface BoolPrimaryExpressionSemantics extends ConstantExpressionSemantics {
	/**
	 * The value of this boolean constant expression.
	 * @since 0.8.0
	 */
	value: KipperBoolTypeLiterals;
}
