/**
 * Constant declarations and types for the compiler implementation.
 * @since 0.3.0
 */
import type { ScopeDeclaration } from "./semantics";

/**
 * If this variable is true, then this environment is assumed to be inside a browser and special browser support should
 * be applied.
 * @since 0.6.0
 */
// @ts-ignore
// eslint-disable-next-line no-undef
export const isBrowser = typeof window !== "undefined" && {}.toString.call(window) === "[object Window]";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export type KipperMetaTypeLiteral = "type";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export const kipperMetaTypeLiteral: KipperMetaTypeLiteral = "type";

/**
 * Null type in Kipper.
 * @since 0.10.0
 */
export type KipperNullTypeLiteral = "null";

/**
 * Null type in Kipper.
 * @since 0.10.0
 */
export const kipperNullTypeLiteral: KipperNullTypeLiteral = "null";

/**
 * Undefined type in Kipper.
 * @since 0.10.0
 */
export type KipperUndefinedTypeLiteral = "undefined";

/**
 * Undefined type in Kipper.
 * @since 0.10.0
 */
export const kipperUndefinedTypeLiteral: KipperUndefinedTypeLiteral = "undefined";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export type KipperFuncTypeLiteral = "func";

/**
 * Function type in Kipper.
 * @since 0.6.0
 */
export const kipperFuncTypeLiteral: KipperFuncTypeLiteral = "func";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export type KipperVoidTypeLiteral = "void";

/**
 * Void type in Kipper.
 * @since 0.5.0
 * @example
 * void
 */
export const kipperVoidTypeLiteral: KipperVoidTypeLiteral = "void";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export type KipperNumTypeLiteral = "num";

/**
 * Numeric type in Kipper.
 * @since 0.5.0
 * @example
 * num
 */
export const kipperNumTypeLiteral: KipperNumTypeLiteral = "num";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export type KipperStrTypeLiteral = "str";

/**
 * String type in Kipper.
 * @since 0.5.0
 * @example
 * str
 */
export const kipperStrTypeLiteral: KipperStrTypeLiteral = "str";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export type KipperBoolTypeLiteral = "bool";

/**
 * Constant names for a Kipper boolean.
 * @since 0.8.0
 * @example
 * var x: bool = true;
 */
export type KipperBoolTypeConstants = "true" | "false";

/**
 * Boolean type in Kipper.
 * @since 0.5.0
 * @example
 * bool
 */
export const kipperBoolTypeLiteral: KipperBoolTypeLiteral = "bool";

/**
 * List type in Kipper. {@link KipperType T} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 */
export type KipperListTypeLiteral = "list";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
export const kipperListTypeLiteral: KipperListTypeLiteral = "list";

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export type KipperPrimitiveTypeLiteral =
	| KipperVoidTypeLiteral
	| KipperNullTypeLiteral
	| KipperUndefinedTypeLiteral
	| KipperNumTypeLiteral
	| KipperStrTypeLiteral
	| KipperBoolTypeLiteral;

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export const kipperPrimitiveTypeLiterals: Array<KipperPrimitiveTypeLiteral> = [
	kipperVoidTypeLiteral,
	kipperNullTypeLiteral,
	kipperUndefinedTypeLiteral,
	kipperNumTypeLiteral,
	kipperStrTypeLiteral,
	kipperBoolTypeLiteral,
];

/**
 * All compilable and valid base types inside Kipper.
 *
 * This is mainly different from the standard {@link KipperType} that it excludes {@link KipperErrorType}, which is
 * only used for error handling/recovery and skips type checking altogether.
 * @since 0.10.0
 */
export type KipperBuiltInTypeLiteral =
	| KipperMetaTypeLiteral
	| KipperPrimitiveTypeLiteral
	| KipperFuncTypeLiteral
	| KipperListTypeLiteral;

/**
 * All compilable and valid base types inside Kipper.
 * @since 0.10.0
 */
export const kipperBuiltInTypeLiterals: Array<KipperBuiltInTypeLiteral> = [
	kipperMetaTypeLiteral,
	kipperFuncTypeLiteral,
	...kipperPrimitiveTypeLiterals,
	kipperListTypeLiteral,
];

/**
 * List of all supported variable type conversions that can be performed in a Kipper program.
 *
 * For each translation, there will have to be a corresponding {@link KipperTargetBuiltInGenerator generator function},
 * which generates for each conversion the translator function in the specific target.
 * @since 0.8.0
 */
export const kipperSupportedConversions: Array<[KipperBuiltInTypeLiteral, KipperBuiltInTypeLiteral]> = [
	["num", "str"],
	["bool", "str"],
	["void", "str"],
	["null", "str"],
	["undefined", "str"],
	["bool", "num"],
	["str", "num"],
];

/**
 * All available storage types inside Kipper, which define how a variable is stored/can be accessed.
 */
export type KipperStorageType = "var" | "const" | "built-in";

