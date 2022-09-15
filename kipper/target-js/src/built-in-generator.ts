/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { BuiltInFunction, TranslatedCodeLine } from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";
import { createJSFunctionSignature, getJSFunctionSignature } from "./tools";

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
export class JavaScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async numToStr(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

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
		const convArgIdentifier = signature.params[0];

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
		const convArgIdentifier = signature.params[0];

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
		const convArgIdentifier = signature.params[0];

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
		const printArgIdentifier = signature.params[0];

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
