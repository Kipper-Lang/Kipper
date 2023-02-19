import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IdentifierAlreadyUsedByFunctionError", () => {
	describe("Same Global Scope", () => {
		it("Redeclaration by variable", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def x() -> void {}; var x: num = 4;", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
					"Expected different error",
				);
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
		});

		it("Redeclaration by function", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def x() -> void {} def x() -> void {}", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
					"Expected different error",
				);
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
		});

		it("Redeclaration by parameter", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def x() -> void {} def f(x: num) -> void {}", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
					"Expected different error",
				);
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
		});
	});

	describe("Global Override from Nested Scope", () => {
		it("Redeclaration by variable", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def x() -> void {}; { var x: num = 4; }", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
					"Expected different error",
				);
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
		});
	});

	describe("Nested Override from Deeper Nested Scope", () => {
		it("Redeclaration by variable", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("def x() -> void {}; { { var x: num = 4; } }", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
					"Expected different error",
				);
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByFunctionError'");
		});
	});
});
