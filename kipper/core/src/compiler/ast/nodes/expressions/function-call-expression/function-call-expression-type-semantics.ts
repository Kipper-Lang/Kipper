/**
 * Type semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
import type { ExpressionTypeSemantics } from "../expression-type-semantics";
import type {
	BuiltInTypeFunc,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
} from "../../../../semantics";
import type { Expression } from "../expression";

/**
 * Type semantics for AST Node {@link FunctionCallExpression}.
 * @since 0.5.0
 */
export interface FunctionCallExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The function that this expression calls.
	 *
	 * This can be a function declaration, a parameter declaration, a variable declaration or a referenceable i.e. a
	 * function stored inside a variable of some sort.
	 * @since 0.12.0
	 */
	funcOrExp: ScopeFunctionDeclaration | ScopeParameterDeclaration | ScopeVariableDeclaration | Expression;
	/**
	 * The function type that is being called.
	 * @since 0.13.0
	 */
	funcType: BuiltInTypeFunc;
}
