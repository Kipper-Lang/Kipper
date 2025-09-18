import { assert } from "chai";
import { jsConfig } from "../errors";
import { compiler } from ".";
import { testPrintOutput } from "..";

describe("Lambdas", () => {
	it("parses simple lambda expression without syntax errors", async () => {
		const code = `var add: Func<num, num, num> = (x: num, y: num): num -> x + y; print(add(1, 2));`;
		const result = await compiler.compile(code, jsConfig);

		assert.isDefined(result.programCtx);
		assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
		const stringResult = result.write();

		testPrintOutput((message: any) => assert.equal(message, "3", "Expected different output"), stringResult);
	});

	it("correctly identifies semantic data for a lambda with compound statement", async () => {
		const code = `var greet: Func<str, str> = (name: str): str -> { return "Hello, " + name; }; print(greet('John'));`;
		const result = await compiler.compile(code, jsConfig);

		assert.isDefined(result.programCtx);
		assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
		const stringResult = result.write();

		testPrintOutput((message: any) => assert.equal(message, "Hello, John", "Expected different output"), stringResult);
	});

	it("correctly identifies semantic data for a lambda with single statement", async () => {
		const code = `var greet: Func<str, str> = (name: str): str -> "Hello, " + name; print(greet('John'));`;
		const result = await compiler.compile(code, jsConfig);

		assert.isDefined(result.programCtx);
		assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
		const stringResult = result.write();

		testPrintOutput((message: any) => assert.equal(message, "Hello, John", "Expected different output"), stringResult);
	});

	it("correctly identifies semantic data for a lambda with no parameters", async () => {
		const code = `var greet: Func<str> = (): str -> "Hello, World!"; print(greet());`;
		const result = await compiler.compile(code, jsConfig);

		assert.isDefined(result.programCtx);
		assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
		const stringResult = result.write();

		testPrintOutput(
			(message: any) => assert.equal(message, "Hello, World!", "Expected different output"),
			stringResult,
		);
	});

	describe("can use a lambda as a direct value in a function", () => {
		it("using a lambda with an expression body", async () => {
			const code = `var greet: Func<str> = (): str -> "Hello, World!"; print(greet());`;
			const result = await compiler.compile(code, jsConfig);

			assert.isDefined(result.programCtx);
			assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
			const stringResult = result.write();

			testPrintOutput(
				(message: any) => assert.equal(message, "Hello, World!", "Expected different output"),
				stringResult,
			);
		});

		it("using a lambda with a compound statement body", async () => {
			const code = `var greet: Func<str> = (): str -> { return "Hello, World!"; }; print(greet());`;
			const result = await compiler.compile(code, jsConfig);

			assert.isDefined(result.programCtx);
			assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
			const stringResult = result.write();

			testPrintOutput(
				(message: any) => assert.equal(message, "Hello, World!", "Expected different output"),
				stringResult,
			);
		});
	});
});
