/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
import type {
	BuiltInFunction,
	BuiltInVariable,
	InternalFunction,
	KipperProgramContext,
	ProcessedType,
	TranslatedCodeLine,
} from "@kipper/core";
import {JavaScriptTargetBuiltInGenerator} from "@kipper/target-js";
import {createTSFunctionSignature, createTSGenericFunctionSignature, getTSFunctionSignature} from "./tools";
import {TargetTS} from "./target";

/**
 * Generates a TypeScript function from the given signature and body.
 * @param signature The signature of the function.
 * @param body The body of the function.
 * @param ignoreParams Whether or not to ignore the parameters of the function.
 * @since 0.10.0
 */
export function genTSFunction(
	signature: {
		identifier: string;
		params: Array<{ identifier: string; type: ProcessedType }>;
		returnType: ProcessedType;
	},
	body: string,
	ignoreParams: boolean = false,
): Array<TranslatedCodeLine> {
	return [[signature.identifier, ":", " ", createTSFunctionSignature(signature, ignoreParams), " ", body]];
}

/**
 * Generates a TypeScript generic function from the given signature and body.
 *
 * This allows for the use of 'T' as a generic type in the function. This is just a very primitive function which is
 * used to avoid TS errors when using type unions or similar. Will probably be improved in the future as the type system
 * gets more complex.
 * @param signature The signature of the function.
 * @param body The body of the function.
 * @param ignoreParams Whether or not to ignore the parameters of the function.\
 * @since 0.12.0
 */
export function genTSGenericFunction(
	signature: {
		identifier: string;
		params: Array<{ identifier: string; type: ProcessedType | "T" }>;
		returnType: ProcessedType | "T";
	},
	body: string,
	ignoreParams: boolean = false,
): Array<TranslatedCodeLine> {
	return [[signature.identifier, ":", " ", createTSGenericFunctionSignature(signature, ignoreParams), " ", body]];
}

/**
 * Generates a JavaScript local or global variable from the given variable and value.
 * @param varSpec The variable to generate.
 * @param value The value of the variable.
 */
export function genTSVariable(varSpec: BuiltInVariable, value: string): TranslatedCodeLine {
	if (varSpec.local) {
		return [
			"const",
			" ",
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
	return [varSpec.identifier, ":", " ", value];
}

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
export class TypeScriptTargetBuiltInGenerator extends JavaScriptTargetBuiltInGenerator {
	// ===================================================================================================================
	// Internal functions which are used to provide specific syntax- or behaviour-specific functionality
	// ===================================================================================================================

	override async numToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return genTSFunction(signature, `{ return (${convArgIdentifier}).toString(); }`);
	}

	override async boolToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return genTSFunction(signature, `{ return \`\${${convArgIdentifier}}\`; }`);
	}

	async voidToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		return genTSFunction(signature, `{ return "void"; }`, true);
	}

	async nullToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		return genTSFunction(signature, `{ return "null"; }`, true);
	}

	async undefinedToStr(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		return genTSFunction(signature, `{ return "undefined"; }`, true);
	}

	override async strToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		return genTSFunction(signature, `{ return parseInt(${convArgIdentifier}); }`);
	}

	override async boolToNum(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const convArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO
		return genTSFunction(signature, `{ return ${convArgIdentifier} ? 1 : 0; }`);
	}

	override async slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const objLikeIdentifier = signature.params[0].identifier;
		const startIdentifier = signature.params[1].identifier;
		const endIdentifier = signature.params[2].identifier;

		return genTSGenericFunction(
			{
				...signature,
				params: signature.params.map((param) => {
					if (param.identifier === "objLike") {
						return { identifier: "objLike", type: "T" };
					}
					return param;
				}),
				returnType: "T",
			},
			`{ return ${objLikeIdentifier} ? ${objLikeIdentifier}.slice(${startIdentifier}, ${endIdentifier}) : ${objLikeIdentifier}; }`,
		);
	}

	override async index(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const arrayLikeIdentifier = signature.params[0].identifier;
		const indexIdentifier = signature.params[1].identifier;

		return genTSFunction(
			signature,
			`{ if (${indexIdentifier} >= ${arrayLikeIdentifier}.length) ` +
				`throw new __kipper.IndexError(\`Index '\${${indexIdentifier}}' out of bonds of array-like.\`); ` +
				`return ${arrayLikeIdentifier}[${indexIdentifier}]; }`,
		);
	}

	override async repeatString(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const repeatArgIdentifier = signature.params[0].identifier;
		const timesArgIdentifier = signature.params[1].identifier;

		return genTSFunction(signature, `{ return ${repeatArgIdentifier}.repeat(${timesArgIdentifier}); }`);
	}

	override async tryCastAs(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const castTypeIdentifier = signature.params[0].identifier;
		const toCastIdentifier = signature.params[1].identifier;

		return genTSFunction(signature, `{ return true ? ${toCastIdentifier} : null; }`);
	}

	override async forceCastAs(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const castTypeIdentifier = signature.params[0].identifier;
		const toCastIdentifier = signature.params[1].identifier;

		return genTSFunction(signature, `{ return ${toCastIdentifier}; }`);
	}

	// ===================================================================================================================
	// Built-in functions that are direct parts of the language
	// ===================================================================================================================

	override async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const printArgIdentifier = signature.params[0].identifier;

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return genTSFunction(signature, `{ console.log(${printArgIdentifier}); }`);
	}

	async len(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		const signature = getTSFunctionSignature(funcSpec);
		const lenArgIdentifier = signature.params[0].identifier;

		return genTSFunction(signature, `{ return ${lenArgIdentifier}.length; }`);
	}

	async NaN(varSpec: BuiltInVariable): Promise<Array<TranslatedCodeLine>> {
		return [genTSVariable(varSpec, "NaN")];
	}

	async __name__(varSpec: BuiltInVariable, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>> {
		return [genTSVariable(varSpec, `"${programCtx.fileName}"`)];
	}
}
