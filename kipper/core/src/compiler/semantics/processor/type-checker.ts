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
import { ScopeDeclaration, ScopeParameterDeclaration, ScopeVariableDeclaration } from "../../symbol-table";
import {
	KipperArithmeticOperator,
	KipperCompilableType,
	kipperCompilableTypes,
	KipperFunction,
	kipperPlusOperator,
	KipperReferenceable,
	kipperStrType,
	kipperSupportedConversions,
	KipperType,
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
import { CheckedType, UncheckedType, UndefinedCustomType } from "../type";

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
	 * Gets the type that should be used for the type checking from the provided {@link CheckedType}.
	 *
	 * This function is intended to check for {@link UndefinedCustomType}, which is a special type that is created
	 * during error recovery to indicate a type is invalid/undefined. This type should be always ignored and as such
	 * this function will return undefined, so that they type checking is skipped. (This is fine, since the compiler
	 * should have already thrown an error at the creation of the {@link UndefinedCustomType}.)
	 * @param type The {@link CheckedType} instance.
	 */
	public static getTypeForAnalysis(type: CheckedType): KipperCompilableType | undefined {
		if (type.isCompilable) {
			return <KipperCompilableType>type.kipperType;
		}
		return undefined;
	}

	/**
	 * Asserts that the passed type identifier exists.
	 * @param type The type to check.
	 * @since 0.7.0
	 */
	public typeExists(type: string): void {
		if (kipperCompilableTypes.find((val) => val === type) === undefined) {
			throw this.assertError(new UnknownTypeError(type));
		}
	}

	/**
	 * Creates a new {@link CheckedType} instance based on the passed {@link KipperType}.
	 *
	 * If the type is invalid, the function will still return a {@link CheckedType}, but the field
	 * {@link CheckedType.isCompilable} will be false and the instance WILL NOT be usable for a compilation.
	 * @param type The unchecked type to analyse.
	 */
	public getCheckedType(type: UncheckedType): CheckedType {
		try {
			// Ensure the type exists
			this.typeExists(type.identifier);

			return CheckedType.fromCompilableType(<KipperCompilableType>type.identifier);
		} catch (e) {
			if (this.programCtx.compileConfig.recover && !this.programCtx.compileConfig.abortOnFirstError) {
				// Recover from the error by wrapping the undefined type
				return CheckedType.fromKipperType(new UndefinedCustomType(type.identifier));
			}

			// If error recovery is not enabled, we shouldn't bother trying to handle invalid types
			throw e;
		}
	}

	/**
	 * Checks whether the passed types are matching.
	 * @param type1 The first type that is given.
	 * @param type2 The second type that is given.
	 * @returns True if the types are matching, otherwise false.
	 * @since 0.10.0
	 */
	public checkMatchingTypes(type1: KipperCompilableType, type2: KipperCompilableType): boolean {
		if (type1 !== type2) {
			// 'void' is compatible with 'undefined'
			let interchangeableTypes = ["void", "undefined"];

			// Ensure that 'true' is still returned when type1 and type2 are compatible
			return interchangeableTypes.includes(type1) && interchangeableTypes.includes(type2);
		}
		return true;
	}

	/**
	 * Asserts that the passed {@link ref} is callable. This function will only check {@link ScopeDeclaration} instances,
	 * since {@link BuiltInFunction built-in functions} will always be callable.
	 * @param ref The reference to check.
	 * @since 0.10.0
	 */
	public refTargetCallable(ref: KipperReferenceable): void {
		if (ref instanceof ScopeDeclaration) {
			const refType = KipperTypeChecker.getTypeForAnalysis(ref.type);
			if (refType === undefined) {
				return; // Ignore undefined types - Skip type checking
			}

			// If the reference is not callable, throw an error
			if (!ref.isCallable) {
				throw this.assertError(new ExpressionNotCallableError(refType));
			} else if (ref instanceof ScopeParameterDeclaration || ref instanceof ScopeVariableDeclaration) {
				// Calling a function stored in a variable or parameter is not implemented yet
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

		// Ensure that the left-hand side is not read-only
		if (
			"storageType" in semanticData.assignTarget.refTarget &&
			semanticData.assignTarget.refTarget.storageType === "const"
		) {
			throw this.assertError(new ReadOnlyTypeError(semanticData.assignTarget.refTarget.identifier));
		}

		// Get the compile-types for the left and right hand side
		const varType = KipperTypeChecker.getTypeForAnalysis(leftExpTypeData.evaluatedType);
		const valueType = KipperTypeChecker.getTypeForAnalysis(rightExpTypeData.evaluatedType);

		// If either one of the types is undefined, skip type checking
		if (varType === undefined || valueType === undefined) {
			return;
		}

		// Ensure that the types are matching - if not, throw an error
		if (!this.checkMatchingTypes(varType, valueType)) {
			throw this.assertError(new AssignmentTypeError(varType, valueType));
		}

		// Ensure that all arithmetic assignment operators except '+=' are only used on numbers
		if (semanticData.operator !== "=" && valueType !== "num") {
			// Strings may use the '+=' operator to concatenate (e.g. 'str += str')
			if (!(semanticData.operator === "+=" && valueType === "str")) {
				throw this.assertError(new ArithmeticOperationTypeError());
			}
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
		// Get the compile-types for the left and right hand side
		const leftExpType = KipperTypeChecker.getTypeForAnalysis(scopeEntry.type);
		const rightExpType = KipperTypeChecker.getTypeForAnalysis(value.getTypeSemanticData().evaluatedType);

		// If either one of the types is undefined, skip type checking
		if (leftExpType === undefined || rightExpType === undefined) {
			return;
		}

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
	public validArgumentValue(arg: ParameterDeclaration | BuiltInFunctionArgument, receivedType: CheckedType): void {
		let semanticData: ParameterDeclarationSemantics | BuiltInFunctionArgument;
		let valueType: CheckedType;

		// Get the proper semantic data and value type
		if (arg instanceof ParameterDeclaration) {
			semanticData = arg.getSemanticData();
			valueType = arg.getTypeSemanticData().valueType;
		} else {
			semanticData = arg;
			valueType = CheckedType.fromCompilableType(arg.valueType);
		}

		// Get the compile-types for the parameter and argument (value provided)
		const receivedCompileType = KipperTypeChecker.getTypeForAnalysis(receivedType);
		const valueCompileType = KipperTypeChecker.getTypeForAnalysis(valueType);

		// If either one of the types is undefined, skip type checking
		if (receivedCompileType === undefined || valueCompileType === undefined) {
			return;
		}

		if (!this.checkMatchingTypes(valueCompileType, receivedCompileType)) {
			throw this.assertError(new ArgumentTypeError(semanticData.identifier, valueCompileType, receivedCompileType));
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

		// Get the compile-types for the operands
		const leftOpType = KipperTypeChecker.getTypeForAnalysis(leftOpTypeData.evaluatedType);
		const rightOpType = KipperTypeChecker.getTypeForAnalysis(rightOpTypeData.evaluatedType);

		// If either one of the types is undefined, skip type checking
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

		// Ensure that both expressions are of type 'num'
		if (leftOpType !== "num" || rightOpType !== "num") {
			throw this.assertError(new InvalidRelationalComparisonTypeError(leftOpType, rightOpType));
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

		// Get the compile-types type of the expression
		const expType = KipperTypeChecker.getTypeForAnalysis(expTypeSemantics.evaluatedType);

		// If the expression type is undefined, skip type checking
		if (expType === undefined) {
			return;
		}

		// Ensure that the operator '+', '-', '++' and '--' are only used on numbers
		if (semanticData.operator !== "!" && expType !== "num") {
			throw this.assertError(new InvalidUnaryExpressionTypeError(semanticData.operator, expType));
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
		// Get the compile-types for both operands
		const leftOpType = KipperTypeChecker.getTypeForAnalysis(leftOp.getTypeSemanticData().evaluatedType);
		const rightOpType = KipperTypeChecker.getTypeForAnalysis(rightOp.getTypeSemanticData().evaluatedType);

		// If either one of the types is undefined, skip type checking
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

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
	 * @param targetType The type to convert to.
	 * @since 0.8.0
	 */
	public validConversion(
		operand: Expression<ExpressionSemantics, ExpressionTypeSemantics>,
		targetType: CheckedType,
	): void {
		// Get the compile-types for the specified conversion types
		const originalCompileType = KipperTypeChecker.getTypeForAnalysis(operand.getTypeSemanticData().evaluatedType);
		const targetCompileType = KipperTypeChecker.getTypeForAnalysis(targetType);

		// If either one of the types is undefined, skip type checking
		if (originalCompileType === undefined || targetCompileType === undefined) {
			return;
		}

		// Check whether a supported pair of types exist.
		const viableConversion =
			kipperSupportedConversions.find((types) => types[0] === originalCompileType && types[1] === targetType) !==
			undefined;

		// In case that the targetType are not the same and no conversion is possible, throw an error!
		if (originalCompileType !== targetCompileType && !viableConversion) {
			throw this.assertError(new InvalidConversionTypeError(originalCompileType, targetCompileType));
		}
	}

	/**
	 * Asserts that the passed return statement is valid.
	 * @param returnStatement The return statement to check.
	 * @since 0.10.0
	 */
	public validReturnStatement(returnStatement: ReturnStatement): void {
		const semanticData = returnStatement.getSemanticData();

		// If the return statement has no return value, then the value is automatically 'void'
		const statementValueType = KipperTypeChecker.getTypeForAnalysis(
			semanticData.returnValue?.getTypeSemanticData().evaluatedType ?? CheckedType.fromCompilableType("void"),
		);
		const functionReturnType = KipperTypeChecker.getTypeForAnalysis(
			// TODO! DON'T DO THIS. THIS IS PUTTING TYPE CHECKING OF A PARENT INTO A CHILD
			this.getCheckedType(semanticData.function.getSemanticData().returnType),
		);

		// If either one of the types is undefined, skip type checking
		if (statementValueType === undefined || functionReturnType === undefined) {
			return;
		}

		// We need to check whether the types are matching, but *not* if the function return type is valid, since that
		// will be done later by the function itself during the type checking.
		if (statementValueType && !this.checkMatchingTypes(statementValueType, functionReturnType)) {
			throw this.assertError(
				new TypeError(`Type '${statementValueType}' is not assignable to type '${functionReturnType}'.`),
			);
		}
	}
}
