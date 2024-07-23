/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
import type { TypeSpecifierExpressionSemantics } from "../type-specifier-expression-semantics";
import type { ProcessedType } from "../../../../../semantics";

/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The checked type for this typeof expression.
	 * @since 0.12.0
	 */
	evaluatedType: ProcessedType;
}
