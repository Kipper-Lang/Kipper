/**
 * 'analyse' command for analysing the syntax of a file.
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler, KipperError, KipperLogger, KipperParseStream, LogLevel } from "@kipper/core";
import { KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { CLIEmitHandler, defaultCliLogger } from "../logger";
import { IFlag } from "@oclif/command/lib/flags";
import { getFile } from "../compile";

export default class Analyse extends Command {
	static override description = "Analyse a Kipper file and validate its syntax and semantic integrity.";

	// TODO! Add examples when the command moves out of development
	static override examples = [];

	static override args = [
		{
			name: "file",
			required: false,
			description: "The file that should be analysed.",
		},
	];

	static override flags: Record<string, IFlag<any>> = {
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

	public async run() {
		const { args, flags } = this.parse(Analyse);
		const logger = new KipperLogger(CLIEmitHandler.emit, LogLevel.INFO, flags["warnings"]);
		const compiler = new KipperCompiler(logger);

		// Fetch the file
		let file: KipperParseFile | KipperParseStream = await getFile(args, flags);

		// Compilation configuration
		const parseStream = new KipperParseStream({
			name: file.name,
			filePath: file instanceof KipperParseFile ? file.absolutePath : file.filePath,
			charStream: file.charStream,
		});

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Analyse the file
		try {
			await compiler.syntaxAnalyse(parseStream);

			// Finished!
			const duration: number = (new Date().getTime() - startTime) / 1000;
			await logger.info(`Finished code analysis in ${duration}s.`);
		} catch (e) {
			// In case the error is of type KipperError, exit the program, as the logger should have already handled the
			// output of the error and traceback.
			if (!(e instanceof KipperError)) {
				defaultCliLogger.fatal(`Encountered unexpected internal error: \n${(<Error>e).stack}`);
			}
		}
	}
}
