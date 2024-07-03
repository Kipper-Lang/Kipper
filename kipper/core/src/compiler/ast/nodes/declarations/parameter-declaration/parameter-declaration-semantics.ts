/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
import type { RawType } from "../../../../analysis";
import type { FunctionDeclaration, IdentifierTypeSpecifierExpression } from "../../../nodes";
import type { DeclarationSemantics } from "../declaration-semantics";

/**
 * Semantics for AST Node {@link ParameterDeclaration}.
 * @since 0.5.0
 */
export interface ParameterDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of the parameter.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The {@link KipperType type} of the parameter.
	 * @since 0.5.0
	 */
	valueType: RawType;
	/**
	 * The type specifier expression for the parameter type.
	 * @since 0.10.0
	 */
	valueTypeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * The parent function of this parameter.
	 * @since 0.10.0
	 */
	func: FunctionDeclaration;
}
