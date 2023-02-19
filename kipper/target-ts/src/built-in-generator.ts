/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
import type { BuiltInFunction, InternalFunction, TranslatedCodeLine } from "@kipper/core";
import { JavaScriptTargetBuiltInGenerator } from "@kipper/target-js";
import { getTSFunctionSignature, createTSFunctionSignature } from "./tools";
import { BuiltInVariable, KipperCompilableType, KipperProgramContext } from "@kipper/core";
import { TargetTS } from "./target";

/**
 * Generates a TypeScript function from the given signature and body.
 * @param signature The signature of the function.
 * @param body The body of the function.
 * @since 0.10.0
 */
export function getTSFunction(
	signature: {
		identifier: string;
		params: Array<{ identifier: string; type: KipperCompilableType | Array<KipperCompilableType> }>;
		returnType: KipperCompilableType | Array<KipperCompilableType>;
	},
	body: string,
): Array<TranslatedCodeLine> {
	return [
		[
			TargetTS.getBuiltInIdentifier(signature.identifier),
			" ",
			"=",
			" ",
			createTSFunctionSignature(signature),
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
export function genTSVariable(varSpec: BuiltInVariable, value: string): TranslatedCodeLine {
	return [
		...(varSpec.local ? ["const", " "] : []),
		TargetTS.getBuiltInIdentifier(varSpec),
		":",
		" ",
		TargetTS.getTypeScriptType(varSpec.valueType),
		" ",
		"=",
		" ",
		value,
		";",
	];
}

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
export class TypeScriptTargetBuiltInGenerator extends JavaScriptTargetBuiltInGenerator {
	override async numToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return getTSFunction(signature, `{ return (${convArgIdentifier}).toString(); }`);
	}

	override async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return getTSFunction(signature, `{ return parseInt(${convArgIdentifier}); }`);
	}

	override async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return getTSFunction(signature, `{ return \`\${${convArgIdentifier}}\`; }`);
	}

	override async boolToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO
		return getTSFunction(signature, `{ return ${convArgIdentifier} ? 1 : 0; }`);
	}

	override async slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const objLikeIdentifier = signature.params[0].identifier;
		const startIdentifier = signature.params[1].identifier;
		const endIdentifier = signature.params[2].identifier;

		return getTSFunction(
			signature,
			`{ return ${objLikeIdentifier} ? ${objLikeIdentifier}.slice(${startIdentifier}, ${endIdentifier}) : ${objLikeIdentifier}; }`,
		);
	}

	override async index(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const arrayLikeIdentifier = signature.params[0].identifier;
		const indexIdentifier = signature.params[1].identifier;

		return getTSFunction(
			signature,
			`{ if (${indexIdentifier} >= ${arrayLikeIdentifier}.length) ` +
				`throw new __kipper.IndexError(\`Index '\${${indexIdentifier}}' out of bonds of array-like.\`); ` +
				`return ${arrayLikeIdentifier}[${indexIdentifier}]; }`,
		);
	}

	override async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return getTSFunction(signature, `{ console.log(${printArgIdentifier}); }`);
	}

	async len(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const lenArgIdentifier = signature.params[0].identifier;

		return getTSFunction(signature, `{ return ${lenArgIdentifier}.length; }`);
	}

	async __name__(varSpec: BuiltInVariable, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>> {
		return [genTSVariable(varSpec, `"${programCtx.fileName}"`)];
	}
}
