/**
 * Switch statement class, which represents a switch selection statement in the Kipper language.
 */
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { SwitchStatementSemantics } from "./switch-statement-semantics";
import type { SwitchStatementTypeSemantics } from "./switch-statement-type-semantics";
import { Statement } from "../statement";
import type { SwitchStatementContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { KipperNotImplementedError } from "../../../../../errors";

/**
 * Switch statement class, which represents a switch selection statement in the Kipper language.
 */
export class SwitchStatement extends Statement<SwitchStatementSemantics, SwitchStatementTypeSemantics> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_switchStatement;

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
	protected override readonly _antlrRuleCtx: SwitchStatementContext;

	protected readonly _children: Array<Statement>;

	constructor(antlrRuleCtx: SwitchStatementContext, parent: CompilableNodeParent) {
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
		return SwitchStatement.kind;
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
		return SwitchStatement.ruleName;
	}

	/**
	 * The children of this AST node.
	 */
	public get children(): Array<Statement> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): SwitchStatementContext {
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
			.notImplementedError(new KipperNotImplementedError("Switch statements have not been implemented yet."));
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
			.notImplementedError(new KipperNotImplementedError("Switch statements have not been implemented yet."));
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.switchStatement;
	readonly targetCodeGenerator = this.codeGenerator.switchStatement;
}
