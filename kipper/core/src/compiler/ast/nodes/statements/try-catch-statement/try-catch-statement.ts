/**
 * TryCatchStatement class, which represents try-catch statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */

import type { TryCatchStatementContext } from "../../../../lexer-parser";
import { CatchClauseContext, FinallyClauseContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { Statement } from "../statement";
import type { Expression } from "../../expressions";
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { TryCatchStatementTypeSemantics } from "./try-catch-statement-type-semantics";
import type { CatchBlock, TryCatchStatementSemantics } from "./try-catch-statement-semantics";
import type { ParameterDeclaration } from "../../declarations";

/**
 * TryCatchStatement class, which represents try-catch statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class TryCatchStatement extends Statement<TryCatchStatementSemantics, TryCatchStatementTypeSemantics> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_tryCatchStatement;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TryCatchStatementContext;

	protected readonly _children: Array<Expression | Statement | ParameterDeclaration>;

	constructor(antlrRuleCtx: TryCatchStatementContext, parent: CompilableNodeParent) {
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
	 * @since 0.12.0
	 */
	public override get kind() {
		return TryCatchStatement.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.12.0
	 */
	public override get ruleName() {
		return TryCatchStatement.ruleName;
	}

	/**
	 * The children of this AST node.
	 *
	 * May contain both {@link Expression expressions} and {@link Statement statements}, as it will always contain
	 * an expression at index 03 to represent the condition.
	 */
	public get children(): Array<Expression | Statement | ParameterDeclaration> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): TryCatchStatementContext {
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
		const tryBlock: Statement = <Statement>this._children.shift();
		let catchClauses: CatchBlock[] = [];
		let finallyBlock: Statement | undefined = undefined;

		let finallyClauseExists = this.getAntlrRuleChildren().some((node) => node instanceof FinallyClauseContext);
		if (finallyClauseExists) {
			finallyBlock = <Statement>this._children.pop();
		}

		if (this._children.length === 1) {
			catchClauses.push({
				parameter: undefined,
				body: <Statement>this._children.pop(),
			});
		}

		for (let i = 0; i < this._children.length; i += 2) {
			const catchClause: CatchBlock = {
				parameter: <ParameterDeclaration>this._children[i],
				body: <Statement>this._children[i + 1],
			};
			catchClauses.push(catchClause);
		}

		this.semanticData = {
			tryBlock: tryBlock,
			catchBlock: catchClauses,
			finallyBlock: finallyBlock,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.12.0
	 */
	public primarySemanticTypeChecking = undefined; // Try-Catch-statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.12.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.tryCatchStatement;
	readonly targetCodeGenerator = this.codeGenerator.tryCatchStatement;
}
