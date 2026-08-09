import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { assertRunnableCompiledSnippet } from "..";

describe("Comment", () => {
	it("Single line", async () => {
		const fileContent = 'var x: num = 5;\n// A comment\n print("");';
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);
		assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
		assert.include(instance.write(), '__kipper.print("");', "Expected print to be present in output");
	});

	it("Multi line", async () => {
		const fileContent = 'var x: num = 5;\n/* A comment\n ... \n end of comment */\n print("");';
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);
		assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
		assert.include(instance.write(), '__kipper.print("");', "Expected print to be present in output");
	});
});
