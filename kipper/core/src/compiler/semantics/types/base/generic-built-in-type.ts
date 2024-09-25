import { BuiltInType } from "./built-in-type";
import type { GenericType, GenericTypeArguments } from "./generic-type";
import type { KipperBuiltInTypeLiteral } from "../../../const";
import type { ProcessedType } from "./index";
import { GenericCanOnlyHaveOneSpreadError } from "../../../../errors";

/**
 * Represents a generic built-in type that is used in the type analysis phase.
 * @since 0.12.0
 */
export abstract class GenericBuiltInType<T extends GenericTypeArguments> extends BuiltInType implements GenericType<T> {
	/**
	 * The generic type arguments for this type.
	 * @since 0.12.0
	 */
	public readonly genericTypeArguments: T;

	protected constructor(identifier: KipperBuiltInTypeLiteral, genericTypeArguments: T) {
		super(identifier);
		this.genericTypeArguments = genericTypeArguments;

		// Ensure that only one generic argument is a spread argument i.e. can contain `1..N` elements.
		const spreadArguments = genericTypeArguments.filter((arg) => Array.isArray(arg.type));
		if (spreadArguments.length > 1) {
			throw new GenericCanOnlyHaveOneSpreadError();
		}
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

	public abstract changeGenericTypeArguments(genericTypeArguments: T): GenericType<T>;

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
