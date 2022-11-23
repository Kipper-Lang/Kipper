/**
 * File containing the definition for a local scope that is bound to a {@link CompoundStatement} and not the global
 * namespace.
 * @since 0.8.0
 */
import type { FunctionDeclaration, VariableDeclaration } from "../index";
import type { ScopeNode } from "../symbol-table/scope-node";
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

		// Ensuring that the declaration does not overwrite other definitions
		// Using 'declaration' as a context, as that's the origin of the error, not the scope
		this.ctx.programCtx.semanticCheck(declaration).variableIdentifierNotDeclared(identifier, this.ctx);

		const scopeDeclaration = new ScopeVariableDeclaration(declaration);
		this.variables.push(scopeDeclaration);
		return scopeDeclaration;
	}

	public getFunction(identifier: string): ScopeFunctionDeclaration | undefined {
		return this.functions.find((i) => i.identifier === identifier);
	}

	public getVariable(identifier: string): ScopeVariableDeclaration | undefined {
		return this.variables.find((i) => i.identifier === identifier);
	}

	public getReference(identifier: string): ScopeDeclaration | undefined {
		return this.getFunction(identifier) ?? this.getVariable(identifier);
	}

	public getReferenceRecursively(identifier: string): ScopeDeclaration | undefined {
		const localRef = this.getReference(identifier);
		if (!localRef) {
			// If the scope of the ctx (Compound statement) is another local scope, then go upwards recursively again.
			if (this.ctx.scope instanceof LocalScope) {
				return this.parent.getReferenceRecursively(identifier);
			} else {
				// Fetching from the global scope
				return this.parent.getReference(identifier);
			}
		}
		return localRef;
	}
}
