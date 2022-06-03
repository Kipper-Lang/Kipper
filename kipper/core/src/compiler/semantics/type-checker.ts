/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import { KipperAsserter } from "./asserter";
import { Expression, ExpressionSemantics, ParameterDeclaration } from "./tokens";
import { KipperFunction, kipperReturnTypes, KipperType, kipperTypes } from "./const";
import { InvalidArgumentTypeError, InvalidReturnTypeError, TypeError, UnknownTypeError } from "../../errors";
import { ScopeVariableDeclaration } from "./scope-declaration";
import type { BuiltInFunctionArgument } from "../runtime-built-ins";
import type { KipperProgramContext } from "../program-ctx";

/**
 * Kipper Type Checker, which asserts that type logic and cohesion is valid and throws errors in case that an
 * invalid use of types and identifiers is detected.
 * @since 0.7.0
 */
export class KipperTypeChecker extends KipperAsserter {
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
	public validAssignment(leftExp: Expression<any>, rightExp: Expression<any>): void {
		const leftExpType = leftExp.ensureSemanticDataExists().evaluatedType;
		const rightExpType = rightExp.ensureSemanticDataExists().evaluatedType;
		if (leftExpType !== rightExpType) {
			throw this.assertError(new TypeError(`Type '${rightExpType}' is not assignable to type '${leftExpType}'.`));
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
		const rightExpType = rightExp.ensureSemanticDataExists().evaluatedType;
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
		const semanticData = arg instanceof ParameterDeclaration ? arg.ensureSemanticDataExists() : arg;

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
			const semanticData = arg.ensureSemanticDataExists();
			this.argumentTypesMatch(func.args[index], semanticData.evaluatedType);
		});
	}
}
