import type { CompoundStatement, FunctionDeclaration, VariableDeclaration } from "./semantics";
import { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./scope-declaration";
import { KipperNotImplementedError } from "../errors";
import { Scope } from "./scope";

/**
 * A scope that is bound to a {@link CompoundStatement} and not the global namespace.
 * @since 0.8.0
 */
export class LocalScope extends Scope {
	constructor(public ctx: CompoundStatement) {
		super();
	}

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		throw this.ctx.programCtx
			.semanticCheck(this.ctx)
			.notImplementedError(new KipperNotImplementedError("Local functions have not been implemented yet."));
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other definitions
		this.ctx.programCtx.semanticCheck(this.ctx).variableIdentifierNotDeclared(identifier, this.ctx);

		const scopeDeclaration = new ScopeVariableDeclaration(declaration);
		this.variables.push(scopeDeclaration);
		return scopeDeclaration;
	}

	public getFunction(identifier: string): ScopeFunctionDeclaration | undefined {
		throw this.ctx.programCtx
			.semanticCheck(this.ctx)
			.notImplementedError(new KipperNotImplementedError("Local functions have not been implemented yet."));
	}

	public getVariable(identifier: string): ScopeVariableDeclaration | undefined {
		return this.variables.find((i) => i.identifier === identifier);
	}

	/**
	 * Tries to fetch the passed identifier in the current scope and all parent scopes recursively.
	 * @since 0.6.0
	 */
	public getVariableRecursively(identifier: string): ScopeVariableDeclaration | undefined {
		const localVar = this.getVariable(identifier);
		if (!localVar) {
			// If the scope of the ctx (Compound statement) is another local scope, then go upwards recursively again.
			if (this.ctx.scope instanceof LocalScope) {
				return this.ctx.scope.getVariableRecursively(identifier);
			} else {
				// Fetching from the global scope
				return this.ctx.scope.getVariable(identifier);
			}
		}
		return localVar;
	}
}
