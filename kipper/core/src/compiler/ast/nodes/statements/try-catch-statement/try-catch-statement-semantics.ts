import type { SemanticData } from "../../../ast-node";
import type { Statement } from "../statement";
import type { ParameterDeclaration } from "../../declarations";

/**
 * Semantics for AST Node {@link TryCatchStatement}.
 * @since 0.12.0
 */
export interface TryCatchStatementSemantics extends SemanticData {
	/**
	 * The block of code that is attempted.
	 * @since 0.12.0
	 */
	tryBlock: Statement;

	/**
	 * The catch clause that handles exceptions thrown in the try block.
	 * It can be either a single {@link CatchClause} or an array of them.
	 * @since 0.12.0
	 */
	catchBlock: CatchClause[];

	/**
	 * The optional finally block which is executed after the try and catch blocks, regardless of the outcome.
	 * @since 0.12.0
	 */
	finallyBlock?: Statement;
}

/**
 * Semantics for AST Node {@link CatchClause}.
 * @since 0.12.0
 */
export interface CatchClause extends SemanticData {
	/**
	 * The variable that holds the exception thrown in the try block.
	 * @since 0.12.0
	 */
	parameter: ParameterDeclaration;

	/**
	 * The block of code to be executed if an exception is thrown.
	 * @since 0.12.0
	 */
	body: Statement;
}
