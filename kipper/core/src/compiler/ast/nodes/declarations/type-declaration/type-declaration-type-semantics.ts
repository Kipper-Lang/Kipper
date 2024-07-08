import type { TypeData } from "../../../ast-node";
import type { CustomType } from "../../../../semantics";

/**
 * Type semantics for a {@link TypeDeclaration}.
 * @since 0.11.0
 */
export interface TypeDeclarationTypeSemantics extends TypeData {
	/**
	 * The processed type of the type declaration.
	 * @since 0.11.0
	 */
	type: CustomType;
}
