/**
 * Semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
import type { ExpressionSemantics } from "../expression-semantics";
import type { ParameterDeclaration } from "../../declarations";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import type { CompoundStatement } from "../../statements";

/**
 * Semantics for AST Node {@link LambdaExpression}.
 * @since 0.11.0
 */
export interface LambdaExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type specifier expression for the return type.
	 */
	returnTypeSpecifier: IdentifierTypeSpecifierExpression;

	/**
	 * The parameters of the lambda expression.
	 */
	params: Array<ParameterDeclaration>;

	/**
	 * The body of the lambda expression.
	 */
	functionBody: CompoundStatement;
}
