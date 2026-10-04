import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { assertRunnableCompiledSnippet } from "..";

describe("Declaration", () => {
	it("var", async () => {
		const fileContent = "var x: num;";
		const instance: KipperCompileResult = await assertRunnableCompiledSnippet(fileContent);
		assert(instance.write().includes("let x: number;"), "Invalid TypeScript code (Expected different output)");
	});
});
