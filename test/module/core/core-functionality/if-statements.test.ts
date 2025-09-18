import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("If statements", () => {
	it("Single if-branch", async () => {
		const fileContent = "if (true) { var x: num = 5; }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "if (true) {\n  let x: number = 5;\n}", "Invalid TypeScript code (Expected different output)");
	});

	it("Two if-else branches", async () => {
		const fileContent = "if (true) { var x: num = 5; } else { var x: num = 5; }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"if (true) {\n  let x: number = 5;\n} else {\n  let x: number = 5;\n}",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("Multi if-else-if branches", async () => {
		const fileContent = "if (true) { var x: num = 5; } else if (true) { var x: num = 5; } else { var x: num = 5; }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"if (true) {\n  let x: number = 5;\n} else if (true) {\n  let x: number = 5;\n} else {\n  let x: number =" +
				" 5;\n}",
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
