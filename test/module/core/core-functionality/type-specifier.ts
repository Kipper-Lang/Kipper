import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { assertCodeIncludesSnippet, testPrintOutput } from "..";

describe("Type Specifier", () => {
	describe("Identifier Type Specifier", () => {
		it("Built-in identifier type specifier", async () => {
			const fileContent = "const x: num = 5;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assertCodeIncludesSnippet(code, "const x: number =");
		});

		it("Custom identifier type specifier", async () => {
			const fileContent = "interface MyType { x: num; } const x: MyType = { x: 5 };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assertCodeIncludesSnippet(code, "const x: MyType =");
		});
	});

	describe("Generic Type Specifier", () => {
		describe("Built-in generic type specifier", () => {
			it("Array type specifier", async () => {
				const fileContent = "const x: Array<num> = [1, 2, 3];";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const x: Array<number> =");
			});

			it("Function type specifier", async () => {
				const fileContent = "const x: Func<num,num,num> = (arg1: num, arg2: num): num -> arg1 + arg2;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const x: (arg0: number, arg1: number) => number =");
			});
		});
	});

	describe("Typeof Type Specifier", () => {
		it("Typeof referencing built-in type specifier", async () => {
			const fileContent = "const x: num = 5; const y: typeof(x) = 10;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assertCodeIncludesSnippet(code, "const y: number =");
		});

		it("Typeof referencing custom type specifier", async () => {
			const fileContent = "interface MyType { x: num; } const x: MyType = { x: 5 }; const y: typeof(x) = { x: 10 };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assertCodeIncludesSnippet(code, "const y: MyType =");
		});
	});

	describe("Nullable Type Specifier", () => {
		describe("? (Union with null)", () => {
			it("Wrapping Identifier Type Specifier", async () => {
				const fileContent = "const x: num = 5; const y: num? = null;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: number | null =");
			});

			it("Wrapping Generic Type Specifier", async () => {
				const fileContent = "const x: Array<num> = [1, 2, 3]; const y: Array<num>? = null;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: Array<number> | null =");
			});

			it("Wrapping Typeof Type Specifier", async () => {
				const fileContent = "const x: num = 5; const y: typeof(x)? = null;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: number | null =");
			});
		});

		describe("?? (Union with undefined)", () => {
			it("Wrapping Identifier Type Specifier", async () => {
				const fileContent = "const x: num = 5; const y: num?? = undefined;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: number | undefined =");
			});

			it("Wrapping Generic Type Specifier", async () => {
				const fileContent = "const x: Array<num> = [1, 2, 3]; const y: Array<num>?? = undefined;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: Array<number> | undefined =");
			});

			it("Wrapping Typeof Type Specifier", async () => {
				const fileContent = "const x: num = 5; const y: typeof(x)?? = undefined;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assertCodeIncludesSnippet(code, "const y: number | undefined =");
			});
		});
	});
});
