/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";
import type { Reference } from "../../../../../semantics";

/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	ref: Reference
}
