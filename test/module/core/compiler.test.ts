import { assert } from "chai";
import {
	KipperCompiler,
	KipperLogger,
	KipperParseStream,
	KipperSyntaxError,
	LogLevel,
	KipperCompileResult,
} from "@kipper/core";
import { promises as fs } from "fs";
import * as ts from "typescript";
import * as path from "path";
import { getTypeScriptBuiltInIdentifier } from "@kipper/core/lib/targets/typescript/tools";

// Test files
const mainFile = path.resolve(`${__dirname}/../../kipper-files/main.kip`);
const singleFunctionFile = path.resolve(`${__dirname}/../../kipper-files/single-function-call.kip`);
const multiFunctionFile = path.resolve(`${__dirname}/../../kipper-files/multi-function-call.kip`);
const invalidFile = path.resolve(`${__dirname}/../../kipper-files/invalid.kip`);
const nestedScopesFile = path.resolve(`${__dirname}/../../kipper-files/nested-scopes.kip`);
const singleFunctionDefinitionFile = path.resolve(`${__dirname}/../../kipper-files/single-function-definition.kip`);
const multiFunctionDefinitionFile = path.resolve(`${__dirname}/../../kipper-files/multi-function-definition.kip`);
const variableDeclarationFile = path.resolve(`${__dirname}/../../kipper-files/variable-declaration.kip`);
const arithmeticsFile = path.resolve(`${__dirname}/../../kipper-files/arithmetics.kip`);
const assignFile = path.resolve(`${__dirname}/../../kipper-files/assign.kip`);
const addedHelloWorldFile = path.resolve(`${__dirname}/../../kipper-files/added-hello-world.kip`);
const assignmentArithmeticsFile = path.resolve(`${__dirname}/../../kipper-files/assignment-arithmetics.kip`);
const boolFile = path.resolve(`${__dirname}/../../kipper-files/bool.kip`);
const typeConversion = path.resolve(`${__dirname}/../../kipper-files/type-conversion.kip`);

describe("KipperCompiler", () => {
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
				const fileContent = (await fs.readFile(typeConversion, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				await compiler.syntaxAnalyse(stream);
			});
		});
	});

	describe("parse", () => {
		it("Validate file ctx return", async () => {
			const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
			let compiler = new KipperCompiler();
			const stream = new KipperParseStream(fileContent);
			let instance = await compiler.parse(stream);

			assert(instance.stream === stream, "Expected streams to equal");
			assert(instance.antlrParseTree !== null, "Start item must exist");
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
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.builtIns.length === 1, "Expected a single global function");
			});

			it("Single Function call", async () => {
				const fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 0, "Expected no definitions");

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
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 0, "Expected no definitions");

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
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 1, "Expected one global function");
				assert(instance.programCtx.globalScope.localVariables.length === 3, "Expected three global variables");
			});

			it("Single Function definition", async () => {
				const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 1, "Expected a single global function");
			});

			it("Multi Function definition", async () => {
				const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 3, "Expected three global functions");
			});

			it("Variable Declaration", async () => {
				const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.localFunctions.length === 0, "Expected no definitions");
				assert(instance.programCtx.globalScope.localVariables.length === 1, "Expected one global variable");
			});

			describe("Arithmetics", () => {
				it("Expression statements", async () => {
					const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes(fileContent), "Expected compiled code to not change");
				});

				it("Function call argument", async () => {
					const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.localFunctions.length === 0, "Expected no definitions");
					assert(instance.programCtx.globalScope.localVariables.length === 0, "Expected no definitions");

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
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.localFunctions.length === 0, "Expected no definitions");
					assert(instance.programCtx.globalScope.localVariables.length === 1, "Expected one global variable");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: string) => {
						// Assert that the output is "Hello world!"
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
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
			});

			it("Bool", async () => {
				const fileContent = (await fs.readFile(boolFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
			});

			it("Type conversion", async () => {
				const fileContent = (await fs.readFile(typeConversion, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.internals);

				const code = instance.write();
				assert(code);
				assert(code.includes(getTypeScriptBuiltInIdentifier("strToNum")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("boolToStr")));
				assert(code.includes(getTypeScriptBuiltInIdentifier("boolToNum")));
			});
		});

		describe("basics", () => {
			describe("Declaration", () => {
				it("var", async () => {
					const stream = new KipperParseStream("var x: num;");
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number;"), "Expected different TypeScript code");
				});

				it("const", async () => {
					const stream = new KipperParseStream("const x: num;");
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("const x: number;"), "Expected different TypeScript code");
				});
			});

			describe("Definition", () => {
				it("var", async () => {
					const stream = new KipperParseStream("var x: num = 4;");
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number = 4;"), "Expected different TypeScript code");
				});

				it("const", async () => {
					const stream = new KipperParseStream("const x: num = 4;");
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("const x: number = 4;"), "Expected different TypeScript code");
				});
			});

			describe("Assignment", () => {
				it("num", async () => {
					const stream = new KipperParseStream("var x: num = 4;\nx = 5;");
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes("let x: number = 4;\nx = 5;"), "Expected different TypeScript code");
				});

				it("str", async () => {
					const stream = new KipperParseStream('var x: str = "4";\nx = "5";');
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes('let x: string = "4";\nx = "5";'), "Expected different TypeScript code");
				});
			});
		});
	});
});
