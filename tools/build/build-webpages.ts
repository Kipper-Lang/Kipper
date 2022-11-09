/**
 * Build script for compiling ejs files.
 */
import * as ejs from "ejs";
import * as lru from "lru-cache";
import * as path from "path";
import * as showdown from "showdown";
import { existsSync, promises as fs } from "fs";
import fetch from "node-fetch";

// @ts-ignore
// eslint-disable-next-line no-import-assign
ejs.cache = new lru({
	max: 500,
});

const rootDir = path.resolve(__dirname, "..", "..");

async function validatePathArguments(src: string, dest: string): Promise<void> {
	if (!existsSync(dest)) {
		await fs.mkdir(dest);
	} else if (!(await fs.stat(dest)).isDirectory()) {
		throw new Error("Destination must be a directory");
	} else if (!(await fs.stat(src)).isDirectory()) {
		throw new Error("Source must be a directory");
	}
}

/**
 * Copies all non-ejs files to the destination folder.
 */
async function copyFiles(src: string, dest: string): Promise<void> {
	// Generate the dest folder if it does not exist
	await validatePathArguments(src, dest);

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
 * Gets the data for the ejs build.
 */
async function getBuildData(dataFile: string): Promise<Record<string, any>> {
	// Read const config.json
	const data = JSON.parse((await fs.readFile(dataFile)).toString());

	const resp = await fetch("https://registry.npmjs.org/kipper");
  const json = await resp.json();

	return {
		...data,
		version: json["dist-tags"]["latest"],
    devVersion: json["dist-tags"]["next"],
    versions: [
      json["dist-tags"]["latest"],
      "next"
    ]
	};
}

/**
 * Builds all ejs files and copies all dependencies to the {@link dest} folder.
 */
async function buildEjsFiles(src: string, dest: string, data: Record<string, any>): Promise<void> {
	// Generate the dest folder if it does not exist
	await validatePathArguments(src, dest);

	const result = await fs.readdir(src);
	for (let file of result) {
		// If the file is an ejs file compile it to HTML
		if (file.endsWith(".ejs")) {
			const htmlFile = file.replace(".ejs", ".html");
			const itemSrc = `${src}/${file}`;
			const itemDest = `${dest}/${htmlFile}`;
			const itemData = {
				filename: htmlFile, // This should only contain the filename without any directory
				filePath: htmlFile, // The path to the HTML file relative to the base URL. For root files only the filename
				srcFile: itemSrc.replace(rootDir, "").replace("\\", "/"), // The path to the source file relative to the root directory
				isDocsFile: false,
				isNestedDir: false,
				...data,
			};

			// Build ejs file
			const result: string = await ejs.renderFile(itemSrc, itemData);
			await fs.writeFile(itemDest, result);
		}
	}
}

/**
 * The metadata for a documentation file, which contains the {@link title} and {@link description}.
 */
interface DocumentMetaData {
	title: string;
	description: string;
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
 * Builds the documentation files for the specified src folder and places them in 'dest'.
 * @param src The source folder containing the markdown files.
 * @param dest The dest folder which should contain the HTML files.
 * @param data The data for the EJS template.
 */
async function buildDocs(src: string, dest: string, data: Record<string, any>): Promise<void> {
	// Generate the dest folder if it does not exist
	await validatePathArguments(src, dest);

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

	// Create new converted
	const converter = new showdown.Converter();

	// Get base Docs template
	const baseTemplate = path.resolve(`${src}/../partials/docs.ejs`);
	if (!baseTemplate) {
		throw new Error(`Docs EJS template not found. Expected '${baseTemplate}' to exist.s`);
	}

	// The contents of the src folder
	const dirContents = await fs.readdir(src);
	for (let file of dirContents) {
		// If the file is an ejs file compile it to HTML
		if (file.endsWith(".md")) {
			const htmlFile = file.replace(".md", ".html");
			const itemSrc = `${src}/${file}`;
			const itemDest = `${dest}/${htmlFile}`;
			const itemData = {
				filename: htmlFile, // This should only contain the filename without any directory
				filePath: `docs/${htmlFile}`,
				srcFile: itemSrc.replace(rootDir, "").replace("\\", "/"),
				isDocsFile: true,
				isNestedDir: true,
				...data,
			};

			// Convert markdown to HTML
			const md = (await fs.readFile(itemSrc)).toString();
			let html = converter.makeHtml(md);

			// File metadata which can be set inside the file and can overwrite the file defaults
			let fileMetadata = converter.getMetadata();

			// Set markdown content to the generated HTML
			itemData["markdownContent"] = html;

			// Evaluate title and description
			const metadata = await determineMarkdownFileMetadata(itemData["markdownContent"]);

			// File metadata can overwrite the default title and description evaluated by 'determineFileMetadata'
			itemData["title"] = fileMetadata["title"] ?? metadata.title;
			itemData["description"] = fileMetadata["description"] ?? metadata.description;

			// Build ejs file
			const result: string = await ejs.renderFile(baseTemplate, itemData);
			await fs.writeFile(itemDest, result);
		}
	}
}

(async () => {
	const src = path.resolve(`${__dirname}/../../src`);
	const dest = path.resolve(`${__dirname}/../../build`);
	const config = path.resolve(`${src}/config.json`);

	// Get data for the ejs build
	const data = await getBuildData(config);

	// Build all ejs files (Convert from EJS to HTML)
	await buildEjsFiles(src, dest, data);

	// Build all docs files (Convert from Markdown to HTML by inserting it into an EJS template)
	const srcDocs = `${src}/docs`;
	const destDocs = `${dest}/docs`;
	await buildDocs(srcDocs, destDocs, data);

	// Copy all remaining files
	await copyFiles(src, dest);
})();
