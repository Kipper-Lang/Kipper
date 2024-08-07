/**
 * Error handler which handles semantic errors for {@link CompilableASTNode compilable AST nodes}.
 * @since 0.8.0
 */
import type { CompilableASTNode } from "../../../ast";
import type { KipperFileStream } from "../../../lexer-parser";
import type { KipperError } from "../../../../errors";
import { getParseRuleSource } from "../../../../tools";

/**
 * Error handler which handles semantic errors for {@link CompilableASTNode compilable AST nodes}.
 * @since 0.8.0
 */
export abstract class KipperSemanticErrorHandler {
	protected line: number | undefined;
	protected col: number | undefined;
	protected ctx: CompilableASTNode | undefined;
	protected filePath: string | undefined;
	protected stream: KipperFileStream | undefined;

	/**
	 * Sets the traceback related metadata that will be used to create a traceback for an {@link KipperError} instance.
	 *
	 * In case that {@link data.ctx} is set and other fields are missing, these fields will be filled up using the data
	 * in the {@link data.ctx AST node ctx} instance.
	 * @param data The traceback data that will be used to initialise an {@link KipperError} instance.
	 * @since 0.8.0
	 */
	public setTracebackData(data: {
		ctx?: CompilableASTNode;
		line?: number;
		col?: number;
		filePath?: string;
		stream?: KipperFileStream;
	}): void {
		this.ctx = data.ctx;

		// Default to using context metadata in case that the fields were not manually set
		this.line = data.line ?? data.ctx?.antlrRuleCtx.start.line;
		this.col = data.col ?? data.ctx?.antlrRuleCtx.start.charPositionInLine;
		this.filePath = data.filePath ?? data.ctx?.programCtx.filePath;
		this.stream = data.stream ?? data.ctx?.programCtx.stream;
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
		error.setTracebackData({
			location: { line: this.line ?? 1, col: this.col ?? 0 },
			filePath: this.filePath,
			tokenSrc: this.ctx ? getParseRuleSource(this.ctx.antlrRuleCtx) : undefined,
			streamSrc: this.stream,
			errorNode: this.ctx,
		});
		return error;
	}
}
