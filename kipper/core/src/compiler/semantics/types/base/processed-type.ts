import type { CompilableType } from "./compilable-type";
import { type TypeError, TypeNotCompilableError } from "../../../../errors";
import { Type } from "./type";
import type { GenericType } from "./generic-type";

/**
 * A processed type that may be used for type checking and compilation. This type is the general type that will be used
 * throughout type checking, as there can be references to invalid
 * @since 0.10.0
 */
export abstract class ProcessedType extends Type {
	protected constructor(identifier: string) {
		super(identifier);
	}

	/**
	 * The identifier of this type.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Returns whether the type is compilable.
	 *
	 * This function exists, since during type checking an undefined/invalid type may be encountered that should still
	 * be stored using this class though (but NOT compiled!).
	 * @since 0.10.0
	 */
	public abstract get isCompilable(): boolean;

	/**
	 * Returns whether the type is a generic type.
	 *
	 * This is false unless overridden by a subclass.
	 * @since 0.12.0
	 */
	public get isGeneric(): boolean {
		return false;
	}

	/**
	 * Gets the compilable type for this type.
	 *
	 * This function throws an error instead of returning undefined, since it's intended to be used in circumstances,
	 * where only due to a bug the type is not compilable. As such, it makes sense to strictly assert it will be
	 * compilable, unless an error occurs.
	 * @throws UndefinedType If the {@link isCompilable} is false, which should only occur if the identifier is of
	 * type {@link UndefinedType}.
	 * @since 0.10.0
	 */
	public getCompilableType(): CompilableType {
		if (!this.isCompilable) {
			throw new TypeNotCompilableError();
		}
		return <CompilableType>this;
	}

	/**
	 * Asserts that this type is assignable to the given {@link type}.
	 * @param type The type to check against.
	 * @param propertyName The name of the property that is being assigned. This is used for error messages.
	 * @param argumentName The name of the argument that is being assigned to. This is used for error messages.
	 * @throws TypeError If the types are not assignable.
	 * @since 0.12.0
	 */
	public abstract assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void;

	/**
	 * Returns whether this type is assignable to the given {@link type}. This discards any error messages.
	 *
	 * This simply returns whether the {@link assertAssignableTo} function throws an error or not.
	 * @param type The type to check against.
	 * @since 0.12.0
	 */
	public isAssignableTo(type: ProcessedType): boolean {
		try {
			this.assertAssignableTo(type);
			return true;
		} catch (e) {
			return false;
		}
	}

	public toString(): string {
		let type = this.identifier;
		if (this.isGeneric) {
			type +=
				"<" + (<GenericType>(<unknown>this)).genericTypeArguments?.map((arg) => arg.type.toString()).join(", ") + ">";
		}
		return type;
	}
}
