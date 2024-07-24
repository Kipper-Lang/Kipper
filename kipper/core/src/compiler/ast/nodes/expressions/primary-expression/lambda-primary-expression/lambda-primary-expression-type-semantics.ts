/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
import type { ExpressionTypeSemantics } from "../../expression-type-semantics";
import type {BuiltInTypeFunc, ProcessedType} from "../../../../../semantics";

/**
 * Type semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
export interface LambdaPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type of the declaration. This is always some variation of {@link BuiltInTypeFunc i.e. `Func<P..., T>`}.
	 * @since 0.12.0
	 */
	type: BuiltInTypeFunc;
}
