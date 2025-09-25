/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
import type { SemanticData } from "../../../../ast-node";
import type { Statement } from "../../statement";
import type { ErrorBindingDeclaration } from "../../../declarations";

/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
export interface CatchClauseSemantics extends SemanticData {
	/**
	 * The identifier of the catch block, used for distinguishing multiple catch blocks.
	 * @since 0.13.0
	 */
	identifier: string;

	/**
	 * The error binding declaration that declares the variable to which the caught error is assigned.
	 * @since 0.13.0
	 */
	errorBinding: ErrorBindingDeclaration;

	/**
	 * The block of code to be executed if an exception is thrown.
	 * @since 0.13.0
	 */
	body: Statement;
}
