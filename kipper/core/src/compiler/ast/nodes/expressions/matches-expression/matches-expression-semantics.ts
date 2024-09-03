/**
 * Semantics for the matches expression.
 * @since 0.12.0
 */

import type { ExpressionSemantics } from "../expression-semantics";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import type { Expression } from "../expression";

export interface MatchesExpressionSemantics extends ExpressionSemantics {
	/**
	 * The interface to match against.
	 * @since 0.12.0
	 */
	interface: IdentifierTypeSpecifierExpression;

	/**
	 * The expression to match against the interface.
	 * @since 0.12.0
	 */
	expression: Expression;
}
