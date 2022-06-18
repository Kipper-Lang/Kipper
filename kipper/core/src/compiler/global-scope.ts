/**
 * The global scope of a {@link KipperProgramContext}, which contains the global variables and functions of a
 * Kipper program.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { Scope } from "./scope";
import { FunctionDeclaration, VariableDeclaration } from "./semantics";
import { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./scope-declaration";
import type { KipperProgramContext } from "./program-ctx";
import { BuiltInFunction } from "./runtime-built-ins";

/**
 * The global scope of a {@link KipperProgramContext}, which contains the global variables and functions of a
 * Kipper program.
 * @since 0.8.0
 */
export class GlobalScope extends Scope {
	protected readonly _localFunctions: Array<ScopeFunctionDeclaration>;
	protected readonly _localVariables: Array<ScopeVariableDeclaration>;
	protected readonly _builtInFunctions: Array<BuiltInFunction>;

	constructor(public programCtx: KipperProgramContext) {
		super();
		this._localVariables = [];
		this._localFunctions = [];
		this._builtInFunctions = [];
	}

	/**
	 * All 'local' functions in the global scope. This also includes built-in functions.
	 * @since 0.8.0
	 */
	public get localFunctions(): Array<ScopeFunctionDeclaration> {
		return this._localFunctions;
	}

	/**
	 * All 'local' variables in the global scope.
	 * @since 0.8.0
	 */
	public get localVariables(): Array<ScopeVariableDeclaration> {
		return this._localVariables;
	}

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other definitions
		this.programCtx.semanticCheck(declaration).builtInNotDefined(identifier);
		this.programCtx.semanticCheck(declaration).variableIdentifierNotDeclared(identifier);
		this.programCtx.semanticCheck(declaration).functionIdentifierNotDefined(identifier);

		const scopeDeclaration = new ScopeFunctionDeclaration(declaration);
		this.localFunctions.push(scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other definitions
		this.programCtx.semanticCheck(declaration).builtInNotDefined(identifier);
		this.programCtx.semanticCheck(declaration).functionIdentifierNotDeclared(identifier);
		this.programCtx.semanticCheck(declaration).variableIdentifierNotDeclared(identifier);

		const scopeDeclaration = new ScopeVariableDeclaration(declaration);
		this.localVariables.push(scopeDeclaration);
		return scopeDeclaration;
	}

	public getFunction(identifier: string): ScopeFunctionDeclaration | undefined {
		return this.localFunctions.find((i) => i.identifier === identifier);
	}

	public getVariable(identifier: string): ScopeVariableDeclaration | undefined {
		return this.localVariables.find((i) => i.identifier === identifier);
	}
}
