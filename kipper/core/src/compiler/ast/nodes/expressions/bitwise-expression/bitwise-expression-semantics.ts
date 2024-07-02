import { ExpressionSemantics } from "../expression-semantics";
import {
	KipperBitwiseAndOperator,
	KipperBitwiseOrOperator,
	KipperBitwiseShiftOperator,
	KipperBitwiseXorOperator,
} from "../../../../const";
import { Expression } from "../expression";

export interface BitwiseExpressionSemantics extends ExpressionSemantics {
	operator: KipperBitwiseAndOperator | KipperBitwiseOrOperator | KipperBitwiseXorOperator | KipperBitwiseShiftOperator;
	leftOp: Expression;
	rightOp: Expression;
}
