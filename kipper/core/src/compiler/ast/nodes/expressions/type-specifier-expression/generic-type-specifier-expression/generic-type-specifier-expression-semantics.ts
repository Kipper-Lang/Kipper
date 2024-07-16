/**
 * Semantics for AST Node {@link GenericTypeSpecifierExpression}.
 * @since 0.8.0
 */
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";
import type { TypeSpecifierExpression } from "../type-specifier-expression";

/**
 * Semantics for AST Node {@link GenericTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface GenericTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The generic arguments of this generic type specifier expression.
	 * @since 0.12.0
	 */
	genericArguments: TypeSpecifierExpression[];
}
