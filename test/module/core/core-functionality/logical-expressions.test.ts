import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { ScriptTarget } from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Logical expressions", () => {
	describe("Logical AND", () => {
		it("true && true", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 3 && x < 5) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 3 && x < 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			// Overwrite built-in to access output
			const prevLog = console.log;
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			console.log = (message: any) => {
				assert.equal(message, "Works", "Expected different output");
			};

			// Evaluate expression and restore old console.log
			eval(jsCode);
			console.log = prevLog;
		});

		it("true && false", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 3 && x < 2) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 3 && x < 2) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput(() => assert(false, "Expected no output"), jsCode);
		});

		it("false && true", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 5 && x < 3) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 5 && x < 3) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput(() => assert(false, "Expected no output"), jsCode);
		});

		it("false && false", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 5 && x < 8) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 5 && x < 8) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput(() => assert(false, "Expected no output"), jsCode);
		});
	});

	describe("Logical OR", () => {
		it("true || true", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 3 || x < 5) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 3 || x < 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("true || false", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 3 || x < 2) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 3 || x < 2) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("false || true", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 5 || x < 3) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 5 || x < 3) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("false || false", async () => {
			const fileContent = 'var x: num = 4;\nif (x > 5 || x > 8) { call print("Works"); }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 5 || x > 8) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput(() => assert(false, "Expected no output"), jsCode);
		});
	});
});
