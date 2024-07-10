/**
 * Semantics for AST Node {@link FStringPrimaryExpression}.
 * @since 0.5.0
 */
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";
import type { Expression } from "../../expression";

/**
 * Semantics for AST Node {@link FStringPrimaryExpression}.
 * @since 0.5.0
 */
export interface FStringPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * Returns the items of the f-strings, where each item represents one section of the string. The section may either be
	 * a {@link StringPrimaryExpression constant string} or {@link Expression evaluable runtime expression}.
	 * @since 0.10.0
	 */
	atoms: Array<string | Expression>;
}
