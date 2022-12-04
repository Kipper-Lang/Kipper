/**
 * A type that has not been checked yet and may contain an invalid or unknown type.
 * @since 0.10.0
 */
import type { KipperCompilableType, KipperType } from "../const";
import { TypeNotCompilableError } from "../../errors";

/**
 * Represents an undefined custom type that was specified by the user, but can not be evaluated.
 *
 * This is used to represent an invalid type that can not be used for type checking. If a type like this is encountered,
 * then the type checking will silently fail, as this type should have already thrown an error.
 * @since 0.10.0
 */
export class UndefinedCustomType {
	constructor(public readonly identifier: string) {}
}

/**
 * The abstract base type of a general type that may exist/be valid, but also
 * may not. This is a general representation to store a type's information
 * in the {@link CompilableASTNode.semanticData semantic data} and
 * {@link CompilableASTNode.typeData type data} of an {@link CompilableASTNode}.
 * @since 0.10.0
 */
export abstract class Type {
	protected readonly _identifier: string;

	protected constructor(identifier: string) {
		this._identifier = identifier;
	}

	/**
	 * The identifier of this type.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return this._identifier;
	}
}

/**
 * An unchecked type wrapper that may contain any type, even if it does not exist or is invalid.
 * @since 0.10.0
 */
export class UncheckedType extends Type {
	constructor(identifier: string) {
		super(identifier);
	}

	/**
	 * The identifier of this type.
	 *
	 * This identifier has not been type-checked yet, and may not exist/be valid.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return super.identifier;
	}
}

/**
 * A wrapper class for a {@link KipperType} that is used to properly represent a type during type checking. This is
 * primarily intended to check to handle invalid/undefined types and continue with type checking despite their
 * existence.
 *
 * This type may be used for a compilation if the field {@link CheckedType.isCompilable isCompilable} is true.
 * @since 0.10.0
 */
export class CheckedType extends Type {
	protected readonly _kipperType: KipperType;
	protected readonly _isCompilable: boolean;

	private constructor(identifier: string, kipperType: KipperType) {
		super(identifier);
		this._kipperType = kipperType;
		this._isCompilable = !(this._kipperType instanceof UndefinedCustomType);
	}

	/**
	 * Creates a new {@link CheckedType} instance based on the passed {@link KipperType}.
	 *
	 * If the type is invalid, the function will still return a {@link CheckedType}, but the field
	 * {@link CheckedType.isCompilable isCompilable} will be false and the instance WILL NOT be usable for a compilation.
	 */
	public static fromKipperType(kipperType: KipperType): CheckedType {
		return new CheckedType(kipperType instanceof UndefinedCustomType ? kipperType.identifier : kipperType, kipperType);
	}

	/**
	 * Creates a new instance of this class using the given {@link kipperType}.
	 *
	 * This instance will ALWAYS be compilable, since the type {@link KipperCompilableType} automatically excludes any
	 * undefined/invalid types to be stored in this class.
	 * @param kipperType The type to use for the created of a checked type.
	 */
	public static fromCompilableType(kipperType: KipperCompilableType): CheckedType {
		return new CheckedType(kipperType, kipperType);
	}

	/**
	 * The identifier of this type.
	 *
	 * If {@link kipperType} is of type {@link UndefinedCustomType}, then this will return the invalid
	 * {@link UndefinedCustomType.identifier type identifier} of {@link UndefinedCustomType}.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * The {@link identifier} in a {@link KipperType} format.
	 *
	 * This mainly differentiates from {@link identifier} by possibly returning the class {@link UndefinedCustomType},
	 * which represents an invalid type that should still be stored though.
	 */
	public get kipperType(): KipperType {
		return this._kipperType;
	}

	/**
	 * Returns whether the type is compilable.
	 *
	 * This function exists, since during type checking an undefined/invalid type
	 * may be encountered that should still be stored using this class though
	 * (but NOT compiled!).
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
	 * @throws UndefinedCustomType If the {@link isCompilable} is false, which
	 * should only occur if the identifier is of type {@link UndefinedCustomType}.
	 * @since 0.10.0
	 */
	public getCompilableType(): KipperCompilableType {
		if (!this.isCompilable) {
			throw new TypeNotCompilableError();
		}
		return <KipperCompilableType>this.kipperType;
	}
}
