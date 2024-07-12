import { BuiltInType } from "./built-in-type";
import type { GenericType, GenericTypeArguments } from "./generic-type";
import type { KipperBuiltInTypeLiteral } from "../../../const";
import type { ProcessedType } from "./index";
import { KipperInternalError } from "../../../../errors";

/**
 * Represents a generic built-in type that is used in the type analysis phase.
 * @since 0.12.0
 */
export abstract class GenericBuiltInType extends BuiltInType implements GenericType {
	/**
	 * The generic type arguments for this type.
	 * @since 0.12.0
	 */
	public readonly genericTypeArguments: GenericTypeArguments;

	protected constructor(identifier: KipperBuiltInTypeLiteral, genericTypeArguments: GenericTypeArguments) {
		super(identifier);
		this.genericTypeArguments = genericTypeArguments;
	}

	/**
	 * Returns the identifiers of the generic type arguments.
	 * @since 0.12.0
	 */
	public get genericTypeArgumentIdentifiers(): Array<string> {
		return Object.values(this.genericTypeArguments).map((arg) => arg.identifier);
	}

	/**
	 * Returns whether the type is a generic type.
	 *
	 * This is ALWAYS true, since this is a generic type.
	 * @since 0.12.0
	 */
	public get isGeneric(): true {
		return true;
	}

	public abstract changeGenericTypeArguments(genericTypeArguments: Array<ProcessedType>): GenericType;

	/**
	 * Asserts that this type is assignable to another type.
	 *
	 * This will check for generic type arguments as well.
	 * @pasram type The type to check against.
	 * @param propertyName The name of the property that is being assigned. This is used for error messages.
	 * @param argumentName The name of the argument that is being assigned to. This is used for error messages.
	 * @throws AssignmentTypeError If the types are not assignable.
	 * @throws PropertyAssignmentTypeError If a property is not assignable.
	 * @throws ArgumentAssignmentTypeError If an argument is not assignable.
	 * @since 0.12.0
	 * @override
	 */
	public abstract assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void;
}
