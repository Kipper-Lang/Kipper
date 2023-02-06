/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
import type { BuiltInFunction, InternalFunction, TranslatedCodeLine } from "@kipper/core";
import { JavaScriptTargetBuiltInGenerator } from "@kipper/target-js";
import { getTSFunctionSignature, createTSFunctionSignature, getTypeScriptBuiltInIdentifier } from "./tools";

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
export class TypeScriptTargetBuiltInGenerator extends JavaScriptTargetBuiltInGenerator {
	override async numToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
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

	override async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
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

	override async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
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

	override async boolToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
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

	override async slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const objLikeIdentifier = signature.params[0].identifier;
		const startIdentifier = signature.params[1].identifier;
		const endIdentifier = signature.params[2].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
				" ",
				"=",
				" ",
				createTSFunctionSignature(signature),
				" ",
				`{ return ${objLikeIdentifier} ? ${objLikeIdentifier}.slice(${startIdentifier}, ${endIdentifier}) : ${objLikeIdentifier}; }`,
				";",
			],
		];
	}

	override async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [
			[
				getTypeScriptBuiltInIdentifier(signature.identifier),
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
