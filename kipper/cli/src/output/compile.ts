/**
 * CLI implementation and wrapper functions for Kipper compilations.
 * @since 0.1.0
 */
import { KipperCompileResult } from "@kipper/core";
import { constants, promises as fs } from "fs";
import { KipperFileWriteError } from "../errors";
import { KipperEncoding } from "../input";

/**
 * Writes the file that exist inside the {@link KipperCompileResult compilation result}.
 * @param result The result instance containing the program metadata.
 * @param outDir The output dir where the files should be placed. This will be created if it does not exist.
 * @param outPath The output path where the compiled file should be placed.
 * @param encoding The encoding to write the file with.
 * @returns The path to the output file.
 */
export async function writeCompilationResult(
	result: KipperCompileResult,
	outDir: string,
	outPath: string,
	encoding: KipperEncoding,
): Promise<string> {
	try {
		// Create the directory if it does not exist
		try {
			await fs.access(outDir, constants.R_OK);
		} catch (e) {
			await fs.mkdir(outDir);
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
