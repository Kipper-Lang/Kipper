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
import { getTypeScriptBuiltInIdentifier, KipperTypeScriptTarget } from "@kipper/target-ts";
import { KipperJavaScriptTarget } from "@kipper/target-js";

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

		describe("Sample programs", () => {
			const tests = [new KipperJavaScriptTarget(), new KipperTypeScriptTarget()];

			tests.forEach((target) => {
				it(`Sample program (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 4, "Expected four global scope entries");
					assert(instance.programCtx.builtIns.length === 1, "Expected a single global function");
				});

				it(`Arithmetics (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(arithmeticsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");
					assert(instance.write().includes(fileContent), "Expected compiled code to not change");
				});

				it(`Variable Declaration (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(variableDeclarationFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 1, "Expected one global scope entry");
				});

				it(`Nested scopes (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 4, "Expected four global scope entries");
				});

				it(`Single Function call (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

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

				it(`Multi Function call (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(multiFunctionFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						// Assert that the output is "Hello world!"
						assert(["Hello", "World", "!"].find((val) => val === message) !== undefined);
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(`Single Function definition (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(singleFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 1, "Expected one global scope entry");
				});

				it(`Multi Function definition (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(multiFunctionDefinitionFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 3, "Expected three global scope entries");
				});

				it(`Function call argument (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(addedHelloWorldFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

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

				it(`Variable assignment (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(assignmentArithmeticsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 1, "Expected one global scope entry");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						assert(message === "45678");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(`Assign (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(assignFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 1, "Expected one global scope entry");
				});

				it(`Bool (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(boolFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 2, "Expected two global scope entries");
				});

				it(`Type conversion (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(typeConversionFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.globalScope.entries.size === 4, "Expected four global scope entries");

					const code = instance.write();
					assert(code);
					assert(code.includes(getTypeScriptBuiltInIdentifier("strToNum")));
					assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));
					assert(code.includes(getTypeScriptBuiltInIdentifier("boolToStr")));
					assert(code.includes(getTypeScriptBuiltInIdentifier("boolToNum")));
				});

				it(`Expression statements (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(expressionStatementsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.globalScope.entries.size === 3, "Expected three global scope entries");

					const code = instance.write();
					assert(code);
					assert(code.includes(getTypeScriptBuiltInIdentifier("print")));
					assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));
				});

				it(`Tangled expressions (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(tangledExpressionsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						assert(["Hello world!", "485", "72", "955"].find((val) => val === message));
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;
				});

				it(`If statements (${target.fileExtension})`, async () => {
					const fileContent = (await fs.readFile(ifStatementsFile, "utf8" as BufferEncoding)).toString();
					const stream = new KipperParseStream(fileContent);
					const instance: KipperCompileResult = await compiler.compile(stream, { target: target });

					assert(instance.programCtx);
					assert(instance.programCtx.internals);
					assert(instance.programCtx.errors.length === 0, "Expected no compilation errors");
					assert(instance.programCtx.stream === stream, "Expected matching streams");
					assert(instance.programCtx.globalScope.entries.size === 0, "Expected no global scope entries");

					const code = instance.write();
					assert(code);
					assert(code.includes(getTypeScriptBuiltInIdentifier("print")));
					assert(code.includes(getTypeScriptBuiltInIdentifier("numToStr")));

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(instance.write());

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						assert("Hello world!" === message, "Expected 'Hello world!'");
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
