/**
 * An entry of a variable, parameter or function declaration inside a Kipper scope.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import { Declaration, KipperType } from "../../semantics";
import { KipperProgramContext } from "../../program-ctx";

/**
 * An entry of a variable, parameter or function declaration inside a Kipper scope.
 *
 * Abstract base class for {@link ScopeVariableDeclaration}, {@link ScopeParameterDeclaration} and
 * {@link ScopeFunctionDeclaration}. This is used like an entry for a symbol table, where the important information
 * about a variable, parameter or function is stored.
 * @since 0.1.2
 */
export abstract class ScopeDeclaration {
	public abstract get node(): Declaration<any, any>;

	public abstract get identifier(): string;

	/**
	 * Fetches the {@link KipperProgramContext program context instance} for this token.
	 */
	public get programCtx(): KipperProgramContext {
		return this.node.programCtx;
	}

	/**
	 * The value type of this declaration.
	 * @since 0.10.0
	 */
	public abstract get type(): KipperType;

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
