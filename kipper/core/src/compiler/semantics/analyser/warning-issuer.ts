import type { KipperProgramContext } from "../../program-ctx";
import { KipperSemanticErrorHandler } from "./err-handler";
import { getParseRuleSource } from "../../../tools";
import type { CompilableASTNode, Expression, ExpressionStatement } from "../../ast";
import type { KipperWarning } from "../../../warnings";
import { UselessExpressionStatementWarning } from "../../../warnings";

/**
 * A warning issuer, which is used to check for certain conditions and report warnings to the program context if needed.
 * @since 0.10.0
 */
export class KipperWarningIssuer extends KipperSemanticErrorHandler {
	private readonly _programCtx: KipperProgramContext;

	constructor(programCtx: KipperProgramContext) {
		super();
		this._programCtx = programCtx;
	}

	/**
	 * The program context of this issuer.
	 * @since 0.10.0
	 */
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * Issues a warning to the program context.
	 * @param warning The warning to report.
	 * @since 0.10.0
	 */
	public issueWarning(warning: KipperWarning) {
		warning = this.assertWarning(warning);
		this.programCtx.reportWarning(warning);
	}

	/**
	 * Updates the given warning and adds the proper traceback data, and returns it.
	 * @param warning The warning to update.
	 * @param overwriteCtx The context to overwrite the current context with. This is used when a parent checks children
	 * semantics in order to provide the correct traceback data and errors occur in the children.
	 * @returns The Kipper warning.
	 * @since 0.10.0
	 * @protected
	 */
	protected assertWarning(warning: KipperWarning, overwriteCtx?: CompilableASTNode): KipperWarning {
		if (overwriteCtx) {
			this.setTracebackData({ ctx: overwriteCtx });
		}

		// Update warning metadata
		warning.setTracebackData({
			location: { line: this.line ?? 1, col: this.col ?? 0 },
			filePath: this.programCtx.filePath,
			tokenSrc: this.ctx ? getParseRuleSource(this.ctx.antlrRuleCtx) : undefined,
			streamSrc: this.programCtx.stream,
			errorNode: this.ctx,
		});
		return warning;
	}

	/**
	 * Checks whether the given expression statement is useless, and if so, issues a warning.
	 * @param expStatement The expression statement to check.
	 * @since 0.10.0
	 */
	public uselessStatement(expStatement: ExpressionStatement): void {
		const hasSideEffects = (node: Expression): boolean =>
			node.hasSideEffects() || node.children.some((child) => hasSideEffects(child));

		// Check whether the expression statement has side effects
		const expStatementHasSideEffects = expStatement.children.some(hasSideEffects);
		if (!expStatementHasSideEffects) {
			this.issueWarning(new UselessExpressionStatementWarning());
		}
	}
}
