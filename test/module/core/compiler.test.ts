import { assert } from "chai";
import {
	KipperCompiler,
	KipperCompileResult,
	KipperLogger,
	KipperParseStream,
	KipperSyntaxError,
	LogLevel,
} from "@kipper/core";
import { promises as fs } from "fs";
import * as ts from "typescript";
import * as path from "path";
import { KipperTypeScriptTarget, getTypeScriptBuiltInIdentifier } from "@kipper/target-ts";

function getFileName(pathString: string): string {
	return path.resolve(`${__dirname}/../../kipper-files/${pathString}`);
}

// Test files
const mainFile = getFileName("main.kip");
const singleFunctionFile = getFileName("single-function-call.kip");
const multiFunctionFile = getFileName("multi-function-call.kip");
const invalidFile = getFileName("invalid.kip");
const nestedScopesFile = getFileName("nested-scopes.kip");
const singleFunctionDefinitionFile = getFileName("single-function-definition.kip");
const multiFunctionDefinitionFile = getFileName("multi-function-definition.kip");
const variableDeclarationFile = getFileName("variable-declaration.kip");
const arithmeticsFile = getFileName("arithmetics.kip");
const assignFile = getFileName("assign.kip");
const addedHelloWorldFile = getFileName("added-hello-world.kip");
const assignmentArithmeticsFile = getFileName("assignment-arithmetics.kip");
const boolFile = getFileName("bool.kip");
const typeConversionFile = getFileName("type-conversion.kip");
const spacedProgramFile = getFileName("spaced-program.kip");
const expressionStatementsFile = getFileName("expression-statements.kip");
const tangledExpressionsFile = getFileName("tangled-expressions.kip");
const ifStatementsFile = getFileName("if-statements.kip");

