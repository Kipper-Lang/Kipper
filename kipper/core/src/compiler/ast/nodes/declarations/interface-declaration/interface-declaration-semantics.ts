/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
import type { DeclarationSemantics } from "../declaration-semantics";

/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
export interface InterfaceDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of this interface.
	 * @since 0.11.0
	 */
	identifier: string;
}
