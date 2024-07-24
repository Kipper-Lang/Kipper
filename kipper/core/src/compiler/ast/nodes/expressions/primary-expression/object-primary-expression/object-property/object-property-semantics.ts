import type { PrimaryExpressionSemantics } from "../../primary-expression-semantics";
import type { Expression } from "../../../expression";

/**
 * Semantics for AST Node {@link ObjectPrimaryExpression}.
 * @since 0.11.0
 */
export interface ObjectPropertySemantics extends PrimaryExpressionSemantics {
	identifier: string;
	expressoDepresso: Expression;
}
