/**
 * Full module containing the Kipper core, Kipper CLI and extensions.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.9.0
 */

// The 'kipper' module should export the Compiler core and the Kipper targets.
export * from "@kipper/core";
export * from "@kipper/target-js";
export * from "@kipper/target-ts";

// eslint-disable-next-line no-unused-vars
export const name = "kipper";
// eslint-disable-next-line no-unused-vars
export const version = "0.13.0-alpha.2";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0-or-later";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Kipper-Lang/Kipper";
