/**
 * Constant values for Kipper.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.3.0
 */

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
 * All available variable types inside Kipper.
 */
export type KipperType =
	| KipperVoidType
	| KipperNumType
	| KipperStrType
	| KipperCharType
	| KipperBoolType
	| KipperListType<any>;

/**
 * All available variable types inside Kipper.
 */
export const kipperTypes: Array<string> = ["void", "num", "str", "char", "bool", "list"];

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
