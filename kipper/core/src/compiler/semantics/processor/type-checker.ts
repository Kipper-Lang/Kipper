/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import { KipperSemanticsAsserter } from "../semantics-asserter";
import {
	Expression,
	ExpressionSemantics, ExpressionTypeSemantics,
	IdentifierPrimaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	UnaryExpression,
	UnaryExpressionSemantics,
} from "../language";
import {
	KipperArithmeticOperator,
	type KipperFunction,
	kipperPlusOperator,
	kipperReturnTypes,
	kipperStrLikeTypes,
	type KipperType,
	kipperTypes,
} from "../const";
import {
	InvalidArgumentTypeError,
	InvalidArithmeticOperationTypeError,
	InvalidAssignmentTypeError,
	InvalidRelationalComparisonTypeError,
	InvalidReturnTypeError,
	InvalidUnaryExpressionTypeError,
	ReadOnlyAssignmentTypeError,
	TypeError,
	UnknownTypeError,
} from "../../../errors";
import type { ScopeVariableDeclaration } from "../../scope-declaration";
import type { BuiltInFunctionArgument } from "../../runtime-built-ins";
import type { KipperProgramContext } from "../../program-ctx";

/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @since 0.7.0
 */
export class KipperTypeChecker extends KipperSemanticsAsserter {
	constructor(programCtx: KipperProgramContext) {
		super(programCtx);
	}

	/**
	 * Asserts that the passed type identifier exists.
	 * @param type The type to check.
	 * @since 0.7.0
	 */
	public typeExists(type: string): void {
		if (kipperTypes.find((val) => val === type) === undefined) {
			throw this.assertError(new UnknownTypeError(type));
		}
	}

	/**
	 * Asserts that the argument type is valid.
	 * @param type
	 * @since 0.7.0
	 */
	public validReturnType(type: KipperType): void {
		// If the type is not in the array of valid return types, throw an error
		if (!kipperReturnTypes.find((t) => t === type)) {
			throw this.assertError(new InvalidReturnTypeError(type));
		}
	}

	/**
	 * Asserts that the passed expression is valid and the assigned value is compatible with the identifier.
	 * @param leftExp The left-hand side of the assignment.
	 * @param rightExp The right-hand side of the assignment.
	 * @since 0.7.0
	 */
	public validAssignment(leftExp: IdentifierPrimaryExpression, rightExp: Expression<any, any>): void {
		const leftExpSemantics = leftExp.getSemanticData();
		const rightExpSemantics = rightExp.getSemanticData();

		// Ensure that the types are matching
		if (rightExpSemantics.evaluatedType !== leftExpSemantics.evaluatedType) {
			throw this.assertError(
				new InvalidAssignmentTypeError(rightExpSemantics.evaluatedType, leftExpSemantics.evaluatedType),
			);
		}

		// Get the storage type of the variable
		const reference = this.getDeclaration(leftExpSemantics.identifier);
		if (reference && "storageType" in reference && reference.storageType === "const") {
			throw this.assertError(new ReadOnlyAssignmentTypeError(reference.identifier));
		}
	}

	/**
	 * Asserts that this variable definition is valid and the assigned value is compatible with the identifier.
	 * @param scopeEntry The scope entry/variable being assigned to.
	 * @param rightExp The right expression/value of the assignment.
	 * @since 0.7.0
	 */
	public validVariableDefinition(scopeEntry: ScopeVariableDeclaration, rightExp: Expression<any, any>): void {
		const leftExpType = scopeEntry.type;
		const rightExpType = rightExp.getSemanticData().evaluatedType;
		if (leftExpType !== rightExpType) {
			throw this.assertError(new TypeError(`Type '${rightExpType}' is not assignable to type '${leftExpType}'.`));
		}
	}

	/**
	 * Checks whether the argument type matches the type of the argument value passed.
	 *
	 * @param arg The parameter that the value was passed to.
	 * @param receivedType The type that was received.
	 * @example
	 * call print("x"); // <-- Parameter type 'str' must match type of argument "x"
	 * @since 0.7.0
	 */
	public argumentTypesMatch(arg: ParameterDeclaration | BuiltInFunctionArgument, receivedType: KipperType): void {
		const semanticData = arg instanceof ParameterDeclaration ? arg.getSemanticData() : arg;

		if (semanticData.type !== receivedType) {
			throw this.assertError(new InvalidArgumentTypeError(semanticData.identifier, semanticData.type, receivedType));
		}
	}

	/**
	 * Asserts that the passed function arguments are valid.
	 * @param func The function that is called.
	 * @param args The arguments for the call expression.
	 * @since 0.7.0
	 */
	public validFunctionCallArguments(func: KipperFunction, args: Array<Expression<any, any>>): void {
		// Iterate through both arrays at the same type to verify each type is valid
		args.forEach((arg: Expression<ExpressionSemantics, ExpressionTypeSemantics>, index) => {
			const semanticData = arg.getSemanticData();
			this.argumentTypesMatch(func.args[index], semanticData.evaluatedType);
		});
	}

	/**
	 * Asserts that the passed relational expression is valid.
	 * @param exp The expression to check.
	 * @since 0.9.0
	 */
	public validRelationalExpression(exp: RelationalExpression): void {
		const semanticData = exp.getSemanticData();
		const exp1Semantics = semanticData.exp1.getSemanticData();
		const exp2Semantics = semanticData.exp2.getSemanticData();

		// Ensure that both expressions are of type 'num'
		if (exp1Semantics.evaluatedType !== "num" || exp2Semantics.evaluatedType !== "num") {
			throw this.assertError(
				new InvalidRelationalComparisonTypeError(exp1Semantics.evaluatedType, exp2Semantics.evaluatedType),
			);
		}
	}

	/**
	 * Asserts that the passed unary expression is valid.
	 * @param exp The expression to check.
	 * @since 0.9.0
	 */
	public validUnaryExpression(exp: UnaryExpression<UnaryExpressionSemantics, ExpressionTypeSemantics>): void {
		const semanticData = exp.getSemanticData();
		const expSemantics = semanticData.operand.getSemanticData();

		// Ensure that the operator '+' and '-' are only used on numbers
		if (semanticData.operator === "+" || semanticData.operator === "-") {
			if (expSemantics.evaluatedType !== "num") {
				throw this.assertError(new InvalidUnaryExpressionTypeError(expSemantics.operator, semanticData.evaluatedType));
			}
		}
	}

	/**
	 * Asserts that the passed type allows the arithmetic operation.
	 * @param exp1 The first expression.
	 * @param exp2 The second expression.
	 * @param op The arithmetic operation that is performed.
	 * @since 0.9.0
	 */
	public validArithmeticExpression(
		exp1: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
		exp2: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
		op: KipperArithmeticOperator,
	): void {
		const exp1Type = exp1.getSemanticData().evaluatedType;
		const exp2Type = exp2.getSemanticData().evaluatedType;
		if (exp1Type !== exp2Type || exp1Type !== "num" || exp2Type !== "num") {
			// String-like types can use '+' to concat strings
			if (
				op === kipperPlusOperator &&
				kipperStrLikeTypes.find((t: KipperType) => t === exp1Type) &&
				kipperStrLikeTypes.find((t: KipperType) => t === exp2Type)
			) {
				return;
			}

			// If types are not matching, not numeric, and they are not of string-like types, throw an error
			throw this.assertError(new InvalidArithmeticOperationTypeError(exp1Type, exp2Type));
		}
	}
}
