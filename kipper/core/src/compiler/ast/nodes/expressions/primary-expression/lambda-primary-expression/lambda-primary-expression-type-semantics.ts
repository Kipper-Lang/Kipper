/**
 * Type semantics for AST Node {@link LambdaPrimaryExpression}.
 * @since 0.11.0
 */
import type { ExpressionTypeSemantics } from "../../expression-type-semantics";
import type { BuiltInTypeFunc } from "../../../../../semantics";

/**
 * Type semantics for AST Node {@link LambdaPrimaryExpression}.
 * @since 0.11.0
 */
export interface LambdaPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type of this lambda expression. This is always some variation of the {@link BuiltInTypeFunc}.
	 * @since 0.12.0
	 */
	evaluatedType: BuiltInTypeFunc;
	/**
	 * The type of the declaration. This is always some variation of {@link BuiltInTypeFunc i.e. `Func<P..., T>`}.
	 * @since 0.12.0
	 */
	valueType: BuiltInTypeFunc;
}
