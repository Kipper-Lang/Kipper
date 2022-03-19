/**
 * File containing the implementations of a scope entry that represent a variable or function inside a scope
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { KipperStorageType, KipperType } from ".";
import { KipperProgramContext } from "../program-ctx";
import { CompoundStatement } from "../tokens";

/**
 * Represents the definition of a scope entry that may be a child of the global scope, a function scope or compound
 * statement scope
 */
export abstract class ScopeDeclaration {
	protected constructor(
		// eslint-disable-next-line no-unused-vars
		private _identifier: string,
		// eslint-disable-next-line no-unused-vars
		private _type: KipperType,
		// eslint-disable-next-line no-unused-vars
		private _storageType: KipperStorageType,
		// eslint-disable-next-line no-unused-vars
		private _scope: KipperProgramContext | CompoundStatement) {
	}

	/**
	 * The identifier of this entry
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * The variable type or return type of this scope entry
	 */
	public get type(): KipperType {
		return this._type;
	}

	/**
	 * The storage type of this scope entry
	 */
	public get storageType(): KipperStorageType {
		return this._storageType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._scope;
	}
}

