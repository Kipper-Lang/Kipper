import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidUnaryExpressionOperandError", () => {
	describe("Error", () => {
		it("Invalid constant operand", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`5++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "SyntaxError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid constant operand (nested)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`(5)++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "SyntaxError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid reference operand", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: num = 5; ++x++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "SyntaxError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid reference operand (nested)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`var x: num = 5; ((x + 5))++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert((<KipperError>e).name === "SyntaxError", "Expected different error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});
	});

	describe("NoError", () => {
		it("Regular Unary Expression", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 5; x++;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidUnaryExpressionOperandError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("Identifier in Tangled Expression", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 5; (x)++;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidUnaryExpressionOperandError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});

		it("Identifier in Tangled Expression (Nested)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 5; ((x))++;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidUnaryExpressionOperandError'");
			}
			assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
			assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
		});
	});
});
