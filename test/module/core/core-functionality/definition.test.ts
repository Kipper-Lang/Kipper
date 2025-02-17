import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Definition", () => {
	it("var", async () => {
		const fileContent = "var x: num = 4;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("let x: number = 4;"), "Invalid TypeScript code (Expected different output)");
	});

	it("const", async () => {
		const fileContent = "const x: num = 4;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("const x: number = 4;"), "Invalid TypeScript code (Expected different output)");
	});
});
