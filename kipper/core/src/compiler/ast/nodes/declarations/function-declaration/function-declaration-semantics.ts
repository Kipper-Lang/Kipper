/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
import type { RawType } from "../../../../semantics";
import type { CompoundStatement, IdentifierTypeSpecifierExpression, ParameterDeclaration } from "../../../nodes";
import type { DeclarationSemantics } from "../declaration-semantics";

/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
export interface FunctionDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of the function.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The {@link KipperType return type} of the function.
	 * @since 0.5.0
	 */
	returnType: RawType;
	/**
	 * The type specifier expression for the return type.
	 * @since 0.10.0
	 */
	returnTypeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * Returns true if this declaration defines the function body for the function.
	 * @since 0.5.0
	 */
	isDefined: boolean;
	/**
	 * The available {@link ParameterDeclaration parameter} for the function invocation.
	 * @since 0.10.0
	 */
	params: Array<ParameterDeclaration>;
	/**
	 * The body of the function.
	 * @since 0.10.0
	 */
	functionBody: CompoundStatement;
}
