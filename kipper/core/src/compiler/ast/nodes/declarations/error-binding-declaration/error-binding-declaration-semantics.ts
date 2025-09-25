/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.13.0
 */
import type { LocalScope } from "../../../../semantics";
import type { DeclarationSemantics } from "../declaration-semantics";
import type { IdentifierTypeSpecifierExpression } from "../../../nodes";
import type { KipperStorageType } from "../../../../const";

/**
 * Semantics for AST Node {@link ErrorBindingDeclaration}.
 * @since 0.13.0
 */
export interface ErrorBindingDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of this variable.
	 * @since 0.13.0
	 */
	identifier: string;
	/**
	 * The storage type option for this variable.
	 * @since 0.13.0
	 */
	storageType: KipperStorageType;
	/**
	 * The type specifier expression for the variable type.
	 * @since 0.13.0
	 */
	valueTypeSpecifier?: IdentifierTypeSpecifierExpression;
	/**
	 * If this is true then the variable has a defined value.
	 * @since 0.13.0
	 */
	isDefined: true;
	/**
	 * The scope of this variable.
	 * @since 0.13.0
	 */
	scope: LocalScope;
}
