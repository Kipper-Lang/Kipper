/**
 * Replaces the keys of an object with the result of the callback function.
 * @param obj The object to replace the keys of.
 * @param callback The callback function to replace the keys with.
 * @since 0.11.0
 */
export function replaceObjKeys<O extends string | number | symbol, N extends string | number | symbol, V = any>(
	obj: Record<O, V>,
	callback: (key: O) => N,
): Record<N, V> {
	const result = {} as Record<N, V>;
	for (const key in obj) {
		result[callback(key)] = obj[key];
	}
	return result;
}
