/**
 * CLI implementation and wrapper functions for Kipper compilations.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { KipperCompileResult, KipperParseStream } from "@kipper/core";
import { constants, promises as fs } from "fs";
import { KipperFileWriteError } from "./errors";
import * as path from "path";
import { KipperEncoding, KipperParseFile } from "./file-stream";

/**
 * Writes the file that exist inside the {@link KipperCompileResult compilation result}.
 * @param result The result instance containing the program metadata.
 * @param srcFile The source parse file or stream.
 * @param outputDir The output dir where the files should be placed. This will be created if it does not exist.
 * @param encoding The encoding to write the file with.
 * @returns The path to the output file.
 */
export async function writeCompilationResult(
	result: KipperCompileResult,
	srcFile: KipperParseFile | KipperParseStream,
	outputDir: string,
	encoding: KipperEncoding,
): Promise<string> {
	const buildPath = path.resolve(outputDir);
	const outPath = `${buildPath}/${srcFile instanceof KipperParseFile ? srcFile.path.name : srcFile.name}.ts`;
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
    if (encoding === 'utf16le') {
      buffer = Buffer.from(`\ufeff${code}`, 'utf16le');
    } else if (encoding === 'utf8') {
      buffer = Buffer.from(code, 'utf8');
    } else {
      buffer = Buffer.from(code, 'ascii');
    }

		await fs.writeFile(outPath, buffer, { encoding: encoding });
	} catch (e) {
		throw new KipperFileWriteError(outPath);
	}

	return outPath;
}
