import type {BitwiseExpressionSemantics} from "../bitwise-expression-semantics";
import type {Expression} from "../../expression";
import type {KipperBitwiseShiftOperator} from "../../../../../const";

/**
 * Semantics for AST Node {@link BitwiseShiftExpression}.
 * @since 0.11.0
 */
export interface BitwiseShiftExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseShiftOperator;
}
