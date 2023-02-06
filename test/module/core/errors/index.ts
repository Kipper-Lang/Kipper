import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { CompileConfig, KipperError, KipperProgramContext } from "@kipper/core";
import { assert } from "chai";

export const defaultTarget = new KipperTypeScriptTarget();

export const defaultConfig: CompileConfig = {
	abortOnFirstError: true,
	target: defaultTarget,
};

export function ensureTracebackDataExists(e: KipperError): void {
	assert(e.line != undefined, "Expected existing 'line' meta field");
	assert(e.col != undefined, "Expected existing 'col' meta field");
	assert(e.tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
	assert(e.filePath != undefined, "Expected existing 'filePath' meta field");
}

export function ensureErrorWasReported(programCtx?: KipperProgramContext): void {
	if (programCtx) {
		assert(programCtx.hasFailed, "Expected program to have failed");
		assert(programCtx.abstractSyntaxTree?.hasFailed, "Expected AST root-node to have failed");
	}
}

describe("Compilation errors", () => {});
