import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, defaultTarget, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidAssignmentError", () => {
	describe("Error", () => {
		it("NumberConstant", async () => {
			try {
				await new KipperCompiler().compile("5 = 5;", { abortOnFirstError: true, target: defaultTarget });
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAssignmentError", "Expected different error");
				assert((<KipperError>e).name === "InvalidAssignmentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAssignmentError'");
		});

		it("StringConstant", async () => {
			try {
				await new KipperCompiler().compile('"4" = "4";', {
					abortOnFirstError: true,
					target: defaultTarget,
				});
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAssignmentError", "Expected different error");
				assert((<KipperError>e).name === "InvalidAssignmentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAssignmentError'");
		});
	});

	describe("NoError", () => {
		it("identifier", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile("var x: num = 0; x = 3 + 3;", defaultConfig);
			} catch (e) {
				assert.fail("Expected no 'InvalidAssignmentError'");
			}
			assert.isDefined(result, "Expected defined compilation result");
			assert.isDefined(result!!.programCtx, "Expected programCtx to be defined");
			assert.isFalse(result!!.programCtx!!.hasFailed, "Expected no errors");
		});
	});
});
