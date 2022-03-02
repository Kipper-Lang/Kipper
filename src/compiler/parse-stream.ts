/**
 * Classes implementing antlr4 streams and providing an interface to interact with the compiler
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

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
