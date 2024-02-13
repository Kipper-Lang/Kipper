import { clean } from "semver";

/**
 * The metadata for a config error, which is used to provide verbose error messages.
 * @since 0.11.0
 */
export type ConfigErrorMetaData = { fileName: string; parentFiles: string[] };

/**
 * Generic error for the '@kipper/config' package.
 * @since 0.11.0
 */
export class ConfigError {
	public constructor(public message: string, public meta?: ConfigErrorMetaData) {
		this.message = `${message}${meta ? ` (${[meta.fileName, ...meta.parentFiles].join(" -> ")})` : ""}`;
	}
}

/**
 * Error that is thrown whenever a file is not found.
 * @since 0.11.0
 */
export class FileNotFoundError extends ConfigError {
	public constructor(fileName: string) {
		super(`File not found '${fileName}'`);
	}
}

/**
 * Error that is thrown whenever an invalid path is encountered.
 * @since 0.11.0
 */
export class InvalidPathError extends ConfigError {
	public constructor(fileName: string, details: string) {
		super(`Invalid path '${fileName}'. ${details}`);
	}
}

/**
 * Error that is thrown whenever an interpreter error is encountered.
 * @since 0.11.0
 */
export class ConfigInterpreterError extends ConfigError {
	public constructor(message: string, meta?: ConfigErrorMetaData) {
		super(message, meta);
	}
}

/**
 * Error that is thrown whenever a referenced directory or file is not found.
 * @since 0.11.0
 */
export class RefNotFoundError extends ConfigInterpreterError {
	public constructor(fileName: string, meta: ConfigErrorMetaData) {
		super(`Dir or file not found ~ '${fileName}'`, meta);
	}
}

/**
 * Error that is thrown whenever an invalid path is encountered.
 * @since 0.11.0
 */
export class RefInvalidPathError extends ConfigInterpreterError {
	public constructor(fileName: string, details: string, meta: ConfigErrorMetaData) {
		super(`Invalid path '${fileName}' ~ ${details}`, meta);
	}
}

/**
 * Error that is thrown whenever a validation error is encountered.
 * @since 0.11.0
 */
export class ConfigValidationError extends ConfigInterpreterError {
	public constructor(validationError: string, meta: ConfigErrorMetaData) {
		super(`Validation error ~ '${validationError}'`, meta);
	}
}

/**
 * Error that is thrown whenever an unknown field is encountered.
 * @since 0.11.0
 */
export class UnknownFieldError extends ConfigInterpreterError {
	public constructor(unknownField: string, meta: ConfigErrorMetaData) {
		super(`Unknown field ~ '${unknownField}'`, meta);
	}
}

/**
 * Error that is thrown whenever the syntax for a resource mapping is invalid.
 * @since 0.11.0
 */
export class InvalidMappingSyntaxError extends ConfigInterpreterError {
	public constructor(provided: string, meta: ConfigErrorMetaData) {
		super(`Invalid mapping syntax ~ '${provided}'`, meta);
	}
}

/**
 * Error that is thrown whenever the syntax for a version is invalid.
 * @since 0.11.0
 */
export class InvalidVersionSyntaxError extends ConfigInterpreterError {
	public constructor(provided: string, meta: ConfigErrorMetaData) {
		super(`Invalid version syntax  ~ '${provided}'`, meta);
	}
}

/**
 * Error that is thrown whenever the version of a file is incompatible.
 * @since 0.11.0
 */
export class IncompatibleVersionError extends ConfigInterpreterError {
	public constructor(expected: string, cleanExpected: string, actual: string, meta: ConfigErrorMetaData) {
		super(
			`Version mismatch ~ Expected '${expected}'${
				cleanExpected == expected ? "" : `(Cleaned: ${cleanExpected})`
			}, but received '${actual}'`,
			meta,
		);
	}
}
