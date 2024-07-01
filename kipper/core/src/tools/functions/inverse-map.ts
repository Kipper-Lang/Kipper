import type { InverseMap } from "../types";

/**
 * Returns a given object with its keys and value inverted.
 * @param obj The object to inverse.
 * @since 0.11.0
 */
export function inverseMap<T extends Record<keyof T, keyof any>>(obj: T): InverseMap<T> {
	const result: T | any = {};
	for (const key in obj) {
		result[obj[key]] = key;
	}
	return result;
}
