/**
 * Do-While loop statement class, which represents a do-while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
import type { DoWhileLoopStatementSemantics } from "../../../semantic-data";
import type { CompilableNodeChild, CompilableNodeParent } from "../../../compilable-ast-node";
import { IterationStatement } from "./iteration-statement";
import { DoWhileLoopIterationStatementContext, KipperParser } from "../../../../parser";
import { KipperNotImplementedError } from "../../../../../errors";

/**
 * Do-While loop statement class, which represents a do-while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class DoWhileLoopStatement extends IterationStatement<DoWhileLoopStatementSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: DoWhileLoopIterationStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_doWhileLoopIterationStatement;

	protected readonly _children: Array<CompilableNodeChild>;

	constructor(antlrRuleCtx: DoWhileLoopIterationStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
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
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Do-While loop statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Do-While loop statements have not been implemented yet."));
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.doWhileLoopStatement;
	readonly targetCodeGenerator = this.codeGenerator.doWhileLoopStatement;
}
