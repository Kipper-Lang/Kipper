import type { AbsolutePath, FileOrDirName, SidebarDir, SidebarFile, URLPath, WebURLPath } from "./base-types";
import { finished } from "stream/promises";
import { Readable } from "stream";
import { MarkdownDocsBuilder } from "./markdown-docs-builder";
import { spawn } from "child_process";
import { ensureURLSlashes, processDirContents, removeLeadingAndTrailingSlashes, shouldCopyToRoot } from "./tools";
import * as path from "path";
import * as fsSync from "fs";
import * as fs from "fs/promises";
import * as extractZip from "extract-zip";
import { typedoc } from "./overwrite/typedoc";
import { DocsSidebar } from "./docs-sidebar";
import { RelativeDocsURLPath } from "./base-types";

export const PROJECT_ZIP_PATH: string = "https://github.com/Luna-Klatzer/Kipper/zipball/$VERSION/";

/**
 * The options for the API docs builder.
 */
export interface APIDocsBuilderOptions {
	/**
	 * The source path to the root docs.
	 */
	srcRootDocs: AbsolutePath;
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
  /**
   * The sidebars for every version of the docs.
   */
  versionSidebars: Record<string, DocsSidebar>;
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
	 * The source path to the root docs.
	 */
	srcRootDocs: AbsolutePath;
	/**
	 * The destination path to the root docs.
	 */
	destRootDocs: AbsolutePath;
	/**
	 * The source path to the version docs. Should be a sub-folder of the {@link srcRootDocs}.
	 */
	srcVersionDocs: AbsolutePath;
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
	private async typedocBuild(rootProjectPath: AbsolutePath, options: APIDocsInternalOptions) {
		// Create a new typedoc app
		const app = new typedoc.Application();

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
    // First copy the content of 'modules.md' and append it to 'index.html' - Afterwards remove 'modules.md'
    const modulesMdPath = path.resolve(`${options.apiVersionDestPath}/modules.md`);
    const indexHTMLPath = path.resolve(`${options.apiVersionDestPath}/index.html`);
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
    const fileOrDirs = await fs.readdir(options.apiVersionDestPath);
    for (const fileOrDir of fileOrDirs) {
      const fileOrDirPath = path.resolve(`${options.apiVersionDestPath}/${fileOrDir}`);
      const stat = await fs.stat(fileOrDirPath);
      if (!stat.isDirectory() && fileOrDir.endsWith(".md")) {
        // Build the markdown file
        const convertedMd = await this.renderMarkdownFile(fileOrDirPath);

        // Insert the converted markdown into the HTML file
        const htmlPath = fileOrDirPath.replace(".md", ".html");
        const sourceHTML = await fs.readFile(htmlPath, "utf-8");
        await fs.writeFile(
          htmlPath,
          sourceHTML.replace("<!-- Replace this with API docs generation -->", convertedMd),
        );

        // Remove the markdown file
        await fs.rm(fileOrDirPath);
      }
    }

    // Remove the '/modules' folder
    await fs.rm(path.resolve(`${options.apiVersionDestPath}/modules`), { recursive: true });
	}

