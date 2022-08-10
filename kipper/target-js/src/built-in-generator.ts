/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { BuiltInFunction, TranslatedCodeLine } from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";

/**
 * Generates the signature for the function based on the {@link funcSpec}, which can be used in an JavaScript env.
 * @param funcSpec The function spec object containing the metadata of the function.
 * @since 0.10.0
 */
function getJSFunctionSignature(funcSpec: BuiltInFunction): {
	identifier: string;
	args: Array<string>;
} {
	// Translate the function signature into JavaScript
	const identifier: string = funcSpec.identifier;
	const args: Array<string> = funcSpec.args.map((arg) => arg.identifier);

	return { identifier, args };
}

/**
 * Generates the JavaScript function signature, based on the {@link signature signature metadata}.
 * @param signature The function signature metadata.
 * @since 0.10.0
 */
function createJSFunctionSignature(signature: { identifier: string; args: Array<string> }): string {
	const { identifier, args } = signature;
	return `function ${identifier}(${args.join(", ")})`;
}

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
export class JavaScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async numToStr(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ return (${convArgIdentifier}).toString(); }`,
				";",
			],
		];
	}

	async strToNum(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ return parseInt(${convArgIdentifier}); }`,
				";",
			],
		];
	}

	async boolToStr(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ return \`\${${convArgIdentifier}}\`; }`,
				";",
			],
		];
	}

	async boolToNum(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ return ${convArgIdentifier} ? 1 : 0; }`,
				";",
			],
		];
	}

	async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.args[0][0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				`__kipper.${signature.identifier}`,
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ console.log(${printArgIdentifier}); }`,
				";",
			],
		];
	}
}
