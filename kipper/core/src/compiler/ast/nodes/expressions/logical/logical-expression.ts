/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
import type { EqualityExpressionContext, ParserASTMapping, RelationalExpressionContext } from "../../../../parser";
import type { LogicalExpressionSemantics } from "../../../semantic-data";
import type { LogicalExpressionTypeSemantics } from "../../../type-data";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode.kind} context classes for a constructable
 * {@link LogicalExpression} AST node.
 * @since 0.10.0
 */
export type ParserLogicalExpressionContext = EqualityExpressionContext | RelationalExpressionContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link LogicalExpression} AST node.
 * @since 0.10.0
 */
export type ASTLogicalExpressionKind =
	| typeof ParserASTMapping.RULE_logicalAndExpression
	| typeof ParserASTMapping.RULE_logicalOrExpression;

/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
export abstract class LogicalExpression<
	Semantics extends LogicalExpressionSemantics = LogicalExpressionSemantics,
	TypeSemantics extends LogicalExpressionTypeSemantics = LogicalExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserLogicalExpressionContext;
	public abstract readonly kind: ASTLogicalExpressionKind;
}
