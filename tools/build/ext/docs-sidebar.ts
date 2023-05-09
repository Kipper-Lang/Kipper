import * as path from "path";
import { existsSync, promises as fs, statSync } from "fs";
import * as showdown from "showdown";

// Local dependencies
import type { DocsBuilder } from "../build-webpages";
import { AbsolutePath, FileOrDirName, PathTreeItem, SidebarDir, SidebarFile, SidebarTreeItem } from "./base-types";
import { determineMarkdownFileMetadata, getURLPath } from "./tools";
import { MarkdownDocsBuilder } from "./markdown-docs-builder";

/**
 * The class for creating and storing the tree of the sidebar files & folders for a specific version of the docs.
 */
export class DocsSidebar {
	private readonly src: string;
	private readonly dest: string;
	private readonly builder: MarkdownDocsBuilder;
	private sidebarTree: Array<SidebarFile>;
	public readonly inputFiles: Array<PathTreeItem>;

	constructor(src: AbsolutePath, dest: AbsolutePath, inputFiles: Array<PathTreeItem>, builder: MarkdownDocsBuilder) {
		this.src = src;
		this.dest = dest;
		this.inputFiles = inputFiles;
		this.builder = builder;
		this.sidebarTree = [];
	}

	/**
	 * Returns the sidebar tree.
	 *
	 * It may be an empty array if {@link build} has not been called yet.
	 */
	public get items(): Array<SidebarTreeItem> {
		return this.sidebarTree;
	}

	/**
	 * Builds the sidebar for the documentation and evaluates the metadata required.
	 * @returns This instance of the {@link DocsSidebar} class.
	 */
	public async build(): Promise<DocsSidebar> {
		this.sidebarTree = await this.evaluateNavTree(this.src, this.dest);
		return this;
	}

	/**
	 * Processes a single dir item and returns the new corresponding sidebar item.
	 * @param srcPath The source path of the new directory item.
	 * @param destPath The destination path of the new directory item.
	 * @param parent The parent sidebar item.
	 * @private
	 */
	private async processInDir(srcPath: AbsolutePath, destPath: AbsolutePath, parent?: SidebarDir) {
		const dir: SidebarDir = {
			title: "",
			filename: path.basename(destPath),
			path: getURLPath(destPath),
			items: [],
			parent: parent,
		};

		// After creating the parent object, we will recursively evaluate all children of this directory
		dir.items = await this.evaluateNavTree(srcPath, destPath, dir);

		// Settings the title / display name of the directory (not the filename)
		if (!dir.items[0].path.endsWith("index.html")) {
			throw new Error("First item in nav tree must be the index file.");
		}
		dir.title = dir.items[0].title; // The first item is always the index file
		dir.dropdownTitle = dir.items[0].dropdownTitle; // It also contains the dropdown title (not always present)

		return dir;
	}

	/**
	 * Processes a single file item and returns the new corresponding sidebar item.
	 * @param srcPath The source path of the new file item.
	 * @param destPath The destination path of the new file item.
	 * @param parent The parent sidebar item. May be undefined if the file is in the root directory.
	 * @private
	 */
	private async processInFile(srcPath: AbsolutePath, destPath: AbsolutePath, parent?: SidebarDir) {
		// Ensure that there is a corresponding markdown file
		if (!this.requiredMdFileExists(srcPath)) {
			throw new Error(
				`Required file '${srcPath}' does not exist. Referenced by nav metadata in '${parent.path}/index.md'.`,
			);
		}

		// Parse markdown to HTML, as the headings are only available after the conversion
		const content = (await fs.readFile(srcPath)).toString();
		const html = this.builder.converter.makeHtml(content);

		// Push the new heading
		const title = this.builder.getMetadataOfLastFile()["title"] || determineMarkdownFileMetadata(html).title;
		const dropdownTitle = <string | undefined>this.builder.getMetadataOfLastFile()["dropdownTitle"];
		if (!title) {
			throw new Error(`No title found for file '${srcPath}' - Please add a title attribute or a clear top heading.`);
		}

		return {
			title: title,
			filename: path.basename(destPath),
			path: getURLPath(destPath),
			parent: parent,
			dropdownTitle: dropdownTitle,
		};
	}

	/**
	 * Processes the given file or directory and returns the corresponding sidebar item.
	 * @param itemEntry The name of the file or directory.
	 * @param parentSrc The source path of the parent directory.
	 * @param parentDest The destination path of the parent directory.
	 * @param parent The parent sidebar item. May be undefined if the file/dir is in the root directory.
	 * @private
	 */
	private async processInFileOrDir(
		itemEntry: FileOrDirName,
		parentSrc: AbsolutePath,
		parentDest: AbsolutePath,
		parent?: SidebarDir,
	) {
		const srcPath = path.resolve(`${parentSrc}/${itemEntry}`);
		const destPath = path.resolve(`${parentDest}/${itemEntry.replace(".md", ".html")}`);

		// If the entry is a directory, we need to recursively get all files in this directory
		if (statSync(srcPath).isDirectory()) {
			return await this.processInDir(srcPath, destPath, parent);
		} else {
			return await this.processInFile(srcPath, destPath, parent);
		}
	}

	/**
	 * Evaluates the sidebar tree, which is made up of all files and directories in the given directory.
	 *
	 * This file should contain at the top the metadata of the directory tree, which should be rendered.
	 * @param pathSrc The path to the source directory.
	 * @param pathDest The path to the destination directory.
	 * @param parent The parent directory of the current directory. This should only be used internally to build the tree
	 * and internal references.
	 * @private
	 */
	private async evaluateNavTree(
		pathSrc: AbsolutePath,
		pathDest: AbsolutePath,
		parent?: SidebarDir,
	): Promise<Array<SidebarTreeItem>> {
		// First check if the index file exists
		const indexFile = path.resolve(`${pathSrc}/index.md`);
		if (!existsSync(indexFile)) {
			throw new Error(`Index file not found. Expected '${indexFile}' in directory ${pathSrc} to exist.`);
		}
		const content = (await fs.readFile(indexFile)).toString();

		// Get the metadata from the index file (we need to convert it to HTML first, so we can get the metadata)
		this.builder.converter.makeHtml(content);
		const metadata = <showdown.Metadata & { nav: Array<string> }>this.builder.getMetadataOfLastFile();
		if (!("nav" in metadata) || !Array.isArray(metadata["nav"])) {
			throw new Error(`No navigation bar defined in '${indexFile}'`);
		}

		// Recursively go through all files and directories and build the tree
		return await Promise.all(
			metadata["nav"].map(async (entry) => await this.processInFileOrDir(entry, pathSrc, pathDest, parent)),
		);
	}

	/**
	 * Checks whether the required Markdown file exists, which was referenced in the nav metadata.
	 * @param localPath The absolute file path.
	 * @private
	 */
	private requiredMdFileExists(localPath: AbsolutePath): boolean {
		return existsSync(path.resolve(localPath));
	}
}
