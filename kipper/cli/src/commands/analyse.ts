/**
 * 'analyse' command for analysing the syntax of a file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler } from "@kipper/base/lib";
import { KipperLogger } from "@kipper/base/lib/logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { defaultCliEmitHandler } from "../logger";

export default class Analyse extends Command {
	static description = "Analyses a file and validates its syntax and semantic integrity.";

  // TODO! Add examples when the command moves out of development
	static examples = [];

	static args = [
		{
			name: "file",
			required: true,
			description: "The file that should be analysed.",
		},
	];

	static flags = {
		encoding: flags.string({
			default: "utf8",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
		}),
	};

	async run() {
		const { args, flags } = this.parse(Analyse);
		const logger = new KipperLogger(defaultCliEmitHandler);
		const compiler = new KipperCompiler(logger);

		// Ensure the encoding is valid
		verifyEncoding(flags.encoding);

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Analyse the file
		const file: KipperParseFile = await KipperParseFile.fromFile(args.file, flags.encoding as KipperEncoding);
		await compiler.syntaxAnalyse(file.stringContent);

		// Finished!
		const duration: number = (new Date().getTime() - startTime) / 1000;
		await logger.info(`Finished code analysis in ${duration}s.`);
	}
}
