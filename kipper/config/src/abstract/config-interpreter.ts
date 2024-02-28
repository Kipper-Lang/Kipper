import { ConfigFile } from "./config-file";
import { ConfigErrorMetaData, ConfigValidationError, UnknownFieldError } from "../errors";
import { RawEvaluatedKipperConfigFile } from "../evaluated-kipper-config-file";

/**
 * A type that represents a configuration scheme definition.
 * @since 0.11.0
 */
export type ConfigInterpreterSchemeDefinition =
	| {
			type: "string" | "number" | "boolean";
			required: boolean;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			type: "array";
			required: boolean;
			itemType: "string" | "number" | "boolean";
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			type: "object";
			required: boolean;
			properties: ConfigInterpreterScheme;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			type: "union";
			required: boolean;
			possibilities: (
				| { type: "string" | "number" | "boolean" }
				| { type: "array"; itemType: "string" | "number" | "boolean" }
				| { type: "object"; properties: ConfigInterpreterScheme }
			)[];
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };

/**
 * A type that represents a configuration scheme.
 * @since 0.11.0
 */
export type ConfigInterpreterScheme = {
	[key: string]: ConfigInterpreterSchemeDefinition;
};

/**
 * A type that directly corresponds to the provided scheme and translates it to a TypeScript type
 * i.e. a representation of what a valid config file would actually look like if it was parsed.
 */
export type Config<Scheme extends ConfigInterpreterScheme> = {
	[key in keyof Scheme]: Scheme[key] extends { type: "string"; required: true }
		? string
		: Scheme[key] extends { type: "string"; required: false }
		? string | undefined
		: Scheme[key] extends { type: "number"; required: true }
		? number
		: Scheme[key] extends { type: "number"; required: false }
		? number | undefined
		: Scheme[key] extends { type: "boolean"; required: true }
		? boolean
		: Scheme[key] extends { type: "boolean"; required: false }
		? boolean | undefined
		: Scheme[key] extends { type: "array"; itemType: infer T; required: true }
		? T[]
		: Scheme[key] extends { type: "array"; itemType: infer T; required: false }
		? T[] | undefined
		: Scheme[key] extends { type: "object"; properties: infer P extends ConfigInterpreterScheme; required: true }
		? Config<P>
		: Scheme[key] extends { type: "object"; properties: infer P extends ConfigInterpreterScheme; required: false }
		? Config<P> | undefined
		: never;
};

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
	 * @param rawConfig The configuration file to validate.
	 * @param meta The metadata for any error that may be thrown.
	 * @param parentConfig The parent configuration file of the configuration file. If provided any required errors will
	 * be ignored if the parent configuration file has the required field.
	 * @throws ConfigValidationError If the configuration file is invalid.
	 * @protected
	 * @since 0.11.0
	 */
	protected validateConfigBasedOffScheme(
		rawConfig: ConfigFile["parsedJSON"],
		meta: ConfigErrorMetaData,
		parentConfig?: RawEvaluatedKipperConfigFile,
	): void {
		this.validateConfigBasedOffSchemeRecursive(rawConfig, this.scheme, meta, parentConfig);
	}

	/**
	 * Raw recursive function to validate a configuration file based off a scheme.
	 * @param configFile The configuration file to validate.
	 * @param scheme The scheme to validate the configuration file against.
	 * @param meta The metadata for any error that may be thrown.
	 * @param parentConfig The parent configuration file of the configuration file. If provided any required errors will
	 * be ignored if the parent configuration file has the required field.
	 * @throws ConfigValidationError If the configuration file is invalid.
	 * @private
	 * @since 0.11.0
	 */
	private validateConfigBasedOffSchemeRecursive(
		configFile: ConfigFile["parsedJSON"],
		scheme: ConfigInterpreterScheme,
		meta: ConfigErrorMetaData,
		parentConfig?: RawEvaluatedKipperConfigFile,
	): void {
		for (const key in scheme) {
			const schemeValue = scheme[key];
			const configValue = configFile[key];

			if (schemeValue.required && configValue === undefined && !(parentConfig && key in parentConfig)) {
				throw new ConfigValidationError(`Missing required field "${key}"`, meta);
			} else if (configValue) {
				this.checkType(schemeValue, configValue, key, meta);
			}
		}

		Object.keys(configFile).forEach((key) => {
			if (!(key in scheme)) {
				throw new UnknownFieldError(`Unknown field "${key}"`, meta);
			}
		});
	}

	private checkType(
		schemeValue: ConfigInterpreterSchemeDefinition,
		configValue: any,
		key: string,
		meta: ConfigErrorMetaData,
	) {
		if (schemeValue.type === "union") {
			const possibilities = schemeValue.possibilities;

			// Ensure that at least one type is valid
			let valid = false;
			for (const possibility of possibilities) {
				try {
					this.checkType({ ...possibility, required: schemeValue.required }, configValue, key, meta);
					valid = true;
					break;
				} catch (e) {
					if (!(e instanceof ConfigValidationError)) {
						throw e;
					}
				}
			}

			if (!valid) {
				throw new ConfigValidationError(
					`Field "${key}" is not of any of the types '${possibilities.map((p) => p.type).join(", ")}'`,
					meta,
				);
			}
		} else {
			if (
				(schemeValue.type === "array" && !Array.isArray(configValue)) ||
				(schemeValue.type !== "array" && schemeValue.type !== typeof configValue)
			) {
				throw new ConfigValidationError(`Field "${key}" is not of type "${schemeValue.type}"`, meta);
			}

			if (schemeValue.type === "object") {
				this.validateConfigBasedOffSchemeRecursive(configValue, schemeValue.properties, meta);
			} else if (schemeValue.type === "array") {
				for (const value of configValue) {
					if (typeof value !== schemeValue.itemType) {
						throw new ConfigValidationError(
							`Field "${key}" contains an item that is not of type "${schemeValue.itemType}"`,
							meta,
						);
					}
				}
			}
		}
	}

	abstract loadConfig(config: ConfigFile): Promise<OutputT>;
}
