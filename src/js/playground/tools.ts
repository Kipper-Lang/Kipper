/**
 * Script for providing additional tools for the playground.
 */

/**
 * Escapes all '&', '<' and '>' characters.
 */
export function escapeHTMLChars(str: string): string {
	return str
		.replace(new RegExp("&", "g"), "&amp;")
		.replace(new RegExp("<", "g"), "&lt;")
		.replace(new RegExp(">", "g"), "&gt;");
}