	/**
	 * Generates the raw markdown files for the API documentation for the specified version of the Kipper git repository
	 * using TypeDoc.
	 * @param options The options to use when generating the API documentation.
	 * @protected
	 */
	protected async generateAPIMarkdownDocsFiles(options: APIDocsInternalOptions) {
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
   * Gets the parent of the specified file for the sidebar.
   *
   * This is intended for the API files, where the file name starts with the module name, like for example:
   * 'compiler.ParserASTNode.md', where the parent should be the 'compiler' module.
   * @param fileName The file name to get the parent for.
   * @param moduleSidebarItems The sidebar items for the modules.
   * @param fallback The fallback sidebar item to use if the parent could not be found. This is usually the index file.
   * @protected
   */
  protected getModuleParentSidebarFile(
    fileName: FileOrDirName, moduleSidebarItems: Array<SidebarFile>, fallback: SidebarFile,
  ): SidebarFile {
    const moduleName = fileName.split(".")[0];
    const moduleSidebarItem = moduleSidebarItems.find(
      (item) => path.basename(item.filename) === moduleName
    );

    if (!moduleSidebarItem) {
      // If the module sidebar item could not be found, return the fallback - usually the index file
      return fallback;
    }
    return moduleSidebarItem;
  }

  /**
   * Gets the sidebar item for the specified {@link DocsSidebar} or {@link SidebarDir}.
   *
   * This method works recursively.
   * @param urlPath The path to the sidebar item.
   * @param sidebar The sidebar or sidebar dir to search in.
   * @protected
   */
  protected getDocsSidebarItem(
    urlPath: RelativeDocsURLPath,
    sidebar: DocsSidebar | SidebarDir,
  ): SidebarDir | SidebarFile {
    const pathItems = removeLeadingAndTrailingSlashes(ensureURLSlashes(urlPath)).split("/");
    if (pathItems.length === 1) {
      const sidebarItem = sidebar.items.find(
        (item) => item.filename === pathItems[0]
      );

      if (sidebarItem) {
        return sidebarItem;
      } else {
        throw new Error("Invalid path - no such sidebar item exists in given object");
      }
    } else {
      // For the directory simply go one level deeper and search for the next lowest path item
      const dir = sidebar.items.find(
        (item) => item.filename === pathItems[0]
      ) as SidebarDir;

      if (dir) {
        return this.getDocsSidebarItem(pathItems.slice(1).join("/"), dir);
      } else {
        throw new Error("Invalid path - no such sidebar item exists in given object");
      }
    }
  }

	/**
   * Builds a directory with all the markdown files for the API documentation.
   *
   * This method works recursively.
   * @param dirToBuild The directory to build. This will be searched recursively.
   * @param currentRelativeURLPath The relative URL path to the current directory. This is relative to the source/dest
   * root.
   * @param moduleAPIIndexSidebarItem The index file for the sidebar that is located at the root of the API docs of the
   * package. This is the fallback sidebar item for any file that does not have a proper parent module.
   * @param moduleSidebarItems The module sidebar items for the current file. These represent the parents for all API
   * documentation files that are children of that module.
   * @param rootSidebar The root sidebar for the API docs. This is always located at the root of the entire website.
   * @param options The object storing the options for the API docs builder.
   * @protected
   */
	protected async buildMarkdownDirectory(
		dirToBuild: AbsolutePath,
		currentRelativeURLPath: RelativeDocsURLPath,
    moduleAPIIndexSidebarItem: SidebarFile,
    moduleSidebarItems: Array<SidebarFile>,
		rootSidebar: DocsSidebar,
		options: APIDocsInternalOptions,
	) {
		// Process every item in the directory
		const fileOrDirs = await fs.readdir(dirToBuild);
		for (const fileOrDir of fileOrDirs) {
			const fileOrDirPath = path.resolve(dirToBuild, fileOrDir);
			const fileOrDirURLPath = path.join(currentRelativeURLPath, fileOrDir);
			const stat = await fs.stat(fileOrDirPath);

			// Process any directory recursively
			if (stat.isDirectory()) {
				await this.buildMarkdownDirectory(
          fileOrDirPath, fileOrDirURLPath, moduleAPIIndexSidebarItem, moduleSidebarItems, rootSidebar, options
        );
			} else if (stat.isFile() && fileOrDir.endsWith(".md")) {
        const moduleSidebarItem = this.getModuleParentSidebarFile(
          fileOrDir, moduleSidebarItems, moduleAPIIndexSidebarItem
        );

				// Build the file
				options.buildData["sidebarNav"] = rootSidebar;
				await this.buildFile(
					fileOrDirURLPath,
          moduleSidebarItem, // Parent module sidebar should represent the current file
					options.destVersionDocs,
					options.destVersionDocs,
					options.version,
					options.buildData,
				);

        // Delete the source file - we don't need it anymore
        await fs.rm(fileOrDirPath);
			}
		}
	}

	/**
	 * Builds the HTML files for the API documentation by transforming the markdown files found in the specified
	 * {@link options.apiPath} located inside the {@link options.destVersionDocs} or {@link options.destRootDocs} folder.
	 * @param options The object storing the options for the API docs builder.
	 * @protected
	 */
	protected async buildAPIMarkdownDocs(options: APIDocsInternalOptions) {
    // Create the entry files and merge the templates with the API docs
    await this.createAPIDocsEntryFiles(options.apiVersionDestPath, options);

    // The callback function to get the index file of the API docs
    const getSidebarIndex = (item) => item.filename === "index.html";

    // Recursive build the markdown files in the version folder
    let docsSidebar = options.versionSidebars[options.version];
    let apiModule = <SidebarDir>this.getDocsSidebarItem(options.apiPath, docsSidebar);
    let apiModuleEntry = apiModule.items.find(getSidebarIndex) as SidebarFile;
    let moduleSidebarItems = apiModule.items as Array<SidebarFile>;
		await this.buildMarkdownDirectory(
			options.apiVersionDestPath,
			options.apiPath,
      apiModuleEntry,
			moduleSidebarItems,// Parent sidebar should represent the current file
			docsSidebar,
			options,
		);

		// Also build the markdown files in the root folder if the version is "latest"
		if (options.shouldCopyToRoot) {
      // Create the entry files and merge the templates with the API docs
      await this.createAPIDocsEntryFiles(options.apiRootDestPath, options);

      // Build the markdown files in the root folder
      docsSidebar = options.versionSidebars["root"];
      apiModule = <SidebarDir>this.getDocsSidebarItem(options.apiPath, docsSidebar);
      apiModuleEntry = apiModule.items.find(getSidebarIndex) as SidebarFile;
      moduleSidebarItems = apiModule.items as Array<SidebarFile>;
			await this.buildMarkdownDirectory(
				options.apiRootDestPath,
				options.apiPath,
        apiModuleEntry,
        moduleSidebarItems,
        docsSidebar,
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
		// First generate the API docs in Markdown format using TypeDoc
		await this.generateAPIMarkdownDocsFiles(options);

		// Afterwards, convert the Markdown files to HTML files
		await this.buildAPIMarkdownDocs(options);
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
			const srcVersionDocs = path.resolve(options.srcRootDocs, version);
			const destVersionDocs = path.resolve(options.destRootDocs, version);
			const apiVersionDestPath = path.resolve(`${destVersionDocs}/${options.apiPath}`);
			const apiRootDestPath = path.resolve(`${options.destRootDocs}/${options.apiPath}`);

			// Ensure that tre the 'latest' and 'next' version is replaced with a real version number (required for git)
			let gitVersion = version;
			if (gitVersion === "latest") {
				gitVersion = options.buildData.versions["latest"];
			} else if (gitVersion === "next") {
				gitVersion = options.buildData.versions["next"];
			}

			await this.buildSpecificAPIVersion({
				...options,
				version,
				srcVersionDocs,
				destVersionDocs,
				apiVersionDestPath,
				apiRootDestPath,
				gitVersion,
				shouldCopyToRoot: shouldCopyToRoot(version),
			});
		}
	}
}
