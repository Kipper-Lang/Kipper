import { assert } from "chai";
import {
  KipperCompiler,
  KipperLogger,
  KipperParseStream,
  KipperProgramContext,
  KipperSyntaxError,
  LogLevel,
  KipperError,
  KipperCompileResult
} from "../../src";
import { promises as fs } from "fs";
import * as ts from "typescript";

// Test files
const mainFile = `${__dirname}/../kipper-files/main.kip`;
const singleFunctionFile = `${__dirname}/../kipper-files/single-function-call.kip`;
const multiFunctionFile = `${__dirname}/../kipper-files/multi-function-call.kip`;
const printNumberFile = `${__dirname}/../kipper-files/print-number.kip`;
const invalidFile = `${__dirname}/../kipper-files/invalid.kip`;
const nestedScopesFile = `${__dirname}/../kipper-files/nested-scopes.kip`;
const singleFunctionDefinition = `${__dirname}/../kipper-files/single-function-definition.kip`;
const multiFunctionDefinition = `${__dirname}/../kipper-files/multi-function-definition.kip`;
const variableDeclaration = `${__dirname}/../kipper-files/variable-declaration.kip`;

describe("KipperCompiler", () => {
  describe("constructor", () => {
    it("Empty Construction", () => {
      let instance = new KipperCompiler();
      assert(instance, "Has to be undefined");
      assert(instance.logger !== undefined, "Set init value has to be equal to the property");
    });

    it("Construction with logger", () => {
      let logger = new KipperLogger(() => {
      });
      let instance = new KipperCompiler(logger);
      assert(instance, "Has to be not undefined");
      assert(instance.logger === logger, "Loggers must match");
    });

    it("Constructor with logging emitHandler", () => {
      let emitHandlerWasCalled: boolean = false;
      // eslint-disable-next-line no-unused-vars
      let emitHandler: (level: LogLevel, msg: string) => void = (() => {
        emitHandlerWasCalled = true;
      });
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
    it("Syntax analyse valid code without error", async () => {
      const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      const stream = new KipperParseStream(fileContent);

      await compiler.syntaxAnalyse(stream);
    });

    it("Syntax analyse invalid code with expected error", async () => {
      const fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      const stream = new KipperParseStream(fileContent);

      try {
        await compiler.syntaxAnalyse(stream);
        assert(false, "Expected an error");
      } catch (e) {
        assert(e instanceof KipperSyntaxError, "Expected a valid KipperSyntaxError instance");
      }
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

      it("Nested scopes in function", async () => {
        const fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
        const stream = new KipperParseStream(fileContent);
        const instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(
          instance.programCtx.globalScope.length === 4,
          "Expected three globals and one global function"
        );
      });

      it("Single Function definition", async () => {
        const fileContent = (await fs.readFile(singleFunctionDefinition, "utf8" as BufferEncoding)).toString();
        const stream = new KipperParseStream(fileContent);
        const instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 1, "Expected a single global function");
      });

      it("Multi Function definition", async () => {
        const fileContent = (await fs.readFile(multiFunctionDefinition, "utf8" as BufferEncoding)).toString();
        const stream = new KipperParseStream(fileContent);
        const instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 3, "Expected three global functions");
      });

      it("Print number function call", async () => {
        const fileContent = (await fs.readFile(printNumberFile, "utf8" as BufferEncoding)).toString();
        const stream = new KipperParseStream(fileContent);
        const instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
      });

      it("Variable Declaration", async () => {
        const fileContent = (await fs.readFile(variableDeclaration, "utf8" as BufferEncoding)).toString();
        const stream = new KipperParseStream(fileContent);
        const instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
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
            await new KipperCompiler().compile("var i: str = \"4\";\n var i: str = \"4\";");
          } catch (e) {
            assert((<KipperError>e).constructor.name === "VariableDefinitionAlreadyExistsError", "Expected proper error");
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
              new KipperParseStream("var i: num = 4;")
            );

            // Duplicate identifier
            programCtx.registerGlobals({identifier: "i", args: [], handler: [""], returnType: "void"});
            programCtx.registerGlobals({identifier: "i", args: [], handler: [""], returnType: "void"});
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
              new KipperParseStream("var i: num = 4;")
            );

            // Register new global
            programCtx.registerGlobals({identifier: "i", args: [], handler: [""], returnType: "void"});
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
            const programCtx: KipperProgramContext = await new KipperCompiler().parse(
              new KipperParseStream("def x() -> void; var x: num = 4;")
            );
            await programCtx.compileProgram();
          } catch (e) {
            assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByFunctionError", "Expected proper error");
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
            const programCtx: KipperProgramContext = await new KipperCompiler().parse(
              new KipperParseStream("var x: num; def x() -> void;")
            );
            await programCtx.compileProgram();
          } catch (e) {
            assert((<KipperError>e).constructor.name === "IdentifierAlreadyUsedByVariableError", "Expected proper error");
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
            const programCtx: KipperProgramContext = await new KipperCompiler().parse(
              new KipperParseStream("def x() -> void {} def x() -> void {}")
            );
            await programCtx.compileProgram();
          } catch (e) {
            assert((<KipperError>e).constructor.name === "FunctionDefinitionAlreadyExistsError", "Expected proper error");
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
            const programCtx: KipperProgramContext = await new KipperCompiler().parse(
              new KipperParseStream("var x: num = 4; \n    var x: num = 5;")
            );
            await programCtx.compileProgram();
          } catch (e) {
            assert((<KipperError>e).constructor.name === "VariableDefinitionAlreadyExistsError", "Expected proper error");
            assert((<KipperError>e).line != undefined, "Expected existing 'line' meta field");
            assert((<KipperError>e).col != undefined, "Expected existing 'col' meta field");
            assert((<KipperError>e).tokenSrc != undefined, "Expected existing 'tokenSrc' meta field");
            assert((<KipperError>e).filePath != undefined, "Expected existing 'filePath' meta field");
            return;
          }
          assert(false, "Expected 'VariableDefinitionAlreadyExistsError'");
        });
      });
    });
  });
});
