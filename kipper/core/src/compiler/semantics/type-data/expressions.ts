/**
 * Semantic type data definitions for all expression AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type {
	KipperBoolType,
	KipperFunction,
	KipperListType,
	KipperMetaType,
	KipperNullType,
	KipperNumType,
	KipperStrType,
	KipperType,
	KipperUndefinedType,
	KipperVoidType
} from "../const";
import type { TypeData } from "../../parser";

/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
export interface ExpressionTypeSemantics extends TypeData {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link NumberPrimaryExpression}.
 * @since 0.10.0
 */
export interface NumberPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. Since a constant expression always evaluates to the same
	 * type, this will always be of type {@link KipperNumType}.
	 * @since 0.10.0
	 */
	evaluatedType: KipperNumType;
}

/**
 * Type Semantics for AST Node {@link ListPrimaryExpression}.
 * @since 0.10.0
 */
export interface ListPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. Since a constant expression always evaluates to the same
	 * type, this will always be of type {@link KipperListType}.
	 * @since 0.10.0
	 */
	evaluatedType: KipperListType<KipperType>;
}

/**
 * Type Semantics for AST Node {@link StringPrimaryExpression}.
 * @since 0.10.0
 */
export interface StringPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. Since a constant expression always evaluates to the same
	 * type, this will always be of type {@link KipperStrType}.
	 * @since 0.10.0
	 */
	evaluatedType: KipperStrType;
}

/**
 * Type Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.10.0
 */
export interface BoolPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. Since a constant expression always evaluates to the same
	 * type, this will always be of type {@link KipperBoolType}.
	 * @since 0.10.0
	 */
	evaluatedType: KipperBoolType;
}

/**
 * Type Semantics for AST Node {@link FStringPrimaryExpression}.
 * @since 0.10.0
 */
export interface FStringPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. Since a constant expression always evaluates to the same
	 * type, this will always be of type {@link KipperStrType}.
	 * @since 0.10.0
	 */
	evaluatedType: KipperStrType;
}

/**
 * Type Semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.10.0
 */
export interface IdentifierPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to.
	 *
	 * This will always be the value type of the reference that the
	 * {@link IdentifierPrimaryExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link TypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface TypeSpecifierTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperMetaType;
}

/**
 * Type Semantics for AST Node {@link IdentifierTypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface IdentifierTypeSpecifierTypeSemantics extends TypeSpecifierTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperMetaType;
}

/**
 * Semantics for AST Node {@link GenericTypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface GenericTypeSpecifierTypeSemantics extends TypeSpecifierTypeSemantics {
	// Not implemented.
}

/**
 * Type Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierTypeSemantics extends TypeSpecifierTypeSemantics {
	// Not implemented.
}

/**
 * Type Semantics for AST Node {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
export interface TangledPrimaryTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link VoidOrNullOrUndefinedPrimaryExpression}.
 * @since 0.10.0
 */
export interface VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to.
	 *
	 * This will always be 'void', 'null' or 'undefined', due to the limitations of this expression's syntax.
	 * @since 0.10.0
	 */
	evaluatedType: KipperVoidType | KipperNullType | KipperUndefinedType;
}

/**
 * Type Semantics for AST Node {@link IncrementOrDecrementPostfixExpression}.
 * @since 0.10.0
 */
export interface IncrementOrDecrementPostfixExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link ArraySpecifierExpression}.
 * @since 0.5.0
 */
export interface ArraySpecifierTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link FunctionCallPostfixExpression}.
 * @since 0.5.0
 */
export interface FunctionCallPostfixTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
	/**
	 * The function that this expression calls. Can be either a {@link ScopeFunctionDeclaration function declaration} or
	 * a {@link ScopeVariableDeclaration function in a variable}.
	 * @since 0.10.0
	 */
	func: KipperFunction;
}

/**
 * Semantics for unary expressions, which can be used to modify an expression with
 * a specified operator.
 * @since 0.10.0
 */
export interface UnaryExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.10.0
 */
export interface IncrementOrDecrementUnaryTypeSemantics extends UnaryExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link OperatorModifiedUnaryExpression}.
 * @since 0.10.0
 */
export interface OperatorModifiedUnaryTypeSemantics extends UnaryExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.10.0
 */
export interface CastOrConvertExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
	/**
	 * The type the {@link CastOrConvertExpressionSemantics.exp} should be converted to.
	 * @since 0.10.0
	 */
	castType: KipperType;
}

/**
 * Type Semantics for arithmetic expressions ({@link MultiplicativeExpression} and {@link AdditiveExpression}).
 * @since 0.10.0
 */
export interface ArithmeticExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link MultiplicativeExpression}.
 * @since 0.10.0
 */
export interface MultiplicativeTypeSemantics extends ArithmeticExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link AdditiveExpression}.
 * @since 0.10.0
 */
export interface AdditiveExpressionTypeSemantics extends ArithmeticExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for a comparative expression, which compares two operands against each other using a specified
 * operator.
 * @since 0.10.0
 */
export interface ComparativeExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link RelationalExpression}.
 * @since 0.10.0
 */
export interface RelationalExpressionTypeSemantics extends ComparativeExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link EqualityExpressionSemantics}.
 * @since 0.10.0
 */
export interface EqualityExpressionTypeSemantics extends ComparativeExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for logical expressions, which combine two expressions/conditions and evaluate based on the input to a
 * boolean value.
 * @since 0.10.0
 */
export interface LogicalExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link LogicalAndExpression}.
 * @since 0.10.0
 */
export interface LogicalAndExpressionTypeSemantics extends LogicalExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link LogicalOrExpression}.
 * @since 0.10.0
 */
export interface LogicalOrExpressionTypeSemantics extends LogicalExpressionTypeSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: KipperType;
}

/**
 * Type Semantics for AST Node {@link ConditionalExpression}.
 * @since 0.10.0
 */
export interface ConditionalExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.10.0
 */
export interface AssignmentExpressionTypeSemantics extends ExpressionTypeSemantics {}
