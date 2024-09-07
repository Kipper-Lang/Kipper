/**
 * A symbol table entry for a type declaration such as a class or interface.
 * @since 0.11.0
 */
import { ScopeDeclaration } from "./scope-declaration";
import type { TypeDeclaration, TypeDeclarationSemantics } from "../../../ast";
import type { BuiltInType, CustomType, ProcessedType } from "../../types";
import type { UniverseScope } from "../universe-scope";
import { BuiltInTypes } from "../universe-scope";

/**
 * Represents the definition of a type such as a class or interface in a scope.
 * @since 0.11.0
 */
export class ScopeTypeDeclaration extends ScopeDeclaration {
	private constructor(
		private readonly _declaration?: TypeDeclaration,
		private readonly _builtInType?: BuiltInType,
		private readonly _universeScope?: UniverseScope,
	) {
		super();
	}

	/**
	 * Creates a new scope type declaration from a type declaration.
	 * @param node The type declaration node.
	 * @since 0.11.0
	 */
	public static fromTypeDeclaration(node: TypeDeclaration): ScopeTypeDeclaration {
		return new ScopeTypeDeclaration(node);
	}

	/**
	 * Creates a new scope type declaration from a built-in type.
	 * @param identifier The identifier of the built-in type.
	 * @param universeScope The universe scope this type is associated with.
	 * @since 0.11.0
	 */
	public static fromBuiltInType(type: BuiltInType, universeScope: UniverseScope): ScopeTypeDeclaration {
		return new ScopeTypeDeclaration(undefined, type, universeScope);
	}

	/**
	 * Returns whether this type declaration is a built-in type.
	 * @since 0.11.0
	 */
	public override get isBuiltIn(): boolean {
		return this._builtInType !== undefined;
	}

	/**
	 * Returns the built-in structure of this declaration, if this declaration is based on one.
	 * @since 0.11.0
	 */
	public override get builtInStructure(): BuiltInType | undefined {
		return this._builtInType;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): TypeDeclarationSemantics | undefined {
		return this._declaration?.getSemanticData();
	}

	/**
	 * Returns the {@link InterfaceDeclaration} or {@link ClassDeclaration AST node} this scope type declaration bases on.
	 */
	public get node(): TypeDeclaration | undefined {
		return this._declaration;
	}

	/**
	 * The identifier of this type.
	 */
	public get identifier(): string {
		return this.semanticData?.identifier || this._builtInType!!.identifier;
	}

	/**
	 * The type of this type. This is always "type".
	 * @since 0.11.0
	 */
	public get type(): ProcessedType {
		return BuiltInTypes.type;
	}

	/**
	 * The value of this type, which is the type itself i.e. what value does this type represent.
	 * @throws {UndefinedSemanticsError} If this is accessed, before the type for the declaration finished.
	 * @since 0.11.0
	 */
	public get typeValue(): CustomType | ProcessedType {
		return this.node?.getTypeSemanticData()?.valueType || this._builtInType!!;
	}

	/**
	 * Returns whether the declaration has a value.
	 *
	 * As this is a type, it will always be false.
	 * @since 0.11.0
	 */
	public get isDefined(): false {
		return false;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 */
	public get scope() {
		return this._declaration?.scope ?? this._universeScope!!;
	}

	/**
	 * Returns whether the declaration has a value.
	 *
	 * As this is a type, it will always be true;
	 * @since 0.11.0
	 */
	public get hasValue(): true {
		return true;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 *
	 * As this is a type, it will always be false.
	 * @since 0.11.0
	 */
	public get isCallable(): false {
		return false;
	}
}
