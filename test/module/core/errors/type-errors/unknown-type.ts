import { KipperCompiler, KipperError } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UnknownTypeError", () => {
	["x", "number", "UNKNOWN"].forEach((typeName) => {
		it(typeName, async () => {
			try {
				await new KipperCompiler().compile(`var invalid: ${typeName} = 4;`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UnknownTypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UnknownTypeError'");
		});
	});
});
