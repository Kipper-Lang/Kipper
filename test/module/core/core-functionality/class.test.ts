import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Class", () => {
	it("should be able to create an empty class", async () => {
		const fileContent = "class Test { }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(written, "class Test {\n}", "Invalid TypeScript code (Expected different output)");
	});

	it("should be able to create class with constructor", async () => {
		const fileContent = "class Test {constructor (a:num, b:str) {};};";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			"class Test {\n  constructor(a: number, b: string)\n  {\n  }\n}",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should be able to create class with members", async () => {
		const fileContent = `class Test {\n  x: num;\n  y: str;\ngreet(): void {\nprint("Kippa");\n};\n  constructor(a: num, b: str)\n{\n};}`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		assert.include(
			written,
			"class Test {\n" +
				"  x: number;\n" +
				"  y: string;\n" +
				"  greet(): void\n" +
				"  {\n" +
				'    __kipper.print("Kippa");\n' +
				"  }\n" +
				"  constructor(a: number, b: string)\n" +
				"  {\n" +
				"  }\n" +
				"}",
		);
	});

	it("should be able to instantiate a class with new", async () => {
		const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: Test = new Test("3"); print(x.a);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		assert.include(
			written,
			"class Test {\n" +
				"  a: string;\n" +
				"  constructor(b: string)\n" +
				"  {\n" +
				"    this.a = b;\n" +
				"  }\n" +
				"}\n" +
				'let x: Test = new Test("3");\n' +
				"__kipper.print(x.a);",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "3", "Expected different output"), jsCode);
	});

	it("should be able to instantiate a class with new and two properties", async () => {
		const fileContent = `class Test {x: str; y: num; constructor (a: str, b: num) {this.x = a; this.y = b;}}; var x: Test = new Test("hello", 42); print(x.x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		assert.include(
			written,
			"class Test {\n" +
				"  x: string;\n" +
				"  y: number;\n" +
				"  constructor(a: string, b: number)\n" +
				"  {\n" +
				"    this.x = a;\n" +
				"    this.y = b;\n" +
				"  }\n" +
				"}\n" +
				'let x: Test = new Test("hello", 42);\n' +
				"__kipper.print(x.x);",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
	});

	it("should be able to access 'this' inside a class method", async () => {
		const fileContent = `class Test {x: str; constructor (a: str) {this.x = a;} greet(): void {print(this.x);}}; var x: Test = new Test("hello"); x.greet();`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			"class Test {\n" +
				"  x: string;\n" +
				"  greet(): void\n" +
				"  {\n" +
				"    __kipper.print(this.x);\n" +
				"  }\n" +
				"  constructor(a: string)\n" +
				"  {\n" +
				"    this.x = a;\n" +
				"  }\n" +
				"}\n" +
				'let x: Test = new Test("hello");\n' +
				"x.greet();",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
	});

	it("should be able to return a value inside a class method", async () => {
		const fileContent = `class Test {x: str; constructor (a: str) {this.x = a;} greet(): str {return this.x;}}; var x: Test = new Test("hello"); print(x.greet());`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			"class Test {\n" +
				"  x: string;\n" +
				"  greet(): string\n" +
				"  {\n" +
				"    return this.x;\n" +
				"  }\n" +
				"  constructor(a: string)\n" +
				"  {\n" +
				"    this.x = a;\n" +
				"  }\n" +
				"}\n" +
				'let x: Test = new Test("hello");\n' +
				"__kipper.print(x.greet());",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(written, { target: ScriptTarget.ES2015 });
		testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
	});
});
