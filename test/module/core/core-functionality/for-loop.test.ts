import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("For loop", () => {
	it("Simple Loop with compound statement", async () => {
		const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) { x = i; }; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"for (let i: number = 0; i < 10; i += 1) {\n  x = i;\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
	});

	it("Simple Loop with expression statement", async () => {
		const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) x = i; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"for (let i: number = 0; i < 10; i += 1) \n  x = i;",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
	});

	it("Simple Loop with if statement", async () => {
		const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) if (i != 10) x = i; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"for (let i: number = 0; i < 10; i += 1) \n  if (i !== 10) {\n    x = i;\n  }",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
	});

	it("Can be interrupted with break", async () => {
		const fileContent =
			"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) break; x = i; }; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    break;\n  } \n  x = i;\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "4", "Expected different output"), jsCode);
	});

	it("Can be interrupted with continue", async () => {
		const fileContent =
			"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) continue; x = i; }; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    continue;\n  } \n  x = i;\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
	});
});
