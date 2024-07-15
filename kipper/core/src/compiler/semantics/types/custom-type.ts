import { ProcessedType } from "./base";
import type { TypeError } from "../../../errors";
import { KipperInternalError } from "../../../errors";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	PropertyAssignmentTypeError,
	PropertyNotFoundError,
} from "../../../errors";
import type { ClassDeclaration, InterfaceDeclaration, ObjectPrimaryExpression } from "../../ast";

/**
 * Represents the kind of a custom type.
 * @since 0.12.0
 */
export type CustomTypeKind = "interface" | "class";

/**
 * Represents a field of a custom type. This is simply another type.
 * @since 0.12.0
 */
export type CustomTypeField = ProcessedType;

/**
 * Represents a map of field names to their types.
 * @since 0.12.0
 */
export type CustomTypeFields = Map<string, CustomTypeField>;

/**
 * Represents a custom type which is not a built-in type.
 *
 * This type implements its own type constraints and can be used to represent complex type structures.
 * @since 0.12.0
 */
export class CustomType extends ProcessedType {
	/**
	 * The kind of this type. This is simply used to differentiate between classes and interfaces.
	 * @since 0.12.0
	 */
	public readonly kind: CustomTypeKind;
	private readonly _fields: CustomTypeFields;

	protected constructor(identifier: string, kind: CustomTypeKind, fields: CustomTypeFields) {
		super(identifier);
		this._fields = fields;
		this.kind = kind;
	}

	/**
	 * Returns whether the type is compilable.
	 *
	 * This runs through all fields and checks if they are compilable. As such this is an expensive operation and should
	 * only be used once during type checking.
	 * @since 0.12.0
	 */
	public override get isCompilable(): boolean {
		return Object.values(this._fields).every((field) => field.isCompilable);
	}

	/**
	 * The fields of this type.
	 * @since 0.12.0
	 */
	public get fields(): CustomTypeFields {
		return this._fields;
	}

	/**
	 * Creates a custom type from a class declaration.
	 *
	 * This can only be run AFTER the class declaration has passed semantic validation.
	 * @param classDeclaration The class declaration to create the custom type from.
	 * @since 0.12.0
	 */
	public static fromClassDeclaration(classDeclaration: ClassDeclaration): CustomType {
		classDeclaration.ensureSemanticallyValid();
		throw new KipperInternalError("Internal class representations are not implemented.");

		// TODO! Implement custom type generation from class declaration
		// const fields: CustomTypeFields = new Map();
		// for (const field of objectSemantics.fields) {
		// 	fields.set(field.identifier, field.type);
		// }
		// return new CustomType(objectSemantics.identifier, "class", fields);
	}

	/**
	 * Creates a custom type from an interface declaration.
	 *
	 * This can only be run AFTER the interface declaration has passed semantic validation.
	 * @param interfaceDeclaration The interface declaration to create the custom type from.
	 * @since 0.12.0
	 */
	public static fromInterfaceDeclaration(interfaceDeclaration: InterfaceDeclaration): CustomType {
		interfaceDeclaration.ensureSemanticallyValid();
		throw new KipperInternalError("Internal interface representations are not implemented.");

		// TODO! Implement custom type generation from interface declaration
		// const fields: CustomTypeFields = new Map();
		// for (const field of interfaceSemantics.fields) {
		// 	fields.set(field.identifier, field.type);
		// }
		// return new CustomType(interfaceSemantics.identifier, "interface", fields);
	}

	/**
	 * Creates a custom type from an object literal.
	 *
	 * This can only be run AFTER the object primary expression has passed semantic validation.
	 * @param objectPrimaryExpression The object primary expression to create the custom type from.
	 * @since 0.12.0
	 */
	public static fromObjectLiteral(objectPrimaryExpression: ObjectPrimaryExpression): CustomType {
		objectPrimaryExpression.ensureSemanticallyValid();
		const fields: CustomTypeFields = new Map();
		for (const field of objectPrimaryExpression.getSemanticData().keyValuePairs) {
			fields.set(field.getSemanticData().identifier, field.getTypeSemanticData().evaluatedType);
		}
		return new CustomType("", "interface", fields);
	}

	/**
	 * Checks whether this type is assignable to another type.
	 *
	 * This assumes that {@link this} is being assigned to {@link type}.
	 * @param type The type to check against.
	 * @param propertyName The name of the property that is being assigned to. This is used for error messages.
	 * @param argumentName The name of the argument that is being assigned to. This is used for error messages.
	 * @throws AssignmentTypeError If the types are not assignable.
	 * @throws PropertyAssignmentTypeError If a property is not assignable.
	 * @throws ArgumentAssignmentTypeError If an argument is not assignable.
	 * @throws PropertyNotFoundError If a property is not found.
	 * @since 0.12.0
	 */
	assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void {
		if (type === this) {
			return;
		} else if (type instanceof CustomType && type.kind === "interface") {
			for (const [fieldName, fieldType] of this.fields) {
				const targetTypeField = type.fields.get(fieldName);
				if (!targetTypeField) {
					throw new PropertyNotFoundError(type.identifier, fieldName);
				}

				try {
					fieldType.assertAssignableTo(targetTypeField, fieldName);
				} catch (error) {
					if (propertyName) {
						throw new PropertyAssignmentTypeError(propertyName, type.identifier, this.identifier, <TypeError>error);
					} else if (argumentName) {
						throw new ArgumentAssignmentTypeError(argumentName, type.identifier, this.identifier, <TypeError>error);
					} else {
						throw new AssignmentTypeError(type.identifier, this.identifier, <TypeError>error);
					}
				}
			}
			return;
		} else if (propertyName) {
			throw new PropertyAssignmentTypeError(propertyName, type.identifier, this.identifier);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(argumentName, type.identifier, this.identifier);
		} else {
			throw new AssignmentTypeError(type.identifier, this.identifier);
		}
	}
}
