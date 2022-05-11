/**
 * Defines the TypeScript target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import { KipperCompileTarget } from "./compile-target";
import { KipperTargetSemanticAnalyser } from "../semantic-analyser";
import { KipperTargetCodeGenerator } from "../code-generator";
import {
	type AdditiveExpression,
	ArgumentExpressionListExpression,
	type ArraySpecifierExpression,
	type AssignmentExpression,
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
} from "../tokens";
import { ScopeFunctionDeclaration, TranslatedCodeLine, TranslatedExpression } from "../logic";

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
	 * Performs typescript-specific semantic analysis for {@link ArgumentExpressionListExpression} instances.
	 */
	argumentExpressionList = async (token: ArgumentExpressionListExpression) => {};
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
		return [];
	};
	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (token: NumberPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
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
		const func = token.programCtx.assert(token).getExistingFunction(semanticData.identifier);

		// Get the arguments
		let argListCtx = <ArgumentExpressionListExpression | undefined>(
			token.children.find((val) => val instanceof ArgumentExpressionListExpression)
		);

		// Add builtin identifier prefix '_kipperGlobal_'
		const identifier = func instanceof ScopeFunctionDeclaration ? func.identifier : `_kipperGlobal_${func.identifier}`;

		// Compile the arguments
		const args: TranslatedExpression = argListCtx ? await argListCtx.translateCtxAndChildren() : [];

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	};
	/**
	 * Translates a {@link ArgumentExpressionListExpression} into the typescript language.
	 */
	argumentExpressionList = async (token: ArgumentExpressionListExpression): Promise<TranslatedExpression> => {
		let genCode: TranslatedExpression = [];
		for (let child of token.children) {
			genCode = [...genCode, ...(await child.translateCtxAndChildren())];
		}
		return genCode;
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
		return [];
	};
	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (token: AdditiveExpression): Promise<TranslatedExpression> => {
		return [];
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
		return [];
	};
}
