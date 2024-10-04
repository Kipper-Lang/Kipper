import type {InterfaceDeclaration, TranslatedCodeLine} from "@kipper/core";
import {BuiltInType, InterfaceMethodDeclaration, InterfacePropertyDeclaration} from "@kipper/core";
import {KipperJavaScriptTarget, TargetJS} from "../index";

/**
 * The runtime types generator for the JavaScript target.
 * @since 0.12.0
 */
export class RuntimeTypesGenerator {
	/**
	 * Generates the runtime type structure for an interface declaration.
	 * @param node The node to translate.
	 * @since 0.12.0
	 */
	public static async generateInterfaceRuntimeType(node: InterfaceDeclaration): Promise<Array<TranslatedCodeLine>> {
		const semanticData = node.getSemanticData();
		const interfaceName = semanticData.identifier;
		const interfaceMembers = semanticData.members;
		const identifier = `${KipperJavaScriptTarget.internalInterfacePrefix}_${interfaceName}`;

		const propertiesWithTypes: Array<string> = [];
		const functionsWithTypes: Array<string> = [];
		for (let member of interfaceMembers) {
			if (member instanceof InterfacePropertyDeclaration) {
				const property = member.getSemanticData();
				const type = member.getTypeSemanticData();

				if (type.valueType instanceof BuiltInType) {
					const runtimeType = TargetJS.getRuntimeType(type.valueType);
					propertiesWithTypes.push(
						`new ${TargetJS.getBuiltInIdentifier("Property")}("${property.identifier}", ${runtimeType}),`,
					);
				} else {
					propertiesWithTypes.push(
						`new ${TargetJS.getBuiltInIdentifier("Property")}("${property.identifier}",` +
							` ${KipperJavaScriptTarget.internalInterfacePrefix}_${type.valueType}),`,
					);
				}
			}

			if (member instanceof InterfaceMethodDeclaration) {
				const method = member.getSemanticData();
				const methodName = method.identifier;
				const returnType = method.returnTypeSpecifier.getTypeSemanticData().storedType;
				const runtimeReturnType = TargetJS.getRuntimeType(returnType);

				const paramsArray = method.params.map((param) => {
					const type = param.getTypeSemanticData().valueType;
					const name = param.getSemanticData().identifier;
					return `new ${TargetJS.getBuiltInIdentifier("Property")}` + `("${name}", ${TargetJS.getRuntimeType(type)})`;
				});
				const params = paramsArray.length > 0 ? `[${paramsArray.join(", ")}]` : "[]";

				functionsWithTypes.push(
					`new ${TargetJS.getBuiltInIdentifier("Method")}` + `("${methodName}", ${runtimeReturnType}, ${params})`,
				);
			}
		}

		return [
			[
				"const ",
				identifier,
				" = ",
				`new ${TargetJS.getBuiltInIdentifier("Type")}`,
				"(",
				`"${interfaceName}"`,
				",",
				"[",
				...propertiesWithTypes,
				"],",
				"[",
				...functionsWithTypes,
				"],",
				TargetJS.getBuiltInIdentifier("builtIn.obj"),
				")",
			],
		];
	}
}
