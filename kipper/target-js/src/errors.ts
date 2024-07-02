import { KipperError } from "@kipper/core";

/**
 * A Kipper JS target error that extends from {@link KipperError} and represents any error that occurred during JS
 * compilation.
 * @since 0.11.0
 */
export class KipperJSTargetError extends KipperError {
	constructor(msg: string) {
		super(msg);
	}
}

/**
 * A Kipper SWC error that extends from {@link KipperError} and represents any error that occurred during SWC
 * compilation.
 * @since 0.11.0
 */
export class KipperSWCError extends KipperJSTargetError {
	constructor(msg: string) {
		super(msg);
	}
}
