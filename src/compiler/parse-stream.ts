/**
 * Classes implementing antlr4 streams and providing an interface to interact with the compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { promises as fs } from "fs";
import * as path from "path";
import { CharStreams, CodePointCharStream } from "antlr4ts";

export namespace KipperStreams {
  /**
   * Creates a new {@link KipperParseStream} instance based on the passed {@link stringContent}
   * @param name The name that should be used to differentiate this specific stream
   * @param stringContent The string content to fill the instance
   * @returns The new {@link KipperParseStream} instance with the set values
   */
  export function fromString(stringContent: string, name: string = "Input Char Stream"): KipperParseStream {
    return new KipperParseStream(name, stringContent);
  }

  /**
   * Creates a new {@link KipperParseFile} instance based on the content of the {@link filePath}
   * @param filePath The path to the file that should be read
   * @param encoding The encoding that should be used to read the file
   * @returns The new {@link KipperParseFile} instance with the set values
   */
  export async function fromFile(filePath: string, encoding: string | BufferEncoding = 'utf8'): Promise<KipperParseFile> {
    let fileLocation = path.resolve(filePath);
    let name = (() => {
      let items1 = fileLocation.split("\\");
      let items2 = items1[items1.length - 1].split("/");
      return items2[items2.length - 1];
    })()

    // Read in the content of the file
    let content: string;
    try {
      content = (await fs.readFile(fileLocation, encoding as BufferEncoding)).toString();
    } catch (error) {
      // TODO! Add some sensible error handling here for the CLI
      throw error;
    }

    // Standardising the line endings to '\n'
    content = content.replace(/(\r(\n)?)/gi, "\n");

    return new KipperParseFile(fileLocation, name, content, encoding as BufferEncoding);
  }
}

export class KipperParseStream {
  protected readonly _name: string;

  protected readonly _charStream: CodePointCharStream;

  protected readonly _stringContent: string;

  /**
   * Parser File Constructor
   * @param {string} name The relative or absolute path to the file
   * @param {string} stringContent The content of the stream
   * @param {CodePointCharStream} charStream The {@link CodePointCharStream}, which if not set will be auto-generated
   * by the stringContent
   */
  constructor(name: string, stringContent: string, charStream?: CodePointCharStream) {
    this._name = name;
    this._stringContent = stringContent;
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
    return this._stringContent;
  }

  /**
   * Returns the name of the file
   */
  get name(): string {
    return this._name;
  }
}

/**
 * ParserFile class that is used to represent a class that may be given to the
 * compiler to be parsed. This file is a simple wrapper around a file-read and
 * storing as a string in 'stringContent'
 * @since 0.0.1
 */
export class KipperParseFile extends KipperParseStream {
  private readonly _absolutePath: string;

  private readonly _inputPath: string;

  private readonly _encoding: BufferEncoding;

  constructor(fileLocation: string, fileName: string, stringContent: string, encoding: BufferEncoding) {
    super(fileName, stringContent);
    this._absolutePath = path.resolve(fileLocation);
    this._inputPath = fileLocation;
    this._encoding = encoding;
  }

  /**
   * Reads the content from the file asynchronously and updated the local
   * '_stringContent' private field.
   * @returns {Promise<string>} Returns the string that was read from the file
   */
  async readContent(): Promise<string> {

    return this._stringContent;
  }

  /**
   * Returns the absolute Path of the file
   */
  get absolutePath(): string {
    return this._absolutePath;
  }

  /**
   * Returns the input path that was given as the initializer
   */
  get inputPath(): string {
    return this._inputPath;
  }

  /**
   * Returns the encoding for this specific file
   */
  get encoding(): BufferEncoding {
    return this._encoding;
  }
}
