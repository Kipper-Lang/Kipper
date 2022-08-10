/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import * as ts from "typescript";
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
import { spawn } from "child_process";
import { Logger } from "tslog";
import { CLIEmitHandler, defaultCliLogger, defaultKipperLoggerConfig } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { getFile, writeCompilationResult } from "../compile";

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
	static description = "Compile and execute a Kipper program.";

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
			default: false, // Log warnings ONLY if the user intends to do so
			description: "Show warnings that were emitted during the compilation.",
			allowNo: true,
		}),
		"log-timestamp": flags.boolean({
			default: false,
			description: "Show the timestamp of each log message.",
			allowNo: true,
		}),
		recover: flags.boolean({
			default: true,
			description: "Recover from compiler errors and display all detected compiler errors.",
			allowNo: true,
		}),
		"abort-on-first-error": flags.boolean({
			default: false,
			description: "Abort on the first error the compiler encounters. Same behaviour as '--no-recover'.",
			allowNo: true,
		}),
	};

	async run() {
		const { args, flags } = this.parse(Run);

		// If 'log-timestamp' is set, set the logger to use the timestamp
		if (flags["log-timestamp"]) {
			CLIEmitHandler.cliLogger = new Logger({ ...defaultKipperLoggerConfig, displayDateTime: true });
		}

		// Input data for this run
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.ERROR, flags["warnings"]);
		const compiler = new KipperCompiler(logger);
		const file: KipperParseFile | KipperParseStream = await getFile(args, flags);

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

			await writeCompilationResult(result, file, flags["output-dir"], flags["encoding"] as KipperEncoding);

			// Execute the program
			const jsProgram = ts.transpileModule(result.write(), { compilerOptions: { module: ts.ModuleKind.CommonJS } });
			executeKipperProgram(jsProgram.outputText);
		} catch (e) {
			// In case the error is not a KipperError, throw it as an internal error (this should not happen)
			if (!(e instanceof KipperError)) {
				defaultCliLogger.fatal(`Encountered unexpected internal error: \n${(<Error>e).stack}`);
			}
		}
	}
}
