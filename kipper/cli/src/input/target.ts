import type { KipperCompileTarget } from "@kipper/core";
import { KipperJavaScriptTarget } from "@kipper/target-js";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { KipperInvalidInputError } from "../errors";

/**
 * Fetches the target that the program will compile to based on the passed identifier.
 * @param name The name of the target.
 * @since 0.10.0
 */
export function getTarget(name: string): KipperCompileTarget {
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
