/**
 * Tools for handling the translation of Kipper code to TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	kipperBoolType,
	kipperFuncType,
	kipperListType,
	kipperMetaType,
	KipperNotImplementedError,
	kipperNullType,
	kipperNumType,
	kipperStrType,
	KipperType,
	kipperUndefinedType,
	kipperVoidType,
} from "@kipper/core";

/**
 * Fetches the typescript equivalent for a {@link KipperType}.
 * @param kipperType The type to get the equivalent for.
 * @since 0.8.0
 */
export function getTypeScriptType(kipperType: KipperType): string {
	switch (kipperType) {
		case kipperVoidType:
			return "void";
		case kipperNullType:
			return "null";
		case kipperUndefinedType:
			return "undefined";
		case kipperFuncType:
			throw new KipperNotImplementedError("Lambda functions have not been implemented for TypeScript translation yet.");
		case kipperBoolType:
			return "boolean";
		/* The Kipper meta type is basically just a runtime string, which contains the identifier for the type */
		case kipperMetaType:
		case kipperStrType:
			return "string";
		case kipperNumType:
			return "number";
		case kipperListType:
			throw new KipperNotImplementedError("Kipper lists have not been implemented for TypeScript translation yet.");
	}
}

export { getJavaScriptBuiltInIdentifier as getTypeScriptBuiltInIdentifier } from "@kipper/target-js";
