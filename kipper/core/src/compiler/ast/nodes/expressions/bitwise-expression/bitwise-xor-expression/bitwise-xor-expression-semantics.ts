import { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import { Expression } from "../../expression";
import { KipperBitwiseXorOperator } from "../../../../../const";

export interface BitwiseXorExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseXorOperator;
}
