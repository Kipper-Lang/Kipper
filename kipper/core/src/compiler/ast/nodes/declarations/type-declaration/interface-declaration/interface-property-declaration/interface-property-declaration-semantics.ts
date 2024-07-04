/**
 * Semantics for AST Node {@link InterfaceMemberProperty}.
 * @since 0.11.0
 */

import type { TypeDeclarationSemantics } from "../../type-declaration-semantics";
import type { IdentifierTypeSpecifierExpression } from "../../../../expressions";

/**
 * Semantics for AST Node {@link InterfaceMemberProperty}.
 * @since 0.11.0
 */
export interface InterfaceMemberSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this member property.
	 * @since 0.11.0
	 */
	identifier: string;

	/**
	 * The type of this member property.
	 * @since 0.11.0
	 */
	type: IdentifierTypeSpecifierExpression;
}
