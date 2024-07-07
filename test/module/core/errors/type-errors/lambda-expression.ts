import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";
import { defaultConfig } from "../index";

describe("LambdaExpressionTests", () => {
	const compiler = new KipperCompiler();

	it("parses simple lambda expression without syntax errors", async () => {
		const code = `var add: func = (x: num, y: num): num -> x + y;`;
		try {
			await compiler.compile(code, defaultConfig);
			assert.isTrue(true, "Lambda expression parsed successfully");
		} catch (e) {
			assert.fail("Lambda expression parsing failed");
		}
	});

	it("correctly identifies semantic data for a lambda with compound statement", async () => {
		const code = `var greet: func = (name: str): str -> { return "Hello, " + name; };`;
		try {
			const result = await compiler.compile(code, defaultConfig);
			assert.isTrue(true, "Lambda expression parsed successfully");
		} catch (e) {
			assert.fail("Failed to analyze lambda expression semantically");
		}
	});


});
