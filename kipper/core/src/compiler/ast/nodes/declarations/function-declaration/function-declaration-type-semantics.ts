/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
import type { CheckedType } from "../../../../analysis";
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
	returnType: CheckedType;
}
