import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidRelationalComparisonTypeError", () => {
	it("Error", async () => {
		try {
			await new KipperCompiler().compile(`"5" > 5;`, defaultConfig);
		} catch (e) {
			assert.equal(
				(<KipperError>e).constructor.name,
				"InvalidRelationalComparisonTypeError",
				"Expected different error",
			);
			assert((<KipperError>e).name === "TypeError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'InvalidRelationalComparisonTypeError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("5 > 4;", defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});