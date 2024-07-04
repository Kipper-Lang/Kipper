/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import type { ComparativeExpressionSemantics } from "./comparative-expression-semantics";
import type { ComparativeExpressionTypeSemantics } from "./comparative-expression-type-semantics";
import { Expression } from "../expression";
import type { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ASTComparativeExpressionKind =
	| typeof ParseRuleKindMapping.RULE_equalityExpression
	| typeof ParseRuleKindMapping.RULE_relationalExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ParserComparativeExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTComparativeExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link ComparativeExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserComparativeExpressionRuleName = (typeof KindParseRuleMapping)[ASTComparativeExpressionKind];

/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
export abstract class ComparativeExpression<
	Semantics extends ComparativeExpressionSemantics = ComparativeExpressionSemantics,
	TypeSemantics extends ComparativeExpressionTypeSemantics = ComparativeExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics, Expression> {
	protected abstract readonly _antlrRuleCtx: ParserComparativeExpressionContext;
	public abstract get kind(): ASTComparativeExpressionKind;
	public abstract get ruleName(): ParserComparativeExpressionRuleName;
}
