import type { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperBitwiseAndOperator } from "../../../../../const";

export interface BitwiseAndExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseAndOperator;
}
