/**
 * Semantics of a bitwise expression, which combines two expressions and evaluates to a number.
 * @since 0.11.0
 */

import type { ExpressionSemantics } from "../expression-semantics";
import type { KipperBitwiseOperator } from "../../../../const";
import type { Expression } from "../expression";

/**
 * Semantics for AST Node {@link BitwiseExpression}.
 * @since 0.11.0
 */
export interface BitwiseExpressionSemantics extends ExpressionSemantics {
	operator: KipperBitwiseOperator;
	leftOp: Expression;
	rightOp: Expression;
}
