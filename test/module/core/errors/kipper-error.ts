import type { KipperError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "./index";
import { assert } from "chai";

describe("KipperError", () => {
	describe("getTraceback", () => {
		it("Inside String Underline (No leading or trailing Spaces)", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\nvar i: str = "4";', defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				assert.equal(
					(<KipperError>e).getTraceback(),
					`Traceback:\nFile 'anonymous-script', line 2, col 0:\n` +
						`  var i: str = "4";\n` +
						`  ^^^^^^^^^^^^^^^^ \n` +
						`${(<KipperError>e).name}: ${(<KipperError>e).message}`,
				);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("Inside String Underline (Leading Spaces)", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\n   var i: str = "4";', defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				assert.equal(
					(<KipperError>e).getTraceback(),
					`Traceback:\nFile 'anonymous-script', line 2, col 3:\n` +
						`     var i: str = "4";\n` +
						`     ^^^^^^^^^^^^^^^^ \n` +
						`${(<KipperError>e).name}: ${(<KipperError>e).message}`,
				);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("Inside String Underline (Trailing Spaces)", async () => {
			try {
				await new KipperCompiler().compile('var i: str = "4";\n   var i: str = "4";  ', defaultConfig);
			} catch (e) {
				assert.equal(
					(<KipperError>e).constructor.name,
					"IdentifierAlreadyUsedByVariableError",
					"Expected different error",
				);
				ensureTracebackDataExists(<KipperError>e);
				assert.equal(
					(<KipperError>e).getTraceback(),
					`Traceback:\nFile 'anonymous-script', line 2, col 3:\n` +
						`     var i: str = "4";  \n` +
						`     ^^^^^^^^^^^^^^^^   \n` +
						`${(<KipperError>e).name}: ${(<KipperError>e).message}`,
				);
				return;
			}
			assert.fail("Expected 'IdentifierAlreadyUsedByVariableError'");
		});

		it("Whole String Underline", async () => {
			try {
				await new KipperCompiler().compile("\\\\\\\\", defaultConfig);
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "LexerOrParserSyntaxError", "Expected different error");
				ensureTracebackDataExists(<KipperError>e);
				assert.equal(
					(<KipperError>e).getTraceback(),
					`Traceback:\nFile 'anonymous-script', line 1, col 0:\n` +
						`  \\\\\\\\\n` +
						`  ^^^^\n` +
						`${(<KipperError>e).name}: ${(<KipperError>e).message}`,
				);
				return;
			}
		});
	});
});
