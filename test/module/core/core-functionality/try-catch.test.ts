import type { KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { compiler, defaultTarget } from ".";

describe("Try-Catch statements", () => {
	it("should be able to catch errors using try-catch", async () => {
		const fileContent = `class CustomError {} var x: num = 4; try { x = 5; } catch (e: CustomError) { x = 6; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			`class CustomError {\n}\nlet x: number = 4;\ntry\n{\n  x = 5;\n}\ncatch (__e_1: unknown) {\n  if (__e_1 instanceof CustomError)\n  {\n    x = 6;\n  }\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should be able to catch errors using try-empty-catch", async () => {
		const fileContent = `var x: num = 4; try { x = 5; } catch ( ) { x = 6; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			`let x: number = 4;\ntry\n{\n  x = 5;\n}\ncatch (__e_1: unknown)\n{\n  x = 6;\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);
	});

	it("should be able to catch errors using try-finally", async () => {
		const fileContent = `var x: num = 4; try { x = 5; } finally { x = 7; } print(x);`;
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		let written = instance.write();
		assert.include(
			written,
			`let x: number = 4;\ntry\n{\n  x = 5;\n}\nfinally\n{\n  x = 7;\n}\n__kipper.print(x);`,
			"Invalid TypeScript code (Expected different output)",
		);
	});
});
