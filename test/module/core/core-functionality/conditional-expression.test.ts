import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Conditional Expression", () => {
	it("Simple conditional expression", async () => {
		const fileContent = "const x: num = true ? 5 : 10;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "const x: number = true ? 5 : 10", "Invalid TypeScript code (Expected different output)");
	});

	// Test for a nested conditional expression
	it("Nested conditional expression", async () => {
		const fileContent = "const x: num = true ? (false ? 5 : 10) : (false ? 15 : 20);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"const x: number = true ? (false ? 5 : 10) : (false ? 15 : 20);",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	// Test for multiple conditional expressions
	it("Multiple conditional expressions", async () => {
		const fileContent = "const x: num = true ? 5 : false ? 10 : 15;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"const x: number = true ? 5 : false ? 10 : 15;",
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
