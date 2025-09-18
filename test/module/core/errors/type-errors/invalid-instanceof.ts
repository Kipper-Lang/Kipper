import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidInstanceOfTypeError", () => {
	describe("Error", () => {
		it("Using primitive type", async () => {
			try {
				await new KipperCompiler().compile("var x: obj = {}; x instanceof str;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidInstanceOfTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidInstanceOfTypeError'");
		});

		it("Using interface type", async () => {
			try {
				await new KipperCompiler().compile("var x: obj = {}; interface A {}; x instanceof A;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidInstanceOfTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidInstanceOfTypeError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("class A {}; var x: obj = {}; x instanceof A;", defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
	});
});
