import { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import { Expression } from "../../expression";
import { KipperBitwiseOrOperator } from "../../../../../const";

export interface BitwiseOrExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseOrOperator;
}
