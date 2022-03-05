/**
 * Built-In Function implementation, which will convert a built-in function call to a proper TypeScript code snippet.
 * This means it will insert code rather than actually call it, to reduce overhead, and remove any dependencies when
 * running kipper itself.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

export const builtInFunctions: { [key: string]: (...args: any[]) => any } = {

};
