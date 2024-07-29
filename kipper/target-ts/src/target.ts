/**
 * The TypeScript translation target for the Kipper language.
 * @since 0.10.0
 */
import type { BuiltInFunction, BuiltInVariable, ProcessedType } from "@kipper/core";
import { UnionType, CustomType } from "@kipper/core";
import { BuiltInTypes, KipperCompileTarget, KipperNotImplementedError } from "@kipper/core";
import { TypeScriptTargetSemanticAnalyser } from "./semantic-analyser";
import { TypeScriptTargetCodeGenerator } from "./code-generator";
import { TypeScriptTargetBuiltInGenerator } from "./built-in-generator";
import { TargetJS } from "@kipper/target-js";

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
	 * Fetches the typescript equivalent for a {@link KipperBuiltInTypeLiteral}.
	 * @param kipperType The type to get the equivalent for.
	 * @since 0.8.0
	 */
	public static getTypeScriptType(kipperType: ProcessedType): string {
		if (kipperType instanceof UnionType) {
			// Recursively call this function for each type in the array
			return `${(<UnionType>kipperType).unionTypes.map(KipperTypeScriptTarget.getTypeScriptType).join(" | ")}`;
		} else if (kipperType instanceof CustomType) {
			return kipperType.identifier;
		}

		switch (kipperType.identifier) {
			case BuiltInTypes.bool.identifier:
				return "boolean";
			case BuiltInTypes.type.identifier:
				return "InstanceType<typeof __kipper.Type>";
			case BuiltInTypes.null.identifier:
				return "null";
			case BuiltInTypes.num.identifier:
				return "number";
			case BuiltInTypes.str.identifier:
				return "string";
			case BuiltInTypes.undefined.identifier:
				return "undefined";
			case BuiltInTypes.void.identifier:
				return "void";
			case BuiltInTypes.Func.identifier: {
				const returnType = KipperTypeScriptTarget.getTypeScriptType((<typeof BuiltInTypes.Func>kipperType).returnType);
				const paramTypes = (<typeof BuiltInTypes.Func>kipperType).paramTypes
					.map((param, index) => `arg${index}: ${KipperTypeScriptTarget.getTypeScriptType(param)}`)
					.join(", ");
				return `(${paramTypes}) => ${returnType}`;
			}
			case BuiltInTypes.Array.identifier: {
				const memberType = KipperTypeScriptTarget.getTypeScriptType(
					(<typeof BuiltInTypes.Array>kipperType).genericTypeArguments[0].type,
				);
				return `Array<${memberType}>`;
			}
			case BuiltInTypes.any.identifier: {
				return "any";
			}
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
