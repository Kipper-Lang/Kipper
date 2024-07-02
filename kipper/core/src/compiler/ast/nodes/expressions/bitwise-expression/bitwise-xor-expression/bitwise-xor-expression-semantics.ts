import type { BitwiseExpressionSemantics } from "../bitwise-expression-semantics";
import type { Expression } from "../../expression";
import type { KipperBitwiseXorOperator } from "../../../../../const";

export interface BitwiseXorExpressionSemantics extends BitwiseExpressionSemantics {
	leftOp: Expression;
	rightOp: Expression;
	operator: KipperBitwiseXorOperator;
}
