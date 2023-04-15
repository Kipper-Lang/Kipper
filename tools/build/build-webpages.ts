/**
 * Build script for compiling ejs files.
 */
import * as ejs from "ejs";
import * as lru from "lru-cache";
import * as path from "path";
import * as showdown from "showdown";
import * as yaml from "js-yaml";
import { promises as fs, statSync } from "fs";

// Local dependencies
import type {
	AbsolutePath,
	DirTreeItem,
	Path,
	PathTreeItem,
	RelativePath,
	SidebarDir,
	SidebarFile,
	SidebarTreeItem,
} from "./ext/base-types";
import { DocsSidebar } from "./ext/docs-sidebar";
import {
	buildEjsFiles,
	copyFiles,
	determineMarkdownFileMetadata,
	ensureURLSlashes,
	ensureValidSrcAndDest,
	getBuildData,
	getEditURL,
	getRelativePathToSrc,
	getURLParentPath,
	getURLPath,
} from "./ext/tools";
import { configPath, destRootDir, destRootDocs, ejsOptions, srcRootDir, srcRootDocs } from "./ext/const-config";

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
export class DocsBuilder {
	public readonly converter: showdown.Converter;
	public readonly baseTemplate: string;

	public constructor(docsEJSTemplate: string) {
		// Create new converted - Note: Extension 'line-numbers' is disabled for now
		this.converter = new showdown.Converter({ metadata: true /* extensions: ['line-numbers'] } */ });

		// Get base Docs template
		this.baseTemplate = path.resolve(docsEJSTemplate);
		if (!this.baseTemplate) {
			throw new Error(`Docs EJS template not found. Expected '${this.baseTemplate}' to exist.`);
		}
	}

	/**
	 * Gets the metadata of the last markdown file that was converted to HTML.
	 * @private
	 */
	public getMetadataOfLastFile(): showdown.Metadata {
		const raw = this.converter.getMetadata(true);
		if (!raw) {
			return {};
		}
		return yaml.load(raw);
	}

	/**
	 * Render the passed Markdown file to HTML.
	 * @param filePath The path to the Markdown file.
	 * @returns The generated HTML.
	 * @private
	 */
	private async renderMarkdownFile(filePath: string): Promise<string> {
		const md = (await fs.readFile(filePath)).toString();
		return this.converter.makeHtml(md);
	}

	/**
	 * Renders the EJS file with the passed data and the generated HTML from the Markdown file.
	 * @param markdownHtml The generated HTML from the Markdown file that should be inserted into
	 * the EJS {@link this.baseTemplate base template}.
	 * @param data The data to pass to the EJS renderer.
	 * @private
	 */
	private async renderEJSFile(markdownHtml: string, data: Record<string, any>): Promise<string> {
		// File metadata which can be set inside the file and can overwrite the file defaults
		const fileMetadata = this.getMetadataOfLastFile();

		// Set markdown content to the generated HTML and render it again if there are any ejs tags
		data["markdownContent"] = ejs.render(markdownHtml, data, ejsOptions);

		// Evaluate title and description
		const metadata = determineMarkdownFileMetadata(data["markdownContent"]);

		// File metadata can overwrite the default title and description evaluated by 'determineFileMetadata'
		data["title"] = fileMetadata["title"] ?? metadata.title;
		data["description"] = fileMetadata["description"] ?? metadata.description;

		return await ejs.renderFile(this.baseTemplate, data, ejsOptions);
	}

	/**
	 * Gets the build data for a single docs file.
	 * @param htmlFilename The filename of the output HTML file.
	 * @param pathSrc The path to the source file.
	 * @param pathDest The path to the destination file.
	 * @param version The version of the docs file.
	 * @param existingData The existing data to merge with.
	 * @param navTreeItem The nav tree item storing the data of this item.
	 * @private
	 */
	private getDocsFileBuildData(
		htmlFilename: string,
		pathSrc: string,
		pathDest: string,
		version: string,
		existingData: Record<string, any>,
		navTreeItem: SidebarFile,
	): Record<string, any> {
		return {
			...existingData,
			rootDir: ensureURLSlashes(getRelativePathToSrc(destRootDir, pathDest)), // Relative path to the root directory
			filename: htmlFilename, // This should only contain the filename without any directory
			urlPath: getURLPath(pathDest), // URL Path: Relative path from the dest root
			urlParentDir: getURLParentPath(pathDest), // URL Path: Relative path from the dest root
			editPath: getEditURL(existingData["docsEditURL"], pathSrc), // Edit path: Relative path from the source root
			docsVersion: version,
			thisNavTreeItem: navTreeItem,
			isDocsFile: true,
			isHiddenFile: navTreeItem === undefined,
			isIndexFile: navTreeItem && navTreeItem.filename === "index.html",
			dropdownTitle: navTreeItem?.dropdownTitle,
		};
	}

