import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UndefinedConstantError", () => {
	it("Error", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile(`const invalid: str;`, defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UndefinedConstantError", "Expected proper error");
			assert((<KipperError>e).name === "UndefinedConstantError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UndefinedConstantError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('const valid: str = "3";', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected result");
		assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
	});
});
