import { KipperCompiler } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { assert } from "chai";

describe("Error recovery", () => {
	const defaultTarget = new KipperTypeScriptTarget();
	const activeErrorRecovery = {
		recover: true,
		target: defaultTarget,
	};
	const disabledErrorRecovery = {
		recover: false,
		target: defaultTarget,
	};

	// Test cases for error recovery
	const errorRecoveryTestCases = {
		noError: "var x: num = 5;",
		semanticError: ["const x: str;", "def x() -> num { }; unknown; return;"],
		typeError: ["const x: str = 5;", 'var i: str = 5; true + "5"; def x() -> num { return ""; }'],
	};

	describe("Disabled", () => {
		it("No error", async () => {
			const result = await new KipperCompiler().compile(errorRecoveryTestCases["noError"], disabledErrorRecovery);

			assert(result.errors.length === 0, "Expected no errors");
		});

		describe("Semantic error", () => {
			it("One error", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["semanticError"][0],
					disabledErrorRecovery,
				);

				assert(result.errors.length === 1, "Expected only one error");
			});

			it("Multiple errors", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["semanticError"][1],
					disabledErrorRecovery,
				);

				assert(result.errors.length === 1, "Expected only one error");
			});
		});

		describe("Type error", () => {
			it("One error", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["typeError"][0],
					disabledErrorRecovery,
				);

				assert(result.errors.length === 1, "Expected only one error");
			});

			it("Multiple errors", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["typeError"][1],
					disabledErrorRecovery,
				);

				assert(result.errors.length === 1, "Expected only one error");
			});
		});
	});

	describe("Enabled", () => {
		it("No error", async () => {
			const result = await new KipperCompiler().compile(errorRecoveryTestCases["noError"], activeErrorRecovery);

			assert(result.errors.length === 0, "Expected no errors");
		});

		describe("Semantic error", () => {
			it("One error", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["semanticError"][0],
					activeErrorRecovery,
				);

				assert(result.errors.length === 1, "Expected only one error");
			});

			it("Multiple errors", async () => {
				const result = await new KipperCompiler().compile(
					errorRecoveryTestCases["semanticError"][1],
					activeErrorRecovery,
				);

				assert(result.errors.length === 3, "Expected only one error");
			});
		});

		describe("Type error", () => {
			it("One error", async () => {
				const result = await new KipperCompiler().compile(errorRecoveryTestCases["typeError"][0], activeErrorRecovery);

				assert(result.errors.length === 1, "Expected only one error");
			});

			it("Multiple errors", async () => {
				const result = await new KipperCompiler().compile(errorRecoveryTestCases["typeError"][1], activeErrorRecovery);

				assert(result.errors.length === 3, "Expected only one error");
			});
		});
	});
});
