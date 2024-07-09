import { ProcessedType } from "./base";

export type CustomTypeKind = "interface" | "class";
export type CustomTypeFields = Map<string, ProcessedType>;

/**
 * Represents a custom type which is not a built-in type.
 *
 * This type implements its own type constraints and can be used to represent complex type structures.
 * @since 0.11.0
 */
export class CustomType extends ProcessedType {
	private readonly _fields: CustomTypeFields;

	/**
	 * The kind of this type. This is simply used to differentiate between classes and interfaces.
	 * @since 0.11.0
	 */
	public readonly kind: CustomTypeKind;

	public constructor(identifier: string, isCompilable: boolean, kind: CustomTypeKind, fields: CustomTypeFields) {
		super(identifier, isCompilable);
		this._fields = fields;
		this.kind = kind;
	}

	/**
	 * The fields of this type.
	 * @since 0.11.0
	 */
	public get fields(): CustomTypeFields {
		return this._fields;
	}

	/**
	 * Checks whether this type is assignable to another type.
	 * @param type The type to check against.
	 * @since 0.11.0
	 */
	isAssignableTo(type: ProcessedType): boolean {
		if (type === this) {
			return true;
		}

		// TODO! Implement this once custom types are implemented
		return false;
	}
}
