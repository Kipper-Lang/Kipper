import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureWarningWasReported, ensureTracebackDataExists } from ".";
import { assert } from "chai";

describe("UselessExpressionStatementWarning", () => {
	describe("Warning", () => {
		it("Useless constant", async () => {
			let result = await new KipperCompiler().compile("1;", defaultConfig);

			// Ensure a warning is given and is not undefined
			ensureTracebackDataExists(result.warnings[0]);
			ensureWarningWasReported(result.programCtx);
			assert.equal(
				result.warnings[0].constructor.name,
				"UselessExpressionStatementWarning",
				"Expected different warning",
			);
		});
		[
			{ code: "1 + 2;", name: "Single" },
			{ code: "1 + 2 + 3 / 4 * 5 ** 6;", name: "Chained" },
		].forEach((o) => {
			it(`Useless arithmetic expression (${o.name})`, async () => {
				let result = await new KipperCompiler().compile(o.code, defaultConfig);

				// Ensure a warning is given and is not undefined
				ensureTracebackDataExists(result.warnings[0]);
				ensureWarningWasReported(result.programCtx);
				assert.equal(
					result.warnings[0].constructor.name,
					"UselessExpressionStatementWarning",
					"Expected different warning",
				);
			});
		});

		[
			{ code: "true && false;", name: "Single" },
			{ code: "true && false && true && false;", name: "Chained" },
		].forEach((o) => {
			it(`Useless boolean expression (${o.name})`, async () => {
				let result = await new KipperCompiler().compile(o.code, defaultConfig);

				// Ensure a warning is given and is not undefined
				ensureTracebackDataExists(result.warnings[0]);
				ensureWarningWasReported(result.programCtx);
				assert.equal(
					result.warnings[0].constructor.name,
					"UselessExpressionStatementWarning",
					"Expected different warning",
				);
			});
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
