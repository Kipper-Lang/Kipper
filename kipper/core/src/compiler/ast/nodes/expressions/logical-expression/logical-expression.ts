/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
import type { LogicalExpressionSemantics } from "./logical-expression-semantics";
import type { LogicalExpressionTypeSemantics } from "./logical-expression-type-semantics";
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { Expression } from "../expression";
import type { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link LogicalExpression} AST node.
 * @since 0.10.0
 */
export type ASTLogicalExpressionKind =
	| typeof ParseRuleKindMapping.RULE_logicalAndExpression
	| typeof ParseRuleKindMapping.RULE_logicalOrExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} context classes for a constructable
 * {@link LogicalExpression} AST node.
 * @since 0.10.0
 */
export type ParserLogicalExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTLogicalExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link LogicalExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserLogicalExpressionRuleName = (typeof KindParseRuleMapping)[ASTLogicalExpressionKind];

/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
export abstract class LogicalExpression<
	Semantics extends LogicalExpressionSemantics = LogicalExpressionSemantics,
	TypeSemantics extends LogicalExpressionTypeSemantics = LogicalExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics, Expression> {
	protected abstract readonly _antlrRuleCtx: ParserLogicalExpressionContext;
	public abstract get kind(): ASTLogicalExpressionKind;
	public abstract get ruleName(): ParserLogicalExpressionRuleName;
}
