/**
 * Type semantics for AST Node {@link ErrorBindingDeclaration}.
 * @since 0.13.0
 */
import type { ProcessedType } from "../../../../semantics";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for AST Node {@link ErrorBindingDeclaration}.
 * @since 0.13.0
 */
export interface ErrorBindingDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The type of the value that may be stored in this variable.
	 * @since 0.13.0
	 */
	valueType: ProcessedType;
}
