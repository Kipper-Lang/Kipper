import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Object literals", () => {
	it("should be able to create an object literal", async () => {
		const fileContent = "{ x: 1, y: '2' };";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(written, "{\n  x: 1,\n  y: '2',\n};", "Invalid TypeScript code (Expected different output)");
	});

	it("should create an object with different types of properties", async () => {
		const fileContent = "{ numProp: 1, strProp: '2', boolProp: true };";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			"{\n  numProp: 1,\n  strProp: '2',\n  boolProp: true,\n};",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should create an object with nested objects", async () => {
		const fileContent = "{ outerProp: { innerProp: 1 } };";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			"{\n  outerProp: {\n  innerProp: 1,\n},\n};",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should create an object with array properties", async () => {
		const fileContent = "{ arrProp: [1, 2, 3] };";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			"{\n  arrProp: __kipper.assignTypeMeta([1, 2, 3],",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should create an object with method properties", async () => {
		const fileContent = "{ methodProp: (): num -> 1 };";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		const written = instance.write();
		assert.include(
			written,
			"{\n  methodProp: __kipper.assignTypeMeta((): number => 1,",
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
