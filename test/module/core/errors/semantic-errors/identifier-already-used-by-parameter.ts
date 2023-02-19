import { KipperCompiler, KipperError } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("IdentifierAlreadyUsedByParameterError", () => {
	it("Overwrite by other parameter", async () => {
		try {
			await new KipperCompiler().compile("def f(x: num, x: num) -> void {};", defaultConfig);
		} catch (e) {
			assert.equal(
				(<KipperError>e).constructor.name,
				"IdentifierAlreadyUsedByParameterError",
				"Expected different error",
			);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
	});

	describe("Override from Root Function Scope", () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("def f(x: num) -> void { var x: num = 4; };", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByParameterError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
		});
	});

	describe("Override from Nested Function Scope", () => {
		it("Redeclaration by variable", async () => {
			try {
				await new KipperCompiler().compile("def f(x: num) -> void { { var x: num = 4; } };", defaultConfig);
			} catch (e) {
				assert(
					(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByParameterError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByParameterError'");
		});
	});
});