/**
 * All available storage types inside Kipper, which define how a variable is stored/can be accessed.
 * @since 0.6.0
 */
export const kipperStorageTypes: Array<KipperStorageType> = ["var", "const"];

/**
 * The logical-and operator, which can be used to combine multiple conditions and return true if all conditions are true.
 * @example
 * EXP && EXP;
 * @since 0.9.0
 */
export type KipperLogicalAndOperator = "&&";

/**
 * The logical-and operator, which can be used to combine multiple conditions and return true if all conditions are true.
 * @example
 * EXP && EXP;
 * @since 0.9.0
 */
export const kipperLogicalAndOperator: KipperLogicalAndOperator = "&&";

/**
 * The logical-or operator, which can be used to combine multiple conditions and return true if at least one condition
 * is true.
 * @example
 * EXP || EXP;
 * @since 0.9.0
 */
export type KipperLogicalOrOperator = "||";

/**
 * The logical-or operator, which can be used to combine multiple conditions and return true if at least one condition
 * is true.
 * @example
 * EXP || EXP;
 * @since 0.9.0
 */
export const kipperLogicalOrOperator: KipperLogicalOrOperator = "||";

/**
 * All available logical operators inside Kipper, which can be used to compare or combine two expressions.
 * @since 0.9.0
 */
export type KipperLogicalOperator = KipperLogicalAndOperator | KipperLogicalOrOperator;

/**
 * All available logical operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperLogicalOperator: Array<KipperLogicalOperator> = ["&&", "||"];

/**
 * The bitwise-and operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP & EXP;
 * @since 0.9.0
 */
export type KipperBitwiseAndOperator = "&";

/**
 * The bitwise-and operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP & EXP;
 * @since 0.9.0
 */
export const kipperBitwiseAndOperator: KipperBitwiseAndOperator = "&";

/**
 * The bitwise-or operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP | EXP;
 * @since 0.9.0
 */
export type KipperBitwiseOrOperator = "|";

/**
 * The bitwise-or operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP | EXP;
 * @since 0.9.0
 */
export const kipperBitwiseOrOperator: KipperBitwiseOrOperator = "|";

/**
 * All available bitwise operators inside Kipper, which can be used to combine two numbers bitwise.
 * @since 0.9.0
 */
export type KipperBitwiseShiftOperator = "<<" | ">>" | ">>>";

/**
 * All available bitwise operators inside Kipper, which can be used to combine two numbers bitwise.
 * @since 0.9.0
 */
export const kipperBitwiseShiftOperators: Array<KipperBitwiseShiftOperator> = ["<<", ">>", ">>>"];

/**
 * The bitwise-xor operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP ^ EXP;
 * @since 0.9.0
 */
export type KipperBitwiseXorOperator = "^";

/**
 * The bitwise-xor operator, which can be used to combine two numbers bitwise.
 * @example
 * EXP ^ EXP;
 * @since 0.11.0
 */
export const kipperBitwiseXorOperator: KipperBitwiseXorOperator = "^";

/**
 * The bitwise-not operator, which can be used to negate a number bitwise.
 * @example
 * ~EXP;
 * @since 0.11.0
 */
export type KipperBitwiseNotOperator = "~";

/**
 * The bitwise-not operator, which can be used to negate a number bitwise.
 * @example
 * ~EXP;
 * @since 0.11.0
 */
export const kipperBitwiseNotOperator: KipperBitwiseNotOperator = "~";

/**
 * All available bitwise operators inside Kipper, which can be used to combine two numbers bitwise.
 * @since 0.9.0
 */
export type KipperBitwiseOperator =
	| KipperBitwiseAndOperator
	| KipperBitwiseOrOperator
	| KipperBitwiseXorOperator
	| KipperBitwiseShiftOperator;

/**
 * All available equality operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperEqualityOperator = "==" | "!=";

/**
 * All available equality operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperEqualityOperators: Array<KipperEqualityOperator> = ["==", "!="];

/**
 * All available relational operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperRelationalOperator = "<" | ">" | "<=" | ">=";

/**
 * All available relational operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperRelationalOperators: Array<KipperRelationalOperator> = ["<", ">", "<=", ">="];

/**
 * All available comparative operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export type KipperComparativeOperator = KipperEqualityOperator | KipperRelationalOperator;

/**
 * All available comparative operators inside Kipper, which can be used to compare two expressions against each other.
 * @since 0.9.0
 */
export const kipperComparativeOperators: Array<KipperComparativeOperator> = [
	...kipperEqualityOperators,
	...kipperRelationalOperators,
];

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
 * All available sign operators inside Kipper, which can be used to modify the value of a numeric expression.
 * @since 0.9.0
 */
export type KipperSignOperator = "+" | "-";

/**
 * All available sign operators inside Kipper, which can be used to modify the value of a numeric expression.
 * @since 0.9.0
 */
export const kipperSignOperators: Array<KipperSignOperator> = [kipperPlusOperator, kipperMinusOperator];

