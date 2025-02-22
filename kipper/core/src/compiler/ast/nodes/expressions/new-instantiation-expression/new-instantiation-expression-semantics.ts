/**
 * Semantics for AST Node {@link NewInstantiationExpressionSemantics}.
 * @since 0.12.0
 */
import type { ExpressionSemantics } from "../expression-semantics";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import type { Expression } from "../expression";

/**
 * Semantics for AST Node {@link NewInstantiationExpressionSemantics}.
 * @since 0.12.0
 */
export interface NewInstantiationExpressionSemantics extends ExpressionSemantics {
	/**
	 * The class that is being instantiated.
	 */
	classRef: IdentifierTypeSpecifierExpression;
	/**
	 * The arguments that are being passed to the constructor.
	 */
	args: Array<Expression>;
}
