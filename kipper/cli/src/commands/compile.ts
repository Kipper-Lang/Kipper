/**
 * 'compile' command for compiling a Kipper program.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import {
	defaultOptimisationOptions,
	KipperCompiler,
	KipperCompileResult,
	KipperError,
	KipperParseStream,
} from "@kipper/core";
import { KipperLogger } from "@kipper/core";
import { defaultCliEmitHandler, defaultCliLogger } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { writeCompilationResult } from "../compile";
import { KipperInvalidInputError } from "../errors";
import { IFlag } from "@oclif/command/lib/flags";

export default class Compile extends Command {
	static description = "Compiles a Kipper program.";

	// TODO! Add examples when the command moves out of development
	static examples = [];

	static args = [
		{
			name: "file",
			required: false,
			description: "The file that should be compiled.",
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
	};

	async run() {
		const { args, flags } = this.parse(Compile);
		const logger = new KipperLogger(defaultCliEmitHandler);
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

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Compile the file
		let result: KipperCompileResult;
		try {
			// Run the file
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

			await writeCompilationResult(result, file, flags["output-dir"], flags["encoding"] as KipperEncoding);

			// Finished!
			const duration: number = (new Date().getTime() - startTime) / 1000;
			await logger.info(`Finished code compilation in ${duration}s.`);
		} catch (e) {
			// In case the error is of type KipperError, exit the program, as the logger should have already handled the
			// output of the error and traceback.
			if (!(e instanceof KipperError)) {
				defaultCliLogger.fatal(`Encountered unexpected internal error: \n${(<Error>e).stack}`);
			}
		}
	}
}
