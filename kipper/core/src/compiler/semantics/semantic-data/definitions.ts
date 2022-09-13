/**
 * Semantic data definitions for all definition AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { SemanticData } from "../../parser";
import type { KipperStorageType } from "../const";
import type { Scope } from "../../scope";
import type { Expression, ParameterDeclaration } from "../language";

/**
 * Semantics for a {@link Declaration}.
 * @since 0.5.0
 */
export interface DeclarationSemantics extends SemanticData {
	/**
	 * The identifier of the declaration.
	 * @since 0.5.0
	 */
	identifier: string;
}

/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
export interface FunctionDeclarationSemantics extends SemanticData {
	/**
	 * The identifier of the function.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The {@link KipperType return type} of the function.
	 * @since 0.5.0
	 */
	returnType: string;
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
}

/**
 * Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.3.0
 */
export interface VariableDeclarationSemantics extends SemanticData {
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
	 * @since 0.5.0
	 */
	valueType: string;
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
	value: Expression<any, any> | undefined;
}

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
	valueType: string;
}
