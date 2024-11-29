import type { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperBitwiseAndOperator } from "../../../../../const";

/**
 * Semantics for AST Node {@link BitwiseAndExpression}.
 * @since 0.11.0
 */
export interface BitwiseAndExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseAndOperator;
}
