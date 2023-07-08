/**
 * Factory class which generates definition class instances using {@link DeclarationASTNodeFactory.create DefinitionASTNodeFactory.create()}.
 * @since 0.9.0
 */
import type { ASTDeclarationKind, ParserDeclarationContext, ParserExpressionContext } from "../common";
import type { CompilableNodeParent } from "../compilable-ast-node";
import { Declaration } from "../nodes";
import { ASTNodeFactory } from "./ast-node-factory";
import { ASTNodeMapper } from "../mapping/";

/**
 * Factory class which generates definition class instances using {@link DeclarationASTNodeFactory.create DefinitionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class DeclarationASTNodeFactory extends ASTNodeFactory<Declaration, ParserExpressionContext> {
	/**
	 * A mapping of {@link ParseRuleKindMapping AST node kind ids} to their respective
	 * {@link Declaration declaration AST node classes}.
	 *
	 * Directly using {@link ASTNodeMapper.declarationKindToClassMap}.
	 * @since 0.11.0
	 */
	public static readonly ruleMapping = ASTNodeMapper.declarationKindToClassMap;

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public static get ruleIds(): Array<ASTDeclarationKind> {
		return <Array<ASTDeclarationKind>>super.getRuleIds(this.ruleMapping);
	}

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public get ruleIds(): Array<ASTDeclarationKind> {
		return DeclarationASTNodeFactory.ruleIds;
	}

	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserDeclarationContext, parent: CompilableNodeParent): ConstructableASTDeclaration {
		const astSyntaxKind = <keyof typeof DeclarationASTNodeFactory.ruleMapping>antlrRuleCtx.astSyntaxKind;
		const classObj = ASTNodeMapper.mapDeclarationKindToClass(astSyntaxKind);

		// Forcing compatibility using 'any', since it's not already inferred
		return new classObj(<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Declaration AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTDeclarationClass = typeof DeclarationASTNodeFactory.ruleMapping[ASTDeclarationKind];

/**
 * A union of all construable Declaration AST nodes. Uses {@link ConstructableASTDeclarationClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTDeclaration = InstanceType<ConstructableASTDeclarationClass>;
