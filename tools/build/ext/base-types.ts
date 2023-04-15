/**
 * The metadata for a documentation file, which contains the {@link title} and {@link description}.
 */
export interface DocumentMetaData {
	title: string;
	description: string;
}

/**
 * Standard representation of a path, which is a string. This may be anything that is a path, such as a file path or a
 * URL, both relative and absolute.
 */
export type SimplePath = string;

/**
 * A singular file name, which is a file name that does not contain a full path.
 */
export type FileOrDirName = SimplePath;

/**
 * An absolute file path, which is a file path that is relative to the root directory of the system.
 */
export type AbsolutePath = SimplePath;

/**
 * A relative file path, which is a file path that is relative to the docs root or similar folder.
 */
export type RelativePath = SimplePath;

/**
 * Standard path, which can be either relative or absolute.
 */
export type Path = RelativePath | AbsolutePath;

/**
 * A directory item, which is a collection of path items. This should represent a directory-like structure.
 *
 * The {@link name} should be relative to the directory parent, as this is mostly used for structuring paths during the
 * build process.
 */
export type DirTreeItem = { name: FileOrDirName; items: Array<PathTreeItem> };

/**
 * Linux-style URL path, which is a path that uses forward slashes.
 */
export type URLPath = string;

/**
 * A relative URL path, which represents a path that is relative the docs domain root.
 */
export type RelativeDocsURLPath = URLPath;

/**
 * A full web URL path, which represents a full path that can be used in the browser.
 */
export type WebURLPath = URLPath;

/**
 * A sidebar file, which is a file that is displayed in the sidebar. This is a single file.
 */
export interface SidebarFile {
	title: string;
	filename: string;
	path: URLPath;
	parent?: SidebarDir;
	dropdownTitle?: string;
}

/**
 * A sidebar directory, which is a collection of sidebar items. This should represent a directory-like structure.
 */
export interface SidebarDir {
	title: string;
	filename: string;
	path: URLPath;
	items: Array<SidebarTreeItem>;
	parent?: SidebarDir;
	dropdownTitle?: string;
}

/**
 * A sidebar item, which can be a sidebar object or an array of sidebar items. This should represent a directory-like
 * structure.
 */
export type SidebarTreeItem = SidebarFile | SidebarDir;

/**
 * A path item, which can be a string or an array of nested paths. This should represent a directory-like structure,
 * where the path is relative to the directory parent.
 *
 * This is solely used for structuring paths during the build process.
 */
export type PathTreeItem = FileOrDirName | DirTreeItem;
