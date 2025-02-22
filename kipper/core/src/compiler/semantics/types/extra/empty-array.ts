import { BuiltInTypeArray } from "../built-in";
import { BuiltInTypes } from "../../symbol-table";
import type { ProcessedType } from "../base";

/**
 * Represents the built-in type `Array` with no values in it. This is a special use case for arrays as empty arrays
 * should be assignable to any array type.
 * @since 0.13.0
 */
export class BuiltInTypeEmptyArray extends BuiltInTypeArray {
	constructor() {
		super(BuiltInTypes.any); // Can only be 'any' type
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		if (type instanceof BuiltInTypeArray) {
			return;
		}
		super.assertAssignableTo(type, propertyName, argumentName);
	}
}
