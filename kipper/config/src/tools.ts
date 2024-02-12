import { NotFoundError, InvalidPathError, ConfigErrorMetaData } from "./errors";
import * as fs from "node:fs/promises";

/**
 * Checks if a file or directory exists and is of a certain type.
 *
 * This also automatically checks that the given path is readable and writable.
 * @param path The path to check.
 * @param mode The mode to check the path with. (Either "r" or "rw")
 * @param type The type of the path to check. (Either "file" or "dir)
 * @param meta The metadata for any error that may be thrown.
 * @since 0.11.0
 */
export async function ensureExistsHasPermAndIsOfType(
	path: string,
	mode: "r" | "rw",
	type: "file" | "dir" = "file",
	meta: ConfigErrorMetaData
): Promise<void> {
	try {
		await fs.access(path, mode == "r" ? fs.constants.R_OK : fs.constants.R_OK | fs.constants.W_OK);

		const stats = await fs.stat(path);
		if ((type === "file" && !stats.isFile()) || (type === "dir" && !stats.isDirectory())) {
			throw new InvalidPathError(path, `The path is not a ${type}`, meta);
		}
	} catch (e) {
		if (e instanceof InvalidPathError) {
			throw e;
		} else if ((<Error & {code: string}>e).code === "ENOENT") {
			throw new NotFoundError(path, meta);
		} else {
			throw new InvalidPathError(path, "The path is not readable or writable", meta);
		}
	}
}
