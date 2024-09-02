import type { ProcessedType } from "../../../../../../../semantics";
import type { ClassMemberDeclarationTypeSemantics } from "../class-member-declaration-type-semantics";

/**
 * Type semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassPropertyDeclarationTypeSemantics extends ClassMemberDeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	valueType: ProcessedType;
}
