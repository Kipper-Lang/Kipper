import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Cast-or-Convert", () => {
	describe("as", () => {
		it("should convert a value from EXP to T", async () => {
			const fileContent = `
			var x: str = "123.0";
			var y: num = x as num;
			print(y);
			`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, 'let x: string = "123.0";', "Invalid TypeScript code (Expected different output)");
			assert.include(
				code,
				"let y: number = __kipper.strToNum(x);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, 123, "Expected different output"), jsCode);
		});
	});

	describe("cast as", () => {
		describe("should cast a value from EXP to T and raise no type error", () => {
			it("T cast as T", async () => {
				const fileContent = `
				var x: num = 123;
				var y: num = x cast as num;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 123;", "Invalid TypeScript code (Expected different output)");
				assert.include(code, "let y: number = x as number;", "Invalid TypeScript code (Expected different output)");

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, 123, "Expected different output"), jsCode);
			});

			it("class instance cast as obj", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				var x: Test = new Test();
				var y: obj = x cast as obj;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(
					code,
					"class Test {\n  x: number;\n  constructor()\n  {\n    this.x = 1;\n  }\n}",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(code, "let x: Test = new Test();", "Invalid TypeScript code (Expected different output)");
				assert.include(code, "let y: object = x as object;", "Invalid TypeScript code (Expected different output)");

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(message: any) => assert.deepEqual(message, { x: 1 }, "Expected different output"),
					jsCode,
					false,
				);
			});

			it("interface cast as obj", async () => {
				const fileContent = `
				interface Test { x: num; }
				var x: Test = { x: 1 };
				var y: obj = x cast as obj;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(
					code,
					"interface Test {\n  x: number;\n}",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(code, "let x: Test = {\n  x: 1,\n}", "Invalid TypeScript code (Expected different output)");
				assert.include(code, "let y: object = x as object;", "Invalid TypeScript code (Expected different output)");

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(message: any) => assert.deepEqual(message, { x: 1 }, "Expected different output"),
					jsCode,
					false,
				);
			});

			it("class instance cast as interface", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				interface Test2 { x: num; }
				var x: Test = new Test();
				var y: Test = x cast as Test2;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(
					code,
					"class Test {\n  x: number;\n  constructor()\n  {\n    this.x = 1;\n  }\n}",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(
					code,
					"interface Test2 {\n  x: number;\n}",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(code, "let x: Test = new Test();", "Invalid TypeScript code (Expected different output)");
				assert.include(code, "let y: Test = x as Test2;", "Invalid TypeScript code (Expected different output)");
			});

			it("interface cast as interface", async () => {
				const fileContent = `
				interface X { x: num; }
				interface Y { x: num; y: num; }
				var y: Y = { x: 1, y: 2 };
				var x: X = y cast as X;
				print(x);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "interface X {\n  x: number;\n}", "Invalid TypeScript code (Expected different output)");
				assert.include(
					code,
					"interface Y {\n  x: number;\n  y: number;\n}",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(
					code,
					"let y: Y = {\n  x: 1,\n  y: 2,\n};",
					"Invalid TypeScript code (Expected different output)",
				);
				assert.include(code, "let x: X = y as X;", "Invalid TypeScript code (Expected different output)");
			});
		});
	});

	describe("force as", () => {
		// TODO!
	});

	describe("try as", () => {
		// TODO!
	});
});
