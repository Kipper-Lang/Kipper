import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";

describe("ValueNotIndexableTypeError", () => {
	describe("Error", () => {
		it("Bracket Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`const invalid: num = 1; invalid[0];`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ValueNotIndexableTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ValueNotIndexableTypeError'");
		});

		it("Slice Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`const invalid: num = 1; invalid[0:1];`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ValueNotIndexableTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ValueNotIndexableTypeError'");
		});
	});

	describe("NoError", () => {
		it("Bracket Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var valid: str = "3"; valid[0];', defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("Slice Notation Member Access", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var valid: str = "3"; valid[0:1];', defaultConfig);
			} catch (e) {
				assert.fail(`Expected no '${(<KipperError>e).name}'`);
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});
	});
});
