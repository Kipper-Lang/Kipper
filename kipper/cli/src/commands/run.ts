/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @since 0.0.3
 */
import type {args} from "@oclif/parser";
import {flags} from "@oclif/command";
import {EvaluatedCompileConfig, KipperLogger, LogLevel} from "@kipper/core";
import {fork} from "child_process";
import {CLIEmitHandler} from "../logger";
import {KipperEncodings, verifyEncoding} from "../input/";
import {prettifiedErrors} from "../decorators";
import Compile from "./compile";

export default class Run extends Compile {
	static override description: string = "Compile and execute a Kipper program.";

	static override examples: Array<string> = [
		"kipper run -t js",
		"kipper run -t ts -s \"print('Hello, World!');\"",
		"kipper run -t js -e utf8 -o build/ -s \"print('Hello, World!');\"",
		"kipper run -t ts -o build/ -e utf8 -s \"print('Hello, World!');\"",
		"kipper run -t js -o build/ -e utf8 -s \"print('Hello, World!');\" --warnings",
		"kipper run -t ts -o build/ -e utf8 -s \"print('Hello, World!');\" --warnings --log-timestamp",
	];

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
			description: "The target language where the compiled program should be emitted to.",
			options: ["js", "ts"],
		}),
		encoding: flags.string({
			char: "e",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
			parse: verifyEncoding,
		}),
		"output-dir": flags.string({
			char: "o",
			description:
				"The build directory where the compiled files should be placed. If the path does not exist, it will be created.",
		}),
		"string-code": flags.string({
			char: "s",
			description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
		}),
		"optimise-internals": flags.boolean({
			char: "i",
			description: "Optimise the generated internal functions using tree-shaking to reduce the size of the output.",
			allowNo: true,
		}),
		"optimise-builtins": flags.boolean({
			char: "b",
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
	};

	/**
	 * Detects the location for ts-node and returns the path to the executable.
	 * @private
	 */
	private detectTSNode(): string {
		return require.resolve("ts-node/dist/bin.js");
	}

	/**
	 * Run the Kipper program in a new spawned process.
	 * @param entryFile The file that should be executed.
	 */
	private async executeKipperProgram(entryFile: string): Promise<void> {
		const kipperProgram = fork(this.detectTSNode(), [entryFile]);

		// Per default the encoding should be 'utf8'
		kipperProgram.stdin?.setDefaultEncoding("utf8");

		// Close immediately after the Kipper program
		kipperProgram.on("close", (code: number) => process.exit(code));
	}

	@prettifiedErrors<Run>()
	public async run(): Promise<boolean> {
		const { flags, config } = await this.getRunConfig();
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.WARN, flags["warnings"]);

		const state = await super.run(logger);
		if (!state) return false;

		// We only execute the program if the compilation was successful
		await this.executeKipperProgram(config.outPath);
		return true;
	}
}
