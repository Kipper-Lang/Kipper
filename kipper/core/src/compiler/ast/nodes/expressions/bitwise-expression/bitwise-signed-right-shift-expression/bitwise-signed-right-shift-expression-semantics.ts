import { Expression } from "../../expression";

export interface BitwiseSignedRightShiftExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: ">>";
}
