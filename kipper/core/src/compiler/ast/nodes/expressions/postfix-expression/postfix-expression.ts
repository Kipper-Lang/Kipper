/**
 * Postfix expression, representing an expression which has a postfix operator modifying one or more operands. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 * @since 0.11.0
 */
import type { PostfixExpressionSemantics } from "./postfix-expression-semantics";
import type { PostfixExpressionTypeSemantics } from "./postfix-expression-type-semantics";
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { Expression } from "../expression";
import type { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link PostfixExpression} AST node.
 * @since 0.10.0
 */
export type ASTPostfixExpressionKind = typeof ParseRuleKindMapping.RULE_incrementOrDecrementPostfixExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} context classes for a constructable
 * {@link PostfixExpression} AST node.
 * @since 0.10.0
 */
export type ParserPostfixExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTPostfixExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link PostfixExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserPostfixExpressionRuleName = (typeof KindParseRuleMapping)[ASTPostfixExpressionKind];

/**
 * Postfix expression, representing an expression which has a postfix operator modifying one or more operands. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 * @since 0.11.0
 */
export abstract class PostfixExpression<
	Semantics extends PostfixExpressionSemantics = PostfixExpressionSemantics,
	TypeSemantics extends PostfixExpressionTypeSemantics = PostfixExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserPostfixExpressionContext;
	public abstract get kind(): ASTPostfixExpressionKind;
	public abstract get ruleName(): ParserPostfixExpressionRuleName;
}
