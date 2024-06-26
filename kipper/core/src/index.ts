/**
 * The Kipper programming language and compiler for the browser and Node.js!
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
export * from "./errors";
export * from "./warnings";
export * from "./compiler";
export * from "./logger";
export * from "./tools";
export * from "./antlr-error-listener";
export * as compiler from "./compiler";
export * as logger from "./logger";
export * as errors from "./errors";
export * as utils from "./tools";

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/core";
// eslint-disable-next-line no-unused-vars
export const version = "0.11.0-alpha.4";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0-or-later";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Kipper-Lang/Kipper";
