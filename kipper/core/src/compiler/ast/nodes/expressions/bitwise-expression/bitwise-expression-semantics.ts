/**
 * Semantics of a bitwise expression, which combines two expressions and evaluates to a number.
 * @since 0.11.0
 */

import { ExpressionSemantics } from "../expression-semantics";
import { KipperBitwiseOperator } from "../../../../const";
import { Expression } from "../expression";

/**
 * Semantics of a bitwise expression, which combines two expressions and evaluates to a number.
 * @since 0.11.0
 */
export interface BitwiseExpressionSemantics extends ExpressionSemantics {
	operator: KipperBitwiseOperator;
	leftOp: Expression;
	rightOp: Expression;
}
