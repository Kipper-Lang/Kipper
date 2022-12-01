/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @since 0.7.0
 */
import type { KipperProgramContext } from "../../../program-ctx";
import type { KipperError } from "../../../../errors";
import { KipperNotImplementedError } from "../../../../errors";
import { KipperSemanticErrorHandler } from "./semantics-error-handler";
import { getParseRuleSource } from "../../../../utils";

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
	 * Updates the error and adds the proper traceback data, and returns it.
	 * @param error The error to update.
	 * @returns The Kipper error.
	 */
	protected assertError(error: KipperError): KipperError {
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
