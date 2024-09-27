import type { KipperCompileResult } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { assert } from "chai";
import * as ts from "typescript";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { jsConfig } from "./errors";
import { ScriptTarget } from "typescript";

/**
 * Tests the 'print' function of Kipper.
 * @param newConsoleLog The new console.log function, which is called by the 'print' function. This function should
 * assert the output and throw an error if the output is invalid.
 * @param jsProgram The program that was compiled to JavaScript that should be evaluated. This program should contain a
 * translated 'print' function call.
 */
export function testPrintOutput(newConsoleLog: (message: any) => void, jsProgram: string): void {
	const oldConsoleLog = console.log;
	console.log = (v: any) => newConsoleLog(String(v));
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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
			assert.include(instance.write(), '__kipper.print("");', "Expected print call to be present in output");
		});

		it("Multi line", async () => {
			const fileContent = 'var x: num = 5;\n/* A comment\n ... \n end of comment */\n print("");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert.include(instance.write(), "let x: number = 5;", "Expected variable declaration to be present in output");
			assert.include(instance.write(), '__kipper.print("");', "Expected print call to be present in output");
		});
	});

	describe("Declaration", () => {
		it("var", async () => {
			const fileContent = "var x: num;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let x: number;"), "Invalid TypeScript code (Expected different output)");
		});
	});

	describe("Definition", () => {
		it("var", async () => {
			const fileContent = "var x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let x: number = 4;"), "Invalid TypeScript code (Expected different output)");
		});

		it("const", async () => {
			const fileContent = "const x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("const x: number = 4;"), "Invalid TypeScript code (Expected different output)");
		});
	});

	describe("Assignment", () => {
		it("to 'num'", async () => {
			const fileContent = "var x: num = 4;\nx = 5;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance.write().includes("let x: number = 4;\nx = 5;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("to 'str'", async () => {
			const fileContent = 'var x: str = "4";\nx = "5";';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance.write().includes('let x: string = "4";\nx = "5";'),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("to 'bool'", async () => {
			const fileContent = "var x: bool = true;\nx = false;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance.write().includes("let x: boolean = true;\nx = false;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("to 'array'", async () => {
			const fileContent = "var x: Array<num> = [1, 2, 3];\nx = [4, 5, 6];";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance
					.write()
					.includes(
						"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));\nx = __kipper.assignTypeMeta([4, 5, 6],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));",
					),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("to 'func'", async () => {
			const fileContent = "var x: Func<str, void> = print;\nx = print;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance.write().includes("let x: (arg0: string) => void = __kipper.print;\nx = __kipper.print;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("to 'array[]'", async () => {
			const fileContent = "var x: Array<num> = [1, 2, 3];\nx[0] = 4;\nprint(x[0]);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance
					.write()
					.includes(
						"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));\nx[0] = 4;",
					),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "4", "Expected different output"), jsCode);
		});
	});

	describe("Expression Statements", () => {
		it("one expression", async () => {
			const fileContent = "print = print;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(
				instance.write().includes("__kipper.print = __kipper.print;"),
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("two expressions", async () => {
			const fileContent = '12 * 93, "5" + "1";';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("12 * 93;"), "Invalid TypeScript code (Expected different output)");
			assert(instance.write().includes('"5" + "1";'), "Invalid TypeScript code (Expected different output)");
		});

		it("three expressions", async () => {
			const fileContent = 'call print("x"), call print("y"), call print("z");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("let x: null = null;"), "Invalid TypeScript code (Expected different output)");
		});

		it("undefined", async () => {
			const fileContent = "var x: undefined = undefined; var y: void = undefined;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("+4;"), "Invalid TypeScript code (Expected different output)");
		});

		it("unary minus", async () => {
			const fileContent = "-4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("-4;"), "Invalid TypeScript code (Expected different output)");
		});

		// Technically, this is a logical operator, but it's considered a unary operator in Kipper, as it modifies
		// the value of the operand.
		it("!", async () => {
			const fileContent = "!true;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			assert(instance.write().includes("!true;"), "Invalid TypeScript code (Expected different output)");
		});

		describe("--", () => {
			it("prefix", async () => {
				const fileContent = "var x: num = 5; var y: num = --x;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.write().includes("let y: number = --x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const fileContent = "var x: num = 5; var y: num = x--;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.write().includes("let y: number = x--;"), "Expected different TypeScript code");
			});
		});

		describe("++", () => {
			it("prefix", async () => {
				const fileContent = "var x: num = 5; var y: num = ++x;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.write().includes("let y: number = ++x;"), "Expected different TypeScript code");
			});

			it("postfix", async () => {
				const fileContent = "var x: num = 5; var y: num = x++;";
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 && x < 5) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				// Overwrite built-in to access output
				const prevLog = console.log;
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 && x < 2) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 && x < 3) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 && x < 3) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});

			it("false && false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 && x < 8) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 && x < 8) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});

		describe("Logical OR", () => {
			it("true || true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 || x < 5) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 || x < 5) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("true || false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 3 || x < 2) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 3 || x < 2) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("false || true", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 || x < 3) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 || x < 3) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
			});

			it("false || false", async () => {
				const fileContent = 'var x: num = 4;\nif (x > 5 || x > 8) { call print("Works"); }';
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

				const code = instance.write();
				assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
				assert(
					code.includes('if (x > 5 || x > 8) {\n  __kipper.print("Works");\n}'),
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
				testPrintOutput(() => assert(false, "Expected no output"), jsCode);
			});
		});
	});

	describe("Comparisons", () => {
		it("==", async () => {
			const fileContent = 'var x: num = 4;\nif (x == 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert.include(
				code,
				'if (x === 4) {\n  __kipper.print("Works");\n}',
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("!=", async () => {
			const fileContent = 'var x: num = 4;\nif (x != 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x !== 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("<", async () => {
			const fileContent = 'var x: num = 4;\nif (x < 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x < 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("<=", async () => {
			const fileContent = 'var x: num = 4;\nif (x <= 5) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 4;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x <= 5) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it(">", async () => {
			const fileContent = 'var x: num = 5;\nif (x > 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x > 4) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it(">=", async () => {
			const fileContent = 'var x: num = 5;\nif (x >= 4) call print("Works");';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "let x: number = 5;", "Invalid TypeScript code (Expected different output)");
			assert(
				code.includes('if (x >= 4) {\n  __kipper.print("Works");\n}'),
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});
	});

	describe("If statements", () => {
		it("Single if-branch", async () => {
			const fileContent = "if (true) { var x: num = 5; }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "const x: number = true ? 5 : 10", "Invalid TypeScript code (Expected different output)");
		});

		// Test for a nested conditional expression
		it("Nested conditional expression", async () => {
			const fileContent = "const x: num = true ? (false ? 5 : 10) : (false ? 15 : 20);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

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
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "while (x <= 5) {\n  x += 1;\n}", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; while (x <= 10) x += 1; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "while (x <= 10) \n  x += 1;", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "11", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; while (x < 10) if (x != 10) x += 1; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) \n  if (x !== 10) {\n    x += 1;\n  }",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "10", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent = "var x: num = 1; while (x < 10) { if (x == 5) break; x += 1; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) {\n  if (x === 5) {\n    break;\n  } \n  x += 1;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; var y: num = 1; while (x < 10) { x++; if (x > 5) continue; y++; }; print(y as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"while (x < 10) {\n  x++;\n  if (x > 5) {\n    continue;\n  } \n  y++;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});
	});

	describe("For loop", () => {
		it("Simple Loop with compound statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) { x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) x = i; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) \n  x = i;",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; for (var i: num = 0; i < 10; i += 1) if (i != 10) x = i; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) \n  if (i !== 10) {\n    x = i;\n  }",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent =
				"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) break; x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    break;\n  } \n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "4", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; for (var i: num = 0; i < 10; i += 1) { if (i == 5) continue; x = i; }; print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"for (let i: number = 0; i < 10; i += 1) {\n  if (i === 5) {\n    continue;\n  } \n  x = i;\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "9", "Expected different output"), jsCode);
		});
	});

	//do while loop tests
	describe("Do While loop", () => {
		it("Simple Loop with compound statement", async () => {
			const fileContent = "var x: num = 1; do { x += 1; } while (x <= 5); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "do {\n  x += 1;\n} while (x <= 5)", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different output"), jsCode);
		});

		it("Simple Loop with expression statement", async () => {
			const fileContent = "var x: num = 1; do x += 1; while (x <= 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "do \n  x += 1;\nwhile (x <= 10)", "Invalid TypeScript code (Expected different output)");

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "11", "Expected different output"), jsCode);
		});

		it("Simple Loop with if statement", async () => {
			const fileContent = "var x: num = 1; do { if (x != 10) x += 1; } while (x < 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  if (x !== 10) {\n    x += 1;\n  } \n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "10", "Expected different output"), jsCode);
		});

		it("Can be interrupted with break", async () => {
			const fileContent = "var x: num = 1; do { if (x == 5) break; x += 1; } while (x < 10); print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  if (x === 5) {\n    break;\n  } \n  x += 1;\n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different output"), jsCode);
		});

		it("Can be interrupted with continue", async () => {
			const fileContent =
				"var x: num = 1; var y: num = 1; do { x++; if (x > 5) continue; y++; } while (x < 10); print(y as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"do {\n  x++;\n  if (x > 5) {\n    continue;\n  } \n  y++;\n} while (x < 10)",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
				assert.include(
					instance.write(),
					'let x: string = __kipper.index("1234", 1);',
					"Expected different TypeScript code",
				);

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
				testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
			});
		});

		describe("Slice notation", () => {
			describe("str", () => {
				it("Simple slice with both start and end", async () => {
					const fileContent = 'var x: str = "1234"[1:2]; print(x);';
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						'let x: string = __kipper.slice("1234", 1, 2);',
						"Expected different TypeScript code",
					);

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
					testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
				});

				it("Simple slice with only start", async () => {
					const fileContent = 'var x: str = "1234"[1:]; print(x);';
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						'let x: string = __kipper.slice("1234", 1, undefined);',
						"Expected different TypeScript code",
					);

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
					testPrintOutput((message: any) => assert.equal(message, "234", "Expected different output"), jsCode);
				});

				it("Simple slice with only end", async () => {
					const fileContent = 'var x: str = "1234"[:2]; print(x);';
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						'let x: string = __kipper.slice("1234", undefined, 2);',
						"Expected different TypeScript code",
					);

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
					testPrintOutput((message: any) => assert.equal(message, "12", "Expected different output"), jsCode);
				});

				it("Simple slice with neither start nor end", async () => {
					const fileContent = 'var x: str = "1234"[:]; print(x);';
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						'let x: string = __kipper.slice("1234", undefined, undefined);',
						"Expected different TypeScript code",
					);

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
					testPrintOutput((message: any) => assert.equal(message, "1234", "Expected different output"), jsCode);
				});
			});

			describe("array", () => {
				// TODO Add ts ignore to fix this
				it("Simple slice with both start and end", async () => {
					const fileContent = "var x: Array<num> = [1, 2, 3, 4][1:2]; print(x[0]);";
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						"let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), 1, 2);",
						"Expected different TypeScript code",
					);
				});

				it("Simple slice with only start", async () => {
					const fileContent = "var x: Array<num> = [1, 2, 3, 4][1:]; print(x[0]);";
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						`let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), 1, undefined);`,
						"Expected different TypeScript code",
					);
				});

				it("Simple slice with only end", async () => {
					const fileContent = "var x: Array<num> = [1, 2, 3, 4][:2]; print(x[0]);";
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						"let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), undefined, 2);",
						"Expected different TypeScript code",
					);
				});

				it("Simple slice with neither start nor end", async () => {
					const fileContent = "var x: Array<num> = [1, 2, 3, 4][:]; print(x[0]);";
					const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

					assert.isDefined(instance.programCtx);
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");
					assert.include(
						instance.write(),
						`let x: Array<number> = __kipper.slice(__kipper.assignTypeMeta([1, 2, 3, 4],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num})), undefined, undefined);`,
						"Expected different TypeScript code",
					);
				});
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
					assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
					assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

					const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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
				assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
				assert(instance.programCtx?.stream.stringContent === fileContent, "Expected matching streams");

				const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
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

	describe("Arrays", () => {
		it("Simple array declaration", async () => {
			const fileContent = `var x: Array<num> = [1, 2, 3];`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("Assign array to array", async () => {
			const code = "var x: Array<num> = [1, 2, 3]; var y: Array<num> = x;";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const jsCode = instance.write();
			assert.include(
				jsCode,
				`let x: Array<number> = __kipper.assignTypeMeta([1, 2, 3],__kipper.builtIn.Array.changeGenericTypeArguments({T: __kipper.builtIn.num}));\nlet y: Array<number> = x;`,
			);
		});

		it("Accessing array element", async () => {
			const code = "var x: Array<num> = [1, 2, 3]; print(x[1] as str);";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
		});

		it("Assigning one array element to another", async () => {
			const code = "var x: Array<num> = [1, 2, 3]; var y: num = x[1]; print(y as str);";
			const instance: KipperCompileResult = await compiler.compile(code, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const jsCode = ts.transpile(instance.write(), { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "2", "Expected different output"), jsCode);
		});
	});

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

			testPrintOutput(
				(message: any) => assert.equal(message, "Hello, John", "Expected different output"),
				stringResult,
			);
		});

		it("correctly identifies semantic data for a lambda with single statement", async () => {
			const code = `var greet: Func<str, str> = (name: str): str -> "Hello, " + name; print(greet('John'));`;
			const result = await compiler.compile(code, jsConfig);

			assert.isDefined(result.programCtx);
			assert.deepEqual(result.programCtx?.errors, [], "Expected no compilation errors");
			const stringResult = result.write();

			testPrintOutput(
				(message: any) => assert.equal(message, "Hello, John", "Expected different output"),
				stringResult,
			);
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

	describe("Functions", () => {
		it("Declaration", async () => {
			const fileContent = "def test() -> void { }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(code, "function test(): void {\n}", "Invalid TypeScript code (Expected different output)");
		});

		it("Call", async () => {
			const fileContent = 'def test() -> void { call print("Works"); return; }';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				'function test(): void {\n  __kipper.print("Works");\n  return;\n}',
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "Works", "Expected different output"), jsCode);
		});

		it("Return value", async () => {
			const fileContent = "def test() -> num { return 5; }; print(test() as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"function test(): number {\n  return 5;\n}\n__kipper.print(__kipper.numToStr(test()));",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "5", "Expected different result"), jsCode);
		});

		it("Parameters", async () => {
			const fileContent = 'def test(x: num, y: str) -> num { return x + y as num; }; print(test(1, "5") as str);';
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");

			const code = instance.write();
			assert.include(
				code,
				"function test(x: number, y: string): number {\n  return x + __kipper.strToNum(y);\n}",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(code, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "6", "Expected different result"), jsCode);
		});
	});

	describe("Object literals", () => {
		it("should be able to create an object literal", async () => {
			const fileContent = "{ x: 1, y: '2' };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(written, "{\n  x: 1,\n  y: '2',\n};", "Invalid TypeScript code (Expected different output)");
		});

		it("should create an object with different types of properties", async () => {
			const fileContent = "{ numProp: 1, strProp: '2', boolProp: true };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			const written = instance.write();
			assert.include(
				written,
				"{\n  numProp: 1,\n  strProp: '2',\n  boolProp: true,\n};",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should create an object with nested objects", async () => {
			const fileContent = "{ outerProp: { innerProp: 1 } };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			const written = instance.write();
			assert.include(
				written,
				"{\n  outerProp: {\n  innerProp: 1,\n},\n};",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should create an object with array properties", async () => {
			const fileContent = "{ arrProp: [1, 2, 3] };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			const written = instance.write();
			assert.include(
				written,
				"{\n  arrProp: __kipper.assignTypeMeta([1, 2, 3],",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should create an object with method properties", async () => {
			const fileContent = "{ methodProp: (): num -> 1 };";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			const written = instance.write();
			assert.include(
				written,
				"{\n  methodProp: __kipper.assignTypeMeta((): number => 1,",
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("Interfaces", async () => {
		it("Can initialize empty interface", async () => {
			const fileContent = "interface Test { }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			let written = instance.write();
			assert.include(written, "interface Test {\n}", "Invalid TypeScript code (Expected different output)");
		});

		it("should be able to to create object with interface blueprint", async () => {
			const fileContent = `interface Test {a: str;}; var x: Test = {a: "3"}; print(x.a);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				`interface Test {\n` +
					`  a: string;\n` +
					`}\n` +
					`const __intf_Test = new __kipper.Type("Test", [new __kipper.Property("a", __kipper.builtIn.str),], [])\n` +
					"let x: Test = {\n" +
					'  a: "3",\n' +
					"};\n" +
					"__kipper.print(x.a);",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("can initialize interface with members", async () => {
			const fileContent = "interface Test {\n x: num;\n y: str;\n greet(name: str): str;}";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"interface Test {\n  x: number;\n  y: string;\n  greet(name: string): string;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should can initialize with mixed members", async () => {
			const fileContent = "interface Test {\n x: num;\n isTrue(f: bool): str;\n y: str;\n greet(name: str): str;}";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.deepEqual(instance.programCtx?.errors, [], "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"interface Test {\n  x: number;\n  isTrue(f: boolean): string;\n  y: string;\n  greet(name: string):" +
					" string;\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("Matches", () => {
		it("should return true for an empty interface with an empty object", async () => {
			const fileContent = `interface Test { }; var x: obj = { }; print(x matches Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		});

		it("should return true for an empty interface with an object with properties", async () => {
			const fileContent = `interface Test { }; var x: obj = { a: 1, b: '2' }; print(x matches Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		});

		it("should return false for an interface with properties with an object with less properties", async () => {
			const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1 }; print(x matches Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
		});

		it("should return true for an interface with properties with an object with more properties", async () => {
			const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1, b: '2', c: true }; print(x matches Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		});

		it("should return false for an interface with properties with an object with different properties", async () => {
			const fileContent = `interface Test { a: num; b: str; }; var x: obj = { a: 1, c: '2' }; print(x matches Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
		});

		// it("should support generics such as arrays and lambda", async () => {
		// 	const fileContent = `interface Test { a: Array<num>; b: Func<num, num>; }; var x: obj = { a: [1, 2, 3], b: (x: num): num -> x + 1 }; print(x matches Test);`;
		// 	const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });
		//
		// 	assert.isDefined(instance.programCtx);
		// 	assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		//
		// 	const written = instance.write();
		// 	const jsCode = ts.transpile(written);
		// 	testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		// });

		it("should support nested interfaces", async () => {
			const fileContent = `interface Test { a: num; b: str; }; interface Test2 { c: Test; }; var x: obj = { c: { a: 1, b: '2' } }; print(x matches Test2);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		});
	});

	describe("Instanceof", () => {
		it("should return true when object is instance of class", async () => {
			const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: Test = new Test("3"); print(x instanceof Test);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  a: string;\n" +
					"  constructor(b: string)\n" +
					"  {\n" +
					"    this.a = b;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test = new Test("3");\n' +
					"__kipper.print(x instanceof Test);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "true", "Expected different output"), jsCode);
		});

		describe("should return false when object is not instance of class", () => {
			it("object literal instanceof class", async () => {
				const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: obj = {a: "3"}; print(x instanceof Test);`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

				const written = instance.write();
				assert.include(
					written,
					"class Test {\n" +
						"  a: string;\n" +
						"  constructor(b: string)\n" +
						"  {\n" +
						"    this.a = b;\n" +
						"  }\n" +
						"}\n" +
						'let x: object = {\n  a: "3",\n};\n' +
						"__kipper.print(x instanceof Test);",
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(written);
				testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
			});

			it("different class instanceof class", async () => {
				const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; class Test2 {a: str; constructor (b: str) {this.a = b;}}; var x: Test2 = new Test2("3"); print(x instanceof Test);`;
				const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

				assert.isDefined(instance.programCtx);
				assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

				const written = instance.write();
				assert.include(
					written,
					"class Test {\n" +
						"  a: string;\n" +
						"  constructor(b: string)\n" +
						"  {\n" +
						"    this.a = b;\n" +
						"  }\n" +
						"}\n" +
						"class Test2 {\n" +
						"  a: string;\n" +
						"  constructor(b: string)\n" +
						"  {\n" +
						"    this.a = b;\n" +
						"  }\n" +
						"}\n" +
						'let x: Test2 = new Test2("3");\n' +
						"__kipper.print(x instanceof Test);",
					"Invalid TypeScript code (Expected different output)",
				);

				const jsCode = ts.transpile(written);
				testPrintOutput((message: any) => assert.equal(message, "false", "Expected different output"), jsCode);
			});
		});
	});

	describe("Class", () => {
		it("should be able to create an empty class", async () => {
			const fileContent = "class Test { }";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(written, "class Test {\n}", "Invalid TypeScript code (Expected different output)");
		});

		it("should be able to create class with constructor", async () => {
			const fileContent = "class Test {constructor (a:num, b:str) {};};";
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"class Test {\n  constructor(a: number, b: string)\n  {\n  }\n}",
				"Invalid TypeScript code (Expected different output)",
			);
		});

		it("should be able to create class with members", async () => {
			const fileContent = `class Test {\n  x: num;\n  y: str;\ngreet(): void {\nprint("Kippa");\n};\n  constructor(a: num, b: str)\n{\n};}`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  x: number;\n" +
					"  y: string;\n" +
					"  greet(): void\n" +
					"  {\n" +
					'    __kipper.print("Kippa");\n' +
					"  }\n" +
					"  constructor(a: number, b: string)\n" +
					"  {\n" +
					"  }\n" +
					"}",
			);
		});

		it("should be able to instantiate a class with new", async () => {
			const fileContent = `class Test {a: str; constructor (b: str) {this.a = b;}}; var x: Test = new Test("3"); print(x.a);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  a: string;\n" +
					"  constructor(b: string)\n" +
					"  {\n" +
					"    this.a = b;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test = new Test("3");\n' +
					"__kipper.print(x.a);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "3", "Expected different output"), jsCode);
		});

		it("should be able to instantiate a class with new and two properties", async () => {
			const fileContent = `class Test {x: str; y: num; constructor (a: str, b: num) {this.x = a; this.y = b;}}; var x: Test = new Test("hello", 42); print(x.x);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");

			const written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  x: string;\n" +
					"  y: number;\n" +
					"  constructor(a: string, b: number)\n" +
					"  {\n" +
					"    this.x = a;\n" +
					"    this.y = b;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test = new Test("hello", 42);\n' +
					"__kipper.print(x.x);",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
		});

		it("should be able to access 'this' inside a class method", async () => {
			const fileContent = `class Test {x: str; constructor (a: str) {this.x = a;} greet(): void {print(this.x);}}; var x: Test = new Test("hello"); x.greet();`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  x: string;\n" +
					"  greet(): void\n" +
					"  {\n" +
					"    __kipper.print(this.x);\n" +
					"  }\n" +
					"  constructor(a: string)\n" +
					"  {\n" +
					"    this.x = a;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test = new Test("hello");\n' +
					"x.greet();",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written);
			testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
		});

		it("should be able to return a value inside a class method", async () => {
			const fileContent = `class Test {x: str; constructor (a: str) {this.x = a;} greet(): str {return this.x;}}; var x: Test = new Test("hello"); print(x.greet());`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				"class Test {\n" +
					"  x: string;\n" +
					"  greet(): string\n" +
					"  {\n" +
					"    return this.x;\n" +
					"  }\n" +
					"  constructor(a: string)\n" +
					"  {\n" +
					"    this.x = a;\n" +
					"  }\n" +
					"}\n" +
					'let x: Test = new Test("hello");\n' +
					"__kipper.print(x.greet());",
				"Invalid TypeScript code (Expected different output)",
			);

			const jsCode = ts.transpile(written, { target: ScriptTarget.ES2015 });
			testPrintOutput((message: any) => assert.equal(message, "hello", "Expected different output"), jsCode);
		});
	});

	describe("should be able to catch errors using try-catch", () => {
		it("should be able to catch errors", async () => {
			const fileContent = `class CustomError {} var x: num = 4; try { x = 5; } catch (e: CustomError) { x = 6; } print(x);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				`class CustomError {\n}\nlet x: number = 4;\ntry\n{\n  x = 5;\n}\ncatch (__e_1: unknown) {\n  if (__e_1 instanceof CustomError)\n  {\n    x = 6;\n  }\n}\n__kipper.print(x);`,
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("should be able to catch errors using try-empty-catch", () => {
		it("should be able to catch errors", async () => {
			const fileContent = `var x: num = 4; try { x = 5; } catch ( ) { x = 6; } print(x);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				`let x: number = 4;\ntry\n{\n  x = 5;\n}\ncatch (__e_1: unknown)\n{\n  x = 6;\n}\n__kipper.print(x);`,
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});

	describe("should be able to catch errors using try-finally", () => {
		it("should be able to catch errors", async () => {
			const fileContent = `var x: num = 4; try { x = 5; } finally { x = 7; } print(x);`;
			const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

			assert.isDefined(instance.programCtx);
			assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
			let written = instance.write();
			assert.include(
				written,
				`let x: number = 4;\ntry\n{\n  x = 5;\n}\nfinally\n{\n  x = 7;\n}\n__kipper.print(x);`,
				"Invalid TypeScript code (Expected different output)",
			);
		});
	});
});
