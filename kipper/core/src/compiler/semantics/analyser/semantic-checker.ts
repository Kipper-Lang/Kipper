/**
 * Kipper Semantic Checker, which asserts that semantic logic and cohesion is valid and throws errors in case that an
 * invalid use of tokens is detected.
 * @since 0.7.0
 */
import type { KipperCallable, KipperReferenceable } from "../../const";
import type { KipperProgramContext } from "../../program-ctx";
import type {
	CompilableNodeChild,
	CompilableNodeParent,
	Declaration,
	JumpStatement,
	ReturnStatement,
	VariableDeclaration,
} from "../../ast";
import {
	ClassMemberDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
	CompoundStatement,
	Expression,
	FunctionDeclaration,
	IdentifierPrimaryExpression,
	IterationStatement,
	LambdaPrimaryExpression,
	MemberAccessExpression,
} from "../../ast";
import { KipperSemanticsAsserter } from "./err-handler";
import type { Scope } from "../symbol-table";
import { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../symbol-table";
import {
	BuiltInOrInternalGeneratorFunctionNotFoundError,
	BuiltInOverwriteError,
	IdentifierAlreadyUsedByFunctionError,
	IdentifierAlreadyUsedByMemberError,
	IdentifierAlreadyUsedByParameterError,
	IdentifierAlreadyUsedByVariableError,
	InvalidAssignmentError,
	InvalidGlobalError,
	InvalidJumpStatementError,
	InvalidReturnStatementError,
	MissingFunctionBodyError,
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
	 * @param scope The scope to search in.
	 * @since 0.8.0
	 */
	protected getReference(identifier: string, scope: Scope): KipperReferenceable | undefined {
		return scope.getEntryRecursively(identifier);
	}

	/**
	 * Tries to fetch the function, and if it fails it will throw an {@link UnknownReferenceError}.
	 * @param identifier The identifier to fetch.
	 * @param scope The scope to search in.
	 * @since 0.7.0
	 */
	public getExistingReference(identifier: string, scope: Scope): KipperReferenceable {
		const ref = this.getReference(identifier, scope);
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
		if (!ref.hasValue) {
			throw this.assertError(new UndefinedReferenceError(ref.identifier));
		}
	}

	/**
	 * Recursively ensures that the identifier does not overwrite any declarations in this scope or parent scopes.
	 * @param declaration The declaration to check.
	 * @param identifier The identifier to search for in this scope and its parent scopes.
	 * @param scopeCtx The context instance of the scope.
	 * @throws {IdentifierAlreadyUsedByVariableError} If the identifier is already used by a variable.
	 * @throws {IdentifierAlreadyUsedByFunctionError} If the identifier is already used by a function.
	 * @throws {IdentifierAlreadyUsedByParameterError} If the identifier is already used by a parameter.
	 * @throws {BuiltInOverwriteError} If the identifier is already in use by a built-in function.
	 * @since 0.10.0
	 */
	public identifierNotUsed(declaration: Declaration, identifier: string, scopeCtx: Scope): void {
		// Ensure beforehand that also no built-in has the same identifier
		this.builtInNotDefined(identifier);

		const ref = scopeCtx.getEntryRecursively(identifier);
		if (ref) {
			if (ref instanceof ScopeVariableDeclaration) {
				if (ref.node instanceof ClassPropertyDeclaration) {
					if (declaration instanceof ClassMemberDeclaration) {
						throw this.assertError(new IdentifierAlreadyUsedByMemberError(identifier, "class"));
					}
					// If the declaration is a class property and the reference is a class property, throw an error
					// Otherwise we are dealing with a variable shadowing a class property, which is allowed, as the user already
					// needs to use "this" to access the class property
				} else {
					throw this.assertError(new IdentifierAlreadyUsedByVariableError(identifier));
				}
			} else if (ref instanceof ScopeFunctionDeclaration) {
				if (ref.node instanceof ClassMethodDeclaration) {
					if (declaration instanceof ClassMemberDeclaration) {
						throw this.assertError(new IdentifierAlreadyUsedByMemberError(identifier, "class"));
					}
					// If the declaration is a class property and the reference is a class property, throw an error
					// Otherwise we are dealing with a variable shadowing a class method, which is allowed, as the user already
					// needs to use "this" to access the class method
				} else {
					throw this.assertError(new IdentifierAlreadyUsedByFunctionError(identifier));
				}
			} else {
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
		if (this.programCtx.universeScope.getEntry(identifier) !== undefined) {
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
		let identifierAlreadyExists: boolean = this.programCtx.universeScope.getEntry(identifier) !== undefined;
		let globalAlreadyExists: boolean =
			this.programCtx.getBuiltInFunction(identifier) !== undefined ||
			this.programCtx.getBuiltInVariable(identifier) !== undefined;

		// If the identifier is already used or the global already exists, throw an error
		if (identifierAlreadyExists || globalAlreadyExists) {
			throw this.assertError(new InvalidGlobalError(identifier));
		}
	}

	/**
	 * Asserts that the passed identifier is a valid built-in global that has a generator function in the
	 * {@link this.programCtx.target.builtInGenerator BuiltInGenerator} of the target.
	 * @param identifier The identifier to check.
	 * @throws {BuiltInOrInternalGeneratorFunctionNotFoundError} If there is no generator function for the passed
	 * identifier.
	 * @since 0.10.0
	 */
	public globalCanBeGenerated(identifier: string): void {
		const generator = Reflect.get(this.programCtx.target.builtInGenerator, identifier);
		if (generator === undefined) {
			throw this.assertError(new BuiltInOrInternalGeneratorFunctionNotFoundError(identifier));
		}
	}

	/**
	 * Asserts that the passed expression is valid.
	 * @param leftExp The left-hand side of the assignment.
	 * @throws {InvalidAssignmentError} If the left-hand side of the assignment is invalid.
	 * @since 0.7.0
	 */
	public validAssignment(leftExp: Expression): void {
		if (!(leftExp instanceof IdentifierPrimaryExpression) && !(leftExp instanceof MemberAccessExpression)) {
			throw this.assertError(
				new InvalidAssignmentError("The left-hand side of an expression must be an identifier or a property access."),
			);
		} else if (leftExp instanceof MemberAccessExpression && leftExp.getSemanticData().accessType === "slice") {
			throw this.assertError(new InvalidAssignmentError("Slices are not assignable."));
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
	public validFunctionBody(body: CompilableNodeChild | undefined): void {
		if (!body || !(body instanceof CompoundStatement || body instanceof Expression)) {
			throw this.assertError(new MissingFunctionBodyError());
		}
	}

	/**
	 * Searches for the parent of the specified return statement and asserts that it is a function.
	 * @param retStatement The return statement.
	 * @throws {InvalidReturnStatementError} If the parent is not a function.
	 * @returns The parent function if found.
	 * @since 0.10.0
	 */
	public getReturnStatementParent(retStatement: ReturnStatement): KipperCallable {
		// Move up the parent chain and continue as long as there are parents and the current parent is not a function
		// declaration. This is to ensure a return statement is always used inside a function.
		let currentParent: CompilableNodeParent | undefined = retStatement.parent;
		while (
			!(
				currentParent instanceof FunctionDeclaration ||
				currentParent instanceof LambdaPrimaryExpression ||
				currentParent instanceof ClassMethodDeclaration
			) &&
			currentParent
		) {
			currentParent = currentParent.parent;
		}

		if (currentParent === undefined) {
			throw this.assertError(new InvalidReturnStatementError());
		}
		return currentParent;
	}

	/**
	 * Searches for the parent of the specified jump statement (either 'break' or 'continue' and asserts that it is an
	 * iteration statement.)
	 * @param jmpStatement The jump statement.
	 * @throws {InvalidJumpStatementError} If the parent is not an iteration statement.
	 * @returns The parent iteration statement if found.
	 * @since 0.10.0
	 */
	public getJumpStatementParent(jmpStatement: JumpStatement): IterationStatement {
		// Move up the parent chain and continue as long as there are parents and the current parent is not a function
		// declaration. This is to ensure a return statement is always used inside a function.
		let currentParent: CompilableNodeParent | undefined = jmpStatement.parent;
		while (!(currentParent instanceof IterationStatement) && currentParent) {
			currentParent = currentParent.parent;
		}

		if (currentParent === undefined) {
			throw this.assertError(new InvalidJumpStatementError());
		}
		return currentParent;
	}
}
