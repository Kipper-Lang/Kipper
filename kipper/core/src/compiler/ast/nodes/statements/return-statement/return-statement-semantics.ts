/**
 * Semantics for AST Node {@link ReturnStatement}.
 * @since 0.10.0
 */
import type { SemanticData } from "../../../ast-node";
import type { Expression, LambdaPrimaryExpression } from "../../expressions";
import type { FunctionDeclaration } from "../../declarations";

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
	function: FunctionDeclaration | LambdaPrimaryExpression;
}
