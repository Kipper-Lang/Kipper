import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UndefinedConstantError", () => {
	it("Error", async () => {
		try {
			await new KipperCompiler().compile(`const invalid: str;`, defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UndefinedConstantError", "Expected different error");
			assert((<KipperError>e).name === "UndefinedConstantError", "Expected different error");
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
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});
