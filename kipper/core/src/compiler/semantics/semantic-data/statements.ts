/**
 * Semantic data definitions for all statement AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { SemanticData } from "../../parser";
import type { Expression, IfStatement, Statement } from "../language";
import { FunctionDeclaration } from "../language";
import { JmpStatementType } from "../const";
import { ExpressionSemantics } from "./expressions";
import { ExpressionTypeSemantics } from "../type-data";

/**
 * Semantics for AST Node {@link IfStatement}.
 * @since 0.9.0
 */
export interface IfStatementSemantics extends SemanticData {
	/**
	 * The condition of the if-statement.
	 * @since 0.9.0
	 */
	condition: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The body of the if-statement.
	 * @since 0.9.0
	 */
	ifBranch: Statement<ExpressionSemantics, ExpressionTypeSemantics>;
	/**
	 * The alternative (optional) branch of the if-statement. This alternative branch can either be:
	 * - An else branch, if the type is a regular {@link Statement} (the statement that should be
	 * evaluated in the else branch).
	 * - An else-if branch, if the type is another {@link IfStatement}.
	 * - Nothing (undefined), if it wasn't specified and the if statement does not have any more branches.
	 * @since 0.9.0
	 */
	elseBranch?: IfStatement | Statement<ExpressionSemantics, ExpressionTypeSemantics>;
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
	loopCondition: Expression<ExpressionSemantics, ExpressionTypeSemantics>;
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
export interface WhileLoopStatementSemantics extends IterationStatementSemantics {}

/**
 * Semantics for AST Node {@link ForLoopStatement}.
 * @since 0.10.0
 */
export interface ForLoopStatementSemantics extends IterationStatementSemantics {}

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
	returnValue: Expression<ExpressionSemantics, ExpressionTypeSemantics> | undefined;
	/**
	 * The function that this return statement is in.
	 * @since 0.10.0
	 */
	function: FunctionDeclaration;
}
