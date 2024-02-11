import type { KipperEncoding } from "@kipper/cli";

/**
 * An abstract class that represents a configuration file.
 * @since 0.11.0
 */
export abstract class ConfigFile {
	public readonly content: string;
	public readonly parsedJSON: { [key: string]: any };
	public readonly fileName: string;
	public readonly encoding: KipperEncoding;

	protected constructor(content: string, fileName: string, encoding: KipperEncoding) {
		this.content = content;
		this.parsedJSON = JSON.parse(content);
		this.fileName = fileName;
		this.encoding = encoding;
	}
}
