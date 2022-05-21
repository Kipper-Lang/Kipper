import { assert } from "chai";
import {
	KipperCompiler,
	KipperLogger,
	KipperParseStream,
	KipperProgramContext,
	KipperSyntaxError,
	LogLevel,
	KipperError,
	KipperCompileResult,
} from "@kipper/core";
import { promises as fs } from "fs";
import * as ts from "typescript";
import * as path from "path";

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
const addedHelloWorld = path.resolve(`${__dirname}/../../kipper-files/added-hello-world.kip`);
const assignmentArithmetics = path.resolve(`${__dirname}/../../kipper-files/assignment-arithmetics.kip`);

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
		describe("programs", () => {
			const compiler = new KipperCompiler();

			it("Sample program", async () => {
				const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.builtInGlobals.length === 1, "Expected a single global function");
			});

			it("Single Function call", async () => {
				const fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.length === 0, "Expected no definitions");

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
				assert(instance.programCtx.globalScope.length === 0, "Expected no definitions");

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
				assert(instance.programCtx.globalScope.length === 4, "Expected three globals and one global function");
			});

			it("Single Function definition", async () => {
				const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.length === 1, "Expected a single global function");
			});

			it("Multi Function definition", async () => {
				const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
				assert(instance.programCtx.globalScope.length === 3, "Expected three global functions");
			});

			it("Variable Declaration", async () => {
				const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream(fileContent);
				const instance: KipperCompileResult = await compiler.compile(stream);

				assert(instance.programCtx);
				assert(instance.programCtx.stream === stream, "Expected matching streams");
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
					const fileContent = (await fs.readFile(addedHelloWorld, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.length === 0, "Expected no definitions");

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
					const fileContent = (await fs.readFile(assignmentArithmetics, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.length === 1, "Expected no definitions");

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
					const stream = new KipperParseStream('var x: str = 4;\nx = "5";');
					const instance: KipperCompileResult = await compiler.compile(stream);

					assert(instance.programCtx);
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.write().includes('let x: string = 4;\nx = "5";'), "Expected different TypeScript code");
				});
			});
		});

		describe("Errors", () => {
			describe("KipperSyntaxError", () => {
				it("LexerError", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5; \\\\D");
					} catch (e) {
						assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
						assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'KipperSyntaxError'");
				});

				it("ParserError", async () => {
					try {
						await new KipperCompiler().compile("var x: num = 4; \nvar x: num = 5");
					} catch (e) {
						assert((<KipperSyntaxError<any>>e).constructor.name === "KipperSyntaxError", "Expected proper error");
						assert((<KipperSyntaxError<any>>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperSyntaxError<any>>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperSyntaxError<any>>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperSyntaxError<any>>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'KipperSyntaxError'");
				});
			});

			describe("Compilation errors", () => {
				it("GetTraceback", async () => {
					try {
						await new KipperCompiler().compile('var i: str = "4";\n var i: str = "4";');
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "VariableDefinitionAlreadyExistsError",
							"Expected proper error",
						);
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'VariableDefinitionAlreadyExistsError'");
				});

				it("UnknownTypeError", async () => {
					try {
						await new KipperCompiler().compile("var invalid: UNKNOWN = 4;");
					} catch (e) {
						assert((<KipperError>e).constructor.name === "UnknownTypeError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'UnknownTypeError'");
				});

				it("InvalidGlobalError", async () => {
					try {
						const programCtx: KipperProgramContext = await new KipperCompiler().parse(
							new KipperParseStream("var i: num = 4;"),
						);

						// Duplicate identifier
						programCtx.registerGlobals({ identifier: "i", args: [], handler: [""], returnType: "void" });
						programCtx.registerGlobals({ identifier: "i", args: [], handler: [""], returnType: "void" });
					} catch (e) {
						assert((<KipperError>e).constructor.name === "InvalidGlobalError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");

						// Token src should not exist, since this is a configuration error!
						assert((<KipperError>e).tokenSrc === undefined, "Expected non-existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'InvalidGlobalError'");
				});

				it("BuiltInOverwriteError", async () => {
					try {
						const programCtx: KipperProgramContext = await new KipperCompiler().parse(
							new KipperParseStream("var i: num = 4;"),
						);

						// Register new global
						programCtx.registerGlobals({ identifier: "i", args: [], handler: [""], returnType: "void" });
						await programCtx.compileProgram();
					} catch (e) {
						assert((<KipperError>e).constructor.name === "BuiltInOverwriteError", "Expected proper error");
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'BuiltInOverwriteError'");
				});

				it("IdentifierAlreadyUsedByFunctionError", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> void; var x: num = 4;"));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError",
							"Expected proper error",
						);
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'IdentifierAlreadyUsedByFunctionError'");
				});

				it("IdentifierAlreadyUsedByVariableError", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("var x: num; def x() -> void;"));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError",
							"Expected proper error",
						);
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'IdentifierAlreadyUsedByVariableError'");
				});

				it("FunctionDefinitionAlreadyExistsError", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("def x() -> void {} def x() -> void {}"));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "FunctionDefinitionAlreadyExistsError",
							"Expected proper error",
						);
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'FunctionDefinitionAlreadyExistsError'");
				});

				it("VariableDefinitionAlreadyExistsError", async () => {
					try {
						await new KipperCompiler().compile(new KipperParseStream("var x: num = 4; \n    var x: num = 5;"));
					} catch (e) {
						assert(
							(<KipperError>e).constructor.name === "VariableDefinitionAlreadyExistsError",
							"Expected proper error",
						);
						assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
						assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
						assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
						assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
						return;
					}
					assert(false, "Expected 'VariableDefinitionAlreadyExistsError'");
				});

				describe("UnknownIdentifierError", () => {
					it("Simple reference", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("x;"));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'UnknownIdentifierError'");
					});

					it("Function Call", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('var x: num = call pr("pr");'));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'UnknownIdentifierError'");
					});

					it("Arithmetics", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("var x: num = y + y;"));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'UnknownIdentifierError'");
					});

					it("Nested reference", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream("{ { { { x; } } } }"));
						} catch (e) {
							assert((<KipperError>e).constructor.name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).name === "UnknownIdentifierError", "Expected proper error");
							assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
							assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
							assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
							assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
							return;
						}
						assert(false, "Expected 'UnknownIdentifierError'");
					});
				});

				describe("InvalidReturnTypeError", () => {
					describe("Error", () => {
						it("func", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> func {}"));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidReturnTypeError", "Expected proper error");
								assert((<KipperError>e).name === "InvalidReturnTypeError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidReturnTypeError'");
						});
					});

					describe("NoError", () => {
						it("void", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> void {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});

						it("num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> num {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});

						it("str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> str {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});

						it("char", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> char {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});

						it("bool", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> bool {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});

						it("list", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("def x() -> list {}"));
							} catch (e) {
								assert(false, "Expected no 'InvalidReturnTypeError'");
							}
						});
					});
				});

				describe("InvalidAmountOfArgumentsError", () => {
					describe("Error", () => {
						it("One too many", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('call print("x", "x");'));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
								assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAmountOfArgumentsError'");
						});

						it("Two too many", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x");'));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
								assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAmountOfArgumentsError'");
						});

						it("Three too many", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('call print("x", "x", "x", "x");'));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
								assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAmountOfArgumentsError'");
						});

						it("Too little", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("call print();"));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAmountOfArgumentsError", "Expected proper error");
								assert((<KipperError>e).name === "ArgumentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAmountOfArgumentsError'");
						});
					});

					it("NoError", async () => {
						try {
							await new KipperCompiler().compile(new KipperParseStream('call print("x");'));
						} catch (e) {
							assert(false, "Expected no 'InvalidAmountOfArgumentsError'");
						}
					});
				});

				describe("InvalidArithmeticOperationError", () => {
					describe("Error", () => {
						it("str+num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" + 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("str-num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" - 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("str*num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" * 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("str**num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" ** 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("str/num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" / 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("str%num", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"3" % 4;'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num+str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 + "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num-str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 - "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num*str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 * "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num**str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 ** "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num/str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 / "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});

						it("num%str", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('4 % "3";'));
							} catch (e) {
								assert(
									(<KipperError>e).constructor.name === "InvalidArithmeticOperationError",
									"Expected proper error",
								);
								assert((<KipperError>e).name === "InvalidArithmeticOperationError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidArithmeticOperationError'");
						});
					});

					describe("NoError", () => {
						describe("+", () => {
							it("str", async () => {
								try {
									await new KipperCompiler().compile(new KipperParseStream('"3" + "3";'));
								} catch (e) {
									assert(false, "Expected no 'InvalidArithmeticOperationError'");
								}
							});

							it("char", async () => {
								try {
									await new KipperCompiler().compile(new KipperParseStream('"3" + "3";'));
								} catch (e) {
									assert(false, "Expected no 'InvalidArithmeticOperationError'");
								}
							});

							it("num", async () => {
								try {
									await new KipperCompiler().compile(new KipperParseStream("3 + 3;"));
								} catch (e) {
									assert(false, "Expected no 'InvalidArithmeticOperationError'");
								}
							});
						});
					});
				});

				describe("InvalidAssignmentError", () => {
					describe("Error", () => {
						it("NumberConstant", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream("5 = 5;"));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
								assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAssignmentError'");
						});

						it("StringConstant", async () => {
							try {
								await new KipperCompiler().compile(new KipperParseStream('"4" = "4";'));
							} catch (e) {
								assert((<KipperError>e).constructor.name === "InvalidAssignmentError", "Expected proper error");
								assert((<KipperError>e).name === "InvalidAssignmentError", "Expected proper error");
								assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
								assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
								assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
								assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
								return;
							}
							assert(false, "Expected 'InvalidAssignmentError'");
						});
					});

					describe("NoError", () => {
						it("", () => {});
					});
				});
			});
		});
	});
});
