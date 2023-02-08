import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("ReservedIdentifierOverwriteError", () => {
	it("Error", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("var instanceof: str;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "ReservedIdentifierOverwriteError", "Expected proper error");
			assert((<KipperError>e).name === "IdentifierError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'ReservedIdentifierOverwriteError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('var valid: str = "3";', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});
