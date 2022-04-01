/**
 * Standalone implementation, which makes the kipper module available globally using browserify.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
// Including the base kipper module
import * as kipper from "../src";

// Defining the global 'Kipper' variable, which may be accessed outside the included browserify file
// eslint-disable-next-line no-undef
(<any>window).Kipper = (<any>window).Kipper || kipper;

// Validating integrity of the module
(() => {
	const emitHandler = (level: kipper.LogLevel, msg: string) => console.log(`[${level}] ${msg}`);
	const logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);

	// Test message
	logger.info(`Initialised Kipper Web-Compiler!`);
})();
