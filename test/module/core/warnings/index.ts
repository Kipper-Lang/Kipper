import { defaultConfig, ensureTracebackDataExists } from "../errors";
import type { KipperProgramContext } from "@kipper/core";
import { assert } from "chai";

export function ensureWarningWasReported(programCtx?: KipperProgramContext): void {
	if (programCtx) {
		assert(programCtx.warnings.length > 0, "Expected program to have warnings	");
	}
}

export { defaultConfig as defaultConfig, ensureTracebackDataExists as ensureTracebackDataExists };
