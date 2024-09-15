import type { ProcessedType } from "../../../../semantics";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for a property declaration inside a {@link TypeDeclaration}.
 *
 * This is a simple helper interface for the properties inside classes and interfaces.
 * @since 0.12.0
 */
export interface TypeDeclarationPropertyTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The processed type of the type declaration.
	 * @since 0.12.0
	 */
	valueType: ProcessedType;
}
