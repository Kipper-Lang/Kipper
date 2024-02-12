/**
 * The metadata for a config error, which is used to provide verbose error messages.
 * @since 0.11.0
 */
export type ConfigErrorMetaData = { fileName: string, parentFiles: string[] };

	/**
 * Generic error for the '@kipper/config' package.
 * @since 0.11.0
 */
export class ConfigError {
	public constructor(public message: string, public meta: ConfigErrorMetaData) {
		this.message = `${message} (${[meta.fileName, ...meta.parentFiles].join(" -> ")})`;
	}
}

/**
 * Error that is thrown whenever a directory or file is not found.
 * @since 0.11.0
 */
export class NotFoundError extends ConfigError {
	public constructor(fileName: string, meta: ConfigErrorMetaData) {
		super(`Dir or file not found ~ '${fileName}'`, meta);
	}
}

/**
 * Error that is thrown whenever an invalid path is encountered.
 * @since 0.11.0
 */
export class InvalidPathError extends ConfigError {
	public constructor(fileName: string, details: string, meta: ConfigErrorMetaData) {
		super(`Invalid path '${fileName}' ~ ${details}`, meta);
	}
}

/**
 * Error that is thrown whenever a validation error is encountered.
 * @since 0.11.0
 */
export class ConfigValidationError extends ConfigError {
	public constructor(validationError: string, meta: ConfigErrorMetaData) {
		super(
			`Encountered validation error ~ '${validationError}'`,
			meta
		);
	}
}

/**
 * Error that is thrown whenever an unknown field is encountered.
 * @since 0.11.0
 */
export class UnknownFieldError extends ConfigError {
	public constructor(unknownField: string, meta: ConfigErrorMetaData) {
		super(
			`Encountered unknown field ~ '${unknownField}'`,
			meta
		);
	}
}

/**
 * Error that is thrown whenever the syntax for a resource mapping is invalid.
 * @since 0.11.0
 */
export class InvalidMappingSyntaxError extends ConfigError {
	public constructor(provided: string, meta: ConfigErrorMetaData) {
		super(`Invalid mapping syntax ~ '${provided}'`, meta);
	}
}

/**
 * Error that is thrown whenever the syntax for a version is invalid.
 * @since 0.11.0
 */
export class InvalidVersionSyntaxError extends ConfigError {
	public constructor(provided: string, meta: ConfigErrorMetaData) {
		super(`Invalid version syntax  ~ '${provided}'`, meta);
	}
}

/**
 * Error that is thrown whenever the version of a file is incompatible.
 * @since 0.11.0
 */
export class IncompatibleVersionError extends ConfigError {
	public constructor(expected: string, actual: string, meta: ConfigErrorMetaData) {
		super(
			`Version mismatch ~ Expected '${expected}', but received '${actual}'`,
			meta
		);
	}
}
