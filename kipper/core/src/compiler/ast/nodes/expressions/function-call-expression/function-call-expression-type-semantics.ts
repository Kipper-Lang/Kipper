/**
 * Type semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
import type { ExpressionTypeSemantics } from "../expression-type-semantics";
import type { ScopeFunctionDeclaration } from "../../../../semantics";

/**
 * Type semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
export interface FunctionCallExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The function that this expression calls. Can be either a {@link ScopeFunctionDeclaration function declaration} or
	 * a {@link ScopeVariableDeclaration function in a variable}.
	 * @since 0.10.0
	 */
	func: ScopeFunctionDeclaration;
}
