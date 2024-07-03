/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
import type { TypeDeclarationSemantics } from "../type-declaration-semantics";

/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
export interface ClassDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this class.
	 * @since 0.11.0
	 */
	identifier: string;
}
