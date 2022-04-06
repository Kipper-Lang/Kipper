/**
 * Standalone implementation, which makes the kipper module available globally using browserify.
 *
 * This file depends on the DOM!
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
// Including the base kipper module
import * as kipper from "../src";

// Defining the global 'Kipper' variable, which may be accessed outside the included browserify file
// @ts-ignore Ignoring since the DOM is loaded using 'tsconfig.web.json'
// eslint-disable-next-line no-undef
(<any>window).Kipper = (<any>window).Kipper || kipper;

// Validating integrity of the module
(() => {
	let calledProperly: boolean = false;
	const emitHandler = () => calledProperly = true;
	const logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);
	const compiler: kipper.KipperCompiler = new kipper.KipperCompiler(logger);

	// Testing basic integrity
	compiler.logger.info("Test message");
	if (!calledProperly) {
		throw new Error("Failed integrity check for Kipper!");
	}
})();
