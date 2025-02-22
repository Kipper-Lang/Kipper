import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { assertCodeIncludesSnippet, testPrintOutput } from "..";

describe("Arrays", () => {
	it("Simple array declaration", async () => {
		const fileContent = `var x: Array<num> = [1, 2, 3];`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const code = instance.write();
		assertCodeIncludesSnippet(
			code,
			"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.newArrayT(__kipper.builtIn.num));",
		);
	});

	it("Assign array to array", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; var y: Array<num> = x;";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const tsCode = instance.write();
		assertCodeIncludesSnippet(
			tsCode,
			`let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.newArrayT(__kipper.builtIn.num));\nlet y: Array<number> = x;`,
		);
	});

	it("Accessing array element", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; print(x[1] as str);";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const tsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), tsCode);
	});

	it("Assigning one array element to another", async () => {
		const code = "var x: Array<num> = [1, 2, 3]; var y: num = x[1]; print(y as str);";
		const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

		const tsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), tsCode);
	});

	describe("Empty array", async () => {
		it("Empty array assignable to any array variable definition", async () => {
			const code = "var x: Array<num> = [];";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const tsCode = instance.write();
			assertCodeIncludesSnippet(
				tsCode,
				"let x: Array<number> = __kipper.assignTypeMeta(__kipper.assignTypeMeta([],__kipper.newArrayT(__kipper.builtIn.any)),__kipper.newArrayT(__kipper.builtIn.num));",
			);
		});

		it("Nested empty array assignable to any array variable definition", async () => {
			const code = "var x: Array<num> = ((([])));";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const tsCode = instance.write();
			assertCodeIncludesSnippet(
				tsCode,
				"let x: Array<number> = __kipper.assignTypeMeta((((__kipper.assignTypeMeta([],__kipper.newArrayT(__kipper.builtIn.any))))),__kipper.newArrayT(__kipper.builtIn.num));",
			);
		});

		it("Empty array assignable to any array variable", async () => {
			const code = "var x: Array<num> = [1, 2, 3]; x = [];";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const tsCode = instance.write();
			assertCodeIncludesSnippet(
				tsCode,
				"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.newArrayT(__kipper.builtIn.num));",
			);
			assertCodeIncludesSnippet(
				tsCode,
				"x = __kipper.assignTypeMeta(__kipper.assignTypeMeta([],__kipper.newArrayT(__kipper.builtIn.any)),__kipper.newArrayT(__kipper.builtIn.num));",
			);
		});

		it("Empty array passable to any array function argument", async () => {
			const code = "def test(x: Array<num>) -> void { print(x); } test([]);";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const tsCode = instance.write();
			assertCodeIncludesSnippet(
				tsCode,
				"test(__kipper.assignTypeMeta(__kipper.assignTypeMeta([],__kipper.newArrayT(__kipper.builtIn.any)),__kipper.newArrayT(__kipper.builtIn.num)));",
			);
		});

		it("Empty array passable to any array constructor argument", async () => {
			const code = "class Test { constructor(x: Array<num>) { print(x); } } new Test([]);";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const tsCode = instance.write();
			assertCodeIncludesSnippet(
				tsCode,
				"new Test(__kipper.assignTypeMeta(__kipper.assignTypeMeta([],__kipper.newArrayT(__kipper.builtIn.any)),__kipper.newArrayT(__kipper.builtIn.num)));",
			);
		});
	});
});
