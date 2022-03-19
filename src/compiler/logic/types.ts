/**
 * Types and type matching that is used to differentiate types in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

/**
 * All available variable types inside Kipper.
 */
export type KipperType = "void" | "num" | "str" | "char" | "bool" | "list";

/**
 * All available storage types inside Kipper.
 */
export type KipperStorageType = "var" | "const";
