import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("ArithmeticOperationTypeError", () => {
	describe("Error", () => {
		it("str+num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" + 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str-num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" - 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str*num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" * 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str**num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" ** 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str/num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" / 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str%num", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" % 4;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num+str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 + "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num-str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 - "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num*str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 * "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num**str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 ** "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num/str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 / "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("num%str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('4 % "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str+bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" + true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str-bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" - true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str*bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" * true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str**bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" ** true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str/bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" / true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str%bool", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('"3" % true;', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool+str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true + "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool-str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true - "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool*str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true * "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool**str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true ** "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool/str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true / "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("bool%str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('true % "3";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str-=str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var x: str = "3"; x -= "4";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str*=str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var x: str = "3"; x *= "4";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str/=str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var x: str = "3"; x /= "4";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});

		it("str%=str", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile('var x: str = "3"; x %= "4";', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArithmeticOperationTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArithmeticOperationTypeError'");
		});
	});

	describe("NoError", () => {
		describe("+", () => {
			it("str", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile('"3" + "3";', {
						abortOnFirstError: true,
						target: defaultTarget,
					});
				} catch (e) {
					assert.fail("Expected no 'ArithmeticOperationTypeError'");
				}
				assert(result !== undefined, "Expected result");
				assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
			});

			it("num", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile("3 + 3;", { abortOnFirstError: true, target: defaultTarget });
				} catch (e) {
					assert.fail("Expected no 'ArithmeticOperationTypeError'");
				}
				assert(result !== undefined, "Expected result");
				assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
			});
		});

		describe("+=", () => {
			it("str", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile('var x: str = "3"; x += "3";', defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'ArithmeticOperationTypeError'");
				}
				assert(result !== undefined, "Expected result");
				assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
			});

			it("num", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile("var x: num = 3; x + 3;", defaultConfig);
				} catch (e) {
					assert.fail("Expected no 'ArithmeticOperationTypeError'");
				}
				assert(result !== undefined, "Expected result");
				assert.isFalse(result?.programCtx.hasFailed ?? false, "Expected no errors");
			});
		});
	});
});
