/**
 * Defines the TypeScript translation target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import { KipperCompileTarget } from "../compile-target";
import { KipperTargetSemanticAnalyser } from "../semantics";
import { KipperTargetCodeGenerator } from "../translation";
import {
	type AdditiveExpression,
	type ArraySpecifierExpression,
	type AssignmentExpression,
	type BoolPrimaryExpression,
	type CastOrConvertExpression,
	type CharacterPrimaryExpression,
	type CompoundStatement,
	type ConditionalExpression,
	type EqualityExpression,
	type ExpressionStatement,
	type FStringPrimaryExpression,
	type FunctionCallPostfixExpression,
	type FunctionDeclaration,
	type IdentifierPrimaryExpression,
	type IncrementOrDecrementExpression,
	type IncrementOrDecrementUnaryExpression,
	type IterationStatement,
	type JumpStatement,
	type ListPrimaryExpression,
	type LogicalAndExpression,
	type LogicalOrExpression,
	type MultiplicativeExpression,
	type NumberPrimaryExpression,
	type OperatorModifiedUnaryExpression,
	type ParameterDeclaration,
	type RelationalExpression,
	type SelectionStatement,
	type StringPrimaryExpression,
	type TangledPrimaryExpression,
	type VariableDeclaration,
} from "../semantics";
import {
	kipperBoolType,
	kipperCharType,
	kipperFuncType,
	kipperListType,
	kipperNumType,
	kipperStrType,
	KipperType,
	kipperVoidType,
	ScopeFunctionDeclaration,
	TranslatedCodeLine,
	TranslatedCodeToken,
	TranslatedExpression,
} from "../semantics";
import { KipperNotImplementedError } from "../../errors";

export class TypeScriptTarget extends KipperCompileTarget {
	constructor(
		semanticAnalyser: TypeScriptTargetSemanticAnalyser = new TypeScriptTargetSemanticAnalyser(),
		codeGenerator: TypeScriptTargetCodeGenerator = new TypeScriptTargetCodeGenerator(),
	) {
		super("typescript", semanticAnalyser, codeGenerator);
	}
}

export class TypeScriptTargetSemanticAnalyser extends KipperTargetSemanticAnalyser {
	/**
	 * Performs typescript-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	compoundStatement = async (token: CompoundStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link SelectionStatement} instances.
	 */
	selectionStatement = async (token: SelectionStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	expressionStatement = async (token: ExpressionStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IterationStatement} instances.
	 */
	iterationStatement = async (token: IterationStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link JumpStatement} instances.
	 */
	jumpStatement = async (token: JumpStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	parameterDeclaration = async (token: ParameterDeclaration) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	functionDeclaration = async (token: FunctionDeclaration) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	variableDeclaration = async (token: VariableDeclaration) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	numberPrimaryExpression = async (token: NumberPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link CharacterPrimaryExpression} instances.
	 */
	characterPrimaryExpression = async (token: CharacterPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	listPrimaryExpression = async (token: ListPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	identifierPrimaryExpression = async (token: IdentifierPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	stringPrimaryExpression = async (token: StringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	fStringPrimaryExpression = async (token: FStringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	boolPrimaryExpression = async (token: BoolPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	tangledPrimaryExpression = async (token: TangledPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	arraySpecifierExpression = async (token: ArraySpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementExpression} instances.
	 */
	incrementOrDecrementExpression = async (token: IncrementOrDecrementExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	functionCallPostfixExpression = async (token: FunctionCallPostfixExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	incrementOrDecrementUnaryExpression = async (token: IncrementOrDecrementUnaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	operatorModifiedUnaryExpression = async (token: OperatorModifiedUnaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	castOrConvertExpression = async (token: CastOrConvertExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	multiplicativeExpression = async (token: MultiplicativeExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	additiveExpression = async (token: AdditiveExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	relationalExpression = async (token: RelationalExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	equalityExpression = async (token: EqualityExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	logicalAndExpression = async (token: LogicalAndExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	logicalOrExpression = async (token: LogicalOrExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	conditionalExpression = async (token: ConditionalExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	assignmentExpression = async (token: AssignmentExpression) => {};
}

export class TypeScriptTargetCodeGenerator extends KipperTargetCodeGenerator {
	/**
	 * Fetches the typescript equivalent for a {@link KipperType}.
	 * @param kipperType The type to get the equivalent for.
	 * @since 0.7.0
	 */
	async getTypeScriptType(kipperType: KipperType): Promise<string> {
		switch (kipperType) {
			case kipperVoidType:
				return "void";
			case kipperFuncType:
				throw new KipperNotImplementedError(
					"Lambda functions have not been implemented for TypeScript translation yet.",
				);
			case kipperBoolType:
				return "boolean";
			case kipperCharType:
			case kipperStrType:
				return "string";
			case kipperNumType:
				return "number";
			case kipperListType:
				throw new KipperNotImplementedError("Kipper lists have not been implemented for TypeScript translation yet.");
		}
	}

	/**
	 * Translates a {@link CompoundStatement} into the typescript language.
	 */
	compoundStatement = async (token: CompoundStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: Array<TranslatedCodeLine> = [];
		for (let child of token.children) {
			childCode = [...childCode, ...(await child.translateCtxAndChildren())];
		}
		return [["{"], ...childCode, ["}"]];
	};

	/**
	 * Translates a {@link SelectionStatement} into the typescript language.
	 */
	selectionStatement = async (token: SelectionStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ExpressionStatement} into the typescript language.
	 */
	expressionStatement = async (token: ExpressionStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: TranslatedExpression = [];
		for (let child of token.children) {
			childCode = [...childCode, ...(await child.translateCtxAndChildren())];
		}
		return [[...childCode, ";"]];
	};

	/**
	 * Translates a {@link IterationStatement} into the typescript language.
	 */
	iterationStatement = async (token: IterationStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link JumpStatement} into the typescript language.
	 */
	jumpStatement = async (token: JumpStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ParameterDeclaration} into the typescript language.
	 */
	parameterDeclaration = async (token: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionDeclaration} into the typescript language.
	 */
	functionDeclaration = async (token: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the typescript language.
	 */
	variableDeclaration = async (token: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = token.ensureSemanticDataExists();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const tsType = await this.getTypeScriptType(semanticData.valueType);
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

	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (token: NumberPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = token.ensureSemanticDataExists();

		return [
			semanticData.value, // Simply get the constant value
		];
	};

	/**
	 * Translates a {@link CharacterPrimaryExpression} into the typescript language.
	 */
	characterPrimaryExpression = async (token: CharacterPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ListPrimaryExpression} into the typescript language.
	 */
	listPrimaryExpression = async (token: ListPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the typescript language.
	 */
	identifierPrimaryExpression = async (token: IdentifierPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = token.ensureSemanticDataExists();

		return [semanticData.identifier];
	};

	/**
	 * Translates a {@link StringPrimaryExpression} into the typescript language.
	 */
	stringPrimaryExpression = async (token: StringPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = token.ensureSemanticDataExists();

		return [`"${semanticData.value}"`];
	};

	/**
	 * Translates a {@link FStringPrimaryExpression} into the typescript language.
	 */
	fStringPrimaryExpression = async (token: FStringPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link BoolPrimaryExpression} into the typescript language.
	 */
	boolPrimaryExpression = async (token: BoolPrimaryExpression): Promise<TranslatedExpression> => {
		return [token.ensureSemanticDataExists().value];
	};

	/**
	 * Translates a {@link TangledPrimaryExpression} into the typescript language.
	 */
	tangledPrimaryExpression = async (token: TangledPrimaryExpression): Promise<TranslatedExpression> => {
		// TODO! Add tests for this
		let genCode: TranslatedExpression = [];
		for (let child of token.children) {
			genCode = genCode.concat(await child.translateCtxAndChildren());
		}
		return genCode;
	};

	/**
	 * Translates a {@link ArraySpecifierExpression} into the typescript language.
	 */
	arraySpecifierExpression = async (token: ArraySpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IncrementOrDecrementExpression} into the typescript language.
	 */
	incrementOrDecrementExpression = async (token: IncrementOrDecrementExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionCallPostfixExpression} into the typescript language.
	 */
	functionCallPostfixExpression = async (token: FunctionCallPostfixExpression): Promise<TranslatedExpression> => {
		// Get the function and semantic data
		const semanticData = token.ensureSemanticDataExists();
		const tokenChildren = token.ensureTokenChildrenExist();
		const func = token.programCtx.semanticCheck(token).getExistingFunction(semanticData.identifier);

		// Add lib identifier prefix '_kipperGlobal_'
		const identifier = func instanceof ScopeFunctionDeclaration ? func.identifier : `_kipperGlobal_${func.identifier}`;

		// Compile the arguments
		let args: Array<TranslatedCodeToken> = [];
		for (const i of semanticData.args) {
			// Generating the code for each expression and adding a whitespace for primitive formatting
			args = [...args, ...(await i.translateCtxAndChildren()), " "];
		}
		args = args.slice(0, args.length - 1); // Removing last whitespace before ')'

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	};

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the typescript language.
	 */
	incrementOrDecrementUnaryExpression = async (
		token: IncrementOrDecrementUnaryExpression,
	): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the typescript language.
	 */
	operatorModifiedUnaryExpression = async (token: OperatorModifiedUnaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link CastOrConvertExpression} into the typescript language.
	 */
	castOrConvertExpression = async (token: CastOrConvertExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link MultiplicativeExpression} into the typescript language.
	 */
	multiplicativeExpression = async (token: MultiplicativeExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = token.ensureSemanticDataExists();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (token: AdditiveExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = token.ensureSemanticDataExists();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link RelationalExpression} into the typescript language.
	 */
	relationalExpression = async (token: RelationalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link EqualityExpression} into the typescript language.
	 */
	equalityExpression = async (token: EqualityExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalAndExpression} into the typescript language.
	 */
	logicalAndExpression = async (token: LogicalAndExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalOrExpression} into the typescript language.
	 */
	logicalOrExpression = async (token: LogicalOrExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ConditionalExpression} into the typescript language.
	 */
	conditionalExpression = async (token: ConditionalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link AssignmentExpression} into the typescript language.
	 */
	assignmentExpression = async (token: AssignmentExpression): Promise<TranslatedExpression> => {
		const semanticData = token.ensureSemanticDataExists();

		const identifier = semanticData.identifier.ensureSemanticDataExists().identifier;
		const assignValue = await semanticData.value.translateCtxAndChildren();

		// Only add ' = EXP' if assignValue is defined
		return [identifier, " ", "=", " ", ...assignValue];
	};
}
