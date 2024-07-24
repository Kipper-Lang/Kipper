/**
 * A symbol table entry for a variable declaration.
 * @since 0.10.0
 */
import type { VariableDeclaration, VariableDeclarationSemantics, VariableDeclarationTypeSemantics } from "../../../ast";
import type { KipperStorageType } from "../../../const";
import type { UniverseScope } from "../index";
import { BuiltInTypes } from "../index";
import {BuiltInType, BuiltInTypeFunc, ProcessedType} from "../../types";
import { ScopeDeclaration } from "./scope-declaration";
import type { BuiltInVariable } from "../../runtime-built-ins";

/**
 * Represents a variable scope entry that may be a child of the global scope or local scope.
 * @since 0.1.0
 */
export class ScopeVariableDeclaration extends ScopeDeclaration {
	private _valueWasUpdated: boolean = false;

	public constructor(
		private readonly _declaration?: VariableDeclaration,
		private readonly _builtInVariable?: BuiltInVariable,
		private readonly _universeScope?: UniverseScope,
	) {
		super();
	}

	/**
	 * Creates a new scope variable declaration from a variable declaration.
	 * @param declaration The variable declaration node.
	 */
	public static fromVariableDeclaration(declaration: VariableDeclaration): ScopeVariableDeclaration {
		return new ScopeVariableDeclaration(declaration);
	}

	/**
	 * Creates a new scope variable declaration from a built-in variable.
	 * @param builtInVariable The built-in variable.
	 * @param universeScope The universe scope this variable is associated with.
	 */
	public static fromBuiltInVariable(
		builtInVariable: BuiltInVariable,
		universeScope: UniverseScope,
	): ScopeVariableDeclaration {
		return new ScopeVariableDeclaration(undefined, builtInVariable, universeScope);
	}

	/**
	 * Returns whether this variable declaration is a built-in declaration.
	 * @since 0.11.0
	 */
	public override get isBuiltIn(): boolean {
		return this._builtInVariable !== undefined;
	}

	/**
	 * Returns the built-in structure of this declaration, if this declaration is based on one.
	 * @since 0.11.0
	 */
	public override get builtInStructure(): BuiltInVariable | undefined {
		return this._builtInVariable;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): VariableDeclarationSemantics | undefined {
		return this._declaration?.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 */
	private get typeData(): VariableDeclarationTypeSemantics | undefined {
		return this._declaration?.getTypeSemanticData();
	}

	/**
	 * Returns the {@link VariableDeclaration AST node} this scope declaration bases on.
	 */
	public get node(): VariableDeclaration | undefined {
		return this._declaration;
	}

	/**
	 * The identifier of this variable.
	 */
	public get identifier(): string {
		return this.semanticData?.identifier ?? this._builtInVariable!!.identifier;
	}

	/**
	 * The value type of this variable.
	 */
	public get type(): ProcessedType {
		return this.typeData?.valueType ?? this._builtInVariable!!.valueType;
	}

	/**
	 * The storage type of this variable.
	 */
	public get storageType(): KipperStorageType {
		return this.semanticData?.storageType ?? "built-in";
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 */
	public get scope() {
		return this._declaration?.scope ?? this._universeScope!!;
	}

	/**
	 * Returns whether the variable declaration is defined and has a value set during declaration.
	 */
	public get isDefined(): boolean {
		return this.semanticData?.isDefined ?? true;
	}

	/**
	 * Returns whether the value of the variable was updated after the initial declaration.
	 * @since 0.10.0
	 */
	public get valueWasUpdated(): boolean {
		return this._valueWasUpdated;
	}

	/**
	 * Notifies the declaration that the value was updated.
	 *
	 * Sets the {@link valueWasUpdated} property to true.
	 * @since 0.11.0
	 */
	public notifyOfUpdate() {
		this._valueWasUpdated = true;
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
		return this.type instanceof BuiltInTypeFunc;
	}
}
