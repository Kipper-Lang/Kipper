import { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import { Expression } from "../../expression";
import { KipperBitwiseZeroFillRightShiftOperator } from "../../../../../const";

export interface BitwiseZeroFillRightShiftExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseZeroFillRightShiftOperator;
}
