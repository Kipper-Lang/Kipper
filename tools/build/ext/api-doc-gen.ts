import type { AbsolutePath, DocumentMetaData, FileOrDirName, WebURLPath } from "./base-types";
import { finished } from "stream/promises";
import { Readable } from "stream";
import { spawn } from "child_process";
import { determineMarkdownFileMetadata, ensureURLSlashes, shouldCopyToRoot } from "./tools";
import { typedoc } from "./overwrite/typedoc";
import { DocsSidebar } from "./docs-sidebar";
import { RelativeDocsURLPath } from "./base-types";
import { MarkdownDocsBuilder } from "./markdown-docs-builder";
import { debuggerMessage } from "./const-config";
import { log } from "./logger";
import * as cheerio from "cheerio";
import * as path from "path";
import * as fsSync from "fs";
import * as fs from "fs/promises";
import * as extractZip from "extract-zip";
import { constants } from "fs";

export const PROJECT_ZIP_PATH: string = "https://github.com/Luna-Klatzer/Kipper/zipball/$VERSION/";
export const REPLACE_TEMPLATE: string = "<!-- Replace this with API docs generation -->";

/**
 * The options for the API docs builder.
 */
export interface APIDocsBuilderOptions {
	/**
	 * The destination path to the root docs.
	 */
	destRootDocs: AbsolutePath;
	/**
	 * The relative web path for the API docs directory, where it should be located.
	 */
	apiPath: RelativeDocsURLPath;
	/**
	 * The path to the docs' directory.
	 */
	docsPath: RelativeDocsURLPath;
	/**
	 * The build data for the Markdown-to-HTML build.
	 */
	buildData: Record<string, any>;
}

/**
 * Internal options for the API docs builder to avoid requiring the arguments to be passed around everywhere.
 */
