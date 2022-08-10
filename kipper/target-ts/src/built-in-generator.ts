/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type { BuiltInFunction, TranslatedCodeLine } from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";
import { getTypeScriptType } from "./tools";

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an TypeScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 */
function getTSFunctionSignature(funcSpec: BuiltInFunction): {
	type: string;
	identifier: string;
	args: Array<[string, string]>;
} {
	// Translate the function signature into TypeScript
	const identifier: string = funcSpec.identifier;
	const type: string = getTypeScriptType(funcSpec.returnType);
	const args: Array<[string, string]> = funcSpec.args.map((arg) => [arg.identifier, getTypeScriptType(arg.type)]);

	return { type, identifier, args };
}

function createTSFunctionSignature(signature: {
	type: string;
	identifier: string;
	args: Array<[string, string]>;
}): string {
	const { type, identifier, args } = signature;
	return `function ${identifier}(${args.map((arg) => `${arg[0]}: ${arg[1]}`).join(", ")}): ${type}`;
}

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
export class TypeScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async numToStr(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ return (${convArgIdentifier}).toString(); }`,
				";",
			],
		];
	}

	async strToNum(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ return parseInt(${convArgIdentifier}); }`,
				";",
			],
		];
	}

	async boolToStr(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ return \`\${${convArgIdentifier}}\`; }`,
				";",
			],
		];
	}

	async boolToNum(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ return ${convArgIdentifier} ? 1 : 0; }`,
				";",
			],
		];
	}

	async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ console.log(${printArgIdentifier}); }`,
				";",
			],
		];
	}
}
