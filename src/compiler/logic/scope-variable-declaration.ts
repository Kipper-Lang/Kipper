/**
 * File containing the implementations of a scope entry that represent a variable or function inside a scope
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { KipperStorageType, KipperType } from "./types";
import { CompoundStatement, VariableDeclaration } from "../tokens";
import type { KipperProgramContext } from "../program-ctx";

/**
 * Represents the definition of a scope entry that may be a child of the global scope, a function scope or compound
 * statement scope
 */
export class ScopeVariableDeclaration {
	public constructor(
		// eslint-disable-next-line no-unused-vars
		private _token: VariableDeclaration,
	) {}

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
	public get type(): KipperType | undefined {
		return this._token.valueType;
	}

	/**
	 * The storage type of this scope entry
	 */
	public get storageType(): KipperStorageType | undefined {
		return this._token.storageType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeVariableDeclaration}
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._token.scope;
	}
}
