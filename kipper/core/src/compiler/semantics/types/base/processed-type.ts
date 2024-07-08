import type { CompilableType } from "./compilable-type";
import { TypeNotCompilableError } from "../../../../errors";
import { Type } from "./type";

/**
 * A processed type that may be used for type checking and compilation. This type is the general type that will be used
 * throughout type checking, as there can be references to invalid
 * @since 0.10.0
 */
export abstract class ProcessedType extends Type {
	protected readonly _isCompilable: boolean;

	protected constructor(identifier: string, isCompilable: boolean) {
		super(identifier);
		this._isCompilable = isCompilable;
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
	public get isCompilable(): boolean {
		return this._isCompilable;
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
	 * Returns whether this type is assignable to the given {@link type}.
	 * @param type The type to check against.
	 * @since 0.11.0
	 */
	public abstract isAssignableTo(type: ProcessedType): boolean;
}
