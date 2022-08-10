/**
 * Tools for handling the translation of Kipper to TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	kipperBoolType,
	kipperFuncType,
	kipperListType,
	kipperMetaType,
	kipperNumType,
	kipperStrType,
	KipperType,
	kipperVoidType,
} from "@kipper/core";
import { KipperNotImplementedError } from "@kipper/core";

/**
 * Fetches the typescript equivalent for a {@link KipperType}.
 * @param kipperType The type to get the equivalent for.
 * @since 0.8.0
 */
export function getTypeScriptType(kipperType: KipperType): string {
	switch (kipperType) {
		case kipperVoidType:
			return "void";
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

/**
 * Fetches the reserved identifier for the translated code.
 * @param identifier The identifier to translate to its TypeScript form.
 * @since 0.8.0
 */
export function getTypeScriptBuiltInIdentifier(identifier: string): string {
	return `__kipper.${identifier}`;
}
