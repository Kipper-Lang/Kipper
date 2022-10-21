/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */

import type { KipperReferenceable } from "../const";
import type { KipperProgramContext } from "../../program-ctx";
import type { compilableNodeChild, compilableNodeParent, SemanticData, TypeData } from "../../parser";
import { KipperSemanticsAsserter } from "../semantics-asserter";
import {
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
} from "../../symbol-table";
import {
	CompoundStatement,
	Expression,
	FunctionDeclaration,
	IdentifierPrimaryExpression,
	IfStatement,
	ReturnStatement,
	Statement,
	VariableDeclaration,
} from "../language";
import {
	BuiltInOverwriteError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByParameterError,
	IdentifierAlreadyUsedByVariableError,
	IncompleteReturnsInCodePathsError,
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
	protected getReference(identifier: string, scopeCtx?: CompoundStatement): KipperReferenceable | undefined {
		return (
			(scopeCtx // First try to fetch from the local scope if it is defined
				? scopeCtx.localScope.getReferenceRecursively(identifier)
				: this.programCtx.globalScope.getReference(identifier)) ??
			this.programCtx.globalScope.getReference(identifier) ?? // Fall back to looking globally
			this.programCtx.getBuiltInFunction(identifier) // Fall back to searching through built-in functions
		);
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownReferenceError}.
	 * @param identifier The identifier to fetch.
	 * @param scopeCtx The ctx of the local scope, which will be also checked if it is defined.
	 * @since 0.7.0
	 */
	public getExistingReference(identifier: string, scopeCtx?: CompoundStatement): KipperReferenceable {
		const ref = this.getReference(identifier, scopeCtx);
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
	 * Asserts that the passed parameter identifier has not been used yet (both declarations or definitions).
	 * @param identifier The identifier to check.
	 * @param scopeCtx The ctx of the local scope, which will be also used for the reference check.
	 * @throws {IdentifierAlreadyUsedByVariableError} If the identifier is already used by a variable.
	 * @throws {IdentifierAlreadyUsedByFunctionError} If the identifier is already used by a function.
	 * @throws {IdentifierAlreadyUsedByParameterError} If the identifier is already used by a parameter.
	 * @throws {BuiltInOverwriteError} If the identifier is already in use by a built-in function.
	 */
	public identifierUnused(identifier: string, scopeCtx?: CompoundStatement): void {
		// Check if the identifier is available and throw an appropriate error if it is not
		const ref = this.getReference(identifier, scopeCtx);
		if (ref) {
			if (ref instanceof ScopeVariableDeclaration) {
				throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
			} else if (ref instanceof ScopeFunctionDeclaration) {
				throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
			} else if (ref instanceof ScopeParameterDeclaration) {
				throw this.assertError(new IdentifierAlreadyUsedByParameterError(identifier));
			} else {
				throw this.assertError(new BuiltInOverwriteError(identifier));
			}
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
		if (scopeCtx && scopeCtx.localScope.getReferenceRecursively(identifier)) {
			throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
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
		let identifierAlreadyExists: boolean = this.programCtx.globalScope.getReference(identifier) !== undefined;
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
	 * Ensures that the body of the {@link func} has valid return statements and all code paths return a value.
	 * @param func The function where the body should be checked.
	 * @since 0.10.0
	 */
	public validReturnCodePathsInFunctionBody(func: FunctionDeclaration): void {
		const semanticData = func.getSemanticData();

		// If the function return type is not 'void' then there must be a return statement in all code paths
		// Note: We will ignore types here, since the return statements themselves with check later if they have the proper
		// return type.
		if (semanticData.returnType.identifier !== "void") {
			// Recursively check all code paths to ensure all return a value.
			const checkChildrenCodePaths = (parent: Statement<SemanticData, TypeData>): boolean => {
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
