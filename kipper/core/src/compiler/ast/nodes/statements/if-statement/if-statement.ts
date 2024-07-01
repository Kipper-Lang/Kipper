/**
 * If statement class, which represents if, else-if and else statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { IfStatementSemantics } from "./if-statement-semantics";
import type { IfStatementTypeSemantics } from "./if-statement-type-semantics";
import type { Expression } from "../../expressions";
import { Statement } from "../statement";
import type { IfStatementContext } from "../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";

/**
 * If statement class, which represents if, else-if and else statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class IfStatement extends Statement<IfStatementSemantics, IfStatementTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IfStatementContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_ifStatement;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return IfStatement.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return IfStatement.ruleName;
	}

	protected readonly _children: Array<Expression | Statement>;

	constructor(antlrRuleCtx: IfStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._typeSemantics = {};
	}

	/**
	 * The children of this AST node.
	 *
	 * May contain both {@link Expression expressions} and {@link Statement statements}, as it will always contain
	 * an expression at index 03 to represent the condition.
	 */
	public get children(): Array<Expression | Statement> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): IfStatementContext {
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
		// There will be always at least two children
		const condition: Expression = <Expression>this.children[0];
		const body: Statement = <Statement>this.children[1];
		const alternativeBranch: IfStatement | Statement | null =
			this.children.length > 2 ? <IfStatement | Statement>this.children[2] : null;

		// Ensure that the children are fully present and not undefined
		if (!condition || !body) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			condition: condition,
			ifBranch: body,
			elseBranch: alternativeBranch ?? undefined,
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
	public primarySemanticTypeChecking = undefined; // If-statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.ifStatement;
	readonly targetCodeGenerator = this.codeGenerator.ifStatement;
}
