import type { TranslatedCodeLine } from "../../compiler";

/**
 * Converts an array of generated code lines to a string which can be written to a file.
 * @since 0.11.0
 */
export function codeLinesToString(lines: Array<TranslatedCodeLine>, lineEnding: string): string {
	return lines.map((line: TranslatedCodeLine) => line.join("") + lineEnding).join("");
}
