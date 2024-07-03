import { Type } from "./type";
import type { KipperCompilableType, KipperType } from "../../const";
import { UndefinedType } from "./undefined-type";
import { TypeNotCompilableError } from "../../../errors";

/**
 * A wrapper class for a {@link KipperType} that is used to properly represent a type during type checking. This is
 * primarily intended to check to handle invalid/undefined types and continue with type checking despite their
 * existence.
 *
 * This type may be used for a compilation if the field {@link CheckedType.isCompilable isCompilable} is true.
 * @since 0.10.0
 */
export class ProcessedType extends Type {
	protected readonly _rawType: KipperType;
	protected readonly _isCompilable: boolean;

	protected constructor(identifier: string, rawType: KipperType) {
		super(identifier);
		this._rawType = rawType;
		this._isCompilable = !(this._rawType instanceof UndefinedType);
	}

	/**
	 * Gets the actual type stored in this class, which may be undefined if the type doesn't exist ({@link isCompilable}
	 * is false).
	 * @since 0.11.0
	 */
	public get(): KipperCompilableType | undefined {
		return this.isCompilable ? <KipperCompilableType>this.rawType : undefined;
	}

	/**
	 * Creates a new {@link ProcessedType} instance based on the passed {@link KipperType}.
	 *
	 * If the type is invalid, the function will still return a {@link ProcessedType}, but the field
	 * {@link CheckedType.isCompilable isCompilable} will be false and the instance WILL NOT be usable for a compilation.
	 */
	public static fromKipperType(kipperType: KipperType): ProcessedType {
		return new ProcessedType(kipperType instanceof UndefinedType ? kipperType.identifier : kipperType, kipperType);
	}

	/**
	 * Creates a new instance of this class using the given {@link rawType}.
	 *
	 * This instance will ALWAYS be compilable, since the type {@link KipperCompilableType} automatically excludes any
	 * undefined/invalid types to be stored in this class.
	 * @param kipperType The type to use for the created of a checked type.
	 */
	public static fromCompilableType(kipperType: KipperCompilableType): ProcessedType {
		return new ProcessedType(kipperType, kipperType);
	}

	/**
	 * The identifier of this type.
	 *
	 * If {@link rawType} is of type {@link UndefinedType}, then this will return the invalid
	 * {@link UndefinedType.identifier type identifier} of {@link UndefinedType}.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * The {@link identifier} in a {@link KipperType} format.
	 *
	 * This mainly differentiates from {@link identifier} by possibly returning the class {@link UndefinedType},
	 * which represents an invalid type that should still be stored though.
	 */
	public get rawType(): KipperType {
		return this._rawType;
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
	 * @throws UndefinedType If the {@link isCompilable} is false, which
	 * should only occur if the identifier is of type {@link UndefinedType}.
	 * @since 0.10.0
	 */
	public getCompilableType(): KipperCompilableType {
		if (!this.isCompilable) {
			throw new TypeNotCompilableError();
		}
		return <KipperCompilableType>this.rawType;
	}
}
