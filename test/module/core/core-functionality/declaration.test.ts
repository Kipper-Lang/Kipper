import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Declaration", () => {
	it("var", async () => {
		const fileContent = "var x: num;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("let x: number;"), "Invalid TypeScript code (Expected different output)");
	});
});
