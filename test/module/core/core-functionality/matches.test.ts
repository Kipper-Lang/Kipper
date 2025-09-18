import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { compiler, defaultTarget } from ".";
import { testPrintOutput } from "..";

describe("Matches", () => {
	it("should return true for an empty interface with an empty object", async () => {
		const fileContent = `interface Test { }; var x: obj = { }; print(x matches Test);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	});

	it("should return true for an empty interface with an object with properties", async () => {
		const fileContent = `interface Test { }; var x: obj = { a: 1, b: '2' }; print(x matches Test);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	});

	it("should return false for an interface with properties with an object with less properties", async () => {
		const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1 }; print(x matches Test);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
	});

	it("should return true for an interface with properties with an object with more properties", async () => {
		const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1, b: '2', c: true }; print(x matches Test);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	});

	it("should return false for an interface with properties with an object with different properties", async () => {
		const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1, c: '2' }; print(x matches Test);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
	});

	// it("should support generics such as arrays and lambda", async () => {
	// 	const fileContent = `interface Test { a: Array<num>; b: Func<num, num>; }; var x: obj = { a: [1, 2, 3], b: (x: num): num -> x + 1 }; print(x matches Test);`;
	// 	const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });
	//
	// 	assert.isDefined(instance.programCtx);
	// 	assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
	//
	// 	const written = instance.write();
	// 	const jsCode = ts.transpile(written);
	// 	testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	// });

	it("should support nested interfaces", async () => {
		const fileContent = `interface Test { a: num; b: str; }; interface Test2 { c: Test; }; var x: obj = { c: { a: 1, b: '2' } }; print(x matches Test2);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

		const written = instance.write();
		const jsCode = ts.transpile(written);
		testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
	});
});
