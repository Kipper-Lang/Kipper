/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 * @since 0.10.0
 */
import type { ConstantExpressionSemantics } from "../../../../semantic-data";
import type { ExpressionTypeSemantics } from "../../../../type-data";
import type {
	ArrayLiteralPrimaryExpressionContext,
	BoolPrimaryExpressionContext,
	NumberPrimaryExpressionContext,
	ParserASTMapping,
	StringPrimaryExpressionContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
} from "../../../../../parser";
import { Expression } from "../../expression";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ConstantExpression} AST node.
 * @since 0.10.0
 */
export type ParserConstantExpressionContext =
	| NumberPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| BoolPrimaryExpressionContext
	| VoidOrNullOrUndefinedPrimaryExpressionContext
	| ArrayLiteralPrimaryExpressionContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ConstantExpression} AST node.
 * @since 0.10.0
 */
export type ASTConstantExpressionKind =
	| typeof ParserASTMapping.RULE_numberPrimaryExpression
	| typeof ParserASTMapping.RULE_stringPrimaryExpression
	| typeof ParserASTMapping.RULE_boolPrimaryExpression
	| typeof ParserASTMapping.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof ParserASTMapping.RULE_arrayLiteralPrimaryExpression;

/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 * @since 0.10.0
 */
export abstract class ConstantExpression<
	Semantics extends ConstantExpressionSemantics = ConstantExpressionSemantics,
	TypeSemantics extends ExpressionTypeSemantics = ExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserConstantExpressionContext;
	public abstract readonly kind: ASTConstantExpressionKind;
}
