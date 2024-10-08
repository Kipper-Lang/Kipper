/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
import type { RawType } from "../../../../semantics";
import type { DeclarationSemantics } from "../declaration-semantics";
import type { FunctionDeclaration, IdentifierTypeSpecifierExpression, LambdaPrimaryExpression } from "../../../nodes";
import type { ClassMethodDeclaration } from "../type-declaration/class-declaration/class-member-declaration/class-method-declaration/class-method-declaration";
import type { ClassConstructorDeclaration } from "../type-declaration/class-declaration/class-member-declaration/class-constructor-declaration/class-constructor-declaration";

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
	func: FunctionDeclaration | LambdaPrimaryExpression | ClassMethodDeclaration | ClassConstructorDeclaration;
}
