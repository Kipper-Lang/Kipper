import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { assertRunnableCompiledSnippet } from "..";

describe("Definition", () => {
	it("var", async () => {
		const fileContent = "var x: num = 4;";
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);
		assert(instance.write().includes("let x: number = 4;"), "Invalid TypeScript code (Expected different output)");
	});

	it("const", async () => {
		const fileContent = "const x: num = 4;";
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);
		assert(instance.write().includes("const x: number = 4;"), "Invalid TypeScript code (Expected different output)");
	});
});
