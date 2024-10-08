/**
 * A reference to a variable/function/builtin/internal identifier.
 * @since 0.8.0
 */
import type { Expression } from "../ast";
import type { KipperReferenceable } from "../const";
import type { InternalFunction } from "./runtime-internals";

/**
 * A reference to an identifier that stores some sort of value.
 *
 * This is a wrapper interface for {@link KipperReferenceable} that provides a more convenient way to access the
 * identifier's metadata and reference expression.
 * @since 0.12.0
 * @template T The type of the reference target.
 */
export interface BuiltInReference<T extends KipperReferenceable = KipperReferenceable> {
	/**
	 * The target that this reference points to.
	 * @since 0.8.0
	 */
	readonly refTarget: T;
	/**
	 * The expression which created the reference to {@link refTarget}.
	 * @since 0.8.0
	 */
	readonly srcExpr: Expression;
}

/**
 * A reference to an {@link InternalFunction internal function}.
 *
 * Unlike {@link BuiltInReference}, this interface does not represent user references, but rather references to internal
 * functions that are used by the compiler to provide functionality.
 * @since 0.10.0
 */
export interface InternalReference<T extends InternalFunction> {
	/**
	 * The target that this reference points to.
	 * @since 0.10.0
	 */
	readonly refTarget: T;
	/**
	 * The expression which created the reference to {@link refTarget}.
	 *
	 * In this case, this is the expression that created the need for the internal function.
	 * @since 0.10.0
	 */
	readonly srcExpr: Expression;
}
