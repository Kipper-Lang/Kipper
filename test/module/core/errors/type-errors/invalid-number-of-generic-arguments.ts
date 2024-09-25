import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";
import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";

describe("InvalidAmountOfGenericArgumentsError", () => {
	describe("Error", () => {
		it("Too many generic arguments", async () => {
			try {
				await new KipperCompiler().compile("var x: Array<num, str>;", defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidAmountOfGenericArgumentsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfGenericArgumentsError'");
		});

		it("Too few generic arguments", async () => {
			try {
				await new KipperCompiler().compile("var x: Array<>;", defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidAmountOfGenericArgumentsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfGenericArgumentsError'");
		});
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
