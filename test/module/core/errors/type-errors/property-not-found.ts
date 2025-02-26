import type { KipperCompileResult, TypeError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("PropertyNotFoundTypeError", () => {
	describe("Error", () => {
		it("X { x: num } = anon { y: str }", async () => {
			try {
				const fileContent = `
				interface X { x: num; }
				var x: X = { y: "5" };
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyNotFoundTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("X { x: num } = Y { y: str }", async () => {
			try {
				const fileContent = `
				interface X { x: num; }
				interface Y { y: str; }
				var x: X = { y: "5" } cast as Y;
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyNotFoundTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});
	});

	describe("NoError", () => {
		it("X { x: num } = anon { x: num }", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				const fileContent = `
				interface X { x: num; }
				var x: X = { x: 5 };
				`;
				result = await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});

		it("X { x: num } = Y { x: num }", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				const fileContent = `
				interface X { x: num; }
				interface Y { x: num; }
				var x: X = { x: 5 } cast as Y;
				`;
				result = await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.fail(`Expected no error. Received '${e}'.`);
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
		});
	});
});
