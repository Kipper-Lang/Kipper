/**
 * Semantics for AST Node {@link ForLoopIterationStatement}.
 * @since 0.10.0
 */
import type { IterationStatementSemantics } from "../iteration-statement-semantics";
import type { VariableDeclaration } from "../../../declarations";
import type { Expression } from "../../../expressions";
import type { Statement } from "../../statement";

/**
 * Semantics for AST Node {@link ForLoopIterationStatement}.
 * @since 0.10.0
 */
export interface ForLoopStatementSemantics extends IterationStatementSemantics {
	/**
	 * The declaration/first statement of the loop, which is executed before the loop condition is evaluated.
	 *
	 * This may also simply be a single expression, if the loop does not have a declaration.
	 * @since 0.10.0
	 */
	forDeclaration: VariableDeclaration | Expression | undefined;
	/**
	 * The for iteration expression of the loop, which is executed after the loop body is executed. This is used to
	 * update the loop variable or execute any other code that should be executed after each loop iteration.
	 * @since 0.10.0
	 */
	forIterationExp: Expression | undefined;
	/**
	 * The for condition of the loop, which is evaluated after the loop body is executed. If this evaluates to true,
	 * the loop will continue executing.
	 * @since 0.10.0
	 */
	loopCondition: Expression | undefined;
	/**
	 * The body of the loop, which is executed as long as {@link loopCondition} is true.
	 * @since 0.10.0
	 */
	loopBody: Statement;
}
