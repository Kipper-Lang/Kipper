/**
 * Semantic data declarations for all definition AST nodes.
 * @since 0.10.0
 */
import type { SemanticData } from "../ast-node";
import type { KipperStorageType } from "../../const";
import type { Scope } from "../../analysis";
import type { CompoundStatement, Expression } from "../nodes";
import type { FunctionDeclaration, ParameterDeclaration } from "../nodes/declarations";
import { IdentifierTypeSpecifierExpression } from "../nodes";
import { UncheckedType } from "../../analysis";

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
	returnType: UncheckedType;
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
	 *
	 * The identifier of the {@link valueTypeSpecifier.semanticData.identifier typeSpecifier}.
	 * @since 0.5.0
	 */
	valueType: UncheckedType;
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
	valueType: UncheckedType;
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
