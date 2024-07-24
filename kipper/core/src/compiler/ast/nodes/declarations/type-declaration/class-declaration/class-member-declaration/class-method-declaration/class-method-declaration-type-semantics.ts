import type { TypeDeclarationTypeSemantics } from "../../../type-declaration-type-semantics";
import type { ProcessedType } from "../../../../../../../semantics";

/**
 *
 * @since 0.12.0
 */
export interface ClassMethodDeclarationTypeSemantics extends TypeDeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	type: ProcessedType;
}
