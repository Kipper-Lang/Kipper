import type { EvaluatedConfigFile, EvaluatedConfigValue } from "./abstract/evaluated-config-file";
import type * as semver from "semver";

/**
 * A type that represents a path-like object.
 * @since 0.11.0
 */
export type PathLike = string;

/**
 * A raw representation of a processed Kipper config file.
 * @since 0.11.0
 */
export interface RawEvaluatedKipperConfigFile extends EvaluatedConfigFile {
	basePath: string;
	outDir: string;
	srcDir?: string;
	// Since multiple files may be generated from a single source file,
	// the outDir is used to specify the output directory and not a single file path
	files: Array<{ src: PathLike; outDir: PathLike }>;
	resources: Array<{ src: PathLike; out: PathLike }>;
	compiler: {
		target: string;
		version: semver.SemVer;
	};
}

/**
 * A class that represents a processed Kipper config file.
 * @since 0.11.0
 */
export class EvaluatedKipperConfigFile implements RawEvaluatedKipperConfigFile {
	// eslint-disable-next-line no-undef
	[key: string]: EvaluatedConfigValue;

	public readonly raw: RawEvaluatedKipperConfigFile;

	basePath: RawEvaluatedKipperConfigFile["basePath"];
	outDir: RawEvaluatedKipperConfigFile["outDir"];
	srcDir: RawEvaluatedKipperConfigFile["srcDir"];
	files: RawEvaluatedKipperConfigFile["files"];
	resources: RawEvaluatedKipperConfigFile["resources"];
	compiler: RawEvaluatedKipperConfigFile["compiler"];

	public constructor(config: RawEvaluatedKipperConfigFile) {
		this.raw = config;
		this.basePath = config.basePath;
		this.outDir = config.outDir;
		this.srcDir = config.srcDir;
		this.files = config.files;
		this.resources = config.resources;
		this.compiler = config.compiler;
	}
}
