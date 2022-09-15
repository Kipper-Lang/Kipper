/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type { TranslatedCodeLine, VariableDeclaration } from "@kipper/core";
import { createTSFunctionSignature, getTSFunctionSignature, getTypeScriptType } from "./tools";
import { createJSFunctionSignature, getJSFunctionSignature, JavaScriptTargetCodeGenerator } from "@kipper/target-js";
import { FunctionDeclaration } from "@kipper/core";

/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @since 0.8.0
 */
export class TypeScriptTargetCodeGenerator extends JavaScriptTargetCodeGenerator {
	/**
	 * Translates a {@link FunctionDeclaration} into the TypeScript language.
	 */
	functionDeclaration = async (node: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Function signature and body
		const signature = getTSFunctionSignature(node);
		const functionBody = await semanticData.functionBody.translateCtxAndChildren();

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [[createTSFunctionSignature(signature), " ", "{"], ...functionBody.slice(1, -1), ["}"]];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the TypeScript language.
	 */
	variableDeclaration = async (node: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const tsType = getTypeScriptType(typeData.valueType);
		const assign = semanticData.value ? await semanticData.value.translateCtxAndChildren() : [];

		// Only add ' = EXP' if assignValue is defined
		return [
			[
				storage,
				" ",
				semanticData.identifier,
				":",
				" ",
				tsType,
				...(assign.length > 0 ? [" ", "=", " ", ...assign] : []),
				";",
			],
		];
	};
}
