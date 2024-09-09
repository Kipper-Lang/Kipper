import type { ExpressionSemantics } from "../expression-semantics";
import type { Expression } from "../expression";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";

/**
 * The semantics for an instanceof expression.
 * @since 0.12.0
 */
export interface InstanceofExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type that the left-hand side of the instanceof expression is being checked against.
	 * @since 0.12.0
	 */
	operand: Expression;
	/**
	 * The type that the right-hand side of the instanceof expression is being checked against.
	 * @since 0.12.0
	 */
	classTypeSpecifier: IdentifierTypeSpecifierExpression;
}
