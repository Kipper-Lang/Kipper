import type { DeclarationTypeSemantics } from "../../../declaration-type-semantics";
import type { ProcessedType } from "../../../../../../semantics";

/**
 * Type semantics for a {@link InterfaceMemberDeclaration}.
 * @since 0.12.0
 */
export interface ClassMemberDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	valueType: ProcessedType;
}
