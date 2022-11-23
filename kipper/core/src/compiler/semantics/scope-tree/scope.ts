/**
 * A scope in a Kipper program, which contains {@link ScopeVariableDeclaration variables} and
 * {@link ScopeFunctionDeclaration functions}.
 * @since 0.8.0
 */
import type { FunctionDeclaration, VariableDeclaration } from "../index";
import { ScopeDeclaration, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./entry";

/**
 * A simple interface defining the basic functionality of a scope.
 * @since 0.10.0
 */
export interface ScopeTree {
	functions: Array<ScopeFunctionDeclaration>;
	variables: Array<ScopeVariableDeclaration>;
	parent?: ScopeTree;
}

/**
 * A scope in a Kipper program, which can contain {@link ScopeVariableDeclaration variables},
 * {@link ScopeFunctionDeclaration functions} and {@link ScopeParameterDeclaration function arguments}.
 *
 * A scope can be a child of another scope or the global scope of a {@link KipperProgramContext program}.
 * @since 0.8.0
 */
export abstract class Scope implements ScopeTree {
	protected readonly _functions: Array<ScopeFunctionDeclaration>;
	protected readonly _variables: Array<ScopeVariableDeclaration>;

	protected constructor() {
		this._functions = [];
		this._variables = [];
	}

	/**
	 * All functions in this scope.
	 *
	 * This will be always empty for {@link CompoundStatement compound statement scopes}, as local functions are not
	 * implemented in the Kipper Parser yet.
	 * @since 0.8.0
	 */
	public get functions(): Array<ScopeFunctionDeclaration> {
		return this._functions;
	}

	/**
	 * All variables in this scope.
	 * @since 0.8.0
	 */
	public get variables(): Array<ScopeVariableDeclaration> {
		return this._variables;
	}

	/**
	 * The parent scope of this scope.
	 * @since 0.10.0
	 */
	public abstract parent?: ScopeTree;

	/**
	 * Adds a new variable declaration to the {@link variables list of variables}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeVariableDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addVariable(declaration: VariableDeclaration): ScopeVariableDeclaration;

	/**
	 * Adds a new function declaration to the {@link functions list of functions}.
	 * @param declaration The declaration to add.
	 * @returns The generated {@link ScopeFunctionDeclaration scope declaration}.
	 * @since 0.8.0
	 */
	public abstract addFunction(declaration: FunctionDeclaration): ScopeFunctionDeclaration;

	/**
	 * Searches for a variable with the specific {@link identifier} from the {@link variables list of variables}.
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found variable or undefined.
	 * @since 0.8.0
	 */
	protected abstract getVariable(identifier: string): ScopeVariableDeclaration | undefined;

	/**
	 * Searches for a function with the specific {@link identifier} from the {@link functions list of functions}.
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found function or undefined.
	 * @since 0.8.0
	 */
	protected abstract getFunction(identifier: string): ScopeFunctionDeclaration | undefined;

	/**
	 * Searches for a reference with the specific identifier from the local scope.
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found reference or undefined.
	 * @since 0.8.0
	 */
	public abstract getReference(identifier: string): ScopeDeclaration | undefined;

	/**
	 * Searches for a reference with the specific {@link identifier} from the local scope and all parent scopes.
	 *
	 * If no reference is found, undefined will be returned.
	 * @param identifier The identifier to search for.
	 * @returns The found reference or undefined.
	 * @since 0.10.0
	 */
	public abstract getReferenceRecursively(identifier: string): ScopeDeclaration | undefined;
}
