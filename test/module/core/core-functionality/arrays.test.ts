import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Arrays", () => {
	it("Simple array declaration", async () => {
		const fileContent = `var x: Array<num> = [1, 2, 3];`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assert.include(
			code,
			"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("Assign array to array", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; var y: Array<num> = x;";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const jsCode = instance.write();
		assert.include(
			jsCode,
			`let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));\nlet y: Array<number> = x;`,
		);
	});

	it("Accessing array element", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; print(x[1] as str);";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
	});

	it("Assigning one array element to another", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; var y: num = x[1]; print(y as str);";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
	});
});
