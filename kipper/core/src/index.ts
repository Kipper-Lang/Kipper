/**
 * The Kipper programming language and compiler for the browser and Node.js!
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */

// Load the module 'antlr4ts', as it has sometimes issues with circular dependencies and we need to make sure it
// loads in a specific way that doesn't break it.
import "antlr4ts/atn/ATNDeserializer";
import "antlr4ts/tree/xpath/XPathLexer";
import "antlr4ts";

export * from "./errors";
export * from "./warnings";
export * from "./compiler";
export * from "./logger";
export * from "./utils";
export * from "./antlr-error-listener";
export * as compiler from "./compiler";
export * as logger from "./logger";
export * as errors from "./errors";
export * as utils from "./utils";

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/core";
// eslint-disable-next-line no-unused-vars
export const version = "0.10.0";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0-or-later";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Luna-Klatzer/Kipper";
