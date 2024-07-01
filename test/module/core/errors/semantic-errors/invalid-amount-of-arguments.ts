import type { KipperCompileResult, KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("InvalidAmountOfArgumentsError", () => {
	describe("Error", () => {
		it("One too many", async () => {
			try {
				await new KipperCompiler().compile('call print("x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected different error");
				assert((<KipperError>e).name === "ArgumentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Two too many", async () => {
			try {
				await new KipperCompiler().compile('call print("x", "x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected different error");
				assert((<KipperError>e).name === "ArgumentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Three too many", async () => {
			try {
				await new KipperCompiler().compile('call print("x", "x", "x", "x");', defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected different error");
				assert((<KipperError>e).name === "ArgumentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});

		it("Too little", async () => {
			try {
				await new KipperCompiler().compile("call print();", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidAmountOfArgumentsError", "Expected different error");
				assert((<KipperError>e).name === "ArgumentError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'InvalidAmountOfArgumentsError'");
		});
	});

	it("NoError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('call print("x");', defaultConfig);
		} catch (e) {
			assert.fail(`Expected no '${(<KipperError>e).name}'`);
		}
		assert.isDefined(result, "Expected defined compilation result");
		assert.isDefined(result!!.programCtx, "Expected programCtx to be defined");
		assert.isFalse(result!!.programCtx!!.hasFailed, "Expected no errors");
	});
});
