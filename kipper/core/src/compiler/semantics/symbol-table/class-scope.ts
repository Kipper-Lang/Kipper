/**
 * File containing the definition for a class-specific scope that is bound to a {@link InterfaceDeclaration} and not
 * the global namespace.
 * @since 0.11.0
 */
import type {
	ClassConstructorDeclaration,
	ClassDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
} from "../../ast";
import type { LocalScope } from "./local-scope";
import type { GlobalScope } from "./global-scope";
import type { ScopeTypeDeclaration } from "./entry";
import { type ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";
import { Scope } from "./base";
import { KipperNotImplementedError } from "../../../errors";

/**
 * A function-specific scope that is bound to a {@link FunctionDeclaration} and not the global namespace.
 * @since 0.11.0
 */
export class ClassScope extends Scope {
	constructor(public ctx: ClassDeclaration) {
		super();
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

		// Ensuring that the declaration does not overwrite other declarations
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);

		const scopeDeclaration = ScopeFunctionDeclaration.fromClassConstructorDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public override addFunction(declaration: ClassMethodDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);

		const scopeDeclaration = ScopeFunctionDeclaration.fromClassMethodDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: ClassPropertyDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);

		const scopeDeclaration = ScopeVariableDeclaration.fromClassPropertyDeclaration(declaration);
		this._entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addType(declaration: any): ScopeTypeDeclaration {
		throw this.ctx.programCtx
			.semanticCheck(declaration)
			.notImplementedError(new KipperNotImplementedError("Local types have not been implemented yet."));
	}

	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.entries.get(identifier);
	}

	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		const localRef = this.getEntry(identifier);
		if (!localRef) {
			return this.parent.getEntryRecursively(identifier);
		}
		return localRef;
	}
}
