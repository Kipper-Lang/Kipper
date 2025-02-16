import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UnknownReferenceError", () => {
	it("Simple reference", async () => {
		try {
			await new KipperCompiler().compile("x;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected different error");
			assert.equal((<KipperError>e).name, "ReferenceError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Function Call", async () => {
		try {
			await new KipperCompiler().compile('var x: num = call pr("pr");', defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected different error");
			assert.equal((<KipperError>e).name, "ReferenceError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Arithmetics", async () => {
		try {
			await new KipperCompiler().compile("var x: num = y + y;", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected different error");
			assert.equal((<KipperError>e).name, "ReferenceError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});

	it("Nested reference", async () => {
		try {
			await new KipperCompiler().compile("{ { { { x; } } } }", defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "UnknownReferenceError", "Expected different error");
			assert.equal((<KipperError>e).name, "ReferenceError", "Expected different error");
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'UnknownReferenceError'");
	});
});
