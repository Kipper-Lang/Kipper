import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../mapping";
import type { TypeDeclarationSemantics } from "./type-declaration-semantics";
import type { TypeDeclarationTypeSemantics } from "./type-declaration-type-semantics";
import type { ASTInterfaceMemberDeclarationKind } from "./interface-declaration";
import { Declaration } from "../declaration";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link TypeDeclaration} AST node.
 * @since 0.11.0
 */
export type ASTTypeDeclarationKind =
	| ASTInterfaceMemberDeclarationKind
	| typeof ParseRuleKindMapping.RULE_interfaceDeclaration
	| typeof ParseRuleKindMapping.RULE_classDeclaration;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link TypeDeclaration} AST node.
 * @since 0.11.0
 */
export type ParserTypeDeclarationContext = InstanceType<
	(typeof ASTNodeMapper.declarationKindToRuleContextMap)[ASTTypeDeclarationKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link TypeDeclaration}
 * AST node.
 * @since 0.11.0
 */
export type ParserTypeDeclarationRuleName = (typeof KindParseRuleMapping)[ASTTypeDeclarationKind];

/**
 * Abstract type declaration which represents user-defined types such as interfaces or classes.
 * @since 0.11.0
 */
export abstract class TypeDeclaration<
	Semantics extends TypeDeclarationSemantics = TypeDeclarationSemantics,
	TypeSemantics extends TypeDeclarationTypeSemantics = TypeDeclarationTypeSemantics,
> extends Declaration<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserTypeDeclarationContext;

	public abstract get kind(): ASTTypeDeclarationKind;

	public abstract get ruleName(): ParserTypeDeclarationRuleName;
}
