import { AbsolutePath, RelativePath } from "./base-types";
import * as path from "path";
import * as typedoc from "typedoc";
import * as fsSync from "fs";
import * as fs from "fs/promises";
import * as extractZip from "extract-zip";
import { finished } from "stream/promises";
import { Readable } from "stream";
import { MarkdownDocsBuilder } from "./markdown-docs-builder";
import { spawn } from "child_process";

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

    // Skip this step if the version is already down/home/luna/.docker/loaded
    try {
      await fs.access(targetOutPath);

      // Return the first child folder of the target out path
      const fileOrDirs = await fs.readdir(targetOutPath);
      const firstChild = path.resolve(targetOutPath, fileOrDirs[0]);
      await fs.access(firstChild);

      return firstChild;
    } catch (e) {
      // Ignore
    }

		// First download the temp zip file
		const { body } = await fetch(zipDownloadPath);
		const fileStream = fsSync.createWriteStream(targetZipPath);

		// @ts-ignore - For some reason the type definitions are wrong
		await finished(Readable.fromWeb(body).pipe(fileStream));

		// Extract all the files in the zip file to the target path
		await extractZip(targetZipPath, { dir: targetOutPath });

		// Delete the zip file
		await fs.rm(targetZipPath);

		// Return the path to the extracted project version - the first child folder is the git url with the commit hash
    const fileOrDirs = await fs.readdir(targetOutPath);
    return path.resolve(targetOutPath, fileOrDirs[0]);
	}

  /**
   * Installs the node modules in the specified project path using PNPM.
   * @param projectPath
   */
  async installNodeModules(projectPath: AbsolutePath): Promise<void> {
    const process = spawn(
      // Start the process with working directory equal to the project path
      "pnpm", ["install"], { cwd: projectPath, detached: true }
    );

    // Don't handle the stdout
    process.stdout.on('data', () => void 1);

    // Handle any errors though
    let hasFailed = false;
    process.stderr.on('data', (data) => {
      const debuggerMessage = [
        "Debugger listening on ws://",
        "For help, see: https://nodejs.org/en/docs/inspector",
        "Debugger attached.",
        "Waiting for the debugger to disconnect...",
      ];

      if (debuggerMessage.some((msg: string) => data.toString().includes(msg))) {
        return; // Ignore debugger messages - this is not an error
      }

      console.error(`Subprocess 'stderr': ${data}`);
      hasFailed = true;
    });

    // Await the process to finish
    await new Promise<void>( (resolve) => {
      process.on('close', resolve);
    });

    if (hasFailed) {
      throw new Error("Failed to install node modules");
    }
    return;
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

  /**
   * Builds the API documentation for the specified version of the Kipper git repository.
   * @param version The version of the Kipper git repository that should be downloaded.
   * @param srcRootDocs The path to the root folder of the primary documentation, where the input should be read from.
   * @param destRootDocs The path to the root folder of the primary documentation, where the output should be placed.
   * @param srcVersionDocs The path to the primary documentation of the specified version.
   * @param destVersionDocs The path to the destination documentation of the specified version.
   * @param apiDestPath The path to the destination folder where the API documentation should be placed.
   * @param buildData The build data for the build process.
   */
	async buildSpecificAPIVersion(
		version: string,
    srcRootDocs: AbsolutePath,
    destRootDocs: AbsolutePath,
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
    let copyToRoot: boolean = false;
		if (version === "latest") {
      copyToRoot = true;
			version = buildData.versions["latest"];
		} else if (version === "next") {
			version = buildData.versions["next"];
		}
		const destVersionDocsTmp = await this.downloadProjectVersion(`v${version}`, temp);
    await this.installNodeModules(destVersionDocsTmp);

    // Create a new typedoc app
    const app = new typedoc.Application();

    // Load the project tsconfig.json
    app.options.addReader(new typedoc.TSConfigReader());

    // Change work directory to the project folder
    const prevWorkDir: string = process.cwd();
    process.chdir(destVersionDocsTmp);

    const entryFile = `${destVersionDocsTmp}/kipper/core/src/index.ts`;
    const tsconfig = `${destVersionDocsTmp}/kipper/core/tsconfig.json`;
    const options: Partial<typedoc.TypeDocOptions> = {
      entryPoints: [entryFile],
      plugin: ["typedoc-plugin-markdown"],
      tsconfig: tsconfig,
      skipErrorChecking: true,
      githubPages: false,
      basePath: destVersionDocsTmp,
      exclude: ["**/node_modules/**"],
    };
    await app.bootstrapWithPlugins(options);

    // The project that should be converted
    const project = app.convert();
    const outputDir = path.resolve(`${destVersionDocs}/${apiDestPath}`);
    if (project) {
      // Rendered markdown files
      const tmpOutput = path.resolve(`${outputDir}/tmp`);
      await fs.mkdir(tmpOutput, { recursive: true });
      await app.generateDocs(project, tmpOutput);

      // Copy all files from tmp to the root folder
      await fs.cp(tmpOutput, outputDir, { recursive: true });

      // Copy the directory to the root folder if the version is "latest" or "next"
      if (copyToRoot) {
        const rootOutputDir = path.resolve(`${destRootDocs}/${apiDestPath}`);

        // Copy every file from the version directory
        await fs.cp(tmpOutput, rootOutputDir, { recursive: true });
      }

      // Remove the tmp folder in the end
      await fs.rm(tmpOutput, { recursive: true });
    }

    // Change work directory back to the root folder
    process.chdir(prevWorkDir);
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

			await this.buildSpecificAPIVersion(
        version, srcRootDocs, destRootDocs, srcVersionDocs, destVersionDocs, apiDestPath, buildData
      );
		}
	}
}
