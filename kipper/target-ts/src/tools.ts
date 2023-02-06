/**
 * Tools for handling the translation of Kipper code to TypeScript.
 * @since 0.8.0
 */
import {
	FunctionDeclaration,
	KipperNotImplementedError,
	BuiltInFunction,
	BuiltInFunctionArgument,
	kipperBoolType,
	KipperCompilableType,
	kipperFuncType,
	kipperListType,
	kipperMetaType,
	kipperNullType,
	kipperNumType,
	kipperStrType,
	kipperUndefinedType,
	kipperVoidType,
	InternalFunction,
	InternalFunctionArgument,
} from "@kipper/core";

/**
 * Fetches the typescript equivalent for a {@link KipperCompilableType}.
 * @param kipperType The type to get the equivalent for.
 * @since 0.8.0
 */
export function getTypeScriptType(kipperType: KipperCompilableType | Array<KipperCompilableType>): string {
	if (Array.isArray(kipperType)) {
		// Recursively call this function for each type in the array
		return `${kipperType.map(getTypeScriptType).join(" | ")}`;
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

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an TypeScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 * @since 0.10.0
 */
export function getTSFunctionSignature(funcSpec: InternalFunction | BuiltInFunction | FunctionDeclaration): {
	identifier: string;
	params: Array<{ identifier: string; type: KipperCompilableType | Array<KipperCompilableType> }>;
	returnType: KipperCompilableType | Array<KipperCompilableType>;
} {
	if ("antlrRuleCtx" in funcSpec) {
		const semanticData = funcSpec.getSemanticData();
		const typeData = funcSpec.getTypeSemanticData();

		return {
			identifier: semanticData.identifier,
			params: semanticData.params.map((param) => {
				return {
					identifier: param.getSemanticData().identifier,
					type: param.getTypeSemanticData().valueType.getCompilableType(),
				};
			}),
			returnType: typeData.returnType.getCompilableType(),
		};
	} else {
		return {
			identifier: funcSpec.identifier,
			params: funcSpec.params.map((arg: BuiltInFunctionArgument | InternalFunctionArgument) => {
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
	params: Array<{ identifier: string; type: KipperCompilableType | Array<KipperCompilableType> }>;
	returnType: KipperCompilableType | Array<KipperCompilableType>;
}): string {
	const { identifier, params } = signature;
	const argsSignature = `${params.map((p) => `${p.identifier}: ${getTypeScriptType(p.type)}`).join(", ")}`;

	return `function ${identifier}(${argsSignature}): ${getTypeScriptType(signature.returnType)}`;
}

export { getJavaScriptBuiltInIdentifier as getTypeScriptBuiltInIdentifier } from "@kipper/target-js";
