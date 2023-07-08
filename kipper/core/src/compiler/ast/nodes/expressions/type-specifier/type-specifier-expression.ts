/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
import type { TypeSpecifierExpressionSemantics } from "../../../semantic-data";
import type { ParseRuleKindMapping } from "../../../../parser";
import { KindParseRuleMapping } from "../../../../parser";
import type { TypeSpecifierExpressionTypeSemantics } from "../../../type-data";
import { Expression } from "../expression";
import { ASTNodeMapper } from "../../../mapping";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link TypeSpecifierExpression} AST node.
 * @since 0.10.0
 */
export type ASTTypeSpecifierExpressionKind =
	| typeof ParseRuleKindMapping.RULE_identifierTypeSpecifierExpression
	| typeof ParseRuleKindMapping.RULE_genericTypeSpecifierExpression
	| typeof ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link TypeSpecifierExpression}
 * AST node.
 * @since 0.10.0
 */
export type ParserTypeSpecifierExpressionContext = InstanceType<
	typeof ASTNodeMapper.expressionKindToRuleContextMap[ASTTypeSpecifierExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link TypeSpecifierExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserTypeSpecifierExpressionRuleName = typeof KindParseRuleMapping[ASTTypeSpecifierExpressionKind];

/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
export abstract class TypeSpecifierExpression<
	Semantics extends TypeSpecifierExpressionSemantics = TypeSpecifierExpressionSemantics,
	TypeSemantics extends TypeSpecifierExpressionTypeSemantics = TypeSpecifierExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserTypeSpecifierExpressionContext;
	public abstract get kind(): ASTTypeSpecifierExpressionKind;
	public abstract get ruleName(): ParserTypeSpecifierExpressionRuleName;
}
