/**
 * Adds a left indentation to the message with the specified amount of spaces.
 * @param msg The message to indent.
 * @param firstLinePrefix The prefix to add to the message on the first line.
 * @param spaces The amount of spaces to indent the message with.
 * @since 0.11.0
 */
export function addLeftIndent(msg: string, firstLinePrefix: string = "", spaces: number = 2): string {
	return msg
		.split("\n")
		.map(
			(line, index) =>
				(index === 0 ? " ".repeat(spaces) + firstLinePrefix : " ".repeat(spaces + firstLinePrefix.length)) + line,
		)
		.join("\n");
}
