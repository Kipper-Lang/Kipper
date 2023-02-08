import { KipperCompiler, KipperCompileResult, KipperError, KipperSyntaxError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("MissingFunctionBodyError", () => {
	it("Error", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("def x() -> void;", defaultConfig);
		} catch (e) {
			assert((<KipperSyntaxError>e).constructor.name === "MissingFunctionBodyError", "Expected proper error");
			assert((<KipperSyntaxError>e).name === "SyntaxError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'KipperSyntaxError'");
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("def x() -> void {}", defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});
