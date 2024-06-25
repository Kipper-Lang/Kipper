/**
 * Load a Kipper configuration file for the CLI.
 * @since 0.11.0
 */
import { EvaluatedKipperConfigFile, KipperConfigFile, KipperConfigInterpreter } from "@kipper/config";
import * as fs from "fs";

export let defaultConfigInterpreter = new KipperConfigInterpreter();

/**
 * Set the default configuration interpreter for the CLI.
 *
 * This can be used to inject custom behaviour into the CLI for loading Kipper configuration files.
 * @param interpreter The interpreter to use for the configuration file.
 */
export function setDefaultConfigInterpreter(interpreter: KipperConfigInterpreter): void {
	defaultConfigInterpreter = interpreter;
}

/**
 * Load a Kipper configuration file for the CLI.
 * @param options The options for the configuration file.
 * @param interpreter The interpreter to use for the configuration file.
 * @since 0.11.0
 */
export async function loadConfig(
	options:
		| {
				path: string;
				encoding: BufferEncoding;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  }
		| {
				content: string;
				encoding: BufferEncoding;
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  },
	interpreter?: KipperConfigInterpreter,
): Promise<EvaluatedKipperConfigFile> {
	interpreter = interpreter ?? defaultConfigInterpreter;
	if ("path" in options) {
		return interpreter.loadConfig(await KipperConfigFile.fromFile(options.path, options.encoding));
	} else {
		return interpreter.loadConfig(KipperConfigFile.fromString(options.content, options.encoding));
	}
}

/**
 * Load the autoconfiguration file for the CLI.
 *
 * This attempts to load a config from the following locations:
 * - `./kip-config.json`
 * - `./kipper-config.json`
 * @since 0.11.0
 */
export async function loadAutoConfig(): Promise<EvaluatedKipperConfigFile | undefined> {
	const workdir = process.cwd();

	const potentialPaths = [`${workdir}/kip-config.json`, `${workdir}/kipper-config.json`];
	for (const path of potentialPaths) {
		if (fs.existsSync(path)) {
			return loadConfig({ path, encoding: "utf8" });
		}
	}
	return undefined;
}
