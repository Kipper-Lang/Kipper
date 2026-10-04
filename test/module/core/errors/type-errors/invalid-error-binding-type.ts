import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidErrorBindingTypeError", () => {
	describe("Error", () => {
		it("num error binding", async () => {
			try {
				await new KipperCompiler().compile("try {} catch (e: num) {}", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidErrorBindingTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidErrorBindingTypeError'");
		});

		it("interface error binding", async () => {
			try {
				await new KipperCompiler().compile("interface A {}; try {} catch (e: A) {}", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidErrorBindingTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidErrorBindingTypeError'");
		});
	});

	describe("No Error", () => {
		it("no error type", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("try {} catch (e) {}", defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("any error binding", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("try {} catch (e: any) {}", defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("class error binding", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("class A {}; try {} catch (e: A) {}", defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});
	});
});
