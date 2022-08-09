/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import { type CompoundStatement, type Expression, IdentifierPrimaryExpression, VariableDeclaration } from "../language";
import {
	BuiltInOverwriteError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByVariableError,
	InvalidAmountOfArgumentsError,
	InvalidAssignmentError,
	InvalidGlobalError,
	KipperNotImplementedError,
	UndefinedConstantError,
	UndefinedReferenceError,
	UnknownReferenceError,
} from "../../../errors";
import { type KipperFunction, KipperRef } from "../const";
import type { KipperProgramContext } from "../../program-ctx";
import { ScopeDeclaration, ScopeVariableDeclaration } from "../../scope-declaration";
import { KipperSemanticsAsserter } from "../semantics-asserter";

/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @since 0.7.0
 */
export class KipperSemanticChecker extends KipperSemanticsAsserter {
	constructor(programCtx: KipperProgramContext) {
		super(programCtx);
	}

	/**
	 * Modifies the metadata for a {@link KipperNotImplementedError}
	 * @param error The {@link KipperNotImplementedError} instance.
	 * @since 0.7.0
	 */
	public notImplementedError(error: KipperNotImplementedError): KipperNotImplementedError {
		return this.assertError(error);
	}

	/**
	 * Asserts that the passed {@link ref} is defined and has a value assigned that can be used.
	 * @param ref The reference that should be checked.
	 * @since 0.10.0
	 */
	public referenceDefined(ref: KipperRef) {
		if (ref instanceof ScopeDeclaration && !ref.hasValue) {
			throw this.assertError(new UndefinedReferenceError(ref.identifier));
		}
	}

	/**
	 * Asserts that the passed function identifier has not been declared yet.
	 * @param identifier The identifier of the function.
	 * @since 0.7.0
	 */
	public functionIdentifierNotDeclared(identifier: string): void {
		if (this.programCtx.getBuiltInFunction(identifier) || this.programCtx.globalScope.getFunction(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been declared yet.
	 * @param identifier The identifier of the variable.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public variableIdentifierNotDeclared(identifier: string, scopeCtx?: CompoundStatement): void {
		// Always check in the global scope
		if (this.programCtx.globalScope.getVariable(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}

		// Also check in the local scope if it was defined
		if (scopeCtx && scopeCtx.localScope.getVariableRecursively(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}
	}

	/**
	 * Asserts that the passed identifier does not exist as a built-in global.
	 * @param identifier The identifier to check.
	 * @since 0.7.0
	 */
	public builtInNotDefined(identifier: string): void {
		if (this.programCtx.builtIns.find((val) => val.identifier === identifier)) {
			throw this.assertError(new BuiltInOverwriteError(identifier));
		}
	}

	/**
	 * Asserts that a new global with the passed identifier may be created.
	 * @param identifier The identifier to check.
	 * @since 0.7.0
	 */
	public globalCanBeRegistered(identifier: string): void {
		let identifierAlreadyExists: boolean = this.programCtx.globalScope.getDeclaration(identifier) !== undefined;
		let globalAlreadyExists: boolean = this.programCtx.getBuiltInFunction(identifier) !== undefined;

		// If the identifier is already used or the global already exists, throw an error
		if (identifierAlreadyExists || globalAlreadyExists) {
			throw this.assertError(new InvalidGlobalError(identifier));
		}
	}

	/**
	 * Asserts that the passed expression is valid.
	 * @param leftExp The left-hand side of the assignment.
	 * @since 0.7.0
	 */
	public validAssignment(leftExp: Expression<any, any>): void {
		if (!(leftExp instanceof IdentifierPrimaryExpression)) {
			throw this.assertError(
				new InvalidAssignmentError("The left-hand side of an expression must be an identifier or a property access."),
			);
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownReferenceError}.
	 * @param identifier The identifier to fetch.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public getExistingVariable(identifier: string, scopeCtx?: CompoundStatement): ScopeVariableDeclaration {
		const variable = scopeCtx
			? scopeCtx.localScope.getVariableRecursively(identifier)
			: this.programCtx.globalScope.getVariable(identifier);
		if (variable === undefined) {
			throw this.assertError(new UnknownReferenceError(identifier));
		} else {
			return variable;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownReferenceError}.
	 * @param identifier The identifier to fetch.
	 * @since 0.7.0
	 */
	public getExistingFunction(identifier: string): KipperFunction {
		const func = this.programCtx.getBuiltInFunction(identifier) ?? this.programCtx.globalScope.getFunction(identifier);
		if (func === undefined) {
			throw this.assertError(new UnknownReferenceError(identifier));
		} else {
			return func;
		}
	}

	/**
	 * Asserts that the passed function arguments are valid.
	 * @param func The function that is called.
	 * @param args The arguments for the call expression.
	 * @since 0.7.0
	 */
	public validFunctionCallArguments(func: KipperFunction, args: Array<Expression<any, any>>): void {
		if (func.args.length != args.length) {
			throw this.assertError(new InvalidAmountOfArgumentsError(func.identifier, func.args.length, args.length));
		}
	}

	/**
	 * Asserts that the variable declaration is valid.
	 * @param decl The variable declaration.
	 */
	public validDeclaration(decl: VariableDeclaration): void {
		const declSemanticData = decl.getSemanticData();
		if (declSemanticData.storageType === "const" && !declSemanticData.isDefined) {
			throw this.assertError(new UndefinedConstantError("Constant declarations must have a value."));
		}
	}
}
