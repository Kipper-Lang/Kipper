/**
 * Type semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.10.0
 */
import type { PrimaryExpressionTypeSemantics } from "../primary-expression-type-semantics";
import type { BuiltInTypeArray, ProcessedType } from "../../../../../semantics";

/**
 * Type semantics for AST Node {@link ArrayPrimaryExpression}.
 * @since 0.10.0
 */
export interface ArrayPrimaryExpressionTypeSemantics extends PrimaryExpressionTypeSemantics {
	/**
	 * The evaluated type of the array. This is always some variation of the {@link BuiltInTypeArray}.
	 */
	evaluatedType: BuiltInTypeArray;
	/**
	 * The value type that each member of the array evaluates to.
	 * @since 0.12.0
	 */
	valueType: ProcessedType;
}
