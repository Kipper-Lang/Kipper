import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("ReadOnlyWriteTypeError", () => {
	it("Error", async () => {
		try {
			await new KipperCompiler().compile(`const invalid: str = "3"; invalid = "5";`, defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "ReadOnlyWriteTypeError", "Expected different error");
			assert((<KipperError>e).name === "TypeError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'ReadOnlyWriteTypeError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('var valid: str = "3"; valid = "5";', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
	});
});
