/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
import type { BuiltInFunction, BuiltInVariable, KipperBuiltInType } from "@kipper/core";
import {
	kipperBoolType,
	KipperCompileTarget,
	kipperFuncType,
	kipperListType,
	kipperMetaType,
	KipperNotImplementedError,
	kipperNullType,
	kipperNumType,
	kipperStrType,
	kipperUndefinedType,
	kipperVoidType,
} from "@kipper/core";
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

	/**
	 * Fetches the reserved identifier for the translated code.
	 *
	 * This will also ensure that {@link BuiltInVariable.local local variables} are not registered onto the global object.
	 * Those will simply stay as local variables with the same identifier.
	 * @param signature The identifier or signature object to translate to its TypeScript form.
	 * @since 0.10.0
	 */
	public static getBuiltInIdentifier(signature: string | BuiltInVariable | BuiltInFunction): string {
		return TargetJS.getBuiltInIdentifier(signature);
	}

	/**
	 * Fetches the typescript equivalent for a {@link KipperBuiltInType}.
	 * @param kipperType The type to get the equivalent for.
	 * @since 0.8.0
	 */
	public static getTypeScriptType(kipperType: KipperBuiltInType | Array<KipperBuiltInType>): string {
		if (Array.isArray(kipperType)) {
			// Recursively call this function for each type in the array
			return `${kipperType.map(this.getTypeScriptType).join(" | ")}`;
		}

		switch (kipperType) {
			case kipperBoolType:
				return "boolean";
			case kipperFuncType:
				return "Function";
			case kipperListType:
				return "Array";
			case kipperMetaType:
				return "object";
			case kipperNullType:
				return "null";
			case kipperNumType:
				return "number";
			case kipperStrType:
				return "string";
			case kipperUndefinedType:
				return "undefined";
			case kipperVoidType:
				return "void";
			default:
				throw new KipperNotImplementedError(`TypeScript type for ${kipperType} not implemented.`);
		}
	}
}

/**
 * The TypeScript translation target for the Kipper language.
 *
 * Alias for {@link KipperTypeScriptTarget}.
 * @since 0.10.0
 */
export const TargetTS = KipperTypeScriptTarget;
