import { Scope } from "./scope";
import type { CompilableASTNode, Declaration, RootASTNode, ScopeNode } from "../../../ast";

/**
 * Represents any scope that the user can access and write to in a Kipper program.
 *
 * This in practise means any scope except the universe scope.
 * @since 0.12.0
 */
export abstract class UserScope<VarT = any, FuncT = any, TypeT = any> extends Scope<VarT, FuncT, TypeT> {
	protected constructor(public readonly ctx: (ScopeNode<UserScope> & CompilableASTNode) | RootASTNode) {
		super();
	}

	/**
	 * Ensures that the given declaration is not already used in the current scope.
	 * @param identifier The identifier to check.
	 * @param declaration The declaration to check.
	 * @private
	 * @since 0.12.0
	 */
	protected ensureNotUsed(identifier: string, declaration: Declaration): void {
		this.ctx.programCtx.semanticCheck(declaration).identifierNotUsed(declaration, identifier, this);
	}
}
