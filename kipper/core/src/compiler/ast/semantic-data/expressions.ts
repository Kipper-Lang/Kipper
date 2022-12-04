/**
 * Semantic data definitions for all expression AST nodes.
 * @since 0.10.0
 */
import type {
	KipperAdditiveOperator,
	KipperArithmeticOperator,
	KipperAssignOperator,
	KipperBoolTypeLiterals,
	KipperComparativeOperator,
	KipperEqualityOperator,
	KipperIncrementOrDecrementOperator,
	KipperLogicalAndOperator,
	KipperLogicalOrOperator,
	KipperMultiplicativeOperator,
	KipperNullType,
	KipperReferenceable,
	KipperRelationalOperator,
	KipperUnaryModifierOperator,
	KipperUnaryOperator,
	KipperUndefinedType,
	KipperVoidType,
} from "../../const";
import type { SemanticData } from "../ast-node";
import type { Expression, IdentifierPrimaryExpression } from "../nodes";
import type { ExpressionTypeSemantics } from "../type-data";
import type { Reference } from "../../analysis";
import type { UncheckedType } from "../../analysis";
import { IdentifierTypeSpecifierExpression } from "../nodes";

/**
 * Static semantics for an expression class that must be evaluated during the Semantic Analysis.
 * @since 0.10.0
 */
export interface ExpressionSemantics extends SemanticData {}

/**
 * Semantics for AST Node {@link ConstantExpression}.
 * @since 0.5.0
 */
export interface ConstantExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of the constant expression. This is usually either a {@link String} or {@link Number}.
	 * @since 0.5.0
	 */
	value: any;
}

/**
 * Semantics for AST Node {@link NumberPrimaryExpression}.
 * @since 0.5.0
 */
export interface NumberPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of the constant number expression.
	 *
	 * This can be either:
	 * - A Default 10-base number (N)
	 * - A Float 10-base number (N.N)
	 * - A Hex 16-base number (0xN)
	 * - A Octal 8-base number (0oN)
	 * - A Binary 2-base number (0bN)
	 * - An Exponent 10-base number (NeN)
	 * - An Exponent Float 10-base number (N.NeN)
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * Semantics for AST Node {@link ListPrimaryExpression}.
 * @since 0.5.0
 */
export interface ListPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of the constant list expression.
	 * @since 0.5.0
	 */
	value: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>>;
}

/**
 * Semantics for AST Node {@link StringPrimaryExpression}.
 * @since 0.5.0
 */
export interface StringPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of the constant string expression.
	 * @since 0.5.0
	 */
	value: string;
	/**
	 * The quotation marks that this string has used.
	 *
	 * This is important to keep track of, so that the translated string is valid and does not produce a syntax error
	 * due to unescaped quotation marks inside it.
	 * @since 0.10.0
	 */
	quotationMarks: `"` | `'`;
}

/**
 * Semantics for AST Node {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
export interface BoolPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of this boolean constant expression.
	 * @since 0.8.0
	 */
	value: KipperBoolTypeLiterals;
}

/**
 * Semantics for AST Node {@link FStringPrimaryExpression}.
 * @since 0.5.0
 */
export interface FStringPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * Returns the items of the f-strings, where each item represents one section of the string. The section may either be
	 * a {@link StringPrimaryExpression constant string} or {@link Expression evaluable runtime expression}.
	 * @since 0.5.0
	 */
	items: Array<string | Expression<ExpressionSemantics, ExpressionTypeSemantics>>;
}

/**
 * Semantics for AST Node {@link IdentifierPrimaryExpression}.
 * @since 0.5.0
 */
export interface IdentifierPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier of the {@link IdentifierPrimaryExpressionSemantics.ref reference}.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The reference that the {@link IdentifierPrimaryExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	ref: Reference<KipperReferenceable>;
}

/**
 * Semantics for AST Node {@link TypeSpecifierExpression}.
 */
export interface TypeSpecifierExpressionSemantics extends ExpressionSemantics {}

/**
 * Semantics for AST Node {@link IdentifierTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface IdentifierTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	/**
	 * The type specified by this expression.
	 * @since 0.8.0
	 */
	typeIdentifier: UncheckedType;
}

/**
 * Semantics for AST Node {@link GenericTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface GenericTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	// Not implemented.
}

/**
 * Semantics for AST Node {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionSemantics extends TypeSpecifierExpressionSemantics {
	// Not implemented.
}

/**
 * Semantics for AST Node {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
export interface TangledPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The child expression contained in this tangled expression.
	 * @since 0.10.0
	 */
	childExp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link VoidOrNullOrUndefinedPrimaryExpression}.
 * @since 0.10.0
 */
export interface VoidOrNullOrUndefinedPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The constant identifier of this expression.
	 * @since 0.10.0
	 */
	constantIdentifier: KipperVoidType | KipperNullType | KipperUndefinedType;
}

/**
 * Semantics for AST Node {@link IncrementOrDecrementPostfixExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementPostfixExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.10.0
	 */
	operator: KipperIncrementOrDecrementOperator;
	/**
	 * The operand that is modified by the operator.
	 * @since 0.10.0
	 */
	operand: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link ArraySpecifierExpression}.
 * @since 0.5.0
 */
export interface ArraySpecifierExpressionSemantics extends ExpressionSemantics {}

/**
 * Semantics for AST Node {@link FunctionCallPostfixExpression}.
 * @since 0.5.0
 */
export interface FunctionCallPostfixExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier of the function that is called.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The function that is called by this expression.
	 * @since 0.5.0
	 */
	callTarget: Reference<KipperReferenceable>;
	/**
	 * The arguments that were passed to this function.
	 * @since 0.6.0
	 */
	args: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>>;
}

