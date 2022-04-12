import { assert } from "chai";
import {
  KipperCompiler,
  KipperLogger,
  KipperParseStream, KipperProgramContext,
  KipperSyntaxError,
  LogLevel,
} from "../../src";
import { promises as fs } from "fs";
import { KipperCompileResult } from "../../src";
import * as ts from "typescript";

const helloWorld = `${__dirname}/../kipper-files/hello-world.kip`;
const mainFile = `${__dirname}/../kipper-files/main.kip`;
const singleFunctionFile = `${__dirname}/../kipper-files/single-function-call.kip`;
const multiFunctionFile = `${__dirname}/../kipper-files/multi-function-call.kip`;
const printNumberFile = `${__dirname}/../kipper-files/print-number.kip`;
const invalidFile = `${__dirname}/../kipper-files/invalid.kip`;
const nestedScopesFile = `${__dirname}/../kipper-files/nested-scopes.kip`;
const singleFunctionDefinition = `${__dirname}/../kipper-files/single-function-definition.kip`;
const multiFunctionDefinition = `${__dirname}/../kipper-files/multi-function-definition.kip`;

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
      let fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream(fileContent);

      await compiler.syntaxAnalyse(stream);
    });

    it("Syntax analyse invalid code with expected error", async () => {
      let fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream(fileContent);

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
      let fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream(fileContent);
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
      it("Hello world", async () => {
        let fileContent = (await fs.readFile(helloWorld, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

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

      it("Single Function call", async () => {
        let fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 0, "Expected no definitions");
      });

      it("Multi Function call", async () => {
        let fileContent = (await fs.readFile(multiFunctionFile, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 0, "Expected no definitions");
      });

      it("Nested scopes in function", async () => {
        let fileContent = (await fs.readFile(nestedScopesFile, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(
          instance.programCtx.globalScope.length === 4,
          "Expected three globals and one global function"
        );
      });

      it("Single Function definition", async () => {
        let fileContent = (await fs.readFile(singleFunctionDefinition, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 1, "Expected a single global function");
      });

      it("Multi Function definition", async () => {
        let fileContent = (await fs.readFile(multiFunctionDefinition, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
        assert(instance.programCtx.globalScope.length === 3, "Expected three global functions");
      });

      it("Print number function call", async () => {
        let fileContent = (await fs.readFile(printNumberFile, "utf8" as BufferEncoding)).toString();
        let compiler = new KipperCompiler();
        let stream = new KipperParseStream(fileContent);
        let instance: KipperCompileResult = await compiler.compile(stream);

        assert(instance.programCtx);
        assert(instance.programCtx.stream === stream, "Expected matching streams");
      });
    });

    describe("Errors", () => {
      it("UnknownTypeError", async () => {
        try {
          await new KipperCompiler().compile("var invalid: UNKNOWN = 4;");
        } catch (e) {
          assert((<Error>e).message.startsWith("Unknown type"), "Expected proper error");
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
          assert((<Error>e).message.startsWith("Global definition"), "Expected proper error");
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
          assert((<Error>e).message.startsWith("May not overwrite built-in identifier"), "Expected proper error");
          return;
        }
        assert(false, "Expected 'BuiltInOverwriteError'");
      });

      it("DuplicateFunctionDefinitionError", async () => {
        try {
          const programCtx: KipperProgramContext = await new KipperCompiler().parse(
            new KipperParseStream("def x() -> void {} \n def x() -> void {}")
          );
          await programCtx.compileProgram();
        } catch (e) {
          assert((<Error>e).message.startsWith("Definition of function"), "Expected proper error");
          return;
        }
        assert(false, "Expected 'DuplicateFunctionDefinitionError'");
      });

      it("DuplicateVariableDefinitionError", async () => {
        try {
          const programCtx: KipperProgramContext = await new KipperCompiler().parse(
            new KipperParseStream("var x: num; var x: num;")
          );
          await programCtx.compileProgram();
        } catch (e) {
          assert((<Error>e).message.startsWith("Definition of variable"), "Expected proper error");
          return;
        }
        assert(false, "Expected 'DuplicateVariableDefinitionError'");
      });
    });
  });
});
