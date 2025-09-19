/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
import type { SemanticData } from "../../../ast-node";
import type { Statement } from "../statement";
import type { CatchClause } from "./catch-clause";

/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.13.0
 */
export interface TryCatchStatementSemantics extends SemanticData {
	/**
	 * The block of code that is attempted.
	 * @since 0.13.0
	 */
	tryBlock: Statement;

	/**
	 * The catch clause that handles exceptions thrown in the try block.
	 * It can be either a single {@link CatchClauseSemanticData} or an array of them.
	 * @since 0.13.0
	 */
	catchClauses: Array<CatchClause>;

	/**
	 * The optional finally block which is executed after the try and catch blocks, regardless of the outcome.
	 * @since 0.13.0
	 */
	finallyBlock?: Statement;
}
