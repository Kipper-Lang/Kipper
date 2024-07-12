import { GenericBuiltInType } from "../base/generic-built-in-type";
import type { ProcessedType } from "../index";
import type { TypeError } from "../../../../errors";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	GenericArgumentTypeError,
	PropertyAssignmentTypeError,
} from "../../../../errors";
import { BuiltInTypes } from "../../symbol-table";

/**
 * Represents the built-in type `Array`.
 *
 * This is a generic type, which takes in exactly one type argument.
 * @since 0.12.0
 */
export class BuiltInTypeArray extends GenericBuiltInType {
	constructor(genericTypeArgument: ProcessedType) {
		super("Array", [{ identifier: "T", type: genericTypeArgument }]);
	}

	/**
	 * Returns whether the type is compilable.
	 * @since 0.12.0
	 */
	public get isCompilable(): boolean {
		return this.genericTypeArguments[0].type.isCompilable;
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		if (this === type || type === BuiltInTypes.any) {
			return;
		}

		let e: TypeError | undefined = undefined;
		if (
			type instanceof BuiltInTypeArray &&
			this.genericTypeArguments.length === (<typeof this>type).genericTypeArguments.length
		) {
			try {
				this.genericTypeArguments[0].type.assertAssignableTo((<typeof this>type).genericTypeArguments[0].type);
				return;
			} catch (typeError) {
				e = new GenericArgumentTypeError(
					(<typeof this>type).genericTypeArguments[0].identifier,
					(<typeof this>type).genericTypeArguments[0].type.identifier,
					this.genericTypeArguments[0].type.identifier,
					<TypeError>typeError,
				);
			}
		}

		if (propertyName) {
			throw new PropertyAssignmentTypeError(
				propertyName,
				type.identifier,
				this.identifier,
				e,
				(<typeof this>type).genericTypeArgumentIdentifiers,
				this.genericTypeArgumentIdentifiers,
			);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(
				argumentName,
				type.identifier,
				this.identifier,
				e,
				(<typeof this>type).genericTypeArgumentIdentifiers,
				this.genericTypeArgumentIdentifiers,
			);
		} else {
			throw new AssignmentTypeError(
				type.identifier,
				this.identifier,
				e,
				(<typeof this>type).genericTypeArgumentIdentifiers,
				this.genericTypeArgumentIdentifiers,
			);
		}
	}
}
