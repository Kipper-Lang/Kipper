import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("BitwiseOperationTypeError", () => {
	describe("Bitshift", () => {
		it("str+num", async () => {
			try {
				await new KipperCompiler().compile('10 << "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});

		it("num+str", async () => {
			try {
				await new KipperCompiler().compile('10 >>> "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});

		it("str+num", async () => {
			try {
				await new KipperCompiler().compile('10 >> "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});
	});

	describe("Bitwise", () => {
		it("str+num", async () => {
			try {
				await new KipperCompiler().compile('10 & "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});
	});

	describe("Bitwise", () => {
		it("str+num", async () => {
			try {
				await new KipperCompiler().compile('10 | "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});
	});

	describe("Bitwise", () => {
		it("str+num", async () => {
			try {
				await new KipperCompiler().compile('10 ^ "2";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "BitwiseOperationTypeError");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'BitwiseOperationTypeError'");
		});
	});
});
