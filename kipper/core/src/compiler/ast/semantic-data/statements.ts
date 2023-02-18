/**
 * Semantic data definitions for all statement AST nodes.
 * @since 0.10.0
 */
import type { SemanticData } from "../ast-node";
import type { Expression, FunctionDeclaration, IfStatement, Statement, VariableDeclaration } from "../nodes";
import type { JmpStatementType } from "../../const";
import {IterationStatement} from "../nodes";

/**
 * Semantics for AST Node {@link IfStatement}.
 * @since 0.9.0
 */
export interface IfStatementSemantics extends SemanticData {
	/**
	 * The condition of the if-statement.
	 * @since 0.9.0
	 */
	condition: Expression;
	/**
	 * The body of the if-statement.
	 * @since 0.9.0
	 */
	ifBranch: Statement;
	/**
	 * The alternative (optional) branch of the if-statement. This alternative branch can either be:
	 * - An else branch, if the type is a regular {@link Statement} (the statement that should be
	 * evaluated in the else branch).
	 * - An else-if branch, if the type is another {@link IfStatement}.
	 * - Nothing (undefined), if it wasn't specified and the if statement does not have any more branches.
	 * @since 0.9.0
	 */
	elseBranch?: IfStatement | Statement;
}

/**
 * Semantics for AST Node {@link IterationStatement}.
 * @since 0.10.0
 */
export interface IterationStatementSemantics extends SemanticData {
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

/**
 * Semantics for AST Node {@link DoWhileLoopStatement}.
 * @since 0.10.0
 */
export interface DoWhileLoopStatementSemantics extends IterationStatementSemantics {}

/**
 * Semantics for AST Node {@link WhileLoopStatement}.
 * @since 0.10.0
 */
export interface WhileLoopStatementSemantics extends IterationStatementSemantics {
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

/**
 * Semantics for AST Node {@link ForLoopStatement}.
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

/**
 * Semantics for AST Node {@link JumpStatement}.
 * @since 0.10.0
 */
export interface JumpStatementSemantics extends SemanticData {
	/**
	 * The type of the {@link JumpStatement jump statement}.
	 * @since 0.10.0
	 */
	jmpType: JmpStatementType;
	/**
	 * The parent statement of the {@link JumpStatement jump statement}.
	 * @since 0.10.0
	 */
	parent: IterationStatement;
}

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
	function: FunctionDeclaration;
}
