import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Unary Operators", () => {
	it("unary plus", async () => {
		const fileContent = "+4;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("+4;"), "Invalid TypeScript code (Expected different output)");
	});

	it("unary minus", async () => {
		const fileContent = "-4;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("-4;"), "Invalid TypeScript code (Expected different output)");
	});

	// Technically, this is a logical operator, but it's considered a unary operator in Kipper, as it modifies
	// the value of the operand.
	it("!", async () => {
		const fileContent = "!true;";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		assert(instance.write().includes("!true;"), "Invalid TypeScript code (Expected different output)");
	});

	describe("--", () => {
		it("prefix", async () => {
			const fileContent = "var x: num = 5; var y: num = --x;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let y: number = --x;"), "Expected different TypeScript code");
		});

		it("postfix", async () => {
			const fileContent = "var x: num = 5; var y: num = x--;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let y: number = x--;"), "Expected different TypeScript code");
		});
	});

	describe("++", () => {
		it("prefix", async () => {
			const fileContent = "var x: num = 5; var y: num = ++x;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let y: number = ++x;"), "Expected different TypeScript code");
		});

		it("postfix", async () => {
			const fileContent = "var x: num = 5; var y: num = x++;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let y: number = x++;"), "Expected different TypeScript code");
		});
	});
});
