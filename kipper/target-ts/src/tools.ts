/**
 * Tools for handling the translation of Kipper code to TypeScript.
 * @since 0.8.0
 */
import type {
	BuiltInFunction,
	BuiltInFunctionArgument,
	FunctionDeclaration,
	InternalFunction,
	InternalFunctionArgument,
	ProcessedType,
} from "@kipper/core";
import { TargetTS } from "./target";

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an TypeScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 * @since 0.10.0
 */
export function getTSFunctionSignature(funcSpec: InternalFunction | BuiltInFunction | FunctionDeclaration): {
	identifier: string;
	params: Array<{ identifier: string; type: ProcessedType | Array<ProcessedType> }>;
	returnType: ProcessedType | Array<ProcessedType>;
} {
	if ("antlrRuleCtx" in funcSpec) {
		const semanticData = funcSpec.getSemanticData();
		const typeData = funcSpec.getTypeSemanticData();

		return {
			identifier: semanticData.identifier,
			params: semanticData.params.map((param) => {
				return {
					identifier: param.getSemanticData().identifier,
					type: param.getTypeSemanticData().valueType,
				};
			}),
			returnType: typeData.type.returnType,
		};
	} else {
		return {
			identifier: funcSpec.identifier,
			params: funcSpec.params.map((arg: BuiltInFunctionArgument | InternalFunctionArgument) => {
				return {
					identifier: arg.identifier,
					type: Array.isArray(arg.valueType) ? arg.valueType : arg.valueType,
				};
			}),
			returnType: funcSpec.returnType,
		};
	}
}

/**
 * Generates the TypeScript function signature, based on the {@link signature signature metadata}.
 * @param signature The function signature metadata.
 * @param ignoreParams Whether or not to ignore the parameters of the function.
 * @since 0.10.0
 */
export function createTSFunctionSignature(
	signature: {
		identifier: string;
		params: Array<{ identifier: string; type: ProcessedType | Array<ProcessedType> }>;
		returnType: ProcessedType | Array<ProcessedType>;
	},
	ignoreParams: boolean = false,
): string {
	const { identifier, params } = signature;
	const argsSignature = ignoreParams
		? ""
		: `${params.map((p) => `${p.identifier}: ${TargetTS.getTypeScriptType(p.type)}`).join(", ")}`;

	return `function ${identifier}(${argsSignature}): ${TargetTS.getTypeScriptType(signature.returnType)}`;
}
