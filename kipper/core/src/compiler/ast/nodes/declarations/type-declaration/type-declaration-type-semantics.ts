import type { ProcessedType } from "../../../../semantics";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for a {@link TypeDeclaration}.
 * @since 0.11.0
 */
export interface TypeDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The processed type of the type declaration.
	 * @since 0.11.0
	 */
	valueType: ProcessedType;
}
