import type { TypeDeclarationTypeSemantics } from "../../../type-declaration-type-semantics";
import type { ProcessedType } from "../../../../../../../semantics";

/**
 * Type semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface InterfacePropertyDeclarationTypeSemantics extends TypeDeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	valueType: ProcessedType;
}
