/**
 * Defines the TypeScript target for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import { KipperCompileTarget } from "./compile-target";
import { KipperTargetSemanticAnalyser } from "../semantic-analyser";
import { KipperCodeGenerator } from "../code-generator";
import {
	type AdditiveExpression,
	type ArgumentExpressionList,
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

export class TypeScriptTarget extends KipperCompileTarget {
	constructor(semanticAnalyser: TypeScriptTargetSemanticAnalyser, codeGenerator: TypeScriptTargetCodeGenerator) {
		super("typescript", semanticAnalyser, codeGenerator);
	}
}

export class TypeScriptTargetSemanticAnalyser extends KipperTargetSemanticAnalyser {
	/**
	 * Translates a {@link CompoundStatement} into the typescript language.
	 */
	compoundStatement = async (token: CompoundStatement) => {};
	/**
	 * Translates a {@link SelectionStatement} into the typescript language.
	 */
	selectionStatement = async (token: SelectionStatement) => {};
	/**
	 * Translates a {@link ExpressionStatement} into the typescript language.
	 */
	expressionStatement = async (token: ExpressionStatement) => {};
	/**
	 * Translates a {@link IterationStatement} into the typescript language.
	 */
	iterationStatement = async (token: IterationStatement) => {};
	/**
	 * Translates a {@link JumpStatement} into the typescript language.
	 */
	jumpStatement = async (token: JumpStatement) => {};
	/**
	 * Translates a {@link ParameterDeclaration} into the typescript language.
	 */
	parameterDeclaration = async (token: ParameterDeclaration) => {};
	/**
	 * Translates a {@link FunctionDeclaration} into the typescript language.
	 */
	functionDeclaration = async (token: FunctionDeclaration) => {};
	/**
	 * Translates a {@link VariableDeclaration} into the typescript language.
	 */
	variableDeclaration = async (token: VariableDeclaration) => {};
	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (token: NumberPrimaryExpression) => {};
	/**
	 * Translates a {@link CharacterPrimaryExpression} into the typescript language.
	 */
	characterPrimaryExpression = async (token: CharacterPrimaryExpression) => {};
	/**
	 * Translates a {@link ListPrimaryExpression} into the typescript language.
	 */
	listPrimaryExpression = async (token: ListPrimaryExpression) => {};
	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the typescript language.
	 */
	identifierPrimaryExpression = async (token: IdentifierPrimaryExpression) => {};
	/**
	 * Translates a {@link StringPrimaryExpression} into the typescript language.
	 */
	stringPrimaryExpression = async (token: StringPrimaryExpression) => {};
	/**
	 * Translates a {@link FStringPrimaryExpression} into the typescript language.
	 */
	fStringPrimaryExpression = async (token: FStringPrimaryExpression) => {};
	/**
	 * Translates a {@link TangledPrimaryExpression} into the typescript language.
	 */
	tangledPrimaryExpression = async (token: TangledPrimaryExpression) => {};
	/**
	 * Translates a {@link ArraySpecifierExpression} into the typescript language.
	 */
	arraySpecifierExpression = async (token: ArraySpecifierExpression) => {};
	/**
	 * Translates a {@link IncrementOrDecrementExpression} into the typescript language.
	 */
	incrementOrDecrementExpression = async (token: IncrementOrDecrementExpression) => {};
	/**
	 * Translates a {@link FunctionCallPostfixExpression} into the typescript language.
	 */
	functionCallPostfixExpression = async (token: FunctionCallPostfixExpression) => {};
	/**
	 * Translates a {@link ArgumentExpressionList} into the typescript language.
	 */
	argumentExpressionList = async (token: ArgumentExpressionList) => {};
	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the typescript language.
	 */
	incrementOrDecrementUnaryExpression = async (token: IncrementOrDecrementUnaryExpression) => {};
	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the typescript language.
	 */
	operatorModifiedUnaryExpression = async (token: OperatorModifiedUnaryExpression) => {};
	/**
	 * Translates a {@link CastOrConvertExpression} into the typescript language.
	 */
	castOrConvertExpression = async (token: CastOrConvertExpression) => {};
	/**
	 * Translates a {@link MultiplicativeExpression} into the typescript language.
	 */
	multiplicativeExpression = async (token: MultiplicativeExpression) => {};
	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (token: AdditiveExpression) => {};
	/**
	 * Translates a {@link RelationalExpression} into the typescript language.
	 */
	relationalExpression = async (token: RelationalExpression) => {};
	/**
	 * Translates a {@link EqualityExpression} into the typescript language.
	 */
	equalityExpression = async (token: EqualityExpression) => {};
	/**
	 * Translates a {@link LogicalAndExpression} into the typescript language.
	 */
	logicalAndExpression = async (token: LogicalAndExpression) => {};
	/**
	 * Translates a {@link LogicalOrExpression} into the typescript language.
	 */
	logicalOrExpression = async (token: LogicalOrExpression) => {};
	/**
	 * Translates a {@link ConditionalExpression} into the typescript language.
	 */
	conditionalExpression = async (token: ConditionalExpression) => {};
	/**
	 * Translates a {@link AssignmentExpression} into the typescript language.
	 */
	assignmentExpression = async (token: AssignmentExpression) => {};
}

