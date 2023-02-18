import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { KipperCompiler, KipperError } from "@kipper/core";
import { assert } from "chai";

describe("NotImplemented", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	it("F-String Expression", async () => {
		try {
			await new KipperCompiler().compile("var x: num = 5; var y: str = f'Value: {x}';", {
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

	it("Typeof Type Expression", async () => {
		try {
			await new KipperCompiler().compile("var x: typeof(n) = 5;", {
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

	it("Generic Type Expression", async () => {
		try {
			await new KipperCompiler().compile("var x: list<num> = [];", {
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

	it("Conditional Expression", async () => {
		try {
			await new KipperCompiler().compile("var x: num = true ? 1 : 2;", {
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

	it("Jump Statements", async () => {
		try {
			await new KipperCompiler().compile("break;", {
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
