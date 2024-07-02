import type { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperBitwiseOrOperator } from "../../../../../const";

export interface BitwiseOrExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseOrOperator;
}
