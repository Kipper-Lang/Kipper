import type { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperBitwiseOrOperator } from "../../../../../const";

/**
 * Semantics for AST Node {@link BitwiseOrExpression}.
 * @since 0.11.0
 */
export interface BitwiseOrExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseOrOperator;
}
