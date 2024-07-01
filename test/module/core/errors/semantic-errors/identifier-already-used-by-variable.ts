import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IdentifierAlreadyUsedByVariableError", () => {
	describe("Same Global Scope", () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 5; var x: num = 5;", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("Redeclaration by function", async () => {
			try {
				await new KipperCompiler().compile("var x: num; def x() -> void {};", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("Redeclaration by parameter", async () => {
			try {
				await new KipperCompiler().compile("var x: num; def f(x: num) -> void {};", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});
	});

	describe("Same Nested Scope", async () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("{ var x: num = 5; var x: num = 5; }", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		// Functions and parameters are not allowed to be nested (Local functions are not implemented yet)
	});

	describe("Global Override from Nested Scope", () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 5; { var x: num = 5; }", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		// Functions and parameters are not allowed to be nested (Local functions are not implemented yet)
	});

	describe("Nested Override from Deeper Nested Scope", () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("var x: num = 5; { { var x: num = 5; } }", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		// Functions and parameters are not allowed to be nested (Local functions are not implemented yet)
	});
});
