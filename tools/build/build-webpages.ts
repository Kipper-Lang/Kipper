/**
 * Build script for managing the docs build process.
 */
import * as ejs from "ejs";
import * as lru from "lru-cache";
import * as path from "path";
import * as showdown from "showdown";
import { constants, promises as fs, statSync } from "fs";

// Local dependencies
import type {
	AbsolutePath,
	DirTreeItem,
	PathTreeItem,
	RelativePath,
	SidebarDir,
	SidebarFile,
	SidebarTreeItem,
} from "./ext/base-types";
import type { RelativeDocsURLPath } from "./ext/base-types";
import { DocsSidebar } from "./ext/docs-sidebar";
import {
	buildEjsFiles,
	copyNonEJSFiles,
	ensureValidSrcAndDest,
	getBuildData,
	getDocsVersions,
	processDirContents,
} from "./ext/tools";
import {
  configPath,
  destRootDir,
  destRootDocs, distRootDir,
  distRootDocs,
  noAPIDocsFlag,
  prodFlag,
  rootDir,
  srcRootDir,
  srcRootDocs
} from "./ext/const-config";
import { APIDocsBuilder } from "./ext/api-doc-gen";
import { MarkdownDocsBuilder } from "./ext/markdown-docs-builder";
import { log } from "./ext/logger";
import { parcelBuild } from "./ext/parcel-build";

// @ts-ignore
// eslint-disable-next-line no-import-assign
ejs.cache = new lru({
	max: 500,
});

