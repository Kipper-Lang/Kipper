/**
 * CLI related errors that core on {@link KipperError}
 * @since 0.1.0
 */

import { KipperError } from "@kipper/core";

/**
 * A Kipper CLI error that extends from {@link KipperError} and represents any error that is unique to the CLI.
 * @since 0.1.0
 */
export abstract class KipperCLIError extends KipperError {
	protected constructor(msg: string) {
		super(msg);
	}
}

/**
 * Represents an error that is thrown when an unsupported encoding is used.
 * @since 0.1.0
 */
export class KipperUnsupportedEncodingError extends KipperCLIError {
	constructor(encoding: string) {
		super(`Unsupported encoding '${encoding}'.`);
	}
}

/**
 * Represents a file access error in the CLI.
 * @since 0.1.0
 */
export class KipperFileAccessError extends KipperCLIError {
	constructor(filePath: string) {
		super(`Failed to access file '${filePath}'. Make sure the file exists and it is readable.`);
	}
}

/**
 * Represents a file write error in the CLI.
 * @since 0.1.0
 */
export class KipperFileWriteError extends KipperCLIError {
	constructor(filePath: string) {
		super(`Failed to write file '${filePath}'.`);
	}
}

/**
 * Represents an error that is thrown whenever invalid input is passed to the cli.
 * @since 0.7.0
 */
export class KipperInvalidInputError extends KipperCLIError {
	constructor(err: string) {
		super(err);
	}
}
