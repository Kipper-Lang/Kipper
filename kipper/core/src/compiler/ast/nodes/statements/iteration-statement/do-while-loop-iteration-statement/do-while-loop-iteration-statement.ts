/**
 * Do-While loop statement class, which represents a do-while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
import type { DoWhileLoopIterationStatementSemantics } from "./do-while-loop-iteration-statement-semantics";
import type { DoWhileLoopIterationStatementTypeSemantics } from "./do-while-loop-iteration-statement-type-semantics";
import type { CompilableNodeChild, CompilableNodeParent } from "../../../../compilable-ast-node";
import { IterationStatement } from "../iteration-statement";
import type { DoWhileLoopIterationStatementContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { Expression } from "../../../expressions";
import type { Statement } from "../../statement";

/**
 * Do-While loop statement class, which represents a do-while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class DoWhileLoopIterationStatement extends IterationStatement<
	DoWhileLoopIterationStatementSemantics,
	DoWhileLoopIterationStatementTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_doWhileLoopIterationStatement;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: DoWhileLoopIterationStatementContext;

	protected readonly _children: Array<CompilableNodeChild>;

	constructor(antlrRuleCtx: DoWhileLoopIterationStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return DoWhileLoopIterationStatement.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return DoWhileLoopIterationStatement.ruleName;
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<CompilableNodeChild> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): DoWhileLoopIterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const loopBody = <Statement>this.children[0];
		const loopCondition = <Expression>this.children[1];

		this.semanticData = {
			loopCondition: loopCondition,
			loopBody: loopBody,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking: undefined = undefined;

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.doWhileLoopIterationStatement;
	readonly targetCodeGenerator = this.codeGenerator.doWhileLoopIterationStatement;
}
