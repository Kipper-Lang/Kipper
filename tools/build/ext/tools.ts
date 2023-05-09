import {
	AbsolutePath,
	DirTreeItem,
	DocumentMetaData,
	FileOrDirName,
	Path,
	PathTreeItem,
	RelativeDocsURLPath,
	RelativePath,
	SimplePath,
	URLPath,
	WebURLPath,
} from "./base-types";
import { log } from "./logger";
import { destRootDir, ejsOptions, srcRootDir, srcRootDocs } from "./const-config";
import { existsSync, statSync } from "fs";
import * as cheerio from "cheerio";
import * as path from "path";
import * as fs from "fs/promises";
import * as ejs from "ejs";
import * as showdown from "showdown";
import fetch from "node-fetch";

/**
 * Returns whether 'copyToRoot' is true for the specified version.
 * @param version
 */
export function shouldCopyToRoot(version: string): boolean {
	return version === "latest";
}

/**
 * Ensures that the given URL does not use Windows-style slashes and has URL-conforming slashes.
 * @param url The URL to ensure the correct slashes are used.
 */
export function ensureURLSlashes(url: URLPath): URLPath {
	return url.replace(/\\/g, "/");
}

export function removeLeadingAndTrailingSlashes(str: URLPath): URLPath {
	return removeTrailingSlash(removeLeadingSlash(str));
}

/**
 * Removes the trailing slash from the given string if it exists.
 *
 * If the string is only one character long and equal to a slash, it will not be removed.
 * @param str The string to remove the trailing slash from.
 */
export function removeTrailingSlash(str: Path): Path {
	if (str.length === 1) return str; // Don't remove the trailing slash if it is the only character in the string.

	if (str.endsWith("/") || str.endsWith("\\")) {
		return str.slice(0, -1);
	}
	return str;
}

/**
 * Removes the leading slash from the given string if it exists.
 *
 * This will unlike {@link removeTrailingSlash} still remove the slash even if it is the only character in the string.
 * @param str The string to remove the leading slash from.
 */
export function removeLeadingSlash(str: Path): Path {
	if (str.startsWith("/") || str.startsWith("\\")) {
		return str.slice(1);
	}
	return str;
}

/**
 * Gets the parent directory of the given absolute path.
 * @param absolutePath The absolute path to get the parent directory of.
 */
export function getParentDir(absolutePath: AbsolutePath): AbsolutePath {
	return path.resolve(absolutePath).replace(path.basename(absolutePath), "");
}

/**
 * Gets the relative path from {@link currPath} to {@link rootDir} in a relative format.
 * @param rootDir The root directory.
 * @param currPath The current file path which must be a subdirectory of {@link rootDir}.
 */
export function getRelativePathToSrc(rootDir: AbsolutePath, currPath: AbsolutePath): RelativePath {
	rootDir = path.resolve(rootDir) + path.sep;
	currPath = getParentDir(currPath);
	return removeTrailingSlash(path.relative(currPath, rootDir)) || ".";
}

/**
 * Gets the URL path for the given absolute path by removing the root directory.
 * @param absolutePath The absolute path to get the URL path of.
 * @param rootDir The root directory to remove from the absolute path. Per default, it will be the {@link destRootDir},
 * as this function primarily is used for getting URLs of compiled output files that will be accessed in the browser.
 */
export function getURLPath(absolutePath: AbsolutePath, rootDir: AbsolutePath = destRootDir): RelativeDocsURLPath {
	return ensureURLSlashes(absolutePath.replace(rootDir, ""));
}

/**
 * Get the edit URL for the given file. This is the URL to the file on GitHub and uses {@link srcRootDir} to get the
 * relative path to the file.
 * @param docsEditURL The base URL for editing the docs.
 * @param absolutePath The absolute path to the file.
 */
export function getEditURL(docsEditURL: WebURLPath, absolutePath: AbsolutePath): WebURLPath {
	return `${docsEditURL}/src${getURLPath(absolutePath, srcRootDir)}`;
}

/**
 * Gets the parent URL path for the given absolute path by removing the root directory (In this case as it should be a
 * build file, it is the {@link destRootDir}).
 * @param absolutePath The absolute path to get the parent URL path of.
 */
