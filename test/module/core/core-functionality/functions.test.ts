import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Functions", () => {
	it("Declaration", async () => {
		const fileContent = "def test() -> void { }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(code, "function test(): void {\n}", "Invalid TypeScript code (Expected different output)");
	});

	it("Call", async () => {
		const fileContent = 'def test() -> void { print("Works"); return; }';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			'function test(): void {\n  __kipper.print("Works");\n  return;\n}',
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
	});

	it("Return value", async () => {
		const fileContent = "def test() -> num { return 5; }; print(test() as str);";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"function test(): number {\n  return 5;\n}\n__kipper.print(__kipper.numToStr(test()));",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different result"), jsCode);
	});

	it("Parameters", async () => {
		const fileContent = 'def test(x: num, y: str) -> num { return x + y as num; }; print(test(1, "5") as str);';
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"function test(x: number, y: string): number {\n  return x + __kipper.strToNum(y);\n}",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "6", "Expected different result"), jsCode);
	});
});
