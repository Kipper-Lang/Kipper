/**
 * File containing the definition for a global scope of a {@link KipperProgramContext}, which contains the global
 * variables and functions of a Kipper program.
 * @since 0.8.0
 */
import type { KipperProgramContext } from "../../program-ctx";
import type { FunctionDeclaration, TypeDeclaration, VariableDeclaration } from "../../ast";
import type { ScopeDeclaration } from "./entry";
import { ScopeFunctionDeclaration, ScopeTypeDeclaration, ScopeVariableDeclaration } from "./entry";
import { Scope } from "./scope";

/**
 * The global scope of a {@link KipperProgramContext}, which contains the global variables and functions of a
 * Kipper program.
 * @since 0.8.0
 */
export class GlobalScope extends Scope {
	constructor(public programCtx: KipperProgramContext) {
		super();
	}

	/**
	 * The parent scope of this global scope. This is always `undefined`.
	 * @since 0.10.0
	 */
	public parent = undefined;

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this.programCtx.globalScope);

		const scopeDeclaration = new ScopeFunctionDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this.programCtx.globalScope);

		const scopeDeclaration = new ScopeVariableDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public addType(declaration: TypeDeclaration): ScopeTypeDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other declarations
		this.programCtx.semanticCheck(declaration).identifierNotUsed(identifier, this.programCtx.globalScope);

		const scopeDeclaration = new ScopeTypeDeclaration(declaration);
		this.entries.set(identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.entries.get(identifier);
	}

	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		// No recursion, since the global scope is the top-most scope
		return this.getEntry(identifier);
	}
}
