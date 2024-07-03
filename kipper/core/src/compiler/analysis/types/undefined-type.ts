/**
 * Represents an undefined custom type that was specified by the user, but can not be evaluated.
 *
 * This is used to represent an invalid type that can not be used for type checking. If a type like this is encountered,
 * then the type checking will silently fail, as this type should have already thrown an error.
 * @since 0.10.0
 */
export class UndefinedType {
	constructor(public readonly identifier: string) {}
}
