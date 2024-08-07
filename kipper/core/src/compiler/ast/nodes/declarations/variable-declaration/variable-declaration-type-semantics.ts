/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
import type { CheckedType } from "../../../../analysis";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for AST Node {@link VariableDeclaration}.
 * @since 0.10.0
 */
export interface VariableDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The type of the value that may be stored in this variable.
	 *
	 * This is the type evaluated using the {@link VariableDeclarationSemantics.valueType valueType identifier}.
	 * @since 0.10.0
	 */
	valueType: CheckedType;
}
