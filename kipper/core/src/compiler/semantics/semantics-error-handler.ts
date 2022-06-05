/**
 * Error handler which handles semantic errors for {@link CompilableASTNode compilable AST nodes}.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type { CompilableASTNode } from "../parser";
import type { KipperParseStream } from "../parser";
import { KipperError } from "../../errors";
import { getParseRuleSource } from "../../utils";

/**
 * Error handler which handles semantic errors for {@link CompilableASTNode compilable AST nodes}.
 * @since 0.8.0
 */
export abstract class KipperSemanticErrorHandler {
	protected line: number | undefined;

	protected col: number | undefined;

	protected ctx: CompilableASTNode<any> | undefined;

	protected filePath: string | undefined;

	protected stream: KipperParseStream | undefined;

	/**
	 * Sets the traceback related line and column info.
	 * @param ctx The AST node context.
	 * @param line The line that is being processed at the moment.
	 * @param col The column that is being processed at the moment.
	 * @param filePath The path to the file where the error occurred.
	 * @param stream The UTF-16 token stream.
	 * @since 0.8.0
	 */
	public setTracebackData(
		ctx?: CompilableASTNode<any>,
		line?: number,
		col?: number,
		filePath?: string,
		stream?: KipperParseStream,
	): void {
		this.line = line;
		this.col = col;
		this.ctx = ctx;
		this.filePath = filePath;
		this.stream = stream;
	}

	/**
	 * Updates the error and adds the proper traceback data, and returns it.
	 *
	 * This function also automatically logs the error.
	 * @param error The error to update.
	 * @returns The Kipper error.
	 */
	protected error(error: KipperError): KipperError {
		// Update error metadata
		error.setMetadata({
			location: { line: this.line ?? 1, col: this.col ?? 0 },
			filePath: this.filePath,
			tokenSrc: this.ctx ? getParseRuleSource(this.ctx.antlrRuleCtx) : undefined,
			streamSrc: this.stream,
		});
		error.antlrCtx = this.ctx?.antlrRuleCtx;
		return error;
	}
}