/**
 * Semantics for unary expressions, which can be used to modify an expression with
 * a specified operator.
 * @since 0.9.0
 */
export interface UnaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperUnaryOperator;
	/**
	 * The operand that is modified by the {@link operator}.
	 * @since 0.9.0
	 */
	operand: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementUnaryExpressionSemantics extends UnaryExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperIncrementOrDecrementOperator;
}

/**
 * Semantics for AST Node {@link OperatorModifiedUnaryExpression}.
 * @since 0.5.0
 */
export interface OperatorModifiedUnaryExpressionSemantics extends UnaryExpressionSemantics {
	/**
	 * The operator that is used to modify the {@link operand}.
	 * @since 0.9.0
	 */
	operator: KipperUnaryModifierOperator;
}

/**
 * Semantics for AST Node {@link CastOrConvertExpression}.
 * @since 0.5.0
 */
export interface CastOrConvertExpressionSemantics extends ExpressionSemantics {
	/**
	 * The expression to convert.
	 * @since 0.8.0
	 */
	exp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The type the {@link exp} should be converted to.
	 * @since 0.10.0
	 */
	castType: UncheckedType;
	/**
	 * The type specifier that determined {@link castType}.
	 * @since 0.10.0
	 */
	castTypeSpecifier: IdentifierTypeSpecifierExpression;
}

/**
 * Semantics for arithmetic expressions ({@link MultiplicativeExpression} and {@link AdditiveExpression}).
 * @since 0.6.0
 */
export interface ArithmeticExpressionSemantics extends ExpressionSemantics {
	/**
	 * The left operand of the expression.
	 * @since 0.10.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The right operand of the expression.
	 * @since 0.10.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The operator using the two values {@link this.leftOp leftOp} and {@link this.rightOp rightOp} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperArithmeticOperator;
}

/**
 * Semantics for AST Node {@link MultiplicativeExpression}.
 * @since 0.5.0
 */
export interface MultiplicativeExpressionSemantics extends ArithmeticExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The operator using the two values {@link this.leftOp leftOp} and {@link this.rightOp rightOp} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperMultiplicativeOperator;
}

/**
 * Semantics for AST Node {@link AdditiveExpression}.
 * @since 0.5.0
 */
export interface AdditiveExpressionSemantics extends ArithmeticExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The operator using the two values {@link this.leftOp leftOp} and {@link this.rightOp rightOp} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperAdditiveOperator;
}

/**
 * Semantics for a comparative expression, which compares two operands against each other using a specified
 * operator.
 * @since 0.9.0
 */
export interface ComparativeExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this comparative expression.
	 * @since 0.9.0
	 */
	operator: KipperComparativeOperator;
	/**
	 * The left expression (left-hand side) used in this comparative expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The right expression (right-hand side) used in this comparative expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link RelationalExpression}.
 * @since 0.5.0
 */
export interface RelationalExpressionSemantics extends ComparativeExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this relational expression.
	 * @since 0.9.0
	 */
	operator: KipperRelationalOperator;
	/**
	 * The first expression (left-hand side) used in this relational expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression (right-hand side) used in this relational expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link EqualityExpressionSemantics}.
 * @since 0.5.0
 */
export interface EqualityExpressionSemantics extends ComparativeExpressionSemantics {
	/**
	 * The operator used to compare the two expressions of this equality expression.
	 * @since 0.9.0
	 */
	operator: KipperEqualityOperator;
	/**
	 * The first expression (left-hand side) used in this equality expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression (right-hand side) used in this equality expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for logical expressions, which combine two expressions/conditions and evaluate based on the input to a
 * boolean value.
 * @since 0.9.0
 */
export interface LogicalExpressionSemantics extends ExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalAndOperator | KipperLogicalOrOperator;
	/**
	 * The first expression (left-hand side) used in this logical expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression (right-hand side) used in this logical expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link LogicalAndExpression}.
 * @since 0.5.0
 */
export interface LogicalAndExpressionSemantics extends LogicalExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical-and expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalAndOperator;
	/**
	 * The first expression (left-hand side) used in this logical-and expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression (right-hand side) used in this logical-and expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link LogicalOrExpression}.
 * @since 0.5.0
 */
export interface LogicalOrExpressionSemantics extends LogicalExpressionSemantics {
	/**
	 * The operator used to combine the two expressions of this logical-or expression.
	 * @since 0.9.0
	 */
	operator: KipperLogicalOrOperator;
	/**
	 * The first expression (left-hand side) used in this logical-or expression.
	 * @since 0.9.0
	 */
	leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The second expression (right-hand side) used in this logical-or expression.
	 * @since 0.9.0
	 */
	rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
}

/**
 * Semantics for AST Node {@link ConditionalExpression}.
 * @since 0.5.0
 */
export interface ConditionalExpressionSemantics extends ExpressionSemantics {}

/**
 * Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.5.0
 */
export interface AssignmentExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier expression that is being assigned to.
	 * @since 0.7.0
	 */
	identifier: string;
	/**
	 * The identifier AST node context that the {@link AssignmentExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	identifierCtx: IdentifierPrimaryExpression;
	/**
	 * The reference that is being assigned to.
	 * @since 0.10.0
	 */
	assignTarget: Reference<KipperReferenceable>;
	/**
	 * The assigned value to this variable.
	 * @since 0.7.0
	 */
	value: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The operator of the assignment expression.
	 * @since 0.10.0
	 */
	operator: KipperAssignOperator;
}
