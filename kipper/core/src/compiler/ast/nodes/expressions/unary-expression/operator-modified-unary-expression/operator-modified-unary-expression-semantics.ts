/**
 * Semantics for AST Node {@link OperatorModifiedUnaryExpression}.
 * @since 0.5.0
 */
import type {KipperUnaryModifierOperator} from "../../../../../const";
import type {UnaryExpressionSemantics} from "../unary-expression-semantics";

/**
 * Semantics for AST Node {@link OperatorModifiedUnaryExpression}.
 * @since 0.5.0
 */
export interface OperatorModifiedUnaryExpressionSemantics extends UnaryExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperUnaryModifierOperator;
}
