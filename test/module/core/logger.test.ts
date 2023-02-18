import { assert } from "chai";
import { KipperCompiler, KipperLogger, LexerOrParserSyntaxError, LogLevel } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

describe("KipperLogger", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("Construction with empty emit handler", () => {
			const emitHandler = () => {};
			const logger = new KipperLogger(emitHandler);

			assert(logger.emitHandler === emitHandler, "emitHandler must be equal");

			// Simple message logging
			logger.info("A message");
		});

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
		});
	});

	describe("log", () => {
		it("Simple call", () => {
			let levelReceived: LogLevel = LogLevel.UNKNOWN;
			const emitHandler = (level: LogLevel) => {
				levelReceived = level;
			};
			const logger = new KipperLogger(emitHandler, LogLevel.UNKNOWN);
			assert(logger.emitHandler === emitHandler, "emitHandler must be equal");

			// Simple message logging
			logger.debug("A message");
			// @ts-ignore
			assert(levelReceived === LogLevel.DEBUG, "Expected DEBUG");

			logger.info("A message");
			// @ts-ignore
			assert(levelReceived === LogLevel.INFO, "Expected INFO");

			logger.warn("A message");
			// @ts-ignore
			assert(levelReceived === LogLevel.WARN, "Expected WARN");

			logger.error("A message");
			// @ts-ignore
			assert(levelReceived === LogLevel.ERROR, "Expected ERROR");

			logger.fatal("A message");
			// @ts-ignore
			assert(levelReceived === LogLevel.FATAL, "Expected FATAL");
		});

		it("Test automatic logging on compilation exceptions", async () => {
			let fatalErrors = 0;
			let errors = 0;
			const logger = new KipperLogger((level, msg) => {
				if (level === LogLevel.ERROR) errors++;
				else if (level === LogLevel.FATAL) fatalErrors++;
				assert(msg, "Expected non-empty message.");
			}, LogLevel.ERROR);

			try {
				await new KipperCompiler(logger).compile("var x: num = 4; \nvar x: num = 5", { target: defaultTarget });
			} catch (e) {
				assert(
					(<LexerOrParserSyntaxError<any>>e).constructor.name === "LexerOrParserSyntaxError",
					"Expected different error",
				);

				// Check logging errors
				assert(errors > 0, "Expected at least 0 errors");
				assert(fatalErrors > 0, "Expected at least 0 fatal errors");

				return;
			}
			assert(false, "Expected 'KipperSyntaxError'");
		});
	});
});
