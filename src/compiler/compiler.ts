// Main Compiler file for interacting with the entire Kipper Compiler

export class KipperCompiler {

    /**
     * Parses a file and generates the antlr4 tree, using the function .compilationUnit (parent item of the tree)
     */
    async parse(): Promise<any>
    {

    }

    /**
     * Compiles a file and generate
     * @param file The entry-file of the program
     * @param encoding The encoding that should be used for the program
     */
    async compile(file: string, encoding: string): Promise<string>
    {
        // TODO! Implement parsing function - add to this function
        //  Add Visitor class and implementation for generating logic stream (lexing and parsing)
        //  Compile C-tokens using the logic stream (compilation)
        //  Validate the existence of all items (linker)
        //  Generate Code (code generator)

        return "";
    }
}
