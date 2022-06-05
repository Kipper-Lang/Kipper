/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */
import { KipperProgramContext } from "../program-ctx";
import { KipperError } from "../../errors";
import { LogLevel } from "../../logger";
import { KipperSemanticErrorHandler } from "./semantics-error-handler";
import { getParseRuleSource } from "../../utils";

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
	 *
	 * This function also automatically logs the error.
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
		});
		error.antlrCtx = this.ctx?.antlrRuleCtx;

		// Log the error
		this.programCtx.logger.reportError(LogLevel.ERROR, error);

		return error;
	}
}
