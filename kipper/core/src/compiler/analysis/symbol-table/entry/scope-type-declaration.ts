/**
 * A symbol table entry for a type declaration such as a class or interface.
 * @since 0.11.0
 */
import { ScopeDeclaration } from "./scope-declaration";
import type { TypeDeclaration, TypeDeclarationSemantics } from "../../../ast";
import { ProcessedType } from "../../types";
import { KipperNotImplementedError } from "../../../../errors";

/**
 * Represents the definition of a type such as a class or interface in a scope.
 * @since 0.11.0
 */
export class ScopeTypeDeclaration extends ScopeDeclaration {
	private readonly _node: TypeDeclaration;

	public constructor(node: TypeDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): TypeDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * Returns the {@link InterfaceDeclaration} or {@link ClassDeclaration AST node} this scope type declaration bases on.
	 */
	public get node(): TypeDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this type.
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The type of this type. This is always "type".
	 * @since 0.11.0
	 */
	public get type(): ProcessedType {
		return ProcessedType.fromCompilableType("type");
	}

	/**
	 * The value of this type, which is the type itself i.e. what value does this type represent.
	 * @since 0.11.0
	 */
	public get typeValue(): ProcessedType {
		throw new KipperNotImplementedError("Custom types are not implement yet");
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
