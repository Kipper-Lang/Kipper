import type { ConfigErrorMetaData } from "./errors";
import { FileNotFoundError, InvalidPathError, RefInvalidPathError, RefNotFoundError } from "./errors";
import * as fs from "node:fs/promises";

/**
 * Checks if a file or directory exists and is of a certain type.
 *
 * This also automatically checks that the given path is readable and writable.
 * @param path The path to check.
 * @param mode The mode to check the path with. (Either "r" or "rw")
 * @param type The type of the path to check. (Either "file" or "dir)
 * @param meta The metadata for any error that may be thrown. This is used for verbose error messages inside the
 * {@link ConfigInterpreter} class. If not provided, it will throw standard errors.
 * @throws {RefNotFoundError} If the file or directory does not exist. (Only if meta is provided)
 * @throws {RefInvalidPathError} If the path is not readable or writable. (Only if meta is provided)
 * @throws {RefInvalidPathError} If the path is not of the specified type. (Only if meta is provided)
 * @throws {FileNotFoundError} If the file or directory does not exist. (Only if meta is not provided)
 * @throws {InvalidPathError} If the path is not readable or writable. (Only if meta is not provided)
 * @since 0.11.0
 */
export async function ensureExistsHasPermAndIsOfType(
	path: string,
	mode: "r" | "rw",
	type: "file" | "dir" = "file",
	meta?: ConfigErrorMetaData,
): Promise<void> {
	try {
		await fs.access(path, mode == "r" ? fs.constants.R_OK : fs.constants.R_OK | fs.constants.W_OK);

		const stats = await fs.stat(path);
		if ((type === "file" && !stats.isFile()) || (type === "dir" && !stats.isDirectory())) {
			throw meta
				? new RefInvalidPathError(path, `The path is not a ${type}`, meta)
				: new InvalidPathError(path, `The path is not a ${type}`);
		}
	} catch (e) {
		if (e instanceof RefInvalidPathError) {
			throw e;
		} else if ((<Error & { code: string }>e).code === "ENOENT") {
			throw meta ? new RefNotFoundError(path, meta) : new FileNotFoundError(path);
		} else {
			throw meta
				? new RefInvalidPathError(path, "The path is not readable or writable", meta)
				: new InvalidPathError(path, "The path is not readable or writable");
		}
	}
}
