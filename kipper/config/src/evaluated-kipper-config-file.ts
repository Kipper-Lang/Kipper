import { EvaluatedConfigFile, EvaluatedConfigValue } from "./abstract/evaluated-config-file";

/**
 * A type that represents a path-like object.
 * @since 0.11.0
 */
export type PathLike = string;

export interface RawEvaluatedKipperConfigFile extends EvaluatedConfigFile {
	version: string;
	resources: Array<PathLike>;
	compiler: {
		target: string;
	};
}

/**
 * A class that represents a processed Kipper config file.
 * @since 0.11.0
 */
export class EvaluatedKipperConfigFile implements RawEvaluatedKipperConfigFile {
	[key: string]: EvaluatedConfigValue;

	version: RawEvaluatedKipperConfigFile["version"];
	resources: RawEvaluatedKipperConfigFile["resources"];
	compiler: RawEvaluatedKipperConfigFile["compiler"];

	public constructor(config: RawEvaluatedKipperConfigFile) {
		this.version = config.version;
		this.resources = config.resources;
		this.compiler = config.compiler;
	}
}
