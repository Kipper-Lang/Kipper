import type { ExpressionSemantics } from "../expression-semantics";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import type { Expression } from "../expression";

export interface NewInstantiationExpressionSemantics extends ExpressionSemantics {
	class: IdentifierTypeSpecifierExpression;
	args: Array<Expression>;
}
