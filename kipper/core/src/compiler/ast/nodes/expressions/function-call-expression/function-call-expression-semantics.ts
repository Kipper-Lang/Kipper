/**
 * Semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
import type { Reference, ScopeFunctionDeclaration } from "../../../../semantics";
import type { Expression } from "../expression";
import type { ExpressionSemantics } from "../expression-semantics";

/**
 * Semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
export interface FunctionCallExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier of the function that is called.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The function that is called by this expression.
	 * @since 0.5.0
	 */
	callTarget: Reference<ScopeFunctionDeclaration>;
	/**
	 * The arguments that were passed to this function.
	 * @since 0.6.0
	 */
	args: Array<Expression>;
}
