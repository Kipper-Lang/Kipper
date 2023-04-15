import * as path from "path";
import { Options } from "ejs";

export const rootDir = path.resolve(__dirname, "..", "..", "..");
export const srcRootDir = path.resolve(`${rootDir}/src`);
export const destRootDir = path.resolve(`${rootDir}/build`);
export const srcRootDocs = `${srcRootDir}/docs`;
export const destRootDocs = `${destRootDir}/docs`;
export const configPath = path.resolve(`${srcRootDir}/config.json`);
export const ejsOptions: Options = { beautify: true, root: path.resolve(`${srcRootDir}/partials/`) };
