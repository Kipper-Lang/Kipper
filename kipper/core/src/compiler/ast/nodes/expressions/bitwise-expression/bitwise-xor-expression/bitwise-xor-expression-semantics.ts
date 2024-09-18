import type {BitwiseExpressionSemantics} from "../bitwise-expression-semantics";
import type {Expression} from "../../expression";
import type {KipperBitwiseXorOperator} from "../../../../../const";

/**
 * Semantics for AST Node {@link BitwiseXorExpression}.
 * @since 0.11.0
 */
export interface BitwiseXorExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseXorOperator;
}
