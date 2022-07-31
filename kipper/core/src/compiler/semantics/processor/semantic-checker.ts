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
	FunctionDefinitionAlreadyExistsError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByVariableError,
	InvalidAmountOfArgumentsError,
	InvalidAssignmentError,
	InvalidConversionTypeError,
	InvalidGlobalError,
	KipperNotImplementedError,
	UndefinedConstantError,
	UndefinedIdentifierError,
	UnknownIdentifierError,
	VariableDefinitionAlreadyExistsError,
} from "../../../errors";
import { type KipperFunction, type KipperRef, kipperSupportedConversions, type KipperType } from "../const";
import type { KipperProgramContext } from "../../program-ctx";
import { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../../scope-declaration";
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
	 * Checks whether an identifier is declared. If the identifier is defined it will also pass.
	 * @param identifier The identifier to check for.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public identifierIsDeclared(identifier: string, scopeCtx?: CompoundStatement): void {
		const val = this.getDeclaration(identifier, scopeCtx);
		if (!val) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		}

		const isBuiltinDeclared = "handler" in val; // BuiltInFunction 'handler' property -> always declared/defined
		const isDeclarationDeclared = val instanceof ScopeDeclaration; // User-defined -> always declared, sometimes defined
		if (!isBuiltinDeclared && !isDeclarationDeclared) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		}
	}

	/**
	 * Checks whether an identifier is defined. If the identifier is declared it will fail!
	 * @param identifier The identifier to check for.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public identifierIsDefined(identifier: string, scopeCtx?: CompoundStatement): void {
		const val = this.getDeclaration(identifier, scopeCtx);
		if (!val) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		}

		const isBuiltinDefined = "handler" in val; // BuiltInFunction 'handler' property -> always defined
		const isDeclarationDefined = val instanceof ScopeDeclaration && val.isDefined; // User-defined -> may be defined
		if (!isBuiltinDefined && !isDeclarationDefined) {
			throw this.assertError(new UndefinedIdentifierError(identifier));
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
	 * Asserts that the passed variable identifier has not been defined yet.
	 * @param identifier The identifier to check for in the global scope.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public variableIdentifierNotDefined(identifier: string, scopeCtx?: CompoundStatement): void {
		const check = (v: { identifier: string }) => {
			// Return true only if the identifier match and the variable is DEFINED
			return v instanceof ScopeVariableDeclaration && v.identifier === identifier && v.isDefined;
		};

		// Always check in the global scope
		if (this.programCtx.globalScope.variables.find(check)) {
			throw this.assertError(new VariableDefinitionAlreadyExistsError(identifier));
		}

		// Also check in the local scope if it was defined
		if (scopeCtx && scopeCtx?.localScope.variables.find(check)) {
			throw this.assertError(new VariableDefinitionAlreadyExistsError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been defined yet.
	 * @param identifier The identifier to check for in the global scope.
	 * @since 0.7.0
	 */
	public functionIdentifierNotDefined(identifier: string): void {
		// Always check in the global scope
		const check = (v: { identifier: string }) => {
			// Return true only if the identifier match and the function is DEFINED
			return v instanceof ScopeFunctionDeclaration && v.identifier === identifier && v.isDefined;
		};

		if (this.programCtx.globalScope.functions.find(check)) {
			throw this.assertError(new FunctionDefinitionAlreadyExistsError(identifier));
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
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public getExistingReference(identifier: string, scopeCtx?: CompoundStatement): KipperRef {
		const ref = this.getDeclaration(identifier, scopeCtx);
		if (ref === undefined) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		} else {
			return ref;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public getExistingVariable(identifier: string, scopeCtx?: CompoundStatement): ScopeVariableDeclaration {
		const variable = scopeCtx
			? scopeCtx.localScope.getVariableRecursively(identifier)
			: this.programCtx.globalScope.getVariable(identifier);
		if (variable === undefined) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		} else {
			return variable;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @since 0.7.0
	 */
	public getExistingFunction(identifier: string): KipperFunction {
		const func = this.programCtx.getBuiltInFunction(identifier) ?? this.programCtx.globalScope.getFunction(identifier);
		if (func === undefined) {
			throw this.assertError(new UnknownIdentifierError(identifier));
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

	/**
	 * Asserts that the type conversion for the {@link exp} is valid.
	 * @param exp The expression to convert.
	 * @param type The type to convert to.
	 * @since 0.8.0
	 */
	public validConversion(exp: Expression<any, any>, type: KipperType): void {
		const originalType: KipperType = exp.getTypeSemanticData().evaluatedType;

		const viableConversion = (() => {
			// Check whether a supported pair of types exist.
			return kipperSupportedConversions.find((types) => types[0] === originalType && types[1] === type) !== undefined;
		})();
		// In case that the type are not the same and no conversion is possible, throw an error!
		if (!(originalType === type) && !viableConversion) {
			throw this.assertError(new InvalidConversionTypeError(originalType, type));
		}
	}
}
