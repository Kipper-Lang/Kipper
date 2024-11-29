import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("F-String", () => {
	const types = [
		{ type: "str", value: "' 1234 '" },
		{ type: "num", value: 12345 },
		{ type: "bool", value: true },
		{ type: "null", value: null },
		{ type: "undefined", value: undefined },
	];
	types.forEach((arg) => {
		describe(`Inserting [${arg.type}]`, () => {
			it("Inserting single value", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting two values", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value}} - 2. {${arg.value}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value} - 2. ${arg.value}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting three values", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value}} - 2. {${arg.value}} - 3. {${arg.value}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value} - 2. ${arg.value} - 3. ${arg.value}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});
		});
	});

	const types2 = [
		{ type: "str", value1: "' 12'", value2: "'34 '" },
		{ type: "num", value1: 12, value2: 34 },
	];
	types2.forEach((arg) => {
		describe(`Inserting additive expression [${arg.type}]`, () => {
			it("Inserting single value", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value1 + arg.value2}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting two values", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}} - 2. {${arg.value1} + ${arg.value2}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value1 + arg.value2} - 2. ${arg.value1 + arg.value2}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting three values", async () => {
				const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}} - 2. {${arg.value1} + ${arg.value2}} - 3. {${arg.value1} + ${arg.value2}}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. ${arg.value1 + arg.value2} - 2. ${arg.value1 + arg.value2} - 3. ${
								// @ts-ignore
								arg.value1 + arg.value2
							}`.replace(/'/g, ""),
						),
					jsCode,
				);
			});
		});
	});

	describe("Inserting function expression", () => {
		const functionContent = "def test() -> str { return 'SUCCESS'; }";

		it("Inserting single value", async () => {
			const fileContent = `${functionContent}; print(f"Test: 1. {test()}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. SUCCESS`.replace(/'/g, ""),
					),
				jsCode,
			);
		});

		it("Inserting two values", async () => {
			const fileContent = `${functionContent}; print(f"Test: 1. {test()} - 2. {test()}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. SUCCESS - 2. SUCCESS`.replace(/'/g, ""),
					),
				jsCode,
			);
		});

		it("Inserting three values", async () => {
			const fileContent = `${functionContent}; print(f"Test: 1. {test()} - 2. {test()} - 3. {test()}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. SUCCESS - 2. SUCCESS - 3. SUCCESS`.replace(/'/g, ""),
					),
				jsCode,
			);
		});
	});

	describe("Inserting nested f-strings", () => {
		it("One level", async () => {
			const fileContent = `print(f"Test: 1. {f'{1 + 1}'}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. 2`.replace(/'/g, ""),
					),
				jsCode,
			);
		});

		it("Two levels", async () => {
			const fileContent = `print(f"Test: 1. {f'{f'{1 + 1}'}'}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. 2`.replace(/'/g, ""),
					),
				jsCode,
			);
		});

		it("Three levels", async () => {
			const fileContent = `print(f"Test: 1. {f'{f'{f'{1 + 1}'}'}'}");`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(msg: any) =>
					assert.equal(
						msg,
						// @ts-ignore
						`Test: 1. 2`.replace(/'/g, ""),
					),
				jsCode,
			);
		});
	});
});
