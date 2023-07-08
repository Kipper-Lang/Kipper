/**
 * Factory class which generates expression class instances using {@link ExpressionASTNodeFactory.create ExpressionASTNodeFactory.create()}.
 * @since 0.9.0
 */
import type { ASTExpressionKind, ParserExpressionContext } from "../common";
import { Expression } from "../nodes";
import { CompilableASTNode } from "../compilable-ast-node";
import { ASTNodeFactory } from "./ast-node-factory";
import { ASTNodeMapper } from "../mapping";

/**
 * Factory class which generates expression class instances using {@link ExpressionASTNodeFactory.create ExpressionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class ExpressionASTNodeFactory extends ASTNodeFactory<Expression, ParserExpressionContext> {
	/**
	 * A mapping of {@link ParseRuleKindMapping AST node kind ids} to their respective
	 * {@link Expression expression AST node classes}.
	 *
	 * Directly using {@link ASTNodeMapper.expressionKindToClassMap}.
	 * @since 0.11.0
	 */
	public static readonly ruleMapping = ASTNodeMapper.expressionKindToClassMap;

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public static get ruleIds(): Array<ASTExpressionKind> {
		return <Array<ASTExpressionKind>>super.getRuleIds(this.ruleMapping);
	}

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public get ruleIds(): Array<ASTExpressionKind> {
		return ExpressionASTNodeFactory.ruleIds;
	}

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserExpressionContext, parent: CompilableASTNode): ConstructableASTExpression {
		const astSyntaxKind = <keyof typeof ExpressionASTNodeFactory.ruleMapping>antlrRuleCtx.astSyntaxKind;
		const classObj = ASTNodeMapper.mapExpressionKindToClass(astSyntaxKind);

		// Forcing compatibility using 'any', since it's not already inferred
		return new classObj(<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Expression AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTExpressionClass = typeof ExpressionASTNodeFactory.ruleMapping[ASTExpressionKind];

/**
 * A union of all construable Expression AST nodes. Uses {@link ConstructableASTExpressionClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTExpression = InstanceType<ConstructableASTExpressionClass>;
