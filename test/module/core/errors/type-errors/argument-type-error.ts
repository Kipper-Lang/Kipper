import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";

describe("ArgumentTypeError", () => {
	describe("Error", () => {
		it("Single argument (One invalid)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(`print(1);`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentTypeError'");
		});

		it("Two arguments (One invalid)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(
					`def test(p1: str, p2: str) -> void {}; test("Hello", 1);`,
					defaultConfig,
				);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentTypeError'");
		});

		it("Three arguments (One invalid)", async () => {
			let result: KipperCompileResult | undefined = undefined;
			try {
				result = await new KipperCompiler().compile(
					`def test(p1: str, p2: str, p3: str) -> void {}; test("Hello", "World", 1);`,
					defaultConfig,
				);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "ArgumentTypeError", "Expected proper error");
				assert((<KipperError>e).name === "TypeError", "Expected proper error");
				ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'ArgumentTypeError'");
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
			assert.fail("Expected no error");
		}
		assert.notEqual(result, undefined, "Expected compilation result from Kipper Compiler call");
		assert.isFalse(result?.programCtx.hasFailed ?? true, "Expected no errors");
	});
});

