/**
 * Kipper Asserter, which is used to assert certain truths and throw {@link KipperError KipperErrors} in case that
 * any form of misuse is found.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.7.0
 */
import type { KipperProgramContext } from "../program-ctx";
import type { KipperError } from "../../errors";
import { KipperSemanticErrorHandler } from "./semantics-error-handler";
import { getParseRuleSource } from "../../utils";
import { CompoundStatement } from "./language";
import { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../scope-declaration";
import { BuiltInFunction } from "../runtime-built-ins";

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
	 * Tries to
	 * @param identifier The identifier to search for.
	 * @param scopeCtx The scopeCtx to search in.
	 * @since 0.8.0
	 */
	protected getDeclaration(
		identifier: string,
		scopeCtx?: CompoundStatement,
	): ScopeFunctionDeclaration | ScopeVariableDeclaration | BuiltInFunction | undefined {
		return (
			(scopeCtx // First try to fetch from the local scope if it is defined
				? scopeCtx.localScope.getVariableRecursively(identifier)
				: this.programCtx.globalScope.getDeclaration(identifier)) ??
			this.programCtx.globalScope.getDeclaration(identifier) ?? // Fall back to looking globally
			this.programCtx.getBuiltInFunction(identifier) // Fall back to searching through built-in functions
		);
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

		return error;
	}
}
