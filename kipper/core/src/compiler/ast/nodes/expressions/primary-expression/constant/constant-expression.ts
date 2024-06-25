/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 * @since 0.10.0
 */
import type { ConstantExpressionTypeSemantics } from "./constant-expression-type-semantics";
import type { ConstantExpressionSemantics } from "./constant-expression-semantics";
import type { ParseRuleKindMapping } from "../../../../../parser";
import { KindParseRuleMapping } from "../../../../../parser";
import { ASTNodeMapper } from "../../../../mapping";
import { PrimaryExpression } from "../primary-expression";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ConstantExpression} AST node.
 * @since 0.10.0
 */
export type ASTConstantExpressionKind =
	| typeof ParseRuleKindMapping.RULE_numberPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_stringPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_boolPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_arrayPrimaryExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ConstantExpression} AST node.
 * @since 0.10.0
 */
export type ParserConstantExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTConstantExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link ConstantExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserConstantExpressionRuleName = (typeof KindParseRuleMapping)[ASTConstantExpressionKind];

/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 * @since 0.10.0
 */
export abstract class ConstantExpression<
	Semantics extends ConstantExpressionSemantics = ConstantExpressionSemantics,
	TypeSemantics extends ConstantExpressionTypeSemantics = ConstantExpressionTypeSemantics,
> extends PrimaryExpression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserConstantExpressionContext;
	public abstract get kind(): ASTConstantExpressionKind;
	public abstract get ruleName(): ParserConstantExpressionRuleName;
}
