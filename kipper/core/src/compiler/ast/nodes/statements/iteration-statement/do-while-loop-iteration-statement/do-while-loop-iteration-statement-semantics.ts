/**
 * Semantics for AST Node {@link DoWhileLoopIterationStatement}.
 * @since 0.10.0
 */
import type { IterationStatementSemantics } from "../iteration-statement-semantics";
import { Expression } from "../../../expressions";
import { Statement } from "../../statement";

/**
 * Semantics for AST Node {@link DoWhileLoopIterationStatement}.
 * @since 0.10.0
 */
export interface DoWhileLoopIterationStatementSemantics extends IterationStatementSemantics {
	/**
	 * The loop condition, which, if it evaluates to true will trigger the loop to continue executing.
	 * @since 0.10.0
	 */
	loopCondition: Expression;
	/**
	 * The body of the loop, which is executed as long as {@link loopCondition} is true.
	 * @since 0.10.0
	 */
	loopBody: Statement;
}
