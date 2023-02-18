import { KipperJavaScriptTarget } from "@kipper/target-js";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { CompileConfig, KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { testPrintOutput } from "./core-functionality.test";

/**
 * Returns the JavaScript code from the given Kipper compilation result.
 *
 * This will automatically handle transpiling TypeScript code to JavaScript, if the Kipper compiler generated TypeScript
 * code.
 * @param result The Kipper compilation result.
 */
function getJSEvalCode(result: KipperCompileResult): string {
	let code = result.write();
	if (result.programCtx.target instanceof KipperTypeScriptTarget) {
		code = ts.transpile(code);
	}
	return code;
}

describe("Built-in functions", () => {
	const compiler = new KipperCompiler();
	const tests = [new KipperJavaScriptTarget(), new KipperTypeScriptTarget()];

	tests.forEach((target) => {
		const config: CompileConfig = {
			abortOnFirstError: true,
			target: target,
		};

		describe(`print (${target.fileExtension})`, () => {
			it("Should error with no argument", async () => {
				const fileContent = "print();";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected different error");
					assert((<KipperError>e).name === "ArgumentError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should error with more than one argument", async () => {
				const fileContent = "print('1', '2');";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected different error");
					assert((<KipperError>e).name === "ArgumentError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should error with an invalid argument type", async () => {
				const fileContent = "print(1);";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ArgumentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should print a string", async () => {
				const fileContent = "print('Hello, world!');";
				const result: KipperCompileResult = await compiler.compile(fileContent, config);

				let code: string = getJSEvalCode(result);
				testPrintOutput((out) => assert.equal(out, "Hello, world!"), code);
			});
		});

		describe(`len (${target.fileExtension})`, () => {
			it("Should error with no argument", async () => {
				const fileContent = "len();";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected different error");
					assert((<KipperError>e).name === "ArgumentError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should error with more than one argument", async () => {
				const fileContent = "len('1', '2');";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected different error");
					assert((<KipperError>e).name === "ArgumentError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should error with an invalid argument type", async () => {
				const fileContent = "len(1);";
				try {
					await compiler.compile(fileContent, config);
				} catch (e) {
					assert((<KipperError>e).constructor.name === "ArgumentTypeError", "Expected different error");
					assert((<KipperError>e).name === "TypeError", "Expected different error");
					return;
				}
				assert.fail("Expected 'InvalidAmountOfArgumentsError'");
			});

			it("Should return the length of a string", async () => {
				const fileContent = "print(len('Hello, world!') as str);";
				const result: KipperCompileResult = await compiler.compile(fileContent, config);

				let code: string = getJSEvalCode(result);
				testPrintOutput((out) => assert.equal(out, "13"), code);
			});
		});
	});
});
