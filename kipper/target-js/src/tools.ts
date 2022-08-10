/**
 * Tools for handling the translation of Kipper code to JavaScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */

/**
 * Fetches the reserved identifier for the translated code.
 * @param identifier The identifier to translate to its TypeScript form.
 * @since 0.10.0
 */
export function getJavaScriptBuiltInIdentifier(identifier: string): string {
	return `__kipper.${identifier}`;
}
