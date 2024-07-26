/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
import type { ExpressionTypeSemantics } from "../../expression-type-semantics";
import type { BuiltInTypeFunc, ProcessedType } from "../../../../../semantics";

/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
export interface LambdaPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type of this lambda expression. This is always some variation of the {@link BuiltInTypeFunc}.
	 * @since 0.12.0
	 */
	evaluatedType: BuiltInTypeFunc;
	/**
	 * The return type of the lambda expression.
	 * @since 0.11.0
	 */
	returnType: ProcessedType;
}
