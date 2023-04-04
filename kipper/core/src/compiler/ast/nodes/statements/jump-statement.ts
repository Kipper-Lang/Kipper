/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
import type { NoTypeSemantics } from "../../ast-node";
import type { CompilableNodeParent } from "../../compilable-ast-node";
import type { JumpStatementSemantics } from "../../semantic-data";
import { Statement } from "./statement";
import { JumpStatementContext, KipperParser } from "../../../parser";
import { Expression } from "../expressions";

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement<JumpStatementSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: JumpStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_jumpStatement;

	protected readonly _children: Array<Expression>;

	constructor(antlrRuleCtx: JumpStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): JumpStatementContext {
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
		const jmpType = this.sourceCode.startsWith("break") ? "break" : "continue";
		const parent = this.programCtx.semanticCheck(this).getJumpStatementParent(this);

		this.semanticData = {
			jmpType: jmpType,
			parent: parent,
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
	public primarySemanticTypeChecking = undefined; // Jump statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.jumpStatement;
	readonly targetCodeGenerator = this.codeGenerator.jumpStatement;
}
