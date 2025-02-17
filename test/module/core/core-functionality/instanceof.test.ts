import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Instanceof", () => {
	it("should return true when object is instance of class", async () => {
		const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: Test = new Test("3"); print(x instanceof Test);`;
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
				"__kipper.print(x instanceof Test);",
			"Invalid TypeScript code (Expected different output)",
		);

		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	});

	describe("should return false when object is not instance of class", () => {
		it("object literal instanceof class", async () => {
			const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: obj = {a: "3"}; print(x instanceof Test);`;
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
					'let x: object = {\n  a: "3",\n};\n' +
					"__kipper.print(x instanceof Test);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
		});

		it("different class instanceof class", async () => {
			const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; class Test2 {a: str; constructor (b: str) {this.a = b;}}; var x: Test2 = new Test2("3"); print(x instanceof Test);`;
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
					"class Test2 {\n" +
					"  a: string;\n" +
					"  constructor(b: string)\n" +
					"  {\n" +
					"    this.a = b;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test2 = new Test2("3");\n' +
					"__kipper.print(x instanceof Test);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
		});
	});
});
