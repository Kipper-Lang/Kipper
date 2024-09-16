/**
 * An symbol table entry of a variable, parameter or function declaration inside a {@link Scope}.
 * @since 0.10.0
 */
import type { Declaration } from "../../../ast";
import type { KipperProgramContext } from "../../../program-ctx";
import type { BuiltInType, ProcessedType } from "../../types";
import type { BuiltInFunction, BuiltInVariable } from "../../runtime-built-ins";

/**
 * An symbol table entry of a variable, parameter or function declaration inside a Kipper scope.
 *
 * Abstract base class for {@link ScopeVariableDeclaration}, {@link ScopeParameterDeclaration} and
 * {@link ScopeFunctionDeclaration}. This is used like an entry for a symbol table, where the important information
 * about a variable, parameter or function is stored.
 * @since 0.1.2
 */
export abstract class ScopeDeclaration {
	public abstract get node(): Declaration | undefined;
	public abstract get identifier(): string;

	/**
	 * Fetches the {@link KipperProgramContext program context instance} for this token.
	 */
	public get programCtx(): KipperProgramContext | undefined {
		return this.node?.programCtx;
	}

	/**
	 * Returns whether this declaration is a built-in declaration.
	 * @since 0.11.0
	 */
	public abstract get isBuiltIn(): boolean;

	/**
	 * Returns the built-in structure of this declaration, if this declaration is based on one.
	 * @since 0.11.0
	 */
	public abstract get builtInStructure(): BuiltInVariable | BuiltInFunction | BuiltInType | undefined;

	/**
	 * The value type of this declaration.
	 * @since 0.10.0
	 */
	public abstract get type(): ProcessedType;

	/**
	 * Returns whether the scope declaration was defined during its declaration.
	 * @since 0.10.0
	 */
	public abstract get isDefined(): boolean;

	/**
	 * Returns whether the declaration has a value.
	 * @since 0.10.0
	 */
	public abstract get hasValue(): boolean;

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public abstract get isCallable(): boolean;
}
