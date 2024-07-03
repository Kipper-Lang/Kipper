/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
import type { CheckedType } from "../../../../analysis";
import type { ExpressionTypeSemantics } from "../expression-type-semantics";

/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
export interface LambdaExpressionTypeSemantics extends ExpressionTypeSemantics {
	returnType: CheckedType;
}
