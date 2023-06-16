/**
 * CLI implementation for the Kipper language
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 */
export { run } from "@oclif/command";

export * from "./file-stream";
export * from "./logger";
export * from "./errors";
export * from "./compile";

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/cli";
// eslint-disable-next-line no-unused-vars
export const version = "0.11.0-alpha.0";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0-or-later";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Luna-Klatzer/Kipper";
