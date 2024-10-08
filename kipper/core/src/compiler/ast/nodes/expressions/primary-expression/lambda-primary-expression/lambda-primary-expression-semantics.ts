/**
 * Semantics for AST Node {@link LambdaPrimaryExpression}.
 * @since 0.11.0
 */
import type { ExpressionSemantics } from "../../expression-semantics";
import type { ParameterDeclaration } from "../../../declarations";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";
import type { CompoundStatement } from "../../../statements";
import type { Expression } from "../../expression";
import type { RawType } from "../../../../../semantics";

/**
 * Semantics for AST Node {@link LambdaPrimaryExpression}.
 * @since 0.11.0
 */
export interface LambdaPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The return type of the lambda expression.
	 * @since 0.11.0
	 */
	returnType: RawType;
	/**
	 * The type specifier expression for the return type.
	 * @since 0.11.0
	 */
	returnTypeSpecifier: IdentifierTypeSpecifierExpression;
	/**
	 * The parameters of the lambda expression.
	 * @since 0.11.0
	 */
	params: Array<ParameterDeclaration>;
	/**
	 * The body of the lambda expression.
	 * @since 0.11.0
	 */
	functionBody: Expression | CompoundStatement;
}
