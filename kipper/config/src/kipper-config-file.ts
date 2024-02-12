import type { KipperEncoding } from "@kipper/cli";
import { ConfigFile } from "./abstract/config-file";
import * as path from "node:path";
import * as fs from 'node:fs/promises';
import { ensureExistsHasPermAndIsOfType } from "./tools";

/**
 * A class that represents a Kipper config file.
 * @since 0.11.0
 */
export class KipperConfigFile extends ConfigFile {
	protected constructor(content: string, fileName: string = "<string>", encoding: KipperEncoding = "utf8") {
		super(content, fileName, encoding);
	}

	/**
	 * Create a new KipperConfigFile from a string.
	 * @param content The content of the file.
	 * @param encoding The encoding of the file. As we are running in a JavaScript environment, the default
	 * {@link encoding} is always assumed to be the internal encoding of the JavaScript environment i.e. UTF-16 (utf16le).
	 * @since 0.11.0
	 */
	static fromString(content: string, encoding: KipperEncoding = "utf16le"): KipperConfigFile {
		return new KipperConfigFile(content, "<string>", encoding);
	}

	/**
	 * Create a new KipperConfigFile from a file.
	 * @param file The file to read.
	 * @param encoding The encoding of the file.
	 * @since 0.11.0
	 */
	static async fromFile(file: string, encoding: KipperEncoding): Promise<KipperConfigFile> {
		await ensureExistsHasPermAndIsOfType(file, "r", "file");

		const fileContent = await fs.readFile(file, { encoding });
		const fileName = path.basename(file);
		return new KipperConfigFile(fileContent, fileName, encoding);
	}
}
