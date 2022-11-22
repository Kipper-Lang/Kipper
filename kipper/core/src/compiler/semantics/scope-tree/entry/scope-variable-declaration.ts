/**
 *
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type {
	KipperStorageType,
	VariableDeclaration,
	VariableDeclarationSemantics,
	VariableDeclarationTypeSemantics,
} from "../../index";
import type { Scope } from "../index";
import type { CheckedType } from "../../type";
import { ScopeDeclaration } from "./scope-declaration";

/**
 * Represents a variable scope entry that may be a child of the global scope or local scope.
 * @since 0.1.0
 */
export class ScopeVariableDeclaration extends ScopeDeclaration {
	private readonly _node: VariableDeclaration;

	/**
	 * Returns whether the variable has been updated after its initial declaration.
	 * @since 0.10.0
	 */
	public valueWasUpdated: boolean = false;

	public constructor(node: VariableDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): VariableDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 */
	private get typeData(): VariableDeclarationTypeSemantics {
		return this._node.getTypeSemanticData();
	}

	/**
	 * Returns the {@link VariableDeclaration AST node} this scope declaration bases on.
	 */
	public get node(): VariableDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this variable.
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The value type of this variable.
	 */
	public get type(): CheckedType {
		return this.typeData.valueType;
	}

	/**
	 * The storage type of this variable.
	 */
	public get storageType(): KipperStorageType {
		return this.semanticData.storageType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 */
	public get scope(): Scope {
		return this.semanticData.scope;
	}

	/**
	 * Returns whether the variable declaration is defined and has a value set during declaration.
	 */
	public get isDefined(): boolean {
		return this.semanticData.isDefined;
	}

	/**
	 * Returns whether the variable declaration has a value.
	 *
	 * This is different from {@link isDefined}, since this also considers variable assignments *after* the initial
	 * declaration.
	 * @since 0.10.0
	 */
	public get hasValue(): boolean {
		return this.isDefined || this.valueWasUpdated;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public get isCallable(): boolean {
		return this.type.kipperType === "func";
	}
}
