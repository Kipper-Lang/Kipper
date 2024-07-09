import type { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { ASTNodeMapper } from "../../../mapping";
import type { TypeDeclarationSemantics } from "./type-declaration-semantics";
import type { TypeDeclarationTypeSemantics } from "./type-declaration-type-semantics";
import { Declaration } from "../declaration";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link TypeDeclaration} AST node.
 * @since 0.10.0
 */
export type ASTTypeDeclarationKind =
	| typeof ParseRuleKindMapping.RULE_interfaceDeclaration
	| typeof ParseRuleKindMapping.RULE_classDeclaration;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link TypeDeclaration} AST node.
 * @since 0.10.0
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
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
export abstract class TypeDeclaration<
	Semantics extends TypeDeclarationSemantics = TypeDeclarationSemantics,
	TypeSemantics extends TypeDeclarationTypeSemantics = TypeDeclarationTypeSemantics,
> extends Declaration<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserTypeDeclarationContext;

	public abstract get kind(): ASTTypeDeclarationKind;

	public abstract get ruleName(): ParserTypeDeclarationRuleName;
}
