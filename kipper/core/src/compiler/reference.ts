/**
 * A reference to a variable/function/builtin/internal identifier.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type { Expression } from "./semantics";
import type { BuiltInFunction, InternalFunction } from "./runtime-built-ins";
import type { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "./scope-declaration";

/**
 * A reference to a variable/function/builtin/internal identifier.
 * @since 0.8.0
 */
export interface Reference<
	T extends BuiltInFunction | InternalFunction | ScopeFunctionDeclaration | ScopeVariableDeclaration,
> {
	/**
	 * The identifier referenced.
	 * @since 0.8.0
	 */
	readonly ref: T;
	/**
	 * The expression which created the reference to {@link ref}.
	 * @since 0.8.0
	 */
	readonly exp: Expression<any>;
}
