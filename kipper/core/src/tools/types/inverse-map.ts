/**
 * Returns a given object with its keys and values inverted.
 *
 * @example
 * type Foo = {
 * 	a: "A",
 * 	b: "B",
 * 	c: "C",
 * };
 *
 * type Bar = InverseMap<Foo>;
 * // Bar = {
 * //   A: "a",
 * //   B: "b",
 * //   C: "c",
 * // }
 * @since 0.11.0
 */
export type InverseMap<T extends Record<keyof T, keyof any>> = {
	[P in T[keyof T]]: {
		[K in keyof T]: T[K] extends P ? K : never;
	}[keyof T];
};
