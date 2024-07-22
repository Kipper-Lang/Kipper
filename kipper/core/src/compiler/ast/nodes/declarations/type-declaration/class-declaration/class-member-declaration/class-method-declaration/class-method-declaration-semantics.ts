import type { TypeDeclarationSemantics } from "../../../type-declaration-semantics";
import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import type { ParameterDeclaration } from "../../../../parameter-declaration";
import type { CompoundStatement } from "../../../../../statements";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassMethodDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this member property.
	 * @since 0.12.0
	 */
	identifier: string;

	/**
	 * The return type of this method.
	 * @since 0.12.0
	 */
	parameters: Array<ParameterDeclaration>;

	/**
	 * The return type of this method.
	 * @since 0.12.0
	 */
	returnType: IdentifierTypeSpecifierExpression;

	/**
	 * The body of the function.
	 * @since 0.10.0
	 */
	functionBody: CompoundStatement;
}
