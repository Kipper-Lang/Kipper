/**
 * The Kipper programming language and compiler for the browser and Node.js!
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
export * from "./compiler";
export * from "./errors";
export * from "./logger";
export * as compiler from "./compiler";
export * as logger from "./logger";
export * as errors from "./errors";
export * as utils from "./utils";

// Global variables to identify the project

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/core";
// eslint-disable-next-line no-unused-vars
export const version = "0.8.0";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Luna-Klatzer/Kipper";
