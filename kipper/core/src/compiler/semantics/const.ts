/**
 * Constant values for Kipper.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.3.0
 */

import type { KipperProgramContext } from "../program-ctx";
import type { CompoundStatement } from "./language";
import type { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../scope-declaration";
import type { BuiltInFunction } from "../runtime-built-ins";

/**
 * If this variable is true, then this environment is assumed to be inside a browser and special browser support should
 * be applied.
 * @since 0.6.0
 */
// @ts-ignore
// eslint-disable-next-line no-undef
export const isBrowser = typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export type KipperFuncType = "func";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export const kipperFuncType: KipperFuncType = "func";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export type KipperVoidType = "void";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export const kipperVoidType: KipperVoidType = "void";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export type KipperNumType = "num";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export const kipperNumType: KipperNumType = "num";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export type KipperStrType = "str";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export const kipperStrType: KipperStrType = "str";

/**
 * Char type in Kipper.
 * @since 0.5.0
 * @example
 * char
 */
export type KipperCharType = "char";

/**
 * Char type in Kipper.
 * @since 0.5.0
 * @example
 * char
 */
export const kipperCharType: KipperCharType = "char";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export type KipperBoolType = "bool";

/**
 * Literal names for a Kipper boolean.
 * @since 0.8.0
 * @example
 * var x: bool = true;
 */
export type KipperBoolTypeLiterals = "true" | "false";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export const kipperBoolType: KipperBoolType = "bool";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
// eslint-disable-next-line no-unused-vars
export type KipperListType<ValueType extends KipperType> = "list";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
export const kipperListType: KipperListType<any> = "list";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export type KipperMetaType = "type";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export const kipperMetaType: KipperMetaType = "type";

/**
 * String-like types that include both char and string.
 * @since 0.6.0
 */
export type KipperStrLikeTypes = KipperStrType | KipperCharType;

/**
 * String-like types that include both char and string.
 * @since 0.6.0
 */
export const kipperStrLikeTypes: Array<KipperStrLikeTypes> = [kipperStrType, kipperCharType];

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export type KipperPrimitiveType = KipperVoidType | KipperNumType | KipperStrType | KipperCharType | KipperBoolType;

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export const kipperPrimitiveTypes = [kipperVoidType, kipperNumType, kipperStrType, kipperCharType, kipperBoolType];

/**
 * All available variable types inside Kipper.
 */
export type KipperType = KipperMetaType | KipperFuncType | KipperPrimitiveType | KipperListType<any>;

/**
 * All available variable types inside Kipper.
 */
export const kipperTypes: Array<string> = [kipperMetaType, kipperFuncType, ...kipperPrimitiveTypes, kipperListType];

/**
 * Types that may be returned by a function.
 * @since 0.6.0
 */
export type KipperReturnType = KipperPrimitiveType | KipperListType<any>;

/**
 * Types that may be returned by a function.
 * @since 0.6.0
 */
export const kipperReturnTypes: Array<string> = [...kipperPrimitiveTypes, "list"];

/**
 * List of all supported variable type conversions that can be performed in a Kipper program.
 *
 * For each translation, there will have to be a corresponding {@link KipperTargetBuiltInGenerator generator function},
 * which generates for each conversion the translator function in the specific target.
 * @since 0.8.0
 */
export const kipperSupportedConversions: Array<[KipperType, KipperType]> = [
	["num", "str"],
	["str", "num"],
	["bool", "str"],
	["bool", "num"],
];

/**
 * All available storage types inside Kipper.
 */
export type KipperStorageType = "var" | "const";

/**
 * All available storage types inside Kipper.
 * @since 0.6.0
 */
export const kipperStorageTypes = ["var", "const"];

/**
 * All available multiplicative operations inside Kipper.
 * @since 0.6.0
 */
export type KipperMultiplicativeOperator = "*" | "**" | "/" | "%";

/**
 * All available multiplicative operations inside Kipper.
 * @since 0.6.0
 */
export const kipperMultiplicativeOperators = ["*", "**", "/", "%"];

/**
 * The plus operator.
 * @since 0.6.0
 */
export type KipperPlusOperator = "+";

/**
 * The plus operator.
 * @since 0.6.0
 */
export const kipperPlusOperator: KipperPlusOperator = "+";

/**
 * The minus operator.
 * @since 0.6.0
 */
export type KipperMinusOperator = "-";

/**
 * The minus operator.
 * @since 0.6.0
 */
export const kipperMinusOperator: KipperMinusOperator = "-";

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export type KipperAdditiveOperator = KipperMinusOperator | KipperPlusOperator;

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export const kipperAdditiveOperators = [kipperMinusOperator, kipperPlusOperator];

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticOperator = KipperAdditiveOperator | KipperMultiplicativeOperator;

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticOperators = [...kipperMultiplicativeOperators, ...kipperAdditiveOperators];

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticAssignOperator = "+=" | "-=" | "*=" | "/=";

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticAssignOperators = ["+=", "-=", "*=", "/="];

/**
 * Represents a single token of translated Kipper code. This is usually used without a {@link TranslatedCodeLine}, which
 * represents a whole translated line of code.
 * @since 0.5.0
 */
export type TranslatedCodeToken = string;

/**
 * Represents a single translated Kipper expression. This is usually used to represent multiple expression inside a
 * single {@link TranslatedCodeLine}.
 */
export type TranslatedExpression = Array<TranslatedCodeToken>;

/**
 * Represents a single line of translated Kipper code.
 * @since 0.5.0
 */
export type TranslatedCodeLine = Array<TranslatedCodeToken>;

/**
 * Represents a scope for a {@link CompilableASTNode}.
 * @since 0.6.0
 */
export type KipperScope = KipperProgramContext | CompoundStatement;

/**
 * Represents a Kipper function that can be either declared or defined.
 * @since 0.6.0
 */
export type KipperFunction = BuiltInFunction | ScopeFunctionDeclaration;

/**
 * Represents a Kipper variable that can be either declared or defined.
 */
export type KipperVariable = ScopeVariableDeclaration;

/**
 * Represents a reference that can be used as an identifier.
 * @since 0.6.0
 */
export type KipperRef = KipperFunction | KipperVariable;
