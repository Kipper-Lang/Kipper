import { Path } from "./base-types";
import { log } from "./logger";
import { srcRootDir } from "./const-config";
import { existsSync } from "fs";
import * as path from "path";
import * as fs from "fs/promises";
import fetch from "node-fetch";
import { KIPPER_NPMJS_URL } from "../const";
import { getDocsVersions } from "./get-docs-version";
import { getLocales } from "./get-locales";

/**
 * Gets the data for the ejs build. This simply is a JSON file with some additional data.
 * @param dataFile The path to the data file.
 */
export async function getBuildData(dataFile: Path): Promise<Record<string, any>> {
	// Read const config.json
	log.debug("Requesting package metadata from registry.npmjs.org");
	const data = JSON.parse((await fs.readFile(dataFile)).toString());

	const resp = await fetch(KIPPER_NPMJS_URL);
	const json = await resp.json();

	return {
		...data,
		path: path,
		existsSync: existsSync,
		absoluteSrcRootDir: srcRootDir,
		latestVersion: json["dist-tags"]["latest"],
		docsVersion: undefined, // Unless we are in a docs folder, this will be undefined
		devVersion: json["dist-tags"]["next"],
		versions: {
			next: json["dist-tags"]["next"],
			latest: json["dist-tags"]["latest"],
			"0.10.4": "0.10.4",
			"0.9.2": "0.9.2",
		},
		docsVersions: await getDocsVersions(),
		locales: await getLocales(),
	};
}
