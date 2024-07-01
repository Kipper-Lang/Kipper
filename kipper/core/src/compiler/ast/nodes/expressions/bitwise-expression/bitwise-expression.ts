/**
 * BitwiseExpression which represents a bitwise operation.
 *
 */
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { ASTNodeMapper } from "../../../mapping";
import { Expression } from "../expression";
import { BitwiseExpressionTypeSemantics } from "./bitwise-expression-type-semantics";
import { BitwiseExpressionSemantics } from "./bitwise-expression-semantics";


export type ASTBitwiseExpressionKind =
	| typeof ParseRuleKindMapping.RULE_bitwiseAndExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseOrExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseXorExpression;

export type ParserBitwiseExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTBitwiseExpressionKind]
>;

export type ParserBitwiseExpressionRuleName = (typeof KindParseRuleMapping)[ASTBitwiseExpressionKind];

export abstract class BitwiseExpression<
	Semantics extends BitwiseExpressionSemantics = BitwiseExpressionSemantics,
	TypeSemantics extends BitwiseExpressionTypeSemantics = BitwiseExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserBitwiseExpressionContext;
	public abstract get kind(): ASTBitwiseExpressionKind;
	public abstract get ruleName(): ParserBitwiseExpressionRuleName;
}
