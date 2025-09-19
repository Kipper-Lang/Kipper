/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
import type { SemanticData } from "../../../../ast-node";
import type { TypeSpecifierExpression } from "../../../expressions";
import type { Statement } from "../../statement";

/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
export interface CatchClauseSemanticData extends SemanticData {
	/**
	 * The identifier of the catch block, used for distinguishing multiple catch blocks.
	 * @since 0.13.0
	 */
	identifier: string;

	/**
	 * The narrowed type of the exception being caught.
	 * @since 0.13.0
	 */
	narrowedType?: TypeSpecifierExpression;

	/**
	 * The block of code to be executed if an exception is thrown.
	 * @since 0.13.0
	 */
	body: Statement;
}
