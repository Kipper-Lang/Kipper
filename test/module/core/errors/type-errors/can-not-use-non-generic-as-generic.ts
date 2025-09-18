import { KipperCompiler, type KipperCompileResult, type KipperError } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("CanNotUseNonGenericAsGenericTypeError", () => {
	it("Error", async () => {
		try {
			await new KipperCompiler().compile("var x: num<str>;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "CanNotUseNonGenericAsGenericTypeError");
			assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'CanNotUseNonGenericAsGenericTypeError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile(`var x: Array<num>;`, defaultConfig);
		} catch (e) {
			assert.fail(`Expected no error. Received '${e}'.`);
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
	});
});
