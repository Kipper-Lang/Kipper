/**
 * File containing the implementations of a scope entry that represent a variable or function inside a scope
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type {
	KipperReturnType,
	KipperStorageType,
	KipperType,
	Declaration,
	FunctionDeclaration,
	FunctionDeclarationSemantics,
	ParameterDeclaration,
	VariableDeclaration,
	VariableDeclarationSemantics,
} from "./semantics";
import type { KipperProgramContext } from "./program-ctx";
import type { Scope } from "./scope";

/**
 * Abstract class as a parent for {@link ScopeVariableDeclaration} and {@link ScopeFunctionDeclaration}.
 * @since 0.1.2
 */
export abstract class ScopeDeclaration {
	public abstract get node(): Declaration<any>;

	public abstract get identifier(): string;

	/**
	 * Fetches the {@link KipperProgramContext program context instance} for this token.
	 */
	public get programCtx(): KipperProgramContext {
		return this.node.programCtx;
	}
}

/**
 * Represents a variable scope entry that may be a child of the global scope or local scope.
 * @since 0.1.0
 */
export class ScopeVariableDeclaration extends ScopeDeclaration {
	private readonly semanticData: VariableDeclarationSemantics;

	public constructor(
		// eslint-disable-next-line no-unused-vars
		private _node: VariableDeclaration,
	) {
		super();

		// Ensure the token is valid
		this.semanticData = _node.getSemanticData();
	}

	/**
	 * Returns the {@link VariableDeclaration token} this scope declaration bases on.
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
		return this.semanticData.valueType;
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
	 * Returns whether the variable declaration is defined and has a value set.
	 */
	public get isDefined(): boolean {
		return this.semanticData.isDefined;
	}
}

/**
 * Represents the definition of a function inside a {@link KipperProgramContext program}.
 * @since 0.1.2
 */
export class ScopeFunctionDeclaration extends ScopeDeclaration {
	private readonly semanticData: FunctionDeclarationSemantics;

	public constructor(
		// eslint-disable-next-line no-unused-vars
		private _node: FunctionDeclaration,
	) {
		super();

		// Ensure the token is valid
		this.semanticData = _node.getSemanticData();
	}

	/**
	 * Returns the {@link FunctionDeclaration token} this scope function declaration bases on.
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
		return this.semanticData.returnType;
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
	 * Returns whether the function declaration is defined and has a function body.
	 * @since 0.3.0
	 */
	public get isDefined(): boolean {
		return this.semanticData.isDefined;
	}
}
