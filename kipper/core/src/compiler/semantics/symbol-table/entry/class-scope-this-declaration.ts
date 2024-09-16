import type { ClassDeclaration, TypeDeclaration } from "../../../ast";
import type { ProcessedType } from "../../types";
import { ScopeDeclaration } from "./scope-declaration";

/**
 * A scope declaration for the "this" keyword inside a class. This is almost identical to a {@link ScopeTypeDeclaration}
 * for a class, but it is specifically initialised prematurely to allow for references to "this" inside the class.
 * @since 0.12.0
 */
export class ClassScopeThisDeclaration extends ScopeDeclaration {
	public constructor(public readonly _declaration: ClassDeclaration) {
		super();
	}

	/**
	 * The identifier of this declaration. This is always "this" as we are referring to the "this" keyword inside a class.
	 * @since 0.12.0
	 */
	public get identifier(): string {
		return "this";
	}

	/**
	 * Returns whether this type declaration is a built-in type.
	 *
	 * As this is an auto-initialised declaration custom to every class, it will never be a built-in type.
	 * @since 0.12.0
	 */
	public override get isBuiltIn(): boolean {
		return false;
	}

	/**
	 * Returns the built-in structure of this declaration, if this declaration is based on one.
	 *
	 * As this is an auto-initialised declaration custom to every class, it will never be based on a built-in type.
	 * @since 0.12.0
	 */
	public override get builtInStructure(): undefined {
		return undefined;
	}

	/**
	 * Returns the {@link InterfaceDeclaration} or {@link ClassDeclaration AST node} this scope type declaration bases on.
	 */
	public get node(): TypeDeclaration | undefined {
		return this._declaration;
	}

	/**
	 * The type of this type.
	 *
	 * This is always the custom type of the class declaration.
	 * @since 0.12.0
	 */
	public get type(): ProcessedType {
		return this._declaration.getTypeSemanticData().valueType;
	}

	/**
	 * Returns whether the declaration is defined.
	 *
	 * As this is auto-initialized, it will always be defined.
	 * @since 0.12.0
	 */
	public get isDefined(): true {
		return true;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 * @since 0.12.0
	 */
	public get scope() {
		return this._declaration.scope;
	}

	/**
	 * Returns whether the declaration has a value.
	 *
	 * As this is auto-initialized, it will always have a value.
	 * @since 0.12.0
	 */
	public get hasValue(): true {
		return true;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 *
	 * A class is not callable, so this will always be false.
	 * @since 0.12.0
	 */
	public get isCallable(): false {
		return false;
	}
}
