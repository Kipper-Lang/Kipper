import type { PrimaryExpressionSemantics } from "../../primary-expression-semantics";
import { Expression } from "../../../expression";
import { StringPrimaryExpression } from "../../string-primary-expression";

/**
 * Semantics for AST Node {@link ObjectPrimaryExpression}.
 * @since 0.11.0
 */
export interface ObjectPropertySemantics extends PrimaryExpressionSemantics {
	identifier: string
	expressoDepresso: Expression
}
