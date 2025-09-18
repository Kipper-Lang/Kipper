import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("While loop", () => {
	it("Simple Loop with compound statement", async () => {
		const fileContent = "var x: num = 1; while (x <= 5) { x += 1; }; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "while (x <= 5) {\n  x += 1;\n}", "Invalid TypeScript code (Expected different output)");

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "6", "Expected different output"), jsCode);
	});

	it("Simple Loop with expression statement", async () => {
		const fileContent = "var x: num = 1; while (x <= 10) x += 1; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "while (x <= 10) \n  x += 1;", "Invalid TypeScript code (Expected different output)");

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "11", "Expected different output"), jsCode);
	});

	it("Simple Loop with if statement", async () => {
		const fileContent = "var x: num = 1; while (x < 10) if (x != 10) x += 1; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"while (x < 10) \n  if (x !== 10) {\n    x += 1;\n  }",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "10", "Expected different output"), jsCode);
	});

	it("Can be interrupted with break", async () => {
		const fileContent = "var x: num = 1; while (x < 10) { if (x == 5) break; x += 1; }; print(x as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"while (x < 10) {\n  if (x === 5) {\n    break;\n  } \n  x += 1;\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});

	it("Can be interrupted with continue", async () => {
		const fileContent =
			"var x: num = 1; var y: num = 1; while (x < 10) { x++; if (x > 5) continue; y++; }; print(y as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"while (x < 10) {\n  x++;\n  if (x > 5) {\n    continue;\n  } \n  y++;\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});
});
