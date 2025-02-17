import type { KipperCompileResult, TypeError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("PropertyAssignmentTypeError", () => {
	describe("Error", () => {
		it("X { x: num } = anon { x: str }", async () => {
			try {
				const fileContent = `
				interface X { x: num; }
				var x: X = { x: "5" };
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyAssignmentTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("X { x: num } = Y { x: str }", async () => {
			try {
				const fileContent = `
				interface X { x: str; }
				interface Y { x: num; }
				var x: X = { x: 5 } cast as Y;
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyAssignmentTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("X { x: str } = anon { x: num }", async () => {
			try {
				const fileContent = `
				interface X { x: str; }
				var x: X = { x: 5 };
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyAssignmentTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});

		it("X { x: str } = Y { x: num }", async () => {
			try {
				const fileContent = `
				interface X { x: num; }
				interface Y { x: str; }
				var x: X = { x: "5" } cast as Y;
				`;
				await new KipperCompiler().compile(fileContent, defaultConfig);
			} catch (e) {
				assert.equal((<TypeError>e).constructor.name, "AssignmentTypeError", "Expected different error");
				assert.equal((<TypeError>e).name, "TypeError", "Expected different error");
				assert.equal((<TypeError>e).cause!.constructor.name, "PropertyAssignmentTypeError", "Expected different error");
				ensureTracebackDataExists(<TypeError>e);
				return;
			}
			assert.fail("Expected 'TypeError'");
		});
	});

	describe("NoError", () => {
		it("X { x: num } = anon { x: num }", async () => {
			const fileContent = `
			interface X { x: num; }
			var x: X = { x: 5 };
			`;
			const instance: KipperCompileResult = await new KipperCompiler().compile(fileContent, defaultConfig);

			assert.isDefined(instance.programCtx);
			assert.isEmpty(instance.programCtx!.errors);
		});

		it("X { x: str } = Y { x: str }", async () => {
			const fileContent = `
			interface X { x: str; }
			interface Y { x: str; }
			var x: X = { x: "5" } cast as Y;
			`;
			const instance: KipperCompileResult = await new KipperCompiler().compile(fileContent, defaultConfig);

			assert.isDefined(instance.programCtx);
			assert.isEmpty(instance.programCtx!.errors);
		});
	});
});
