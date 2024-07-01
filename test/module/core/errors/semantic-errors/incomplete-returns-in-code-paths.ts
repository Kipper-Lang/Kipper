import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IncompleteReturnsInCodePathsError", () => {
	describe("Error", () => {
		it("Empty Body", async () => {
			try {
				await new KipperCompiler().compile(`def x() -> num {};`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IncompleteReturnsInCodePathsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple One-Branch If (Else missing)", async () => {
			try {
				// In many modern languages this wouldn't be an issue, since the compiler recognises that the condition
				// will always be true, but here we don't have that luxury (for now).
				await new KipperCompiler().compile(`def x() -> num { if (true) { return 1; } };`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IncompleteReturnsInCodePathsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple Two-Branch If (If empty)", async () => {
			try {
				await new KipperCompiler().compile(`def x() -> num { if (true) {  } else { return 1; } };`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IncompleteReturnsInCodePathsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		it("Simple Two-Branch If (Else empty)", async () => {
			try {
				await new KipperCompiler().compile(`def x() -> num { if (true) { return 1; } else { } };`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IncompleteReturnsInCodePathsError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IncompleteReturnsInCodePaths'");
		});

		describe("Nested Multi-Branch If (Nested If Empty)", () => {
			it("First branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { } else { return 1; } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { return 1; } else { if (true) { } else { return 1; } } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});

		describe("Nested Multi-Branch If (Nested Else Empty)", () => {
			it("First branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { return 1; } else { if (true) { return 1; } else { } } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});

		describe("Nested Multi-Branch If (Nested Else Missing)", () => {
			it("First branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});

			it("Second branch", async () => {
				try {
					await new KipperCompiler().compile(
						`def x() -> num { if (true) { if (true) { return 1; } else { } } else { return 1; } };`,
						defaultConfig,
					);
				} catch (e) {
					assert.equal(
						(<KipperError>e).constructor.name,
						"IncompleteReturnsInCodePathsError",
						"Expected different error",
					);
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'IncompleteReturnsInCodePaths'");
			});
		});
	});
});
