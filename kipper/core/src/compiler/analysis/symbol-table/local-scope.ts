/**
 * File containing the definition for a local scope that is bound to a {@link CompoundStatement} and not the global
 * namespace.
 * @since 0.8.0
 */
import type { FunctionDeclaration, ScopeNode, VariableDeclaration } from "../../ast/";
import type { GlobalScope } from "./global-scope";
import { KipperNotImplementedError } from "../../../errors";
import { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";
import { Scope } from "./scope";

/**
 * A scope that is bound to a {@link CompoundStatement} and not the global namespace.
 * @since 0.8.0
 */
export class LocalScope extends Scope {
	constructor(public ctx: ScopeNode<LocalScope>) {
		super();
	}

	/**
	 * The parent scope of this local scope. This will be either a {@link LocalScope} or a {@link GlobalScope} (unique
	 * to the {@link KipperProgramContext} class).
	 * @since 0.10.0
	 */
	public get parent(): LocalScope | GlobalScope {
		return this.ctx.scope;
	}

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		throw this.ctx.programCtx
			.semanticCheck(declaration)
			.notImplementedError(new KipperNotImplementedError("Local functions have not been implemented yet."));
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);

		const scopeDeclaration = new ScopeVariableDeclaration(declaration);
		this._entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.entries.get(identifier);
	}

	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		const localRef = this.getEntry(identifier);
		if (!localRef) {
			// If the scope of the ctx (Compound statement) is another local scope, then go upwards recursively again.
			if (this.ctx.scope instanceof LocalScope) {
				return this.parent.getEntryRecursively(identifier);
			} else {
				// Fetching from the global scope
				return this.parent.getEntry(identifier);
			}
		}
		return localRef;
	}
}