describe("KipperCompiler", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("Empty Construction", () => {
			let instance = new KipperCompiler();
			assert(instance, "Has to be undefined");
			assert(instance.logger !== undefined, "Set init value has to be equal to the property");
		});

		it("Construction with logger", () => {
			let logger = new KipperLogger(() => {});
			let instance = new KipperCompiler(logger);
			assert(instance, "Has to be not undefined");
			assert(instance.logger === logger, "Loggers must match");
		});

		it("Constructor with logging emitHandler", () => {
			let emitHandlerWasCalled: boolean = false;
			// eslint-disable-next-line no-unused-vars
			let emitHandler: (level: LogLevel, msg: string) => void = () => {
				emitHandlerWasCalled = true;
			};
			let logger = new KipperLogger(emitHandler);
			let instance = new KipperCompiler(logger);

			assert(instance, "Has to be not undefined");
			assert(instance.logger === logger, "Set init value has to not be overwritten by 'avoidLogging'");
			assert(logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");
			assert(instance.logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");

			logger.log(LogLevel.INFO, "This is a message");
			assert(emitHandlerWasCalled, "Emit Handler should have been called");

			emitHandlerWasCalled = false;
			instance.logger.log(LogLevel.INFO, "This is a message");
			assert(emitHandlerWasCalled, "Emit Handler should have been called");
		});
	});

	describe("syntaxAnalyse", () => {
		let compiler = new KipperCompiler();
		describe("Error", () => {
			it("Invalid file", async () => {
				const fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				try {
					await compiler.syntaxAnalyse(stream);
					assert(false, "Expected an error");
				} catch (e) {
					assert(e instanceof KipperSyntaxError, "Expected a valid KipperSyntaxError instance");
				}
			});
		});

		describe("NoError", () => {
			it("Main file", async () => {
				const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Nested scopes", async () => {
				const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Single Function definition", async () => {
				const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Multi Function definition", async () => {
				const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Variable Declaration", async () => {
				const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Arithmetics", async () => {
				const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Function call argument", async () => {
				const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Assign", async () => {
				const fileContent = (await fs.readFile(assignFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Variable assignment", async () => {
				const fileContent = (await fs.readFile(assignmentArithmeticsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Type conversion", async () => {
				const fileContent = (await fs.readFile(typeConversionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Spaced program", async () => {
				const fileContent = (await fs.readFile(spacedProgramFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("Expression statements", async () => {
				const fileContent = (await fs.readFile(expressionStatementsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});

			it("If statements", async () => {
				const fileContent = (await fs.readFile(ifStatementsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});
		});
	});

	describe("parse", () => {
		let compiler = new KipperCompiler();

		it("Validate file ctx return", async () => {
			const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
			let stream = new KipperParseStream(fileContent);
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			assert(programCtx.stream === stream, "Expected streams to equal");
			assert(programCtx.antlrParseTree !== null, "Parse tree must exist");
			assert(stream.name === "anonymous-script");
			assert(stream.stringContent === fileContent);
			assert(stream.charStream.sourceName === "anonymous-script");
			assert(stream.charStream.toString() === fileContent);
		});

		it("Check valid escaped characters", async () => {
			const fileContent = "'\\r \\n \\r \\n';";
			let stream = new KipperParseStream(fileContent);
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			assert(programCtx.stream === stream, "Expected streams to equal");
			assert(programCtx.antlrParseTree !== null, "Parse tree must exist");
			assert(stream.name === "anonymous-script");
			assert(stream.stringContent === fileContent);
			assert(stream.charStream.sourceName === "anonymous-script");
			assert(stream.charStream.toString() === fileContent);
		});
	});

	describe("compile", () => {
		const compiler = new KipperCompiler();

		describe("programs", () => {
			it("Sample program", async () => {
				const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 1, "Expected one global function");
				assert(instance.programCtx.globalScope.variables.length === 3, "Expected three global variables");
				assert(instance.programCtx.builtIns.length === 1, "Expected a single global function");
			});

			it("Single Function call", async () => {
				const fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");

				// Compile the program to JavaScript and evaluate it
				const jsCode = ts.transpile(instance.write());

				// Overwrite built-in to access output
				const prevLog = console.log;
				console.log = (message: string) => {
					// Assert that the output is "Hello world!"
					assert(message === "Hello world!");
				};

				// Evaluate expression
				eval(jsCode);

				// Restore old console.log
				console.log = prevLog;
			});

			it("Multi Function call", async () => {
				const fileContent = (await fs.readFile(multiFunctionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");

				// Compile the program to JavaScript and evaluate it
				const jsCode = ts.transpile(instance.write());

				// Overwrite built-in to access output
				const prevLog = console.log;
				console.log = (message: string) => {
					// Assert that the output is "Hello world!"
					assert(["Hello", "World", "!"].find((val) => val === message) !== undefined);
				};

				// Evaluate expression
				eval(jsCode);

				// Restore old console.log
				console.log = prevLog;
			});

			it("Nested scopes", async () => {
				const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 1, "Expected one global function");
				assert(instance.programCtx.globalScope.variables.length === 3, "Expected three global variables");
			});

			it("Single Function definition", async () => {
				const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 1, "Expected a single global function");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");
			});

			it("Multi Function definition", async () => {
				const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 3, "Expected three global functions");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");
			});

			it("Variable Declaration", async () => {
				const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 1, "Expected one global variable");
			});

			describe("Arithmetics", () => {
				it("Expression statements", async () => {
					const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
					assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");
					assert(instance.write().includes(fileContent), "Expected compiled code to not change");
				});

				it("Function call argument", async () => {
					const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
					assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						// Assert that the output is "Hello world!"
						assert(message === "Hello world!");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it("Variable assignment", async () => {
					const fileContent = (await fs.readFile(assignmentArithmeticsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
					assert(instance.programCtx.globalScope.variables.length === 1, "Expected one global variable");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "45678");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});
			});

			it("Assign", async () => {
				const fileContent = (await fs.readFile(assignFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 1, "Expected one global variable");
			});

			it("Bool", async () => {
				const fileContent = (await fs.readFile(boolFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 2, "Expected two global variables");
			});

			it("Type conversion", async () => {
				const fileContent = (await fs.readFile(typeConversionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 4, "Expected four global variables");

				const code = instance.write();
				assert(code);
				assert(code.includes(getTypeScriptBuiltInIdentifier("strToNum")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("boolToStr")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("boolToNum")));
			});

			it("Expression statements", async () => {
				const fileContent = (await fs.readFile(expressionStatementsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 3, "Expected three global variable");

				const code = instance.write();
				assert(code);
				assert(code.includes(getTypeScriptBuiltInIdentifier("print")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));
			});

			it("Tangled expressions", async () => {
				const fileContent = (await fs.readFile(tangledExpressionsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected no global variables");

				// Compile the program to JavaScript and evaluate it
				const jsCode = ts.transpile(instance.write());

				// Overwrite built-in to access output
				const prevLog = console.log;
				console.log = (message: string) => {
					assert(["Hello world!", "485", "72", "955"].find((val) => val === message));
				};

				// Evaluate expression
				eval(jsCode);

				// Restore old console.log
				console.log = prevLog;
			});

			it("If statements", async () => {
				const fileContent = (await fs.readFile(ifStatementsFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

				assert(instance.programCtx);
				assert(instance.programCtx.internals);
				assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.functions.length === 0, "Expected no global functions");
				assert(instance.programCtx.globalScope.variables.length === 0, "Expected two global variables");

				const code = instance.write();
				assert(code);
				assert(code.includes(getTypeScriptBuiltInIdentifier("print")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));

				// Compile the program to JavaScript and evaluate it
				const jsCode = ts.transpile(instance.write());

				// Overwrite built-in to access output
				const prevLog = console.log;
				console.log = (message: string) => {
					assert("Hello world!" === message, "Expected 'Hello world!'");
				};

				// Evaluate expression
				eval(jsCode);

				// Restore old console.log
				console.log = prevLog;
			});
		});

		describe("basics", () => {
			describe("Declaration", () => {
				it("var", async () => {
					const stream = new KipperParseStream("var x: num;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number;"), "Expected different TypeScript code");
				});
			});

			describe("Definition", () => {
				it("var", async () => {
					const stream = new KipperParseStream("var x: num = 4;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number = 4;"), "Expected different TypeScript code");
				});

				it("const", async () => {
					const stream = new KipperParseStream("const x: num = 4;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("const x: number = 4;"), "Expected different TypeScript code");
				});
			});

			describe("Assignment", () => {
				it("num", async () => {
					const stream = new KipperParseStream("var x: num = 4;\nx = 5;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number = 4;\nx = 5;"), "Expected different TypeScript code");
				});

				it("str", async () => {
					const stream = new KipperParseStream('var x: str = "4";\nx = "5";');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes('let x: string = "4";\nx = "5";'), "Expected different TypeScript code");
				});
			});

			describe("Expression Statements", () => {
				it("one expression", async () => {
					const stream = new KipperParseStream("print = print;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("__kipper.print = __kipper.print;"), "Expected different TypeScript code");
				});

				it("two expressions", async () => {
					const stream = new KipperParseStream('12 * 93, "5" + "1";');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("12 * 93;"), "Expected different TypeScript code");
					assert(instance.write().includes('"5" + "1";'), "Expected different TypeScript code");
				});

				it("three expressions", async () => {
					const stream = new KipperParseStream('call print("x"), call print("y"), call print("z");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes('__kipper.print("x");'), "Expected different TypeScript code");
					assert(instance.write().includes('__kipper.print("y");'), "Expected different TypeScript code");
					assert(instance.write().includes('__kipper.print("z");'), "Expected different TypeScript code");
				});
			});

			describe("Unary Operators", () => {
				it("unary plus", async () => {
					const stream = new KipperParseStream("+4;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("+4;"), "Expected different TypeScript code");
				});

				it("unary minus", async () => {
					const stream = new KipperParseStream("-4;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("-4;"), "Expected different TypeScript code");
				});

				// Technically, this is a logical operator, but it's considered a unary operator in Kipper, as it modifies
				// the value of the operand.
				it("!", async () => {
					const stream = new KipperParseStream("!true;");
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("!true;"), "Expected different TypeScript code");
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
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 3 && x < 5) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						console.log = (message: string) => {
							assert(message === "Works", "Expected different output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("true && false", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 && x < 2) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 3 && x < 2) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = () => {
							assert(false, "Expected no output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("false && true", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 && x < 3) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 5 && x < 3) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = () => {
							assert(false, "Expected no output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("false && false", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 && x < 8) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 5 && x < 8) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = () => {
							assert(false, "Expected no output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
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
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 3 || x < 5) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = (message: string) => {
							assert(message === "Works", "Expected different output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("true || false", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 3 || x < 2) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 3 || x < 2) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = (message: string) => {
							assert(message === "Works", "Expected different output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("false || true", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 || x < 3) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 5 || x < 3) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = (message: string) => {
							assert(message === "Works", "Expected different output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});

					it("false || false", async () => {
						const stream = new KipperParseStream('var x: num = 4;\nif (x > 5 || x > 8) { call print("Works"); }');
						const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

						assert(instance.programCtx);
						assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
						assert(instance.programCtx.stream === stream, "Expected matching streams");

						const code = instance.write();
						assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
						assert(
							code.includes('if (x > 5 || x > 8) {\n  __kipper.print("Works");\n}'),
							"Expected different TypeScript code",
						);

						// Compile the program to JavaScript and check the output.
						const jsCode = ts.transpile(code);

						// Overwrite built-in to access output
						const prevLog = console.log;
						console.log = () => {
							assert(false, "Expected no output");
						};

						// Evaluate expression
						eval(jsCode);

						// Restore old console.log
						console.log = prevLog;
					});
				});
			});

			describe("comparisons", () => {
				it("==", async () => {
					const stream = new KipperParseStream('var x: num = 4;\nif (x == 4) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
					assert(code.includes('if (x === 4) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it("!=", async () => {
					const stream = new KipperParseStream('var x: num = 4;\nif (x != 5) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
					assert(code.includes('if (x !== 5) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it("<", async () => {
					const stream = new KipperParseStream('var x: num = 4;\nif (x < 5) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
					assert(code.includes('if (x < 5) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it("<=", async () => {
					const stream = new KipperParseStream('var x: num = 4;\nif (x <= 5) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 4;"), "Expected different TypeScript code");
					assert(code.includes('if (x <= 5) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(">", async () => {
					const stream = new KipperParseStream('var x: num = 5;\nif (x > 4) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 5;"), "Expected different TypeScript code");
					assert(code.includes('if (x > 4) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(">=", async () => {
					const stream = new KipperParseStream('var x: num = 5;\nif (x >= 4) call print("Works");');
					const instance: KipperCompileResult = await compiler.compile(stream, { target: defaultTarget });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");

					const code = instance.write();
					assert(code.includes("let x: number = 5;"), "Expected different TypeScript code");
					assert(code.includes('if (x >= 4) {\n  __kipper.print("Works");\n}'), "Expected different TypeScript code");

					// Compile the program to JavaScript and check the output.
					const jsCode = ts.transpile(code);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						assert(message === "Works", "Expected different output");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});
			});
		});
	});
});
