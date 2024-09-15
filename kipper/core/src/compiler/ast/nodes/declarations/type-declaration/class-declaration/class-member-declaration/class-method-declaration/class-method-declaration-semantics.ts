import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import type { ParameterDeclaration } from "../../../../parameter-declaration";
import type { CompoundStatement } from "../../../../../statements";
import type { ClassMemberDeclarationSemantics } from "../class-member-declaration-semantics";
import type { RawType } from "../../../../../../../semantics";

/**
 * Semantics for AST Node {@link InterfacePropertyDeclaration}.
 * @since 0.12.0
 */
export interface ClassMethodDeclarationSemantics extends ClassMemberDeclarationSemantics {
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
	returnType: RawType;
	/**
	 * The type specifier expression for the return type.
	 * @since 0.11.0
	 */
	returnTypeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * The body of the function.
	 * @since 0.10.0
	 */
	functionBody: CompoundStatement;
}
