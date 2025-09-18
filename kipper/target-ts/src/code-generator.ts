/**
 * The TypeScript target-specific code generator for translating Kipper code into TypeScript.
 * @since 0.8.0
 */
import type {
	CastExpression,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
	ForceCastExpression,
	FunctionDeclaration,
	InterfaceDeclaration,
	InterfaceMethodDeclaration,
	InterfacePropertyDeclaration,
	LambdaPrimaryExpression,
	ObjectPrimaryExpression,
	ParameterDeclaration,
	TranslatedCodeLine,
	TranslatedCodeToken,
	TranslatedExpression,
	TryCastExpression,
	VariableDeclaration,
} from "@kipper/core";
import { BuiltInTypeArray, BuiltInTypeEmptyArray, CompoundStatement, Expression } from "@kipper/core";
import { createTSFunctionSignature, getTSFunctionSignature } from "./tools";
import { indentLines, JavaScriptTargetCodeGenerator, RuntimeTypesGenerator, TargetJS } from "@kipper/target-js";
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

		let valueToAssign: Array<TranslatedCodeToken> = [];
		if (semanticData.value) {
			valueToAssign = await semanticData.value.translateCtxAndChildren();

			// In case that we are dealing with an empty array, we need to add type metadata to the array to ensure that the
			// type is correctly typed at runtime (This is a special case for arrays, no interfaces or classes)
			if (
				typeSemantics.valueType instanceof BuiltInTypeArray &&
				semanticData.value.getTypeSemanticData().evaluatedType instanceof BuiltInTypeEmptyArray
			) {
				valueToAssign = [
					TargetTS.getBuiltInIdentifier("assignTypeMeta"),
					"(",
					...valueToAssign,
					",",
					TargetTS.getBuiltInIdentifier("newArrayT"),
					"(",
					TargetTS.getRuntimeType(typeSemantics.valueType.valueType),
					")",
					")",
				];
			}
			valueToAssign = [" ", "=", " ", ...valueToAssign];
		}

		return [[storage, " ", semanticData.identifier, ":", " ", tsType, ...valueToAssign, ";"]];
	};

	/**
	 * Translates a {@link InterfaceDeclaration} into the TypeScript language.
	 */
	override interfaceDeclaration = async (node: InterfaceDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const interfaceName = semanticData.identifier;
		const interfaceMembers = semanticData.members;
		const memberDeclarations = await Promise.all(
			interfaceMembers.map(async (member) => {
				return member.translateCtxAndChildren();
			}),
		);

		const runtimeInterfaceType = await RuntimeTypesGenerator.generateInterfaceRuntimeType(node);
		return [
			["interface", " ", interfaceName, " ", "{"],
			...memberDeclarations.flat().map((line) => ["  ", ...line]),
			["}"],
			...runtimeInterfaceType,
		];
	};

	/**
	 * Translates a {@link InterfaceMethodDeclaration} into the TypeScript language.
	 */
	override interfaceMethodDeclaration = async (
		node: InterfaceMethodDeclaration,
	): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const params = semanticData.params;
		const returnTypeIdentifier = TargetTS.getTypeScriptType(
			semanticData.returnTypeSpecifier.getTypeSemanticData().storedType,
		);

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

	/**
	 * Translates a {@link InterfacePropertyDeclaration} into the TypeScript language.
	 */
	override interfacePropertyDeclaration = async (
		node: InterfacePropertyDeclaration,
	): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeSemantics = node.getTypeSemanticData();
		const identifier = semanticData.identifier;
		const valueType = TargetTS.getTypeScriptType(typeSemantics.valueType);

		// Return the property declaration
		return [[identifier, ":", " ", valueType, ";"]];
	};

	/**
	 * Translates a {@link LambdaPrimaryExpression} into the TypeScript language.
	 */
	override lambdaPrimaryExpression = async (node: LambdaPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();
		const params = semanticData.params;
		const body = semanticData.functionBody;
		const returnTypeSpecifier = TargetTS.getTypeScriptType(typeData.valueType.returnType);
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
		const paramTypes = funcType.paramTypes.map((type) => TargetTS.getRuntimeType(type.getCompilableType()));
		const returnType = TargetTS.getRuntimeType(funcType.returnType.getCompilableType());

		if (body instanceof CompoundStatement) {
			translatedBody.pop(); // remove unnecessary newline
		}
		return [
			TargetJS.getBuiltInIdentifier("assignTypeMeta"),
			"(",
			"(",
			...translatedParams,
			"): ",
			returnTypeSpecifier,
			" => ",
			...translatedBody,
			",",
			TargetJS.getBuiltInIdentifier("builtIn.Func.changeGenericTypeArguments"),
			"(",
			`{T: [${paramTypes.join(",")}], R: ${returnType}}`,
			")",
			")",
		];
	};

	/**
	 * Translates a {@link ParameterDeclaration} into the TypeScript language.
	 */
	override parameterDeclaration = async (node: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeSemantics = node.getTypeSemanticData();
		const identifier = semanticData.identifier;
		const valueType = TargetTS.getTypeScriptType(typeSemantics.valueType);

		// Return the parameter declaration
		return [[identifier, ":", " ", valueType]];
	};

	/**
	 * Translates a {@link ObjectPrimaryExpression} into the TypeScript language.
	 */
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

	/**
	 * Translates a {@link ClassMethodDeclaration} into the TypeScript language.
	 */
	override classMethodDeclaration = async (node: ClassMethodDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();
		const identifier = semanticData.identifier;
		const params = semanticData.params;
		const body = semanticData.functionBody;

		// Get the required function signature
		const type = typeData.valueType;
		const returnType = TargetTS.getTypeScriptType(type.returnType);

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

	/**
	 * Translates a {@link ClassMethodDeclaration} into the TypeScript language.
	 */
	override classPropertyDeclaration = async (node: ClassPropertyDeclaration): Promise<TranslatedCodeLine> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;
		const typeScriptType = TargetTS.getTypeScriptType(semanticData.typeSpecifier.getTypeSemanticData().storedType);

		return [identifier, ":", " ", typeScriptType];
	};

	/**
	 * Translates a {@link CastExpression} into the TypeScript language.
	 */
	override castExpression = async (node: CastExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();

		const valExp = await semanticData.exp.translateCtxAndChildren();
		return [...valExp, " ", "as", " ", TargetTS.getTypeScriptType(typeData.castType)];
	};

	/**
	 * Translates a {@link TryCastExpression} into the JavaScript language.
	 * @since 0.12.0
	 */
	tryCastExpression = async (node: TryCastExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const castTypeSpecifier = semanticData.castTypeSpecifier.getTypeSemanticData();

		const valExp = await semanticData.exp.translateCtxAndChildren();
		const typeExp = await semanticData.castTypeSpecifier.translateCtxAndChildren();
		return [
			"(",
			TargetJS.getBuiltInIdentifier("tryCastAs"),
			"(",
			...valExp,
			",",
			...typeExp,
			")",
			" ",
			"as",
			" ",
			TargetTS.getTypeScriptType(castTypeSpecifier.storedType),
			" ",
			"|",
			" ",
			"null",
			")",
		];
	};

	/**
	 * Translates a {@link ForceCastExpression} into the JavaScript language.
	 * @since 0.12.0
	 */
	forceCastExpression = async (node: ForceCastExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const castTypeSpecifier = semanticData.castTypeSpecifier.getTypeSemanticData();

		const valExp = await semanticData.exp.translateCtxAndChildren();
		const typeExp = await semanticData.castTypeSpecifier.translateCtxAndChildren();
		return [
			"(",
			TargetJS.getBuiltInIdentifier("forceCastAs"),
			"(",
			...valExp,
			",",
			...typeExp,
			")",
			" ",
			"as",
			" ",
			TargetTS.getTypeScriptType(castTypeSpecifier.storedType),
			")",
		];
	};
}
