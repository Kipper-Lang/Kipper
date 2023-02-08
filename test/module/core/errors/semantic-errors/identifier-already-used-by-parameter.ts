import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IdentifierAlreadyUsedByParameterError", () => {
	it("Overwrite by other parameter", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("def f(x: num, x: num) -> void {};", defaultConfig);
		} catch (e) {
			assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByParameterError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
	});

	describe("Override from Root Function Scope", () => {
		it("Redeclaration by variable", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def f(x: num) -> void { var x: num = 4; };", defaultConfig);
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByParameterError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
		});
	});

	describe("Override from Nested Function Scope", () => {
		it("Redeclaration by variable", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def f(x: num) -> void { { var x: num = 4; } };", defaultConfig);
			} catch (e) {
				assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByParameterError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
		});
	});
});
