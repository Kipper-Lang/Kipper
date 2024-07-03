/**
 * File containing the definition for a lambda-specific scope that is bound to a {@link LambdaExpression} and not
 * the global namespace.
 * @since 0.11.0
 */
import { LocalScope } from "./local-scope";
import type { ScopeDeclaration } from "./entry";
import { ScopeParameterDeclaration } from "./entry";
import type { LambdaExpression, ParameterDeclaration } from "../../ast";

export class LambdaScope extends LocalScope {
	protected readonly _arguments: Map<string, ScopeParameterDeclaration>;

	constructor(public ctx: LambdaExpression) {
		super(ctx);
		this._arguments = new Map<string, ScopeParameterDeclaration>();
	}

	public get arguments(): Map<string, ScopeParameterDeclaration> {
		return this._arguments;
	}

	public addArgument(declaration: ParameterDeclaration): ScopeParameterDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);
		const scopeDeclaration = new ScopeParameterDeclaration(declaration);
		this.arguments.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public getArgument(identifier: string): ScopeParameterDeclaration | undefined {
		return this.arguments.get(identifier);
	}

	public override getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.getArgument(identifier) ?? this.entries.get(identifier);
	}

	public override getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		const localRef = this.getEntry(identifier);
		if (!localRef) {
			// If the scope of the ctx (Compound statement) is another local scope, then go upwards recursively again.
			if (this.ctx.scope instanceof LocalScope) {
				return this.ctx.scope.getEntryRecursively(identifier);
			} else {
				// Fetching from the global scope
				return this.ctx.scope.getEntry(identifier);
			}
		}
		return localRef;
	}
}
