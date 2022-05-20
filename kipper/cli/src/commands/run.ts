/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler, KipperParseStream } from "@kipper/core";
import { KipperLogger } from "@kipper/core";
import { defaultCliEmitHandler } from "../logger";
import { KipperEncoding, KipperEncodings, KipperParseFile, verifyEncoding } from "../file-stream";
import { writeCompilationResult } from "../compile";
import { spawn } from "child_process";
import { LogLevel } from "@kipper/core";
import ts = require("typescript");
import { KipperInvalidInputError } from "../errors";

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
	static description = "Compiles and executes a Kipper program.";

	// TODO! Add examples when the command moves out of development
	static examples = [];

	static args = [
		{
			name: "file",
			required: false,
			description: "The file that should be compiled and run.",
		},
	];

	static flags = {
		encoding: flags.string({
			char: "e",
			default: "utf8",
			description: `The encoding that should be used to read the file (${KipperEncodings.join()}).`,
			parse: verifyEncoding,
		}),
		outputDir: flags.string({
      char: "o",
			default: "build",
			description:
				"The build directory where the compiled files should be placed. If the path does not exist, it will be created.",
		}),
		stringCode: flags.string({
      char: "s",
			description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
		}),
	};

	async run() {
		const { args, flags } = this.parse(Run);
		const logger = new KipperLogger(defaultCliEmitHandler, LogLevel.ERROR);
		const compiler = new KipperCompiler(logger);

		// Fetch the file
		let file: KipperParseFile | KipperParseStream;
		if (args.file) {
			file = await KipperParseFile.fromFile(args.file, flags.encoding as KipperEncoding);
		} else if (flags.stringCode) {
			file = await new KipperParseStream(flags.stringCode);
		} else {
			throw new KipperInvalidInputError("Argument 'file' or flag 'stringCode' must be populated. Aborting...");
		}

		// Run the file
		const result = await compiler.compile(
			new KipperParseStream(
				file.stringContent,
				file.name,
				file instanceof KipperParseFile ? file.absolutePath : file.filePath,
				file.charStream,
			),
		);

		await writeCompilationResult(result, file, flags.outputDir, flags.encoding as KipperEncoding);

		// Execute the program
		const jsProgram = ts.transpileModule(result.write(), { compilerOptions: { module: ts.ModuleKind.CommonJS } });
		executeKipperProgram(jsProgram.outputText);
	}
}
