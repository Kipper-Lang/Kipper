import type { KipperBuiltInType } from "../../const";
import { ProcessedType } from "./base";

export type CustomTypeConstraint = CustomPrimitiveTypeConstraint | CustomObjectTypeConstraint;
export type CustomPrimitiveTypeConstraint = KipperBuiltInType;
export type CustomObjectTypeConstraint = { [key: string]: CustomTypeConstraint };

/**
 * Represents a custom type which is not a built-in type.
 *
 * This type implements its own type constraints and can be used to represent complex type structures.
 * @since 0.11.0
 */
export class CustomType extends ProcessedType {
	private readonly _constraints: CustomTypeConstraint;

	public constructor(identifier: string, isCompilable: boolean, constraints: CustomTypeConstraint) {
		super(identifier, isCompilable);
		this._constraints = constraints;
	}

	/**
	 * Returns the constraints of this type.
	 * @since 0.11.0
	 */
	public get constraints(): CustomTypeConstraint {
		return this._constraints;
	}

	/**
	 * Checks whether this type is assignable to another type.
	 * @param type The type to check against.
	 * @since 0.11.0
	 */
	isAssignableTo(type: ProcessedType): boolean {
		return false;
	}
}
