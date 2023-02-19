import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureWarningWasReported, ensureTracebackDataExists } from ".";
import { assert } from "chai";

describe("UselessExpressionStatementWarning", () => {
	describe("Warning", () => {
		it("Useless arithmetic expression", async () => {
			let result = await new KipperCompiler().compile("1;", defaultConfig);

			// Ensure a warning is given and is not undefined
			ensureTracebackDataExists(result.warnings[0]);
			ensureWarningWasReported(result.programCtx);
			assert.equal(
				result.warnings[0].constructor.name,
				"UselessExpressionStatementWarning",
				"Expected different warning",
			);
			return;
		});

		it("Useless identifier reference", async () => {
			const result = await new KipperCompiler().compile("var x: num = 5; x;", defaultConfig);

			// Ensure a warning is given and is not undefined
			ensureTracebackDataExists(result.warnings[0]);
			ensureWarningWasReported(result.programCtx);
			assert.equal(
				result.warnings[0].constructor.name,
				"UselessExpressionStatementWarning",
				"Expected different warning",
			);
			return;
		});
	});

	describe("No Warning", () => {
		it("Assignment expression", async () => {
			let result = await new KipperCompiler().compile("var x: num = 5; x = 5;", defaultConfig);

			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
			assert.isEmpty(result?.programCtx.warnings, "Expected no warnings");
		});

		it("Function call", async () => {
			let result = await new KipperCompiler().compile("def f() -> void { }; f();", defaultConfig);

			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
			assert.isEmpty(result?.programCtx.warnings, "Expected no warnings");
		});

		it("Child has side effects", async () => {
			let result = await new KipperCompiler().compile("var x: num = 5; 5 + (x += 5);", defaultConfig);

			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
			assert.isEmpty(result?.programCtx.warnings, "Expected no warnings");
		});
	});
});
