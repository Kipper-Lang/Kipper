/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { IterationStatementSemantics } from "../../../semantic-data";
import { NoTypeSemantics } from "../../../ast-node";
import { Statement } from "../statement";
import { ASTNodeMapper } from "../../../mapping/ast-node-mapper";

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link MemberAccessExpression} AST
 * node.
 * @since 0.10.0
 */
export type ParserIterationStatementKind =
	| typeof ParseRuleKindMapping.RULE_forLoopIterationStatement
	| typeof ParseRuleKindMapping.RULE_whileLoopIterationStatement
	| typeof ParseRuleKindMapping.RULE_doWhileLoopIterationStatement;

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link MemberAccessExpression}
 * AST node.
 * @since 0.10.0
 */
export type ParserIterationStatementContext = InstanceType<
	typeof ASTNodeMapper.statementKindToRuleContextMap[ParserIterationStatementKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link MemberAccessExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserIterationStatementRuleName = typeof KindParseRuleMapping[ParserIterationStatementKind];

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export abstract class IterationStatement<
	Semantics extends IterationStatementSemantics = IterationStatementSemantics,
	TypeSemantics extends NoTypeSemantics = NoTypeSemantics,
> extends Statement<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserIterationStatementContext;
	public abstract get kind(): ParserIterationStatementKind;
	public abstract get ruleName(): ParserIterationStatementRuleName;
}
