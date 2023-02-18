import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UnknownTypeError", () => {
	["x", "number", "UNKNOWN"].forEach((typeName) => {
		it(typeName, async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var invalid: ${typeName} = 4;`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UnknownTypeError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UnknownTypeError'");
		});
	});
});
