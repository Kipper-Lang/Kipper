/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import type { BuiltInFunctionArgument } from "../../runtime-built-ins";
import type { KipperProgramContext } from "../../program-ctx";
import type { ExpressionSemantics, ParameterDeclarationSemantics, UnaryExpressionSemantics } from "../semantic-data";
import type { ExpressionTypeSemantics } from "../type-data";
import type {
	AssignmentExpression,
	Expression,
	RelationalExpression,
	ReturnStatement,
	UnaryExpression,
} from "../language";
import { ParameterDeclaration } from "../language";
import { KipperSemanticsAsserter } from "../semantics-asserter";
import { ScopeDeclaration, ScopeVariableDeclaration, ScopeParameterDeclaration } from "../../scope-declaration";
import {
	KipperArithmeticOperator,
	KipperFunction,
	kipperPlusOperator,
	KipperRef,
	kipperStrType,
	kipperSupportedConversions,
	KipperType,
	kipperTypes,
} from "../const";
import {
	ArgumentTypeError,
	ArithmeticOperationTypeError,
	AssignmentTypeError,
	ExpressionNotCallableError,
	InvalidAmountOfArgumentsError,
	InvalidConversionTypeError,
	InvalidRelationalComparisonTypeError,
	InvalidUnaryExpressionTypeError,
	KipperNotImplementedError,
	ReadOnlyTypeError,
	TypeError,
	UnknownTypeError,
} from "../../../errors";

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
	 * Checks whether the passed types are matching.
	 * @param type1 The first type that is given.
	 * @param type2 The second type that is given.
	 * @returns True if the types are matching, otherwise false.
	 */
	public checkMatchingTypes(type1: KipperType, type2: KipperType): boolean {
		if (type1 !== type2) {
			// 'void' is compatible with 'undefined'
			let interchangeableTypes = ["void", "undefined"];

			// Ensure that 'true' is still returned when type1 and type2 are compatible
			return interchangeableTypes.includes(type1) && interchangeableTypes.includes(type2);
		}
		return true;
	}

	/**
	 * Asserts that the passed {@link ref} is callable.
	 * @param ref The reference to check.
	 * @since 0.10.0
	 */
	public referenceCallable(ref: KipperRef): void {
		if (ref instanceof ScopeDeclaration) {
			if (!ref.isCallable) {
				throw this.assertError(new ExpressionNotCallableError(ref.type));
			} else if (ref instanceof ScopeParameterDeclaration || ref instanceof ScopeVariableDeclaration) {
				throw this.notImplementedError(
					new KipperNotImplementedError("Function calls from variable references are not implemented yet."),
				);
			}
		}
	}

	/**
	 * Asserts that the passed expression is valid and the assigned value is compatible with the identifier.
	 * @param assignmentExp The assignment expression to check.
	 * @since 0.7.0
	 */
	public validAssignment(assignmentExp: AssignmentExpression): void {
		const semanticData = assignmentExp.getSemanticData();
		const leftExpTypeData = semanticData.identifierCtx.getTypeSemanticData();
		const rightExpTypeData = semanticData.value.getTypeSemanticData();

		// Ensure that the types are matching
		if (!this.checkMatchingTypes(rightExpTypeData.evaluatedType, leftExpTypeData.evaluatedType)) {
			throw this.assertError(new AssignmentTypeError(leftExpTypeData.evaluatedType, rightExpTypeData.evaluatedType));
		}

		// Ensure that all arithmetic assignment operators except '+=' are only used on numbers
		if (semanticData.operator !== "=" && rightExpTypeData.evaluatedType !== "num") {
			if (!(semanticData.operator === "+=" && rightExpTypeData.evaluatedType === "str")) {
				throw this.assertError(new ArithmeticOperationTypeError());
			}
		}

		// Ensure that the left-hand side is not read-only
		if (semanticData.ref && "storageType" in semanticData.ref && semanticData.ref.storageType === "const") {
			throw this.assertError(new ReadOnlyTypeError(semanticData.ref.identifier));
		}
	}

	/**
	 * Asserts that this variable definition is valid and the assigned value is compatible with the identifier.
	 * @param scopeEntry The scope entry/variable being assigned to.
	 * @param value The right expression/value of the assignment.
	 * @since 0.7.0
	 */
	public validVariableDefinition(
		scopeEntry: ScopeVariableDeclaration,
		value: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
	): void {
		const leftExpType = scopeEntry.type;
		const rightExpType = value.getTypeSemanticData().evaluatedType;

		// Ensure the value of the definition match the definition type
		if (!this.checkMatchingTypes(leftExpType, rightExpType)) {
			throw this.assertError(new TypeError(`Type '${rightExpType}' is not assignable to type '${leftExpType}'.`));
		}
	}

	/**
	 * Asserts that the argument type matches the type of the argument value passed.
	 * @param arg The parameter that the value was passed to.
	 * @param receivedType The type that was received.
	 * @example
	 * call print("x"); // <-- Parameter type 'str' must match type of argument "x"
	 * @throws {ArgumentTypeError} If the given argument type does not match the parameter type.
	 * @since 0.7.0
	 */
	public validArgumentValue(arg: ParameterDeclaration | BuiltInFunctionArgument, receivedType: KipperType): void {
		let semanticData: ParameterDeclarationSemantics | BuiltInFunctionArgument;
		let valueType: KipperType;

		// Get the proper semantic data and value type
		if (arg instanceof ParameterDeclaration) {
			semanticData = arg.getSemanticData();
			valueType = arg.getTypeSemanticData().valueType;
		} else {
			semanticData = arg;
			valueType = arg.valueType;
		}

		if (!this.checkMatchingTypes(valueType, receivedType)) {
			throw this.assertError(new ArgumentTypeError(semanticData.identifier, valueType, receivedType));
		}
	}

	/**
	 * Asserts that the passed function arguments are valid.
	 * @param func The function that is called.
	 * @param args The arguments for the call expression.
	 * @throws {InvalidAmountOfArgumentsError} If the amount of arguments is invalid e.g. too many or too few.
	 * @throws {ArgumentTypeError} If any given argument type does not match the required parameter type.
	 * @since 0.7.0
	 */
	public validFunctionCallArguments(
		func: KipperFunction,
		args: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>>,
	): void {
		if (func.params.length != args.length) {
			throw this.assertError(new InvalidAmountOfArgumentsError(func.identifier, func.params.length, args.length));
		}

		// Iterate through both arrays at the same type to verify each type is valid
		args.forEach((arg: Expression<ExpressionSemantics, ExpressionTypeSemantics>, index) => {
			const typeData = arg.getTypeSemanticData();

			this.setTracebackData({ ctx: arg });
			this.validArgumentValue(func.params[index], typeData.evaluatedType);
		});
	}

	/**
	 * Asserts that the passed relational expression is valid.
	 * @param exp The expression to check.
	 * @since 0.9.0
	 */
	public validRelationalExpression(exp: RelationalExpression): void {
		const semanticData = exp.getSemanticData();
		const leftOpTypeData = semanticData.leftOp.getTypeSemanticData();
		const rightOpTypeData = semanticData.rightOp.getTypeSemanticData();

		// Ensure that both expressions are of type 'num'
		if (leftOpTypeData.evaluatedType !== "num" || rightOpTypeData.evaluatedType !== "num") {
			throw this.assertError(
				new InvalidRelationalComparisonTypeError(leftOpTypeData.evaluatedType, rightOpTypeData.evaluatedType),
			);
		}
	}

	/**
	 * Asserts that the passed unary expression is valid.
	 * @param operand The expression to check.
	 * @since 0.9.0
	 */
	public validUnaryExpression(operand: UnaryExpression<UnaryExpressionSemantics, ExpressionTypeSemantics>): void {
		const semanticData = operand.getSemanticData();
		const expTypeSemantics = semanticData.operand.getTypeSemanticData();

		// Ensure that the operator '+', '-', '++' and '--' are only used on numbers
		if (semanticData.operator !== "!" && expTypeSemantics.evaluatedType !== "num") {
			throw this.assertError(
				new InvalidUnaryExpressionTypeError(semanticData.operator, expTypeSemantics.evaluatedType),
			);
		}
	}

	/**
	 * Asserts that the passed type allows the arithmetic operation.
	 * @param leftOp The left operand expression.
	 * @param rightOp The right operand expression.
	 * @param op The arithmetic operation that is performed.
	 * @since 0.9.0
	 */
	public validArithmeticExpression(
		leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
		rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
		op: KipperArithmeticOperator,
	): void {
		const leftOpType = leftOp.getTypeSemanticData().evaluatedType;
		const rightOpType = rightOp.getTypeSemanticData().evaluatedType;

		// Numbers may use all arithmetic operators
		if (leftOpType !== "num" || rightOpType !== "num") {
			// Strings can use '+' to concat strings
			if (op === kipperPlusOperator && leftOpType == kipperStrType && rightOpType == kipperStrType) {
				return;
			}

			// If types are not matching, not numeric, and they are not of string-like types, throw an error
			throw this.assertError(new ArithmeticOperationTypeError(leftOpType, rightOpType));
		}
	}

	/**
	 * Asserts that the type conversion for the {@link operand} is valid.
	 * @param operand The expression to convert.
	 * @param type The type to convert to.
	 * @since 0.8.0
	 */
	public validConversion(operand: Expression<ExpressionSemantics, ExpressionTypeSemantics>, type: KipperType): void {
		const originalType: KipperType = operand.getTypeSemanticData().evaluatedType;
		const viableConversion = (() => {
			// Check whether a supported pair of types exist.
			return kipperSupportedConversions.find((types) => types[0] === originalType && types[1] === type) !== undefined;
		})();

		// In case that the type are not the same and no conversion is possible, throw an error!
		if (!(originalType === type) && !viableConversion) {
			throw this.assertError(new InvalidConversionTypeError(originalType, type));
		}
	}

	/**
	 * Asserts that the passed return statement is valid.
	 * @param returnStatement The return statement to check.
	 * @since 0.10.0
	 */
	public validReturnStatement(returnStatement: ReturnStatement): void {
		const returnValueType = returnStatement.getSemanticData().returnValue?.getTypeSemanticData().evaluatedType;
		const functionSemanticData = returnStatement.getSemanticData().function.getSemanticData();

		if (returnValueType && !this.checkMatchingTypes(returnValueType, <KipperType>functionSemanticData.returnType)) {
			throw this.assertError(
				new TypeError(`Type '${returnValueType}' is not assignable to type '${functionSemanticData.returnType}'.`),
			);
		}
	}
}
