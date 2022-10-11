/**
 * Tools for handling the translation of Kipper code to TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	BuiltInFunction,
	BuiltInFunctionArgument,
	FunctionDeclaration,
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

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an TypeScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 * @since 0.10.0
 */
export function getTSFunctionSignature(funcSpec: BuiltInFunction | FunctionDeclaration): {
	identifier: string;
	params: Array<{ identifier: string; type: KipperType }>;
	returnType: KipperType;
} {
	if ("antlrRuleCtx" in funcSpec) {
		const semanticData = funcSpec.getSemanticData();
		const typeData = funcSpec.getTypeSemanticData();

		return {
			identifier: semanticData.identifier,
			params: semanticData.params.map((param) => {
				return { identifier: param.getSemanticData().identifier, type: param.getTypeSemanticData().valueType };
			}),
			returnType: typeData.returnType,
		};
	} else {
		return {
			identifier: funcSpec.identifier,
			params: funcSpec.params.map((arg: BuiltInFunctionArgument) => {
				return { identifier: arg.identifier, type: arg.valueType };
			}),
			returnType: funcSpec.returnType,
		};
	}
}

/**
 * Generates the TypeScript function signature, based on the {@link signature signature metadata}.
 * @param signature The function signature metadata.
 * @since 0.10.0
 */
export function createTSFunctionSignature(signature: {
	identifier: string;
	params: Array<{ identifier: string; type: KipperType }>;
	returnType: KipperType;
}): string {
	const { identifier, params } = signature;
	const argsSignature = `${params.map((p) => `${p.identifier}: ${getTypeScriptType(p.type)}`).join(", ")}`;

	return `function ${identifier}(${argsSignature}): ${getTypeScriptType(signature.returnType)}`;
}

export { getJavaScriptBuiltInIdentifier as getTypeScriptBuiltInIdentifier } from "@kipper/target-js";
