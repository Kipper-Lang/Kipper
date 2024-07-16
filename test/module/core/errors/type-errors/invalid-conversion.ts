import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidConversionTypeError", () => {
	describe("Error", () => {
		it("str as Func", async () => {
			try {
				await new KipperCompiler().compile('"5" as Func;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("num as Func", async () => {
			try {
				await new KipperCompiler().compile("5 as Func;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("bool as Func", async () => {
			try {
				await new KipperCompiler().compile("true as Func;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as str", async () => {
			try {
				await new KipperCompiler().compile("print as str;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as num", async () => {
			try {
				await new KipperCompiler().compile("print as bool;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidConversionTypeError'");
		});

		it("func as bool", async () => {
			try {
				await new KipperCompiler().compile("print as bool;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidConversionTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
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
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
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
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
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
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
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
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});
	});
});
