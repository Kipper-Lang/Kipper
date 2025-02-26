import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { assertCodeIncludesSnippet, assertErrorsAreEmpty, testErrorThrows, testPrintOutput } from "..";

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
			assertErrorsAreEmpty(instance.programCtx!);

			const code = instance.write();
			assertCodeIncludesSnippet(code, 'let x: string = "123.0";');
			assertCodeIncludesSnippet(code, "let y: number = __kipper.strToNum(x);");

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
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: number = 123;");
				assertCodeIncludesSnippet(code, "let y: number = x as number;");

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
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "class Test {\n  x: number;\n  constructor()\n  {\n    this.x = 1;\n  }\n}");
				assertCodeIncludesSnippet(code, "let x: Test = new Test();");
				assertCodeIncludesSnippet(code, "let y: object = x as object;");

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
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "interface Test {\n  x: number;\n}");
				assertCodeIncludesSnippet(code, "let x: Test = {\n  x: 1,\n}");
				assertCodeIncludesSnippet(code, "let y: object = x as object;");

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
				var y: Test2 = x cast as Test2;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "class Test {\n  x: number;\n  constructor()\n  {\n    this.x = 1;\n  }\n}");
				assertCodeIncludesSnippet(code, "interface Test2 {\n  x: number;\n}");
				assertCodeIncludesSnippet(code, "let x: Test = new Test();");
				assertCodeIncludesSnippet(code, "let y: Test2 = x as Test2;");
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
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "interface X {\n  x: number;\n}");
				assertCodeIncludesSnippet(code, "interface Y {\n  x: number;\n  y: number;\n}");
				assertCodeIncludesSnippet(code, "let y: Y = {\n  x: 1,\n  y: 2,\n};");
				assertCodeIncludesSnippet(code, "let x: X = y as X;");
			});
		});
	});

	describe("force as", () => {
		describe("should convert a correct value from EXP to T", () => {
			it("using primitives", async () => {
				const fileContent = `
				var x: any = 123;
				var y: num = x force as num;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = 123;");
				assertCodeIncludesSnippet(code, "let y: number = (__kipper.forceCastAs(x,__kipper.builtIn.num) as number);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, 123, "Expected different output"), jsCode);
			});

			it("using interfaces", async () => {
				const fileContent = `
				interface Test { x: num; }
				var x: any = { x: 1 };
				var y: Test = x force as Test;
				print(y.x);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  x: 1,\n};");
				assertCodeIncludesSnippet(code, "let y: Test = (__kipper.forceCastAs(x,__intf_Test) as Test);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, 1, "Expected different output"), jsCode);
			});

			it("using class instances", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				var x: any = new Test();
				var y: Test = x force as Test;
				print(y.x);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "class Test {\n  x: number;\n  constructor()\n  {\n    this.x = 1;\n  }\n}");
				assertCodeIncludesSnippet(code, "let x: any = new Test();");
				assertCodeIncludesSnippet(code, "let y: Test = (__kipper.forceCastAs(x,Test) as Test);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, 1, "Expected different output"), jsCode);
			});
		});

		describe("should raise a type error when converting an incorrect value from EXP to T", () => {
			it("using primitives", async () => {
				const fileContent = `
				var x: any = 123;
				var y: str = x force as str;
				print(y);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = 123;");
				assertCodeIncludesSnippet(code, "let y: string = (__kipper.forceCastAs(x,__kipper.builtIn.str) as string);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testErrorThrows("KipTypeError", "Invalid force cast from 'num' to 'str'.", jsCode);
			});

			it("using interfaces", async () => {
				const fileContent = `
				interface Test { x: num; }
				var x: any = { y: 2 };
				var y: Test = x force as Test;
				print(y.x);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  y: 2,\n};");
				assertCodeIncludesSnippet(code, "let y: Test = (__kipper.forceCastAs(x,__intf_Test) as Test);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testErrorThrows("KipTypeError", "Invalid force cast from 'obj' to 'Test'.", jsCode);
			});

			it("using class instances", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				var x: any = { x: 1, y: 2 };
				var y: Test = x force as Test;
				print(y.x);
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  x: 1,\n  y: 2,\n};");
				assertCodeIncludesSnippet(code, "let y: Test = (__kipper.forceCastAs(x,Test) as Test);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testErrorThrows("KipTypeError", "Invalid force cast from 'obj' to 'Test'.", jsCode);
			});
		});
	});

	describe("try as", () => {
		describe("should convert a correct value from EXP to T", () => {
			it("using primitives", async () => {
				const fileContent = `
				var x: any = 123;
				var y: num? = x try as num;
				if (y == null) {
					print("Failed to cast");
				} else {
					print(y);
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = 123;");
				assertCodeIncludesSnippet(
					code,
					"let y: number | null = (__kipper.tryCastAs(x,__kipper.builtIn.num) as number | null);",
				);

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, 123, "Expected different output"), jsCode);
			});

			it("using interfaces", async () => {
				const fileContent = `
				interface Test { x: num; }
				var x: any = { x: 1 };
				var y: Test? = x try as Test;
				if (y == null) {
					print("Failed to cast");
				} else {
					print("Succeeded to cast");
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  x: 1,\n};");
				assertCodeIncludesSnippet(code, "let y: Test | null = (__kipper.tryCastAs(x,__intf_Test) as Test | null);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(message: any) => assert.equal(message, "Succeeded to cast", "Expected different output"),
					jsCode,
				);
			});

			it("using class instances", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				var x: any = new Test();
				var y: Test? = x try as Test;
				if (y == null) {
					print("Failed to cast");
				} else {
					print("Succeeded to cast");
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = new Test();");
				assertCodeIncludesSnippet(code, "let y: Test | null = (__kipper.tryCastAs(x,Test) as Test | null);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(
					(message: any) => assert.equal(message, "Succeeded to cast", "Expected different output"),
					jsCode,
				);
			});
		});

		describe("should return null when converting an incorrect value from EXP to T", () => {
			it("using primitives", async () => {
				const fileContent = `
				var x: any = 123;
				var y: str? = x try as str;
				if (y == null) {
					print("Failed to cast");
				} else {
					print(y);
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = 123;");
				assertCodeIncludesSnippet(
					code,
					"let y: string | null = (__kipper.tryCastAs(x,__kipper.builtIn.str) as string | null);",
				);

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Failed to cast", "Expected different output"), jsCode);
			});

			it("using interfaces", async () => {
				const fileContent = `
				interface Test { x: num; }
				var x: any = { y: 2 };
				var y: Test? = x try as Test;
				if (y == null) {
					print("Failed to cast");
				} else {
					print("Succeeded to cast");
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  y: 2,\n};");
				assertCodeIncludesSnippet(code, "let y: Test | null = (__kipper.tryCastAs(x,__intf_Test) as Test | null);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Failed to cast", "Expected different output"), jsCode);
			});

			it("using class instances", async () => {
				const fileContent = `
				class Test { x: num; constructor() { this.x = 1; } }
				var x: any = { x: 1, y: 2 };
				var y: Test? = x try as Test;
				if (y == null) {
					print("Failed to cast");
				} else {
					print("Succeeded to cast");
				}
				`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assertErrorsAreEmpty(instance.programCtx!);

				const code = instance.write();
				assertCodeIncludesSnippet(code, "let x: any = {\n  x: 1,\n  y: 2,\n};");
				assertCodeIncludesSnippet(code, "let y: Test | null = (__kipper.tryCastAs(x,Test) as Test | null);");

				// Run the code to make sure it works
				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Failed to cast", "Expected different output"), jsCode);
			});
		});
	});
});
