import type { ProcessedType } from "../../types";
import { BuiltInType, type CompilableType } from "../../types";
import { ArgumentAssignmentTypeError, AssignmentTypeError, PropertyAssignmentTypeError } from "../../../../errors";

/**
 * Represents the built-in type `any`.
 * @since 0.12.0
 */
export class BuiltInTypeAny extends BuiltInType implements CompilableType {
	constructor() {
		super("any");
	}

	/**
	 * Returns whether the type is a compilable type.
	 *
	 * This is always true for the built-in type `any`.
	 * @since 0.12.0
	 */
	public get isCompilable(): true {
		return true;
	}

	/**
	 * Asserts that the type is assignable to another type.
	 *
	 * This can only be true if the other type is also `any`.
	 * @since 0.12.0
	 */
	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		if (this === type) {
			return;
		} else if (propertyName) {
			throw new PropertyAssignmentTypeError(propertyName, type.identifier, this.identifier);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(argumentName, type.identifier, this.identifier);
		} else {
			throw new AssignmentTypeError(type.identifier, this.identifier);
		}
	}
}
