import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Expression Statements", () => {
	it("one expression", async () => {
		const fileContent = "print = print;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes("__kipper.print = __kipper.print;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("two expressions", async () => {
		const fileContent = '12 * 93, "5" + "1";';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("12 * 93;"), "Invalid TypeScript code (Expected different output)");
		assert(instance.write().includes('"5" + "1";'), "Invalid TypeScript code (Expected different output)");
	});

	it("three expressions", async () => {
		const fileContent = 'print("x"), print("y"), print("z");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes('__kipper.print("x");'), "Invalid TypeScript code (Expected different output)");
		assert(instance.write().includes('__kipper.print("y");'), "Invalid TypeScript code (Expected different output)");
		assert(instance.write().includes('__kipper.print("z");'), "Invalid TypeScript code (Expected different output)");
	});
});
