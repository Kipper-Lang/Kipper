/**
 * Constant declarations and types for the compiler implementation.
 * @since 0.3.0
 */
import type {
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
	UndefinedCustomType
} from "./analysis";
import type { BuiltInFunction, BuiltInVariable } from "./runtime-built-ins";
import { InternalFunction } from "./runtime-built-ins";

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
export type KipperMetaType = "type";

/**
 * Represents the meta type in Kipper, which itself is used represents a type e.g. this is the type of a
 * type.
 * @since 0.8.0
 */
export const kipperMetaType: KipperMetaType = "type";

/**
 * Null type in Kipper.
 * @since 0.10.0
 */
export type KipperNullType = "null";

/**
 * Null type in Kipper.
 * @since 0.10.0
 */
export const kipperNullType: KipperNullType = "null";

/**
 * Undefined type in Kipper.
 * @since 0.10.0
 */
export type KipperUndefinedType = "undefined";

/**
 * Undefined type in Kipper.
 * @since 0.10.0
 */
export const kipperUndefinedType: KipperUndefinedType = "undefined";

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
 * List type in Kipper. {@link KipperType T} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type KipperListType<T extends KipperType> = "list";

/**
 * List type in Kipper. {@link KipperType ValueType} represents the type of the list content and only serves as a
 * type checking generic type, it will not change the type itself.
 * @since 0.5.0
 * @example
 * list<T>
 */
export const kipperListType: KipperListType<any> = "list";

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export type KipperPrimitiveType =
	| KipperVoidType
	| KipperNullType
	| KipperUndefinedType
	| KipperNumType
	| KipperStrType
	| KipperBoolType;

/**
 * All primitive types inside Kipper.
 * @since 0.6.0
 */
export const kipperPrimitiveTypes: Array<KipperPrimitiveType> = [
	kipperVoidType,
	kipperNullType,
	kipperUndefinedType,
	kipperNumType,
	kipperStrType,
	kipperBoolType,
];

/**
 * All compilable and valid base types inside Kipper.
 *
 * This is mainly different from the standard {@link KipperType} that it excludes {@link KipperErrorType}, which is
 * only used for error handling/recovery and skips type checking altogether.
 * @since 0.10.0
 */
export type KipperCompilableType = KipperMetaType | KipperPrimitiveType | KipperFuncType | KipperListType<any>;

/**
 * All compilable and valid base types inside Kipper.
 * @since 0.10.0
 */
export const kipperCompilableTypes: Array<KipperCompilableType> = [
	kipperFuncType,
	...kipperPrimitiveTypes,
	kipperListType,
];

/**
 * All error types inside Kipper, which indicate an invalid type that can not be used for type checking.
 * @since 0.10.0
 */
export type KipperErrorType = UndefinedCustomType;

/**
 * All available variable types inside Kipper.
 */
export type KipperType = KipperCompilableType | KipperErrorType;

/**
 * List of all supported variable type conversions that can be performed in a Kipper program.
 *
 * For each translation, there will have to be a corresponding {@link KipperTargetBuiltInGenerator generator function},
 * which generates for each conversion the translator function in the specific target.
 * @since 0.8.0
 */
export const kipperSupportedConversions: Array<[KipperType, KipperType]> = [
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
export type KipperStorageType = "var" | "const";

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
export type KipperUnaryModifierOperator = KipperNegateOperator | KipperSignOperator;

/**
 * Modifier Unary operators, which are used to modify the value of an expression.
 *
 * This type specifically exists for the {@link OperatorModifiedUnaryExpression}.
 * @since 0.9.0
 */
export const kipperUnaryModifierOperators: Array<KipperUnaryModifierOperator> = [
	kipperNegateOperator,
	...kipperSignOperators,
];

/**
 * All available unary operators in Kipper, which can be used to modify the value of an expression.
 * @since 0.9.0
 */
export type KipperUnaryOperator = KipperUnaryModifierOperator | KipperIncrementOrDecrementOperator;

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
 * Represents all referencable functions that a user can use inside Kipper. This does not include internal functions.
 * @since 0.10.0
 */
export type KipperReferenceableFunction = BuiltInFunction | ScopeFunctionDeclaration;

/**
 * Represents a Kipper function that can be either declared or defined.
 * @since 0.6.0
 */
export type KipperFunction = InternalFunction | KipperReferenceableFunction;

/**
 * Represents a Kipper variable that can be either declared or defined.
 * @since 0.6.0
 */
export type KipperVariable = BuiltInVariable | ScopeVariableDeclaration;

/**
 * Represents a Kipper parameter inside a custom user-defined {@link FunctionDeclaration ScopeFunctionDeclaration}.
 * @since 0.10.0
 */
export type KipperParam = ScopeParameterDeclaration;

/**
 * Represents a Kipper argument inside a custom user-defined {@link FunctionDeclaration ScopeFunctionDeclaration}.
 *
 * @alias KipperParam
 * @since 0.10.0
 */
export type KipperArg = KipperParam;

/**
 * Represents a runtime variable or function that can be referenced.
 * @since 0.6.0
 */
export type KipperReferenceable = KipperReferenceableFunction | KipperVariable | KipperParam | ScopeDeclaration;

/**
 * Represents all possible jump statements inside Kipper.
 * @since 0.10.0
 */
export type JmpStatementType = "continue" | "break";
