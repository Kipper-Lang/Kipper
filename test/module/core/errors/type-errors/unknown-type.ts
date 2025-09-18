import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("UnknownTypeTypeError", () => {
	["x", "number", "UNKNOWN"].forEach((typeName) => {
		it(typeName, async () => {
			try {
				await new KipperCompiler().compile(`var invalid: ${typeName} = 4;`, defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "UnknownTypeTypeError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				return;
			}
			assert.fail("Expected 'UnknownTypeTypeError'");
		});
	});
});
