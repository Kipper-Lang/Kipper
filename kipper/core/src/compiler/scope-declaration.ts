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
	KipperReturnType,
	KipperStorageType,
	KipperType,
	ParameterDeclaration,
	VariableDeclaration,
	VariableDeclarationSemantics,
	VariableDeclarationTypeSemantics,
} from "./semantics";
import type { KipperProgramContext } from "./program-ctx";
import type { Scope } from "./scope";

/**
 * Abstract class as a parent for {@link ScopeVariableDeclaration} and {@link ScopeFunctionDeclaration}.
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
	 * Returns whether the scope declaration was defined during its declaration.
	 * @since 0.10.0
	 */
	public abstract get isDefined(): boolean;

	/**
	 * Returns whether the declaration has a value.
	 * @since 0.10.0
	 */
	public abstract get hasValue(): boolean;
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
	 * The variable type or return type of this variable.
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
}

/**
 * Represents the definition of a function inside a {@link KipperProgramContext program}.
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
	 * The return type of this function. This can be every {@link KipperType} except {@link KipperFuncType}.
	 */
	public get returnType(): KipperReturnType {
		return this.typeData.returnType;
	}

	/**
	 * The args that are accepted inside this function. These are represented using {@link ParameterDeclaration}.
	 *
	 * The index in the array also represent the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 */
	public get args(): Array<ParameterDeclaration> {
		return this.semanticData.args;
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
}
