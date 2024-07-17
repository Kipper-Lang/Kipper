import type { TypeDeclarationSemantics } from "../../../type-declaration-semantics";
import type { ParameterDeclaration } from "../../../../parameter-declaration";
import type { CompoundStatement } from "../../../../../statements";
import { KipperConstructorInternalIdentifier } from "../../../../../../../const";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassConstructorDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of the type declaration.
	 *
	 * This is always "@constructor".
	 * @since 0.11.0
	 */
	identifier: KipperConstructorInternalIdentifier;
	/**
	 * The return type of this method.
	 * @since 0.12.0
	 */
	parameters: Array<ParameterDeclaration>;

	/**
	 * The body of the function.
	 * @since 0.10.0
	 */
	functionBody: CompoundStatement;
}
