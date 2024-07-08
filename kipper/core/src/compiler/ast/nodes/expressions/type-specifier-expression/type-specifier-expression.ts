/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
import type { TypeSpecifierExpressionSemantics } from "./type-specifier-expression-semantics";
import type { TypeSpecifierExpressionTypeSemantics } from "./type-specifier-expression-type-semantics";
import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../mapping";
import { Expression } from "../expression";

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
	(typeof ASTNodeMapper.expressionKindToRuleContextMap)[ASTTypeSpecifierExpressionKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link TypeSpecifierExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserTypeSpecifierExpressionRuleName = (typeof KindParseRuleMapping)[ASTTypeSpecifierExpressionKind];

/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
export abstract class TypeSpecifierExpression<
	Semantics extends TypeSpecifierExpressionSemantics = TypeSpecifierExpressionSemantics,
	TypeSemantics extends TypeSpecifierExpressionTypeSemantics = TypeSpecifierExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics, Expression> {
	protected abstract readonly _antlrRuleCtx: ParserTypeSpecifierExpressionContext;
	public abstract get kind(): ASTTypeSpecifierExpressionKind;
	public abstract get ruleName(): ParserTypeSpecifierExpressionRuleName;
}
