/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
import type { CheckedType } from "../../../../analysis";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for AST Node {@link ParameterDeclaration}.
 * @since 0.10.0
 */
export interface ParameterDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The {@link KipperType type} of the parameter.
	 * @since 0.10.0
	 */
	valueType: CheckedType;
}
