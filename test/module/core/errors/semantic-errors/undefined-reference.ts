import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UndefinedReferenceError", () => {
	describe("Error", () => {
		it("Arithmetic assignment", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: str; x += "5";`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UndefinedReferenceError", "Expected different error");
				assert((<KipperError>e).name === "ReferenceError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UndefinedReferenceError'");
		});

		it("Arithmetic expression", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: num; x + 5;`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UndefinedReferenceError", "Expected different error");
				assert((<KipperError>e).name === "ReferenceError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UndefinedReferenceError'");
		});

		it("Identifier reference", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: str; x;`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UndefinedReferenceError", "Expected different error");
				assert((<KipperError>e).name === "ReferenceError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UndefinedReferenceError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile(
				'var str1: str = "3"; str1 += "5"; str1 = str1 + "5";',
				defaultConfig,
			);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});
