import type { ProcessedType } from "../base";
import { GenericBuiltInType, UnionType } from "../base";
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

	/**
	 * Returns the value type of the array.
	 * @since 0.13.0
	 */
	public get valueType(): ProcessedType {
		return this.genericTypeArguments[0].type;
	}

	public changeGenericTypeArguments(genericTypeArguments: BuiltInTypeArrayGenericArguments): BuiltInTypeArray {
		return new BuiltInTypeArray(genericTypeArguments[0].type);
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		let e: TypeError | undefined = undefined;
		if (this === type || type === BuiltInTypes.any || type === BuiltInTypes.Array) {
			return;
		} else if (type instanceof UnionType) {
			if (type.unionTypes.some((unionType: ProcessedType) => this.isAssignableTo(unionType))) {
				return;
			} else {
				e = new AssignmentTypeError(type.identifier, this.identifier);
			}
		}

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
