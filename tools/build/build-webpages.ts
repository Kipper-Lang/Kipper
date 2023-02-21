/**
 * Build script for compiling ejs files.
 */
import * as ejs from "ejs";
import * as lru from "lru-cache";
import * as path from "path";
import * as showdown from "showdown";
import { existsSync, promises as fs } from "fs";
import fetch from "node-fetch";

const rootDir = path.resolve(__dirname, "..", "..");
const srcDir = `${rootDir}/src`;
const destDir = `${rootDir}/build`;
const configPath = `${srcDir}/config.json`;

// @ts-ignore
// eslint-disable-next-line no-import-assign
ejs.cache = new lru({
	max: 500,
});

/**
 * The metadata for a documentation file, which contains the {@link title} and {@link description}.
 */
interface DocumentMetaData {
	title: string;
	description: string;
}

// Add new extension to showdown
showdown.extension("line-numbers", () => {
	// Add 'line-numbers' class to all pre html tags of the code blocks
	return [{
		type: "output",
		filter: (text: string) => {
			return text.replace(/<pre><code class="/g, "<pre class=\"line-numbers\"><code class=\"");
		}
	}];
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
 * Removes the trailing slash from the given string if it exists.
 * @param str The string to remove the trailing slash from.
 */
function removeTrailingSlash(str: string): string {
	if (str.endsWith("/")) {
		return str.slice(0, -1);
	}
	return str;
}

/**
 * Gets the parent directory of the given absolute path.
 * @param absolutePath The absolute path to get the parent directory of.
 */
function getParentDir(absolutePath: string): string {
	return path.resolve(absolutePath).replace(path.basename(absolutePath), "");
}

/**
 * Gets the relative path from {@link currPath} to {@link rootDir} in a relative format.
 * @param rootDir The root directory.
 * @param currPath The current file path which must be a subdirectory of {@link rootDir}.
 */
function getRelativePathToSrc(rootDir: string, currPath: string): string {
	rootDir = path.resolve(rootDir) + path.sep;
	currPath = getParentDir(currPath);
	return removeTrailingSlash(
		path.relative(currPath, rootDir).replace(/\\/g, "/")
	) || ".";
}

/**
 * Get the edit URL for the given file.
 * @param docsEditURL The base URL for editing the docs.
 * @param absolutePath The absolute path to the file.
 */
function getEditURL(docsEditURL: string, absolutePath: string): string {
	return absolutePath.replace(rootDir, "").replace("\\", "/");
}

/**
 * Gets the URL path for the given absolute path by removing the root directory (In this case as it should be a build
 * file, it is the {@link destDir}).
 * @param absolutePath The absolute path to get the URL path of.
 */
function getURLPath(absolutePath: string): string {
	return absolutePath.replace(destDir, "").replace("\\", "/");
}

/**
 * Gets the parent URL path for the given absolute path by removing the root directory (In this case as it should be a
 * build file, it is the {@link destDir}).
 * @param absolutePath The absolute path to get the parent URL path of.
 */
function getURLParentPath(absolutePath: string): string {
	return removeTrailingSlash(getURLPath(getParentDir(absolutePath)));
}

/**
 * Ensures the given arguments are valid directories and creates the destination directory if it does not exist.
 * @param src The source directory of a copy operation.
 * @param dest The destination directory of a copy operation.
 */
async function ensureValidSrcAndDest(src: string, dest: string): Promise<void> {
	if (!existsSync(dest)) {
		await fs.mkdir(dest);
	} else if (!(await fs.stat(dest)).isDirectory()) {
		throw new Error("Destination must be a directory");
	}

	if (!(await fs.stat(src)).isDirectory()) {
		throw new Error("Source must be a directory");
	}
}

/**
 * Gets the data for the ejs build. This simply is a JSON file with some additional data.
 * @param dataFile The path to the data file.
 */
async function getBuildData(dataFile: string): Promise<Record<string, any>> {
	// Read const config.json
	const data = JSON.parse((await fs.readFile(dataFile)).toString());

	const resp = await fetch("https://registry.npmjs.org/kipper");
	const json = await resp.json();

	return {
		...data,
		latestVersion: json["dist-tags"]["latest"],
		docsVersion: undefined, // Unless we are in a docs folder, this will be undefined
		devVersion: json["dist-tags"]["next"],
		versions: {
			"next": json["dist-tags"]["next"],
			"latest": json["dist-tags"]["latest"],
			"0.10.0": "0.10.0",
			"0.9.2": "0.9.2",
		}
	};
}

/**
 * Copies all non-ejs files to the destination folder.
 * @param src The source directory of a copy operation.
 * @param dest The destination directory of a copy operation.
 */
async function copyFiles(src: string, dest: string): Promise<void> {
	// Generate the dest folder if it does not exist
	await ensureValidSrcAndDest(src, dest);

	const result = await fs.readdir(src);
	for (let file of result) {
		// If the file is an ejs file or a partials' folder skip it, as it will be compiled into HTML
		if (file.endsWith(".ejs") || file === "partials" || file === "docs") {
			continue;
		}

		const itemSrc = `${src}/${file}`;
		const itemDest = `${dest}/${file}`;

		if ((await fs.stat(itemSrc)).isDirectory()) {
			if (!existsSync(itemDest)) {
				await fs.mkdir(itemDest);
			}
			await copyFiles(itemSrc, itemDest);
		} else {
			await fs.copyFile(itemSrc, itemDest);
		}
	}
}

/**
 * Builds all ejs files and copies all dependencies to the {@link destDir} folder.
 * @param src The source directory of the ejs files.
 * @param dest The destination directory of the ejs files.
 * @param data The data to pass to the ejs renderer.
 */
async function buildEjsFiles(src: string, dest: string, data: Record<string, any>): Promise<void> {
	// Generate the dest folder if it does not exist
	await ensureValidSrcAndDest(src, dest);

	const result = await fs.readdir(src);
	for (let file of result) {
		// If the file is an ejs file compile it to HTML
		if (file.endsWith(".ejs")) {
			const htmlFile = file.replace(".ejs", ".html");
			const pathSrc = `${src}/${file}`;
			const pathDest = `${dest}/${htmlFile}`;
			const itemData = {
				...data,
				filename: htmlFile, // This should only contain the filename without any directory
				urlPath: getURLPath(pathDest),
				urlParentDir: getURLParentPath(pathDest),
				editPath: getEditURL(data["docsEditURL"], pathSrc),
				isDocsFile: false,
				rootDir: getRelativePathToSrc(destDir, pathDest), // Relative path to the root directory
			};

			// Build ejs file
			const result: string = await ejs.renderFile(pathSrc, itemData);
			await fs.writeFile(pathDest, result);
		}
	}
}

/**
 * Tries to determine the file metadata of the passed Markdown HTML file.
 * @param markdownHtml The HTML for the Markdown file.
 * @returns The metadata for the file.
 */
async function determineMarkdownFileMetadata(markdownHtml: string): Promise<DocumentMetaData> {
	const htmlContent = markdownHtml.replace(/\r\n/g, "\n").split("\n");

	let metaData: DocumentMetaData = { title: "", description: "" };
	let isTitle = false;
	let isDescription = false;
	for (let line of htmlContent) {
		line = line.trim();

		// If there is a h1 tag and no title has been found yet, make this the new title
		if ((line.startsWith(`<h1`) && !metaData.title) || isTitle) {
			isTitle = true;
			metaData.title += line.replace(/<\/?[0-9A-Za-z-_=/"' ]+>/g, "").trim() + " ";

			if (line.endsWith("</h1>")) {
				isTitle = false;
			}
			// If there is a p tag, no description has been found yet and a title has been already created, make this the
			// new description
		} else if ((line.startsWith(`<p`) && !metaData.description && metaData.title) || isDescription) {
			isDescription = true;
			metaData.description += line.replace(/<\/?[0-9A-Za-z-_=/"' ]+>/g, "").trim() + " ";

			if (line.endsWith("</p>")) {
				isDescription = false;
			}
		}
	}

	// Ensure any left-over whitespaces are removed
	metaData.title = metaData.title.trim();
	metaData.description = metaData.description.trim();

	return metaData;
}

/**
 * The docs builder class managing the build process for the Markdown documentation files.
 */
class DocsBuilder {
	public readonly converter: showdown.Converter;
	public readonly baseTemplate: string;

	public constructor(docsEJSTemplate: string) {
		// Create new converted - Note: Extension 'line-numbers' is disabled for now
		this.converter = new showdown.Converter(/* { extensions: ['line-numbers'] } */);

		// Get base Docs template
		this.baseTemplate = path.resolve(docsEJSTemplate);
		if (!this.baseTemplate) {
			throw new Error(`Docs EJS template not found. Expected '${this.baseTemplate}' to exist.`);
		}
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
		const fileMetadata = this.converter.getMetadata();

		// Set markdown content to the generated HTML and render it again if there are any ejs tags
		data["markdownContent"] = ejs.render(markdownHtml, data);

		// Evaluate title and description
		const metadata = await determineMarkdownFileMetadata(data["markdownContent"]);

		// File metadata can overwrite the default title and description evaluated by 'determineFileMetadata'
		data["title"] = fileMetadata["title"] ?? metadata.title;
		data["description"] = fileMetadata["description"] ?? metadata.description;

		return await ejs.renderFile(this.baseTemplate, data);
	}

	/**
	 * Builds a single docs file and writes it to the destination folder.
	 * @param mdFile The Markdown file to build.
	 * @param versionSrc The source directory of the version.
	 * @param versionDest The destination directory of the version.
	 * @param version The version of the docs.
	 * @param data The data to pass to the ejs renderer.
	 * @private
	 */
	private async buildDocsFile(
		mdFile: string, versionSrc: string, versionDest: string, version: string, data: Record<string, any>
	): Promise<void> {
		const htmlFilename = mdFile.replace(".md", ".html");
		const pathSrc = `${versionSrc}/${mdFile}`;
		const pathDest = `${versionDest}/${htmlFilename}`;
		const itemData = {
			...data,
			rootDir: getRelativePathToSrc(destDir, pathDest), // Relative path to the root directory
			filename: htmlFilename, // This should only contain the filename without any directory
			urlPath: getURLPath(pathDest),
			urlParentDir: getURLParentPath(pathDest),
			editPath: getEditURL(data["docsEditURL"], pathSrc),
			docsVersion: version,
			isDocsFile: true,
		};

		// Convert markdown to HTML
		const html = await this.renderMarkdownFile(pathSrc);

		// Build ejs file
		const result: string = await this.renderEJSFile(html, itemData);
		await fs.writeFile(pathDest, result);
	}

	/**
	 * Builds a specific version of the docs and places them in the specified target folder with the following path:
	 * '/{docsDestRoot}/{version}/'. If the version is 'latest' or 'next' then it will be both placed in the root
	 * folder and in the specific version folder, with the version being the resolved version based on the npm tag.
	 * @param docsSrcRoot The root folder of the docs. All versions should be placed there in the following format:
	 * '/{docsSrcRoot}/{version}/'.
	 * @param docsDestRoot The root folder of the docs. All versions will be placed there in the following format:
	 * '/{docsDestRoot}/{version}/'.
	 * @param version The version to build.
	 * @param data The data to pass to the ejs renderer.
	 * @private
	 */
	private async builtSpecificDocsVersion(docsSrcRoot: string, docsDestRoot: string, version: string, data: Record<string, any>): Promise<void> {
		const versionSrc = `${docsSrcRoot}/${version}`;
		const versionDest = `${docsDestRoot}/${version}`;

		// Ensure the src and dest folders are valid, and the dest folder exists
		await ensureValidSrcAndDest(versionSrc, versionDest);

		// If the version is 'latest' or 'next' then also build the docs in the root folder
		const copyToRoot = version === "latest" || version === "next";

		// The contents of the src folder
		const dirContents = await fs.readdir(versionSrc);
		for (let file of dirContents) {
			// If the file is an ejs file compile it to HTML
			if (file.endsWith(".md")) {
				await this.buildDocsFile(file, versionSrc, versionDest, version, data);
				if (copyToRoot) {
					await this.buildDocsFile(file, versionSrc, docsDestRoot, version, data);
				}
			}
		}
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
			if ((await fs.stat(versionPath)).isDirectory()) {
				// Build the docs for the specific version
				await this.builtSpecificDocsVersion(docsSrc, docsDest, version, data);
			}
		}
	}
}

(async () => {
	// Get data for the ejs build
	const data = await getBuildData(configPath);

	// Build all ejs files (Convert from EJS to HTML)
	await buildEjsFiles(srcDir, destDir, data);

	// Build all docs files (Convert from Markdown to HTML by inserting it into an EJS template)
	const docsBuilder = new DocsBuilder(`${srcDir}/partials/docs.ejs`);
	const srcDocs = `${srcDir}/docs`;
	const destDocs = `${destDir}/docs`;
	await docsBuilder.build(srcDocs, destDocs, data);

	// Copy all remaining files
	await copyFiles(srcDir, destDir);
})();
