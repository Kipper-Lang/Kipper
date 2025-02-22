import { ProcessedType } from "./base";
import type { TypeError } from "../../../errors";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	PropertyAssignmentTypeError,
	PropertyNotFoundTypeError,
} from "../../../errors";
import {
	ClassConstructorDeclaration,
	ClassDeclaration, Declaration,
	InterfaceDeclaration,
	ObjectPrimaryExpression
} from "../../ast";
import { BuiltInTypes } from "../symbol-table";

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
	private readonly _fields: CustomTypeFields;
	private readonly _clsStaticFields?: CustomTypeFields;
	private readonly _clsConstructor?: ClassConstructorDeclaration;

	/**
	 * The source node that this type was created from.
	 * @since 0.13.0
	 */
	public readonly sourceNode: Declaration | ObjectPrimaryExpression;

	/**
	 * The kind of this type. This is simply used to differentiate between classes and interfaces.
	 * @since 0.12.0
	 */
	public readonly kind: CustomTypeKind;

	/**
	 * The type that this type extends. This is only applicable to classes.
	 * @since 0.12.0
	 */
	public readonly clsExtends?: CustomType;

	/**
	 * The types that this type implements. This is only applicable to classes.
	 * @since 0.12.0
	 */
	public readonly clsImplements?: CustomType[];

	/**
	 * The interface that this type extends. This is only applicable to interfaces.
	 * @since 0.12.0
	 */
	public readonly intfExtends?: CustomType;

	protected constructor(
		sourceNode: Declaration | ObjectPrimaryExpression,
		identifier: string,
		kind: CustomTypeKind,
		fields: CustomTypeFields,
		staticFields?: CustomTypeFields,
		constructor?: ClassConstructorDeclaration,
	) {
		super(identifier);
		this.sourceNode = sourceNode;
		this.kind = kind;
		this._fields = fields;
		this._clsStaticFields = staticFields;
		this._clsConstructor = constructor;
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
	 * The static fields of this type. This is only applicable to classes.
	 * @since 0.12.0
	 */
	public get clsStaticFields(): CustomTypeFields | undefined {
		return this._clsStaticFields;
	}

	/**
	 * The constructor of this type. This is only applicable to classes.
	 * @since 0.13.0
	 */
	public get clsConstructor(): ClassConstructorDeclaration | undefined {
		return this._clsConstructor;
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

		const fields: CustomTypeFields = new Map();
		const semanticData = classDeclaration.getSemanticData();
		for (const field of semanticData.classMembers) {
			const fieldSemanticData = field.getSemanticData();
			const fieldTypeSemantics = field.getTypeSemanticData();
			fields.set(fieldSemanticData.identifier, fieldTypeSemantics.valueType);
		}
		return new CustomType(classDeclaration, semanticData.identifier, "class", fields, undefined, semanticData.constructorDeclaration);
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

		const fields: CustomTypeFields = new Map();
		const semanticData = interfaceDeclaration.getSemanticData();
		for (const field of semanticData.members) {
			const fieldSemanticData = field.getSemanticData();
			const fieldTypeSemantics = field.getTypeSemanticData();
			fields.set(fieldSemanticData.identifier, fieldTypeSemantics.valueType);
		}
		return new CustomType(interfaceDeclaration, semanticData.identifier, "interface", fields);
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
		const semanticData = objectPrimaryExpression.getSemanticData();
		for (const field of semanticData.keyValuePairs) {
			const fieldSemanticData = field.getSemanticData();
			const fieldTypeSemantics = field.getTypeSemanticData();
			fields.set(fieldSemanticData.identifier, fieldTypeSemantics.evaluatedType);
		}
		return new CustomType(objectPrimaryExpression, "", "interface", fields);
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
	 * @throws PropertyNotFoundTypeError If a property is not found in this type.
	 * @since 0.12.0
	 */
	assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void {
		if (this === type || type === BuiltInTypes.any || type === BuiltInTypes.obj) {
			return;
		} else if (type instanceof CustomType && type.kind === "interface") {
			for (const [fieldName, otherFieldType] of type.fields) {
				let caughtError: TypeError | undefined;

				const thisFieldType = this.fields.get(fieldName);
				if (!thisFieldType) {
					caughtError = new PropertyNotFoundTypeError(this.identifier, type.identifier, fieldName);
				} else {
					try {
						thisFieldType.assertAssignableTo(otherFieldType, fieldName);
					} catch (error) {
						caughtError = <TypeError>error;
					}
				}

				if (caughtError) {
					if (propertyName) {
						throw new PropertyAssignmentTypeError(
							propertyName,
							type.identifier,
							this.identifier,
							<TypeError>caughtError,
						);
					} else if (argumentName) {
						throw new ArgumentAssignmentTypeError(
							argumentName,
							type.identifier,
							this.identifier,
							<TypeError>caughtError,
						);
					} else {
						throw new AssignmentTypeError(type.identifier, this.identifier, <TypeError>caughtError);
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

	/**
	 * Returns the field type for the passed identifier. May return undefined if the field does not exist.
	 * @param identifier The identifier of the field to get.
	 * @since 0.12.0
	 */
	getProperty(identifier: string): CustomTypeField | undefined {
		return this.fields.get(identifier);
	}
}
