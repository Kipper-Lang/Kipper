/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
import type { KipperStorageType } from "../../../../const";
import type { RawType, Scope } from "../../../../analysis";
import type { Expression, IdentifierTypeSpecifierExpression } from "../../../nodes";
import type { DeclarationSemantics } from "../declaration-semantics";

/**
 * Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.3.0
 */
export interface VariableDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of this variable.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The storage type option for this variable.
	 * @since 0.5.0
	 */
	storageType: KipperStorageType;
	/**
	 * The type of the value as a string.
	 *
	 * The identifier of the {@link valueTypeSpecifier.semanticData.identifier typeSpecifier}.
	 * @since 0.5.0
	 */
	valueType: RawType;
	/**
	 * The type specifier expression for the variable type.
	 * @since 0.10.0
	 */
	valueTypeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * If this is true then the variable has a defined value.
	 * @since 0.5.0
	 */
	isDefined: boolean;
	/**
	 * The scope of this variable.
	 * @since 0.5.0
	 */
	scope: Scope;
	/**
	 * The assigned value to this variable. If {@link isDefined} is false, then this value is undefined.
	 * @since 0.7.0
	 */
	value: Expression | undefined;
}
