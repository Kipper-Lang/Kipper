import { KipperJavaScriptTarget } from "@kipper/target-js";
import { KipperTypeScriptTarget, TargetTS } from "@kipper/target-ts";
import type { CompileConfig, KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler, KipperFileStream } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { testPrintOutput } from "./index";

/**
 * Returns the JavaScript code from the given Kipper compilation result.
 *
 * This will automatically handle transpiling TypeScript code to JavaScript, if the Kipper compiler generated TypeScript
 * code.
 * @param result The Kipper compilation result.
 */
function getJSEvalCode(result: KipperCompileResult): string {
	let code = result.write();
	if (result.programCtx!!.target instanceof KipperTypeScriptTarget) {
		code = ts.transpile(code);
	}
	return code;
}

describe("Built-ins", () => {
	const compiler = new KipperCompiler();
	describe("Built-in functions", () => {
		const tests = [new KipperJavaScriptTarget(), new KipperTypeScriptTarget()];

		tests.forEach((target) => {
			const config: CompileConfig = {
				abortOnFirstError: true,
				target: target,
			};

			describe(`print [${target.fileExtension}]`, () => {
				it("should error with no argument", async () => {
					const fileContent = "print();";
					try {
						await compiler.compile(fileContent, config);
					} catch (e) {
						assert.equal(
							(<KipperError>e).constructor.name,
							"InvalidAmountOfArgumentsError",
							"Expected different error",
						);
						assert.equal((<KipperError>e).name, "ArgumentError", "Expected different error");
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("should error with more than one argument", async () => {
					const fileContent = "print('1', '2');";
					try {
						await compiler.compile(fileContent, config);
					} catch (e) {
						assert.equal(
							(<KipperError>e).constructor.name,
							"InvalidAmountOfArgumentsError",
							"Expected different error",
						);
						assert.equal((<KipperError>e).name, "ArgumentError", "Expected different error");
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("should print a string", async () => {
					const fileContent = "print('Hello, world!');";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "Hello, world!"), code);
				});

				it("should print a number", async () => {
					const fileContent = "print(1);";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "1"), code);
				});

				it("should print a boolean", async () => {
					const fileContent = "print(true);";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "true"), code);
				});

				it("should print an array", async () => {
					const fileContent = "print([1, 2, 3]);";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "1,2,3"), code);
				});

				it("should print an object", async () => {
					const fileContent = "print({ a: 1, b: 2, c: 3 });";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "[object Object]"), code);
				});
			});

			describe(`len [${target.fileExtension}]`, () => {
				it("should error with no argument", async () => {
					const fileContent = "len();";
					try {
						await compiler.compile(fileContent, config);
					} catch (e) {
						assert.equal(
							(<KipperError>e).constructor.name,
							"InvalidAmountOfArgumentsError",
							"Expected different error",
						);
						assert.equal((<KipperError>e).name, "ArgumentError", "Expected different error");
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("should error with more than one argument", async () => {
					const fileContent = "len('1', '2');";
					try {
						await compiler.compile(fileContent, config);
					} catch (e) {
						assert.equal(
							(<KipperError>e).constructor.name,
							"InvalidAmountOfArgumentsError",
							"Expected different error",
						);
						assert.equal((<KipperError>e).name, "ArgumentError", "Expected different error");
						return;
					}
					assert.fail("Expected 'InvalidAmountOfArgumentsError'");
				});

				it("should error with an invalid argument type", async () => {
					const fileContent = "len(1);";
					try {
						await compiler.compile(fileContent, config);
					} catch (e) {
						assert.equal((<KipperError>e).constructor.name, "ArgumentAssignmentTypeError", "Expected different error");
						assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
						return;
					}
					assert.fail("Expected 'ArgumentAssignmentTypeError'");
				});

				it("should return the length of a string", async () => {
					const fileContent = "print(len('Hello, world!'));";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "13"), code);
				});

				it("should return the length of an array", async () => {
					const fileContent = "print(len([1, 2, 3]));";
					const result: KipperCompileResult = await compiler.compile(fileContent, config);

					const code: string = getJSEvalCode(result);
					testPrintOutput((out) => assert.equal(out, "3"), code);
				});
			});
		});
	});

	describe("Built-in variables", () => {
		it("__name__", async () => {
			const stream = new KipperFileStream({ stringContent: "print(__name__);", name: "test.kip" });
			const result = await compiler.compile(stream, { target: new TargetTS() });

			assert.include(result.write(), "print(__name__);");
			assert.equal(result.programCtx!!.builtInVariableReferences.length, 1);

			const code: string = getJSEvalCode(result);
			testPrintOutput((out: any) => assert.equal(out, "test.kip"), code);
		});

		it("NaN", async () => {
			const stream = new KipperFileStream({ stringContent: "print(NaN);", name: "test.kip" });
			const result = await compiler.compile(stream, { target: new TargetTS() });

			assert.include(result.write(), "__kipper.NaN");
			assert.equal(result.programCtx!!.builtInVariableReferences.length, 1);

			const code: string = getJSEvalCode(result);
			testPrintOutput((out) => assert.equal(out, "NaN"), code);
		});
	});
});
