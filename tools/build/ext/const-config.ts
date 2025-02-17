import * as path from "path";
import { Options } from "ejs";

export const rootDir = path.resolve(__dirname, "..", "..", "..");
export const srcRootDir = path.resolve(`${rootDir}/src`);
export const destRootDir = path.resolve(`${rootDir}/build`);
export const distRootDir = path.resolve(`${rootDir}/dist`);
export const srcRootDocs = `${srcRootDir}/docs`;
export const destRootDocs = `${destRootDir}/docs`;
export const distRootDocs = `${distRootDir}/docs`;
export const configPath = path.resolve(`${srcRootDir}/config.json`);
export const ejsOptions: Options = { beautify: true, root: path.resolve(`${srcRootDir}/partials/`) };
export const noAPIDocsFlag = process.argv.includes("--no-api-docs");
export const prodFlag = process.argv.includes("--prod");
export const debuggerMessages = [
	// Debugger messages that should be ignored in a child process
	"Debugger listening on ws://",
	"For help, see: https://nodejs.org/en/docs/inspector",
	"Debugger attached.",
	"Waiting for the debugger to disconnect...",
  "DeprecationWarning",
  "ExperimentalWarning",
];
export const localsPath = path.resolve(`${srcRootDir}/locales`);
