import { assert } from "chai";
import { KipperCompiler, KipperLogger, KipperParseStream, KipperSyntaxError, LogLevel } from "../../src";
import { promises as fs } from "fs";
import { KipperCompileResult } from "../../src";

const mainFile = `${__dirname}/../kipper-files/main.kip`;
const singleFunctionFile = `${__dirname}/../kipper-files/single-function-call.kip`;
const multiFunctionFile = `${__dirname}/../kipper-files/multi-function-call.kip`;
const printNumberFile = `${__dirname}/../kipper-files/print-number.kip`;
const invalidFile = `${__dirname}/../kipper-files/invalid.kip`;

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
      let stream = new KipperParseStream("anonymous-script", fileContent);

      await compiler.syntaxAnalyse(stream);
    });

    it("Syntax analyse invalid code with expected error", async () => {
      let fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("anonymous-script", fileContent);

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
      let stream = new KipperParseStream("anonymous-script", fileContent);
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
    it("Single Function call compilation", async () => {
      let fileContent = (await fs.readFile(singleFunctionFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("anonymous-script", fileContent);
      let instance: KipperCompileResult = await compiler.compile(stream);

      assert(instance.programCtx);
      assert(instance.programCtx.stream === stream);
    });

    it("Multi Function call compilation", async () => {
      let fileContent = (await fs.readFile(multiFunctionFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("anonymous-script", fileContent);
      let instance: KipperCompileResult = await compiler.compile(stream);

      assert(instance.programCtx);
      assert(instance.programCtx.stream === stream);
    });

    it("Print number function call compilation", async () => {
      let fileContent = (await fs.readFile(printNumberFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("anonymous-script", fileContent);
      let instance: KipperCompileResult = await compiler.compile(stream);

      assert(instance.programCtx);
      assert(instance.programCtx.stream === stream);
    });
  });
});
