import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";

describe("ValueNotIndexableTypeError", () => {
	it("Error", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile(`const invalid: num = 1; invalid[0];`, defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "ValueNotIndexableTypeError", "Expected proper error");
			assert((<KipperError>e).name === "TypeError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'ValueNotIndexableTypeError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('var valid: str = "3"; valid[0];', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert(result !== undefined, "Expected result");
		assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
	});
});
