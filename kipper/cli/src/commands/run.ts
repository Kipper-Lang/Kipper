/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @since 0.0.3
 */
import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
import { Logger } from "tslog";
import {
	CompileConfig,
	defaultOptimisationOptions,
	EvaluatedCompileConfig,
	KipperCompiler,
	KipperCompileResult,
	KipperCompileTarget,
	KipperError,
	KipperLogger,
	KipperParseStream,
	LogLevel,
} from "@kipper/core";
import { spawn } from "child_process";
import { CLIEmitHandler, defaultKipperLoggerConfig } from "../logger";
import { getParseStream, getTarget, KipperEncoding, KipperEncodings, verifyEncoding } from "../input/";
import { writeCompilationResult } from "../output";
import { prettifiedErrors } from "../decorators";

export default class Run extends Command {
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
	 * Gets the configuration for the invocation of this command.
	 * @private
	 */
	private async getRunConfig() {
		const { args, flags } = this.parse(Run);

		// Compilation-required
		const stream: KipperParseStream = await getParseStream(args, flags);
		const target: KipperCompileTarget = await getTarget(flags["target"]);

		// Output
		const outputDir: string = flags["output-dir"];
		const encoding = flags["encoding"] as KipperEncoding;

		return {
			args,
			flags,
			config: {
				stream,
				target,
				outputDir,
				encoding,
				compilerOptions: {
					target: target,
					optimisationOptions: {
						optimiseInternals: flags["optimise-internals"],
						optimiseBuiltIns: flags["optimise-builtins"],
					},
					recover: flags["recover"],
					abortOnFirstError: flags["abort-on-first-error"],
				} as CompileConfig,
			},
		};
	}

	/**
	 * Run the Kipper program in a new spawned process.
	 * @param jsCode The JavaScript code to execute using the same JavaScript runtime as this CLI is being executed from.
	 */
	private async executeKipperProgram(jsCode: string): Promise<void> {
		const kipperProgram = spawn(process.execPath, ["-e", jsCode]);

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
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.ERROR, flags["warnings"]);
		const compiler = new KipperCompiler(logger);

		// If 'log-timestamp' is set, set the logger to use the timestamp
		if (flags["log-timestamp"]) {
			CLIEmitHandler.cliLogger = new Logger({ ...defaultKipperLoggerConfig, displayDateTime: true });
		}

		let result: KipperCompileResult;
		try {
			result = await compiler.compile(config.stream, config.compilerOptions);
		} catch (e) {
			if (e instanceof KipperError && config.compilerOptions.abortOnFirstError) {
				// Ignore the error thrown by the compiler (the logger already logged it)
				// TODO! This will be removed once 'abortOnFirstError' has been fully removed with v0.11.0 -> #501
				return;
			}
			throw e;
		}

		// If the compilation failed, abort
		if (!result.success) {
			return;
		}

		// Write the file output for this compilation
		await writeCompilationResult(result, config.stream, config.outputDir, config.target, config.encoding);

		// Get the JS code that should be evaluated
		let jsProgram: string;
		if (config.target.targetName === "typescript") {
			// Also do the compilation now with the JavaScript target
			let jsProgramCtx = await compiler.compile(config.stream, {
				...config.compilerOptions,
				target: getTarget("js"),
			});
			jsProgram = jsProgramCtx.write();
		} else {
			jsProgram = result.write();
		}

		// Execute the program
		await this.executeKipperProgram(jsProgram);
	}
}
