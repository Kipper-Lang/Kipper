/**
 * Semantics for Try-Catch Node {@link IfStatement}.
 * @since 0.9.0
 */
import type { SemanticData } from "../../../ast-node";
import type { Statement } from "../statement";

/**
 * Semantics for AST Node {@link IfStatement}.
 * @since 0.9.0
 */
export interface TryCatchStatementSemantics extends SemanticData {
	/**
	 * The try block of the try-catch statement.
	 * @since 0.12.0
	 */
	tryBlock: Statement;

	/**
	 * The catch block of the try-catch statement.
	 * @since 0.12.0
	 */
	catchBlock: Statement;

	/**
	 * The finally block of the try-catch statement.
	 * @since 0.12.0
	 */
	finallyBlock?: Statement;
}
