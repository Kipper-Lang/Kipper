import type { TypeDeclarationSemantics } from "../../type-declaration-semantics";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.11.0
 */
export interface InterfaceMemberDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of the interface member.
	 * @since 0.11.0
	 */
	identifier: string;
}
