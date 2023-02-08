import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IncompleteReturnsInCodePathsError", () => {
	describe("Error", () => {
		it("Empty Body", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`def x() -> num {};`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "IncompleteReturnsInCodePathsError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple One-Branch If (Else missing)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				// In many modern languages this wouldn't be an issue, since the compiler recognises that the condition
				// will always be true, but here we don't have that luxury (for now).
				result = await new KipperCompiler().compile(`def x() -> num { if (true) { return 1; } };`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "IncompleteReturnsInCodePathsError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple Two-Branch If (If empty)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(
					`def x() -> num { if (true) {  } else { return 1; } };`,
					defaultConfig,
				);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "IncompleteReturnsInCodePathsError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple Two-Branch If (Else empty)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(
					`def x() -> num { if (true) { return 1; } else { } };`,
					defaultConfig,
				);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "IncompleteReturnsInCodePathsError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		describe("Nested Multi-Branch If (Nested If Empty)", () => {
			it("First branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { } else { return 1; } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { return 1; } else { if (true) { } else { return 1; } } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});

		describe("Nested Multi-Branch If (Nested Else Empty)", () => {
			it("First branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { return 1; } else { if (true) { return 1; } else { } } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});

		describe("Nested Multi-Branch If (Nested Else Missing)", () => {
			it("First branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "IncompleteReturnsInCodePathsError", "Expected proper error");
					assert((<KipperError>e).name === "TypeError", "Expected proper error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});
	});
});
