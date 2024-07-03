/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../../analysis";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
export interface FunctionDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The {@link KipperType return type} of the function.
	 * @since 0.10.0
	 */
	returnType: ProcessedType;
}
