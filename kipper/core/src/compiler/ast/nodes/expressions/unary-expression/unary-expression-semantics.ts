/**
 * Semantics for unary expressions, which can be used to modify an expression with
 * a specified operator.
 * @since 0.9.0
 */
import type {KipperUnaryOperator} from "../../../../const";
import type {Expression} from "../expression";
import type {ExpressionSemantics} from "../expression-semantics";

/**
 * Semantics for unary expressions, which can be used to modify an expression with
 * a specified operator.
 * @since 0.9.0
 */
export interface UnaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperUnaryOperator;
	/**
	 * The operand that is modified by the {@link operator}.
	 * @since 0.9.0
	 */
	operand: Expression;
}
