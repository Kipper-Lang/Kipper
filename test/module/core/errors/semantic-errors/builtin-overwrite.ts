import { CompileConfig, KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("BuiltInOverwriteError", () => {
	[
		{ i: "i", t: "Custom Built-in" },
		{ i: "print", t: "Built-in" },
	].forEach((test) => {
		const config: CompileConfig = {
			...defaultConfig,
			// prettier-ignore
			extendBuiltInFunctions: test.i !== "print" ? [{ identifier: test.i, params: [], returnType: "void", }, ] : [],
		};

		describe(`Global Scope - ${test.t} Overwrite`, () => {
			it("Redeclaration by variable", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(`var ${test.i}: num = 4;`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});

			it("Redeclaration by function", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(`def ${test.i}() -> void {};`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});

			it("Redeclaration by parameter", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(`def f(${test.i}: num) -> void {};`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});

		describe(`Nested Scope - ${test.t} Overwrite`, () => {
			it("Redeclaration by variable", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(`{ var ${test.i}: num = 4; }`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});

		describe(`Deep Nested Scope - ${test.t} Overwrite`, () => {
			it("Redeclaration by variable", async () => {
				let result: KipperCompileResult | undefined = undefined;
				try {
					result = await new KipperCompiler().compile(`{ { var ${test.i}: num = 4; } }`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});
	});
});
