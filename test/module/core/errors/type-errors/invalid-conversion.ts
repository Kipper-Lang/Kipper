import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidConversionTypeError", () => {
	describe("Error", () => {
		it("str as func", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"5" as func;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("num as func", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("5 as func;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("bool as func", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("true as func;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("print as str;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("print as bool;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("print as bool;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});
	});

	describe("NoError", () => {
		it("num as str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("5 as str;", {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'InvalidConversionTypeError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("str as num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"5" as num;', {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'InvalidConversionTypeError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("bool as str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("true as str;", {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'InvalidConversionTypeError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("bool as num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("true as num;", {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'InvalidConversionTypeError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});
	});
});
