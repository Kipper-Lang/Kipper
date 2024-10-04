/**
 * Iteration statement class, which represents an iteration statement that repeats a statement until a condition is
 * met. Provides the base class for all iteration statements.
 * @abstract
 */
import type {IterationStatementSemantics} from "./iteration-statement-semantics";
import type {IterationStatementTypeSemantics} from "./iteration-statement-type-semantics";
import type {KindParseRuleMapping, ParseRuleKindMapping} from "../../../../lexer-parser";
import type {ASTNodeMapper} from "../../../mapping";
import {Statement} from "../statement";

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
	(typeof ASTNodeMapper.statementKindToRuleContextMap)[ParserIterationStatementKind]
>;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values for a constructable {@link MemberAccessExpression}
 * AST node.
 * @since 0.11.0
 */
export type ParserIterationStatementRuleName = (typeof KindParseRuleMapping)[ParserIterationStatementKind];

/**
 * Iteration statement class, which represents an iteration statement that repeats a statement until a condition is
 * met. Provides the base class for all iteration statements.
 * @abstract
 */
export abstract class IterationStatement<
	Semantics extends IterationStatementSemantics = IterationStatementSemantics,
	TypeSemantics extends IterationStatementTypeSemantics = IterationStatementTypeSemantics,
> extends Statement<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserIterationStatementContext;

	public abstract get kind(): ParserIterationStatementKind;

	public abstract get ruleName(): ParserIterationStatementRuleName;
}
