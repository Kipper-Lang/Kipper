/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 * @since 0.9.0
 */
import type { TypeSpecifierExpressionSemantics } from "../../../semantic-data";
import type {
	GenericTypeSpecifierContext,
	IdentifierTypeSpecifierContext,
	ParserASTMapping,
	TypeofTypeSpecifierContext,
} from "../../../../parser";
import type { TypeSpecifierExpressionTypeSemantics } from "../../../type-data";
import { Expression } from "../expression";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link MemberAccessExpression} AST node.
 * @since 0.10.0
 */
export type ParserTypeSpecifierExpressionContext =
	| IdentifierTypeSpecifierContext
	| GenericTypeSpecifierContext
	| TypeofTypeSpecifierContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link TypeSpecifierExpression} AST node.
 * @since 0.10.0
 */
export type ASTTypeSpecifierExpressionKind =
	| typeof ParserASTMapping.RULE_identifierTypeSpecifier
	| typeof ParserASTMapping.RULE_genericTypeSpecifier
	| typeof ParserASTMapping.RULE_typeofTypeSpecifier;

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
	public abstract readonly kind: ASTTypeSpecifierExpressionKind;
}
