import { KipperCompiler, KipperCompileResult, KipperParseStream } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

/**
 * Tests the 'print' function of Kipper.
 * @param newConsoleLog The new console.log function, which is called by the 'print' function. This function should
 * assert the output and throw an error if the output is invalid.
 * @param jsProgram The program that was compiled to JavaScript that should be evaluated. This program should contain a
 * translated 'print' function call.
 */
function testPrintOutput(newConsoleLog: (message: any) => void, jsProgram: string): void {
	const oldConsoleLog = console.log;
	console.log = newConsoleLog;
	eval(jsProgram); // Eval the program, which should call the 'print' function.
	console.log = oldConsoleLog;
}

describe("Core functionality", () => {
	const compiler = new KipperCompiler();
	const defaultTarget = new KipperTypeScriptTarget();

	describe("Declaration", () => {
		it("var", async () => {
			const stream = new KipperParseStream("var x: num;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: number;"), "Invalid TypeScript code");
		});
	});

	describe("Definition", () => {
		it("var", async () => {
			const stream = new KipperParseStream("var x: num = 4;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: number = 4;"), "Invalid TypeScript code");
		});

		it("const", async () => {
			const stream = new KipperParseStream("const x: num = 4;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("const x: number = 4;"), "Invalid TypeScript code");
		});
	});

	describe("Assignment", () => {
		it("num", async () => {
			const stream = new KipperParseStream("var x: num = 4;\nx = 5;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: number = 4;\nx = 5;"), "Invalid TypeScript code");
		});

		it("str", async () => {
			const stream = new KipperParseStream('var x: str = "4";\nx = "5";');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes('let x: string = "4";\nx = "5";'), "Invalid TypeScript code");
		});
	});

	describe("Expression Statements", () => {
		it("one expression", async () => {
			const stream = new KipperParseStream("print = print;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("__kipper.print = __kipper.print;"), "Invalid TypeScript code");
		});

		it("two expressions", async () => {
			const stream = new KipperParseStream('12 * 93, "5" + "1";');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("12 * 93;"), "Invalid TypeScript code");
			assert(instance.write().includes('"5" + "1";'), "Invalid TypeScript code");
		});

		it("three expressions", async () => {
			const stream = new KipperParseStream('call print("x"), call print("y"), call print("z");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes('__kipper.print("x");'), "Invalid TypeScript code");
			assert(instance.write().includes('__kipper.print("y");'), "Invalid TypeScript code");
			assert(instance.write().includes('__kipper.print("z");'), "Invalid TypeScript code");
		});
	});

	describe("Constant identifiers", () => {
		it("void", async () => {
			const stream = new KipperParseStream("var x: void = void; var y: void = undefined;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: void = void(0);"), "Invalid TypeScript code");
			assert(instance.write().includes("let y: void = undefined;"), "Invalid TypeScript code");
		});

		it("null", async () => {
			const stream = new KipperParseStream("var x: null = null;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: null = null;"), "Invalid TypeScript code");
		});

		it("undefined", async () => {
			const stream = new KipperParseStream("var x: undefined = undefined; var y: void = undefined;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("let x: undefined = undefined;"), "Invalid TypeScript code");
			assert(instance.write().includes("let y: void = undefined;"), "Invalid TypeScript code");
		});
	});

	describe("Unary Operators", () => {
		it("unary plus", async () => {
			const stream = new KipperParseStream("+4;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("+4;"), "Invalid TypeScript code");
		});

		it("unary minus", async () => {
			const stream = new KipperParseStream("-4;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("-4;"), "Invalid TypeScript code");
		});

		// Technically, this is a logical operator, but it's considered a unary operator in Kipper, as it modifies
		// the value of the operand.
		it("!", async () => {
			const stream = new KipperParseStream("!true;");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");
			assert(instance.write().includes("!true;"), "Invalid TypeScript code");
		});

		describe("--", () => {
			it("prefix", async () => {
				const stream = new KipperParseStream("var x: num = 5; var y: num = --x;");
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.write().includes("let y: number = --x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const stream = new KipperParseStream("var x: num = 5; var y: num = x--;");
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.write().includes("let y: number = x--;"), "Expected different TypeScript code");
			});
		});

		describe("++", () => {
			it("prefix", async () => {
				const stream = new KipperParseStream("var x: num = 5; var y: num = ++x;");
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.write().includes("let y: number = ++x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const stream = new KipperParseStream("var x: num = 5; var y: num = x++;");
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.write().includes("let y: number = x++;"), "Expected different TypeScript code");
			});
		});
	});

	describe("Logical expressions", () => {
		describe("Logical AND", () => {
			it("true && true", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 && x < 5) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 3 && x < 5) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				// Overwrite built-in to access output
				const prevLog = console.log;
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				console.log = (message: any) => {
					assert(message === "Works", "Expected different output");
				};

				// Evaluate expression and restore old console.log
				eval(jsCode);
				console.log = prevLog;
			});

			it("true && false", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 && x < 2) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 3 && x < 2) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && true", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 && x < 3) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 5 && x < 3) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && false", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 && x < 8) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 5 && x < 8) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});

		describe("Logical OR", () => {
			it("true || true", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 || x < 5) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 3 || x < 5) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
			});

			it("true || false", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 || x < 2) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 3 || x < 2) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
			});

			it("false || true", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 || x < 3) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 5 || x < 3) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
			});

			it("false || false", async () => {
				const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 || x > 8) { call print("Works"); }');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
				assert(code.includes('if (x > 5 || x > 8) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});
	});

	describe("Comparisons", () => {
		it("==", async () => {
			const stream = new KipperParseStream('var x: num = 4;\nif (x == 4) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
			assert.include(code, 'if (x === 4) {\n  __kipper.print("Works");\n}', "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it("!=", async () => {
			const stream = new KipperParseStream('var x: num = 4;\nif (x != 5) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
			assert(code.includes('if (x !== 5) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it("<", async () => {
			const stream = new KipperParseStream('var x: num = 4;\nif (x < 5) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
			assert(code.includes('if (x < 5) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it("<=", async () => {
			const stream = new KipperParseStream('var x: num = 4;\nif (x <= 5) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code");
			assert(code.includes('if (x <= 5) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it(">", async () => {
			const stream = new KipperParseStream('var x: num = 5;\nif (x > 4) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code");
			assert(code.includes('if (x > 4) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it(">=", async () => {
			const stream = new KipperParseStream('var x: num = 5;\nif (x >= 4) call print("Works");');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code");
			assert(code.includes('if (x >= 4) {\n  __kipper.print("Works");\n}'), "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});
	});

	describe("If statements", () => {
		it("Single if-branch", async () => {
			const stream = new KipperParseStream("if (true) { var x: num = 5; }");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "if (true) {\n  let x: number = 5;\n}", "Invalid TypeScript code");
		});

		it("Two if-else branches", async () => {
			const stream = new KipperParseStream("if (true) { var x: num = 5; } else { var x: num = 5; }");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(
				code,
				"if (true) {\n  let x: number = 5;\n} else {\n  let x: number = 5;\n}",
				"Invalid TypeScript code",
			);
		});

		it("Multi if-else-if branches", async () => {
			const stream = new KipperParseStream(
				"if (true) { var x: num = 5; } else if (true) { var x: num = 5; } else { var x: num = 5; }",
			);
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(
				code,
				"if (true) {\n  let x: number = 5;\n} else if (true) {\n  let x: number = 5;\n} else {\n  let x: number =" +
					" 5;\n}",
				"Invalid TypeScript code",
			);
		});
	});

	describe("While loop", () => {
		it("Simple Loop with compound statement", async () => {
			const stream = new KipperParseStream("var x: num = 1; while (x <= 5) { x += 1; }; print(x as str);");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "while (x <= 5) {\n  x += 1;\n}", "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const stream = new KipperParseStream("var x: num = 1; while (x <= 5) x += 1; print(x as str);");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "while (x <= 5) \n  x += 1;", "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const stream = new KipperParseStream("var x: num = 1; while (x < 5) if (x != 5) x += 1; print(x as str);");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "while (x < 5) \n  if (x !== 5) {\n    x += 1;\n  }", "Invalid TypeScript code");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "5", "Expected different output"), jsCode);
		});
	});

	describe("Member access", () => {
		describe("Dot notation", () => {});

		describe("Bracket notation", () => {
			it("Simple access of a string", async () => {
				const stream = new KipperParseStream('var x: str = "1234"[1]; print(x);');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = "1234"[1];',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert(message === "2", "Expected different output"), jsCode);
			});
		});

		describe("Slice notation", () => {
			it("Simple slice with both start and end", async () => {
				const stream = new KipperParseStream('var x: str = "1234"[1:2]; print(x);');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert(message === "2", "Expected different output"), jsCode);
			});

			it("Simple slice with only start", async () => {
				const stream = new KipperParseStream('var x: str = "1234"[1:]; print(x);');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert(message === "234", "Expected different output"), jsCode);
			});

			it("Simple slice with only end", async () => {
				const stream = new KipperParseStream('var x: str = "1234"[:2]; print(x);');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert(message === "2", "Expected different output"), jsCode);
			});

			it("Simple slice with neither start nor end", async () => {
				const stream = new KipperParseStream('var x: str = "1234"[:]; print(x);');
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert(message === "2", "Expected different output"), jsCode);
			});
		});
	});

	describe("Functions", () => {
		it("Declaration", async () => {
			const stream = new KipperParseStream("def test() -> void { }");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(code, "function test(): void {\n}", "Invalid TypeScript code");
		});

		it("Call", async () => {
			const stream = new KipperParseStream('def test() -> void { call print("Works"); return; }');
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(
				code,
				'function test(): void {\n  __kipper.print("Works");\n  return;\n}',
				"Invalid TypeScript code",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "Works", "Expected different output"), jsCode);
		});

		it("Return value", async () => {
			const stream = new KipperParseStream("def test() -> num { return 5; }; print(test() as str);");
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(
				code,
				"function test(): number {\n  return 5;\n}\n__kipper.print(__kipper.numToStr(test()));",
				"Invalid TypeScript code",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "5", "Expected different result"), jsCode);
		});

		it("Parameters", async () => {
			const stream = new KipperParseStream(
				'def test(x: num, y: str) -> num { return x + y as num; }; print(test(1, "5") as str);',
			);
			const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

			assert(instance.programCtx);
			assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
			assert(instance.programCtx.stream === stream, "Expected matching streams");

			const code = instance.write();
			assert.include(
				code,
				"function test(x: number, y: string): number {\n  return x + __kipper.strToNum(y);\n}",
				"Invalid TypeScript code",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert(message === "6", "Expected different result"), jsCode);
		});
	});
});
