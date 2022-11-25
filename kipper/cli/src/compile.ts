/**
 * CLI implementation and wrapper functions for Kipper compilations.
 * @since 0.1.0
 */
import { KipperCompileResult, KipperCompileTarget, KipperParseStream } from "@kipper/core";
import { constants, promises as fs } from "fs";
import { KipperFileWriteError, KipperInvalidInputError } from "./errors";
import * as path from "path";
import { KipperEncoding, KipperParseFile } from "./file-stream";
import { KipperJavaScriptTarget } from "@kipper/target-js";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

/**
 * Fetches the target that the program will compile to based on the passed identifier.
 * @param name The name of the target.
 * @since 0.10.0
 */
export async function getTarget(name: string): Promise<KipperCompileTarget> {
	switch (name) {
		case "js": {
			return new KipperJavaScriptTarget();
		}
		case "ts": {
			return new KipperTypeScriptTarget();
		}
		default:
			throw new KipperInvalidInputError(`Invalid target '${name}'.`);
	}
}

/**
 * Evaluates the file or stream provided by the command arguments or flags.
 * @param args The arguments that were passed to the command.
 * @param flags The flags that were passed to the command.
 * @since 0.10.0
 */
export async function getFile(
	args: { [name: string]: any },
	flags: { [name: string]: any },
): Promise<KipperParseFile | KipperParseStream> {
	if (args.file) {
		return await KipperParseFile.fromFile(args.file, flags["encoding"] as KipperEncoding);
	} else if (flags["string-code"]) {
		return new KipperParseStream(flags["string-code"]);
	} else {
		throw new KipperInvalidInputError("Argument 'file' or flag '-s/--string-code' must be populated. Aborting...");
	}
}

/**
 * Writes the file that exist inside the {@link KipperCompileResult compilation result}.
 * @param result The result instance containing the program metadata.
 * @param srcFile The source parse file or stream.
 * @param outputDir The output dir where the files should be placed. This will be created if it does not exist.
 * @param target The target that the program should compile to.
 * @param encoding The encoding to write the file with.
 * @returns The path to the output file.
 */
export async function writeCompilationResult(
	result: KipperCompileResult,
	srcFile: KipperParseFile | KipperParseStream,
	outputDir: string,
	target: KipperCompileTarget,
	encoding: KipperEncoding,
): Promise<string> {
	const buildPath = path.resolve(outputDir);
	const outPath = `${buildPath}/${srcFile instanceof KipperParseFile ? srcFile.path.name : srcFile.name}.${
		target.fileExtension
	}`;
	try {
		// Create the directory if it does not exist
		try {
			await fs.access(buildPath, constants.R_OK);
		} catch (e) {
			await fs.mkdir(buildPath);
		}

		// Write the output code
		const code = result.write();

		// Create a buffer with the proper encoding that can be written to a file
		let buffer: Buffer;
		if (encoding === "utf16le") {
			buffer = Buffer.from(`\ufeff${code}`, "utf16le");
		} else if (encoding === "utf8") {
			buffer = Buffer.from(code, "utf8");
		} else {
			buffer = Buffer.from(code, "ascii");
		}

		await fs.writeFile(outPath, buffer, { encoding: encoding });
	} catch (e) {
		throw new KipperFileWriteError(outPath);
	}

	return outPath;
}