	/**
	 * Builds a single docs file and writes it to the destination folder.
	 * @param mdFile The Markdown file to build.
	 * @param navTreeItem
	 * @param versionSrc The source directory of the version.
	 * @param versionDest The destination directory of the version.
	 * @param version The version of the docs.
	 * @param data The data to pass to the ejs renderer.
	 * @private
	 */
	private async buildDocsFile(
		mdFile: string,
		navTreeItem: SidebarFile,
		versionSrc: string,
		versionDest: string,
		version: string,
		data: Record<string, any>,
	): Promise<void> {
		const htmlFilename = mdFile.replace(".md", ".html");
		const pathSrc = path.resolve(`${versionSrc}/${mdFile}`);
		const pathDest = path.resolve(`${versionDest}/${htmlFilename}`);
		const itemData = this.getDocsFileBuildData(htmlFilename, pathSrc, pathDest, version, data, navTreeItem);

		// Convert markdown to HTML
		const html = await this.renderMarkdownFile(pathSrc);

		// Build ejs file
		const result: string = await this.renderEJSFile(html, itemData);
		await fs.writeFile(pathDest, result);
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
				const srcFileName = i.filename.replace(".html", ".md");
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
				await this.buildDocsFile(dirItem, <SidebarFile>navItem, dirSrc, dirDest, version, data);

				// If the version is 'latest' then also build the docs in the root folder
				if (copyToDir) {
					data["sidebarNav"] = sidebarHeadingsForCopyToDir;
					await this.buildDocsFile(dirItem, <SidebarFile>copyNavItem, dirSrc, copyToDir, version, data);
				}
			}
		}
	}

	/**
	 * Returns a tree representing the content of the specified directory, which should represent the data returned from
	 * a {@link fs.readdir} call.
	 * @param dirContents The contents of the directory to process.
	 * @param dirPath The absolute path of the current directory.
	 * @private
	 */
	private async processDirContents(dirContents: Array<string>, dirPath: AbsolutePath): Promise<Array<PathTreeItem>> {
		const mdFiles = [];
		for (const fileOrDir of dirContents) {
			if (fileOrDir.endsWith(".md")) {
				mdFiles.push(<Path>fileOrDir);
			}

			const absolutePath: AbsolutePath = path.resolve(`${dirPath}/${fileOrDir}/`);
			if (statSync(absolutePath).isDirectory()) {
				// Process nested directories recursively
				const pathItems = await this.processDirContents(await fs.readdir(absolutePath), absolutePath);
				mdFiles.push(<DirTreeItem>{
					name: fileOrDir,
					items: pathItems,
				});

				// Ensure there is an index.md file in the directory
				if (!pathItems.find((i) => i === "index.md" || (typeof i !== "string" && i.name === "index.md"))) {
					throw new Error(`No index.md file found in directory '${absolutePath}'`);
				}
			}
		}
		return mdFiles;
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
	 * @private
	 */
	private async buildSpecificDocsVersion(
		docsSrcRoot: string,
		docsDestRoot: string,
		version: string,
		data: Record<string, any>,
	): Promise<void> {
		const versionSrc = path.resolve(`${docsSrcRoot}/${version}`);
		const versionDest = path.resolve(`${docsDestRoot}/${version}`);

		// Ensure the src and dest folders are valid, and the dest folder exists
		await ensureValidSrcAndDest(versionSrc, versionDest);

		// If the version is 'latest' then also build the docs in the root folder
		const copyToRoot = version === "latest" || version === "next";

		// The contents of the src folder
		const dirContents = await fs.readdir(versionSrc);

		// Evaluate the markdown files in the src folder
		let mdFiles: Array<PathTreeItem> = await this.processDirContents(dirContents, versionSrc);

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
	}

	/**
	 * Builds the documentation files for the specified src folder and places them in 'dest'.
	 * @param docsSrc The source folder containing the markdown files.
	 * @param docsDest The dest folder which should contain the HTML files.
	 * @param data The data for the EJS template.
	 */
	public async build(docsSrc: string, docsDest: string, data: Record<string, any>): Promise<void> {
		// Generate the dest folder if it does not exist
		await ensureValidSrcAndDest(docsSrc, docsDest);

		// For every version build the docs (every folder in the docs folder)
		const versions = await fs.readdir(docsSrc);
		for (let version of versions) {
			const versionPath = path.resolve(`${docsSrc}/${version}`);

			// Ensure the path is a directory and not a file
			if (statSync(versionPath).isDirectory()) {
				// Build the docs for the specific version
				await this.buildSpecificDocsVersion(docsSrc, docsDest, version, data);
			}
		}
	}
}

(async () => {
	// Get data for the ejs build
	const data = await getBuildData(configPath);

	// Build all ejs files (Convert from EJS to HTML)
	await buildEjsFiles(srcRootDir, destRootDir, data);

	// Build all docs files (Convert from Markdown to HTML by inserting it into an EJS template)
	const docsBuilder = new DocsBuilder(`${srcRootDir}/partials/docs/page.ejs`);
	await docsBuilder.build(srcRootDocs, destRootDocs, data);

	// Copy all remaining files
	await copyFiles(srcRootDir, destRootDir);
})();
