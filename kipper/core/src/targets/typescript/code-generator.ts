/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CharacterPrimaryExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
	JumpStatement,
	KipperTargetCodeGenerator,
	KipperType,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ScopeFunctionDeclaration,
	SelectionStatement,
	SingleTypeSpecifierExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TargetTokenCodeGenerator,
	TranslatedCodeLine,
	TranslatedCodeToken,
	TranslatedExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "../../compiler";
import { getTypeScriptBuiltInIdentifier, getTypeScriptType } from "./tools";
import { getConversionFunctionIdentifier } from "../../utils";

/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @since 0.8.0
 */
export class TypeScriptTargetCodeGenerator extends KipperTargetCodeGenerator {
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
		const tsType = getTypeScriptType(semanticData.valueType);
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
	 * Translates a {@link SingleTypeSpecifierExpression} into the typescript language.
	 */
	singleTypeSpecifierExpression = async (token: SingleTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link GenericTypeSpecifierExpression} into the typescript language.
	 */
	genericTypeSpecifierExpression = async (token: GenericTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link TypeofTypeSpecifierExpression} into the typescript language.
	 */
	typeofTypeSpecifierExpression = async (token: TypeofTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
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
		const func = token.programCtx.semanticCheck(token).getExistingFunction(semanticData.identifier);

		// Get the proper identifier for the function
		const identifier =
			func instanceof ScopeFunctionDeclaration ? func.identifier : getTypeScriptBuiltInIdentifier(func.identifier);

		// Generate the arguments
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
		// Get the semantic data
		const semanticData = token.ensureSemanticDataExists();

		const exp: TranslatedExpression = await semanticData.exp.translateCtxAndChildren();
		const originalType: KipperType = semanticData.exp.ensureSemanticDataExists().evaluatedType;
		const destType: KipperType = semanticData.type;

		if (originalType === destType) {
			// If both types are the same we will only return the translated expression to avoid useless conversions.
			return exp;
		} else {
			const func: string = getTypeScriptBuiltInIdentifier(getConversionFunctionIdentifier(originalType, destType));
			return [func, "(", ...exp, ")"];
		}
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
