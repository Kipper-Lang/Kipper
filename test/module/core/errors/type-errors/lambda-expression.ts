import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";
import { jsConfig } from "../index";

describe("LambdaExpressionTests", () => {
	const compiler = new KipperCompiler();

	it("parses simple lambda expression without syntax errors", async () => {
		const code = `var add: func = (x: num, y: num): num -> x + y;`;
		try {
			const result = await compiler.compile(code, jsConfig);
			// Evaluate the compiled code
			let stringResult = result.result!.map((x) => x.join("")).join("\n");
			stringResult = stringResult.concat("\nadd(1, 2);");
			const res = eval(stringResult);
			assert.equal(res, 3, "Lambda expression evaluated correctly");
		} catch (e) {
			assert.fail("Failed to analyze lambda expression semantically");
		}
	});

	it("correctly identifies semantic data for a lambda with compound statement", async () => {
		const code = `var greet: func = (name: str): str -> { return "Hello, " + name; };`;
		try {
			const result = await compiler.compile(code, jsConfig);
			// Evaluate the compiled code
			let stringResult = result.result!.map((x) => x.join("")).join("\n");
			stringResult = stringResult.concat("\ngreet('John');");
			const res = eval(stringResult);
			assert.equal(res, "Hello, John", "Lambda expression evaluated correctly");
		} catch (e) {
			assert.fail("Failed to analyze lambda expression semantically");
		}
	});

	it("correctly identifies semantic data for a lambda with single statement", async () => {
		const code = `var greet: func = (name: str): str -> "Hello, " + name;`;
		try {
			const result = await compiler.compile(code, jsConfig);
			// Evaluate the compiled code
			let stringResult = result.result!.map((x) => x.join("")).join("\n");
			stringResult = stringResult.concat("\ngreet('John');");
			const res = eval(stringResult);
			assert.equal(res, "Hello, John", "Lambda expression evaluated correctly");
		} catch (e) {
			assert.fail("Failed to analyze lambda expression semantically");
		}
	});

	it("correctly identifies semantic data for a lambda with no parameters", async () => {
		const code = `var greet: func = (): str -> "Hello, World!";`;
		try {
			const result = await compiler.compile(code, jsConfig);
			// Evaluate the compiled code
			let stringResult = result.result!.map((x) => x.join("")).join("\n");
			stringResult = stringResult.concat("\ngreet();");
			const res = eval(stringResult);
			assert.equal(res, "Hello, World!", "Lambda expression evaluated correctly");
		} catch (e) {
			assert.fail("Failed to analyze lambda expression semantically");
		}
	});
});
