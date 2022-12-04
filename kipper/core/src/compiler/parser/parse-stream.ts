/**
 * A UTF-16 Parse stream, which stores the content of a file/string in an {@link CodePointCharStream}.
 * @since 0.0.3
 */
import { CharStreams, CodePointCharStream } from "antlr4ts";

/**
 * A UTF-16 Parse stream, which stores the content of a file/string in an {@link CodePointCharStream}.
 *
 * If {@link name} is not set during construction, it will default to "anonymous-script".
 * @since 0.0.3
 */
export class KipperParseStream {
	private readonly _name: string;

	private readonly _filePath: string;

	private readonly _charStream: CodePointCharStream;

	/**
	 * Parser File Constructor
	 * @param stringContent The content of the stream.
	 * @param name The relative or absolute path to the file
	 * @param filePath The path to the file. If this is undefined, then it will default to the value in {@link name}.
	 * @param charStream The {@link CodePointCharStream}, which will be, if not set, auto-generated
	 * by the stringContent.
	 */
	public constructor(
		stringContent: string,
		name: string = "anonymous-script",
		filePath?: string,
		charStream?: CodePointCharStream,
	) {
		this._name = name;
		this._filePath = filePath ?? name;
		this._charStream = charStream ?? CharStreams.fromString(stringContent, this._name);
	}

	/**
	 * Returns the Antlr4 {@link CodePointCharStream} for the initialised {@link stringContent}.
	 */
	public get charStream(): CodePointCharStream {
		return this._charStream;
	}

	/**
	 * Returns the string content of the file.
	 */
	public get stringContent(): string {
		return this._charStream.toString();
	}

	/**
	 * Returns the lines of code inside the {@link charStream}.
	 *
	 * The returned lines have the line ending stripped away!
	 * @since 0.4.0
	 */
	public get lines(): Array<string> {
		const cleanLineEndings = (str: string) => {
			return str.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		};
		return cleanLineEndings(this.stringContent).split("\n");
	}

	/**
	 * Returns the file path of the file.
	 * @note If {@link _filePath} wasn't set during construction, then this defaults to {@link name}.
	 */
	public get filePath(): string {
		return this._filePath;
	}

	/**
	 * Returns the identifier of the file.
	 */
	public get name(): string {
		return this._name;
	}
}
