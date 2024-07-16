import type { ProcessedType } from "./processed-type";

/**
 * Represents the generic type arguments for a generic type.
 * @since 0.12.0
 */
export type GenericTypeArguments = Array<{ identifier: string; type: ProcessedType }>;

/**
 * Represents a type which takes in generic type arguments.
 * @since 0.12.0
 */
export interface GenericType extends ProcessedType {
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
	/**
	 * Changes the generic type arguments for this generic type and returns a new generic type instance with the new
	 * arguments where the types have been adjusted.
	 * @param genericTypeArguments The new generic type arguments. The length of this array must be equal to the length
	 * of the current generic type arguments.
	 * @since 0.12.0
	 */
	changeGenericTypeArguments(genericTypeArguments: Array<ProcessedType>): GenericType;
}