interface APIDocsInternalOptions extends APIDocsBuilderOptions {
	/**
	 * The version of the docs.
	 */
	version: string;
	/**
	 * The git version of the docs.
	 */
	gitVersion: string;
	/**
	 * Whether the docs should be copied to the root directory.
	 */
	shouldCopyToRoot: boolean;
	/**
	 * The destination path to the root docs.
	 */
	destRootDocs: AbsolutePath;
	/**
	 * The destination path to the version docs. Should be a sub-folder of the {@link destRootDocs}.
	 */
	destVersionDocs: AbsolutePath;
	/**
	 * The relative web path for the API docs directory, where it should be located.
	 *
	 * This is a relative path to the version docs root directory.
	 */
	apiPath: WebURLPath;
	/**
	 * The absolute path for the API docs output directory specific for the specified version.
	 */
	apiVersionDestPath: AbsolutePath;
	/**
	 * The absolute path for the API docs output directory.
	 */
	apiRootDestPath: AbsolutePath;
	/**
	 * The build data for the Markdown-to-HTML build.
	 */
	buildData: Record<string, any>;
}

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
	 * @protected
	 */
	protected async downloadProjectVersion(
		version: string,
		destPath: AbsolutePath,
		url: string = PROJECT_ZIP_PATH,
	): Promise<string> {
		log.debug(`Downloading Kipper source code for version '${version}'`);

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
	 * @protected
	 */
	protected async installNodeModules(projectPath: AbsolutePath): Promise<void> {
		log.debug(`Installing node modules for Kipper source code - '${projectPath}'`);

		const process = spawn(
			// Start the process with working directory equal to the project path
			"pnpm",
			["install"],
			{ cwd: projectPath, detached: true },
		);

		// Don't handle the stdout
		process.stdout.on("data", () => void 1);

		// Handle any errors though
		let hasFailed = false;
		process.stderr.on("data", (data) => {
			if (debuggerMessage.some((msg: string) => data.toString().includes(msg))) {
				return; // Ignore debugger messages - this is not an error
			}

			log.error(`Subprocess 'stderr': ${data}`);
			hasFailed = true;
		});

		// Await the process to finish
		await new Promise<void>((resolve) => {
			process.on("close", resolve);
		});

		if (hasFailed) {
			throw new Error("Failed to install node modules");
		}
		return;
	}

	/**
	 * Ensures the specified temp folder exists, which should be used to store the various unzipped project versions.
	 * @param destVersionDocsTmp The path to the temp folder.
	 * @protected
	 */
	protected async ensureTempFolderExists(destVersionDocsTmp: AbsolutePath): Promise<void> {
		// Ensure the temp folder exists
		try {
			await fs.access(destVersionDocsTmp);
		} catch (e) {
			await fs.mkdir(destVersionDocsTmp, { recursive: true });
		}
	}

	/**
	 * Generates the API documentation for the specified version of the Kipper git repository using TypeDoc.
	 *
	 * This will put the output in the specified {@link options.apiRootDestPath}.
	 * @param rootProjectPath The path to the root of the Kipper git repository. This is usually inside a temp folder.
	 * @param options The options to use when generating the API documentation.
	 * @protected
	 */
	private async typedocBuild(rootProjectPath: AbsolutePath, options: APIDocsInternalOptions): Promise<void> {
		// Create a new typedoc app
		const app = new typedoc.Application();

		log.debug(`Building API docs using typedoc for '${options.version}'`);

		// Load the project tsconfig.json
		app.options.addReader(new typedoc.TSConfigReader());

		const entryFile = `${rootProjectPath}/kipper/core/src/index.ts`;
		const tsconfig = `${rootProjectPath}/kipper/core/tsconfig.json`;
		const typedocOptions: Partial<typedoc.TypeDocOptions> = {
			entryPoints: [entryFile],
			plugin: ["typedoc-plugin-markdown"],
			tsconfig: tsconfig,
			skipErrorChecking: true,
			githubPages: false,
			basePath: rootProjectPath,
			exclude: ["**/node_modules/**"],
		};
		await app.bootstrapWithPlugins(typedocOptions);

		// The project that should be converted
		const project = app.convert();
		const outputDir = options.apiVersionDestPath;
		if (project) {
			// Rendered markdown files
			const tmpOutput = path.resolve(`${outputDir}/tmp`);
			await fs.mkdir(tmpOutput, { recursive: true });
			await app.generateDocs(project, tmpOutput);

			// Copy all files from tmp to the root folder
			await fs.cp(tmpOutput, outputDir, { recursive: true });

			// Copy the directory to the root folder if the version is "latest"
			if (options.shouldCopyToRoot) {
				const rootOutputDir = options.apiRootDestPath;

				// Copy every file from the version directory
				await fs.cp(tmpOutput, rootOutputDir, { recursive: true });
			}

			// Remove the tmp folder in the end
			await fs.rm(tmpOutput, { recursive: true });
		}
	}

	/**
	 * Creates the entry files/primary module files for the API documentation.
	 * @param apiOutputDir The path to the root of the API docs output of the typedoc build.
	 * @param options The options to use when generating the API documentation.
	 */
	async createAPIDocsEntryFiles(apiOutputDir: AbsolutePath, options: APIDocsInternalOptions): Promise<void> {
		log.debug(`Merging entry files and restructuring typedoc build for '${options.version}'`);

		// First copy the content of 'modules.md' and append it to 'index.html' - Afterwards remove 'modules.md'
		const modulesMdPath = path.resolve(`${apiOutputDir}/modules.md`);
		const indexHTMLPath = path.resolve(`${apiOutputDir}/index.html`);
		const indexMdContent = await fs.readFile(indexHTMLPath, "utf-8");

		// Append the content of 'modules.md' to 'index.md'
		await fs.writeFile(
			indexHTMLPath,
			indexMdContent.replace(
				"<!-- Replace this with API docs generation -->",
				await this.renderMarkdownFile(modulesMdPath), // Convert the markdown to HTML
			),
		);
		await fs.rm(modulesMdPath);

		// Merge the root folder .md files with the .html files
		const fileOrDirs = await fs.readdir(apiOutputDir);
		for (const fileOrDir of fileOrDirs) {
			const fileOrDirPath = path.resolve(`${apiOutputDir}/${fileOrDir}`);
			const stat = await fs.stat(fileOrDirPath);
			if (!stat.isDirectory() && fileOrDir.endsWith(".md")) {
				// Build the markdown file
				const convertedMd = await this.renderMarkdownFile(fileOrDirPath);

				// Insert the converted markdown into the HTML file
				const htmlPath = fileOrDirPath.replace(".md", ".html");
				const sourceHTML = await fs.readFile(htmlPath, "utf-8");
				await fs.writeFile(htmlPath, sourceHTML.replace("<!-- Replace this with API docs generation -->", convertedMd));

				// Remove the markdown file
				await fs.rm(fileOrDirPath);
			}
		}

		// Remove the '/modules' folder
		await fs.rm(path.resolve(`${apiOutputDir}/modules`), { recursive: true });
	}

	/**
	 * Generates the raw markdown files for the API documentation for the specified version of the Kipper git repository
	 * using TypeDoc.
	 * @param options The options to use when generating the API documentation.
	 * @protected
	 */
	protected async generateAPIMarkdownDocsFiles(options: APIDocsInternalOptions): Promise<void> {
		// Ensure the temp folder exists
		const temp = path.resolve(this.destRootDir, "temp");
		await this.ensureTempFolderExists(temp);

		// Download the project version to the temp folder
		const destVersionDocsTmp = await this.downloadProjectVersion(`v${options.gitVersion}`, temp);
		await this.installNodeModules(destVersionDocsTmp);

		// Change work directory to the project folder
		const prevWorkDir: string = process.cwd();
		process.chdir(destVersionDocsTmp);

		// Generate the API documentation using TypeDoc
		await this.typedocBuild(destVersionDocsTmp, options);

		// Change work directory back to the root folder
		process.chdir(prevWorkDir);
	}

	/**
	 * Modify the file metadata using the markdown metadata.
	 * @param html The HTML to modify.
	 * @param markdownMetadata The markdown metadata to use.
	 * @param buildData The build data to use.
	 * @param options The options to use when generating the API documentation.
	 * @protected
	 */
	protected async modifyHTMLUsingMarkdownMetadata(
		html: string,
		markdownMetadata: DocumentMetaData,
		buildData: Record<string, any>,
		options: APIDocsInternalOptions,
	): Promise<string> {
		const $ = cheerio.load(html);

		// Modify the HTML using the markdown metadata
		const title: string = `${markdownMetadata.title} - Kipper Docs v${options.gitVersion}`;
		$("title").text(title);
		$("meta[name='description']").attr("content", markdownMetadata.description);
		$("meta[property='og:title']").attr("content", title);
		$("meta[property='og:description']").attr("content", markdownMetadata.description);

		return $.html();
	}

	/**
	 * Builds the specific Markdown file and inserts it into the associated template file.
	 *
	 * This method will unlike previously build the markdown files directly using the EJS template, but use the existing
	 * Parcel-compiled files and use them as the template. This optimises the build process and reduces the memory
	 * requirements.
	 *
	 * IMPORTANT NOTE! Despite the fact that the templates and markdown files are actually in different directories, this
	 * does not matter as Parcel resolves all paths to the root of the website, which will be the same for both and as
	 * such not require any relative path changes. (Very useful of Parcel to do this!)
	 * @param fileOrDirURLPath The URL path to the file or directory to build. This is relative to the source/dest root.
	 * @param srcDir The source directory to build from.
	 * @param destDir The destination directory to build to.
	 * @param version The version of the project to build.
	 * @param moduleTemplateFiles The module parent templates, which are represented using a record, where the module
	 * name is the key and the template file path is the value. These represent the template files for all API
	 * documentation files that are children of a specific module.
	 * @param buildData The build data to use when building the markdown file.
	 * @param options The options to use when generating the API documentation.
	 * @protected
	 */
	protected async injectMarkdownIntoTemplate(
		fileOrDirURLPath: RelativeDocsURLPath,
		srcDir: AbsolutePath,
		destDir: AbsolutePath,
		version: string,
		moduleTemplateFiles: Record<FileOrDirName, string>,
		buildData: Record<string, any>,
		options: APIDocsInternalOptions,
	) {
		const templateHTML = await this.getModuleTemplateFile(fileOrDirURLPath, moduleTemplateFiles);

		// Build the markdown file and modify it based on the metadata of it
		const mdFilePath = path.resolve(`${srcDir}/${fileOrDirURLPath}`);
		const mdContent = await this.renderMarkdownFile(mdFilePath);
		const markdownMetadata = determineMarkdownFileMetadata(mdContent, true);

		// Insert the metadata into the template HTML
		const writeToContent = await this.modifyHTMLUsingMarkdownMetadata(
			templateHTML.replace(REPLACE_TEMPLATE, mdContent), markdownMetadata, buildData, options,
		);

		// Write the file as an HTML and remove the markdown file
		const writeToPath = path.resolve(
			`${destDir}/${fileOrDirURLPath.replace(".md", ".html")}`
		);
		await fs.writeFile(writeToPath, writeToContent);
	}

	/**
	 * Builds a directory with all the markdown files for the API documentation.
	 *
	 * This method works recursively.
	 * @param dirToBuild The directory to build. This will be searched recursively.
	 * @param currentRelativeURLPath The relative URL path to the current directory. This is relative to the source/dest
	 * root.
	 * @param moduleTemplateFiles The module parent templates, which are represented using a record, where the module
	 * name is the key and the template file path is the value. These represent the template files for all API
	 * documentation files that are children of a specific module.
	 * @param rootDocsVersion Whether the current API docs are the root docs version. This means that
	 * {@link options.shouldCopyToRoot} is true and the current API docs are the latest version of the API docs.
	 * @param options The object storing the options for the API docs builder.
	 * @protected
	 */
	protected async buildMarkdownDirectory(
		dirToBuild: AbsolutePath,
		currentRelativeURLPath: RelativeDocsURLPath,
		moduleTemplateFiles: Record<FileOrDirName, string>,
		rootDocsVersion: boolean,
		options: APIDocsInternalOptions,
	) {
		log.info(
			`Building API docs directory '${currentRelativeURLPath}' ` +
				`(Version: ${options.version} - CopyToRoot: ${options.shouldCopyToRoot})`,
		);

		// Process every item in the directory
		log.debug(`Reading Markdown build data from directory '${dirToBuild}'`);
		const fileOrDirs = await fs.readdir(dirToBuild);
		for (const fileOrDir of fileOrDirs) {
			const fileOrDirPath = path.resolve(dirToBuild, fileOrDir);
			const fileOrDirURLPath = ensureURLSlashes(path.join(currentRelativeURLPath, fileOrDir));
			const stat = await fs.stat(fileOrDirPath);

			// Process any directory recursively
			if (stat.isDirectory()) {
				await this.buildMarkdownDirectory(
					fileOrDirPath,
					fileOrDirURLPath,
					moduleTemplateFiles,
					rootDocsVersion,
					options,
				);
			} else if (stat.isFile() && fileOrDir.endsWith(".md")) {
				const buildDir = rootDocsVersion ? options.destRootDocs : options.destVersionDocs;

				// Build the file
				log.debug(`Building API docs file for '${fileOrDirURLPath}'`);
				await this.injectMarkdownIntoTemplate(
					fileOrDirURLPath,
					buildDir,
					buildDir,
					options.version,
					moduleTemplateFiles,
					options.buildData,
					options,
				);

				// Delete the source file - we don't need it anymore
				await fs.rm(fileOrDirPath);
			}
		}
	}

	/**
	 * Gets the module template files for the specified API docs directory.
	 * @param apiDocsPath The path to the API docs directory.
	 * @private
	 */
	private async getModuleTemplateFiles(apiDocsPath: string): Promise<Record<FileOrDirName, string>> {
		const moduleTemplateFiles: Record<FileOrDirName, AbsolutePath> = {};

		// Read in all the files in the root folder of apiDocsPath
		const fileOrDirs = await fs.readdir(apiDocsPath);
		for (const fileOrDir of fileOrDirs) {
			const fileOrDirPath = `${apiDocsPath}/${fileOrDir}`;
			const stat = await fs.stat(fileOrDirPath);

			if (stat.isFile() && fileOrDir.endsWith(".html")) {
				// Read the file and set it as the template file for the module
				const basename = path.basename(fileOrDirPath, ".html");
				moduleTemplateFiles[basename] = (await fs.readFile(fileOrDirPath)).toString();
			}
		}
		return moduleTemplateFiles;
	}

	/**
	 * Gets the template file for the specified markdown file.
	 * @param filename The filename of the markdown file.
	 * @param moduleTemplateFiles The module parent templates, which are represented using a record, where the module
	 * name is the key and the template file path is the value. These represent the template files for all API
	 * documentation files that are children of a specific module.
	 * @returns The HTML template file to use for the markdown file.
	 * @protected
	 */
	protected async getModuleTemplateFile(
		filename: string,
		moduleTemplateFiles: Record<FileOrDirName, string>,
	): Promise<string> {
		const parts = filename.split(".");
		if (parts.length >= 3) {
			const moduleName = parts[0];
			if (moduleName in moduleTemplateFiles) {
				return moduleTemplateFiles[moduleName];
			}
		}
		return moduleTemplateFiles["index"]; // Default to index.html
	}

	/**
	 * Builds the HTML files for the API documentation by transforming the markdown files found in the specified
	 * {@link options.apiPath} located inside the {@link options.destVersionDocs} or {@link options.destRootDocs} folder.
	 * @param options The object storing the options for the API docs builder.
	 * @protected
	 */
	protected async buildAPIMarkdownDocs(options: APIDocsInternalOptions) {
		log.info(`Preparing build for versions: ${options.version + (options.shouldCopyToRoot ? ", root" : "")}`);

		// Fetch the module template files before the entry points are built
		let moduleTemplateFiles = await this.getModuleTemplateFiles(options.apiVersionDestPath);

		// Create the entry files and merge the templates with the API docs
		await this.createAPIDocsEntryFiles(options.apiVersionDestPath, options);

		// Recursive build the markdown files in the version folder
		await this.buildMarkdownDirectory(
			options.apiVersionDestPath,
			options.apiPath,
			moduleTemplateFiles, // Parent sidebar should represent the current file
			false,
			options,
		);

		// Also build the markdown files in the root folder if the version is "latest"
		if (options.shouldCopyToRoot) {
			// Fetch the module template files before the entry points are built
			moduleTemplateFiles = await this.getModuleTemplateFiles(options.apiVersionDestPath);

			// Create the entry files and merge the templates with the API docs
			await this.createAPIDocsEntryFiles(options.apiRootDestPath, options);

			// Build the markdown files in the root folder
			await this.buildMarkdownDirectory(
				options.apiRootDestPath,
				options.apiPath,
				moduleTemplateFiles,
				true,
				options,
			);
		}
	}

	/**`
	 * Builds the API documentation for the specified version of the Kipper git repository.
	 * @param options The object storing the options for the API docs builder.
	 * @protected
	 */
	protected async buildSpecificAPIVersion(options: APIDocsInternalOptions): Promise<void> {
		log.info(`Building API docs for version '${options.version}'`);

		// First generate the API docs in Markdown format using TypeDoc
		await this.generateAPIMarkdownDocsFiles(options);

		// Afterwards, convert the Markdown files to HTML files
		await this.buildAPIMarkdownDocs(options);
	}

	/**
	 * Ensures that the output directory is clean and no old files are interfering with it.
	 * @param dir The build directory that should be cleaned.
	 */
	protected async ensureCleanDirectory(dir: AbsolutePath) {
		const docsPath = path.resolve(`${dir}/docs`);
		try {
			await fs.access(docsPath, constants.R_OK | constants.W_OK);
			await fs.rm(docsPath, { recursive: true, force: true });
		} catch (e) {
			return; // Directory does not exist
		}
	}

	/**
	 * Builds the API docs for the specified versions using the package 'typedoc', which generates for '@kipper/core',
	 * '@kipper/target-js' and '@kipper/target-js' the API docs in the specified destination folder.
	 * @param versions The array of versions that should be built.
	 * @param versionSidebars List of all sidebars generated for the static documentation. The {@link APIDocsBuilder}
	 * will use the information stored for every version to generate the sidebar for the API docs.
	 * @param options The object storing the options for the API docs builder.
	 * @param options.srcRootDocs The root folder of the source API docs.
	 * @param options.destRootDocs The root folder of the destination API docs.
	 * @param options.apiPath The relative path where in each version of the docs the API docs should be generated.
	 * @param options.buildData The build data.
	 */
	public async buildAPIDocs(
		versions: Array<string>,
		versionSidebars: { [v: string]: DocsSidebar },
		options: APIDocsBuilderOptions,
	): Promise<void> {
		for (const version of versions) {
			const destVersionDocs: AbsolutePath = path.resolve(options.destRootDocs, version);
			const apiVersionDestPath: AbsolutePath = path.resolve(`${destVersionDocs}/${options.apiPath}`);
			const apiRootDestPath: AbsolutePath = path.resolve(`${options.destRootDocs}/${options.apiPath}`);

			// Ensure that tre the 'latest' and 'next' version is replaced with a real version number (required for git)
			let gitVersion = version;
			if (gitVersion === "latest") {
				gitVersion = options.buildData.versions["latest"];
			} else if (gitVersion === "next") {
				gitVersion = options.buildData.versions["next"];
			}

			await this.ensureCleanDirectory(apiVersionDestPath);
			await this.buildSpecificAPIVersion({
				...options,
				version,
				destVersionDocs,
				apiVersionDestPath,
				apiRootDestPath,
				gitVersion,
				shouldCopyToRoot: shouldCopyToRoot(version),
			});
		}
	}
}
