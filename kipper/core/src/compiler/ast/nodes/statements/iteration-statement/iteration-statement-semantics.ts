/**
 * Semantics for AST Node {@link IterationStatement}.
 * @since 0.10.0
 */
import type {Expression} from "../../expressions";
import type {Statement} from "../statement";
import type {StatementSemantics} from "../statement-semantics";

/**
 * Semantics for AST Node {@link IterationStatement}.
 * @since 0.10.0
 */
export interface IterationStatementSemantics extends StatementSemantics {
	/**
	 * The loop condition, which, if it evaluates to true will trigger the loop to continue executing.
	 * @since 0.10.0
	 */
	loopCondition: Expression | undefined;
	/**
	 * The body of the loop, which is handled and executed depending on the loop type and the value of
	 * {@link loopCondition}.
	 * @since 0.10.0
	 */
	loopBody: Statement;
}
