import { assert } from "chai";
import { KipperCompiler } from "../../src";
import { KipperLogger, LogLevel } from "../../src";

describe("KipperCompiler", () => {
  it("Constructor", () => {
    let instance = new KipperCompiler();
    assert(instance, "Has to be undefined");
    assert(instance.logger !== undefined, "Set init value has to be equal to the property");
  });

  it("Constructor with default logger", () => {
    let logger = new KipperLogger(() => {
    });
    let instance = new KipperCompiler(logger);
    assert(instance, "Has to be not undefined");
    assert(instance.logger === logger, "Set init value has to not be overwritten by 'avoidLogging'");
  });

  it("Constructor with logging overwrite", () => {
    let logger = new KipperLogger(() => {
    });
    let instance = new KipperCompiler(logger);

    assert(instance, "Has to be not undefined");
    assert(instance.logger === logger, "Logger was written");
  });

  it("Constructor with logging emitHandler", () => {
    let emitHandlerWasCalled: boolean = false;
    let emitHandler: (level: LogLevel, msg: string) => void = ((level: LogLevel, msg: string) => {
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
