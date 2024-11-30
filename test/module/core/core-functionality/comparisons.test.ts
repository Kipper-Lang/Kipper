import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Comparisons", () => {
	it("==", async () => {
		const fileContent = 'var x: num = 4;\nif (x == 4) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
		assert.include(
			code,
			'if (x === 4) {\n  __kipper.print("Works");\n}',
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it("!=", async () => {
		const fileContent = 'var x: num = 4;\nif (x != 5) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
		assert(
			code.includes('if (x !== 5) {\n  __kipper.print("Works");\n}'),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it("<", async () => {
		const fileContent = 'var x: num = 4;\nif (x < 5) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
		assert(
			code.includes('if (x < 5) {\n  __kipper.print("Works");\n}'),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it("<=", async () => {
		const fileContent = 'var x: num = 4;\nif (x <= 5) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
		assert(
			code.includes('if (x <= 5) {\n  __kipper.print("Works");\n}'),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it(">", async () => {
		const fileContent = 'var x: num = 5;\nif (x > 4) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
		assert(
			code.includes('if (x > 4) {\n  __kipper.print("Works");\n}'),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it(">=", async () => {
		const fileContent = 'var x: num = 5;\nif (x >= 4) print("Works");';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
		assert(
			code.includes('if (x >= 4) {\n  __kipper.print("Works");\n}'),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});
});
