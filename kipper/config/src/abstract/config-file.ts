import type { ConfigErrorMetaData } from "../errors";
import { JSONSyntaxError } from "../errors";

/**
 * An abstract class that represents a configuration file.
 * @since 0.11.0
 */
export abstract class ConfigFile {
	public readonly content: string;
	public readonly parsedJSON: { [key: string]: any };
	public readonly fileName: string;
	public readonly encoding: BufferEncoding;

	protected constructor(content: string, fileName: string, encoding: BufferEncoding, meta?: ConfigErrorMetaData) {
		this.content = content;
		this.fileName = fileName;
		this.encoding = encoding;
		try {
			this.parsedJSON = JSON.parse(content);
		} catch (e) {
			throw new JSONSyntaxError(String(e), { fileName, refChain: meta?.refChain ?? [] });
		}
	}
}
