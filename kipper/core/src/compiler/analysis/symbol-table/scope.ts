/**
 * A symbol-table implementation in form of a scope that may contain both variables and functions.
 * @since 0.8.0
 */
import type { FunctionDeclaration, VariableDeclaration } from "../../ast";
import type { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";
import type { SymbolTable } from "./symbol-table";

/**
 * A scope in a Kipper program, which can contain {@link ScopeVariableDeclaration variables},
 * {@link ScopeFunctionDeclaration functions} and {@link ScopeParameterDeclaration function arguments}.
 *
 * A scope can be a child of another scope or the global scope of a {@link KipperProgramContext program}.
 * @since 0.8.0
 */
export abstract class Scope implements SymbolTable {
	protected readonly _entries: Map<string, ScopeDeclaration>;

	protected constructor() {
		this._entries = new Map<string, ScopeDeclaration>();
	}

	/**
	 * The parent scope of this scope.
	 * @since 0.10.0
	 */
	public abstract parent?: SymbolTable;

	/**
	 * Returns the entries in this scope (symbol table entries).
	 * @since 0.10.0
	 */
	public get entries(): Map<string, ScopeDeclaration> {
		return this._entries;
	}

	/**
	 * Adds a new variable declaration to the {@link entries symbol table entries}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeVariableDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration;

	/**
	 * Adds a new function declaration to the {@link entries symbol table entries}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeFunctionDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration;

	/**
	 * Searches for a reference/entry with the specific identifier in the local hash table entries (local scope).
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found reference or undefined.
	 * @since 0.8.0
	 */
	public abstract getEntry(identifier: string): ScopeDeclaration | undefined;

	/**
	 * Searches for a reference/entry with the specific {@link identifier} in the local hash table entries (local
	 * scope) and all parent scopes.
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found reference or undefined.
	 * @since 0.10.0
	 */
	public abstract getEntryRecursively(identifier: string): ScopeDeclaration | undefined;
}
