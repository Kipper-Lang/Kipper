/**
 * File containing the definition for a function-specific scope that is bound to a {@link FunctionDeclaration} and not
 * the global namespace.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type { CompoundStatement } from "./semantics";
import { ParameterDeclaration } from "./semantics";
import { ScopeParameterDeclaration } from "./scope-declaration";
import { LocalScope } from "./local-scope";

/**
 * A function-specific scope that is bound to a {@link FunctionDeclaration} and not the global namespace.
 * @since 0.10.0
 */
export class FunctionScope extends LocalScope {
	protected readonly _arguments: Array<ScopeParameterDeclaration>;

	constructor(public ctx: CompoundStatement) {
		super(ctx);
		this._arguments = [];
	}

	/**
	 * All local arguments in this scope, which are only available in function scopes.
	 * @since 0.10.0
	 */
	public get arguments(): Array<ScopeParameterDeclaration> {
		return this._arguments;
	}

	public addArgument(declaration: ParameterDeclaration): ScopeParameterDeclaration {
		const scopeDeclaration = new ScopeParameterDeclaration(declaration);
		this.arguments.push(scopeDeclaration);
		return scopeDeclaration;
	}

	/**
	 * Searches for an argument with the passed identifier in the current scope.
	 * @param identifier The identifier of the argument.
	 * @since 0.10.0
	 */
	public getArgument(identifier: string): ScopeParameterDeclaration | undefined {
		return this.arguments.find((i) => i.identifier === identifier);
	}
}
