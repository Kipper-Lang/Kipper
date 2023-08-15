import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("AssignmentTypeError", () => {
	describe("Error", () => {
		describe("Definition", () => {
			it("num = str", async () => {
				try {
					await new KipperCompiler().compile('var x: num = "5";', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'TypeError'");
			});

			it("str = num", async () => {
				try {
					await new KipperCompiler().compile("var x: str = 5;", defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'TypeError'");
			});
		});

		describe("Assignment", () => {
			it("num = str", async () => {
				try {
					await new KipperCompiler().compile('var x: num; x = "5";', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'TypeError'");
			});

			it("str = num", async () => {
				try {
					await new KipperCompiler().compile("var x: str; x = 5;", defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'TypeError'");
			});

			it("str+=num", async () => {
				try {
					await new KipperCompiler().compile('var x: str = "3"; x += 4;', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ArithmeticOperationTypeError'");
			});

			it("str-=num", async () => {
				try {
					await new KipperCompiler().compile('var x: str = "3"; x -= 4;', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ArithmeticOperationTypeError'");
			});

			it("str*=num", async () => {
				try {
					await new KipperCompiler().compile('var x: str = "3"; x *= 4;', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ArithmeticOperationTypeError'");
			});

			it("str/=num", async () => {
				try {
					await new KipperCompiler().compile('var x: str = "3"; x /= 4;', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ArithmeticOperationTypeError'");
			});

			it("str%=num", async () => {
				try {
					await new KipperCompiler().compile('var x: str = "3"; x %= 4;', defaultConfig);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "AssignmentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'ArithmeticOperationTypeError'");
			});
		});
	});

	describe("NoError", () => {
		it("str = str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var x: str = "3";', {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'TypeError'");
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result!!.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result!!.programCtx!!.hasFailed, "Expected no errors");
		});

		it("num = num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 3;", {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.fail("Expected no 'TypeError'");
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result!!.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result!!.programCtx!!.hasFailed, "Expected no errors");
		});
	});
});
