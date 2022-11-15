/**
 * Tools for handling the translation of Kipper code to JavaScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */

import type { BuiltInFunction, BuiltInFunctionArgument, FunctionDeclaration } from "@kipper/core";
import { TranslatedCodeLine } from "@kipper/core";

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an JavaScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 * @since 0.10.0
 */
export function getJSFunctionSignature(funcSpec: BuiltInFunction | FunctionDeclaration): {
	identifier: string;
	params: Array<string>;
} {
	if ("antlrRuleCtx" in funcSpec) {
		const semanticData = funcSpec.getSemanticData();

		return {
			identifier: semanticData.identifier,
			params: semanticData.params.map((param) => param.getSemanticData().identifier),
		};
	} else {
		return {
			identifier: funcSpec.identifier,
			params: funcSpec.params.map((arg: BuiltInFunctionArgument) => arg.identifier),
		};
	}
}

/**
 * Generates the JavaScript function signature, based on the {@link signature signature metadata}.
 * @param signature The function signature metadata.
 * @since 0.10.0
 */
export function createJSFunctionSignature(signature: { identifier: string; params: Array<string> }): string {
	const { identifier, params } = signature;
	return `function ${identifier}(${params.join(", ")})`;
}

/**
 * Fetches the reserved identifier for the translated code.
 * @param identifier The identifier to translate to its TypeScript form.
 * @since 0.10.0
 */
export function getJavaScriptBuiltInIdentifier(identifier: string): string {
	return `__kipper.${identifier}`;
}

/**
 * Indents the lines of the {@link arr} with the specified {@link spaces number of spaces}.
 * @param arr The array of code lines.
 * @param spaces The number of spaces to add at the start of every line.
 * @since 0.10.0
 */
export function indentLines(arr: Array<TranslatedCodeLine>, spaces: number = 2): Array<TranslatedCodeLine> {
	return arr.map((line: TranslatedCodeLine) => {
		line[0] = `${" ".repeat(spaces)}${line[0]}`;
		return line;
	});
}

/**
 * Removes the first braces around the given code lines that were generated by translating a {@link CompoundStatement}.
 * @param arr The array of code lines that.
 * @since 0.10.0
 */
export function removeBraces(arr: Array<TranslatedCodeLine>): Array<TranslatedCodeLine> {
	return arr.slice(1, arr.length - 1);
}
