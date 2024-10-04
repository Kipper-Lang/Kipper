/**
 * Returns the string (JavaScript) representation of the global scope.
 * @since 0.13.0
 */
export const createGlobalScope = (): string => `var __globalScope =
  typeof __globalScope !== "undefined"
    ? __globalScope
    : typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
          ? global
          : typeof self !== "undefined"
            ? self
            : {};
`.replace(/\n| {2}|	/g, "");

