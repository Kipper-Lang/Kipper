import { GenericBuiltInType } from "../base/generic-built-in-type";
import type { ProcessedType } from "../index";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	KipperInternalError,
	PropertyAssignmentTypeError,
} from "../../../../errors";

/**
 * Represents the built-in type `Func`.
 * @since 0.12.0
 */
export class BuiltInTypeFunc extends GenericBuiltInType {
	constructor() {
		super("Func", []);
	}

	/**
	 * Returns whether the type is compilable.
	 * @since 0.12.0
	 */
	public get isCompilable(): boolean {
		// TODO! Implement generic type arguments
		return true;
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		// TODO! Implement generic type arguments and function signature checking
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
