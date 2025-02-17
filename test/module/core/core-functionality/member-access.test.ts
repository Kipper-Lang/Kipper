import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Member access", () => {
	describe("Dot notation", () => {});

	describe("Bracket notation", () => {
		it("Simple access of a string", async () => {
			const fileContent = 'var x: str = "1234"[1]; print(x);';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
			assert.include(
				instance.write(),
				'let x: string = __kipper.index("1234", 1);',
				"Expected different TypeScript code",
			);

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
		});
	});

	describe("Slice notation", () => {
		describe("str", () => {
			it("Simple slice with both start and end", async () => {
				const fileContent = 'var x: str = "1234"[1:2]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
			});

			it("Simple slice with only start", async () => {
				const fileContent = 'var x: str = "1234"[1:]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "234", "Expected different output"), jsCode);
			});

			it("Simple slice with only end", async () => {
				const fileContent = 'var x: str = "1234"[:2]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "12", "Expected different output"), jsCode);
			});

			it("Simple slice with neither start nor end", async () => {
				const fileContent = 'var x: str = "1234"[:]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "1234", "Expected different output"), jsCode);
			});
		});

		describe("array", () => {
			// TODO Add ts ignore to fix this
			it("Simple slice with both start and end", async () => {
				const fileContent = "var x: Array<num> = [1, 2, 3, 4][1:2]; print(x[0]);";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					"let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), 1, 2);",
					"Expected different TypeScript code",
				);
			});

			it("Simple slice with only start", async () => {
				const fileContent = "var x: Array<num> = [1, 2, 3, 4][1:]; print(x[0]);";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					`let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), 1, undefined);`,
					"Expected different TypeScript code",
				);
			});

			it("Simple slice with only end", async () => {
				const fileContent = "var x: Array<num> = [1, 2, 3, 4][:2]; print(x[0]);";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					"let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), undefined, 2);",
					"Expected different TypeScript code",
				);
			});

			it("Simple slice with neither start nor end", async () => {
				const fileContent = "var x: Array<num> = [1, 2, 3, 4][:]; print(x[0]);";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					`let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), undefined, undefined);`,
					"Expected different TypeScript code",
				);
			});
		});
	});
});
