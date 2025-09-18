/**
 * Semantics for AST Node {@link NullableTypeSpecifierExpression}.
 * @since 0.13.0
 */
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";
import type { GenericTypeSpecifierExpression } from "../generic-type-specifier-expression";
import type { IdentifierTypeSpecifierExpression } from "../identifier-type-specifier-expression";
import type { TypeofTypeSpecifierExpression } from "../typeof-type-specifier-expression";
import type { KipperNullableOperators } from "../../../../../const";

/**
 * Semantics for AST Node {@link NullableTypeSpecifierExpression}.
 * @since 0.13.0
 */
export interface NullableTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The inner type specifier, which is being made into a union with `null` or `undefined`.
	 * @since 0.13.0
	 */
	innerTypeSpecifier:
		| IdentifierTypeSpecifierExpression
		| GenericTypeSpecifierExpression
		| TypeofTypeSpecifierExpression;
	/**
	 * The operator that is used to make the inner type specifier nullable.
	 * @since 0.13.0
	 */
	operator: KipperNullableOperators;
}
