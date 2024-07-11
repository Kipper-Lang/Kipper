import type { KipperCompileResult } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import {jsConfig} from "./errors";

/**
 * Tests the 'print' function of Kipper.
 * @param newConsoleLog The new console.log function, which is called by the 'print' function. This function should
 * assert the output and throw an error if the output is invalid.
 * @param jsProgram The program that was compiled to JavaScript that should be evaluated. This program should contain a
 * translated 'print' function call.
 */
export function testPrintOutput(newConsoleLog: (message: any) => void, jsProgram: string): void {
	const oldConsoleLog = console.log;
	console.log = newConsoleLog;
	eval(jsProgram); // Eval the program, which should call the 'print' function.
	console.log = oldConsoleLog;
}

describe("Core functionality", () => {
	const compiler = new KipperCompiler();
	const defaultTarget = new KipperTypeScriptTarget();

	describe("Comment", () => {
		it("Single line", async () => {
			const fileContent = 'var x: num = 5;\n// A comment\n print("");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
			assert.include(instance.write(), '__kipper.print("");', "Expected print call to be present in output");
		});

		it("Multi line", async () => {
			const fileContent = 'var x: num = 5;\n/* A comment\n ... \n end of comment */\n print("");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
			assert.include(instance.write(), '__kipper.print("");', "Expected print call to be present in output");
		});
	});

	describe("Declaration", () => {
		it("var", async () => {
			const fileContent = "var x: num;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("let x: number;"), "Invalid TypeScript code (Expected different output)");
		});
	});

	describe("Definition", () => {
		it("var", async () => {
			const fileContent = "var x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("let x: number = 4;"), "Invalid TypeScript code (Expected different output)");
		});

		it("const", async () => {
			const fileContent = "const x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("const x: number = 4;"), "Invalid TypeScript code (Expected different output)");
		});
	});

	describe("Assignment", () => {
		it("num", async () => {
			const fileContent = "var x: num = 4;\nx = 5;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(
				instance.write().includes("let x: number = 4;\nx = 5;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("str", async () => {
			const fileContent = 'var x: str = "4";\nx = "5";';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(
				instance.write().includes('let x: string = "4";\nx = "5";'),
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("Expression Statements", () => {
		it("one expression", async () => {
			const fileContent = "print = print;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(
				instance.write().includes("__kipper.print = __kipper.print;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("two expressions", async () => {
			const fileContent = '12 * 93, "5" + "1";';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("12 * 93;"), "Invalid TypeScript code (Expected different output)");
			assert(instance.write().includes('"5" + "1";'), "Invalid TypeScript code (Expected different output)");
		});

		it("three expressions", async () => {
			const fileContent = 'call print("x"), call print("y"), call print("z");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes('__kipper.print("x");'), "Invalid TypeScript code (Expected different output)");
			assert(instance.write().includes('__kipper.print("y");'), "Invalid TypeScript code (Expected different output)");
			assert(instance.write().includes('__kipper.print("z");'), "Invalid TypeScript code (Expected different output)");
		});
	});

	describe("Constant identifiers", () => {
		it("void", async () => {
			const fileContent = "var x: void = void; var y: void = undefined;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(
				instance.write().includes("let x: void = void(0);"),
				"Invalid TypeScript code (Expected different output)",
			);
			assert(
				instance.write().includes("let y: void = undefined;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("null", async () => {
			const fileContent = "var x: null = null;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("let x: null = null;"), "Invalid TypeScript code (Expected different output)");
		});

		it("undefined", async () => {
			const fileContent = "var x: undefined = undefined; var y: void = undefined;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(
				instance.write().includes("let x: undefined = undefined;"),
				"Invalid TypeScript code (Expected different output)",
			);
			assert(
				instance.write().includes("let y: void = undefined;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("Unary Operators", () => {
		it("unary plus", async () => {
			const fileContent = "+4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("+4;"), "Invalid TypeScript code (Expected different output)");
		});

		it("unary minus", async () => {
			const fileContent = "-4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("-4;"), "Invalid TypeScript code (Expected different output)");
		});

		// Technically, this is a logical operator, but it's considered a unary operator in Kipper, as it modifies
		// the value of the operand.
		it("!", async () => {
			const fileContent = "!true;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			assert(instance.write().includes("!true;"), "Invalid TypeScript code (Expected different output)");
		});

		describe("--", () => {
			it("prefix", async () => {
				const fileContent = "var x: num = 5; var y: num = --x;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.write().includes("let y: number = --x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const fileContent = "var x: num = 5; var y: num = x--;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.write().includes("let y: number = x--;"), "Expected different TypeScript code");
			});
		});

		describe("++", () => {
			it("prefix", async () => {
				const fileContent = "var x: num = 5; var y: num = ++x;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.write().includes("let y: number = ++x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const fileContent = "var x: num = 5; var y: num = x++;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.write().includes("let y: number = x++;"), "Expected different TypeScript code");
			});
		});
	});

	describe("Logical expressions", () => {
		describe("Logical AND", () => {
			it("true && true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 && x < 5) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 && x < 5) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				// Overwrite built-in to access output
				const prevLog = console.log;
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				console.log = (message: any) => {
					assert.equal(message, "Works", "Expected different output");
				};

				// Evaluate expression and restore old console.log
				eval(jsCode);
				console.log = prevLog;
			});

			it("true && false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 && x < 2) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 && x < 2) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 && x < 3) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 && x < 3) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 && x < 8) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 && x < 8) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});

		describe("Logical OR", () => {
			it("true || true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 || x < 5) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 || x < 5) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("true || false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 || x < 2) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 || x < 2) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("false || true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 || x < 3) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 || x < 3) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("false || false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 || x > 8) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 || x > 8) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code);
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});
	});

	describe("Comparisons", () => {
		it("==", async () => {
			const fileContent = 'var x: num = 4;\nif (x == 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert.include(
				code,
				'if (x === 4) {\n  __kipper.print("Works");\n}',
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("!=", async () => {
			const fileContent = 'var x: num = 4;\nif (x != 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x !== 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("<", async () => {
			const fileContent = 'var x: num = 4;\nif (x < 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x < 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("<=", async () => {
			const fileContent = 'var x: num = 4;\nif (x <= 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x <= 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it(">", async () => {
			const fileContent = 'var x: num = 5;\nif (x > 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 4) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it(">=", async () => {
			const fileContent = 'var x: num = 5;\nif (x >= 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x >= 4) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});
	});

	describe("If statements", () => {
		it("Single if-branch", async () => {
			const fileContent = "if (true) { var x: num = 5; }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"if (true) {\n  let x: number = 5;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("Two if-else branches", async () => {
			const fileContent = "if (true) { var x: num = 5; } else { var x: num = 5; }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"if (true) {\n  let x: number = 5;\n} else {\n  let x: number = 5;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("Multi if-else-if branches", async () => {
			const fileContent = "if (true) { var x: num = 5; } else if (true) { var x: num = 5; } else { var x: num = 5; }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"if (true) {\n  let x: number = 5;\n} else if (true) {\n  let x: number = 5;\n} else {\n  let x: number =" +
					" 5;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("Conditional Expression", () => {
		it("Simple conditional expression", async () => {
			const fileContent = "const x: num = true ? 5 : 10;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "const x: number = true ? 5 : 10", "Invalid TypeScript code (Expected different output)");
		});

		// Test for a nested conditional expression
		it("Nested conditional expression", async () => {
			const fileContent = "const x: num = true ? (false ? 5 : 10) : (false ? 15 : 20);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"const x: number = true ? (false ? 5 : 10) : (false ? 15 : 20);",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		// Test for multiple conditional expressions
		it("Multiple conditional expressions", async () => {
			const fileContent = "const x: num = true ? 5 : false ? 10 : 15;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"const x: number = true ? 5 : false ? 10 : 15;",
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("While loop", () => {
		it("Simple Loop with compound statement", async () => {
			const fileContent = "var x: num = 1; while (x <= 5) { x += 1; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "while (x <= 5) {\n  x += 1;\n}", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; while (x <= 10) x += 1; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "while (x <= 10) \n  x += 1;", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "11", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; while (x < 10) if (x != 10) x += 1; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) \n  if (x !== 10) {\n    x += 1;\n  }",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "10", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent = "var x: num = 1; while (x < 10) { if (x == 5) break; x += 1; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) {\n  if (x === 5) {\n    break;\n  } \n  x += 1;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; var y: num = 1; while (x < 10) { x++; if (x > 5) continue; y++; }; print(y as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) {\n  x++;\n  if (x > 5) {\n    continue;\n  } \n  y++;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});
	});

	describe("For loop", () => {
		it("Simple Loop with compound statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) { x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) x = i; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) \n  x = i;",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) if (i != 10) x = i; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) \n  if (i !== 10) {\n    x = i;\n  }",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent =
				"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) break; x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    break;\n  } \n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "4", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) continue; x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    continue;\n  } \n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});
	});

	//do while loop tests
	describe("Do While loop", () => {
		it("Simple Loop with compound statement", async () => {
			const fileContent = "var x: num = 1; do { x += 1; } while (x <= 5); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "do {\n  x += 1;\n} while (x <= 5)", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; do x += 1; while (x <= 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "do \n  x += 1;\nwhile (x <= 10)", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "11", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; do { if (x != 10) x += 1; } while (x < 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  if (x !== 10) {\n    x += 1;\n  } \n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "10", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent = "var x: num = 1; do { if (x == 5) break; x += 1; } while (x < 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  if (x === 5) {\n    break;\n  } \n  x += 1;\n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; var y: num = 1; do { x++; if (x > 5) continue; y++; } while (x < 10); print(y as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  x++;\n  if (x > 5) {\n    continue;\n  } \n  y++;\n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});
	});

	describe("Member access", () => {
		describe("Dot notation", () => {});

		describe("Bracket notation", () => {
			it("Simple access of a string", async () => {
				const fileContent = 'var x: str = "1234"[1]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.index("1234", 1);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
			});
		});

		describe("Slice notation", () => {
			it("Simple slice with both start and end", async () => {
				const fileContent = 'var x: str = "1234"[1:2]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
			});

			it("Simple slice with only start", async () => {
				const fileContent = 'var x: str = "1234"[1:]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", 1, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert.equal(message, "234", "Expected different output"), jsCode);
			});

			it("Simple slice with only end", async () => {
				const fileContent = 'var x: str = "1234"[:2]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, 2);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert.equal(message, "12", "Expected different output"), jsCode);
			});

			it("Simple slice with neither start nor end", async () => {
				const fileContent = 'var x: str = "1234"[:]; print(x);';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.slice("1234", undefined, undefined);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write());
				testPrintOutput((message: any) => assert.equal(message, "1234", "Expected different output"), jsCode);
			});
		});
	});

	describe("F-String", () => {
		const types = [
			{ type: "str", value: "' 1234 '" },
			{ type: "num", value: 12345 },
			{ type: "bool", value: true },
			{ type: "null", value: null },
			{ type: "undefined", value: undefined },
		];
		types.forEach((arg) => {
			describe(`Inserting [${arg.type}]`, () => {
				it("Inserting single value", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});

				it("Inserting two values", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value}} - 2. {${arg.value}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value} - 2. ${arg.value}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});

				it("Inserting three values", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value}} - 2. {${arg.value}} - 3. {${arg.value}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value} - 2. ${arg.value} - 3. ${arg.value}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});
			});
		});

		const types2 = [
			{ type: "str", value1: "' 12'", value2: "'34 '" },
			{ type: "num", value1: 12, value2: 34 },
		];
		types2.forEach((arg) => {
			describe(`Inserting additive expression [${arg.type}]`, () => {
				it("Inserting single value", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value1 + arg.value2}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});

				it("Inserting two values", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}} - 2. {${arg.value1} + ${arg.value2}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value1 + arg.value2} - 2. ${arg.value1 + arg.value2}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});

				it("Inserting three values", async () => {
					const fileContent = `print(f"Test: 1. {${arg.value1} + ${arg.value2}} - 2. {${arg.value1} + ${arg.value2}} - 3. {${arg.value1} + ${arg.value2}}");`;
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write());
					testPrintOutput(
						(msg: any) =>
							assert.equal(
								msg,
								// @ts-ignore
								`Test: 1. ${arg.value1 + arg.value2} - 2. ${arg.value1 + arg.value2} - 3. ${
									// @ts-ignore
									arg.value1 + arg.value2
								}`.replace(/'/g, ""),
							),
						jsCode,
					);
				});
			});
		});

		describe("Inserting function expression", () => {
			const functionContent = "def test() -> str { return 'SUCCESS'; }";

			it("Inserting single value", async () => {
				const fileContent = `${functionContent}; print(f"Test: 1. {test()}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. SUCCESS`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting two values", async () => {
				const fileContent = `${functionContent}; print(f"Test: 1. {test()} - 2. {test()}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. SUCCESS - 2. SUCCESS`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Inserting three values", async () => {
				const fileContent = `${functionContent}; print(f"Test: 1. {test()} - 2. {test()} - 3. {test()}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. SUCCESS - 2. SUCCESS - 3. SUCCESS`.replace(/'/g, ""),
						),
					jsCode,
				);
			});
		});

		describe("Inserting nested f-strings", () => {
			it("One level", async () => {
				const fileContent = `print(f"Test: 1. {f'{1 + 1}'}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. 2`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Two levels", async () => {
				const fileContent = `print(f"Test: 1. {f'{f'{1 + 1}'}'}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. 2`.replace(/'/g, ""),
						),
					jsCode,
				);
			});

			it("Three levels", async () => {
				const fileContent = `print(f"Test: 1. {f'{f'{f'{1 + 1}'}'}'}");`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert(instance.programCtx!!.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx!!.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write());
				testPrintOutput(
					(msg: any) =>
						assert.equal(
							msg,
							// @ts-ignore
							`Test: 1. 2`.replace(/'/g, ""),
						),
					jsCode,
				);
			});
		});
	});

	describe("Lambdas", () => {
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

	describe("Functions", () => {
		it("Declaration", async () => {
			const fileContent = "def test() -> void { }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "function test(): void {\n}", "Invalid TypeScript code (Expected different output)");
		});

		it("Call", async () => {
			const fileContent = 'def test() -> void { call print("Works"); return; }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				'function test(): void {\n  __kipper.print("Works");\n  return;\n}',
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("Return value", async () => {
			const fileContent = "def test() -> num { return 5; }; print(test() as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"function test(): number {\n  return 5;\n}\n__kipper.print(__kipper.numToStr(test()));",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different result"), jsCode);
		});

		it("Parameters", async () => {
			const fileContent = 'def test(x: num, y: str) -> num { return x + y as num; }; print(test(1, "5") as str);';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"function test(x: number, y: string): number {\n  return x + __kipper.strToNum(y);\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code);
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different result"), jsCode);
		});
	});

	describe("Interfaces", async () => {
		it("Can initialize empty interface", async () => {
			const fileContent = "interface Test { }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(written, "interface Test {\n}", "Invalid TypeScript code (Expected different output)");
		});

		it("can initialize interface with members", async () => {
			const fileContent = "interface Test {\n x: num;\n y: str;\n greet(name: str) : str;}";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"interface Test {\n x: number;\n y: string;\n greet(name: string): string;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should can initialize with mixed members", async () => {
			const fileContent = "interface Test {\n x: num;\n isTrue(f: bool): str;\n y: str;\n greet(name: str) : str;}";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"interface Test {\n x: number;\n isTrue(f: boolean): string;\n y: string;\n greet(name: string): string;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});
});