/**
 * Negate operator, which can be used to negate a boolean expression. It evaluates to the opposite boolean
 * representation of the original expression.
 * @example
 * !true; // false
 * !false; // true
 * !1; // false
 * !0; // true
 * @since 0.9.0
 */
export type KipperNegateOperator = "!";

/**
 * Negate operator, which can be used to negate a boolean expression. It evaluates to the opposite boolean
 * representation of the original expression.
 * @example
 * !true; // false
 * !false; // true
 * !1; // false
 * !0; // true
 * @since 0.9.0
 */
export const kipperNegateOperator: KipperNegateOperator = "!";

/**
 * All available increment and decrement operators, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export type KipperIncrementOrDecrementOperator = "++" | "--";

/**
 * Increment and decrement operators, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export const kipperIncrementOrDecrementOperators: Array<KipperIncrementOrDecrementOperator> = ["++", "--"];

/**
 * Modifier Unary operators, which can be used to modify the value of an expression.
 *
 * This type specifically exists for the {@link OperatorModifiedUnaryExpression}.
 * @since 0.9.0
 */
export type KipperUnaryModifierOperator = KipperNegateOperator | KipperSignOperator | KipperBitwiseNotOperator;

/**
 * Modifier Unary operators, which are used to modify the value of an expression.
 *
 * This type specifically exists for the {@link OperatorModifiedUnaryExpression}.
 * @since 0.9.0
 */
export const kipperUnaryModifierOperators: Array<KipperUnaryModifierOperator> = [
	kipperNegateOperator,
	...kipperSignOperators,
	kipperBitwiseNotOperator,
];

/**
 * All available unary operators in Kipper, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export type KipperUnaryOperator =
	| KipperUnaryModifierOperator
	| KipperIncrementOrDecrementOperator
	| KipperBitwiseNotOperator;

/**
 * All available unary operators in Kipper, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export const kipperUnaryOperators: Array<KipperUnaryOperator> = [
	...kipperUnaryModifierOperators,
	...kipperIncrementOrDecrementOperators,
];

/**
 * All available multiplicative operators inside Kipper.
 * @since 0.6.0
 */
export type KipperMultiplicativeOperator = "*" | "**" | "/" | "%";

/**
 * All available multiplicative operators inside Kipper.
 * @since 0.6.0
 */
export const kipperMultiplicativeOperators: Array<KipperMultiplicativeOperator> = ["*", "**", "/", "%"];

/**
 * All available additive operations inside Kipper.
 * @since 0.6.0
 */
export const kipperAdditiveOperators: Array<KipperMinusOperator | KipperPlusOperator> = [
	kipperMinusOperator,
	kipperPlusOperator,
];

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticOperator = KipperAdditiveOperator | KipperMultiplicativeOperator;

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticOperators: Array<KipperArithmeticOperator> = [
	...kipperMultiplicativeOperators,
	...kipperAdditiveOperators,
];

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticAssignOperator = "+=" | "-=" | "*=" | "/=" | "%=";

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.6.0
 */
export const kipperArithmeticAssignOperators: Array<KipperArithmeticAssignOperator> = ["+=", "-=", "*=", "/=", "%="];

/**
 * Default assignment operator for assigning a value to a variable/reference.
 * @since 0.10.0
 */
export type KipperEqualAssignOperator = "=";

/**
 * Default assignment operator for assigning a value to a variable/reference.
 * @since 0.10.0
 */
export const kipperEqualAssignOperator: KipperEqualAssignOperator = "=";

/**
 * All available assignment operators inside Kipper, which can be used to assign a value to a variable/reference.
 * @since 0.10.0
 */
export type KipperAssignOperator = KipperEqualAssignOperator | KipperArithmeticAssignOperator;

/**
 * All available assignment operators inside Kipper, which can be used to assign a value to a variable/reference.
 * @since 0.10.0
 */
export const kipperAssignOperators: Array<KipperAssignOperator> = [
	kipperEqualAssignOperator,
	...kipperArithmeticAssignOperators,
];

/**
 * Represents a single token of translated Kipper code. This is usually used without a {@link TranslatedCodeLine}, which
 * represents a whole translated line of code.
 * @since 0.5.0
 */
export type TranslatedCodeToken = string;

/**
 * Represents a single translated Kipper expression. This is usually used to represent multiple expression inside a
 * single {@link TranslatedCodeLine}.
 * @since 0.5.0
 */
export type TranslatedExpression = Array<TranslatedCodeToken>;

/**
 * Represents a single line of translated Kipper code.
 * @since 0.5.0
 */
export type TranslatedCodeLine = Array<TranslatedCodeToken>;

/**
 * Represents a runtime variable or function that can be referenced.
 * @since 0.6.0
 */
export type KipperReferenceable = ScopeDeclaration;

/**
 * Represents all possible jump statements inside Kipper.
 * @since 0.10.0
 */
export type JmpStatementType = "continue" | "break";
