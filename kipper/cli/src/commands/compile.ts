/**
 * 'compile' command for compiling a Kipper program.
 * @since 0.0.5
 */
import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
import { Logger } from "tslog";
import type { CompileConfig, KipperCompileResult, KipperCompileTarget } from "@kipper/core";
import {
	defaultOptimisationOptions,
	EvaluatedCompileConfig,
	KipperCompiler,
	KipperError,
	KipperLogger,
	LogLevel,
} from "@kipper/core";
import { CLIEmitHandler, defaultKipperLoggerConfig } from "../logger";
import { getParseStream, getTarget, KipperEncodings, KipperParseFile, verifyEncoding } from "../input/";
import { writeCompilationResult } from "../output";
import { prettifiedErrors } from "../decorators";
import { loadAutoConfig } from "../config-loader";
import { copyConfigResources } from "../copy-resources";
import path from "node:path";

export default class Compile extends Command {
	static override description: string = "Compile a Kipper program into the specified target language.";

	// TODO! Add examples when the command moves out of development
	static override examples: Array<string> = [];

	static override args: args.Input = [
		{
			name: "file",
			required: false,
			description:
				"The file that should be compiled. Takes precedence over the 'string-code' flag and the config file.",
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
				"The build directory where the compiled files should be placed. If the path does not exist, it will be created. Takes precedence over the config file, defaults to 'build' if both are not provided",
		}),
		"string-code": flags.string({
			char: "s",
			description:
				"The content of a Kipper file that can be passed as a replacement for the 'file' parameter. Takes precedence over the config file.",
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
		"dry-run": flags.boolean({
			char: "d",
			default: false,
			description: "Run the compiler without writing any output. Useful for checking for errors.",
			allowNo: true,
		}),
		warnings: flags.boolean({
			// This is different to the compile config field 'warnings', since this is purely about the CLI output
			char: "w",
			default: true,
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
			description: "Recover from compiler errors and log all detected semantic issues.",
			allowNo: true,
		}),
		/**
		 * TODO! Remove this flag
		 * @deprecated
		 */
		"abort-on-first-error": flags.boolean({
			default: EvaluatedCompileConfig.defaults.abortOnFirstError,
			description: "Abort on the first error the compiler encounters.",
			allowNo: true,
		}),
	};

	/**
	 * Gets the configuration for the invocation of this command.
	 * @private
	 */
	protected async getRunConfig() {
		const { args, flags } = this.parse(Compile);

		// Load the pre-existing configuration
		const preExistingConfig = await loadAutoConfig();
		const preExistingCompileConfig = preExistingConfig?.genCompilerConfig();

		// Compilation-required
		const { stream, outDir } = await getParseStream(args, flags, preExistingConfig);
		const target: KipperCompileTarget = flags["target"]
			? getTarget(flags["target"])
			: preExistingCompileConfig?.target ?? getTarget("js");

		// Output
		const encoding = flags["encoding"] || "utf-8";
		const fileName = stream instanceof KipperParseFile ? stream.path.name : stream.name;
		const outPath = `${path.resolve(outDir)}/${fileName}.${target.fileExtension}`;

		return {
			args,
			flags,
			config: {
				stream,
				target,
				outDir,
				outPath,
				encoding,
				resources: preExistingConfig?.resources ?? [],
				compilerOptions: {
					...preExistingCompileConfig,
					target: target,
					optimisationOptions: {
						optimiseInternals:
							flags["optimise-internals"] ??
							preExistingCompileConfig?.optimisationOptions?.optimiseInternals ??
							defaultOptimisationOptions.optimiseInternals,
						optimiseBuiltIns:
							flags["optimise-builtins"] ??
							preExistingCompileConfig?.optimisationOptions?.optimiseBuiltIns ??
							defaultOptimisationOptions.optimiseBuiltIns,
					},
					recover: flags["recover"] ?? preExistingCompileConfig?.recover ?? EvaluatedCompileConfig.defaults.recover,
					abortOnFirstError:
						flags["abort-on-first-error"] ??
						preExistingCompileConfig?.abortOnFirstError ??
						EvaluatedCompileConfig.defaults.abortOnFirstError,
				} as CompileConfig,
			},
		};
	}

	@prettifiedErrors<Compile>()
	public async run(logger?: KipperLogger): Promise<boolean> {
		const { flags, config } = await this.getRunConfig();

		logger = logger ?? new KipperLogger(CLIEmitHandler.emit, LogLevel.INFO, flags["warnings"]);
		const compiler = new KipperCompiler(logger);

		// If 'log-timestamp' is set, set the logger to use the timestamp
		if (flags["log-timestamp"]) {
			CLIEmitHandler.cliLogger = new Logger({ ...defaultKipperLoggerConfig, displayDateTime: true });
		}

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Compile the file
		let result: KipperCompileResult;
		try {
			result = await compiler.compile(config.stream, config.compilerOptions);
		} catch (e) {
			if (e instanceof KipperError && config.compilerOptions.abortOnFirstError) {
				// Ignore the error thrown by the compiler (the logger already logged it)
				// TODO! This will be removed once 'abortOnFirstError' has been fully removed with v0.11.0 -> #501
				return false;
			}
			throw e;
		}

		// If the compilation failed, abort
		if (!result.success) {
			return false;
		} else if (!flags["dry-run"]) {
			const out = await writeCompilationResult(result, config.outDir, config.outPath, config.encoding);
			logger.debug(`Generated file '${out}'.`);

			// Copy resources if they exist
			if (config.resources) {
				await copyConfigResources(config.resources);
				logger.debug(`Finished copying resources specified in config.`);
			}
		}

		// Finished!
		const duration: number = (new Date().getTime() - startTime) / 1000;
		logger.info(`Done in ${duration}s.` + (flags["dry-run"] ? " (Dry run)" : ""));
		return true;
	}
}