// Add new extension to showdown
showdown.extension("line-numbers", () => {
	// Add 'line-numbers' class to all pre html tags of the code blocks
	return [
		{
			type: "output",
			filter: (text: string) => {
				return text.replace(/<pre><code class="/g, '<pre class="line-numbers"><code class="');
			},
		},
	];
});

// Configure showdown
showdown.setFlavor("github");
showdown.setOption("metadata", true);
showdown.setOption("omitExtraWLInCodeBlocks", true);
showdown.setOption("strikethrough", true);
showdown.setOption("tables", true);
showdown.setOption("tablesHeaderId", true);
showdown.setOption("splitAdjacentBlockquotes", true);
showdown.setOption("smartIndentationFix", true);
showdown.setOption("simplifiedAutoLink", true);
showdown.setOption("simpleLineBreaks", false);
showdown.setOption("parseImgDimensions", true);
showdown.setOption("openLinksInNewWindow", false);
showdown.setOption("ghCompatibleHeaderId", true);
showdown.setOption("disableForced4SpacesIndentedSublists", true);
showdown.setOption("customizedHeaderId", true);
showdown.setOption("emoji", true);

/**
 * The docs builder class managing the build process for the Markdown documentation files.
 */
export class DocsBuilder extends MarkdownDocsBuilder {
	public constructor(docsEJSTemplate: string) {
		super(docsEJSTemplate);
	}

	/**
	 * Builds the specified nested directory and its content. This method may be called recursively.
	 * @param dirPath The path to the directory to build. This path is relative to the version specific source directory.
	 * @param localTree The tree of Markdown files from this directory to build.
	 * @param versionSrc The path to the version specific source directory.
	 * @param versionDest The path to the version specific destination directory.
	 * @param version The version of the docs.
	 * @param data The data to pass to the ejs renderer.
	 * @param sidebarHeadings The sidebar headings for the current version.
	 * @param sidebarHeadingsForCopyToDir The sidebar headings for the copy-to directory, which should be specified only
	 * if the docs should be copied to another location.
	 * @param options The additional optional arguments available for this method.
	 * @param options.copyToDir The copy-to directory, which should be specified only if the docs should be copied to
	 * another location.
	 * @param options.parentSidebarTreeItem The parent sidebar tree item of the current directory (This should usually be
	 * only specified if this is a recursive call). This is used to generate the nav path on top of the docs page.
	 * @param options.parentSidebarTreeItemForCopyToDir The parent sidebar tree item of the current directory for the
	 * copy-to directory (This should usually be only specified if this is a recursive call). This is used to generate
	 * the nav path on top of the docs page.
	 * @private
	 */
	private async buildDocsDirectory(
		dirPath: RelativePath,
		localTree: Array<PathTreeItem> | DirTreeItem,
		versionSrc: AbsolutePath,
		versionDest: AbsolutePath,
		version: string,
		data: Record<string, any>,
		sidebarHeadings: DocsSidebar,
		sidebarHeadingsForCopyToDir: DocsSidebar | undefined,
		options?: {
			parentSidebarItem?: SidebarDir;
			parentSidebarForCopyToDir?: SidebarDir;
			copyToDir?: AbsolutePath;
		},
	): Promise<void> {
		const dirSrc = path.resolve(`${versionSrc}/${dirPath}`);
		const dirDest = path.resolve(`${versionDest}/${dirPath}`);

		// The directory to copy to - may be undefined
		const copyToDir = options.copyToDir ? path.resolve(`${options.copyToDir}/${dirPath}`) : undefined;

		for (const dirItem of Array.isArray(localTree) ? localTree : localTree.items) {
			// Find the corresponding navigation bar item for this directory item (perhaps undefined, as not all pages may
			// be included in the navigation bar - for example migration notice pages are hidden unless found with specific
			// URLs)
			const findNavItem = (i: SidebarTreeItem) => {
				const srcFileName = i.filename.replace(/\.html$/, ".md");
				return srcFileName === dirItem || (typeof dirItem !== "string" && srcFileName === dirItem.name);
			};
			const navItem = options.parentSidebarItem
				? options.parentSidebarItem.items.find(findNavItem)
				: sidebarHeadings.items.find(findNavItem);
			const copyNavItem = options.parentSidebarForCopyToDir
				? options.parentSidebarForCopyToDir.items.find(findNavItem)
				: sidebarHeadingsForCopyToDir?.items.find(findNavItem);

			if (typeof dirItem !== "string") {
				// Create the directory in the destination folder
				await fs.mkdir(path.resolve(`${dirDest}/${dirItem.name}`), { recursive: true });

				// First build the top-level directory
				data["sidebarNav"] = sidebarHeadings;
				await this.buildDocsDirectory(
					dirItem.name,
					dirItem,
					dirSrc,
					dirDest,
					version,
					data,
					sidebarHeadings,
					sidebarHeadingsForCopyToDir,
					{
						parentSidebarItem: <SidebarDir>navItem,
					},
				);

				// If the version is 'latest' then also build the docs in the root folder
				if (copyToDir) {
					// Create the directory in the destination folder
					await fs.mkdir(path.resolve(`${copyToDir}/${dirItem.name}`), { recursive: true });

					data["sidebarNav"] = sidebarHeadingsForCopyToDir;
					await this.buildDocsDirectory(
						dirItem.name,
						dirItem,
						dirSrc,
						copyToDir,
						version,
						data,
						sidebarHeadings,
						sidebarHeadingsForCopyToDir,
						{
							parentSidebarItem: <SidebarDir>navItem,
						},
					);
				}
			} else {
				data["sidebarNav"] = sidebarHeadings;
				await super.buildFile(dirItem, <SidebarFile>navItem, dirSrc, dirDest, version, data);

				// If the version is 'latest' then also build the docs in the root folder
				if (copyToDir) {
					data["sidebarNav"] = sidebarHeadingsForCopyToDir;
					await super.buildFile(dirItem, <SidebarFile>copyNavItem, dirSrc, copyToDir, version, data);
				}
			}
		}
	}

	/**
	 * Builds a specific version of the docs and places them in the specified target folder with the following path:
	 * '/{docsDestRoot}/{version}/'. If the version is 'latest' then it will be both placed in the root folder and in
	 * the specific version folder, with the version being the resolved version based on the npm tag.
	 * @param docsSrcRoot The root folder of the docs. All versions should be placed there in the following format:
	 * '/{docsSrcRoot}/{version}/'.
	 * @param docsDestRoot The root folder of the docs. All versions will be placed there in the following format:
	 * '/{docsDestRoot}/{version}/'.
	 * @param version The version to build.
	 * @param data The data to pass to the ejs renderer.
	 * @returns The sidebar headings for the version. (Can be a tuple if the version is 'latest', with the second item
	 * being for the root folder.)
	 * @private
	 */
	private async buildSpecificDocsVersion(
		docsSrcRoot: string,
		docsDestRoot: string,
		version: string,
		data: Record<string, any>,
	): Promise<DocsSidebar | [DocsSidebar, DocsSidebar]> {
		const versionSrc = path.resolve(`${docsSrcRoot}/${version}`);
		const versionDest = path.resolve(`${docsDestRoot}/${version}`);

		// Ensure the src and dest folders are valid, and the dest folder exists
		await ensureValidSrcAndDest(versionSrc, versionDest);

		// If the version is 'latest' then also build the docs in the root folder
		const copyToRoot = version === "latest";

		// The contents of the src folder
		const dirContents = await fs.readdir(versionSrc);

		// Evaluate the markdown files in the src folder
		let mdFiles: Array<PathTreeItem> = await processDirContents(dirContents, versionSrc);

		// Get the headings for the sidebar, which are unique for each version
		const sidebarHeadings: DocsSidebar = await new DocsSidebar(versionSrc, versionDest, mdFiles, this).build();
		const sidebarHeadingsForRoot: DocsSidebar = copyToRoot
			? await new DocsSidebar(versionSrc, docsDestRoot, mdFiles, this).build()
			: sidebarHeadings;

		// Build the top-level and nested docs files
		await this.buildDocsDirectory(
			".",
			mdFiles,
			versionSrc,
			versionDest,
			version,
			data,
			sidebarHeadings,
			sidebarHeadingsForRoot,
			{
				copyToDir: copyToRoot ? docsDestRoot : undefined,
			},
		);

		return copyToRoot ? [sidebarHeadings, sidebarHeadingsForRoot] : sidebarHeadings;
	}

	/**
	 * Builds the documentation files for the specified src folder and places them in 'dest'.
	 * @param docsSrc The source folder containing the markdown files.
	 * @param docsDest The dest folder which should contain the HTML files.
	 * @param data The data for the EJS template.
	 */
	public async build(
		docsSrc: string,
		docsDest: string,
		data: Record<string, any>,
	): Promise<{ [v: string]: DocsSidebar }> {
		// Generate the dest folder if it does not exist
		await ensureValidSrcAndDest(docsSrc, docsDest);

		// For every version build the docs (every folder in the docs folder)
		const versions = await getDocsVersions(docsSrc);
		const versionSidebars: { [v: string]: DocsSidebar } = {};
		for (let version of versions) {
			const versionPath = path.resolve(`${docsSrc}/${version}`);

			// Ensure the path is a directory and not a file
			if (statSync(versionPath).isDirectory()) {
				// Build the docs for the specific version
				const sidebar = await this.buildSpecificDocsVersion(docsSrc, docsDest, version, data);

				// Add the sidebar/sidebars (if the version is 'latest') to the versionSidebars object
				if (Array.isArray(sidebar)) {
					versionSidebars[version] = sidebar[0];
					versionSidebars["root"] = sidebar[1];
				} else {
					versionSidebars[version] = sidebar;
				}
			}
		}

		return versionSidebars;
	}
}

/**
 * Ensures that the output directory is clean and no old files are interfering with it.
 * @param dir The build directory that should be cleaned.
 * @param exclude An array of files that should not be deleted.
 */
async function ensureCleanDirectory(dir: AbsolutePath, exclude: Array<RelativePath> = []) {
  const docsPath = path.resolve(dir);

  // Make exclude contain only absolute paths
  exclude = exclude.map((item) => path.resolve(`${docsPath}/${item}`));
  try {
    await fs.access(docsPath, constants.R_OK | constants.W_OK);

    // Delete every item in the directory except the excluded ones
    const dirContents = await fs.readdir(docsPath);
    for (let item of dirContents) {
      const absolutePath = path.resolve(`${docsPath}/${item}`);
      if (!exclude.includes(absolutePath)) {
        await fs.rm(
          path.resolve(`${docsPath}/${item}`),
          { recursive: true, force: true }
        );
      }
    }
  } catch (e) {
    return; // Directory does not exist
  }
}

(async () => {
  await ensureCleanDirectory( // Clean the docs folder (will keep the temp project dir in-tact though)
    destRootDir,
    ["temp"]
  );
  await ensureCleanDirectory(distRootDir); // Clean the dist folder

	// Get data for the ejs build
	const data = await getBuildData(configPath);

	// Build all ejs files (Convert from EJS to HTML)
	log.info("Building static EJS files");
	await buildEjsFiles(srcRootDir, destRootDir, data);

	// Build all docs files (Convert from Markdown to HTML by inserting it into an EJS template)
	const ejsDocsTemplate = path.resolve(`${srcRootDir}/partials/docs/page-template.ejs`);
	const docsBuilder = new DocsBuilder(ejsDocsTemplate);
	const versionSidebars = await docsBuilder.build(
    srcRootDocs, destRootDocs, data
  );

	log.info("Built docs for versions: " + Object.keys(versionSidebars).join(", "));

	// Build API docs
	const exclusions: Array<string> = ["0.9.2"]; // Versions to exclude from the API docs (as they are too outdated)
	const apiPath: RelativeDocsURLPath = `/api/module/`; // Path to the API docs of the @kipper/core package
	const versions: Array<string> = (await getDocsVersions(srcRootDocs)).filter((v) => !exclusions.includes(v));

	// Copy all remaining files
	await copyNonEJSFiles(srcRootDir, destRootDir);

	// Build using Parcel - API Docs are too large to be directly built using Parcel
	log.info("Building using Parcel");
	await parcelBuild(); // Builds to 'distRootDir'

	// Only if '--no-api-docs' is not specified then we build the API docs
	if (!noAPIDocsFlag) {
    const packagesToDocument = ["core", "target-ts", "target-js"];
    const packageProjectPath: RelativePath = "/kipper/";

		// Build the API docs - Injecting the API docs into the already compiled build folder
		log.info("Preparing to inject API docs for versions: " + versions.join(", "));
		const apiDocsBuilder = new APIDocsBuilder(ejsDocsTemplate, srcRootDir, destRootDir);
		await apiDocsBuilder.buildAPIDocs(versions, packagesToDocument, versionSidebars, {
			apiPath,
			docsPath: "/docs/",
			buildData: data,
      packageProjectPath,
			destRootDocs: distRootDocs,
		});
	}

  // If '--prod' is specified then we copy everything to the root of the docs folder
  if (prodFlag) {
    log.info("Copying to root folder - '--prod' flag specified");
    await fs.cp(distRootDir, rootDir, { recursive: true, force: true });
  }
})();
