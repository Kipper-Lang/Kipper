/**
 * A symbol table entry for a type declaration such as a class or interface.
 * @since 0.11.0
 */
import { ScopeDeclaration } from "./scope-declaration";
import type { TypeDeclaration, TypeDeclarationSemantics } from "../../../ast";
import type { BuiltInType, CustomType, ProcessedType } from "../../types";
import { Type } from "../../types";
import { KipperNotImplementedError } from "../../../../errors";
import { BuiltInTypes } from "../universum-scope";

/**
 * Represents the definition of a type such as a class or interface in a scope.
 * @since 0.11.0
 */
export class ScopeTypeDeclaration extends ScopeDeclaration {
	private readonly _node?: TypeDeclaration;
	private readonly _builtInType?: ProcessedType;

	private constructor(declaration?: TypeDeclaration, builtInType?: BuiltInType) {
		super();

		this._node = declaration;
		this._builtInType = builtInType;
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
	 * @since 0.11.0
	 */
	public static fromBuiltInType(type: BuiltInType): ScopeTypeDeclaration {
		return new ScopeTypeDeclaration(undefined, type);
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): TypeDeclarationSemantics | undefined {
		return this._node?.getSemanticData();
	}

	/**
	 * Returns the {@link InterfaceDeclaration} or {@link ClassDeclaration AST node} this scope type declaration bases on.
	 */
	public get node(): TypeDeclaration | undefined {
		return this._node;
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
		return this.node?.getTypeSemanticData()?.type || this._builtInType!!;
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
	 * Returns whether the declaration has a value.
	 *
	 * As this is a type, it will always be false.
	 * @since 0.11.0
	 */
	public get hasValue(): false {
		return false;
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
