import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { assertCodeIncludesSnippet, assertRunnableCompiledSnippet, testPrintOutput } from "..";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";

describe("Typeof Expression", () => {
	it("Evaluates to 'type'", async () => {
		const fileContent = `var x: type = typeof(1);`;
		await assertRunnableCompiledSnippet(fileContent);
	});

	it("Binds braces", async () => {
		const fileContent = `typeof(1) == num;`;
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);

		const code = instance.write();
		assertCodeIncludesSnippet(code, ".typeOf(1) ===");
	});

	const values = [
		{ type: "str", value: "' 1234 '" },
		{ type: "num", value: "12345" },
		{ type: "bool", value: "true" },
		{ type: "null", value: "null" },
		{ type: "undefined", value: "undefined" },
		{ type: "obj", value: "{ x: 1, y: 2, z: 3 }" }
	];
	values.forEach(valueSet => {
		it(`Evaluate primary expression during runtime [${valueSet.type}]`, async () => {
			const fileContent = `print(typeof(${valueSet.value}));`;
			const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(message: any) => assert.equal(message["name"], valueSet.type, "Expected different output"),
				jsCode,
				false,
			);
		});
	});

	values.forEach((valueSet) => {
		it(`Evaluate reference during runtime [${valueSet.type}]`, async () => {
			const fileContent = `var x: ${valueSet.type} = ${valueSet.value}; print(typeof(x));`;
			const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput(
				(message: any) => assert.equal(message["name"], valueSet.type, "Expected different output"),
				jsCode,
				false,
			);
		});
	});
});
