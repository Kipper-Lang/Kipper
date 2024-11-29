import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Constant identifiers", () => {
	it("void", async () => {
		const fileContent = "var x: void = void; var y: void = undefined;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("let x: void = void(0);"), "Invalid TypeScript code (Expected different output)");
		assert(
			instance.write().includes("let y: void = undefined;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("null", async () => {
		const fileContent = "var x: null = null;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("let x: null = null;"), "Invalid TypeScript code (Expected different output)");
	});

	it("undefined", async () => {
		const fileContent = "var x: undefined = undefined; var y: void = undefined;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes("let x: undefined = undefined;"),
			"Invalid TypeScript code (Expected different output)",
		);
		assert(
			instance.write().includes("let y: void = undefined;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
