import type { ParameterDeclaration } from "../../../../parameter-declaration";
import type { CompoundStatement } from "../../../../../statements";
import type { KipperConstructorInternalIdentifier } from "../../../../../../../const";
import type { ClassMemberDeclarationSemantics } from "../class-member-declaration-semantics";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassConstructorDeclarationSemantics extends ClassMemberDeclarationSemantics {
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
