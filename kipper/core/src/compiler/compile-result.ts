/**
 * The result of a {@link KipperCompiler} compilation.
 * @since 0.0.3
 */
import type { KipperProgramContext } from "./program-ctx";
import type { TranslatedCodeLine } from "./const";
import type { KipperError, KipperSyntaxError } from "../errors";
import { codeLinesToString } from "../tools/functions/code-lines-to-string";

/**
 * The result of a {@link KipperCompiler} compilation.
 * @since 0.0.3
 */
export class KipperCompileResult {
	private readonly _programCtx: KipperProgramContext | undefined;
	private readonly _result: Array<TranslatedCodeLine> | undefined;
	private readonly _syntaxErrors: Array<KipperSyntaxError> | undefined;

	constructor(
		fileCtx?: KipperProgramContext,
		result?: Array<TranslatedCodeLine>,
		syntaxErrors?: Array<KipperSyntaxError>,
	) {
		this._programCtx = fileCtx;
		this._result = result;
		this._syntaxErrors = syntaxErrors;
	}

	/**
	 * The program context for the compilation run, which stores the content of the program and meta-data.
	 *
	 * If undefined is returned that automatically indicates that the compilation failed due to a syntax error.
	 */
	public get programCtx(): KipperProgramContext | undefined {
		return this._programCtx;
	}

	/**
	 * The result of the compilation in TypeScript form (every line is represented as an entry in the array).
	 */
	public get result(): Array<TranslatedCodeLine> | undefined {
		return this._result;
	}

	/**
	 * Returns true, if the compilation was successful without errors.
	 * @since 0.10.0
	 */
	public get success(): boolean {
		return this.result !== undefined;
	}

	/**
	 * The list of warnings that were raised during the compilation process.
	 *
	 * Warnings are non-fatal errors, which are raised when the compiler encounters a situation that it considers to
	 * be problematic, but which do not prevent the program from being compiled.
	 * @since 0.9.0
	 */
	public get warnings(): Array<KipperError> {
		return this.programCtx?.warnings ?? [];
	}

	/**
	 * The list of errors that were raised during the compilation process.
	 *
	 * Errors are either syntax or compilation errors, which are raised when the compiler encounters a situation that it
	 * prevents it from continuing processing.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		// We can assume that either there will be compilation errors or syntax errors. If neither are present that means
		// there is a bug, as such the usage of !! has a reason
		return this.programCtx?.errors ?? this._syntaxErrors!!;
	}

	/**
	 * Creates a string from the compiled code that can be written to a file in a human-readable way.
	 * @param lineEnding The line ending for each line of the file. Default line ending is LF ('\n').
	 */
	public write(lineEnding: string = "\n"): string {
		if (this.result === undefined) {
			throw Error("Can not generate code for a failed compilation");
		}

		return codeLinesToString(this.result, lineEnding);
	}
}
