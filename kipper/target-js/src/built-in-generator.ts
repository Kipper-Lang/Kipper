/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
import type { BuiltInFunction, InternalFunction, TranslatedCodeLine } from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";
import { createJSFunctionSignature, getJavaScriptBuiltInIdentifier, getJSFunctionSignature } from "./tools";
import * as stream from "stream";

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
export class JavaScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async numToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getJavaScriptBuiltInIdentifier(signature.identifier),
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

	async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getJavaScriptBuiltInIdentifier(signature.identifier),
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

	async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getJavaScriptBuiltInIdentifier(signature.identifier),
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

	async boolToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getJavaScriptBuiltInIdentifier(signature.identifier),
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

	async slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const objLikeIdentifier = signature.params[0];
		const startIdentifier = signature.params[1];
		const endIdentifier = signature.params[2];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getJavaScriptBuiltInIdentifier(signature.identifier),
				" ",
				"=",
				" ",
				createJSFunctionSignature(signature),
				" ",
				`{ return ${objLikeIdentifier} ? ${objLikeIdentifier}.slice(${startIdentifier}, ${endIdentifier}) : ${objLikeIdentifier}; }`,
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
				getJavaScriptBuiltInIdentifier(signature.identifier),
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
