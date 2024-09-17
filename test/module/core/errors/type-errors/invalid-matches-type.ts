import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidMatchesTypeError", () => {
	describe("Error", () => {
		it("Using primitive type", async () => {
			try {
				await new KipperCompiler().compile("var x: obj = {}; x matches str;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidMatchesTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidMatchesTypeError'");
		});

		it("Using class type", async () => {
			try {
				await new KipperCompiler().compile("var x: obj = {}; class A {}; x matches A;", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidMatchesTypeError", "Expected different error");
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidMatchesTypeError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("interface A {}; var x: obj = {}; x matches A;", defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
	});
});
