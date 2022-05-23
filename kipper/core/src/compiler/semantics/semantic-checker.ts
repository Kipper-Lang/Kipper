import { CompoundStatement, Expression, ExpressionSemantics, IdentifierPrimaryExpression } from "./tokens";
import {
	BuiltInOverwriteError,
	FunctionDefinitionAlreadyExistsError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByVariableError,
	InvalidArithmeticOperationError,
	InvalidAssignmentError,
	InvalidGlobalError,
	KipperNotImplementedError,
	UndefinedIdentifierError,
	UnknownIdentifierError,
	VariableDefinitionAlreadyExistsError,
	InvalidAmountOfArgumentsError,
} from "../../errors";
import {
	KipperArithmeticOperator,
	KipperFunction,
	kipperPlusOperator,
	KipperRef,
	kipperStrLikeTypes,
	KipperType,
} from "./const";
import { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./scope-declaration";
import { KipperProgramContext } from "../program-ctx";
import { KipperAsserter } from "./asserter";

/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @since 0.7.0
 */
export class KipperSemanticChecker extends KipperAsserter {
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
	 * Checks whether an identifier is declared. If the variable is defined it will also pass.
	 * @param identifier The identifier to check for.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public identifierIsDeclared(identifier: string, scope?: CompoundStatement): void {
		const val = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalIdentifier(identifier);
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
	 * Checks whether an identifier is defined. If the variable is declared it will also fail!
	 * @param identifier The identifier to check for.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public identifierIsDefined(identifier: string, scope?: CompoundStatement): void {
		const val = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalIdentifier(identifier);
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
		if (this.programCtx.getGlobalFunction(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been declared yet.
	 * @param identifier The identifier of the variable.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public variableIdentifierNotDeclared(identifier: string, scope?: CompoundStatement): void {
		const check = (v: { identifier: string }) => v instanceof ScopeVariableDeclaration && v.identifier === identifier;

		// Always check in the global scope
		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}

		// Also check in the local scope if it was passed
		if (scope !== undefined && scope?.localScope.find(check)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
		}
	}

	/**
	 * Asserts that the passed variable identifier has not been defined yet.
	 * @param identifier The identifier to check for in the global scope.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public variableIdentifierNotDefined(identifier: string, scope?: CompoundStatement): void {
		const check = (v: { identifier: string }) => {
			// Return true only if the identifier match and the variable is DEFINED
			return v instanceof ScopeVariableDeclaration && v.identifier === identifier && v.isDefined;
		};

		// Always check in the global scope
		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new VariableDefinitionAlreadyExistsError(identifier));
		}

		// Also check in the local scope if it was passed
		if (scope !== undefined && scope?.localScope.find(check)) {
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

		if (this.programCtx.globalScope.find(check)) {
			throw this.assertError(new FunctionDefinitionAlreadyExistsError(identifier));
		}
	}

	/**
	 * Asserts that the passed type allows the arithmetic operation.
	 * @param exp1 The first expression.
	 * @param exp2 The second expression.
	 * @param op The arithmetic operation that is performed.
	 * @since 0.7.0
	 */
	public arithmeticExpressionValid(
		exp1: Expression<ExpressionSemantics>,
		exp2: Expression<ExpressionSemantics>,
		op: KipperArithmeticOperator,
	): void {
		const exp1Type = exp1.ensureSemanticDataExists().evaluatedType;
		const exp2Type = exp2.ensureSemanticDataExists().evaluatedType;
		if (exp1Type !== exp2Type) {
			// String-like types can use '+' to concat strings
			if (
				op === kipperPlusOperator &&
				kipperStrLikeTypes.find((t: KipperType) => t === exp1Type) &&
				kipperStrLikeTypes.find((t: KipperType) => t === exp2Type)
			) {
				return;
			}

			// If types are not matching, and they are not of string-like types, throw an error
			throw this.assertError(new InvalidArithmeticOperationError(exp1Type, exp2Type));
		}
	}

	/**
	 * Asserts that the passed identifier does not exist as a built-in global.
	 * @param identifier The identifier to check.
	 * @since 0.7.0
	 */
	public builtInNotDefined(identifier: string): void {
		if (this.programCtx.builtInGlobals.find((val) => val.identifier === identifier)) {
			throw this.assertError(new BuiltInOverwriteError(identifier));
		}
	}

	/**
	 * Asserts that a new global with the passed identifier may be created.
	 * @param identifier The identifier to check.
	 * @since 0.7.0
	 */
	public globalCanBeRegistered(identifier: string): void {
		let identifierAlreadyExists: boolean =
			this.programCtx.globalScope.find((val) => val.identifier == identifier) !== undefined;
		let globalAlreadyExists: boolean =
			this.programCtx.builtInGlobals.find((val) => val.identifier == identifier) !== undefined;

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
	public validAssignment(leftExp: Expression<any>): void {
		if (!(leftExp instanceof IdentifierPrimaryExpression)) {
			throw this.assertError(
				new InvalidAssignmentError("The left-hand side of an expression must be an identifier or a property access."),
			);
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public getExistingReference(identifier: string, scope?: CompoundStatement): KipperRef {
		const ref =
			(scope ? scope.getVariableRecursively(identifier) : undefined) ?? this.programCtx.getGlobalIdentifier(identifier);
		if (ref === undefined) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		} else {
			return ref;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @param scope The scope to also check besides the global scope. If undefined, then it will only the global scope
	 * of the {@link KipperProgramContext program}.
	 * @since 0.7.0
	 */
	public getExistingVariable(identifier: string, scope?: CompoundStatement): ScopeVariableDeclaration {
		const variable = scope ? scope.getVariableRecursively(identifier) : this.programCtx.getGlobalVariable(identifier);
		if (variable === undefined) {
			throw this.assertError(new UnknownIdentifierError(identifier));
		} else {
			return variable;
		}
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownFunctionIdentifierError}.
	 * @param identifier The identifier to fetch.
	 * @since 0.7.0
	 */
	public getExistingFunction(identifier: string): KipperFunction {
		const func = this.programCtx.getGlobalFunction(identifier);
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
	public validFunctionCallArguments(func: KipperFunction, args: Array<Expression<any>>): void {
		if (func.args.length != args.length) {
			throw this.assertError(new InvalidAmountOfArgumentsError(func.identifier, func.args.length, args.length));
		}
	}
}
