import * as showdown from "showdown";
import * as ejs from "ejs";
import * as path from "path";
import * as yaml from "js-yaml";
import { promises as fs } from "fs";
import { destRootDir, ejsOptions } from "./const-config";
import {
	determineMarkdownFileMetadata,
	ensureURLSlashes,
	getEditURL,
	getRelativePathToSrc,
	getURLParentPath,
	getURLPath,
} from "./tools";
import { AbsolutePath, RelativePath, SidebarFile } from "./base-types";
import { log } from "./logger";

/**
 * The Markdown docs builder, which converts Markdown files to HTML and renders them with the EJS template.
 */
export class MarkdownDocsBuilder {
	public readonly converter: showdown.Converter;
	public readonly baseTemplate: string;

	public constructor(docsEJSTemplate: string, converter: showdown.Converter) {
		this.converter = converter;

		// Get base Docs template
		this.baseTemplate = path.resolve(docsEJSTemplate);
		if (!this.baseTemplate) {
			throw new Error(`Docs EJS template not found. Expected '${this.baseTemplate}' to exist.`);
		}
	}

	/**
	 * Gets the metadata of the last markdown file that was converted to HTML.
	 * @protected
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
	 * @protected
	 */
	protected async renderMarkdownFile(filePath: string): Promise<string> {
		const md = (await fs.readFile(filePath)).toString();
		return this.converter.makeHtml(md);
	}

	/**
	 * Renders the EJS file with the passed data and the generated HTML from the Markdown file.
	 * @param markdownHtml The generated HTML from the Markdown file that should be inserted into
	 * the EJS {@link this.baseTemplate base template}.
	 * @param fileMetadata The metadata of the Markdown file.
	 * @param data The data to pass to the EJS renderer.
	 * @protected
	 */
	protected async renderEJSFile(
		markdownHtml: string,
		fileMetadata: showdown.Metadata,
		data: Record<string, any>,
	): Promise<string> {
		// Set markdown content to the generated HTML and render it again if there are any ejs tags
		data["htmlMarkdownContent"] = ejs.render(markdownHtml, data, ejsOptions);

		// Evaluate title and description
		const metadata = determineMarkdownFileMetadata(data["htmlMarkdownContent"]);

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
	 * @protected
	 */
	protected getFileBuildData(
		htmlFilename: string,
		pathSrc: string,
		pathDest: string,
		version: string,
		existingData: Record<string, any>,
		navTreeItem: SidebarFile,
	): Record<string, any> {
		const rootDir = ensureURLSlashes(getRelativePathToSrc(destRootDir, pathDest));

		return {
			...existingData,
			rootDir: rootDir, // Relative path to the root directory
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
			locale: existingData["locales"]["default"],
			lc: "",
			rlc: rootDir,
		};
	}

	/**
	 * Builds a single docs file and writes it to the destination folder.
	 * @param mdFile The Markdown file to build.
	 * @param navTreeItem The nav tree item storing the data of this item.
	 * @param versionSrc The source directory of the version.
	 * @param versionDest The destination directory of the version.
	 * @param version The version of the docs.
	 * @param data The data to pass to the ejs renderer.
	 * @protected
	 */
	protected async buildFile(
		mdFile: RelativePath,
		navTreeItem: SidebarFile,
		versionSrc: AbsolutePath,
		versionDest: AbsolutePath,
		version: string,
		data: Record<string, any>,
	): Promise<void> {
		const htmlFilename = mdFile.replace(/\.md$/, ".html");
		const pathSrc = path.resolve(`${versionSrc}/${mdFile}`);
		const pathDest = path.resolve(`${versionDest}/${htmlFilename}`);
		const itemData = this.getFileBuildData(htmlFilename, pathSrc, pathDest, version, data, navTreeItem);

		// Convert markdown to HTML
		const html = await this.renderMarkdownFile(pathSrc);
		const fileMetadata = this.getMetadataOfLastFile();

		// Build ejs file
		const result: string = await this.renderEJSFile(html, fileMetadata, itemData);
		await fs.writeFile(pathDest, result);

		log.debug(`Successfully built Docs Markdown file '${mdFile}' - Wrote to '${pathDest}'`);
	}
}
