/**
 * The TypeScript translation target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import { KipperCompileTarget } from "@kipper/core";
import { TypeScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { TypeScriptTargetCodeGenerator } from "./code-generator";
import { TypeScriptTargetBuiltInGenerator } from "./built-in-generator";

/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
export class KipperTypeScriptTarget extends KipperCompileTarget {
	constructor(
		semanticAnalyser: TypeScriptTargetSemanticAnalyser = new TypeScriptTargetSemanticAnalyser(),
		codeGenerator: TypeScriptTargetCodeGenerator = new TypeScriptTargetCodeGenerator(),
		builtInGenerator: TypeScriptTargetBuiltInGenerator = new TypeScriptTargetBuiltInGenerator(),
	) {
		super("typescript", semanticAnalyser, codeGenerator, builtInGenerator, "ts");
	}
}

export * from "./semantic-analyser";
export * from "./code-generator";
export * from "./built-in-generator";
export * from "./tools";

// eslint-disable-next-line no-unused-vars
export const name = "@kipper/target-ts";
// eslint-disable-next-line no-unused-vars
export const version = "0.10.0-alpha.4";
// eslint-disable-next-line no-unused-vars
export const author = "Luna Klatzer";
// eslint-disable-next-line no-unused-vars
export const license = "GPL-3.0";
// eslint-disable-next-line no-unused-vars
export const github = "https://github.com/Luna-Klatzer/Kipper";
