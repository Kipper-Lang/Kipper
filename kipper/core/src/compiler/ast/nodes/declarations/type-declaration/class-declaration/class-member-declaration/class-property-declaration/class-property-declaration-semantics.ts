import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import type { RawType } from "../../../../../../../semantics";
import type { ClassMemberDeclarationSemantics } from "../class-member-declaration-semantics";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassPropertyDeclarationSemantics extends ClassMemberDeclarationSemantics {
	/**
	 * The identifier of this member property.
	 * @since 0.12.0
	 */
	identifier: string;
	/**
	 * The type of this member property.
	 * @since 0.12.0
	 */
	typeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * The type of the value as a string.
	 *
	 * The identifier of the {@link typeSpecifier.semanticData.identifier typeSpecifier}.
	 * @since 0.12.0
	 */
	valueType: RawType;
}
