/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
import type { ExpressionTypeSemantics } from "../../expression-type-semantics";
import type { ProcessedType } from "../../../../../semantics";

/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
export interface LambdaPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The return type of the lambda expression.
	 * @since 0.11.0
	 */
	returnType: ProcessedType;
}
