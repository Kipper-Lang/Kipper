import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidUnaryExpressionTypeError", () => {
	describe("Error", () => {
		it("+", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`+"5";`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidUnaryExpressionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionTypeError'");
		});

		it("-", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`-"5";`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidUnaryExpressionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionTypeError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("5 > 4;", defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected result");
		assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
	});
});
