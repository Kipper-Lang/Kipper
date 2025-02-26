/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @since 0.7.0
 */
import { BuiltInFunctionArgument } from "../runtime-built-ins";
import type { KipperProgramContext } from "../../program-ctx";
import type {
	ArrayPrimaryExpression,
	AssignmentExpression,
	FunctionDeclaration,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementPostfixExpressionSemantics,
	LambdaPrimaryExpression,
	MemberAccessExpression,
	MemberAccessExpressionSemantics,
	ParameterDeclarationSemantics,
	RelationalExpression,
	Statement,
	UnaryExpression,
	UnaryExpressionSemantics,
} from "../../ast";
import {
	CompoundStatement,
	Expression,
	IdentifierPrimaryExpression,
	IfStatement,
	ParameterDeclaration,
	ReturnStatement,
	TangledPrimaryExpression,
} from "../../ast";
import { KipperSemanticsAsserter } from "./err-handler";
import {
	BuiltInTypes,
	type Scope,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeTypeDeclaration,
	ScopeVariableDeclaration,
} from "../symbol-table";
import type { KipperArithmeticOperator, KipperBitwiseOperator, KipperReferenceable } from "../../const";
import {
	kipperIncrementOrDecrementOperators,
	kipperMultiplicativeOperators,
	kipperPlusOperator,
	kipperSupportedConversions,
} from "../../const";
import type { TypeError } from "../../../errors";
import {
	ArithmeticOperationTypeError,
	BitwiseOperationTypeError,
	CanNotUseNonGenericAsGenericTypeError,
	ExpressionNotCallableError,
	IncompleteReturnsInCodePathsError,
	InvalidAmountOfArgumentsError,
	InvalidAmountOfGenericArgumentsError,
	InvalidConversionTypeError,
	InvalidInstanceOfTypeError,
	InvalidKeyTypeError,
	InvalidRelationalComparisonTypeError,
	InvalidUnaryExpressionOperandError,
	InvalidUnaryExpressionTypeError,
	KipperError,
	KipperNotImplementedError,
	PropertyDoesNotExistError,
	ReadOnlyWriteTypeError,
	ReferenceCanNotBeUsedAsTypeError,
	UnknownTypeTypeError,
	ValueNotIndexableTypeError,
	ValueTypeNotIndexableWithGivenAccessorTypeError,
	InvalidMatchesTypeError,
	InvalidCastTypeError,
} from "../../../errors";
import type { BuiltInTypeArray, GenericType, GenericTypeArguments, ProcessedType, RawType } from "../types";
import { BuiltInTypeFunc, BuiltInTypeObj, CustomType, UndefinedType } from "../types";

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
	 * Fetches the type from the identifier and throws an error if the type is not found.
	 * @param type The type to check.
	 * @param scope The scope to check in.
	 * @since 0.7.0
	 */
	public getTypeFromIdentifier(type: string, scope: Scope): ScopeTypeDeclaration {
		const scopeEntry = scope.getEntryRecursively(type);
		if (scopeEntry === undefined) {
			throw this.assertError(new UnknownTypeTypeError(type));
		} else if (!(scopeEntry instanceof ScopeTypeDeclaration)) {
			throw this.assertError(new ReferenceCanNotBeUsedAsTypeError(type));
		}
		return scopeEntry;
	}

	/**
	 * Creates a new {@link ProcessedType} instance based on the passed {@link KipperType}.
	 *
	 * If the rawType is invalid, the function will still return a {@link ProcessedType}, but the field
	 * {@link ProcessedType.isCompilable} will be false and the instance WILL NOT be usable for a compilation.
	 * @param rawType The unchecked rawType to analyse.
	 * @param scope The scope to check in.
	 */
	public getCheckedType(rawType: RawType, scope: Scope): ProcessedType {
		try {
			const type = this.getTypeFromIdentifier(rawType.toString(), scope);
			return type.typeValue;
		} catch (e) {
			// If the error is not a KipperError, rethrow it (since it is not a rawType error, and we don't know what happened)
			if (!(e instanceof KipperError)) {
				throw e;
			}

			if (this.programCtx.compileConfig.recover && !this.programCtx.compileConfig.abortOnFirstError) {
				// Add the error, but still recover (This is so that the compiler doesn't simply proceed without
				// throwing any errors, which would be VERY bad.)
				this.programCtx.reportError(e);

				// Recover from the error by wrapping the undefined rawType
				return new UndefinedType(rawType.toString());
			}

			// If error recovery is not enabled, we shouldn't bother trying to handle invalid types
			throw e;
		}
	}

	/**
	 * Searches for the given identifier in the object or throws an error if it can't be found.
	 * @param obj The object which should be searched.
	 * @param identifier The identifier to search for.
	 * @returns The type of the property
	 * @throws {PropertyDoesNotExistError} If the property does not exist.
	 * @since 0.12.0
	 */
	public findPropertyInObject(obj: BuiltInTypeObj | CustomType, identifier: string): ProcessedType {
		if (obj instanceof BuiltInTypeObj) {
			throw this.assertError(new PropertyDoesNotExistError(obj.toString(), identifier));
		}

		// Assuming obj.fields is a Map or an iterable collection of [key, value] pairs
		const fieldType = obj.getProperty(identifier);
		if (fieldType) {
			return fieldType;
		}

		// If no matching field was found, throw an error
		throw this.assertError(new PropertyDoesNotExistError(obj.toString(), identifier));
	}

	/**
	 * Ensures that the given {@link type generic type} is valid by checking whether the provided generic arguments
	 * match the generic type's constraints.
	 *
	 * As generics are not fully implemented, this only checks for the number of arguments.
	 * @param type The generic type to check.
	 * @param args The generic arguments to check.
	 */
	public ensureValidGenericType(type: ProcessedType | GenericType<GenericTypeArguments>, args: ProcessedType[]): void {
		if (!type.isGeneric || !("genericTypeArguments" in type)) {
			throw this.assertError(new CanNotUseNonGenericAsGenericTypeError(type.toString()));
		}

		const requiredGenericArgs = type.genericTypeArguments.filter((arg) => !Array.isArray(arg.type));
		const spreadCount = type.genericTypeArguments.length - requiredGenericArgs.length;
		if (spreadCount > 1) {
			throw this.assertError(
				new InvalidAmountOfGenericArgumentsError(
					type.toString(),
					requiredGenericArgs.length,
					args.length,
					!!spreadCount,
				),
			);
		} else if (
			(spreadCount && requiredGenericArgs.length > args.length) ||
			(!spreadCount && requiredGenericArgs.length !== args.length)
		) {
			throw this.assertError(
				new InvalidAmountOfGenericArgumentsError(
					type.toString(),
					requiredGenericArgs.length,
					args.length,
					!!spreadCount,
				),
			);
		}
	}

	/**
	 * Asserts that the passed {@link ref} is callable. This function will only check {@link ScopeDeclaration} instances,
	 * since {@link BuiltInFunction built-in functions} will always be callable.
	 * @param ref The reference to check.
	 * @throws {ExpressionNotCallableError} If the passed {@link ref} is not callable.
	 * @since 0.10.0
	 */
	public refTargetCallable(ref: Expression | KipperReferenceable): void {
		if (ref instanceof ScopeDeclaration) {
			const targetType = ref.type;
			if (!targetType.isCompilable) {
				return; // Ignore undefined types - Skip type checking (the type is invalid anyway)
			}

			// If the reference is not callable, throw an error
			if (!ref.isCallable) {
				throw this.assertError(new ExpressionNotCallableError(targetType.toString()));
			}
		} else if (ref instanceof Expression) {
			const expType = ref.getTypeSemanticData().evaluatedType;
			if (!(expType instanceof BuiltInTypeFunc)) {
				throw this.assertError(new ExpressionNotCallableError(expType.toString()));
			}
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
		const toAssign = semanticData.toAssign;
		const leftExpSemantics = toAssign.getSemanticData();
		const leftExpTypeData = toAssign.getTypeSemanticData();
		const rightExpTypeData = semanticData.value.getTypeSemanticData();

		// Ensure that the left-hand side is not read-only
		if (
			toAssign instanceof IdentifierPrimaryExpression &&
			leftExpSemantics.ref instanceof ScopeVariableDeclaration &&
			leftExpSemantics.ref.storageType === "const"
		) {
			throw this.assertError(new ReadOnlyWriteTypeError(leftExpSemantics.ref.identifier));
		}

		// Get the compile-types for the left and right hand side
		const varType = leftExpTypeData.evaluatedType;
		const valueType = rightExpTypeData.evaluatedType;

		// If either one of the types can't be compiled or evaluated then we skip this step
		if (!varType.isCompilable || !valueType.isCompilable) {
			return;
		}

		// Ensure that the types are matching - if not, throw an error
		try {
			valueType.assertAssignableTo(varType);
		} catch (e) {
			throw this.assertError(<TypeError>e);
		}

		// Ensure that all arithmetic assignment operators except '+=' are only used on numbers
		if (semanticData.operator !== "=" && valueType !== BuiltInTypes.num) {
			// Strings may use the '+=' operator to concatenate (e.g. 'str += str')
			if (!(semanticData.operator === "+=" && valueType === BuiltInTypes.str)) {
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
		const leftExpType = scopeEntry.type;
		const rightExpType = value.getTypeSemanticData().evaluatedType;

		// If either one of the types can't be compiled or evaluated then we skip this step
		if (!leftExpType.isCompilable || !rightExpType.isCompilable) {
			return;
		}

		// Ensure the value of the definition match the definition type
		try {
			rightExpType.assertAssignableTo(leftExpType);
		} catch (e) {
			throw this.assertError(<TypeError>e);
		}
	}

	/**
	 * Asserts that the argument type matches the type of the argument value passed.
	 * @param arg The parameter that the value was passed to.
	 * @param receivedType The type that was received.
	 * @example
	 * call print("x"); // <-- Parameter type 'str' must match type of argument "x"
	 * @throws {ArgumentAssignmentTypeError} If the given argument type does not match the parameter type.
	 * @since 0.7.0
	 */
	public validArgumentValue(
		arg: ParameterDeclaration | BuiltInFunctionArgument | ProcessedType,
		receivedType: ProcessedType,
		identifier?: string,
	): void {
		let semanticData: ParameterDeclarationSemantics | BuiltInFunctionArgument | undefined = undefined;
		let argType: ProcessedType;

		// Get the proper semantic data and value type
		if (arg instanceof ParameterDeclaration) {
			semanticData = arg.getSemanticData();
			argType = arg.getTypeSemanticData().valueType;
		} else if (arg instanceof BuiltInFunctionArgument) {
			semanticData = arg;
			argType = arg.valueType;
		} else {
			argType = arg;
		}

		// If either one of the types can't be compiled or evaluated then we skip this step
		if (!receivedType.isCompilable || !argType.isCompilable) {
			return;
		}

		try {
			receivedType.assertAssignableTo(argType, undefined, semanticData?.identifier ?? identifier);
		} catch (e) {
			throw this.assertError(<TypeError>e);
		}
	}

	/**
	 * Asserts that the passed function arguments are valid.
	 * @param func The function that is called.
	 * @param args The arguments for the call expression.
	 * @throws {InvalidAmountOfArgumentsError} If the amount of arguments is invalid e.g. too many or too few.
	 * @throws {ArgumentAssignmentTypeError} If any given argument type does not match the required parameter type.
	 * @since 0.7.0
	 */
	public validFunctionCallArguments(func: Expression | KipperReferenceable, args: Array<Expression>): void {
		const funcType = <BuiltInTypeFunc>(
			(func instanceof Expression ? func.getTypeSemanticData().evaluatedType : func.type)
		);
		if (funcType.paramTypes.length !== args.length) {
			throw this.assertError(
				new InvalidAmountOfArgumentsError(funcType.identifier, funcType.paramTypes.length, args.length),
			);
		}

		const params = func instanceof ScopeFunctionDeclaration ? func.params : funcType.paramTypes;

		// Iterate through both arrays at the same type to verify each type is valid
		args.forEach((arg: Expression, index) => {
			const typeData = arg.getTypeSemanticData();

			this.setTracebackData({ ctx: arg });
			this.validArgumentValue(
				params[index],
				typeData.evaluatedType,
				`arg${index}`, // Backup name
			);
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
		const leftOpType = leftOpTypeData.evaluatedType;
		const rightOpType = rightOpTypeData.evaluatedType;

		// If either one of the types can't be compiled or evaluated then we skip this step
		if (!leftOpType.isCompilable || !rightOpType.isCompilable) {
			return;
		}

		// Ensure that both expressions are of type 'num'
		if (leftOpType !== BuiltInTypes.num || rightOpType !== BuiltInTypes.num) {
			throw this.assertError(new InvalidRelationalComparisonTypeError(leftOpType.toString(), rightOpType.toString()));
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
		const semanticData = operand.getSemanticData() as
			| UnaryExpressionSemantics
			| IncrementOrDecrementPostfixExpressionSemantics;
		const expTypeSemantics = semanticData.operand.getTypeSemanticData();
		const expType = expTypeSemantics.evaluatedType;

		// If the type is undefined, skip type checking (the type is invalid anyway)
		if (!expType.isCompilable) {
			return;
		}

		// Ensure that the operator '+', '-', '++' and '--' are only used on numbers
		if (semanticData.operator !== "!" && expType !== BuiltInTypes.num) {
			throw this.assertError(new InvalidUnaryExpressionTypeError(semanticData.operator, expType.toString()));
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
		const leftOpType = leftOp.getTypeSemanticData().evaluatedType;
		const rightOpType = rightOp.getTypeSemanticData().evaluatedType;

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (leftOpType === undefined || rightOpType === undefined) {
			return;
		}

		// Numbers may use all arithmetic operators
		if (leftOpType !== BuiltInTypes.num || rightOpType !== BuiltInTypes.num) {
			// Strings can use '+' to concat strings
			if (op === kipperPlusOperator && leftOpType == BuiltInTypes.str && rightOpType == BuiltInTypes.str) {
				return;
			}

			// Strings can use * to repeat a string n times
			if (
				op === kipperMultiplicativeOperators[0] &&
				leftOpType == BuiltInTypes.str &&
				rightOpType == BuiltInTypes.num
			) {
				return;
			}

			// If types are not matching, not numeric, and they are not of string-like types, throw an error
			throw this.assertError(new ArithmeticOperationTypeError(leftOpType.toString(), rightOpType.toString()));
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
		const leftOpType = leftOp.getTypeSemanticData().evaluatedType;
		const rightOpType = rightOp.getTypeSemanticData().evaluatedType;

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (!leftOpType.isCompilable || !rightOpType.isCompilable) {
			return;
		}

		// Ensure that both expressions are of type 'num'
		if (leftOpType !== BuiltInTypes.num || rightOpType !== BuiltInTypes.num) {
			throw this.assertError(new BitwiseOperationTypeError(leftOpType.toString(), rightOpType.toString()));
		}
	}

	/**
	 * Asserts that the type conversion for the {@link operand} is valid.
	 * @param operand The expression to convert.
	 * @param targetType The type to convert to.
	 * @throws {InvalidConversionTypeError} If the conversion is invalid/impossible.
	 * @since 0.8.0
	 */
	public validConversion(operand: Expression, targetType: ProcessedType): void {
		// Get the compile-types for the specified conversion types
		const operandCompileType = operand.getTypeSemanticData().evaluatedType;
		const targetCompileType = targetType;

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (!operandCompileType.isCompilable || !targetCompileType.isCompilable) {
			return;
		}

		// Return early if the types are the same
		if (operandCompileType === targetCompileType) {
			return;
		}

		// Check whether a supported pair of types exist
		const viableConversion =
			kipperSupportedConversions.find(
				(types) => BuiltInTypes[types[0]] === operandCompileType && BuiltInTypes[types[1]] === targetType,
			) !== undefined;
		if (!viableConversion) {
			throw this.assertError(
				new InvalidConversionTypeError(operandCompileType.toString(), targetCompileType.toString()),
			);
		}
	}

	/**
	 * Asserts that the cast for the {@link operand} is valid.
	 * @param operand The expression to cast.
	 * @param targetType The type to cast to.
	 * @throws {InvalidCastTypeError} If the cast is invalid/impossible.
	 * @since 0.12.0
	 */
	public validCast(operand: Expression, targetType: ProcessedType): void {
		// Get the compile-types for the specified conversion types
		const operandCompileType = operand.getTypeSemanticData().evaluatedType;
		const targetCompileType = targetType;

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (!operandCompileType.isCompilable || !targetCompileType.isCompilable) {
			return;
		}

		if (operandCompileType !== targetCompileType && !operandCompileType.isAssignableTo(targetCompileType)) {
			throw this.assertError(new InvalidCastTypeError(operandCompileType.toString(), targetCompileType.toString()));
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
		const statementValueType = semanticData.returnValue?.getTypeSemanticData().evaluatedType ?? BuiltInTypes.void;

		// As the function type is evaluated preliminary, we can safely assume that the type is valid and use it
		const functionReturnType = semanticData.function.getTypeSemanticData().valueType.returnType;

		// If either one of the types is undefined, skip type checking (the types are invalid anyway)
		if (statementValueType === undefined || functionReturnType === undefined) {
			return;
		}

		// We need to check whether the types are matching, but *not* if the function return type is valid, since that
		// will be done later by the function itself during the type checking.
		try {
			statementValueType.assertAssignableTo(functionReturnType);
		} catch (e) {
			throw this.assertError(<TypeError>e);
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
	public validReturnCodePathsInFunctionBody(func: FunctionDeclaration | LambdaPrimaryExpression): void {
		const semanticData = func.getSemanticData();
		const typeData = func.getTypeSemanticData();
		const returnType = typeData.valueType.returnType;

		// If the return type is undefined, skip type checking (the type is invalid anyway)
		if (returnType === undefined) {
			return;
		}

		// If the function return type is not 'void' then there must be a return statement in all code paths
		// Note: We will ignore types here, since the return statements themselves with check later if they have the proper
		// return type.
		if (returnType !== BuiltInTypes.void) {
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
	 * @param accessType The type of accessor that is used to access the members.
	 * @throws {TypeError} If the object expression is not an object.
	 * @since 0.10.0
	 */
	public objectLikeIsIndexableOrAccessible(
		objLike: Expression,
		accessType: MemberAccessExpressionSemantics["accessType"],
	): void {
		const objType = objLike.getTypeSemanticData().evaluatedType;

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return;
		}

		const isStrOrArr = objType.isAssignableTo(BuiltInTypes.str) || objType.isAssignableTo(BuiltInTypes.Array);
		const isObj = objType.isAssignableTo(BuiltInTypes.obj);
		if (!isStrOrArr && !isObj) {
			throw this.assertError(new ValueNotIndexableTypeError(objType.toString()));
		} else if ((isStrOrArr && accessType === "dot") || (isObj && accessType !== "dot")) {
			throw this.assertError(new ValueTypeNotIndexableWithGivenAccessorTypeError(objType.toString(), accessType));
		}
	}

	/**
	 * Ensures the passed {@link key} may be used to access the members of the passed {@link objLike}.
	 * @param objLike The object-like expression to check.
	 * @param key The key that accesses the members of the object-like expression.
	 * @throws {InvalidKeyTypeError} In case the key type can not be used to index the object-like expression.
	 * @since 0.10.0
	 */
	public validBracketNotationKey(objLike: Expression, key: Expression): void {
		const objType = objLike.getTypeSemanticData().evaluatedType;
		const keyType = key.getTypeSemanticData().evaluatedType;

		// If the obj or key type are undefined, skip type checking  (the types are invalid anyway)
		if (objType === undefined || keyType === undefined) {
			return undefined;
		}

		// As currently only strings and lists are indexable, for now we only need to check for numeric indexes
		if (keyType !== BuiltInTypes.num) {
			throw this.assertError(new InvalidKeyTypeError(objType.toString(), keyType.toString()));
		}
	}

	/**
	 * Ensures the passed {@link key slice keys} may be used to access the members of the passed {@link objLike}.
	 * @param objLike The object-like expression to check.
	 * @param key The key that accesses the members of the object-like expression.
	 * @throws {InvalidKeyTypeError} In case the key type can not be used to index the object-like expression.
	 * @since 0.10.0
	 */
	public validSliceNotationKey(objLike: Expression, key: { start?: Expression; end?: Expression }): void {
		const objType = objLike.getTypeSemanticData().evaluatedType;
		const startType = key.start ? key.start.getTypeSemanticData().evaluatedType : undefined;
		const endType = key.end ? key.end.getTypeSemanticData().evaluatedType : undefined;

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return;
		}

		// As currently only strings and lists are indexable, for now we only need to check for numeric indexes
		if (startType !== undefined && startType !== BuiltInTypes.num) {
			throw this.assertError(new InvalidKeyTypeError(objType.toString(), startType.toString()), key.start);
		} else if (endType !== undefined && endType !== BuiltInTypes.num) {
			throw this.assertError(new InvalidKeyTypeError(objType.toString(), endType.toString()), key.end);
		}
	}

	/**
	 * Get the type that this member access expression is accessing.
	 * @param memberAccess The member access expression to get the type for.
	 * @since 0.10.0
	 */
	public getTypeOfMemberAccessExpression(memberAccess: MemberAccessExpression): ProcessedType {
		const semanticData = memberAccess.getSemanticData();

		// First ensure the object is indexable
		this.objectLikeIsIndexableOrAccessible(semanticData.objectLike, semanticData.accessType);

		const preAnalysisType = semanticData.objectLike.getTypeSemanticData().evaluatedType;
		const objType = preAnalysisType;

		// If the obj type is undefined, skip type checking (the type is invalid anyway)
		if (objType === undefined) {
			return preAnalysisType; // Return the type that is
		}

		switch (semanticData.accessType) {
			case "dot": {
				return this.findPropertyInObject(
					<BuiltInTypeObj | CustomType>objType,
					<string>semanticData.propertyIndexOrKeyOrSlice,
				);
			}
			case "bracket": {
				this.validBracketNotationKey(semanticData.objectLike, <Expression>semanticData.propertyIndexOrKeyOrSlice);

				if (objType.isAssignableTo(BuiltInTypes.Array)) {
					return (<BuiltInTypeArray>objType).genericTypeArguments[0].type;
				} else {
					return BuiltInTypes.str;
				}
			}
			case "slice": {
				this.validSliceNotationKey(
					semanticData.objectLike,
					<{ start?: Expression; end?: Expression }>semanticData.propertyIndexOrKeyOrSlice,
				);

				if (objType.isAssignableTo(BuiltInTypes.Array)) {
					return objType;
				} else {
					return BuiltInTypes.str;
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
	public validConditionalExpression(trueBranch: Expression, falseBranch: Expression) {
		const trueBranchType = trueBranch.getTypeSemanticData().evaluatedType;
		const falseBranchType = falseBranch.getTypeSemanticData().evaluatedType;

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

	/**
	 * Checks whether the passed array expression is valid.
	 *
	 * This for now only checks that the types of the array elements are always the same.
	 * @param param The array primary expression to check.
	 * @since 0.12.0
	 */
	public validArrayExpression(param: ArrayPrimaryExpression) {
		const children = param.getSemanticData().value;
		if (children.length > 0) {
			const expectedType = children[0].getTypeSemanticData().evaluatedType;

			for (const child of children) {
				if (child.getTypeSemanticData().evaluatedType !== expectedType) {
					// Arrays may only have a single type of elements (for now)
					throw this.notImplementedError(
						new KipperNotImplementedError("Arrays with multiple types of elements are not implemented yet."),
					);
				}
			}
		}
	}

	/**
	 * Checks whether the passed object expression is valid.
	 * @param type The object primary expression to check.
	 * @since 0.12.0
	 */
	public validInstanceofClassType(type: ProcessedType) {
		// Ensure that the type is a class type
		if (!(type instanceof CustomType) || type.kind !== "class") {
			throw this.notImplementedError(new InvalidInstanceOfTypeError(type.toString()));
		}
	}

	/**
	 * Checks whether the passed expression can be checked against the given interface pattern.
	 * @param patternType The pattern to check against.
	 * @since 0.12.0
	 */
	public validMatchesInterfaceType(patternType: ProcessedType) {
		// Ensure that the pattern is an interface type
		if (!(patternType instanceof CustomType) || patternType.kind !== "interface") {
			throw this.notImplementedError(new InvalidMatchesTypeError(patternType.toString()));
		}
	}
}
