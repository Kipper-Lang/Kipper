/**
 * File containing the definition for a local scope that is bound to a {@link CompoundStatement} and not the global
 * namespace.
 * @since 0.8.0
 */
import type {
	CompilableASTNode,
	FunctionDeclaration,
	ScopeNode,
	TypeDeclaration,
	VariableDeclaration,
} from "../../ast/";
import type { GlobalScope } from "./global-scope";
import { KipperNotImplementedError } from "../../../errors";
import type { ScopeDeclaration, ScopeFunctionDeclaration, ScopeTypeDeclaration } from "./entry";
import { ScopeVariableDeclaration } from "./entry";
import { Scope } from "./base/scope";

/**
 * A scope that is bound to a {@link CompoundStatement} and not the global namespace.
 * @since 0.8.0
 */
export class LocalScope extends Scope<VariableDeclaration, FunctionDeclaration, TypeDeclaration> {
	constructor(public ctx: ScopeNode<LocalScope> & CompilableASTNode) {
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

	public addType(declaration: TypeDeclaration): ScopeTypeDeclaration {
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
