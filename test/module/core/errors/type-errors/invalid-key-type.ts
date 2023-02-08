import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";

describe("InvalidKeyTypeError", () => {
	describe("Error", () => {
		it("Bracket Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`const invalid: str = "3"; invalid["a"];`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidKeyTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidKeyTypeError'");
		});

		it("Slice Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`const invalid: str = "3"; invalid["a":"b"];`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidKeyTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidKeyTypeError'");
		});
	});

	describe("NoError", () => {
		it("Bracket Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var valid: str = "3"; valid[0];', defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.notEqual(result, undefined, "Expected result");
			assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
		});

		it("Slice Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var valid: str = "3"; valid[0:1];', defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.notEqual(result, undefined, "Expected result");
			assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
		});
	});
});
