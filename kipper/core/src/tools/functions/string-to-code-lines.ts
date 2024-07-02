import type { TranslatedCodeLine } from "../../compiler";

/**
 *
 * @param genCode
 * @param lineEnding
 */
export function stringToCodeLines(genCode: string, lineEnding: string): Array<TranslatedCodeLine> {
	return genCode.split(lineEnding).map((line) => [line]);
}
