/**
 * Generic error for the '@kipper/config' package.
 * @since 0.11.0
 */
export class ConfigError {
	public constructor(public message: string, public fileName: string, parentFiles: string[] = []) {
		this.message = `${message} (${[fileName, ...parentFiles].join(" -> ")})`;
		this.fileName = fileName;
	}
}

/**
 * Error that is thrown whenever a validation error is encountered.
 * @since 0.11.0
 */
export class ConfigValidationError extends ConfigError {
	public constructor(validationError: string, fileName: string, parentFiles?: string[]) {
		super(
			`Encountered validation error in file ${fileName}: ${validationError}`,
			"ConfigValidationError",
			parentFiles,
		);
	}
}

/**
 * Error that is thrown whenever an unknown field is encountered.
 * @since 0.11.0
 */
export class UnknownFieldError extends ConfigError {
	public constructor(unknownField: string, fileName: string, parentFiles?: string[]) {
		super(
			`Encountered unknown field in file ${fileName}: ${unknownField}`,
			"UnknownFieldError",
			parentFiles,
		);
	}
}

/**
 * Error that is thrown whenever an extends file is not found.
 * @since 0.11.0
 */
export class UnableToFindExtendsFileError extends ConfigError {
	public constructor(fileName: string, parentFiles?: string[]) {
		super(
			`Unable to find extends file for file ${fileName}`,
			"UnableToFindExtendsFileError",
			parentFiles,
		);
	}
}