export class TypeScriptTargetCodeGenerator extends KipperCodeGenerator {
	/**
	 * Translates a {@link CompoundStatement} into the typescript language.
	 */
	compoundStatement = async (token: CompoundStatement): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link SelectionStatement} into the typescript language.
	 */
	selectionStatement = async (token: SelectionStatement): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ExpressionStatement} into the typescript language.
	 */
	expressionStatement = async (token: ExpressionStatement): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link IterationStatement} into the typescript language.
	 */
	iterationStatement = async (token: IterationStatement): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link JumpStatement} into the typescript language.
	 */
	jumpStatement = async (token: JumpStatement): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ParameterDeclaration} into the typescript language.
	 */
	parameterDeclaration = async (token: ParameterDeclaration): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link FunctionDeclaration} into the typescript language.
	 */
	functionDeclaration = async (token: FunctionDeclaration): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link VariableDeclaration} into the typescript language.
	 */
	variableDeclaration = async (token: VariableDeclaration): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (token: NumberPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link CharacterPrimaryExpression} into the typescript language.
	 */
	characterPrimaryExpression = async (token: CharacterPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ListPrimaryExpression} into the typescript language.
	 */
	listPrimaryExpression = async (token: ListPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the typescript language.
	 */
	identifierPrimaryExpression = async (token: IdentifierPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link StringPrimaryExpression} into the typescript language.
	 */
	stringPrimaryExpression = async (token: StringPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link FStringPrimaryExpression} into the typescript language.
	 */
	fStringPrimaryExpression = async (token: FStringPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link TangledPrimaryExpression} into the typescript language.
	 */
	tangledPrimaryExpression = async (token: TangledPrimaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ArraySpecifierExpression} into the typescript language.
	 */
	arraySpecifierExpression = async (token: ArraySpecifierExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link IncrementOrDecrementExpression} into the typescript language.
	 */
	incrementOrDecrementExpression = async (token: IncrementOrDecrementExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link FunctionCallPostfixExpression} into the typescript language.
	 */
	functionCallPostfixExpression = async (token: FunctionCallPostfixExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ArgumentExpressionList} into the typescript language.
	 */
	argumentExpressionList = async (token: ArgumentExpressionList): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the typescript language.
	 */
	incrementOrDecrementUnaryExpression = async (token: IncrementOrDecrementUnaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the typescript language.
	 */
	operatorModifiedUnaryExpression = async (token: OperatorModifiedUnaryExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link CastOrConvertExpression} into the typescript language.
	 */
	castOrConvertExpression = async (token: CastOrConvertExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link MultiplicativeExpression} into the typescript language.
	 */
	multiplicativeExpression = async (token: MultiplicativeExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (token: AdditiveExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link RelationalExpression} into the typescript language.
	 */
	relationalExpression = async (token: RelationalExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link EqualityExpression} into the typescript language.
	 */
	equalityExpression = async (token: EqualityExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link LogicalAndExpression} into the typescript language.
	 */
	logicalAndExpression = async (token: LogicalAndExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link LogicalOrExpression} into the typescript language.
	 */
	logicalOrExpression = async (token: LogicalOrExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link ConditionalExpression} into the typescript language.
	 */
	conditionalExpression = async (token: ConditionalExpression): Promise<Array<any>> => {
		return [];
	};
	/**
	 * Translates a {@link AssignmentExpression} into the typescript language.
	 */
	assignmentExpression = async (token: AssignmentExpression): Promise<Array<any>> => {
		return [];
	};
}
