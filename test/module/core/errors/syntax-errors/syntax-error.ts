import { KipperCompiler, KipperCompileResult, KipperError, LexerOrParserSyntaxError } from "@kipper/core";
import { defaultConfig, ensureErrorWasReported, ensureTracebackDataExists } from "../index";
import { assert } from "chai";

describe("KipperSyntaxError", () => {
	it("LexerError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D", defaultConfig);
		} catch (e) {
			assert(
				(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
				"Expected proper error",
			);
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'LexerOrParserSyntaxError'");
	});

	it("ParserError", async () => {
		let result: KipperCompileResult | undefined = undefined;
		try {
			result = await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5", defaultConfig);
		} catch (e) {
			assert(
				(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
				"Expected proper error",
			);
			ensureErrorWasReported(typeof result === "object" ? result?.programCtx : undefined);
			ensureTracebackDataExists(<KipperError>e);
			return;
		}
		assert.fail("Expected 'KipperSyntaxError'");
	});
});
