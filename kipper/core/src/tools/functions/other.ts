/**
 * Utility functions that don't fit in any other category.
 * @since 0.11.0
 */

/**
 * Returns {@link num} unchanged if its positive, otherwise if its negative it will return 0.
 * @since 0.4.0
 */
export function getNaturalOrZero(num: number): number {
	return num < 0 ? 0 : num;
}

/**
 * Apply title-case formatting on the specific string e.g. the first character of a word/char sequence must always be
 * uppercase.
 * @param str The string to modify.
 * @since 0.8.0
 */
export function titleCase(str: string): string {
	return str.replace(/\b\S/g, (t) => t.toUpperCase());
}

/**
 * Generates for the specific types the corresponding conversion function identifier that should be implemented by the
 * {@link KipperTargetBuiltInGenerator}.
 * @param originalType The original type.
 * @param destType The type to convert to.
 * @since 0.8.0
 */
export function getConversionFunctionIdentifier(originalType: string, destType: string): string {
	return `${originalType}To${titleCase(destType)}`;
}
