import { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import { Expression } from "../../expression";
import { KipperBitwiseAndOperator } from "../../../../../const";

export interface BitwiseAndExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseAndOperator;
}
