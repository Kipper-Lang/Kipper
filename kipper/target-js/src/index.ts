/**
 * The TypeScript translation target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import { KipperCompileTarget } from "@kipper/core";
import { JavaScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { JavaScriptTargetCodeGenerator } from "./code-generator";
import { JavaScriptTargetBuiltInGenerator } from "./built-in-generator";

/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
export class KipperJavaScriptTarget extends KipperCompileTarget {
	constructor(
		semanticAnalyser: JavaScriptTargetSemanticAnalyser = new JavaScriptTargetSemanticAnalyser(),
		codeGenerator: JavaScriptTargetCodeGenerator = new JavaScriptTargetCodeGenerator(),
		builtInGenerator: JavaScriptTargetBuiltInGenerator = new JavaScriptTargetBuiltInGenerator(),
	) {
		super("javascript", semanticAnalyser, codeGenerator, builtInGenerator, "js");
	}
}

export * from "./semantic-analyser";
export * from "./code-generator";
export * from "./built-in-generator";
export * from "./tools";

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/target-js";
// eslint-disable-next-line no-unused-vars
export const version = "0.10.0-alpha.2";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Luna-Klatzer/Kipper";
