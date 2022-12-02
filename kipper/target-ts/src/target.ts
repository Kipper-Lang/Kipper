/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
import { KipperCompileTarget } from "@kipper/core";
import { TypeScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { TypeScriptTargetCodeGenerator } from "./code-generator";
import { TypeScriptTargetBuiltInGenerator } from "./built-in-generator";
import { TargetJS } from "@kipper/target-js/lib/target";

/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
export class KipperTypeScriptTarget extends KipperCompileTarget {
	/**
	 * The internal identifier for the global Kipper object storing runtime definitions.
	 * @since 0.10.0
	 */
	static readonly internalObjectIdentifier = TargetJS.internalObjectIdentifier;

	/**
	 * All reserved identifiers in JavaScript/TypeScript that may not be overwritten.
	 * @since 0.10.0
	 */
	static readonly reservedIdentifiers = TargetJS.reservedIdentifiers;

	constructor(
		semanticAnalyser: TypeScriptTargetSemanticAnalyser = new TypeScriptTargetSemanticAnalyser(),
		codeGenerator: TypeScriptTargetCodeGenerator = new TypeScriptTargetCodeGenerator(),
		builtInGenerator: TypeScriptTargetBuiltInGenerator = new TypeScriptTargetBuiltInGenerator(),
	) {
		super("typescript", semanticAnalyser, codeGenerator, builtInGenerator, "ts");
	}
}

/**
 * The TypeScript translation target for the Kipper language.
 *
 * Alias for {@link KipperTypeScriptTarget}.
 * @since 0.10.0
 */
export const TargetTS = KipperTypeScriptTarget;
