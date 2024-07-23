import { KipperTypeScriptTarget } from "@kipper/target-ts";
import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";

describe("NotImplemented", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	it("Conditional Expression with union types", async () => {
		try {
			await new KipperCompiler().compile("var x: num = true ? 1 : '2';", {
				abortOnFirstError: true,
				target: defaultTarget,
			});
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "KipperNotImplementedError", "Expected different error");
			assert.equal((<KipperError>e).name, "NotImplementedError", "Expected different error");
			return;
		}
		assert.fail("Expected NotImplementedError");
	});

	it("Lambda Expression called", async () => {
		try {
			await new KipperCompiler().compile("((): num -> 0)();", {
				abortOnFirstError: true,
				target: defaultTarget,
			});
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "KipperNotImplementedError", "Expected different error");
			assert.equal((<KipperError>e).name, "NotImplementedError", "Expected different error");
			return;
		}
		assert.fail("Expected NotImplementedError");
	});
});
