/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @since 0.7.0
 */
import type { KipperReferenceable } from "../../const";
import type { KipperProgramContext } from "../../program-ctx";
import type { compilableNodeChild, compilableNodeParent, ScopeNode } from "../../ast";
import { KipperSemanticsAsserter } from "./err-handler";
import {
	LocalScope,
	Scope,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeVariableDeclaration,
} from "../symbol-table";
import {
	CompoundStatement,
	Expression,
	FunctionDeclaration,
	IdentifierPrimaryExpression,
	ReturnStatement,
	VariableDeclaration,
} from "../../ast";
import {
	BuiltInOverwriteError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByParameterError,
	IdentifierAlreadyUsedByVariableError,
	InvalidAssignmentError,
	InvalidGlobalError,
	MissingFunctionBodyError,
	ReturnStatementError,
	UndefinedConstantError,
	UndefinedReferenceError,
	UnknownReferenceError,
} from "../../../errors";

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
	 * Tries to find a reference for the given identifier and scope.
	 * @param identifier The identifier to search for.
	 * @param scopeCtx The scopeCtx to search in. If undefined, the global scope is used.
	 * @since 0.8.0
	 */
	protected getReference(identifier: string, scopeCtx?: ScopeNode<LocalScope>): KipperReferenceable | undefined {
		return (
			(scopeCtx // First try to fetch from the local scope if it is defined
				? scopeCtx.innerScope.getEntryRecursively(identifier)
				: this.programCtx.globalScope.getEntry(identifier)) ??
			this.programCtx.globalScope.getEntry(identifier) ?? // Fall back to looking globally
			this.programCtx.getBuiltInFunction(identifier) // Fall back to searching through built-in functions
		);
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownReferenceError}.
	 * @param identifier The identifier to fetch.
	 * @param localScopeNode The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public getExistingReference(identifier: string, localScopeNode?: ScopeNode<LocalScope>): KipperReferenceable {
		const ref = this.getReference(identifier, localScopeNode);
		if (!ref) {
			throw this.assertError(new UnknownReferenceError(identifier));
		}
		return ref;
	}

	/**
	 * Asserts that the passed {@link ref} is defined and has a value assigned that can be used.
	 * @param ref The reference that should be checked.
	 * @throws {UndefinedReferenceError} If the reference is undefined.
	 * @since 0.10.0
	 */
	public refTargetDefined(ref: KipperReferenceable): void {
		if (ref instanceof ScopeDeclaration && !ref.hasValue) {
			throw this.assertError(new UndefinedReferenceError(ref.identifier));
		}
	}

	/**
	 * Recursively ensures that the identifier does not overwrite any declarations in this scope or parent scopes.
	 * @param identifier The identifier to search for in this scope and its parent scopes.
	 * @param scopeCtx The context instance of the scope.
	 * @throws {IdentifierAlreadyUsedByVariableError} If the identifier is already used by a variable.
	 * @throws {IdentifierAlreadyUsedByFunctionError} If the identifier is already used by a function.
	 * @throws {IdentifierAlreadyUsedByParameterError} If the identifier is already used by a parameter.
	 * @throws {BuiltInOverwriteError} If the identifier is already in use by a built-in function.
	 * @since 0.10.0
	 */
	public identifierNotUsed(identifier: string, scopeCtx: Scope): void {
		const ref = scopeCtx.getEntryRecursively(identifier);
		if (ref) {
			if (ref instanceof ScopeVariableDeclaration) {
				throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
			} else if (ref instanceof ScopeFunctionDeclaration) {
				throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
			} else {
				// Currently, all other possible possibilities are narrowed to only being a parameter
				// This is due to the fact that no other classes inheriting from abstract class ScopeDeclaration are
				// implemented yet.
				throw this.assertError(new IdentifierAlreadyUsedByParameterError(identifier));
			}
		}
	}

	/**
	 * Asserts that the passed identifier does not exist as a built-in global.
	 * @param identifier The identifier to check.
	 * @throws {BuiltInOverwriteError} If the identifier is already used by a built-in global.
	 * @since 0.7.0
	 */
	public builtInNotDefined(identifier: string): void {
		if (this.programCtx.getBuiltInFunction(identifier)) {
			throw this.assertError(new BuiltInOverwriteError(identifier));
		}
	}

	/**
	 * Asserts that a new global with the passed identifier may be created.
	 * @param identifier The identifier to check.
	 * @throws {InvalidGlobalError} If the identifier is already used by a built-in global.
	 * @since 0.7.0
	 */
	public globalCanBeRegistered(identifier: string): void {
		let identifierAlreadyExists: boolean = this.programCtx.globalScope.getEntry(identifier) !== undefined;
		let globalAlreadyExists: boolean = this.programCtx.getBuiltInFunction(identifier) !== undefined;

		// If the identifier is already used or the global already exists, throw an error
		if (identifierAlreadyExists || globalAlreadyExists) {
			throw this.assertError(new InvalidGlobalError(identifier));
		}
	}

	/**
	 * Asserts that the passed expression is valid.
	 * @param leftExp The left-hand side of the assignment.
	 * @throws {InvalidAssignmentError} If the left-hand side of the assignment is invalid.
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
	 * Asserts that the variable declaration is valid.
	 * @param decl The variable declaration.
	 * @throws {UndefinedConstantError} If the variable is a constant and has no value assigned.
	 */
	public validVariableDeclaration(decl: VariableDeclaration): void {
		const semanticData = decl.getSemanticData();
		if (semanticData.storageType === "const" && !semanticData.isDefined) {
			throw this.assertError(new UndefinedConstantError("Constant declarations must have a value."));
		}
	}

	/**
	 * Asserts that the passed function body is valid.
	 * @param body The function body.
	 * @throws {MissingFunctionBodyError} If the function body is missing or invalid.
	 * @since 0.10.0
	 */
	public validFunctionBody(body: compilableNodeChild | undefined): void {
		if (!body || !(body instanceof CompoundStatement)) {
			throw this.assertError(new MissingFunctionBodyError());
		}
	}

	/**
	 * Searches for the parent of the specified return statement and asserts that it is a function.
	 * @param retStatement The return statement.
	 * @returns The parent function if found.
	 * @throws {ReturnStatementError} If the parent is not a function.
	 * @since 0.10.0
	 */
	public getReturnStatementParent(retStatement: ReturnStatement): FunctionDeclaration {
		// Move up the parent chain and continue as long as there are parents and the current parent is not a function
		// declaration. This is to ensure a return statement is always used inside a function.
		let currentParent: compilableNodeParent | undefined = retStatement.parent;
		while (!(currentParent instanceof FunctionDeclaration) && currentParent) {
			currentParent = currentParent.parent;
		}

		if (currentParent === undefined) {
			throw this.assertError(new ReturnStatementError());
		}
		return currentParent;
	}
}
