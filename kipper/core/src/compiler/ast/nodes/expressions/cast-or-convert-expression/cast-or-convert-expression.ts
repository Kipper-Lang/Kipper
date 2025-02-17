/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
import type { CastOrConvertExpressionSemantics } from "./cast-or-convert-expression-semantics";
import type { CastOrConvertExpressionTypeSemantics } from "./cast-or-convert-expression-type-semantics";
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../mapping";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link CastOrConvertExpression} AST node.
 * @since 0.10.0
 */
export type ASTCastOrConvertExpressionKind =
	| typeof ParseRuleKindMapping.RULE_castExpression
	| typeof ParseRuleKindMapping.RULE_convertExpression
	| typeof ParseRuleKindMapping.RULE_forceCastExpression
	| typeof ParseRuleKindMapping.RULE_tryCastExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link CastOrConvertExpression}
 * AST node.
 * @since 0.10.0
 */
export type ParserCastOrConvertExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTCastOrConvertExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link CastOrConvertExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserCastOrConvertExpressionRuleName = (typeof KindParseRuleMapping)[ASTCastOrConvertExpressionKind];

/**
 * Abstract class representing a cast or convert expression. This abstract class only exists to provide the commonality
 * between
 * @since 0.9.0
 */
export abstract class CastOrConvertExpression<
	Semantics extends CastOrConvertExpressionSemantics = CastOrConvertExpressionSemantics,
	TypeSemantics extends CastOrConvertExpressionTypeSemantics = CastOrConvertExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics, Expression> {
	protected abstract readonly _antlrRuleCtx: ParserCastOrConvertExpressionContext;

	public abstract get kind(): ASTCastOrConvertExpressionKind;

	public abstract get ruleName(): ParserCastOrConvertExpressionRuleName;
}
