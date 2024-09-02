/**
 * The TypeScript translation target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { BuiltInFunction, ProcessedType } from "@kipper/core";
import { BuiltInType, BuiltInVariable, KipperCompileTarget } from "@kipper/core";
import { JavaScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { JavaScriptTargetCodeGenerator } from "./code-generator";
import { JavaScriptTargetBuiltInGenerator } from "./built-in-generator";

/**
 * The JavaScript translation target for the Kipper language.
 * @since 0.10.0
 */
export class KipperJavaScriptTarget extends KipperCompileTarget {
	/**
	 * The internal identifier for the global Kipper object storing runtime definitions.
	 * @since 0.10.0
	 */
	static readonly internalObjectIdentifier = "__kipper";

	/**
	 * All reserved identifiers in JavaScript (and TypeScript for good measure) that may not be overwritten.
	 * @since 0.10.0
	 */
	static readonly reservedIdentifiers: Array<string> = [
		"break",
		"case",
		"catch",
		"class",
		"const",
		"continue",
		"debugger",
		"default",
		"delete",
		"do",
		"else",
		"enum",
		"export",
		"extends",
		"false",
		"finally",
		"for",
		"function",
		"if",
		"import",
		"in",
		"instanceof",
		"new",
		"null",
		"return",
		"super",
		"switch",
		"this",
		"throw",
		"true",
		"try",
		"typeof",
		"var",
		"void",
		"while",
		"with",
		"as",
		"implements",
		"interface",
		"let",
		"package",
		"private",
		"protected",
		"public",
		"static",
		"yield",
		"any",
		"boolean",
		"constructor",
		"declare",
		"get",
		"module",
		"require",
		"number",
		"set",
		"string",
		"symbol",
		"type",
		"from",
		"of",
	];

	constructor(
		semanticAnalyser: JavaScriptTargetSemanticAnalyser = new JavaScriptTargetSemanticAnalyser(),
		codeGenerator: JavaScriptTargetCodeGenerator = new JavaScriptTargetCodeGenerator(),
		builtInGenerator: JavaScriptTargetBuiltInGenerator = new JavaScriptTargetBuiltInGenerator(),
	) {
		super("javascript", semanticAnalyser, codeGenerator, builtInGenerator, "js");
	}

	/**
	 * Fetches the reserved identifier for the translated code.
	 *
	 * This will also ensure that {@link BuiltInVariable local variables} are not registered onto the global object.
	 * Those will simply stay as local variables with the same identifier.
	 * @param signature The identifier or signature object to translate to its JavaScript form.
	 * @since 0.10.0
	 */
	public static getBuiltInIdentifier(signature: string | BuiltInVariable | BuiltInFunction | BuiltInType): string {
		if (typeof signature === "string") {
			return `${this.internalObjectIdentifier}.${signature}`;
		}
		return signature instanceof BuiltInVariable && signature.local
			? signature.identifier
			: this.getBuiltInIdentifier(signature.identifier);
	}

	/**
	 * Gets the builtin type for a Kipper type.
	 * @since 0.12.0
	 */
	public static getRuntimeType(type: ProcessedType): string {
		if (type instanceof BuiltInType) {
			return this.getBuiltInIdentifier(`builtIn.${type.identifier}`);
		}
		return type.identifier;
	}
}

/**
 * The JavaScript translation target for the Kipper language.
 *
 * Alias for {@link KipperJavaScriptTarget}.
 * @since 0.10.0
 */
export const TargetJS = KipperJavaScriptTarget;
