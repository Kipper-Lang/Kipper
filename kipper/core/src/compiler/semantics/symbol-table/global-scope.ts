/**
 * File containing the definition for a global scope of a {@link KipperProgramContext}, which contains the global
 * variables and functions of a Kipper program.
 * @since 0.8.0
 */
import type { ScopeDeclaration } from "./entry";
import { ScopeFunctionDeclaration, ScopeTypeDeclaration, ScopeVariableDeclaration } from "./entry";
import type { FunctionDeclaration, RootASTNode, TypeDeclaration, VariableDeclaration } from "../../ast";
import type { UniverseScope } from "./universe-scope";
import { UserScope } from "./base/user-scope";

/**
 * The global scope of a {@link KipperProgramContext}, which contains the global variables and functions of a
 * Kipper program.
 * @since 0.8.0
 */
export class GlobalScope extends UserScope<VariableDeclaration, FunctionDeclaration, TypeDeclaration> {
	constructor(
		public readonly ctx: RootASTNode,
		public readonly universe: UniverseScope,
	) {
		super(ctx);
	}

	/**
	 * The parent scope of this global scope. This is always `undefined`.
	 * @since 0.10.0
	 */
	public parent = this.universe;

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.ensureNotUsed(identifier, declaration);

		const scopeDeclaration = ScopeFunctionDeclaration.fromFunctionDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.ensureNotUsed(identifier, declaration);

		const scopeDeclaration = ScopeVariableDeclaration.fromVariableDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addType(declaration: TypeDeclaration): ScopeTypeDeclaration {
		const identifier = declaration.getSemanticData().identifier;
		this.ensureNotUsed(identifier, declaration);

		// Depending on the type of the argument, create either a built-in type or a custom type
		const scopeDeclaration = ScopeTypeDeclaration.fromTypeDeclaration(declaration);

		this.entries.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.entries.get(identifier);
	}

	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		return this.getEntry(identifier) ?? this.parent.getEntryRecursively(identifier);
	}
}
