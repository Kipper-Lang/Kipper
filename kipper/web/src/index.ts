/**
 * The standalone web-module for the Kipper Compiler.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import * as kipper from "@kipper/core";
import * as kipperTS from "@kipper/target-ts";
import * as kipperJS from "@kipper/target-js";

// Try to determine the global scope
// @ts-ignore
// eslint-disable-next-line no-undef
const globalScope = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

// @ts-ignore
(<any>globalScope.Kipper) = (<any>globalScope).Kipper || kipper;
// @ts-ignore
(<any>globalScope.KipperTS) = (<any>globalScope).KipperTS || kipperTS;
// @ts-ignore
(<any>globalScope.KipperJS) = (<any>globalScope).KipperJS || kipperJS;

// Validating integrity of the module
(() => {
	let calledProperly: boolean = false;
	const emitHandler = () => (calledProperly = true);
	const logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);
	const compiler: kipper.KipperCompiler = new kipper.KipperCompiler(logger);

	// Testing basic integrity
	compiler.logger.info("Test message");
	if (!calledProperly) {
		throw new Error("Failed integrity check for Kipper!");
	}
})();
