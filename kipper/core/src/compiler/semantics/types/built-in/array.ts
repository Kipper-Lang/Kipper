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
 * Represents the generic arguments for the built-in type `Array`.
 * @since 0.12.0
 */
export type BuiltInTypeArrayGenericArguments = [{ identifier: "T"; type: ProcessedType }];

/**
 * Represents the built-in type `Array`.
 *
 * This is a generic type, which takes in exactly one type argument.
 * @since 0.12.0
 */
export class BuiltInTypeArray extends GenericBuiltInType<BuiltInTypeArrayGenericArguments> {
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

	public changeGenericTypeArguments(genericTypeArguments: BuiltInTypeArrayGenericArguments): BuiltInTypeArray {
		return new BuiltInTypeArray(genericTypeArguments[0].type);
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
			const [valueType] = this.genericTypeArguments;
			const [otherValueType] = (<typeof this>type).genericTypeArguments;
			try {
				valueType.type.assertAssignableTo(otherValueType.type);
				return;
			} catch (typeError) {
				e = new GenericArgumentTypeError(
					otherValueType.identifier,
					otherValueType.type.toString(),
					valueType.type.toString(),
					<TypeError>typeError,
				);
			}
		}

		if (propertyName) {
			throw new PropertyAssignmentTypeError(propertyName, type.toString(), this.toString(), e);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(argumentName, type.toString(), this.toString(), e);
		} else {
			throw new AssignmentTypeError(type.toString(), this.toString(), e);
		}
	}
}
