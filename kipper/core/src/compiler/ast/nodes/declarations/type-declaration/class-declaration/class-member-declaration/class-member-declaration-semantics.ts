import type { DeclarationSemantics } from "../../../declaration-semantics";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassMemberDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of the interface member.
	 * @since 0.12.0
	 */
	identifier: string;
}
