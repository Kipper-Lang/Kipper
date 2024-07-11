import type { TypeDeclarationSemantics } from "../../../type-declaration-semantics";
import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import type { ParameterDeclaration } from "../../../../parameter-declaration";
import type { RawType } from "../../../../../../../analysis";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.11.0
 */
export interface InterfaceMethodDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this member property.
	 * @since 0.11.0
	 */
	identifier: string;

	/**
	 * The return type of this method.
	 * @since 0.11.0
	 */
	parameters: Array<ParameterDeclaration>;

	/**
	 * The return type of this method.
	 * @since 0.11.0
	 */
	returnType: IdentifierTypeSpecifierExpression;
}
