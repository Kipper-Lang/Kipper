import { CompileConfig, KipperCompiler, KipperError } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
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

		describe(`Global Scope - Overwrite [${test.t}]`, () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile(`var ${test.i}: num = 4;`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});

			it("Redeclaration by function", async () => {
				try {
					await new KipperCompiler().compile(`def ${test.i}() -> void {};`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});

			it("Redeclaration by parameter", async () => {
				try {
					await new KipperCompiler().compile(`def f(${test.i}: num) -> void {};`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});

		describe(`Nested Scope - ${test.t} Overwrite`, () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile(`{ var ${test.i}: num = 4; }`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});

		describe(`Deep Nested Scope - ${test.t} Overwrite`, () => {
			it("Redeclaration by variable", async () => {
				try {
					await new KipperCompiler().compile(`{ { var ${test.i}: num = 4; } }`, config);
				} catch (e) {
					assert.equal((<KipperError>e).constructor.name, "BuiltInOverwriteError", "Expected different error");
					ensureTracebackDataExists(<KipperError>e);
					return;
				}
				assert.fail("Expected 'BuiltInOverwriteError'");
			});
		});
	});
});
