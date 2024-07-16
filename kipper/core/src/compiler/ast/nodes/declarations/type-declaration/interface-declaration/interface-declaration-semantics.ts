/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
import type { TypeDeclarationSemantics } from "../type-declaration-semantics";
import type { InterfaceMemberDeclaration } from "./interface-member-declaration";

/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
export interface InterfaceDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this interface.
	 * @since 0.11.0
	 */
	identifier: string;

	/**
	 * The members of this interface.
	 * @since 0.11.0
	 */
	members: Array<InterfaceMemberDeclaration>;
}
