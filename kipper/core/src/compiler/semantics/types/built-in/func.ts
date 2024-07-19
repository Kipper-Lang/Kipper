import { GenericBuiltInType } from "../base/generic-built-in-type";
import type { ProcessedType } from "../index";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	GenericArgumentTypeError,
	KipperInternalError,
	PropertyAssignmentTypeError,
	type TypeError,
} from "../../../../errors";
import { BuiltInTypes } from "../../symbol-table";

/**
 * Represents the generic arguments for the built-in type `Func`.
 * @since 0.12.0
 */
export type BuiltInTypeFuncGenericArguments = [
	{ identifier: "T"; type: Array<ProcessedType> },
	{ identifier: "R"; type: ProcessedType },
];

/**
 * Represents the built-in type `Func`.
 * @since 0.12.0
 */
export class BuiltInTypeFunc extends GenericBuiltInType<BuiltInTypeFuncGenericArguments> {
	constructor(paramTypes: Array<ProcessedType>, returnType: ProcessedType) {
		super("Func", [
			{
				identifier: "T",
				type: paramTypes,
			},
			{
				identifier: "R",
				type: returnType,
			},
		]);
	}

	/**
	 * Returns whether the type is compilable.
	 * @since 0.12.0
	 */
	public get isCompilable(): boolean {
		return Object.values(this.changeGenericTypeArguments).every((arg) => arg.isCompilable);
	}

	/**
	 * Returns the return type of the function.
	 * @since 0.12.0
	 */
	public get returnType(): ProcessedType {
		return this.genericTypeArguments[1].type;
	}

	/**
	 * Returns the parameter types of the function.
	 * @since 0.12.0
	 */
	public get parameterTypes(): Array<ProcessedType> {
		return this.genericTypeArguments[0].type;
	}

	public changeGenericTypeArguments(genericTypeArguments: BuiltInTypeFuncGenericArguments): BuiltInTypeFunc {
		return new BuiltInTypeFunc(genericTypeArguments[0].type, genericTypeArguments[1].type);
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string) {
		if (this === type || type === BuiltInTypes.any) {
			return;
		}

		let e: TypeError | undefined = undefined;
		if (
			type instanceof BuiltInTypeFunc &&
			this.genericTypeArguments.length === (<typeof this>type).genericTypeArguments.length
		) {
			const [paramTypes, returnType] = this.genericTypeArguments;
			const [otherParamTypes, otherReturnType] = (<typeof this>type).genericTypeArguments;

			try {
				paramTypes.type.forEach((paramType, index) => {
					paramType.assertAssignableTo(otherParamTypes.type[index]);
				});
				return;
			} catch (error) {
				e = new GenericArgumentTypeError(
					otherParamTypes.identifier,
					otherParamTypes.type.toString(),
					paramTypes.type.toString(),
					<TypeError>error,
				);
			}

			try {
				returnType.type.assertAssignableTo(otherReturnType.type);
				return;
			} catch (error) {
				e = new GenericArgumentTypeError(
					otherReturnType.identifier,
					otherReturnType.type.toString(),
					returnType.type.toString(),
					<TypeError>error,
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
