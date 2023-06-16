/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
import type { EqualityExpressionContext, ParserASTMapping, RelationalExpressionContext } from "../../../../parser";
import type { ComparativeExpressionSemantics } from "../../../semantic-data";
import type { ComparativeExpressionTypeSemantics } from "../../../type-data";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ParserComparativeExpressionContext = EqualityExpressionContext | RelationalExpressionContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ASTComparativeExpressionKind =
	| typeof ParserASTMapping.RULE_equalityExpression
	| typeof ParserASTMapping.RULE_relationalExpression;

/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
export abstract class ComparativeExpression<
	Semantics extends ComparativeExpressionSemantics = ComparativeExpressionSemantics,
	TypeSemantics extends ComparativeExpressionTypeSemantics = ComparativeExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserComparativeExpressionContext;
	public abstract readonly kind: ASTComparativeExpressionKind;
}
