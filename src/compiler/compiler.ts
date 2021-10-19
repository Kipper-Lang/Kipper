// Main Compiler file for interacting with the entire Kipper Compiler

import { CharStreams, CodePointCharStream, CommonTokenStream } from "antlr4ts";
import { KipperLexer, KipperParser } from "./parser";
import { CompilationUnitContext } from "./parser/KipperParser";
import { ParserFile } from "./parser-file";

export class KipperCompiler {
  /**
   * Fetches the content of a file and returns the entire content as a string
   * @param {string} fileLocation The relative or absolute path to the file
   * @param {string} encoding The enconding that should be used to read the file
   * @returns {ParserFile} A new instance that contains the string content
   */
  getFileString(fileLocation: string, encoding: string): ParserFile {
    return new ParserFile(fileLocation, encoding);
  }

  /**
   * Parses a file and generates the antlr4 tree, using the function .compilationUnit (parent item of the tree)
   * @param {ParserFile} inFile The parserFile instance that contains the required string content
   * @returns {CompilationUnitContext} The generated and parsed CompilationUnitContext
   */
  async parse(inFile: ParserFile): Promise<CompilationUnitContext> {
    // Create the lexer and parser
    const inputStream: CodePointCharStream = CharStreams.fromString(
      inFile.stringContent
    );
    const lexer = new KipperLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new KipperParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    return parser.compilationUnit();
  }

  /**
   * Compiles a file and generates the C counterpart
   * @param {string} fileLocation The entry-file of the program
   * @param {string} encoding The encoding that should be used to read the file
   * @returns {string} The compiled C code
   */
  async compile(fileLocation: string, encoding: string): Promise<string> {
    const inFile = this.getFileString(fileLocation, encoding);
    const compilationUnit = this.parse(inFile);

    // TODO! Implement parsing function - add to this function
    //  Add Visitor class and implementation for generating logic stream (lexing and parsing)
    //  Compile C-tokens using the logic stream (compilation)
    //  Validate the existence of all items (linker)
    //  Generate Code (code generator)

    return "";
  }

  /**
   * Analysing the syntax of the given file
   * @param {string} fileLocation The entry-file of the program
   * @param {string} encoding The encoding that should be used to read the file
   * @throws {KipperSyntaxError} If a syntax-error is encountered
   */
  async syntaxAnalyse(fileLocation: string, encoding: string): Promise<void> {
    const inFile = this.getFileString(fileLocation, encoding);
    const compilationUnit = this.parse(inFile);


  }
}
