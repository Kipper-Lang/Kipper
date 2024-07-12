import type { BuiltInType } from "./built-in-type";

/**
 * Represents the generic type arguments for a generic type.
 * @since 0.12.0
 */
export type GenericTypeArguments = Array<{ identifier: string; type: BuiltInType }>;

/**
 * Represents a type which takes in generic type arguments.
 * @since 0.12.0
 */
export interface GenericType {
	/**
	 * Returns whether the type is a generic type.
	 * @since 0.12.0
	 */
	readonly isGeneric: true;
	/**
	 * The generic type arguments for this type.
	 * @since 0.12.0
	 */
	readonly genericTypeArguments: GenericTypeArguments;
}
