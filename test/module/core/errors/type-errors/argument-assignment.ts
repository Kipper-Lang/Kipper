import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig, ensureTracebackDataExists } from "../index";

describe("ArgumentAssignmentTypeError", () => {
	describe("Error", () => {
		it("Single argument (One invalid)", async () => {
			try {
				await new KipperCompiler().compile(`len(1);`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentAssignmentTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentAssignmentTypeError'");
		});

		it("Two arguments (One invalid)", async () => {
			try {
				await new KipperCompiler().compile(`def test(p1: str, p2: str) -> void {}; test("Hello", 1);`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentAssignmentTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentAssignmentTypeError'");
		});

		it("Three arguments (One invalid)", async () => {
			try {
				await new KipperCompiler().compile(
					`def test(p1: str, p2: str, p3: str) -> void {}; test("Hello", "World", 1);`,
					defaultConfig,
				);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentAssignmentTypeError", "Expected different error");
				assert.equal((<KipperError>e).name, "TypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentAssignmentTypeError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile(
				`def test(p1: str, p2: str, p3: str) -> void {}; test("Hello", "World", "1");`,
				defaultConfig,
			);
		} catch (e) {
			assert.fail("Expected no error. Reicev");
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result?.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result?.programCtx?.hasFailed, "Expected no errors");
	});
});
