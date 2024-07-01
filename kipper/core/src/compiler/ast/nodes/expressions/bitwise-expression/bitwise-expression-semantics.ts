import { ExpressionSemantics } from "../expression-semantics";
import {
	KipperBitwiseAndOperator,
	KipperBitwiseOrOperator,
	KipperBitwiseSignedRightShiftOperator,
	KipperBitwiseXorOperator,
	KipperBitwiseZeroFillLeftShiftOperator,
	KipperBitwiseZeroFillRightShiftOperator,
} from "../../../../const";
import { Expression } from "../expression";

export interface BitwiseExpressionSemantics extends ExpressionSemantics {
	operator:
		| KipperBitwiseAndOperator
		| KipperBitwiseOrOperator
		| KipperBitwiseXorOperator
		| KipperBitwiseZeroFillLeftShiftOperator
		| KipperBitwiseZeroFillRightShiftOperator
		| KipperBitwiseSignedRightShiftOperator;
	leftOp: Expression;
	rightOp: Expression;
}
