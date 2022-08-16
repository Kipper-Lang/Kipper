/**
 * Semantic type data definitions for all definition AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { TypeData } from "../../parser";
import type { KipperReturnType, KipperType } from "../const";

/**
 * Type data for a {@link Declaration}.
 * @since 0.10.0
 */
export interface DeclarationTypeData extends TypeData {}

/**
 * Type Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
export interface FunctionDeclarationTypeSemantics extends TypeData {
	/**
	 * The {@link KipperType return type} of the function.
	 * @since 0.10.0
	 */
	returnType: KipperReturnType;
}

/**
 * Type Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.10.0
 */
export interface VariableDeclarationTypeSemantics extends TypeData {
	/**
	 * The Kipper type that this declaration has.
	 *
	 * This is the type evaluated using the {@link VariableDeclarationSemantics.valueType valueType identifier}
	 * @since 0.10.0
	 */
	valueType: KipperType;
}
