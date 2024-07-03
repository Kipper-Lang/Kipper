/**
 * BitwiseExpression which represents a bitwise operation.
 * @since 0.11.0
 */
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import type { ASTNodeMapper } from "../../../mapping";
import { Expression } from "../expression";
import type { BitwiseExpressionTypeSemantics } from "./bitwise-expression-type-semantics";
import type { BitwiseExpressionSemantics } from "./bitwise-expression-semantics";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link BitwiseExpression} AST node.
 * @since 0.11.0
 */
export type ASTBitwiseExpressionKind =
	| typeof ParseRuleKindMapping.RULE_bitwiseAndExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseOrExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseXorExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseShiftExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} context classes for a constructable
 * {@link BitwiseExpression} AST node.
 * @since 0.11.0
 */
export type ParserBitwiseExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTBitwiseExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link BitwiseExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserBitwiseExpressionRuleName = (typeof KindParseRuleMapping)[ASTBitwiseExpressionKind];

/**
 * BitwiseExpression which represents a bitwise operation.
 * @abstract
 * @since 0.11.0
 */
export abstract class BitwiseExpression<
	Semantics extends BitwiseExpressionSemantics = BitwiseExpressionSemantics,
	TypeSemantics extends BitwiseExpressionTypeSemantics = BitwiseExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserBitwiseExpressionContext;
	public abstract get kind(): ASTBitwiseExpressionKind;
	public abstract get ruleName(): ParserBitwiseExpressionRuleName;
}
