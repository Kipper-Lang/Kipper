/**
 * Semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.5.0
 */
import type { ExpressionSemantics } from "../../expression-semantics";
import type { Expression } from "../../expression";
import type { RawType } from "../../../../../semantics";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";

/**
 * Semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.5.0
 */
export interface CastExpressionSemantics extends ExpressionSemantics {
	/**
	 * The expression to convert.
	 * @since 0.8.0
	 */
	exp: Expression;
	/**
	 * The type the {@link exp} should be converted to.
	 * @since 0.10.0
	 */
	castType: RawType;
	/**
	 * The type specifier that determined {@link castType}.
	 * @since 0.10.0
	 */
	castTypeSpecifier: IdentifierTypeSpecifierExpression;
}
