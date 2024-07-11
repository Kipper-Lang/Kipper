import { ProcessedType } from "./base/processed-type";
import type { KipperBuiltInTypeLiteral } from "../../const";
import type { CompilableType } from "./base/compilable-type";
import { ArgumentAssignmentTypeError, AssignmentTypeError, PropertyAssignmentTypeError } from "../../../errors";

/**
 * Represents a built-in type that is used in the type analysis phase.
 * @since 0.11.0
 */
export class BuiltInType extends ProcessedType implements CompilableType {
	public static readonly interchangeableTypes = ["void", "undefined"];

	public constructor(identifier: KipperBuiltInTypeLiteral) {
		super(identifier);
	}

	/**
	 * Returns whether the type is compilable.
	 *
	 * This is ALWAYS true, since built-in types are always compilable.
	 * @since 0.11.0
	 */
	public get isCompilable(): true {
		return true;
	}

	/**
	 * Returns whether this type is assignable to another type.
	 * @param type The type to check against.
	 * @param propertyName The name of the property that is being assigned. This is used for error messages.
	 * @param argumentName The name of the argument that is being assigned to. This is used for error messages.
	 * @throws AssignmentTypeError If the types are not assignable.
	 * @throws PropertyAssignmentTypeError If a property is not assignable.
	 * @throws ArgumentAssignmentTypeError If an argument is not assignable.
	 * @since 0.11.0
	 */
	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void {
		if (this === type) {
			return;
		} else if (
			BuiltInType.interchangeableTypes.includes(this.identifier) &&
			BuiltInType.interchangeableTypes.includes(type.identifier)
		) {
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
