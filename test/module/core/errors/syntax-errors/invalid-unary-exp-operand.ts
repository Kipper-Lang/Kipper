import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidUnaryExpressionOperandError", () => {
	describe("Error", () => {
		it("Invalid constant operand", async () => {
			try {
				await new KipperCompiler().compile(`5++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert.equal((<KipperError>e).name, "SyntaxError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid constant operand (nested)", async () => {
			try {
				await new KipperCompiler().compile(`(5)++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert.equal((<KipperError>e).name, "SyntaxError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid reference operand", async () => {
			try {
				await new KipperCompiler().compile(`var x: num = 5; ++x++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert.equal((<KipperError>e).name, "SyntaxError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidUnaryExpressionOperandError'");
		});

		it("Invalid reference operand (nested)", async () => {
			try {
				await new KipperCompiler().compile(`var x: num = 5; ((x + 5))++;`, defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"InvalidUnaryExpressionOperandError",
					"Expected different error",
				);
				assert.equal((<KipperError>e).name, "SyntaxError", "Expected different error");
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
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("Identifier in Tangled Expression", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 5; (x)++;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidUnaryExpressionOperandError'");
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("Identifier in Tangled Expression (Nested)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 5; ((x))++;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidUnaryExpressionOperandError'");
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});
	});
});
