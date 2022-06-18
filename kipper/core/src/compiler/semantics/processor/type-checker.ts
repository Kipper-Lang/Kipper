/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import { KipperSemanticsAsserter } from "../semantics-asserter";
import { Expression, ExpressionSemantics, IdentifierPrimaryExpression, ParameterDeclaration } from "../language";
import { type KipperFunction, kipperReturnTypes, type KipperType, kipperTypes } from "../const";
import {
	InvalidArgumentTypeError,
	InvalidAssignmentTypeError,
	InvalidReturnTypeError,
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
	public validAssignment(leftExp: IdentifierPrimaryExpression, rightExp: Expression<any>): void {
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
	public validVariableDefinition(scopeEntry: ScopeVariableDeclaration, rightExp: Expression<any>): void {
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
	public validFunctionCallArguments(func: KipperFunction, args: Array<Expression<any>>): void {
		// Iterate through both arrays at the same type to verify each type is valid
		args.forEach((arg: Expression<ExpressionSemantics>, index) => {
			const semanticData = arg.getSemanticData();
			this.argumentTypesMatch(func.args[index], semanticData.evaluatedType);
		});
	}
}
