import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../../../mapping";
import type { InterfaceMemberDeclarationSemantics } from "../../interface-declaration";
import type { InterfaceMemberDeclarationTypeSemantics } from "../../interface-declaration/interface-member-declaration/interface-member-declaration-type-semantics";
import { TypeDeclaration } from "../../type-declaration";
import type { ClassMemberDeclarationSemantics } from "./class-member-declaration-semantics";
import type { ClassMemberDeclarationTypeSemantics } from "./class-member-declaration-type-semantics";

export type ASTClassMemberDeclarationKind =
	| typeof ParseRuleKindMapping.RULE_classPropertyDeclaration
	| typeof ParseRuleKindMapping.RULE_classMethodDeclaration
	| typeof ParseRuleKindMapping.RULE_classConstructorDeclaration;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link InterfaceMemberDeclaration} AST node.
 * @since 0.12.0
 */
export type ParserClassMemberDeclarationContext = InstanceType<
	(typeof ASTNodeMapper.declarationKindToRuleContextMap)[ASTClassMemberDeclarationKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link InterfaceMemberDeclaration}
 * AST node.
 * @since 0.12.0
 */
// eslint-disable-next-line no-undef
export type ParserClassMemberDeclarationRuleName = (typeof KindParseRuleMapping)[ASTClassMemberDeclarationKind];

/**
 * Abstract interface member declaration class which represents a member declaration (either method or proeprty)
 * inside an interface.
 * @since 0.12.0
 */
export abstract class ClassMemberDeclaration<
	Semantics extends ClassMemberDeclarationSemantics = ClassMemberDeclarationSemantics,
	TypeSemantics extends ClassMemberDeclarationTypeSemantics = ClassMemberDeclarationTypeSemantics,
> extends TypeDeclaration<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserClassMemberDeclarationContext;
	public abstract get kind(): ASTClassMemberDeclarationKind;
	public abstract get ruleName(): ParserClassMemberDeclarationRuleName;
}