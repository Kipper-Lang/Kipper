import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Interfaces", async () => {
	it("Can initialize empty interface", async () => {
		const fileContent = "interface Test { }";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		let written = instance.write();
		assert.include(written, "interface Test {\n}", "Invalid TypeScript code (Expected different output)");
	});

	it("should be able to to create object with interface blueprint", async () => {
		const fileContent = `interface Test {a: str;}; var x: Test = {a: "3"}; print(x.a);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			`interface Test {\n` +
				`  a: string;\n` +
				`}\n` +
				`const __intf_Test = new __kipper.Type("Test",[new __kipper.Property("a", __kipper.builtIn.str),],[],__kipper.builtIn.obj)\n` +
				"let x: Test = {\n" +
				'  a: "3",\n' +
				"};\n" +
				"__kipper.print(x.a);",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("can initialize interface with members", async () => {
		const fileContent = "interface Test {\n x: num;\n y: str;\n greet(name: str): str;}";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			"interface Test {\n  x: number;\n  y: string;\n  greet(name: string): string;\n}",
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should can initialize with mixed members", async () => {
		const fileContent = "interface Test {\n x: num;\n isTrue(f: bool): str;\n y: str;\n greet(name: str): str;}";
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			"interface Test {\n  x: number;\n  isTrue(f: boolean): string;\n  y: string;\n  greet(name: string):" +
				" string;\n}",
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
