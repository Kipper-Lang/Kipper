/**
 * Semantics for AST Node {@link IfStatement}.
 * @since 0.9.0
 */
import type {SemanticData} from "../../../ast-node";
import type {Expression} from "../../expressions";
import type {Statement} from "../statement";
import type {IfStatement} from "./if-statement";

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
