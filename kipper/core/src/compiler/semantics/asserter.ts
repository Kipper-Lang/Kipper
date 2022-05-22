/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */
import { KipperProgramContext } from "../program-ctx";
import { CompilableParseToken } from "./tokens";
import { KipperError } from "../../errors";
import { LogLevel } from "../../logger";

/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @since 0.7.0
 */
export abstract class KipperAsserter {
	public readonly programCtx: KipperProgramContext;

	private line: number | undefined;

	private col: number | undefined;

	private ctx: CompilableParseToken<any> | undefined;

	protected constructor(programCtx: KipperProgramContext) {
		this.programCtx = programCtx;
	}

	/**
	 * Sets the traceback related line and column info.
	 * @param ctx The token context.
	 * @param line The line that is being processed at the moment.
	 * @param col The column that is being processed at the moment.
	 * @since 0.3.0
	 */
	public setTracebackData(ctx?: CompilableParseToken<any>, line?: number, col?: number): void {
		this.line = line;
		this.col = col;
		this.ctx = ctx;
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
		error.setMetadata({
			location: { line: this.line ?? 1, col: this.col ?? 1 },
			filePath: this.programCtx.filePath,
			tokenSrc: undefined,
		});
		error.antlrCtx = this.ctx?.antlrRuleCtx;

		// Log the error
		this.programCtx.logger.reportError(LogLevel.ERROR, error);

		return error;
	}
}
