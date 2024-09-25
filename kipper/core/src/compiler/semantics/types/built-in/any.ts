import type { ProcessedType } from "../../types";
import { BuiltInType, type CompilableType, UnionType } from "../../types";
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
		let e: TypeError | undefined = undefined;
		if (this === type) {
			return;
		} else if (type instanceof UnionType) {
			if (type.unionTypes.some((unionType: ProcessedType) => this.isAssignableTo(unionType))) {
				return;
			} else {
				return new AssignmentTypeError(type.identifier, this.identifier);
			}
		}

		if (propertyName) {
			throw new PropertyAssignmentTypeError(propertyName, type.identifier, this.identifier, e);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(argumentName, type.identifier, this.identifier, e);
		} else {
			throw new AssignmentTypeError(type.identifier, this.identifier, e);
		}
	}
}
