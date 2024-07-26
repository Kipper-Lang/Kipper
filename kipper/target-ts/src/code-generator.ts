/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @since 0.8.0
 */
import type {
	FunctionDeclaration,
	InterfaceDeclaration,
	ObjectPrimaryExpression,
	ParameterDeclaration,
	TranslatedCodeLine,
	TranslatedExpression,
	VariableDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
} from "@kipper/core";
import { CompoundStatement } from "@kipper/core";
import { InterfaceMethodDeclaration } from "@kipper/core";
import { InterfacePropertyDeclaration } from "@kipper/core";
import { Expression, type LambdaPrimaryExpression } from "@kipper/core";
import { createTSFunctionSignature, getTSFunctionSignature } from "./tools";
import { indentLines, JavaScriptTargetCodeGenerator, TargetJS } from "@kipper/target-js";
import { TargetTS } from "./target";

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

	override interfaceDeclaration = async (node: InterfaceDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const interfaceName = semanticData.identifier;
		const interfaceMembers = semanticData.members;
		const memberDeclarations = await Promise.all(
			interfaceMembers.map(async (member) => {
				return member.translateCtxAndChildren();
			}),
		);

		const runtimeInterfaceType = await this.generateInterfaceRuntimeTypeChecks(node);
		return [
			["interface", " ", interfaceName, " ", "{"],
			...memberDeclarations.flat().map((line) => [" ", ...line]),
			["}"],
			...runtimeInterfaceType,
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

	override lambdaPrimaryExpression = async (node: LambdaPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();
		const params = semanticData.params;
		const body = semanticData.functionBody;
		const returnTypeSpecifier = TargetTS.getTypeScriptType(typeData.returnType);
		const funcType = node.getTypeSemanticData().evaluatedType;

		// Generate the function signature
		const translatedParams: TranslatedExpression = (
			await Promise.all(
				params.map(async (param) => {
					return await param.translateCtxAndChildren();
				}),
			)
		)
			.map((param) => <TranslatedExpression>[...param.flat(), ", "])
			.flat();
		translatedParams.pop(); // Remove the last comma

		const translatedBody =
			body instanceof Expression
				? await body.translateCtxAndChildren()
				: (await body.translateCtxAndChildren()).map((line) => <TranslatedExpression>[...line, "\n"]).flat();
		const paramTypes = funcType.parameterTypes.map((type) => TargetJS.getRuntimeType(type.getCompilableType()));
		const returnType = TargetJS.getRuntimeType(funcType.returnType.getCompilableType());

		return [
			TargetJS.getBuiltInIdentifier("assignTypeMeta"),
			"(",
			"(",
			...translatedParams,
			"): ",
			returnTypeSpecifier,
			" => ",
			...(body instanceof CompoundStatement ? translatedBody.slice() : translatedBody),
			",",
			TargetJS.getBuiltInIdentifier("builtIn.Func.changeGenericTypeArguments"),
			"(",
			`{T: [${paramTypes.join(",")}], R: ${returnType}}`,
			")",
			")",
		];
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

	override classMethodDeclaration = async (node: ClassMethodDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;
		const params = semanticData.parameters;
		const body = semanticData.functionBody;
		const evaluatedType = TargetTS.getTypeScriptType(semanticData.returnType.getTypeSemanticData().storedType);
		const returnType = evaluatedType;

		const translatedParams = (
			await Promise.all(
				params.map(async (param) => {
					return await param.translateCtxAndChildren();
				}),
			)
		)
			.map((param) => [...param.flat(), ", "])
			.flat();
		translatedParams.pop(); // Remove the last comma

		return [
			[identifier, "(", ...translatedParams, ")", ":", " ", returnType],
			...(await body.translateCtxAndChildren()),
		];
	};

	override classPropertyDeclaration = async (node: ClassPropertyDeclaration): Promise<TranslatedCodeLine> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;
		const typeScriptType = TargetTS.getTypeScriptType(semanticData.typeSpecifier.getTypeSemanticData().storedType);

		return [identifier, ":", " ", typeScriptType];
	};
}
