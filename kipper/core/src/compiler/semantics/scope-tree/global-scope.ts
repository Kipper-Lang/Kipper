/**
 * File containing the definition for a global scope of a {@link KipperProgramContext}, which contains the global
 * variables and functions of a Kipper program.
 * @since 0.8.0
 */
import type { KipperProgramContext } from "../../program-ctx";
import type { BuiltInFunction } from "../../runtime-built-ins";
import { FunctionDeclaration, VariableDeclaration } from "../index";
import { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";
import { Scope } from "./scope";

/**
 * The global scope of a {@link KipperProgramContext}, which contains the global variables and functions of a
 * Kipper program.
 * @since 0.8.0
 */
export class GlobalScope extends Scope {
	protected readonly _functions: Array<ScopeFunctionDeclaration>;
	protected readonly _variables: Array<ScopeVariableDeclaration>;
	protected readonly _builtInFunctions: Array<BuiltInFunction>;

	constructor(public programCtx: KipperProgramContext) {
		super();
		this._variables = [];
		this._functions = [];
		this._builtInFunctions = [];
	}

	/**
	 * All functions in this global scope. This also includes built-in functions.
	 * @since 0.8.0
	 */
	public get functions(): Array<ScopeFunctionDeclaration> {
		return this._functions;
	}

	/**
	 * All variables in this global scope.
	 * @since 0.8.0
	 */
	public get variables(): Array<ScopeVariableDeclaration> {
		return this._variables;
	}

	/**
	 * The parent scope of this global scope. This is always `undefined`.
	 * @since 0.10.0
	 */
	public get parent(): undefined {
		return undefined;
	}

	public addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other definitions
		this.programCtx.semanticCheck(declaration).builtInNotDefined(identifier);
		this.programCtx.semanticCheck(declaration).variableIdentifierNotDeclared(identifier);
		this.programCtx.semanticCheck(declaration).functionIdentifierNotDeclared(identifier);

		const scopeDeclaration = new ScopeFunctionDeclaration(declaration);
		this.functions.push(scopeDeclaration);
		return scopeDeclaration;
	}

	public addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration {
		const identifier = declaration.getSemanticData().identifier;

		// Ensuring that the declaration does not overwrite other definitions
		this.programCtx.semanticCheck(declaration).builtInNotDefined(identifier);
		this.programCtx.semanticCheck(declaration).functionIdentifierNotDeclared(identifier);
		this.programCtx.semanticCheck(declaration).variableIdentifierNotDeclared(identifier);

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
		return this.getVariable(identifier) ?? this.getFunction(identifier);
	}

	public getReferenceRecursively(identifier: string): ScopeDeclaration | undefined {
		// No recursion, since the global scope is the top-most scope
		return this.getReference(identifier);
	}
}
