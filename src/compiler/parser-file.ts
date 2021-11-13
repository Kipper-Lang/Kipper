import {promises as fs} from 'fs'
import * as path from 'path'

/**
 * ParserFile class that is used to represent a class that may be given to the
 * compiler to be parsed. This file is a simple wrapper around a file-read and
 * storing as a string in 'stringContent'
 * @since 0.0.1
 */
export class ParserFile {
  private readonly _absolutePath: string

  private readonly _inputPath: string

  private _stringContent: string

  private readonly _encoding: BufferEncoding

  /**
   * Parser File Constructor
   * @param {string} fileLocation The relative or absolute path to the file
   * @param {string} encoding The encoding that should be used to read the file
   */
  constructor(fileLocation: string, encoding: BufferEncoding) {
    this._absolutePath = path.resolve(fileLocation)
    this._inputPath = fileLocation
    this._stringContent = ''
    this._encoding = encoding
  }

  /**
   * Reads the content from the file asynchronously and updated the local
   * '_stringContent' private field.
   * @returns {Promise<string>} Returns the string that was read from the file
   */
  async readContent(): Promise<string> {
    let content: string
    try {
      content = (await fs.readFile(
        this._absolutePath, this._encoding as BufferEncoding
      )).toString()
    } catch (error) {
      // TODO! Add some sensible error handling here for the CLI
      throw error
    }

    this._stringContent = content.replace(/(\r(\n)?)/gi, '\n')
    return this._stringContent
  }

  /**
   * Returns the absolute Path of the file
   */
  get absolutePath(): string {
    return this._absolutePath
  }

  /**
   * Returns the input path that was given as the initializer
   */
  get inputPath(): string {
    return this._inputPath
  }

  /**
   * Returns the string content of the file
   */
  get stringContent(): string {
    return this._stringContent
  }

  /**
   * Returns the encoding for this specific file
   */
  get encoding(): BufferEncoding {
    return this._encoding
  }
}
