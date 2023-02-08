/**
 * A UTF-16 Parse stream, which stores the content of a file/string in an {@link CodePointCharStream}.
 * @since 0.0.3
 */
import { CharStreams, CodePointCharStream } from "antlr4ts";
import { KipperConfigError } from "../../errors";

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
	 * Constructor for the {@link KipperParseStream} class.
	 * @param options.stringContent The content of the stream. If {@link options.charStream} is set, this will be ignored,
	 * and the {@link options.charStream.toString} will be used instead.
	 * @param options.name The relative or absolute path to the file
	 * @param options.filePath The path to the file. If this is undefined, then it will default to the value in {@link name}.
	 * @param options.charStream The {@link CodePointCharStream}, which will be, if not set, auto-generated
	 * by the stringContent.
	 */
	public constructor(options: {
		name?: string;
		stringContent?: string;
		filePath?: string;
		charStream?: CodePointCharStream;
	}) {
		if (options.stringContent === undefined && options.charStream === undefined) {
			throw new KipperConfigError("No 'stringContent' or 'charStream' for argument 'options' was provided");
		}

		this._name = options.name ?? "anonymous-script";
		this._filePath = options.filePath ?? this._name;
		this._charStream = options.charStream ?? CharStreams.fromString(<string>options.stringContent, this._name);
	}

	/**
	 * Returns the Antlr4 {@link CodePointCharStream} for the initialised {@link stringContent}.
	 *
	 * This is a copy of the stream, so modifying it will not modify the original stream.
	 */
	public get charStream(): CodePointCharStream {
		return CharStreams.fromString(this.stringContent, this._name);
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
	 *
	 * If {@link filePath} wasn't set during construction, then this defaults to {@link name}.
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
