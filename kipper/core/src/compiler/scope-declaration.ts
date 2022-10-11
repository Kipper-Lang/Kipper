/**
 * File containing the implementations of a scope entry that represent a variable or function inside a scope
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type {
	Declaration,
	FunctionDeclaration,
	FunctionDeclarationSemantics,
	FunctionDeclarationTypeSemantics,
	KipperStorageType,
	KipperType,
	ParameterDeclaration,
	ParameterDeclarationSemantics,
	ParameterDeclarationTypeSemantics,
	VariableDeclaration,
	VariableDeclarationSemantics,
	VariableDeclarationTypeSemantics,
} from "./semantics";
import type { KipperProgramContext } from "./program-ctx";
import type { Scope } from "./scope";
import type { LocalScope } from "./local-scope";

/**
 * Represents a general declaration of a variable, parameter or function inside a Kipper program.
 *
 * Abstract base class for {@link ScopeVariableDeclaration}, {@link ScopeParameterDeclaration} and
 * {@link ScopeFunctionDeclaration}.
 * @since 0.1.2
 */
export abstract class ScopeDeclaration {
	public abstract get node(): Declaration<any, any>;

	public abstract get identifier(): string;

	/**
	 * Fetches the {@link KipperProgramContext program context instance} for this token.
	 */
	public get programCtx(): KipperProgramContext {
		return this.node.programCtx;
	}

	/**
	 * The value type of this declaration.
	 * @since 0.10.0
	 */
	public abstract get type(): KipperType;

	/**
	 * Returns whether the scope declaration was defined during its declaration.
	 * @since 0.10.0
	 */
	public abstract get isDefined(): boolean;

	/**
	 * Returns whether the declaration has a value.
	 * @since 0.10.0
	 */
	public abstract get hasValue(): boolean;

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public abstract get isCallable(): boolean;
}

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
	public get type(): KipperType {
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
		return this.type === "func";
	}
}

/**
 * Represents the definition of a function inside a {@link Scope}.
 * @since 0.1.2
 */
export class ScopeFunctionDeclaration extends ScopeDeclaration {
	private readonly _node: FunctionDeclaration;

	public constructor(node: FunctionDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): FunctionDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 */
	private get typeData(): FunctionDeclarationTypeSemantics {
		return this._node.getTypeSemanticData();
	}

	/**
	 * Returns the {@link FunctionDeclaration AST node} this scope function declaration bases on.
	 */
	public get node(): FunctionDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this function.
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The type of this function. This is always "func".
	 * @since 0.10.0
	 */
	public get type(): KipperType {
		return "func";
	}

	/**
	 * The return type of this function. This can be every {@link KipperType} except {@link KipperFuncType}.
	 */
	public get returnType(): KipperType {
		return this.typeData.returnType;
	}

	/**
	 * The parameters that are accepted inside this function. These are represented using the {@link ParameterDeclaration}
	 * class.
	 *
	 * The index in the array represents the position inside the function. Meaning the first item in the array maps to
	 * the first parameter inside the function.
	 */
	public get params(): Array<ParameterDeclaration> {
		return this.semanticData.params;
	}

	/**
	 * Returns whether the function declaration is defined and has a function body set during declaration.
	 * @since 0.3.0
	 */
	public get isDefined(): boolean {
		return this.semanticData.isDefined;
	}

	/**
	 * Returns whether the function declaration has a value.
	 * @since 0.10.0
	 */
	public get hasValue(): boolean {
		return this.isDefined;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public get isCallable(): boolean {
		return true;
	}
}

/**
 * Represents the definition of a parameter inside a {@link FunctionDeclaration function}.
 * @since 0.10.0
 */
export class ScopeParameterDeclaration extends ScopeDeclaration {
	private readonly _node: ParameterDeclaration;

	public constructor(node: ParameterDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 * @since 0.10.0
	 */
	private get semanticData(): ParameterDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 * @since 0.10.0
	 */
	private get typeData(): ParameterDeclarationTypeSemantics {
		return this._node.getTypeSemanticData();
	}

	/**
	 * Returns the {@link ParameterDeclaration AST node} this scope parameter declaration bases on.
	 * @since 0.10.0
	 */
	public get node(): ParameterDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this parameter.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The type of this parameter.
	 * @since 0.10.0
	 */
	public get type(): KipperType {
		return this.typeData.valueType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 * @since 0.10.0
	 */
	public get scope(): LocalScope {
		return this.func.getSemanticData().innerScope;
	}

	/**
	 * Returns the function this parameter is defined in.
	 * @since 0.10.0
	 */
	public get func(): FunctionDeclaration {
		return this.semanticData.func;
	}

	/**
	 * Returns whether the parameter declaration is defined and has a value set during declaration.
	 *
	 * This will always be true, since a parameter declaration always has a value, even if it is not set or is set to
	 * 'undefined'.
	 * @since 0.10.0
	 */
	public get isDefined(): boolean {
		return true;
	}

	/**
	 * Returns whether the parameter declaration has a value.
	 *
	 * This is always true, since a parameter declaration always has a value, even if it is not set or is set to
	 * 'undefined'.
	 * @since 0.10.0
	 */
	public get hasValue(): boolean {
		return true;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public get isCallable(): boolean {
		return this.type === "func";
	}
}
