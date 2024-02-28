/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @since 0.0.3
 */
import type { args } from "@oclif/parser";
import { flags } from "@oclif/command";
import { defaultOptimisationOptions, EvaluatedCompileConfig, KipperLogger, LogLevel } from "@kipper/core";
import { spawn } from "child_process";
import { CLIEmitHandler } from "../logger";
import { KipperEncodings, verifyEncoding } from "../input/";
import { prettifiedErrors } from "../decorators";
import Compile from "./compile";

export default class Run extends Compile {
	static override description: string = "Compile and execute a Kipper program.";

	// TODO! Add examples when the command moves out of development
	static override examples: Array<string> = [];

	static override args: args.Input = [
		{
			name: "file",
			required: false,
			description: "The file that should be compiled and run.",
		},
	];

	static override flags: flags.Input<any> = {
		target: flags.string({
			char: "t",
			default: "js",
			description: "The target language where the compiled program should be emitted to.",
			options: ["js", "ts"],
		}),
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
			default: defaultOptimisationOptions.optimiseInternals,
			description: "Optimise the generated internal functions using tree-shaking to reduce the size of the output.",
			allowNo: true,
		}),
		"optimise-builtins": flags.boolean({
			char: "b",
			default: defaultOptimisationOptions.optimiseInternals,
			description: "Optimise the generated built-in functions using tree-shaking to reduce the size of the output.",
			allowNo: true,
		}),
		warnings: flags.boolean({
			// This is different to the compile config field 'warnings', since this is purely about the CLI output
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
			default: EvaluatedCompileConfig.defaults.recover,
			description: "Recover from compiler errors and display all detected compiler errors.",
			allowNo: true,
		}),
		/**
		 * TODO! Remove this flag
		 * @deprecated
		 */
		"abort-on-first-error": flags.boolean({
			default: EvaluatedCompileConfig.defaults.abortOnFirstError,
			description: "Abort on the first error the compiler encounters. Same behaviour as '--no-recover'.",
			allowNo: true,
		}),
	};

	/**
	 * Run the Kipper program in a new spawned process.
	 * @param entryFile The file that should be executed.
	 */
	private async executeKipperProgram(entryFile: string): Promise<void> {
		const kipperProgram = spawn("ts-node", [entryFile]);

		// Per default the encoding should be 'utf-8'
		kipperProgram.stdin.setDefaultEncoding("utf-8");

		// Set how to handle streams
		kipperProgram.stdout.pipe(process.stdout);
		kipperProgram.stderr.pipe(process.stderr);

		// Close immediately after the Kipper program
		kipperProgram.on("close", (code: number) => process.exit(code));
	}

	@prettifiedErrors<Run>()
	public async run() {
		const { flags, config } = await this.getRunConfig();
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.WARN, flags["warnings"]);

		await super.run(logger);
		await this.executeKipperProgram(config.outPath);
	}
}
