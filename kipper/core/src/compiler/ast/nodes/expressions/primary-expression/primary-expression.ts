/**
 * Primary expression, which represents the most basic expressions in the language, such as constants, f-strings,
 * identifiers and tangled expressions.
 * @abstract
 * @since 0.11.0
 */
import type { PrimaryExpressionSemantics } from "./primary-expression-semantics";
import type { PrimaryExpressionTypeSemantics } from "./primary-expression-type-semantics";
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { Expression } from "../expression";
import { ASTNodeMapper } from "../../../mapping";
import { ASTConstantExpressionKind } from "./constant";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link PrimaryExpression} AST node.
 * @since 0.10.0
 */
export type ASTPrimaryExpressionKind =
	| ASTConstantExpressionKind
	| typeof ParseRuleKindMapping.RULE_fStringPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_identifierPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_tangledPrimaryExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} context classes for a constructable
 * {@link PrimaryExpression} AST node.
 * @since 0.10.0
 */
export type ParserPrimaryExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTPrimaryExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link PrimaryExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserPrimaryExpressionRuleName = (typeof KindParseRuleMapping)[ASTPrimaryExpressionKind];

/**
 * Primary expression, which represents the most basic expressions in the language, such as constants, f-strings and
 * tangled expressions.
 * @abstract
 * @since 0.11.0
 */
export abstract class PrimaryExpression<
	Semantics extends PrimaryExpressionSemantics = PrimaryExpressionSemantics,
	TypeSemantics extends PrimaryExpressionTypeSemantics = PrimaryExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserPrimaryExpressionContext;
	public abstract get kind(): ASTPrimaryExpressionKind;
	public abstract get ruleName(): ParserPrimaryExpressionRuleName;
}
