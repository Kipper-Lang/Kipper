/**
 * Abstract unary expression class representing a unary expression, which can be used to modify an expression with
 * a specified operator. This abstract class only exists to provide the commonality between the different comparative
 * expressions.
 * @since 0.9.0
 */
import type { UnaryExpressionSemantics } from "../../../semantic-data";
import type { UnaryExpressionTypeSemantics } from "../../../type-data";
import type {
	IncrementOrDecrementUnaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	ParserASTMapping,
} from "../../../../parser";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link UnaryExpression} AST node.
 * @since 0.10.0
 */
export type ParserUnaryExpressionContext =
	| IncrementOrDecrementUnaryExpressionContext
	| OperatorModifiedUnaryExpressionContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link UnaryExpression} AST node.
 * @since 0.10.0
 */
export type ASTUnaryExpressionKind =
	| typeof ParserASTMapping.RULE_incrementOrDecrementUnaryExpression
	| typeof ParserASTMapping.RULE_operatorModifiedUnaryExpression;

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
	public abstract readonly kind: ASTUnaryExpressionKind;
}
