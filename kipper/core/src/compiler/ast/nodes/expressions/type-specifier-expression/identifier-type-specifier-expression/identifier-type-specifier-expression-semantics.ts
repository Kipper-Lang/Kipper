/**
 * Semantics for AST Node {@link IdentifierTypeSpecifierExpression}.
 * @since 0.8.0
 */
import type { RawType } from "../../../../../semantics";
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";

/**
 * Semantics for AST Node {@link IdentifierTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface IdentifierTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The type specified by this expression, which per default is an unchecked type as the type is not yet known and
	 * therefore may be invalid/undefined.
	 * @since 0.8.0
	 */
	typeIdentifier: RawType;
}
