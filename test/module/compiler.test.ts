import { assert } from "chai";
import { KipperCompiler, KipperLogger, KipperParseStream, KipperSyntaxError, LogLevel } from "../../src";
import { promises as fs } from "fs";

const validFile = `${__dirname}/../kipper-files/main.kip`;
const invalidFile = `${__dirname}/../kipper-files/invalid.kip`;

describe("KipperCompiler", () => {
  describe("KipperCompiler.constructor()", () => {
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

  describe("KipperCompiler.syntaxAnalyse()", () => {
    it("Syntax analyse valid code without error", async () => {
      let fileContent = (await fs.readFile(validFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("inline-stream", fileContent);

      await compiler.syntaxAnalyse(stream, false);
    });

    it("Syntax analyse invalid code with expected error", async () => {
      let fileContent = (await fs.readFile(invalidFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("inline-stream", fileContent);

      try {
        await compiler.syntaxAnalyse(stream, false);
        assert(false, "Expected an error");
      } catch (e) {
        assert(e instanceof KipperSyntaxError, "Expected a valid KipperSyntaxError instance");
      }
    });
  });

  describe("KipperCompiler.parse()", () => {
    it("Validate file ctx return", async () => {
      let fileContent = (await fs.readFile(validFile, "utf8" as BufferEncoding)).toString();
      let compiler = new KipperCompiler();
      let stream = new KipperParseStream("inline-stream", fileContent);
      let instance = await compiler.parse(stream);

      assert(instance.stream === stream, "Expected streams to equal");
      assert(instance.startItem !== null, "Start item must exist");
      assert(stream.name === "inline-stream");
      assert(stream.stringContent === fileContent);
      assert(stream.charStream.sourceName === "inline-stream");
      assert(stream.charStream.toString() === fileContent);
    });
  });
});