export function getURLParentPath(absolutePath: string): RelativeDocsURLPath {
	return removeTrailingSlash(getURLPath(getParentDir(absolutePath)));
}

/**
 * Ensures the given arguments are valid directories and creates the destination directory if it does not exist.
 * @param src The source directory of a copy operation.
 * @param dest The destination directory of a copy operation.
 */
export async function ensureValidSrcAndDest(src: AbsolutePath, dest: AbsolutePath): Promise<void> {
	if (!existsSync(dest)) {
		await fs.mkdir(dest);
	} else if (!statSync(dest).isDirectory()) {
		throw new Error("Destination must be a directory");
	} else if (!statSync(src).isDirectory()) {
		throw new Error("Source must be a directory");
	}
}

/**
 * Gets the data for the ejs build. This simply is a JSON file with some additional data.
 * @param dataFile The path to the data file.
 */
export async function getBuildData(dataFile: Path): Promise<Record<string, any>> {
	// Read const config.json
	log.debug("Requesting package metadata from registry.npmjs.org");
	const data = JSON.parse((await fs.readFile(dataFile)).toString());

	const resp = await fetch("https://registry.npmjs.org/kipper");
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
			"0.10.0": "0.10.0",
			"0.9.2": "0.9.2",
		},
		docsVersions: await (async () => {
			// Get all directories in the docs folder that are not current, next, or latest,
			let entries = await fs.readdir(srcRootDocs);

			// Filter out  non-directories
			entries = entries.filter((entry) => {
				const entryPath = path.join(srcRootDocs, entry);
				return statSync(entryPath).isDirectory();
			});

			return entries;
		})(),
	};
}

/**
 * Copies all non-ejs files to the destination folder.
 * @param src The source directory of a copy operation.
 * @param dest The destination directory of a copy operation.
 */
export async function copyNonEJSFiles(src: AbsolutePath, dest: AbsolutePath): Promise<void> {
	// Generate the dest folder if it does not exist
	await ensureValidSrcAndDest(src, dest);

	const result = await fs.readdir(src);
	for (let fileOrDir of result) {
		// If the file is an ejs file, ejs partial or in the docs, skip it as it will be compiled into HTML
		// in a different step
		if (fileOrDir.endsWith(".ejs") || fileOrDir === "partials" || fileOrDir === "docs") {
			continue;
		}

		const itemSrc = `${src}/${fileOrDir}`;
		const itemDest = `${dest}/${fileOrDir}`;

		if (statSync(itemSrc).isDirectory()) {
			if (!existsSync(itemDest)) {
				await fs.mkdir(itemDest);
			}
			await copyNonEJSFiles(itemSrc, itemDest);
		} else {
			await fs.copyFile(itemSrc, itemDest);
		}
	}
}

/**
 * Builds all ejs files and copies all dependencies to the {@link destRootDir} folder.
 * @param src The source directory of the ejs files.
 * @param dest The destination directory of the ejs files.
 * @param data The data to pass to the ejs renderer.
 */
export async function buildEjsFiles(src: AbsolutePath, dest: AbsolutePath, data: Record<string, any>): Promise<void> {
	// Generate the dest folder if it does not exist
	await ensureValidSrcAndDest(src, dest);

	// Content of the root src folder
	const result: Array<FileOrDirName> = await fs.readdir(src);

	// First get all the markdown files and add them to a list
	const mdFiles: Array<SimplePath> = [];
	for (let file of result) {
		if (file.endsWith(".md")) {
			mdFiles.push(file);
		}
	}

	// The converter for the markdown files
	const markdownConverter = new showdown.Converter({ metadata: true /* extensions: ['line-numbers'] } */ });

	// Secondly process the EJS files and insert the Markdown content (if it exists for the specific file)
	for (let file of result) {
		// If the file is an ejs file compile it to HTML
		if (file.endsWith(".ejs")) {
			const htmlFile: FileOrDirName = file.replace(".ejs", ".html");
			const pathSrc: AbsolutePath = path.resolve(src, file);
			const pathDest: AbsolutePath = path.resolve(dest, htmlFile);
			const itemData = {
				...data,
				filename: htmlFile, // This should only contain the filename without any directory
				urlPath: getURLPath(pathDest), // URL Path: Relative path from the dest root
				urlParentDir: getURLParentPath(pathDest), // URL Path: Relative path from the dest root
				editPath: getEditURL(data["docsEditURL"], pathSrc), // Edit path: Relative path from the source root
				isDocsFile: false,
				rootDir: getRelativePathToSrc(destRootDir, pathDest), // Relative path to the root directory
				markdownContent: undefined,
			};

			// If there is a markdown file with the same name as the ejs file, then get the markdown file, build it
			// and insert it into the ejs file
			let mdFile = mdFiles.find((mdFile) => mdFile === file.replace(".ejs", ".md"));
			if (mdFile !== undefined) {
				const md = (await fs.readFile(path.resolve(src, mdFile))).toString();
				itemData.markdownContent = markdownConverter.makeHtml(md);
			}

			// Build ejs file
			const result: string = await ejs.renderFile(pathSrc, itemData, ejsOptions);
			await fs.writeFile(pathDest, result);
		}
	}
}

