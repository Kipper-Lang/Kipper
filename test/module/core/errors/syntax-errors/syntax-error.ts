import type { KipperError, LexerOrParserSyntaxError } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { defaultConfig, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("KipperSyntaxError", () => {
	it("LexerError", async () => {
		try {
			await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D", defaultConfig);
		} catch (e) {
			assert(
				(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
				"Expected different error",
			);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'LexerOrParserSyntaxError'");
	});

	it("ParserError", async () => {
		try {
			await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5", defaultConfig);
		} catch (e) {
			assert(
				(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
				"Expected different error",
			);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'KipperSyntaxError'");
	});
});
