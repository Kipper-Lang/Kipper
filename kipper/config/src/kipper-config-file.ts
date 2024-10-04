import {ConfigFile} from "./abstract";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import {ensureExistsHasPermAndIsOfType} from "./tools";
import type {ConfigErrorMetaData} from "./errors";

/**
 * A class that represents a Kipper config file.
 * @since 0.11.0
 */
export class KipperConfigFile extends ConfigFile {
	protected constructor(
		content: string,
		fileName: string = "<string>",
		encoding: BufferEncoding = "utf8",
		meta?: ConfigErrorMetaData,
	) {
		super(content, fileName, encoding, meta);
	}

	/**
	 * Create a new KipperConfigFile from a string.
	 * @param content The content of the file.
	 * @param encoding The encoding of the file. As we are running in a JavaScript environment, the default
	 * {@link encoding} is always assumed to be the internal encoding of the JavaScript environment i.e. UTF-16 (utf16le).
	 * @since 0.11.0
	 */
	static fromString(content: string, encoding: BufferEncoding = "utf16le"): KipperConfigFile {
		return new KipperConfigFile(content, "<string>", encoding);
	}

	/**
	 * Create a new KipperConfigFile from a file.
	 * @param file The file to read.
	 * @param encoding The encoding of the file.
	 * @param meta The metadata for the error. This is primarily only used when resolving extension files, and does not
	 * need to be provided when manually creating a KipperConfigFile.
	 * @since 0.11.0
	 */
	static async fromFile(file: string, encoding: BufferEncoding, meta?: ConfigErrorMetaData): Promise<KipperConfigFile> {
		await ensureExistsHasPermAndIsOfType(file, "r", "file", meta);

		const fileContent = await fs.readFile(file, encoding);
		const fileName = path.basename(file);
		return new KipperConfigFile(fileContent, fileName, encoding, meta);
	}
}
