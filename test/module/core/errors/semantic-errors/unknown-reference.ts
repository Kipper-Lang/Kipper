import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UnknownReferenceError", () => {
	it("Simple reference", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("x;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected proper error");
			assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Function Call", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('var x: num = call pr("pr");', defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected proper error");
			assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Arithmetics", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("var x: num = y + y;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected proper error");
			assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Nested reference", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("{ { { { x; } } } }", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected proper error");
			assert((<KipperError>e).name === "ReferenceError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});
});
