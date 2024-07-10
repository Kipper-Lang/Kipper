/**
 * A simple blueprint for a factory for creating AST nodes from a parser context.
 * @since 0.10.0
 */
import type { ConstructableASTKind } from "../common";
import type { ConstructableASTNodeClass } from "./index";
import type { CompilableASTNode } from "../compilable-ast-node";
import type { KipperParserRuleContext } from "../../lexer-parser";

/**
 * A simple blueprint for a factory for creating AST nodes from a parser context.
 * @since 0.10.0
 */
export abstract class ASTNodeFactory<
	T extends CompilableASTNode = CompilableASTNode,
	U extends KipperParserRuleContext = KipperParserRuleContext,
> {
	/**
	 * Returns an array of all {@link ParseRuleKindMapping AST node kind ids} that this factory can process.
	 * @since 0.10.0
	 */
	protected static getRuleIds(ruleMapping: Record<number, ConstructableASTNodeClass>): Array<ConstructableASTKind> {
		return Object.keys(ruleMapping).map((key: string) => <ConstructableASTKind>parseInt(key));
	}

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public abstract create(antlrRuleCtx: U, parent: CompilableASTNode): T;
}
