/**
 * Constant values for Kipper.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.3.0
 */

import type { KipperProgramContext } from "./program-ctx";
import type { CompoundStatement } from "./tokens";
import type { BuiltInFunction, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./logic";

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
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export type KipperVoidType = "void";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export type KipperNumType = "num";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export type KipperStrType = "str";

/**
 * Char type in Kipper.
 * @since 0.5.0
 * @example
 * char
 */
export type KipperCharType = "char";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export type KipperBoolType = "bool";

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
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export type KipperPrimitiveType = KipperVoidType | KipperNumType | KipperStrType | KipperCharType | KipperBoolType;

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export const kipperPrimitiveTypes = ["void", "num", "str", "char", "bool"];

/**
 * All available variable types inside Kipper.
 */
export type KipperType = KipperFuncType | KipperPrimitiveType | KipperListType<any>;

/**
 * All available variable types inside Kipper.
 */
export const kipperTypes: Array<string> = ["func", ...kipperPrimitiveTypes, "list"];

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
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export type KipperAdditiveOperator = "-" | "+";

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export const kipperAdditiveOperators = ["-", "+"];

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
 * Represents a scope for a {@link CompilableParseToken}.
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
