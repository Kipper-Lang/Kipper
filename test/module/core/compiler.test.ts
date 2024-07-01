import { assert } from "chai";
import {
	KipperCompiler,
	KipperCompileResult,
	KipperError,
	KipperLogger,
	KipperParseStream,
	KipperSyntaxError,
	LogLevel,
} from "@kipper/core";
import { promises as fs } from "fs";
import * as ts from "typescript";
import * as path from "path";
import { KipperTypeScriptTarget, TargetTS } from "@kipper/target-ts";
import { KipperJavaScriptTarget } from "@kipper/target-js";
import { testPrintOutput } from "./core-functionality.test";

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
const forLoopFile = getFileName("for-loop.kip");
const whileLoopFile = getFileName("while-loop.kip");
const doWhileLoopFile = getFileName("do-while-loop.kip");

describe("KipperCompiler", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("Empty constructor", () => {
			let result = new KipperCompiler();
			assert(result, "Has to be undefined");
			assert(result.logger !== undefined, "Set init value has to be equal to the property");
		});

		it("Construction with logger", () => {
			let logger = new KipperLogger(() => {});
			let result = new KipperCompiler(logger);
			assert(result, "Has to be not undefined");
			assert(result.logger === logger, "Loggers must match");
		});

		it("Constructor with logging emitHandler", () => {
			let emitHandlerWasCalled: boolean = false;
			// eslint-disable-next-line no-unused-vars
			let emitHandler: (level: LogLevel, msg: string) => void = () => {
				emitHandlerWasCalled = true;
			};
			let logger = new KipperLogger(emitHandler);
			let result = new KipperCompiler(logger);

			assert(result, "Has to be not undefined");
			assert(result.logger === logger, "Set init value has to not be overwritten by 'avoidLogging'");
			assert(logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");
			assert(result.logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");

			logger.log(LogLevel.INFO, "This is a message");
			assert(emitHandlerWasCalled, "Emit Handler should have been called");

			emitHandlerWasCalled = false;
			result.logger.log(LogLevel.INFO, "This is a message");
			assert(emitHandlerWasCalled, "Emit Handler should have been called");
		});
	});

	describe("syntaxAnalyse", () => {
		let compiler = new KipperCompiler();
		describe("Error", () => {
			it("Invalid file", async () => {
				const fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
				const stream = new KipperParseStream({ stringContent: fileContent });
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
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Nested scopes", async () => {
				const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Single Function definition", async () => {
				const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Multi Function definition", async () => {
				const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Variable Declaration", async () => {
				const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Arithmetics", async () => {
				const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Function call argument", async () => {
				const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Assign", async () => {
				const fileContent = (await fs.readFile(assignFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Variable assignment", async () => {
				const fileContent = (await fs.readFile(assignmentArithmeticsFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Type conversion", async () => {
				const fileContent = (await fs.readFile(typeConversionFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Spaced program", async () => {
				const fileContent = (await fs.readFile(spacedProgramFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("Expression statements", async () => {
				const fileContent = (await fs.readFile(expressionStatementsFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("If statements", async () => {
				const fileContent = (await fs.readFile(ifStatementsFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("For loop", async () => {
				const fileContent = (await fs.readFile(forLoopFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});

			it("While loop", async () => {
				const fileContent = (await fs.readFile(whileLoopFile, "utf8" as BufferEncoding)).toString();
				await compiler.syntaxAnalyse(fileContent);
			});
		});
	});

	describe("parse", () => {
		let compiler = new KipperCompiler();

		it("Validate file ctx return", async () => {
			const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
			let stream = new KipperParseStream({ stringContent: fileContent });
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
			let stream = new KipperParseStream({ stringContent: fileContent });
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

		describe("returns", () => {
			it("Successful Compilation", async () => {
				const result = await compiler.compile("var x: num = 1;", { target: defaultTarget });
				assert.isDefined(result, "Expected defined compilation result");
				assert.isDefined(result!!.programCtx, "Expected defined programCtx");
				assert.equal(result!!.warnings.length, 0, "Expected no warnings");
				assert.equal(result!!.errors.length, 0, "Expected no errors");
			});

			describe("Failed Compilation (Syntax Error)", () => {
				it("should throw error with 'abortOnFirstError'", async () => {
					try {
						await compiler.compile("var x: num =", { target: defaultTarget, abortOnFirstError: true });
					} catch (e) {
						assert.instanceOf(e, KipperSyntaxError);
						return;
					}
					assert.fail("Expected error to be thrown with 'abortOnFirstError' enabled");
				});

				describe("should return compilation result with no 'abortOnFirstError'", () => {
					it("One error", async () => {
						const result = await compiler.compile("var x: num =", { target: defaultTarget });
						assert.isDefined(result, "Expected defined compilation result");
						assert.isUndefined(result!!.programCtx, "Expected undefined programCtx (syntax error)");
						assert.equal(result!!.warnings.length, 0, "Expected no warnings");
						assert.equal(result!!.errors.length, 1, "Expected an error to be reported");
						assert.equal(result.errors[0].constructor.name, "LexerOrParserSyntaxError", "Expected different error");
					});
				});
			});

			describe("Failed Compilation (Semantic Error)", () => {
				it("should throw error with 'abortOnFirstError'", async () => {
					try {
						await compiler.compile("const x: num;", { target: defaultTarget, abortOnFirstError: true });
					} catch (e) {
						assert.instanceOf(e, KipperError);
						return;
					}
					assert.fail("Expected error to be thrown with 'abortOnFirstError' enabled");
				});

				describe("should return compilation result with no 'abortOnFirstError'", () => {
					it("One error", async () => {
						const result = await compiler.compile("const x: num;", { target: defaultTarget });
						assert.isDefined(result, "Expected defined compilation result");
						assert.isDefined(result!!.programCtx, "Expected undefined programCtx (semantic error)");
						assert.equal(result!!.warnings.length, 0, "Expected no warnings");
						assert.equal(result!!.errors.length, 1, "Expected an error to be reported");
						assert.equal(result.errors[0].constructor.name, "UndefinedConstantError", "Expected different error");
					});

					it("Multiple error", async () => {
						const result = await compiler.compile("const x: num; const y: num; const z: num;", {
							target: defaultTarget,
						});
						assert.isDefined(result, "Expected defined compilation result");
						assert.isDefined(result!!.programCtx, "Expected undefined programCtx (semantic error)");
						assert.equal(result!!.warnings.length, 0, "Expected no warnings");
						assert.equal(result!!.errors.length, 3, "Expected three errors to be reported");
						for (const error of result!!.errors) {
							assert.equal(error.constructor.name, "UndefinedConstantError", "Expected different error");
						}
					});
				});
			});
		});

		describe("Sample programs", () => {
			const tests = [new KipperJavaScriptTarget(), new KipperTypeScriptTarget()];

			tests.forEach((target) => {
				it(`Sample program [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 4, "Expected four global scope entries");
				});

				it(`Arithmetics [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");
					assert.include(result.write(), fileContent, "Expected compiled code to not change");
				});

				it(`Variable Declaration [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 1, "Expected one global scope entry");
				});

				it(`Nested scopes [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 4, "Expected four global scope entries");
				});

				it(`Single Function call [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						// Assert that the output is "Hello world!"
						assert(message === "Hello world!");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(`Multi Function call [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(multiFunctionFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert(result.programCtx);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						// Assert that the output is "Hello world!"
						assert(["Hello", "World", "!"].find((val) => val === message) !== undefined);
					}, jsCode);
				});

				it(`Single Function definition [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 1, "Expected one global scope entry");
				});

				it(`Multi Function definition [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 3, "Expected three global scope entries");
				});

				it(`Function call argument [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						// Assert that the output is "Hello world!"
						assert(message === "Hello world!");
					}, jsCode);
				});

				it(`Variable assignment [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(assignmentArithmeticsFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 1, "Expected one global scope entry");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert(message === "45678");
					}, jsCode);
				});

				it(`Assign [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(assignFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 1, "Expected one global scope entry");
				});

				it(`Bool [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(boolFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 2, "Expected two global scope entries");
				});

				it(`Type conversion [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(typeConversionFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 4, "Expected four global scope entries");

					const code = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("strToNum")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("boolToStr")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("boolToNum")));
				});

				it(`Expression statements [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(expressionStatementsFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 3, "Expected three global scope entries");

					const code = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("print")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));
				});

				it(`Tangled expressions [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(tangledExpressionsFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert(["Hello world!", "485", "72", "955"].find((val) => val === message));
					}, jsCode);
				});

				it(`If statements [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(ifStatementsFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					assert.isDefined(result.programCtx);
					assert.isDefined(result.programCtx!!.internals);
					assert.equal(result.programCtx!!.errors.length, 0, "Expected no compilation errors");
					assert.equal(result.programCtx!!.globalScope.entries.size, 0, "Expected no global scope entries");

					const code = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("print")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert("Hello world!" === message, "Expected 'Hello world!'");
					}, jsCode);
				});

				it(`While loop [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(whileLoopFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					const code = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("print")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert("10" === message, "Expected '10'");
					}, jsCode);
				});

				it(`For loop [${target.fileExtension}]`, async () => {
					const fileContent = (await fs.readFile(forLoopFile, "utf8" as BufferEncoding)).toString();
					const result: KipperCompileResult = await compiler.compile(fileContent, { target: target });

					const code = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("print")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));

					// Compile the program to JavaScript and evaluate it
					let i = 0;
					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert(String(i++) === message, `Expected '${String(i - 1)}' from for-loop`);
					}, jsCode);
				});

				it(`Do-While loop [${target.fileExtension}]`, async () => {
					const fileContent : string = (await fs.readFile(doWhileLoopFile, "utf8" as BufferEncoding)).toString();
					const result : KipperCompileResult = await compiler.compile(fileContent, { target: target });

					const code : string = result.write();
					assert(code);
					assert(code.includes(TargetTS.getBuiltInIdentifier("print")));
					assert(code.includes(TargetTS.getBuiltInIdentifier("numToStr")));

					const jsCode = ts.transpile(result.write());
					testPrintOutput((message: any) => {
						assert("10" === message, "Expected '10'");
					}, jsCode);
				});
			});
		});
	});
});
