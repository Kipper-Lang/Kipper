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
	KipperLogger,
	KipperParseStream,
	LogLevel,
} from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { IFlag } from "@oclif/command/lib/flags";
import { Logger } from "tslog";
import { CLIEmitHandler, defaultCliLogger, defaultKipperLoggerConfig } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { getFile, writeCompilationResult } from "../compile";

export default class Compile extends Command {
	static description = "Compile a Kipper program.";

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
			description: "Optimise the generated internal functions using tree-shaking to reduce the size of the output.",
			allowNo: true,
		}),
		"optimise-builtins": flags.boolean({
			char: "b",
			default: <boolean>defaultOptimisationOptions.optimiseInternals,
			description: "Optimise the generated built-in functions using tree-shaking to reduce the size of the output.",
			allowNo: true,
		}),
		warnings: flags.boolean({
			char: "w",
			default: true,
			description: "Show warnings that were emitted during the compilation.",
			allowNo: true,
		}),
		"log-timestamp": flags.boolean({
			char: "t",
			default: false,
			description: "Show the timestamp of each log message.",
			allowNo: true,
		}),
		recover: flags.boolean({
			default: true,
			description: "Recover from compiler errors and log all detected semantic issues.",
			allowNo: true,
		}),
		"abort-on-first-error": flags.boolean({
			default: false,
			description: "Abort on the first error the compiler encounters.",
			allowNo: true,
		}),
	};

	async run() {
		const { args, flags } = this.parse(Compile);

		// If 'log-timestamp' is set, set the logger to use the timestamp
		if (flags["log-timestamp"]) {
			CLIEmitHandler.cliLogger = new Logger({ ...defaultKipperLoggerConfig, displayDateTime: true });
		}

		// Input data for this run
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.INFO, flags["warnings"]);
		const compiler = new KipperCompiler(logger);
		const file: KipperParseFile | KipperParseStream = await getFile(args, flags);

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
					target: new KipperTypeScriptTarget(),
					optimisationOptions: {
						optimiseInternals: flags["optimise-internals"],
						optimiseBuiltIns: flags["optimise-builtins"],
					},
					recover: flags["recover"],
					abortOnFirstError: flags["abort-on-first-error"],
				},
			);

			// If the compilation failed, abort
			if (!result.success) {
				return;
			}

			const out = await writeCompilationResult(result, file, flags["output-dir"], flags["encoding"] as KipperEncoding);
			logger.debug(`Generated file '${out}'.`);

			// Finished!
			const duration: number = (new Date().getTime() - startTime) / 1000;
			logger.info(`Done in ${duration}s.`);
		} catch (e) {
			// In case the error is not a KipperError, throw it as an internal error (this should not happen)
			if (!(e instanceof KipperError)) {
				defaultCliLogger.fatal(`Encountered unexpected internal error: \n${(<Error>e).stack}`);
			}
		}
	}
}
