/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import { Command, flags } from "@oclif/command";
import {
	defaultOptimisationOptions,
	KipperCompiler,
	KipperCompileResult,
	KipperError,
	KipperParseStream,
	LogLevel,
} from "@kipper/core";
import { KipperLogger } from "@kipper/core";
import { defaultCliEmitHandler, defaultCliLogger } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { writeCompilationResult } from "../compile";
import { spawn } from "child_process";
import { KipperInvalidInputError } from "../errors";
import * as ts from "typescript";
import { IFlag } from "@oclif/command/lib/flags";

/**
 * Run the Kipper program.
 * @param jsCode
 */
export function executeKipperProgram(jsCode: string) {
	const kipperProgram = spawn(process.execPath, ["-e", jsCode]);

	// Per default the encoding should be 'utf-8'
	kipperProgram.stdin.setDefaultEncoding("utf-8");

	// Set how to handle streams
	kipperProgram.stdout.pipe(process.stdout);
	kipperProgram.stderr.pipe(process.stderr);

	// Close immediately after the Kipper program
	kipperProgram.on("close", (code: number) => process.exit(code));
}

export default class Run extends Command {
	static description = "Compiles and executes a Kipper program.";

	// TODO! Add examples when the command moves out of development
	static examples = [];

	static args = [
		{
			name: "file",
			required: false,
			description: "The file that should be compiled and run.",
		},
	];

	static flags: Record<string, IFlag<any>> = {
		encoding: flags.string({
			char: "e",
			default: "utf8",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
			parse: verifyEncoding,
		}),
		"output-dir": flags.string({
			char: "o",
			default: "build",
			description:
				"The build directory where the compiled files should be placed. If the path does not exist, it will be created.",
		}),
		"string-code": flags.string({
			char: "s",
			description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
		}),
		"optimise-internals": flags.boolean({
			char: "i",
			default: <boolean>defaultOptimisationOptions.optimiseInternals,
			description:
				"If set to true, the internal functions of the compiled code will be optimised using tree-shaking " +
				"reducing the size of the output.",
			allowNo: true,
		}),
		"optimise-builtins": flags.boolean({
			char: "b",
			default: <boolean>defaultOptimisationOptions.optimiseInternals,
			description:
				"If set to true, the built-in functions of the compiled code will be optimised using tree-shaking " +
				"reducing the size of the output.",
			allowNo: true,
		}),
		warnings: flags.boolean({
			char: "w",
			default: false, // Log warnings ONLY if the user intends to do so
			description: "Show warnings that were emitted during the compilation.",
			allowNo: true,
		}),

		// TODO! Add new options '--recover' and '--abort-on-first-error'
	};

	async run() {
		const { args, flags } = this.parse(Run);
		const logger = new KipperLogger(defaultCliEmitHandler, LogLevel.ERROR, flags["warnings"]);
		const compiler = new KipperCompiler(logger);

		// Fetch the file
		let file: KipperParseFile | KipperParseStream;
		if (args.file) {
			file = await KipperParseFile.fromFile(args.file, flags["encoding"] as KipperEncoding);
		} else if (flags["string-code"]) {
			file = await new KipperParseStream(flags["string-code"]);
		} else {
			throw new KipperInvalidInputError("Argument 'file' or flag '-s/--string-code' must be populated. Aborting...");
		}

		let result: KipperCompileResult;
		try {
			// Compile the file
			result = await compiler.compile(
				new KipperParseStream(
					file.stringContent,
					file.name,
					file instanceof KipperParseFile ? file.absolutePath : file.filePath,
					file.charStream,
				),
				{
					optimisationOptions: {
						optimiseInternals: flags["optimise-internals"],
						optimiseBuiltIns: flags["optimise-builtins"],
					},
				},
			);

			// If the compilation failed, abort
			if (!result.success) {
				return;
			}

			await writeCompilationResult(result, file, flags["output-dir"], flags["encoding"] as KipperEncoding);

			// Execute the program
			const jsProgram = ts.transpileModule(result.write(), { compilerOptions: { module: ts.ModuleKind.CommonJS } });
			executeKipperProgram(jsProgram.outputText);
		} catch (e) {
			// In case the error is of type KipperError, exit the program, as the logger should have already handled the
			// output of the error and traceback.
			if (!(e instanceof KipperError)) {
				defaultCliLogger.fatal(`Encountered unexpected internal error: \n${(<Error>e).stack}`);
			}
		}
	}
}
