import { Config, ConfigInterpreter, ConfigInterpreterScheme } from "./abstract/config-interpreter";
import { KipperConfigFile } from "./kipper-config-file";
import { EvaluatedKipperConfigFile, RawEvaluatedKipperConfigFile } from "./evaluated-kipper-config-file";
import {
	ConfigErrorMetaData,
	IncompatibleVersionError,
	InvalidMappingSyntaxError,
	InvalidVersionSyntaxError, RefInvalidPathError
} from "./errors";
import { ensureExistsHasPermAndIsOfType } from "./tools";
import { version as kipperConfigVersion } from "./index";
import * as semver from "semver";
import * as path from "node:path";

/**
 * A type that represents a Kipper config file.
 * @since 0.11.0
 */
export const KipperConfigScheme = {
	/**
	 * The file that this config file extends.
	 * @since 0.11.0
	 */
	extends: {
		type: "string",
		required: false,
	},
	/**
	 * The base path of the project. This is the path that all other paths are relative to.
	 *
	 * This is optional and if not provided, the working directory of the invoked Kipper CLI command will be used.
	 * @since 0.11.0
	 */
	basePath: {
		type: "string",
		required: false,
	},
	/**
	 * The source directory of the project.
	 *
	 * This is optional, as not always a "src" directory is needed. If not provided, the {@link basePath} will be used as
	 * the source directory and all {@link files} are compiled and emitted with preserved directory structure relative
	 * to the {@link basePath}. (This would mean that even if a "src" is provided, the {@link files} would still be
	 * emitted with preserved directory structure i.e. "{@link outDir}/src/...").
	 *
	 * If provided, the {@link files} will be emitted with preserved directory structure relative to the {@link srcDir}.
	 * This reflects the natural behaviour and means "{@link srcDir}/index.kip" is outputted as "{@link outDir}/index.smth".
	 * This although means any files outside will cause an error.
	 */
	srcDir: {
		type: "string",
		required: false,
	},
	/**
	 * The output directory of the project.
	 *
	 * This is used as the output directory for all compiled files and resources.
	 * @since 0.11.0
	 */
	outDir: {
		type: "string",
		required: true,
	},
	/**
	 * Any resources that are required for the project.
	 *
	 * They will be copied and placed in the output directory with preserved directory structure. As such, this also
	 * means that the compiler enforces a strict "same-origin" policy for resources i.e. resources must be within the
	 * {@link basePath} of the project.
	 *
	 * Example:
	 * - "logo.png" will be copied to "{@link outDir}/logo.png"
	 * - "img/" will be copied to "{@link outDir}/img/"
	 * - "img/logo.png" will be copied to "{@link outDir}/img/logo.png"
	 *
	 * To avoid this behaviour the "origin:dest" syntax can be used. This will copy the origin file to the destination
	 * directory (if a directory is provided) or file (can be also used to rename the file). This is useful for resources
	 * that should not be placed in the output directory with preserved directory structure.
	 * @since 0.11.0
	 */
	resources: {
		type: "array",
		required: true,
		itemType: "string",
	},
	/**
	 * An array of files to compile. They will be all placed in the output directory with preserved directory structure.
	 *
	 * Note that if a {@link srcDir} is provided, the files will be emitted with preserved directory structure relative to
	 * the {@link srcDir}. This reflects the natural behaviour and means "{@link srcDir}/index.kip" is outputted as
	 * "{@link outDir}/index.smth". This although means any files outside will cause an error.
	 *
	 * If not provided, the {@link basePath} will be used as the source directory and all files are compiled and emitted
	 * with preserved directory structure relative to the {@link basePath}. (This would mean that even if a "src" is
	 * provided, the files would still be emitted with preserved directory structure i.e. "{@link outDir}/src/...").
	 * @since 0.11.0
	 */
	files: {
		type: "array",
		required: true,
		itemType: "string",
	},
	/**
	 * Compiler-specific options.
	 *
	 * These can be heavily dependent on the compiler version, and as such, the compiler version is also required.
	 * @since 0.11.0
	 */
	compiler: {
		type: "object",
		required: true,
		properties: {
			/**
			 * The target of the compiler.
			 * @since 0.11.0
			 */
			target: {
				type: "string",
				required: true,
			},
			/**
			 * The version of the compiler.
			 *
			 * Standard NPM-like versioning is used, i.e. the following rules apply:
			 * - "1.2.3" will match only "1.2.3".
			 * - "~1.2.3", "1.2" and "1.2.x" will match any version from "1.2.3" to "1.2.9999" (inclusive).
			 * - "^1.2.3", "1" and "1.x.x" will match any version from "1.2.3" to "1.9999.9999" (inclusive).
			 * - "*" will match any version. (This is heavily discourage and should only be used for testing.)
			 * - ... and many more. (Visit the npm docs for more information.)
			 * @since 0.11.0
			 */
			version: {
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

/**
 * A type that represents the environment information that is used to interpret a Kipper config file.
 * @since 0.11.0
 */
export interface KipperConfigEnvInfo {
	/**
	 * Working directory of the invoked Kipper CLI command in absolute form.
	 * @since 0.11.0
	 */
	workDir: string;
	/**
	 *
	 */
}

export class KipperConfigInterpreter extends ConfigInterpreter<typeof KipperConfigScheme, EvaluatedKipperConfigFile> {
	constructor() {
		super(KipperConfigScheme);
	}

	/**
	 * Loads and interprets a Kipper config file.
	 *
	 * This method will load the config file, validate it, resolve any "extends" fields, and process the config file.
	 *
	 * NOTE: If an "extends" fields is present, the encoding of the provided {@link configFile} will be used for the extended
	 * config file i.e. all extended config files must have the same encoding as the base config file. This is a
	 * limitation to simplify the algorithm.
	 * @param configFile The config file to load.
	 * @param envInfo The environment information that is used to interpret the config file. This is needed as the
	 * interpreter needs to know the working directory of the invoked Kipper CLI command to resolve relative paths and
	 * other information.
	 * @param parentFiles The parent files of the provided config files. This will be used to indicate where the config
	 * file was referenced from and will be used to provide more descriptive error messages (e.g. "fileA -> fileB ->
	 * fileC -> ..."). This will usually not be needed by the user and is primarily used for internal purposes.
	 */
	async loadConfig(
		configFile: KipperConfigFile,
		envInfo: KipperConfigEnvInfo = { workDir: process.cwd() },
		parentFiles: string[] = [],
	): Promise<EvaluatedKipperConfigFile> {
		// Create the meta object which is used to provide more descriptive error messages (will be reused throughout the
		// whole analysis and processing of the config file)
		const meta: ConfigErrorMetaData = { fileName: configFile.fileName, parentFiles };

		const rawConfig = configFile.parsedJSON;

		// Evaluate any "extends" fields in the config file
		let extendedConfig: EvaluatedKipperConfigFile | undefined;
		if (rawConfig.extends && typeof rawConfig.extends === "string") {
			extendedConfig = await this.loadConfig(
				await KipperConfigFile.fromFile(rawConfig.extends, configFile.encoding),
				envInfo,
				[...parentFiles, configFile.fileName],
			);
		}

		// Ensure that the config file is "on a basic level" valid (all required fields are present, etc.)
		this.validateConfigBasedOffScheme(rawConfig, meta, extendedConfig?.raw);
		const validatedConfigFile = rawConfig as KipperConfig;

		// Make "outDir" and "basePath" absolute and ensure that "basePath" exist, are directories and readable/writable
		// If "outDir" doesn't exist we'll simply create it later (Handled by the CLI though)
		validatedConfigFile.outDir = path.resolve(envInfo.workDir, validatedConfigFile.outDir);
		validatedConfigFile.basePath = validatedConfigFile.basePath
			? path.resolve(envInfo.workDir, validatedConfigFile.basePath)
			: envInfo.workDir;
		await ensureExistsHasPermAndIsOfType(validatedConfigFile.basePath, "rw", "dir", meta);

		// If "srcDir" is provided, we'll ensure it exists and is a directory
		if (validatedConfigFile.srcDir) {
			validatedConfigFile.srcDir = path.resolve(validatedConfigFile.basePath, validatedConfigFile.srcDir);
			await ensureExistsHasPermAndIsOfType(validatedConfigFile.srcDir, "rw", "dir", meta);
		}

		// Process each resource and file in the config file
		const processedResources = await this.processResources(
			validatedConfigFile.resources,
			validatedConfigFile.basePath,
			validatedConfigFile.outDir,
			meta,
		);
		const processedFiles = await this.processFiles(
			validatedConfigFile.files,
			validatedConfigFile.basePath,
			validatedConfigFile.srcDir,
			validatedConfigFile.outDir,
			meta,
		);

		// Validate the compiler version
		const processedVersion = await this.validateCompilerVersion(validatedConfigFile.compiler.version, meta);

		// Process the config file here (e.g., resolve paths, apply extensions, etc.)
		return new EvaluatedKipperConfigFile({
			...(extendedConfig?.raw || {}),
			basePath: validatedConfigFile.basePath,
			outDir: validatedConfigFile.outDir,
			srcDir: validatedConfigFile.srcDir,
			resources: processedResources,
			files: processedFiles,
			compiler: {
				target: validatedConfigFile.compiler.target,
				version: processedVersion,
			},
		});
	}

	private async processResources(
		resources: KipperConfig["resources"],
		basePath: KipperConfig["basePath"] & string,
		outDir: KipperConfig["outDir"],
		meta: ConfigErrorMetaData,
	): Promise<RawEvaluatedKipperConfigFile["resources"]> {
		const processedResources: RawEvaluatedKipperConfigFile["resources"] = [];
		for (const resourceItem of resources) {
			const pathMapping: boolean = resourceItem.includes(":");

			let resolvedSrcPath: string;
			let resolvedOutPath: string;
			if (pathMapping) {
				// Ensure the pathMapping is in the correct format
				if (/[^:]+:[^:]+/.test(resourceItem)) {
					const [src, out] = resourceItem.split(":");

					resolvedSrcPath = path.resolve(basePath, src);
					resolvedOutPath = path.resolve(outDir, out);
				} else {
					throw new InvalidMappingSyntaxError(`Invalid path mapping "${resourceItem}"`, meta);
				}
			} else {
				resolvedSrcPath = path.resolve(basePath, resourceItem);
				resolvedOutPath = path.resolve(outDir, resourceItem);
			}

			await ensureExistsHasPermAndIsOfType(resolvedSrcPath, "r", "file", meta);
			processedResources.push({
				src: resolvedSrcPath,
				out: resolvedOutPath,
			});
		}
		return processedResources;
	}

	private async processFiles(
		files: KipperConfig["files"],
		basePath: KipperConfig["basePath"] & string,
		src: KipperConfig["srcDir"],
		outDir: KipperConfig["outDir"],
		meta: ConfigErrorMetaData,
	): Promise<RawEvaluatedKipperConfigFile["files"]> {
		const processedFiles: RawEvaluatedKipperConfigFile["files"] = [];
		for (const filePath of files) {
			// We always use the "basePath" as the source directory is only used for modifying the output directory structure
			const resolvedSrcPath = path.resolve(basePath, filePath);
			await ensureExistsHasPermAndIsOfType(resolvedSrcPath, "r", "file", meta);

			// If a srcDir is provided, the files will be emitted with preserved directory structure relative to the srcDir
			// If not, we assume that the given filePath is relative to the basePath i.e. will be relative to the outDir
			// in the output
			// (Note: This also means we have to throw an error if srcDir is provided, but files are outside of it)
			if (src && !resolvedSrcPath.startsWith(path.resolve(src))) {
				throw new RefInvalidPathError(
					resolvedSrcPath,
					`The file is outside of the provided srcDir "${src}" and will not be emitted with preserved directory structure`,
					meta,
				);
			}
			const resolvedOutPath = path.resolve(
				outDir,
				src ? path.relative(src, path.dirname(resolvedSrcPath)) : filePath
			);

			processedFiles.push({
				src: resolvedSrcPath,
				outDir: resolvedOutPath,
			});
		}
		return processedFiles;
	}

	private async validateCompilerVersion(providedVersion: string, meta: ConfigErrorMetaData): Promise<semver.SemVer> {
		// First get the current version of the compiler - As every kipper package has to have the same version when used
		// together, we can simply import 'version' from index.ts
		const currentKipperVersion = kipperConfigVersion;

		// If '*' is provided, we'll simply resolve it to the currently installed version
		if (providedVersion.trim() === "*") {
			return semver.parse(semver.clean(currentKipperVersion))!;
		}

		// Validate the provided version
		const cleanVersion = semver.clean(providedVersion);
		if (!cleanVersion || !semver.valid(cleanVersion)) {
			throw new InvalidVersionSyntaxError(providedVersion, meta);
		}

		// Ensure the provided version is compatible with the current version
		// (Kipper will always follow the semver versioning scheme, as such we can ignore the potential 'null' return value)
		const coercedCurrentVersion = semver.coerce(currentKipperVersion)!;
		if (!semver.satisfies(coercedCurrentVersion, providedVersion)) {
			throw new IncompatibleVersionError(providedVersion, cleanVersion, currentKipperVersion, meta);
		}

		return semver.parse(cleanVersion)!;
	}
}
