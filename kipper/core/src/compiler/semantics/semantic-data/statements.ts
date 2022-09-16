/**
 * Semantic data definitions for all statement AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { SemanticData } from "../../parser";
import type { Expression, IfStatement, Statement } from "../language";
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
	condition: Expression<any, any>;
	/**
	 * The body of the if-statement.
	 * @since 0.9.0
	 */
	statementBody: Statement<any, any>;
	/**
	 * The alternative branch of the if-statement, which is optional. This alternative branch can either be:
	 * - An else branch, if the type is a regular {@link Statement} (the statement that should be
	 * evaluated in the else branch)
	 * - Or an else-if branch, if the type is another {@link IfStatement}.
	 * @since 0.9.0
	 */
	alternativeBranch?: IfStatement | Statement<any, any>;
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
	 * The value of the {@link JumpStatement jump statement}, which is only present if the {@link jmpType} is "return".
	 * @since 0.10.0
	 */
	jmpValue: Expression<ExpressionSemantics, ExpressionTypeSemantics> | undefined;
}
