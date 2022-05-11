/**
 * 'compile' command for compiling a single file
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.5
 */
import { Command, flags } from "@oclif/command";
import {KipperCompiler, KipperParseStream} from "@kipper/core";
import { KipperLogger } from "@kipper/core";
import { defaultCliEmitHandler } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { writeCompilationResult } from "../compile";

export default class Compile extends Command {
	static description = "Compiles a Kipper program.";

	// TODO! Add examples when the command moves out of development
	static examples = [];

	static args = [
		{
			name: "file",
			required: true,
			description: "The file that should be compiled.",
		},
	];

	static flags = {
		encoding: flags.string({
			default: "utf8",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
		}),
		outputDir: flags.string({
			default: "build",
			description: `The build directory where the compiled files should be placed. If the path does not exist, it will be created.`,
		}),
	};

	async run() {
		const { args, flags } = this.parse(Compile);
		const logger = new KipperLogger(defaultCliEmitHandler);
		const compiler = new KipperCompiler(logger);

		// Ensure the encoding is valid
		verifyEncoding(flags.encoding);

		// Start timer for processing
		const startTime: number = new Date().getTime();

		// Analyse the file
		const file: KipperParseFile = await KipperParseFile.fromFile(args.file, flags.encoding as KipperEncoding);
		const result = await compiler.compile(
      new KipperParseStream(
        file.stringContent,
        file.name,
        file.absolutePath,
        file.charStream
      )
    );

		await writeCompilationResult(result, file, flags.outputDir, flags.encoding as KipperEncoding);

		// Finished!
		const duration: number = (new Date().getTime() - startTime) / 1000;
		await logger.info(`Finished code compilation in ${duration}s.`);
	}
}
