/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
import {
	DoWhileLoopIterationStatementContext,
	ForLoopIterationStatementContext,
	KipperParser,
	WhileLoopIterationStatementContext,
} from "../../../../parser";
import { IterationStatementSemantics } from "../../../semantic-data";
import { NoTypeSemantics } from "../../../ast-node";
import { Statement } from "../statement";

/**
 * Union type of all possible {@link ParserASTNode} context classes for a constructable {@link MemberAccessExpression} AST node.
 * @since 0.10.0
 */
export type ParserIterationStatementContext =
	| ForLoopIterationStatementContext
	| WhileLoopIterationStatementContext
	| DoWhileLoopIterationStatementContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a constructable {@link MemberAccessExpression} AST node.
 * @since 0.10.0
 */
export type ParserIterationStatementKind =
	| typeof KipperParser.RULE_forLoopIterationStatement
	| typeof KipperParser.RULE_whileLoopIterationStatement
	| typeof KipperParser.RULE_doWhileLoopIterationStatement;

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export abstract class IterationStatement<
	Semantics extends IterationStatementSemantics = IterationStatementSemantics,
	TypeSemantics extends NoTypeSemantics = NoTypeSemantics,
> extends Statement<Semantics, TypeSemantics> {
	protected abstract readonly _antlrRuleCtx: ParserIterationStatementContext;
	public abstract readonly kind: ParserIterationStatementKind;
}
