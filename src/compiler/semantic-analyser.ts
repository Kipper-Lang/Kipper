import {
	type AdditiveExpression,
	type ArgumentExpressionListExpression,
	type ArraySpecifierExpression,
	type AssignmentExpression,
	type CastOrConvertExpression,
	type CharacterPrimaryExpression,
	CompilableParseToken,
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
} from "./tokens";

/**
 * Represents a function that checks the semantics for a {@link CompoundStatement}.
 *
 * This function does not interpret but only check the logical integrity of the token.
 * @since 0.5.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetTokenSemanticAnalyser<T extends CompilableParseToken<any>> = (token: T) => Promise<void>;

/**
 * Represents a Semantic analyser that is specific for a {@link KipperCompileTarget}.
 * @since 0.5.0
 */
export abstract class KipperTargetSemanticAnalyser {
	/**
	 * Translates a {@link CompoundStatement} into a specific language.
	 */
	public abstract compoundStatement: TargetTokenSemanticAnalyser<CompoundStatement>;
	/**
	 * Translates a {@link SelectionStatement} into a specific language.
	 */
	public abstract selectionStatement: TargetTokenSemanticAnalyser<SelectionStatement>;
	/**
	 * Translates a {@link ExpressionStatement} into a specific language.
	 */
	public abstract expressionStatement: TargetTokenSemanticAnalyser<ExpressionStatement>;
	/**
	 * Translates a {@link IterationStatement} into a specific language.
	 */
	public abstract iterationStatement: TargetTokenSemanticAnalyser<IterationStatement>;
	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 */
	public abstract jumpStatement: TargetTokenSemanticAnalyser<JumpStatement>;
	/**
	 * Translates a {@link ParameterDeclaration} into a specific language.
	 */
	public abstract parameterDeclaration: TargetTokenSemanticAnalyser<ParameterDeclaration>;
	/**
	 * Translates a {@link FunctionDeclaration} into a specific language.
	 */
	public abstract functionDeclaration: TargetTokenSemanticAnalyser<FunctionDeclaration>;
	/**
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract variableDeclaration: TargetTokenSemanticAnalyser<VariableDeclaration>;
	/**
	 * Translates a {@link NumberPrimaryExpression} into a specific language.
	 */
	public abstract numberPrimaryExpression: TargetTokenSemanticAnalyser<NumberPrimaryExpression>;
	/**
	 * Translates a {@link CharacterPrimaryExpression} into a specific language.
	 */
	public abstract characterPrimaryExpression: TargetTokenSemanticAnalyser<CharacterPrimaryExpression>;
	/**
	 * Translates a {@link ListPrimaryExpression} into a specific language.
	 */
	public abstract listPrimaryExpression: TargetTokenSemanticAnalyser<ListPrimaryExpression>;
	/**
	 * Translates a {@link IdentifierPrimaryExpression} into a specific language.
	 */
	public abstract identifierPrimaryExpression: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression>;
	/**
	 * Translates a {@link StringPrimaryExpression} into a specific language.
	 */
	public abstract stringPrimaryExpression: TargetTokenSemanticAnalyser<StringPrimaryExpression>;
	/**
	 * Translates a {@link FStringPrimaryExpression} into a specific language.
	 */
	public abstract fStringPrimaryExpression: TargetTokenSemanticAnalyser<FStringPrimaryExpression>;
	/**
	 * Translates a {@link TangledPrimaryExpression} into a specific language.
	 */
	public abstract tangledPrimaryExpression: TargetTokenSemanticAnalyser<TangledPrimaryExpression>;
	/**
	 * Translates a {@link ArraySpecifierExpression} into a specific language.
	 */
	public abstract arraySpecifierExpression: TargetTokenSemanticAnalyser<ArraySpecifierExpression>;
	/**
	 * Translates a {@link IncrementOrDecrementExpression} into a specific language.
	 */
	public abstract incrementOrDecrementExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementExpression>;
	/**
	 * Translates a {@link FunctionCallPostfixExpression} into a specific language.
	 */
	public abstract functionCallPostfixExpression: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression>;
	/**
	 * Translates a {@link ArgumentExpressionListExpression} into a specific language.
	 */
	public abstract argumentExpressionList: TargetTokenSemanticAnalyser<ArgumentExpressionListExpression>;
	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into a specific language.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementUnaryExpression>;
	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into a specific language.
	 */
	public abstract operatorModifiedUnaryExpression: TargetTokenSemanticAnalyser<OperatorModifiedUnaryExpression>;
	/**
	 * Translates a {@link CastOrConvertExpression} into a specific language.
	 */
	public abstract castOrConvertExpression: TargetTokenSemanticAnalyser<CastOrConvertExpression>;
	/**
	 * Translates a {@link MultiplicativeExpression} into a specific language.
	 */
	public abstract multiplicativeExpression: TargetTokenSemanticAnalyser<MultiplicativeExpression>;
	/**
	 * Translates a {@link AdditiveExpression} into a specific language.
	 */
	public abstract additiveExpression: TargetTokenSemanticAnalyser<AdditiveExpression>;
	/**
	 * Translates a {@link RelationalExpression} into a specific language.
	 */
	public abstract relationalExpression: TargetTokenSemanticAnalyser<RelationalExpression>;
	/**
	 * Translates a {@link EqualityExpression} into a specific language.
	 */
	public abstract equalityExpression: TargetTokenSemanticAnalyser<EqualityExpression>;
	/**
	 * Translates a {@link LogicalAndExpression} into a specific language.
	 */
	public abstract logicalAndExpression: TargetTokenSemanticAnalyser<LogicalAndExpression>;
	/**
	 * Translates a {@link LogicalOrExpression} into a specific language.
	 */
	public abstract logicalOrExpression: TargetTokenSemanticAnalyser<LogicalOrExpression>;
	/**
	 * Translates a {@link ConditionalExpression} into a specific language.
	 */
	public abstract conditionalExpression: TargetTokenSemanticAnalyser<ConditionalExpression>;
	/**
	 * Translates a {@link AssignmentExpression} into a specific language.
	 */
	public abstract assignmentExpression: TargetTokenSemanticAnalyser<AssignmentExpression>;
}
