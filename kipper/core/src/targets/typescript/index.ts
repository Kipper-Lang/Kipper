/**
 * Defines the TypeScript translation target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { KipperCompileTarget } from "../../compiler";
import { TypeScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { TypeScriptTargetCodeGenerator } from "./code-generator";
import { TypeScriptTargetBuiltInGenerator } from "./built-in-generator";

export class TypeScriptTarget extends KipperCompileTarget {
	constructor(
		semanticAnalyser: TypeScriptTargetSemanticAnalyser = new TypeScriptTargetSemanticAnalyser(),
		codeGenerator: TypeScriptTargetCodeGenerator = new TypeScriptTargetCodeGenerator(),
		builtInGenerator: TypeScriptTargetBuiltInGenerator = new TypeScriptTargetBuiltInGenerator(),
	) {
		super("typescript", semanticAnalyser, codeGenerator, builtInGenerator);
	}
}

export { TypeScriptTargetSemanticAnalyser } from "./semantic-analyser";
export { TypeScriptTargetCodeGenerator } from "./code-generator";
