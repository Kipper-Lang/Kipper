/**
 * 'analyse' command for analysing the syntax of a file.
 * @since 0.0.5
 */
import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
import { KipperCompiler, KipperLogger, KipperParseStream, LogLevel } from "@kipper/core";
import { CLIEmitHandler } from "../logger";
import { getParseStream, KipperEncodings, verifyEncoding } from "../input/";
import { prettifiedErrors } from "../decorators";

export default class Analyse extends Command {
	static override description: string = "Analyse a Kipper file and validate its syntax and semantic integrity.";

	// TODO! Add examples when the command moves out of development
	static override examples: Array<string> = [];

	static override args: args.Input = [
		{
			name: "file",
			required: false,
			description: "The file that should be analysed.",
		},
	];

	static override flags: flags.Input<any> = {
		encoding: flags.string({
			char: "e",
			default: "utf8",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
			parse: verifyEncoding,
		}),
		"string-code": flags.string({
			char: "s",
			description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
		}),
		warnings: flags.boolean({
			char: "w",
			default: true,
			description: "Show warnings that were emitted during the analysis.",
			allowNo: true,
		}),
	};

	/**
	 * Gets the configuration for the invocation of this command.
	 * @private
	 */
	private async getRunConfig() {
		const { args, flags } = this.parse(Analyse);

		// Compilation-required
		const stream: KipperParseStream = await getParseStream(args, flags);

		return {
			args,
			flags,
			config: {
				stream,
			},
		};
	}

	@prettifiedErrors<Analyse>()
	public async run() {
		const { flags, config } = await this.getRunConfig();
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.INFO, flags["warnings"]);
		const compiler = new KipperCompiler(logger);

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Actual processing by the compiler
		await compiler.syntaxAnalyse(config.stream);

		// Finished!
		const duration: number = (new Date().getTime() - startTime) / 1000;
		await logger.info(`Done in ${duration}s.`);
	}
}
