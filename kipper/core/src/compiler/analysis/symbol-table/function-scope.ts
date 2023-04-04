/**
 * File containing the definition for a function-specific scope that is bound to a {@link FunctionDeclaration} and not
 * the global namespace.
 * @since 0.8.0
 */
import type { ParameterDeclaration, FunctionDeclaration } from "../../ast";
import { ScopeDeclaration, ScopeParameterDeclaration } from "./entry";
import { LocalScope } from "./local-scope";

/**
 * A function-specific scope that is bound to a {@link FunctionDeclaration} and not the global namespace.
 * @since 0.10.0
 */
export class FunctionScope extends LocalScope {
	protected readonly _arguments: Map<string, ScopeParameterDeclaration>;

	constructor(public ctx: FunctionDeclaration) {
		super(ctx);
		this._arguments = new Map<string, ScopeParameterDeclaration>();
	}

	/**
	 * All local arguments in this scope, which were defined by the {@link ctx parent function}.
	 *
	 * These are available as usual to all children scopes.
	 * @since 0.10.0
	 */
	public get arguments(): Map<string, ScopeParameterDeclaration> {
		return this._arguments;
	}

	/**
	 * Adds a new argument declaration to the {@link arguments list of arguments}.
	 * @param declaration The argument declaration to add.
	 * @returns The generated {@link ScopeParameterDeclaration scope declaration}.
	 * @since 0.10.0
	 */
	public addArgument(declaration: ParameterDeclaration): ScopeParameterDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this);

		const scopeDeclaration = new ScopeParameterDeclaration(declaration);
		this.arguments.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	/**
	 * Searches for an argument with the passed identifier in the current scope.
	 * @param identifier The identifier of the argument.
	 * @since 0.10.0
	 */
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
