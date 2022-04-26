/**
 * File containing the implementations of a scope entry that represent a variable or function inside a scope
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { KipperStorageType, KipperType } from "./const";
import {
	CompoundStatement,
	Declaration,
	FunctionDeclaration,
	ParameterDeclaration,
	VariableDeclaration,
} from "../tokens";
import type { KipperProgramContext } from "../program-ctx";

/**
 * Abstract class as a parent for {@link ScopeDeclaration} and {@link Scope}.
 * @since 0.1.2
 */
export abstract class ScopeDeclaration {
	public abstract get token(): Declaration;

	public abstract get identifier(): string;

	/**
	 * Fetches the {@link KipperProgramContext program context instance} for this token.
	 */
	public get programCtx(): KipperProgramContext {
		return this.token.programCtx;
	}
}

/**
 * Represents the definition of a scope entry that may be a child of the global scope, a function scope or compound
 * statement scope.
 * @since 0.1.0
 */
export class ScopeVariableDeclaration extends ScopeDeclaration {
	public constructor(
		// eslint-disable-next-line no-unused-vars
		private _token: VariableDeclaration,
	) {
		super();
	}

	/**
	 * Returns the {@link VariableDeclaration token} this scope declaration bases on.
	 */
	public get token(): VariableDeclaration {
		return this._token;
	}

	/**
	 * The identifier of this entry
	 */
	public get identifier(): string {
		return this._token.identifier;
	}

	/**
	 * The variable type or return type of this scope entry
	 */
	public get type(): KipperType {
		return this._token.valueType;
	}

	/**
	 * The storage type of this scope entry
	 */
	public get storageType(): KipperStorageType {
		return this._token.storageType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._token.scope;
	}

	/**
	 * Returns whether the variable declaration is defined and has a value set.
	 */
	public get isDefined(): boolean {
		return this._token.isDefined;
	}
}

/**
 * Represents the definition of a function inside a {@link KipperProgramContext program}.
 * @since 0.1.2
 */
export class ScopeFunctionDeclaration extends ScopeDeclaration {
	public constructor(
		// eslint-disable-next-line no-unused-vars
		private _token: FunctionDeclaration,
	) {
		super();
	}

	/**
	 * Returns the {@link FunctionDeclaration token} this scope function declaration bases on.
	 */
	public get token(): FunctionDeclaration {
		return this._token;
	}

	/**
	 * The identifier of this entry.
	 */
	public get identifier(): string {
		return this._token.identifier;
	}

	/**
	 * The function return type.
	 */
	public get returnType(): KipperType {
		return this._token.returnType;
	}

	/**
	 * The storage type of this scope entry.
	 */
	public get args(): Array<ParameterDeclaration> {
		return this._token.args;
	}

	/**
	 * Returns whether the function declaration is defined and has a function body.
	 * @since 0.3.0
	 */
	public get isDefined(): boolean {
		return this._token.isDefined;
	}
}
