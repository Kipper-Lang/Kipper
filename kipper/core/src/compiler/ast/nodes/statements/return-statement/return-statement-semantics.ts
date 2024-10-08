/**
 * Semantics for AST Node {@link ReturnStatement}.
 * @since 0.10.0
 */
import type { SemanticData } from "../../../ast-node";
import type { Expression } from "../../expressions";
import type { KipperCallable } from "../../../../const";

/**
 * Semantics for AST Node {@link ReturnStatement}.
 * @since 0.10.0
 */
export interface ReturnStatementSemantics extends SemanticData {
	/**
	 * The value of the {@link ReturnStatement}, which is optional, if the return type is void.
	 * @since 0.10.0
	 */
	returnValue: Expression | undefined;
	/**
	 * The function that this return statement is in.
	 * @since 0.10.0
	 */
	function: KipperCallable;
}
