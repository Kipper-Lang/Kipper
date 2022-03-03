import { assert } from "chai";
import { KipperLogger, LogLevel } from "../../src/";

describe("KipperLogger", () => {
  describe("KipperLogger.constructor()", () => {
    it("Construction with empty emit handler", () => {
      const emitHandler = () => {};
      const logger = new KipperLogger(emitHandler);

      assert(logger.emitHandler === emitHandler, "emitHandler must be equal");

      // Simple message logging
      logger.info("A message");
    })

    it("Construction with a basic emit handler", () => {
      let called: number = 0;
      const emitHandler = () => {
        called++;
      };
      const logger = new KipperLogger(emitHandler);

      assert(logger.emitHandler === emitHandler, "emitHandler must be equal");

      // Simple message logging
      logger.info("A message");
      assert(called === 1, "Function must have been called once");

      logger.info("Another message");
      assert(called === 2, "Function must have been called twice");
    })
  });

  describe("KipperLogger.log()", () => {
    it("Simple call", () => {
      let levelReceived: LogLevel = 0;
      const emitHandler = (level: LogLevel) => {
        levelReceived = level;
      };
      const logger = new KipperLogger(emitHandler);

      assert(logger.emitHandler === emitHandler, "emitHandler must be equal");

      // Simple message logging
      logger.debug("A message");
      assert(levelReceived === LogLevel.DEBUG, "Level must be the same");

      logger.info("A message");
      assert(levelReceived === LogLevel.INFO, "Level must be the same");

      logger.warn("A message");
      assert(levelReceived === LogLevel.WARN, "Level must be the same");

      logger.error("A message");
      assert(levelReceived === LogLevel.ERROR, "Level must be the same");

      logger.fatal("A message");
      assert(levelReceived === LogLevel.FATAL, "Level must be the same");

      logger.trace("A message");
      assert(levelReceived === LogLevel.TRACE, "Level must be the same");
    })
  })
});
