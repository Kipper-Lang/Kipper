import type { ScopeDeclaration } from "./entry";

/**
 * A simple interface defining the basic functionality of a symbol table.
 * @since 0.10.0
 */
export interface SymbolTable {
	/**
	 * The items contained in this symbol table.
	 * @since 0.10.0
	 */
	entries: Map<string, ScopeDeclaration>;
	/**
	 * The parent of this symbol table.
	 * @since 0.10.0
	 */
	parent?: SymbolTable;
}
