/**
 * Abstract arithmetic expression class representing an arithmetic expression, which can be used to perform calculations
 * based on two expressions. This abstract class only exists to provide the commonality between the different
 * comparative expressions.
 * @since 0.9.0
 */
import type { ArithmeticExpressionSemantics } from "./arithmetic-expression-semantics";
import type { ArithmeticExpressionTypeSemantics } from "./arithmetic-expression-type-semantics";
import type { ParseRuleKindMapping } from "../../../../lexer-parser";
import type { KindParseRuleMapping } from "../../../../lexer-parser";
import { Expression } from "../expression";
import type { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link ArithmeticExpression} AST node.
 * @since 0.10.0
 */
export type ASTArithmeticExpressionKind =
	| typeof ParseRuleKindMapping.RULE_additiveExpression
	| typeof ParseRuleKindMapping.RULE_multiplicativeExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link ArithmeticExpression} AST node.
 * @since 0.10.0
 */
export type ParserArithmeticExpressionContext = InstanceType<
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTArithmeticExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link ArithmeticExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserArithmeticExpressionRuleName = (typeof KindParseRuleMapping)[ASTArithmeticExpressionKind];

/**
 * Abstract arithmetic expression class representing an arithmetic expression, which can be used to perform calculations
 * based on two expressions. This abstract class only exists to provide the commonality between the different
 * comparative expressions.
 * @since 0.9.0
 */
export abstract class ArithmeticExpression<
	Semantics extends ArithmeticExpressionSemantics = ArithmeticExpressionSemantics,
	TypeSemantics extends ArithmeticExpressionTypeSemantics = ArithmeticExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics, Expression> {
	protected abstract readonly _antlrRuleCtx: ParserArithmeticExpressionContext;
	public abstract get kind(): ASTArithmeticExpressionKind;
	public abstract get ruleName(): ParserArithmeticExpressionRuleName;
}
