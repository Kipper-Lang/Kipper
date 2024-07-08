import { ProcessedType } from "./base";
import { TypeCanNotBeUsedForTypeCheckingError } from "../../../errors";

/**
 * Represents an undefined custom type that was specified by the user, but can not be evaluated.
 *
 * This is used to represent an invalid type that can not be used for type checking. If a type like this is encountered,
 * then the type checking will silently fail, as this type should have already thrown an error.
 * @since 0.10.0
 */
export class UndefinedType extends ProcessedType {
	constructor(identifier: string) {
		super(identifier, false);
	}

	/**
	 * Checks whether this type is assignable to another type.
	 * @param type The type to check against.
	 * @since 0.10.0
	 */
	isAssignableTo(type: ProcessedType): boolean {
		throw new TypeCanNotBeUsedForTypeCheckingError();
	}
}
