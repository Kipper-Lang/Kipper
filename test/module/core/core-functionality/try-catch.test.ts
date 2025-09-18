import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { testPrintOutput } from "../index";

describe("Try-Catch statements", () => {
	it("should be able to catch errors using try-catch", async () => {
		const fileContent = `class CustomError {} var x: num = 4; try { x = 5; } catch (e: CustomError) { x = 6; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			`try\n{\n  x = 5;\n}\ncatch (__e_1: unknown) {\n  if (__e_1 instanceof CustomError)\n  {\n    x = 6;\n  }\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});

	it("should be able to catch various errors using try-multi-catch", async () => {
		const fileContent = `
			class CustomError1 {}
			class CustomError2 {}
			var x: num = 4;
			try { x = 5; }
			catch (e: CustomError1) { x = 6; }
			catch (e: CustomError2) { x = 7; }
			print(x);
		`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			`try\n{\n  x = 5;\n}\ncatch (__e_1: unknown) {\n  if (__e_1 instanceof CustomError1)\n  {\n    x = 6;\n  }\n  if (__e_1 instanceof CustomError2)\n  {\n    x = 7;\n  }\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});

	it("should be able to catch errors using try-empty-catch", async () => {
		const fileContent = `var x: num = 4; try { x = 5; } catch ( ) { x = 6; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			`try\n{\n  x = 5;\n}\ncatch (__e_1: unknown)\n{\n  x = 6;\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});

	it("should be able to catch errors using try-finally", async () => {
		const fileContent = `var x: num = 4; try { x = 5; } finally { x = 7; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			`try\n{\n  x = 5;\n}\nfinally\n{\n  x = 7;\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "7", "Expected different output"), jsCode);
	});
});
