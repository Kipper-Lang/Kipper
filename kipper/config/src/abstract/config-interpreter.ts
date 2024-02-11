import { ConfigFile } from "./config-file";
import { ConfigValidationError } from "../errors";

/**
 * A type that represents a configuration scheme.
 * @since 0.11.0
 */
export type ConfigInterpreterScheme = {
	[key: string]: {
		type: "string" | "number" | "boolean";
		required: boolean;
	} | {
		type: "array",
		required: boolean;
		itemType: "string" | "number" | "boolean";
	} | {
		type: "object";
		required: boolean;
		properties: ConfigInterpreterScheme;
	}
};

/**
 * A type that directly corresponds to the provided scheme and translates it to a TypeScript type
 * i.e. a representation of what a valid config file would actually look like if it was parsed.
 */
export type Config<Scheme extends ConfigInterpreterScheme> = {
	[key in keyof Scheme]: Scheme[key] extends { type: "string" } ?
		string :
		Scheme[key] extends { type: "number", required: false } ?
			number :
			Scheme[key] extends { type: "boolean" } ?
				boolean :
				Scheme[key] extends { type: "array", itemType: infer T } ?
					T[] :
					Scheme[key] extends { type: "object", properties: infer P extends ConfigInterpreterScheme } ?
						Config<P> :
						never;
};

type example = Config<{ "smth": { type: "object", required: false, properties: { x: { type: "string", required: false } }}}>
var example1: example = {} as example;

example1.smth.x;

/**
 * An abstract class that interprets a configuration file and returns a configuration object.
 * @since 0.11.0
 */
export abstract class ConfigInterpreter<SchemeT extends ConfigInterpreterScheme, OutputT> {
	scheme: SchemeT;

	protected constructor(scheme: SchemeT) {
		this.scheme = scheme;
	}

	/**
	 * Validate a configuration file based off a scheme.
	 *
	 * This is intended for basic validation, and should not be used for complex validation. There a custom validation
	 * methods should be implemented depending on the complexity of the configuration file.
	 * @param config The configuration file to validate.
	 * @param parentFiles The parent files of the configuration file. Used to allow for more descriptive error messages
	 * when recursively validating configuration files.
	 * @throws ConfigValidationError If the configuration file is invalid.
	 * @protected
	 * @since 0.11.0
	 */
	protected validateConfigBasedOffScheme(config: ConfigFile, parentFiles: string[]): void {
		this.validateConfigBasedOffSchemeRecursive(config, this.scheme, parentFiles);
	}

	/**
	 * Raw recursive function to validate a configuration file based off a scheme.
	 * @param configFile The configuration file to validate.
	 * @param scheme The scheme to validate the configuration file against.
	 * @param parentFiles The parent files of the configuration file. Used to allow for more descriptive error messages
	 * when recursively validating configuration files.
	 * @throws ConfigValidationError If the configuration file is invalid.
	 * @private
	 * @since 0.11.0
	 */
	private validateConfigBasedOffSchemeRecursive(
		configFile: ConfigFile,
		scheme: ConfigInterpreterScheme,
		parentFiles: string[]
	): void {
		for (const key in scheme) {
			const schemeValue = scheme[key];
			const configValue = configFile.parsedJSON[key];

			if (schemeValue.required && configValue === undefined) {
				throw new ConfigValidationError(`Missing required field "${key}"`, configFile.fileName, parentFiles);
			}

			if (schemeValue.type === "object") {
				this.validateConfigBasedOffSchemeRecursive(
					configValue,
					schemeValue.properties,
					parentFiles
				);
			} else if (schemeValue.type === "array") {
				if (!Array.isArray(configValue)) {
					throw new ConfigValidationError(
						`Field "${key}" is not an array, but it should be`,
						configFile.fileName,
						parentFiles
					);
				}

				for (const value of configValue) {
					if (typeof value !== schemeValue.itemType) {
						throw new ConfigValidationError(
							`Field "${key}" contains an item that is not of type "${schemeValue.itemType}"`,
							configFile.fileName,
							parentFiles
						);
					}
				}
			} else {
				if (typeof configValue !== schemeValue.type) {
					throw new ConfigValidationError(
						`Field "${key}" is not of type "${schemeValue.type}"`,
						configFile.fileName,
						parentFiles
					);
				}
			}
		}
	}

	abstract loadConfig(config: ConfigFile): Promise<OutputT>;
}
