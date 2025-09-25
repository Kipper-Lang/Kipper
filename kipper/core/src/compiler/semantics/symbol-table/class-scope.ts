/**
 * File containing the definition for a class-specific scope that is bound to a {@link InterfaceDeclaration} and not
 * the global namespace.
 * @since 0.11.0
 */
import type {
	ClassConstructorDeclaration,
	ClassDeclaration,
	ClassMemberDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
} from "../../ast";
import type { LocalScope } from "./local-scope";
import type { GlobalScope } from "./global-scope";
import type { ScopeTypeDeclaration } from "./entry";
import { type ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";
import { KipperNotImplementedError } from "../../../errors";
import { UserScope } from "./base/user-scope";
import type { ClassScopeThisDeclaration } from "./entry/class-scope-this-declaration";

/**
 * A function-specific scope that is bound to a {@link FunctionDeclaration} and not the global namespace.
 * @since 0.11.0
 */
export class ClassScope extends UserScope {
	constructor(public readonly ctx: ClassDeclaration) {
		super(ctx);
	}

	/**
	 * The parent scope of this local scope. This will be either a {@link LocalScope} or a {@link GlobalScope} (unique
	 * to the {@link KipperProgramContext} class).
	 * @since 0.10.0
	 */
	public get parent(): LocalScope | GlobalScope {
		return <LocalScope | GlobalScope>this.ctx.scope;
	}

	public addConstructor(declaration: ClassConstructorDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.clsEnsureNotUsed(declaration);

		const scopeDeclaration = ScopeFunctionDeclaration.fromClassConstructorDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public override addFunction(declaration: ClassMethodDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.clsEnsureNotUsed(declaration);

		const scopeDeclaration = ScopeFunctionDeclaration.fromClassMethodDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: ClassPropertyDeclaration): ScopeVariableDeclaration {
		return this.addProperty(declaration);
	}

	public addProperty(declaration: ClassPropertyDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.clsEnsureNotUsed(declaration);

		const scopeDeclaration = ScopeVariableDeclaration.fromClassPropertyDeclaration(declaration);
		this._entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addType(declaration: any): ScopeTypeDeclaration {
		throw this.ctx.programCtx
			.semanticCheck(declaration)
			.notImplementedError(new KipperNotImplementedError("Local types have not been implemented yet."));
	}

	public clsEnsureNotUsed(declaration: ClassMemberDeclaration): void {
		// Only checks for other members, as they do not shadow parent scope members
		const identifier = declaration.getSemanticData().identifier;
		super.ensureNotUsed(identifier, declaration, true);
	}

	/**
	 * Gets the "this" keyword which is simply a reference to the class.
	 * @since 0.12.0
	 */
	public getThis(): ClassScopeThisDeclaration {
		return this.ctx.thisAliasDeclaration;
	}

	/**
	 * Gets the searched entry if it exists in any scope excluding the class scope itself, which requires explicit an
	 * explicit `this` keyword to be used (internally we will handle 'this' references as a member access of the 'this'
	 * type of the class).
	 *
	 * This is essential to allow the class to use common identifiers like `length` or `name` for properties and methods
	 * without having to conform to naming conflicts with parent scopes.
	 */
	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return identifier === "this" ? this.getThis() : undefined; // returns 'undefined' for direct references
	}

	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		const ref = this.getEntry(identifier);
		if (!ref) {
			return this.parent.getEntryRecursively(identifier);
		}
		return ref;
	}
}
