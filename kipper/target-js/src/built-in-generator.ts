/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
import type { BuiltInFunction, InternalFunction, TranslatedCodeLine } from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";
import { createJSFunctionSignature, getJavaScriptBuiltInIdentifier, getJSFunctionSignature } from "./tools";

/**
 * Generates a JavaScript function from the given signature and body.
 * @param signature The signature of the function.
 * @param body The body of the function.
 * @since 0.10.0
 */
export function genJSFunction(
	signature: { identifier: string; params: string[] },
	body: string,
): Array<TranslatedCodeLine> {
	return [
		[
			getJavaScriptBuiltInIdentifier(signature.identifier),
			" ",
			"=",
			" ",
			createJSFunctionSignature(signature),
			" ",
			body,
			";",
		],
	];
}

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
export class JavaScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async numToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return (${convArgIdentifier}).toString(); }`);
	}

	async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return parseInt(${convArgIdentifier}); }`);
	}

	async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return \`\${${convArgIdentifier}}\`; }`);
	}

	async boolToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return ${convArgIdentifier} ? 1 : 0; }`);
	}

	async slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const objLikeIdentifier = signature.params[0];
		const startIdentifier = signature.params[1];
		const endIdentifier = signature.params[2];

		return genJSFunction(
			signature,
			`{ return ${objLikeIdentifier} ? ${objLikeIdentifier}.slice(${startIdentifier}, ${endIdentifier}) : ${objLikeIdentifier}; }`,
		);
	}

	async index(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const arrayLikeIdentifier = signature.params[0];
		const indexIdentifier = signature.params[1];

		return genJSFunction(
			signature,
			`{ if (${indexIdentifier} >= ${arrayLikeIdentifier}.length) ` +
				`throw new __kipper.IndexError(\`Index '\${${indexIdentifier}}' out of bonds of array-like.\`); ` +
				`return ${arrayLikeIdentifier}[${indexIdentifier}]; }`,
		);
	}

	async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.params[0];

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return genJSFunction(signature, `{ console.log(${printArgIdentifier}); }`);
	}

	async len(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const lenArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return ${lenArgIdentifier}.length; }`);
	}
}
