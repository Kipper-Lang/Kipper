import { ProcessedType } from "./processed-type";

/**
 * Represents a type that can be compiled i.e. a type that exists and type checks can be done on it.
 * @since 0.11.0
 */
export interface CompilableType extends ProcessedType {
	/**
	 * The identifier of this type.
	 * @since 0.11.0
	 */
	readonly identifier: string;
	/**
	 * Returns whether the type is compilable. Is always true for this type.
	 *
	 * This only exists to differentiate this type from the base {@link ProcessedType}.
	 * @since 0.11.0
	 */
	readonly isCompilable: true;
}
