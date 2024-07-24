/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.10.0
 */
import type {
	BuiltInFunction,
	BuiltInVariable,
	InternalFunction,
	KipperProgramContext,
	TranslatedCodeLine,
} from "@kipper/core";
import { KipperTargetBuiltInGenerator } from "@kipper/core";
import { createJSFunctionSignature, getJSFunctionSignature } from "./tools";
import { TargetJS } from "./target";

/**
 * Generates a JavaScript function from the given signature and body.
 * @param signature The signature of the function.
 * @param body The body of the function.
 * @param ignoreParams Whether or not to ignore the parameters of the function.
 * @since 0.10.0
 */
export function genJSFunction(
	signature: { identifier: string; params: string[] },
	body: string,
	ignoreParams: boolean = false,
): Array<TranslatedCodeLine> {
	return [
		[
			TargetJS.getBuiltInIdentifier(signature.identifier),
			" ",
			"=",
			" ",
			createJSFunctionSignature(signature, ignoreParams),
			" ",
			body,
			";",
		],
	];
}

/**
 * Generates a JavaScript local or global variable from the given variable and value.
 * @param varSpec The variable to generate.
 * @param value The value of the variable.
 */
export function genJSVariable(varSpec: BuiltInVariable, value: string): TranslatedCodeLine {
	return [...(varSpec.local ? ["const", " "] : []), TargetJS.getBuiltInIdentifier(varSpec), " ", "=", " ", value, ";"];
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

	async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return \`\${${convArgIdentifier}}\`; }`);
	}

	async voidToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		return genJSFunction(signature, `{ return "void"; }`, true);
	}

	async nullToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		return genJSFunction(signature, `{ return "null"; }`, true);
	}

	async undefinedToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		return genJSFunction(signature, `{ return "undefined"; }`, true);
	}

	async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0];

		return genJSFunction(signature, `{ return parseInt(${convArgIdentifier}); }`);
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

	async repeatString(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getJSFunctionSignature(funcSpec);
		const toRepeatIdentifier = signature.params[0];
		const timesIdentifier = signature.params[1];

		return genJSFunction(signature, `{ return ${toRepeatIdentifier}.repeat(${timesIdentifier}); }`);
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

	async __name__(varSpec: BuiltInVariable, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>> {
		return [genJSVariable(varSpec, `"${programCtx.fileName}"`)];
	}

	async NaN(varSpec: BuiltInVariable): Promise<Array<TranslatedCodeLine>> {
		return [genJSVariable(varSpec, "NaN")];
	}
}
