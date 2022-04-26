/**
 * Constant values for Kipper.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.3.0
 */

/**
 * All available variable types inside Kipper.
 */
export type KipperType = "void" | "num" | "str" | "char" | "bool" | "list";
export const kipperTypes: Array<string> = ["void", "num", "str", "char", "bool", "list"];

/**
 * All available storage types inside Kipper.
 */
export type KipperStorageType = "var" | "const";

/**
 * All available arithmetic operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticOperation = "+" | "-" | "*" | "**" | "/" | "%";

/**
 * All available arithmetic assignment operations inside Kipper.
 * @since 0.3.0
 */
export type KipperArithmeticAssignOperation = "+=" | "-=" | "*=" | "/=";
