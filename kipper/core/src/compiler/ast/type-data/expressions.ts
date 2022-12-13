/**
 * Semantic type data definitions for all expression AST nodes.
 * @since 0.10.0
 */
import type { KipperFunction } from "../../const";
import type { TypeData } from "../../ast";
import type { CheckedType } from "../../analysis";

/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
export interface ExpressionTypeSemantics extends TypeData {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 *
	 * This will always evaluate to "type", as a type specifier will always be a type.
	 * @since 0.10.0
	 */
	evaluatedType: CheckedType;
}

/**
 * Type Semantics for AST Node {@link NumberPrimaryExpression}.
 * @since 0.10.0
 */
export interface NumberPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link ArrayLiteralPrimaryExpression}.
 * @since 0.10.0
 */
export interface ArrayLiteralPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link StringPrimaryExpression}.
 * @since 0.10.0
 */
export interface StringPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.10.0
 */
export interface BoolPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link FStringPrimaryExpression}.
 * @since 0.10.0
 */
export interface FStringPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

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
	evaluatedType: CheckedType;
}

/**
 * Type Semantics for AST Node {@link TypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface TypeSpecifierExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type that is being stored by this type specifier. This is the type that would be used to determine what
	 * values should be stored in a variable.
	 * @since 0.10.0
	 */
	storedType: CheckedType;
}

/**
 * Type Semantics for AST Node {@link IdentifierTypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface IdentifierTypeSpecifierExpressionTypeSemantics extends TypeSpecifierExpressionTypeSemantics {}

/**
 * Semantics for AST Node {@link GenericTypeSpecifierExpression}.
 * @since 0.10.0
 */
export interface GenericTypeSpecifierExpressionTypeSemantics extends TypeSpecifierExpressionTypeSemantics {
	// Not implemented.
}

/**
 * Type Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionTypeSemantics extends TypeSpecifierExpressionTypeSemantics {
	// Not implemented.
}

/**
 * Type Semantics for AST Node {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
export interface TangledPrimaryTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link VoidOrNullOrUndefinedPrimaryExpression}.
 * @since 0.10.0
 */
export interface VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link IncrementOrDecrementPostfixExpression}.
 * @since 0.10.0
 */
export interface IncrementOrDecrementPostfixExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link MemberAccessExpression}.
 * @since 0.10.0
 */
export interface MemberAccessExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
export interface FunctionCallPostfixTypeSemantics extends ExpressionTypeSemantics {
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
export interface UnaryExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.10.0
 */
export interface IncrementOrDecrementUnaryTypeSemantics extends UnaryExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link OperatorModifiedUnaryExpression}.
 * @since 0.10.0
 */
export interface OperatorModifiedUnaryTypeSemantics extends UnaryExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.10.0
 */
export interface CastOrConvertExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type the {@link CastOrConvertExpressionSemantics.exp} should be converted to.
	 * @since 0.10.0
	 */
	castType: CheckedType;
}

/**
 * Type Semantics for arithmetic expressions ({@link MultiplicativeExpression} and {@link AdditiveExpression}).
 * @since 0.10.0
 */
export interface ArithmeticExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link MultiplicativeExpression}.
 * @since 0.10.0
 */
export interface MultiplicativeTypeSemantics extends ArithmeticExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link AdditiveExpression}.
 * @since 0.10.0
 */
export interface AdditiveExpressionTypeSemantics extends ArithmeticExpressionTypeSemantics {}

/**
 * Type Semantics for a comparative expression, which compares two operands against each other using a specified
 * operator.
 * @since 0.10.0
 */
export interface ComparativeExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link RelationalExpression}.
 * @since 0.10.0
 */
export interface RelationalExpressionTypeSemantics extends ComparativeExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link EqualityExpressionSemantics}.
 * @since 0.10.0
 */
export interface EqualityExpressionTypeSemantics extends ComparativeExpressionTypeSemantics {}

/**
 * Type Semantics for logical expressions, which combine two expressions/conditions and evaluate based on the input to a
 * boolean value.
 * @since 0.10.0
 */
export interface LogicalExpressionTypeSemantics extends ExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link LogicalAndExpression}.
 * @since 0.10.0
 */
export interface LogicalAndExpressionTypeSemantics extends LogicalExpressionTypeSemantics {}

/**
 * Type Semantics for AST Node {@link LogicalOrExpression}.
 * @since 0.10.0
 */
export interface LogicalOrExpressionTypeSemantics extends LogicalExpressionTypeSemantics {}

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
