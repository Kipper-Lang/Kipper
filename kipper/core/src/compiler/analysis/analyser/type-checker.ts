/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @since 0.7.0
 */
import type { BuiltInFunctionArgument } from "../../runtime-built-ins";
import type { KipperProgramContext } from "../../program-ctx";
import type {
	IncrementOrDecrementPostfixExpressionSemantics,
	ParameterDeclarationSemantics,
	UnaryExpressionSemantics,
	AssignmentExpression,
	FunctionDeclaration,
	IncrementOrDecrementPostfixExpression,
	MemberAccessExpression,
	RelationalExpression,
	Statement,
	UnaryExpression,
	LambdaExpression,
} from "../../ast";
import {
	CompoundStatement,
	IdentifierPrimaryExpression,
	IfStatement,
	ParameterDeclaration,
	ReturnStatement,
	TangledPrimaryExpression,
	Expression,
} from "../../ast";
import { KipperSemanticsAsserter } from "./err-handler";
import { ScopeDeclaration, ScopeParameterDeclaration, ScopeVariableDeclaration } from "../symbol-table";
import type {
	KipperArithmeticOperator,
	KipperBitwiseOperator,
	KipperCompilableType,
	KipperReferenceable,
	KipperReferenceableFunction,
} from "../../const";
import {
	kipperCompilableTypes,
	kipperIncrementOrDecrementOperators,
	kipperMultiplicativeOperators,
	kipperPlusOperator,
	kipperStrType,
	kipperSupportedConversions,
} from "../../const";
import {
	ArgumentTypeError,
	ArithmeticOperationTypeError,
	AssignmentTypeError,
	BitwiseOperationTypeError,
	ExpressionNotCallableError,
	IncompleteReturnsInCodePathsError,
	InvalidAmountOfArgumentsError,
	InvalidConversionTypeError,
	InvalidKeyTypeError,
	InvalidRelationalComparisonTypeError,
	InvalidUnaryExpressionOperandError,
	InvalidUnaryExpressionTypeError,
	KipperError,
	KipperNotImplementedError,
	ReadOnlyWriteTypeError,
	UnknownTypeError,
	ValueNotIndexableTypeError,
} from "../../../errors";
import type { UncheckedType } from "../type";
import { CheckedType, UndefinedCustomType } from "../type";
import type { Reference } from "../reference";

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
			// If the error is not a KipperError, rethrow it (since it is not a type error, and we don't know what happened)
			if (!(e instanceof KipperError)) {
				throw e;
			}

			if (this.programCtx.compileConfig.recover && !this.programCtx.compileConfig.abortOnFirstError) {
				// Add the error, but still recover (This is so that the compiler doesn't simply proceed without
				// throwing any errors, which would be VERY bad.)
				this.programCtx.reportError(e);

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
	 * @throws {ExpressionNotCallableError} If the passed {@link ref} is not callable.
	 * @since 0.10.0
	 */
	public refTargetCallable(ref: Expression | Reference): void {
		if ("refTarget" in ref && ref.refTarget instanceof ScopeDeclaration) {
			const target = ref.refTarget;
			const targetType = KipperTypeChecker.getTypeForAnalysis(target.type);
			if (targetType === undefined) {
				return; // Ignore undefined types - Skip type checking (the type is invalid anyway)
			}

			// If the reference is not callable, throw an error
			if (!target.isCallable) {
				throw this.assertError(new ExpressionNotCallableError(targetType));
			} else if (target instanceof ScopeParameterDeclaration || target instanceof ScopeVariableDeclaration) {
				// Calling a function stored in a variable or parameter is not implemented yet
				throw this.notImplementedError(
					new KipperNotImplementedError("Function calls from variable references are not implemented yet."),
				);
			}
		} else if (ref instanceof Expression) {
			throw this.notImplementedError(
				new KipperNotImplementedError("Function calls from expressions are not implemented yet."),
			);
		}
	}

	/**
	 * Asserts that the passed expression is valid and the assigned value is compatible with the identifier.
	 * @param assignmentExp The assignment expression to check.
	 * @throws {ArithmeticOperationTypeError} In case a arithmetic assignment operation is used with an invalid type.
	 * @throws {AssignmentTypeError} If the value type can not be assigned to the identifier type.
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
			throw this.assertError(new ReadOnlyWriteTypeError(semanticData.assignTarget.refTarget.identifier));
		}

		// Get the compile-types for the left and right hand side
		const varType = KipperTypeChecker.getTypeForAnalysis(leftExpTypeData.evaluatedType);
		const valueType = KipperTypeChecker.getTypeForAnalysis(rightExpTypeData.evaluatedType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
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
	 * @throws {AssignmentTypeError} If the assignment value type is not compatible with the definition type.
	 * @since 0.7.0
	 */
	public validVariableDefinition(scopeEntry: ScopeVariableDeclaration, value: Expression): void {
		// Get the compile-types for the left and right hand side
		const leftExpType = KipperTypeChecker.getTypeForAnalysis(scopeEntry.type);
		const rightExpType = KipperTypeChecker.getTypeForAnalysis(value.getTypeSemanticData().evaluatedType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (leftExpType === undefined || rightExpType === undefined) {
			return;
		}

		// Ensure the value of the definition match the definition type
		if (!this.checkMatchingTypes(leftExpType, rightExpType)) {
			throw this.assertError(new AssignmentTypeError(rightExpType, leftExpType));
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
		let argType: CheckedType;

		// Get the proper semantic data and value type
		if (arg instanceof ParameterDeclaration) {
			semanticData = arg.getSemanticData();
			argType = arg.getTypeSemanticData().valueType;
		} else {
			semanticData = arg;
			argType = CheckedType.fromCompilableType(arg.valueType);
		}

		// Get the compile-types for the parameter and argument (value provided)
		const receivedCompileType = KipperTypeChecker.getTypeForAnalysis(receivedType);
		const argCompileType = KipperTypeChecker.getTypeForAnalysis(argType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (receivedCompileType === undefined || argCompileType === undefined) {
			return;
		}

		if (!this.checkMatchingTypes(argCompileType, receivedCompileType)) {
			throw this.assertError(new ArgumentTypeError(semanticData.identifier, argCompileType, receivedCompileType));
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
	public validFunctionCallArguments(func: KipperReferenceableFunction, args: Array<Expression>): void {
		if (func.params.length != args.length) {
			throw this.assertError(new InvalidAmountOfArgumentsError(func.identifier, func.params.length, args.length));
		}

		// Iterate through both arrays at the same type to verify each type is valid
		args.forEach((arg: Expression, index) => {
			const typeData = arg.getTypeSemanticData();

			this.setTracebackData({ ctx: arg });
			this.validArgumentValue(func.params[index], typeData.evaluatedType);
		});
	}

	/**
	 * Asserts that the passed relational expression is valid.
	 * @param exp The relational expression to check.
	 * @throws {InvalidRelationalComparisonTypeError} If the value types can not be compared.
	 * @since 0.9.0
	 */
	public validRelationalExpression(exp: RelationalExpression): void {
		const semanticData = exp.getSemanticData();
		const leftOpTypeData = semanticData.leftOp.getTypeSemanticData();
		const rightOpTypeData = semanticData.rightOp.getTypeSemanticData();

		// Get the compile-types for the operands
		const leftOpType = KipperTypeChecker.getTypeForAnalysis(leftOpTypeData.evaluatedType);
		const rightOpType = KipperTypeChecker.getTypeForAnalysis(rightOpTypeData.evaluatedType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

		// Ensure that both expressions are of type 'num'
		if (leftOpType !== "num" || rightOpType !== "num") {
			throw this.assertError(new InvalidRelationalComparisonTypeError(leftOpType, rightOpType));
		}
	}

	/**
	 * Asserts that the passed unary expression is valid by checking its {@link operand.semanticData.operand operand} and
	 * {@link operand.semanticData.operator operator}.
	 * @param operand The unary expression to check. (Also includes {@link IncrementOrDecrementPostfixExpression}, since
	 * even if it's a postfix expression, it's still a unary expression)
	 * @throws {InvalidUnaryExpressionOperandError} If the operand is not a valid operand for the operator.
	 * @since 0.9.0
	 */
	public validUnaryExpression(operand: UnaryExpression | IncrementOrDecrementPostfixExpression): void {
		const semanticData = <UnaryExpressionSemantics | IncrementOrDecrementPostfixExpressionSemantics>(
			operand.getSemanticData()
		);
		const expTypeSemantics = semanticData.operand.getTypeSemanticData();

		// Get the compile-types type of the expression
		const expType = KipperTypeChecker.getTypeForAnalysis(expTypeSemantics.evaluatedType);

		// If the expression type is undefined, skip type checking (the type is invalid anyway)
		if (expType === undefined) {
			return;
		}

		// Ensure that the operator '+', '-', '++' and '--' are only used on numbers
		if (semanticData.operator !== "!" && expType !== "num") {
			throw this.assertError(new InvalidUnaryExpressionTypeError(semanticData.operator, expType));
		}

		// Ensure that the operand of an '++' and '--' modifier expression is a reference
		let isReference = semanticData.operand instanceof IdentifierPrimaryExpression;
		if ((<Array<string>>kipperIncrementOrDecrementOperators).includes(semanticData.operator) && !isReference) {
			// Edge-case: If the operand is a tangled expression, it should still work if the child is an identifier
			let currExp = semanticData.operand;
			while (currExp instanceof TangledPrimaryExpression) {
				// If the child is an identifier it's valid, otherwise continue to the next child (if it's not a tangled
				// expression it will naturally abort the loop and continue to the error)
				if (currExp.getSemanticData().childExp instanceof IdentifierPrimaryExpression) {
					return;
				}

				currExp = currExp.getSemanticData().childExp;
			}

			throw this.assertError(new InvalidUnaryExpressionOperandError());
		}
	}

	/**
	 * Asserts that the passed type allows the arithmetic operation.
	 * @param leftOp The left validBracketNotationKeyoperand expression.
	 * @param rightOp The right operand expression.
	 * @param op The arithmetic operation that is performed.
	 * @throws {ArithmeticOperationTypeError} If the type of the left or right operand is not a number, and the operation
	 * is not a concatenation of strings.
	 * @since 0.9.0
	 */
	public validArithmeticExpression(leftOp: Expression, rightOp: Expression, op: KipperArithmeticOperator): void {
		// Get the compile-types for both operands
		const leftOpType = KipperTypeChecker.getTypeForAnalysis(leftOp.getTypeSemanticData().evaluatedType);
		const rightOpType = KipperTypeChecker.getTypeForAnalysis(rightOp.getTypeSemanticData().evaluatedType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

		// Numbers may use all arithmetic operators
		if (leftOpType !== "num" || rightOpType !== "num") {
			// Strings can use '+' to concat strings
			if (op === kipperPlusOperator && leftOpType == kipperStrType && rightOpType == kipperStrType) {
				return;
			}

			// Strings can use * to repeat a string n times
			if (op === kipperMultiplicativeOperators[0] && leftOpType == kipperStrType && rightOpType == "num") {
				return;
			}

			// If types are not matching, not numeric, and they are not of string-like types, throw an error
			throw this.assertError(new ArithmeticOperationTypeError(leftOpType, rightOpType));
		}
	}

	/**
	 * Asserts that the passed type allows the bitwise operation.
	 * @param leftOp The left operand expression.
	 * @param rightOp The right operand expression.
	 * @param op The bitwise operation that is performed.
	 * @throws {BitwiseOperationTypeError} If the type of the left or right operand is not a number.
	 * @since 0.11.0
	 */
	public validBitwiseExpression(leftOp: Expression, rightOp: Expression, op: KipperBitwiseOperator): void {
		const leftOpType = KipperTypeChecker.getTypeForAnalysis(leftOp.getTypeSemanticData().evaluatedType);
		const rightOpType = KipperTypeChecker.getTypeForAnalysis(rightOp.getTypeSemanticData().evaluatedType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

		// Ensure that both expressions are of type 'num'
		if (leftOpType !== "num" || rightOpType !== "num") {
			throw this.assertError(new BitwiseOperationTypeError(leftOpType, rightOpType));
		}
	}

	/**
	 * Asserts that the type conversion for the {@link operand} is valid.
	 * @param operand The expression to convert.
	 * @param targetType The type to convert to.
	 * @throws {InvalidConversionTypeError} If the conversion is invalid/impossible.
	 * @since 0.8.0
	 */
	public validConversion(operand: Expression, targetType: CheckedType): void {
		// Get the compile-types for the specified conversion types
		const originalCompileType = KipperTypeChecker.getTypeForAnalysis(operand.getTypeSemanticData().evaluatedType);
		const targetCompileType = KipperTypeChecker.getTypeForAnalysis(targetType);

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (originalCompileType === undefined || targetCompileType === undefined) {
			return;
		}

		// Check whether a supported pair of types exist.
		const viableConversion =
			kipperSupportedConversions.find(
				(types) => types[0] === originalCompileType && types[1] === targetType.kipperType,
			) !== undefined;

		// In case that the targetType are not the same and no conversion is possible, throw an error!
		if (originalCompileType !== targetCompileType && !viableConversion) {
			throw this.assertError(new InvalidConversionTypeError(originalCompileType, targetCompileType));
		}
	}

	/**
	 * Asserts that the passed return statement is valid.
	 * @param returnStatement The return statement to check.
	 * @throws {AssignmentTypeError} If the type of the return value does not match the return type of the function.
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

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (statementValueType === undefined || functionReturnType === undefined) {
			return;
		}

		// We need to check whether the types are matching, but *not* if the function return type is valid, since that
		// will be done later by the function itself during the type checking.
		if (statementValueType && !this.checkMatchingTypes(statementValueType, functionReturnType)) {
			throw this.assertError(new AssignmentTypeError(statementValueType, functionReturnType));
		}
	}

	/**
	 * Ensures that the body of the {@link func} has valid return statements and all code paths return a value.
	 *
	 * Requires {@link func.typeSemantics} to be set.
	 * @param func The function where the body should be checked.
	 * @throws {IncompleteReturnsInCodePathsError} If not all code paths return a value.
	 * @since 0.10.0
	 */
	public validReturnCodePathsInFunctionBody(func: FunctionDeclaration | LambdaExpression): void {
		const semanticData = func.getSemanticData();
		const typeData = func.getTypeSemanticData();
		const returnType = KipperTypeChecker.getTypeForAnalysis(typeData.returnType);

		// If the return type is undefined, skip type checking (the type is invalid anyway)
		if (returnType === undefined) {
			return;
		}

		// If the function return type is not 'void' then there must be a return statement in all code paths
		// Note: We will ignore types here, since the return statements themselves with check later if they have the proper
		// return type.
		if (returnType !== "void") {
			// Recursively check all code paths to ensure all return a value.
			const checkChildrenCodePaths = (parent: Statement | Expression | CompoundStatement): boolean => {
				let returnPathsCovered = false;

				// If the parent is an if statement, we have to check the if and else branches directly
				// (Note: This won't ignore any other children, since an if statement will always only have one
				// if and one else branch, and never any other direct children)
				if (parent instanceof IfStatement) {
					const ifSemantics = parent.getSemanticData();

					// First check the if statement
					returnPathsCovered = checkChildrenCodePaths(ifSemantics.ifBranch);

					// Afterwards check the else branch (if it exists and is not undefined)
					if (ifSemantics.elseBranch) {
						returnPathsCovered = returnPathsCovered && checkChildrenCodePaths(ifSemantics.elseBranch);
					}
				} else {
					// If it's not an if-statement, check regularly all children if they are covered
					for (const child of parent.children) {
						if (child instanceof IfStatement) {
							// Only if both branches return a value, then this code path is covered
							const ifSemantics = child.getSemanticData();

							// First check the if branch (this one is always present)
							returnPathsCovered = checkChildrenCodePaths(ifSemantics.ifBranch);

							// Secondly check the else branch (this may be undefined, another if statement or an ending compound
							// statement)
							if (ifSemantics.elseBranch) {
								returnPathsCovered = returnPathsCovered && checkChildrenCodePaths(ifSemantics.elseBranch);
							} else {
								// If there is no else branch, then this code path is not covered (since it will not return a value)
								returnPathsCovered = false;
							}
						} else if (child instanceof CompoundStatement) {
							// If the child is a compound statement, we need to check it as well
							// (This is for compatibility of nested compound statements that appear directly under another compound
							// statement, like for example { { } })
							returnPathsCovered = checkChildrenCodePaths(child);
						} else if (child instanceof ReturnStatement) {
							// If the child is a return statement, then this entire code path is covered
							// (We don't need to check anything else after this point, since the return statement will always
							// be the last statement in the code path)
							returnPathsCovered = true;
							break;
						}
					}
				}

				return returnPathsCovered;
			};

			// Check all children starting with the function body (compound statement) itself
			let returnPathsCovered = checkChildrenCodePaths(semanticData.functionBody);

			// If not all code paths return a value, throw an error
			if (!returnPathsCovered) {
				throw this.assertError(new IncompleteReturnsInCodePathsError());
			}
		}
	}

	/**
	 * Checks whether the members of the passed {@link objLike} can be accessed. (As well if there are members)
	 * @param objLike The object-like expression to check.
	 * @throws {TypeError} If the object expression is not an object.
	 * @since 0.10.0
	 */
	public objectLikeIsIndexableOrAccessible(objLike: Expression): void {
		const objType = KipperTypeChecker.getTypeForAnalysis(objLike.getTypeSemanticData().evaluatedType);

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return;
		}

		// TODO! Add support for 'object' types once they are implemented
		if (objType !== "str" && objType !== "list") {
			throw this.assertError(new ValueNotIndexableTypeError(objType));
		}
	}

	/**
	 * Ensure the passed {@link key} may be used to access the members of the passed {@link objLike}.
	 * @param objLike The object-like expression to check.
	 * @param key The key that accesses the members of the object-like expression.
	 * @throws {InvalidKeyTypeError} In case the key type can not be used to index the object-like expression.
	 * @since 0.10.0
	 */
	public validBracketNotationKey(objLike: Expression, key: Expression): void {
		const objType = KipperTypeChecker.getTypeForAnalysis(objLike.getTypeSemanticData().evaluatedType);
		const keyType = KipperTypeChecker.getTypeForAnalysis(key.getTypeSemanticData().evaluatedType);

		// If the obj or key type are undefined, skip type checking  (the types are invalid anyway)
		if (objType === undefined || keyType === undefined) {
			return undefined;
		}

		// As currently only strings and lists are indexable, for now we only need to check for numeric indexes
		if (keyType !== "num") {
			throw this.assertError(new InvalidKeyTypeError(objType, keyType));
		}
	}

	/**
	 * Ensure the passed {@link key slice keys} may be used to access the members of the passed {@link objLike}.
	 * @param objLike The object-like expression to check.
	 * @param key The key that accesses the members of the object-like expression.
	 * @throws {InvalidKeyTypeError} In case the key type can not be used to index the object-like expression.
	 * @since 0.10.0
	 */
	public validSliceNotationKey(objLike: Expression, key: { start?: Expression; end?: Expression }): void {
		const objType = KipperTypeChecker.getTypeForAnalysis(objLike.getTypeSemanticData().evaluatedType);
		const startType = key.start
			? KipperTypeChecker.getTypeForAnalysis(key.start.getTypeSemanticData().evaluatedType)
			: undefined;
		const endType = key.end
			? KipperTypeChecker.getTypeForAnalysis(key.end.getTypeSemanticData().evaluatedType)
			: undefined;

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return;
		}

		// As currently only strings and lists are indexable, for now we only need to check for numeric indexes
		if (startType !== undefined && startType !== "num") {
			throw this.assertError(new InvalidKeyTypeError(objType, startType), key.start);
		} else if (endType !== undefined && endType !== "num") {
			throw this.assertError(new InvalidKeyTypeError(objType, endType), key.end);
		}
	}

	/**
	 * Get the type that this member access expression is accessing.
	 * @param memberAccess The member access expression to get the type for.
	 * @since 0.10.0
	 */
	public getTypeOfMemberAccessExpression(memberAccess: MemberAccessExpression): CheckedType {
		const semanticData = memberAccess.getSemanticData();

		// First ensure the object is indexable
		this.objectLikeIsIndexableOrAccessible(semanticData.objectLike);

		const preAnalysisType = semanticData.objectLike.getTypeSemanticData().evaluatedType;
		const objType = KipperTypeChecker.getTypeForAnalysis(preAnalysisType);

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return preAnalysisType; // Return the type that is
		}

		switch (semanticData.accessType) {
			case "dot":
				throw this.notImplementedError(
					new KipperNotImplementedError("Member access expression using dot notation is not implemented yet"),
				);
			case "bracket": {
				if (objType === "str") {
					// Also ensure the key is valid
					this.validBracketNotationKey(semanticData.objectLike, <Expression>semanticData.propertyIndexOrKeyOrSlice);

					return CheckedType.fromCompilableType("str");
				} else {
					// Must be a list -> Not implemented yet
					throw this.notImplementedError(
						new KipperNotImplementedError("Member access expression on lists are not implemented yet"),
					); // TODO! Add support for lists
				}
			}
			case "slice": {
				if (objType === "str") {
					// Also ensure the key is valid
					this.validSliceNotationKey(
						semanticData.objectLike,
						<{ start?: Expression; end?: Expression }>semanticData.propertyIndexOrKeyOrSlice,
					);

					return CheckedType.fromCompilableType("str");
				} else {
					// Must be a list -> Not implemented yet
					throw this.notImplementedError(
						new KipperNotImplementedError("Member access expression on lists are not implemented yet"),
					); // TODO! Add support for lists
				}
			}
		}
	}

	/**
	 * Checks whether the conditional expression is valid.
	 * @param trueBranch The expression which is called when the condition evaluates to true.
	 * @param falseBranch The expression which is called when the condition evaluates to false.
	 * @throws {KipperNotImplementedError} When the branch types are mismatching, as union types are not implemented yet.
	 * @since 0.11.0
	 */
	validConditionalExpression(trueBranch: Expression, falseBranch: Expression) {
		const trueBranchType = KipperTypeChecker.getTypeForAnalysis(trueBranch.getTypeSemanticData().evaluatedType);
		const falseBranchType = KipperTypeChecker.getTypeForAnalysis(falseBranch.getTypeSemanticData().evaluatedType);

		// If the branch types are undefined, skip type checking (the types are invalid anyway)
		if (trueBranchType === undefined || falseBranchType === undefined) {
			return;
		}

		if (trueBranchType !== falseBranchType) {
			throw this.notImplementedError(
				new KipperNotImplementedError(
					"Conditional expressions with mismatching branch return types are not implemented yet",
				),
			);
		}
	}
}
