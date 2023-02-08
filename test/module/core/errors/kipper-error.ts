import { KipperCompiler, KipperCompileResult, KipperError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "./index";
import { assert } from "chai";

describe("KipperError", () => {
	it("getTraceback", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile('var i: str = "4";\n var i: str = "4";', defaultConfig);
		} catch (e) {
			assert.equal((<KipperError>e).constructor.name, "IdentifierAlreadyUsedByVariableError", "Expected proper error");
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			assert.equal(
				(<KipperError>e).getTraceback(),
				`Traceback:\nFile 'anonymous-script', line 2, col 1:\n` +
					`   var i: str = "4";\n` +
					`   ^^^^^^^^^^^^^^^^^\n` +
					`${(<KipperError>e).name}: ${(<KipperError>e).message}`,
			);
			return;
		}
		assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
	});
});
