/**
 * CatchClause class, which represents try-catch statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
import type { CompilableNodeParent } from "../../../../compilable-ast-node";
import type { ErrorBindingDeclaration } from "../../../declarations";
import type { CatchClauseContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { Statement } from "../../statement";
import type { Expression } from "../../../expressions";
import type { CatchClauseSemantics } from "./catch-clause-semantics";
import type { CatchClauseTypeSemantics } from "./catch-clause-type-semantics";
import type { CompoundStatement } from "../../compound-statement";

/**
 * CatchClause class, which represents try-catch statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class CatchClause extends Statement<CatchClauseSemantics, CatchClauseTypeSemantics> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.13.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_catchClause;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.13.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CatchClauseContext;

	protected readonly _children: Array<Expression | Statement | ErrorBindingDeclaration>;

	constructor(antlrRuleCtx: CatchClauseContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._typeSemantics = {};
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.13.0
	 */
	public override get kind() {
		return CatchClause.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.13.0
	 */
	public override get ruleName() {
		return CatchClause.ruleName;
	}

	/**
	 * The children of this AST node.
	 *
	 * May contain both {@link Expression expressions} and {@link Statement statements}, as it will always contain
	 * an expression at index 03 to represent the condition.
	 */
	public get children(): Array<Expression | Statement | ErrorBindingDeclaration> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): CatchClauseContext {
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
		const errorBinding = this.children[0] as ErrorBindingDeclaration;
		const body = this.children[1] as CompoundStatement;
		const identifier = errorBinding.getSemanticData().identifier;

		this.semanticData = {
			identifier,
			errorBinding,
			body,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.13.0
	 */
	public primarySemanticTypeChecking = undefined; // Try-Catch-statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.13.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.catchClause;
	readonly targetCodeGenerator = this.codeGenerator.catchClause;
}
