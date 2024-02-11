import { Config, ConfigInterpreter, ConfigInterpreterScheme } from "./abstract/config-interpreter";
import { KipperConfigFile } from "./kipper-config-file";
import { EvaluatedKipperConfigFile } from "./evaluated-kipper-config-file";

/**
 * A type that represents a Kipper config file.
 * @since 0.11.0
 */
export const KipperConfigScheme = {
  extends: {
		type: "string",
		required: false,
	},
	version: {
		type: "string",
		required: true,
	},
	resources: {
		type: "array",
		required: true,
		itemType: "string",
	},
	compiler: {
		type: "object",
		required: true,
		properties: {
			target: {
				type: "string",
				required: true,
			},
		},
	},
} satisfies ConfigInterpreterScheme;

/**
 * A type that directly corresponds to the {@link KipperConfigScheme} and translates it to a TypeScript type i.e. a
 * representation of what a valid config file would actually look like if it was parsed.
 * @since 0.11.0
 */
export type KipperConfig = Config<typeof KipperConfigScheme>;

export class KipperConfigInterpreter extends ConfigInterpreter<typeof KipperConfigScheme, EvaluatedKipperConfigFile> {
	constructor() {
		super(KipperConfigScheme);
	}

	/**
	 * Loads and interprets a Kipper config file.
	 *
	 * This method will load the config file, validate it, resolve any "extends" fields, and process the config file.
	 *
	 * NOTE: If an "extends" fields is present, the encoding of the provided {@link config} will be used for the extended
	 * config file i.e. all extended config files must have the same encoding as the base config file. This is a
	 * limitation to simplify the algorithm.
	 * @param config The config file to load.
	 * @param parentFiles The parent files of the provided config files. This will be used to indicate where the config
	 * file was referenced from and will be used to provide more descriptive error messages (e.g. "fileA -> fileB ->
	 * fileC -> ..."). This will usually not be needed by the user and is primarily used for internal purposes.
	 */
	async loadConfig(config: KipperConfigFile, parentFiles: string[] = []): Promise<EvaluatedKipperConfigFile> {
		const configFile: Partial<KipperConfig> = JSON.parse(config.content);

		// Ensure that the config file is "on a basic level" valid (all required fields are present, etc.)
		this.validateConfigBasedOffScheme(config, parentFiles);
		const validatedConfigFile = configFile as KipperConfig;

		// Evaluate any "extends" fields in the config file
		let extendedConfig: EvaluatedKipperConfigFile | undefined;
		if (validatedConfigFile.extends) {
			extendedConfig = await this.loadConfig(
				await KipperConfigFile.fromFile(validatedConfigFile.extends, config.encoding),
				[...parentFiles, config.fileName],
			);
		}

		// Process the config file here (e.g., resolve paths, apply extensions, etc.)
		return new EvaluatedKipperConfigFile({
			version: validatedConfigFile.version,
			resources: validatedConfigFile.resources,
			compiler: {
				target: validatedConfigFile.compiler.target,
			},
		});
	}
}
