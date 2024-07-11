/**
 * Adds a left indentation to the message with the specified amount of spaces.
 * @param msg The message to indent.
 * @param spaces The amount of spaces to indent the message with.
 * @since 0.11.0
 */
export function addLeftIndent(msg: string, spaces: number = 2): string {
	return msg
		.split("\n")
		.map((line: string): string => `${" ".repeat(spaces)}${line}`)
		.join("\n");
}
