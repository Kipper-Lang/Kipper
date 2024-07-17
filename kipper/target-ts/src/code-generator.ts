/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @since 0.8.0
 */
import type {
	FunctionDeclaration,
	InterfaceDeclaration,
	ObjectPrimaryExpression,
	InterfaceMethodDeclaration,
	TranslatedExpression,
	ParameterDeclaration,
	TranslatedCodeLine,
	VariableDeclaration,
	InterfaceMemberDeclaration,
	InterfaceMemberDeclarationSemantics,
} from "@kipper/core";
import { InterfacePropertyDeclaration } from "@kipper/core";
import { createTSFunctionSignature, getTSFunctionSignature } from "./tools";
import { indentLines, JavaScriptTargetCodeGenerator } from "@kipper/target-js";
import { TargetTS } from "./target";
import type { InterfaceMemberDeclarationTypeSemantics } from "@kipper/core/lib/compiler/ast/nodes/declarations/type-declaration/interface-declaration/interface-member-declaration/interface-member-declaration-type-semantics";

/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @since 0.8.0
 */
export class TypeScriptTargetCodeGenerator extends JavaScriptTargetCodeGenerator {
	/**
	 * Translates a {@link FunctionDeclaration} into the TypeScript language.
	 */
	override functionDeclaration = async (node: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Function signature and body
		const signature = getTSFunctionSignature(node);
		const functionBody = await semanticData.functionBody.translateCtxAndChildren();

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [[createTSFunctionSignature(signature), " ", "{"], ...functionBody.slice(1, -1), ["}"]];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the TypeScript language.
	 */
	override variableDeclaration = async (node: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeSemantics = node.getTypeSemanticData();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const tsType = TargetTS.getTypeScriptType(typeSemantics.valueType);
		const assign = semanticData.value ? await semanticData.value.translateCtxAndChildren() : [];

		// Only add ' = EXP' if assignValue is defined
		return [
			[
				storage,
				" ",
				semanticData.identifier,
				":",
				" ",
				tsType,
				...(assign.length > 0 ? [" ", "=", " ", ...assign] : []),
				";",
			],
		];
	};

	private generateInterfaceRuntimeTypeChecks = async (
		node: InterfaceDeclaration,
	): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const interfaceName = semanticData.identifier;
		const interfaceMembers = semanticData.members;

		let varName = "__intf_" + interfaceName;

		let propertiesWithTypes = "";
		for (let member of interfaceMembers) {
			if (member instanceof InterfacePropertyDeclaration) {
				let property = member.getSemanticData();
				let type = member.getTypeSemanticData();
				propertiesWithTypes += `"${property.identifier}": ${TargetTS.getTypeScriptType(type.type)}, `;
			}
		}

		let methods = "";

		let lines: Array<TranslatedCodeLine> = [
			[
				"const ",
				varName,
				" = ",
				"new ",
				"Type(",
				interfaceName,
				",",
				"[{",
				propertiesWithTypes,
				"}]",
				",",
				"[",
				methods,
				"]",
				")",
			],
		];
		return lines;
	};

	override interfaceDeclaration = async (node: InterfaceDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const interfaceName = semanticData.identifier;
		const interfaceMembers = semanticData.members;

		const memberDeclarations = await Promise.all(
			interfaceMembers.map(async (member) => {
				return member.translateCtxAndChildren();
			}),
		);

		let runtimeTypeChecks = await this.generateInterfaceRuntimeTypeChecks(node);

		return [
			["interface", " ", interfaceName, " ", "{"],
			...memberDeclarations.flat().map((line) => [" ", ...line]),
			["}"],
			...runtimeTypeChecks,
		];
	};

	override interfaceMethodDeclaration = async (
		node: InterfaceMethodDeclaration,
	): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const params = semanticData.parameters;
		const returnTypeIdentifier = TargetTS.getTypeScriptType(semanticData.returnType.getTypeSemanticData().storedType);

		const paramsCode: TranslatedCodeLine[] = await Promise.all(
			params.map(async (param) => {
				return param.translateCtxAndChildren();
			}),
		).then((results) => results.flat());

		// Return the method declaration
		return [
			[
				semanticData.identifier,
				"(",
				paramsCode.map((param) => param.join("")).join(", "),
				")",
				":",
				" ",
				returnTypeIdentifier,
				";",
			],
		];
	};

	override interfacePropertyDeclaration = async (
		node: InterfacePropertyDeclaration,
	): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeSemantics = node.getTypeSemanticData();
		const identifier = semanticData.identifier;
		const valueType = TargetTS.getTypeScriptType(typeSemantics.type);

		// Return the property declaration
		return [[identifier, ":", " ", valueType, ";"]];
	};

	override parameterDeclaration = async (node: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeSemantics = node.getTypeSemanticData();
		const identifier = semanticData.identifier;
		const valueType = TargetTS.getTypeScriptType(typeSemantics.valueType);

		// Return the parameter declaration
		return [[identifier, ":", " ", valueType]];
	};

	override objectPrimaryExpression = async (node: ObjectPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const keyValuePairs = semanticData.keyValuePairs;
		const translatedKeyValuePairs = await Promise.all(
			keyValuePairs.map(async (pair) => {
				return [...(await pair.translateCtxAndChildren()), ",", "\n"];
			}),
		);

		// Return the object primary expression
		return ["{", "\n", ...indentLines(translatedKeyValuePairs).flat(), "}"];
	};
}
