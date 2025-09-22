import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { testPrintOutput } from "../index";

describe("Try-Catch Statements", () => {
	it("should be able to catch errors using try-catch", async () => {
		const fileContent = `class CustomError {} var x: num = 4; try { x = 5; } catch (e: CustomError) { x = 6; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			`try\n{\n  x = 5;\n}\ncatch (__kipper_e)`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomError) {\n    const e = __kipper_e;\n    x = 6;\n  }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(written, `throw __kipper_e;`, "Invalid TypeScript code (Expected different output)");

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
			`try\n{\n  x = 5;\n}\ncatch (__kipper_e)`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomError1) {\n    const e = __kipper_e;\n    x = 6;\n  }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomError2) {\n    const e = __kipper_e;\n    x = 7;\n  }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(written, `throw __kipper_e;`, "Invalid TypeScript code (Expected different output)");

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
	});

	it("should allow nested try-catch statement in try block", async () => {
		const fileContent = `
			class CustomErrorA {}
			class CustomErrorB {}
			var x: num = 1;
			try {
				try {
					x = 2;
				} catch (e: CustomErrorA) {
					x = 3;
				}
			} catch (e: CustomErrorB) {
				x = 4;
			}
			print(x);
  	`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();

		assert.include(
			written,
			`try\n{\n  try\n  {\n    x = 2;\n  }\n  catch (__kipper_e)`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomErrorA) {\n      const e = __kipper_e;\n      x = 3;\n    }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`catch (__kipper_e)\n{\n  if (__kipper_e instanceof CustomErrorB) {\n    const e = __kipper_e;\n    x = 4;\n  }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(written, `throw __kipper_e;`, "Invalid TypeScript code (Expected different output)");

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
	});

	it("should allow nested try-catch statement in catch block", async () => {
		const fileContent = `
			class CustomErrorA {}
			class CustomErrorB {}
			var x: num = 1;
			try {
				x = 2;
			} catch (e: CustomErrorA) {
				try {
					x = 3;
				} catch (e2: CustomErrorB) {
					x = 4;
				}
			}
			print(x);
		`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();

		assert.include(
			written,
			`try\n{\n  x = 2;\n}\ncatch (__kipper_e)`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomErrorA) {\n    const e = __kipper_e;\n    try\n    {\n      x = 3;\n    }\n    catch (__kipper_e)`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(
			written,
			`if (__kipper_e instanceof CustomErrorB) {\n        const e2 = __kipper_e;\n        x = 4;\n      }`,
			"Invalid TypeScript code (Expected different output)",
		);
		assert.include(written, `throw __kipper_e;`, "Invalid TypeScript code (Expected different output)");

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
	});

	it("should be able to catch errors using try-finally", async () => {
		const fileContent = `var x: num = 4; try { x = 5; } finally { x = 7; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx!!.errors, [], "Expected no compilation errors");
		const written = instance.write();

		assert.include(
			written,
			`try\n{\n  x = 5;\n}\nfinally\n{\n  x = 7;\n}`,
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "7", "Expected different output"), jsCode);
	});
});
