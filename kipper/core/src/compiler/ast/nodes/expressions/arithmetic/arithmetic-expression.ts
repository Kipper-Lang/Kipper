import type { ArithmeticExpressionSemantics } from "../../../semantic-data";
import type { ArithmeticExpressionTypeSemantics } from "../../../type-data";
import type { AdditiveExpressionContext, MultiplicativeExpressionContext, ParserASTMapping } from "../../../../parser";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ParserArithmeticExpressionContext = AdditiveExpressionContext | MultiplicativeExpressionContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ASTArithmeticExpressionKind =
	| typeof ParserASTMapping.RULE_additiveExpression
	| typeof ParserASTMapping.RULE_multiplicativeExpression;

/**
 * Abstract arithmetic expression class representing an arithmetic expression, which can be used to perform calculations
 * based on two expressions. This abstract class only exists to provide the commonality between the different
 * comparative expressions.
 * @since 0.9.0
 */
export abstract class ArithmeticExpression<
	Semantics extends ArithmeticExpressionSemantics = ArithmeticExpressionSemantics,
	TypeSemantics extends ArithmeticExpressionTypeSemantics = ArithmeticExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserArithmeticExpressionContext;
	public abstract readonly kind: ASTArithmeticExpressionKind;
}
