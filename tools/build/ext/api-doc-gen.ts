import { AbsolutePath, RelativePath } from "./base-types";
import * as path from "path";
import * as typedoc from "typedoc";
import * as fsSync from "fs";
import * as fs from "fs/promises";
import * as extractZip from "extract-zip";
import { finished } from "stream/promises";
import { Readable } from "stream";
import { MarkdownDocsBuilder } from "./markdown-docs-builder";

export const PROJECT_ZIP_PATH: string = "https://github.com/Luna-Klatzer/Kipper/zipball/$VERSION/";

/**
 * The API docs builder, which builds the API documentation from the Kipper source code.
 */
export class APIDocsBuilder extends MarkdownDocsBuilder {
	public srcRootDir: string;
	public destRootDir: string;

	public constructor(docsEJSTemplate: string, srcRootDir: string, destRootDir: string) {
		super(docsEJSTemplate);
		this.srcRootDir = srcRootDir;
		this.destRootDir = destRootDir;
	}

	/**
	 * Downloads a specific version of the Kipper git repository, where the environment matches the specified version.
	 * @param version The version of the Kipper git repository that should be downloaded.
	 * @param destPath The destination path where the downloaded version should be extracted to. Will create a sub-folder
	 * with the specified version name.
	 * @param url The URL to the Kipper git repository zip file. ($VERSION will be replaced with the specified version)
	 * @returns The path to the folder where the version was extracted to.
	 */
	async downloadProjectVersion(
		version: string,
		destPath: AbsolutePath,
		url: string = PROJECT_ZIP_PATH,
	): Promise<string> {
		const zipDownloadPath = url.replace("$VERSION", version);
		const targetZipPath = path.resolve(destPath, `${version}.zip`);
		const targetOutPath = path.resolve(destPath, version);

		// First download the temp zip file
		const { body } = await fetch(zipDownloadPath);
		const fileStream = fsSync.createWriteStream(targetZipPath);

		// @ts-ignore - For some reason the type definitions are wrong
		await finished(Readable.fromWeb(body).pipe(fileStream));

		// Extract all the files in the zip file to the target path
		await extractZip(targetZipPath, { dir: targetOutPath });

		// Delete the zip file
		await fs.rm(targetZipPath);

		// Return the path to the extracted folder
		return targetOutPath;
	}

	/**
	 * Ensures the specified temp folder exists, which should be used to store the various unzipped project versions.
	 * @param destVersionDocsTmp The path to the temp folder.
	 */
	async ensureTempFolderExists(destVersionDocsTmp: AbsolutePath): Promise<void> {
		// Ensure the temp folder exists
		try {
			await fs.access(destVersionDocsTmp);
		} catch (e) {
			await fs.mkdir(destVersionDocsTmp, { recursive: true });
		}
	}

	async buildSpecificAPIVersion(
		version: string,
		srcVersionDocs: AbsolutePath,
		destVersionDocs: AbsolutePath,
		apiDestPath: AbsolutePath,
		buildData: Record<string, any>,
	): Promise<void> {
		// Ensure the temp folder exists
		const temp = path.resolve(this.destRootDir, "temp");
		await this.ensureTempFolderExists(temp);

		// Download the project version to the temp folder - Before that also ensure the 'latest' and 'next' version is
		// replaced with a real version number
		if (version === "latest") {
			version = buildData.versions["latest"];
		} else if (version === "next") {
			version = buildData.versions["next"];
		}
		const destVersionDocsTmp = await this.downloadProjectVersion(`v${version}`, temp);
	}

	/**
	 * Builds the API docs for the specified versions using the package 'typedoc', which generates for '@kipper/core',
	 * '@kipper/target-js' and '@kipper/target-js' the API docs in the specified destination folder.
	 * @param versions The versions for which the API docs are generated.
	 * @param srcRootDocs The root folder of the source API docs.
	 * @param destRootDocs The root folder of the destination API docs.
	 * @param apiPath The relative path where in each version of the docs the API docs should be generated.
	 * @param buildData The build data.
	 */
	async buildAPIDocs(
		versions: Array<string>,
		srcRootDocs: AbsolutePath,
		destRootDocs: AbsolutePath,
		apiPath: RelativePath,
		buildData: Record<string, any>,
	): Promise<void> {
		for (const version of versions) {
			const srcVersionDocs = path.resolve(srcRootDocs, version);
			const destVersionDocs = path.resolve(destRootDocs, version);
			const apiDestPath = path.resolve(destVersionDocs, apiPath);

			await this.buildSpecificAPIVersion(version, srcVersionDocs, destVersionDocs, apiDestPath, buildData);
		}
	}
}
