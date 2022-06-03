/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { BuiltInFunction, KipperTargetBuiltInGenerator, TranslatedCodeLine } from "../../compiler/";
import { getTypeScriptBuiltInIdentifier, getTypeScriptType } from "./tools";

/**
 * The TypeScript target-specific built-ins generator for generating the code that allows for the use of built-in
 * functions.
 * @since 0.8.0
 */
export class TypeScriptTargetBuiltInGenerator extends KipperTargetBuiltInGenerator {
	async print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>> {
		// Translate the function signature into TypeScript
		const type: string = getTypeScriptType(funcSpec.returnType);
		const identifier: string = getTypeScriptBuiltInIdentifier(funcSpec.identifier);
		const args: Array<string> = funcSpec.args.map((arg) => `${arg.identifier}: ${getTypeScriptType(arg.type)}`);

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [[`function ${identifier}(${args.join("")}): ${type}`], [`{ console.log(msg); }`]];
	}
}
