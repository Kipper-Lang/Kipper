/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";
import type { Expression } from "../../expression";

/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The expression to evaluate the type of.
	 * @since 0.8.0
	 */
	object: Expression;
}