/**
 * Tries to determine the file metadata of the passed Markdown HTML file.
 * @param markdownHtml The HTML for the Markdown file.
 * @param apiFile If set to true, that means the first <p> tag is a URL and not a description, as such it will be
 * skipped to ensure the correct description is found.
 * @returns The metadata for the file.
 */
export function determineMarkdownFileMetadata(
	markdownHtml: string,
	apiFile: boolean = false,
): DocumentMetaData {
	// Ensure consistent line endings
	const htmlContent = markdownHtml.replace(/\r\n/g, "\n").split("\n");

	// Skip the first <p> tag if this is an API file
	let skipFirstPTag = apiFile;

	// The metadata for the file
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
		} else if (
			(line.startsWith(`<p`) && !metaData.description && metaData.title) ||
			isDescription
		) {
			// If there is a p tag, no description has been found yet and a title has been already created, make this the
			// new description
			isDescription = true;
			metaData.description += line.replace(/<\/?[0-9A-Za-z-_=/"' ]+>/g, "").trim() + " ";

			if (line.endsWith("</p>")) {
				isDescription = false;

				// Unset the description if this is an API file - Skipping the first <p> tag block
				if (skipFirstPTag) {
					skipFirstPTag = false;
					metaData.description = "";
				}
			}
		}
	}

	// Ensure any left-over whitespaces are removed
	metaData.title = metaData.title.trim();
	metaData.description = metaData.description.trim();

	return metaData;
}

/**
 * Gets the versions of the docs.
 * @param docsSrc The source directory of the docs.
 */
export async function getDocsVersions(docsSrc: string): Promise<Array<string>> {
	return await fs.readdir(docsSrc);
}

/**
 * Returns a tree representing the content of the specified directory, which should represent the data returned from
 * a {@link fs.readdir} call.
 * @param dirContents The contents of the directory to process.
 * @param dirPath The absolute path of the current directory.
 */
export async function processDirContents(
	dirContents: Array<string>,
	dirPath: AbsolutePath,
): Promise<Array<PathTreeItem>> {
	const mdFiles = [];
	for (const fileOrDir of dirContents) {
		if (fileOrDir.endsWith(".md")) {
			mdFiles.push(<Path>fileOrDir);
		}

		const absolutePath: AbsolutePath = path.resolve(`${dirPath}/${fileOrDir}/`);
		if (statSync(absolutePath).isDirectory()) {
			// Process nested directories recursively
			const pathItems = await processDirContents(await fs.readdir(absolutePath), absolutePath);
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
 * Wraps all tables in the given HTML with a div element that has the class 'table-wrapper'.
 * @param html The HTML to wrap the tables in.
 */
export async function wrapAllTables(html: string): Promise<string> {
  const $ = cheerio.load(html);

  // Wrap all tables in a div with the class 'table-wrapper'
  $("table").wrap("<div class='table-wrapper'></div>");

  return $.html();
}

/**
 * Removes the <html>, <head> and <body> tag, as they are automatically inserted by {@link cheerio.load}.
 * @param html The HTML to sanitize.
 */
export function removeHTMLHeadAndBodyTag(html: string): string {
  return html.replace(/<\/?((head)|(html)|(body))>/g, "");
}
