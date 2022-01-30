import { assert } from "chai";
import { KipperCompiler } from "../../lib";
import { KipperLogger, LogLevel } from "../../lib/logger";

describe("KipperCompiler", () => {
  it("constructor", () => {
    let instance = new KipperCompiler();
    assert(instance, "Has to be undefined");
    assert(!instance.avoidLogging, "'avoidLogging' has to be 'false'");
    assert(instance.logger !== undefined, "Set init value has to be equal to the property");
  })

  it("constructor with default logger", () => {
    let logger = new KipperLogger();
    let instance = new KipperCompiler(logger);
    assert(instance, "Has to be undefined");
    assert(!instance.avoidLogging, "'avoidLogging' has to be 'false'");
    assert(instance.logger === logger, "Set init value has to not be overwritten by 'avoidLogging'");
  })

  it("constructor with logging overwrite", () => {
    let logger = new KipperLogger();
    let instance = new KipperCompiler(logger, true);

    assert(instance, "Has to be undefined");
    assert(instance.avoidLogging, "'avoidLogging' has to be 'true'");
    assert(instance.logger !== logger, "Set init value has to be overwritten by 'avoidLogging'");
  })

  it("constructor with logging emitHandler", () => {
    let emitHandlerWasCalled: boolean = false;
    let emitHandler: (level: LogLevel, msg: string) => void = ((level: LogLevel, msg: string) => {
      emitHandlerWasCalled = true;
    });
    let logger = new KipperLogger(emitHandler);
    let instance = new KipperCompiler(logger, false);

    assert(instance, "Has to be undefined");
    assert(!instance.avoidLogging, "'avoidLogging' has to be 'false'");
    assert(instance.logger === logger, "Set init value has to not be overwritten by 'avoidLogging'");
    assert(logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");
    assert(instance.logger.emitHandler === emitHandler, "Set 'emitHandler' has to match");

    logger.log(LogLevel.INFO, "This is a message");
    assert(emitHandlerWasCalled, "Emit Handler should have been called");

    emitHandlerWasCalled = false;
    instance.logger.log(LogLevel.INFO, "This is a message");
    assert(emitHandlerWasCalled, "Emit Handler should have been called");
  })
});
