import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Assignment", () => {
	it("to 'num'", async () => {
		const fileContent = "var x: num = 4;\nx = 5;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes("let x: number = 4;\nx = 5;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("to 'str'", async () => {
		const fileContent = 'var x: str = "4";\nx = "5";';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes('let x: string = "4";\nx = "5";'),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("to 'bool'", async () => {
		const fileContent = "var x: bool = true;\nx = false;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes("let x: boolean = true;\nx = false;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("to 'array'", async () => {
		const fileContent = "var x: Array<num> = [1, 2, 3];\nx = [4, 5, 6];";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance
				.write()
				.includes(
					"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.newArrayT(__kipper.builtIn.num));\nx = __kipper.assignTypeMeta([4, 5, 6],__kipper.newArrayT(__kipper.builtIn.num));",
				),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("to 'func'", async () => {
		const fileContent = "var x: Func<str, void> = print;\nx = print;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance.write().includes("let x: (arg0: string) => void = __kipper.print;\nx = __kipper.print;"),
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("to 'array[]'", async () => {
		const fileContent = "var x: Array<num> = [1, 2, 3];\nx[0] = 4;\nprint(x[0]);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(
			instance
				.write()
				.includes(
					"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.newArrayT(__kipper.builtIn.num));\nx[0] = 4;",
				),
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "4", "Expected different output"), jsCode);
	});
});
