/**
 * A reference to a variable/function/builtin/internal identifier.
 * @since 0.8.0
 */
import type { Expression, ExpressionSemantics, ExpressionTypeSemantics } from "../ast";
import type { KipperReferenceable } from "../const";

/**
 * A {@link KipperReferenceable reference} to an identifier that stores a value or function.
 *
 * This is a wrapper interface for {@link KipperReferenceable} that provides a more convenient way to access the
 * identifier's metadata and reference expression.
 * @since 0.8.0
 */
export interface Reference<T extends KipperReferenceable> {
	/**
	 * The target interface or class that this reference points to.
	 * @since 0.8.0
	 */
	readonly refTarget: T;
	/**
	 * The expression which created the reference to {@link refTarget}.
	 * @since 0.8.0
	 */
	readonly srcExpr: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}
