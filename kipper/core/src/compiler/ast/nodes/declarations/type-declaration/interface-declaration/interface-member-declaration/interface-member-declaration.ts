import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../../../mapping";
import type { InterfaceMemberDeclarationSemantics } from "./interface-member-declaration-semantics";
import type { InterfaceMemberDeclarationTypeSemantics } from "./interface-member-declaration-type-semantics";
import { TypeDeclaration } from "../../type-declaration";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link InterfaceMemberDeclaration} AST node.
 * @since 0.12.0
 */
export type ASTInterfaceMemberDeclarationKind =
	| typeof ParseRuleKindMapping.RULE_interfacePropertyDeclaration
	| typeof ParseRuleKindMapping.RULE_interfaceMethodDeclaration;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link InterfaceMemberDeclaration} AST node.
 * @since 0.12.0
 */
export type ParserInterfaceMemberDeclarationContext = InstanceType<
	(typeof ASTNodeMapper.declarationKindToRuleContextMap)[ASTInterfaceMemberDeclarationKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link InterfaceMemberDeclaration}
 * AST node.
 * @since 0.12.0
 */
// eslint-disable-next-line no-undef
export type ParserInterfaceMemberDeclarationRuleName = (typeof KindParseRuleMapping)[ASTInterfaceMemberDeclarationKind];

/**
 * Abstract interface member declaration class which represents a member declaration (either method or property)
 * inside an interface.
 * @since 0.12.0
 */
export abstract class InterfaceMemberDeclaration<
	Semantics extends InterfaceMemberDeclarationSemantics = InterfaceMemberDeclarationSemantics,
	TypeSemantics extends InterfaceMemberDeclarationTypeSemantics = InterfaceMemberDeclarationTypeSemantics,
> extends TypeDeclaration<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserInterfaceMemberDeclarationContext;
	public abstract get kind(): ASTInterfaceMemberDeclarationKind;
	public abstract get ruleName(): ParserInterfaceMemberDeclarationRuleName;
}
