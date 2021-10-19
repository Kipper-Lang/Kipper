import * as path from "path";
import * as fs from "fs";

/**
 * ParserFile class that is used to represent a class that can be given to the compiler to be parsed.
 * @since 0.0.1
 */
export class ParserFile {
  private readonly _absolutePath: string;

  private readonly _inputPath: string;

  private _stringContent: string;

  /**
   * Parser File Constructor
   * @param {string} fileLocation The relative or absolute path to the file
   * @param {string} encoding The encoding that should be used to read the file
   */
  constructor(fileLocation: string, encoding: string) {
    this._absolutePath = path.resolve(fileLocation);
    this._inputPath = fileLocation;
    this._stringContent = "";

    fs.readFile(fileLocation, encoding, (err, data) => {
      // if error exists -> throw
      if (err) throw err;

      // reading in content
      this._stringContent = data.toString().replace(/\r\n/g, "\n");
    });
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
   * Returns the string content of the file
   */
  get stringContent(): string {
    return this._stringContent;
  }
}
