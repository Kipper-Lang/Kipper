/**
 * Classes implementing antlr4 streams and providing an interface to interact with the compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import { CharStreams, CodePointCharStream } from "antlr4ts";

/**
 * The {@link KipperParseStream} class, which stores the content of a file/string in a "virtual" file in a UTF-16
 * encoded {@link CodePointCharStream}.
 * @since 0.0.3
 */
export class KipperParseStream {
	/**
	 * The private '_name' that actually stores the variable data,
	 * which is returned inside the getter 'name'.
	 * @private
	 */
	private readonly _name: string;

	/**
	 * The private '_charStream' that actually stores the variable data,
	 * which is returned inside the getter 'charStream'.
	 * @private
	 */
	private readonly _charStream: CodePointCharStream;

	/**
	 * Parser File Constructor
	 * @param {string} name The relative or absolute path to the file
	 * @param {string} stringContent The content of the stream
	 * @param {CodePointCharStream} charStream The {@link CodePointCharStream}, which if not set will be auto-generated
	 * by the stringContent
	 */
	constructor(name: string, stringContent: string, charStream?: CodePointCharStream) {
		this._name = name;
		this._charStream = charStream ?? CharStreams.fromString(stringContent, this._name);
	}

	/**
	 * Returns the Antlr4 {@link CodePointCharStream} for the initialised {@link stringContent}
	 */
	get charStream(): CodePointCharStream {
		return this._charStream;
	}

	/**
	 * Returns the string content of the file
	 */
	get stringContent(): string {
		return this._charStream.toString();
	}

	/**
	 * Returns the name of the file
	 */
	get name(): string {
		return this._name;
	}
}
