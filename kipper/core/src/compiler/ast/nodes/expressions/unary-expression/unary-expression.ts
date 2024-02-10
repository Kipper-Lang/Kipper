/**
 * Abstract unary expression class representing a unary expression, which can be used to modify an expression with
 * a specified operator. This abstract class only exists to provide the commonality between the different comparative
 * expressions.
 * @since 0.9.0
 */
import type { UnaryExpressionSemantics } from "./unary-expression-semantics";
import type { UnaryExpressionTypeSemantics } from "./unary-expression-type-semantics";
import type { ParseRuleKindMapping } from "../../../../parser";
import { KindParseRuleMapping } from "../../../../parser";
import { Expression } from "../expression";
import { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link UnaryExpression} AST node.
 * @since 0.10.0
 */
export type ASTUnaryExpressionKind =
	| typeof ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression
	| typeof ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link UnaryExpression} AST node.
 * @since 0.10.0
 */
export type ParserUnaryExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTUnaryExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link UnaryExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserUnaryExpressionRuleName = (typeof KindParseRuleMapping)[ASTUnaryExpressionKind];

/**
 * Abstract unary expression class representing a unary expression, which can be used to modify an expression with
 * a specified operator. This abstract class only exists to provide the commonality between the different comparative
 * expressions.
 * @since 0.9.0
 */
export abstract class UnaryExpression<
	Semantics extends UnaryExpressionSemantics = UnaryExpressionSemantics,
	TypeSemantics extends UnaryExpressionTypeSemantics = UnaryExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserUnaryExpressionContext;
	public abstract get kind(): ASTUnaryExpressionKind;
	public abstract get ruleName(): ParserUnaryExpressionRuleName;
}
