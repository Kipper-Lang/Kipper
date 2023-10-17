/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @since 0.7.0
 */
import type { KipperProgramContext } from "../../../program-ctx";
import type { KipperError } from "../../../../errors";
import { KipperNotImplementedError } from "../../../../errors";
import type { CompilableASTNode } from "../../../ast";
import { KipperSemanticErrorHandler } from "./semantics-error-handler";
import { getParseRuleSource } from "../../../../tools";

/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any logical issue is found.
 * @since 0.7.0
 */
export abstract class KipperSemanticsAsserter extends KipperSemanticErrorHandler {
	public readonly programCtx: KipperProgramContext;

	protected constructor(programCtx: KipperProgramContext) {
		super();
		this.programCtx = programCtx;
	}

	/**
	 * Updates the given error and adds the proper traceback data, and returns it.
	 * @param error The error to update.
	 * @param overwriteCtx The context to overwrite the current context with. This is used when a parent checks children
	 * semantics in order to provide the correct traceback data and errors occur in the children.
	 * @returns The Kipper error.
	 * @protected
	 */
	protected assertError(error: KipperError, overwriteCtx?: CompilableASTNode): KipperError {
		if (overwriteCtx) {
			this.setTracebackData({ ctx: overwriteCtx });
		}

		// Update error metadata
		error.setTracebackData({
			location: { line: this.line ?? 1, col: this.col ?? 0 },
			filePath: this.programCtx.filePath,
			tokenSrc: this.ctx ? getParseRuleSource(this.ctx.antlrRuleCtx) : undefined,
			streamSrc: this.programCtx.stream,
			errorNode: this.ctx,
		});
		return error;
	}

	/**
	 * Modifies the metadata for a {@link KipperNotImplementedError}
	 * @param error The {@link KipperNotImplementedError} instance.
	 * @since 0.7.0
	 */
	public notImplementedError(error: KipperNotImplementedError): KipperNotImplementedError {
		return this.assertError(error);
	}
}
