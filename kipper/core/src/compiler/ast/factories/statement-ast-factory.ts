/**
 * Factory class which generates statement class instances using {@link StatementASTNodeFactory.create StatementASTNodeFactory.create()}.
 * @since 0.9.0
 */
import type { ASTStatementKind, ParserExpressionContext, ParserStatementContext } from "../common";
import type { CompilableNodeParent } from "../compilable-ast-node";
import { Statement } from "../nodes";
import { ASTNodeFactory } from "./ast-node-factory";
import { ASTNodeMapper } from "../mapping";

/**
 * Factory class which generates statement class instances using {@link StatementASTNodeFactory.create StatementASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class StatementASTNodeFactory extends ASTNodeFactory<Statement, ParserExpressionContext> {
	/**
	 * A mapping of {@link ParseRuleKindMapping AST node kind ids} to their respective
	 * {@link Statement statement AST node classes}.
	 * @since 0.11.0
	 */
	public static readonly ruleMapping = ASTNodeMapper.statementKindToClassMap;

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public static get ruleIds(): Array<ASTStatementKind> {
		return <Array<ASTStatementKind>>super.getRuleIds(this.ruleMapping);
	}

	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	public get ruleIds(): Array<ASTStatementKind> {
		return StatementASTNodeFactory.ruleIds;
	}

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserStatementContext, parent: CompilableNodeParent): ConstructableASTStatement {
		const astSyntaxKind = <keyof typeof StatementASTNodeFactory.ruleMapping>antlrRuleCtx.astSyntaxKind;
		const classObj = ASTNodeMapper.mapStatementKindToClass(astSyntaxKind);

		// Forcing compatibility using 'any', since it's not already inferred
		return new classObj(<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Statement AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTStatementClass = (typeof StatementASTNodeFactory.ruleMapping)[ASTStatementKind];

/**
 * A union of all construable Statement AST nodes. Uses {@link ConstructableASTStatementClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTStatement = InstanceType<ConstructableASTStatementClass>;
