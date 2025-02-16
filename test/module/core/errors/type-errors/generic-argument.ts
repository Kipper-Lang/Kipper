import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";
import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";

describe("GenericArgumentTypeError", () => {
	describe("Error", () => {
		it("Array<num> = Array<str>", async () => {
			try {
				await new KipperCompiler().compile("var x: Array<num> = ['0'];", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).cause?.constructor.name, "GenericArgumentTypeError", "Expected different error");
				assert((<KipperError>e).cause?.name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("Array<num> = Array<bool>", async () => {
			try {
				await new KipperCompiler().compile("var x: Array<num> = [true];", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).cause?.constructor.name, "GenericArgumentTypeError", "Expected different error");
				assert((<KipperError>e).cause?.name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("Array<num> = Array<any>", async () => {
			try {
				await new KipperCompiler().compile("var y: Array<any> = []; var x: Array<num> = y;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).cause?.constructor.name, "GenericArgumentTypeError", "Expected different error");
				assert((<KipperError>e).cause?.name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});
	});

	describe("NoError", () => {
		it("Array<num> = Array<num>", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: Array<num> = [0];`, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("Array<str> = Array<str>", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: Array<str> = ['0'];`, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("Array<any> = Array<any>", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: Array<any> = [];`, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("Array = Array", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: Array<any> = [];`, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});
	});
});
