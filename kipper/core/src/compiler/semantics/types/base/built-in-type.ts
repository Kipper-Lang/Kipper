import { ProcessedType } from "./processed-type";
import type { KipperBuiltInTypeLiteral } from "../../../const";
import type { TypeError } from "../../../../errors";
import { ArgumentAssignmentTypeError, AssignmentTypeError, PropertyAssignmentTypeError } from "../../../../errors";
import { BuiltInTypes } from "../../symbol-table";
import { UnionType } from "./union-type";

/**
 * Represents a built-in type that is used in the type analysis phase.
 * @since 0.11.0
 */
export abstract class BuiltInType extends ProcessedType {
	public static readonly interchangeableTypes = ["void", "undefined"];

	public constructor(identifier: KipperBuiltInTypeLiteral) {
		super(identifier);
	}

	/**
	 * Returns whether the type is compilable.
	 *
	 * This is usually true for built-in types, but for generics it depends on the generic type arguments.
	 * @since 0.11.0
	 */
	public get isCompilable(): boolean {
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
		let e: TypeError | undefined = undefined;
		if (this === type || type === BuiltInTypes.any) {
			return;
		} else if (type instanceof UnionType) {
			if (type.unionTypes.some((unionType: ProcessedType) => this.isAssignableTo(unionType))) {
				return;
			} else {
				e = new AssignmentTypeError(type.identifier, this.identifier);
			}
		} else if (
			BuiltInType.interchangeableTypes.includes(this.identifier) &&
			BuiltInType.interchangeableTypes.includes(type.identifier)
		) {
			return;
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
