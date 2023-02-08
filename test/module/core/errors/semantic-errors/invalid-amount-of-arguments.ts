import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidAmountOfArgumentsError", () => {
	describe("Error", () => {
		it("One too many", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('call print("x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected proper error");
				assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Two too many", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('call print("x", "x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected proper error");
				assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Three too many", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('call print("x", "x", "x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected proper error");
				assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Too little", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("call print();", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected proper error");
				assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('call print("x");', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected result");
		assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
	});
});
