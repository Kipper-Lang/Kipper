import { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import { Expression } from "../../expression";
import { KipperBitwiseZeroFillLeftShiftOperator } from "../../../../../const";

export interface BitwiseZeroFillLeftShiftExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseZeroFillLeftShiftOperator;
}
