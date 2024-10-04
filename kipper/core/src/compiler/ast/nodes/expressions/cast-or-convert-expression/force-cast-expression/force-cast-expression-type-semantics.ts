/**
 * Type semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../../../semantics";
import type { ExpressionTypeSemantics } from "../../expression-type-semantics";

/**
 * Type semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.10.0
 */
export interface ForceCastExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type the {@link CastOrConvertExpressionSemantics.exp} should be converted to.
	 * @since 0.10.0
	 */
	castType: ProcessedType;
}
