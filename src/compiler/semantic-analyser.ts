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
	 * Performs target-specific semantic analysis for {@link CompoundStatement} instance.
	 */
	public abstract compoundStatement: TargetTokenSemanticAnalyser<CompoundStatement>;
	/**
	 * Performs target-specific semantic analysis for {@link SelectionStatement} instance.
	 */
	public abstract selectionStatement: TargetTokenSemanticAnalyser<SelectionStatement>;
	/**
	 * Performs target-specific semantic analysis for {@link ExpressionStatement} instance.
	 */
	public abstract expressionStatement: TargetTokenSemanticAnalyser<ExpressionStatement>;
	/**
	 * Performs target-specific semantic analysis for {@link IterationStatement} instance.
	 */
	public abstract iterationStatement: TargetTokenSemanticAnalyser<IterationStatement>;
	/**
	 * Performs target-specific semantic analysis for {@link JumpStatement} instance.
	 */
	public abstract jumpStatement: TargetTokenSemanticAnalyser<JumpStatement>;
	/**
	 * Performs target-specific semantic analysis for {@link ParameterDeclaration} instance.
	 */
	public abstract parameterDeclaration: TargetTokenSemanticAnalyser<ParameterDeclaration>;
	/**
	 * Performs target-specific semantic analysis for {@link FunctionDeclaration} instance.
	 */
	public abstract functionDeclaration: TargetTokenSemanticAnalyser<FunctionDeclaration>;
	/**
	 * Performs target-specific semantic analysis for {@link VariableDeclaration} instance.
	 */
	public abstract variableDeclaration: TargetTokenSemanticAnalyser<VariableDeclaration>;
	/**
	 * Performs target-specific semantic analysis for {@link NumberPrimaryExpression} instance.
	 */
	public abstract numberPrimaryExpression: TargetTokenSemanticAnalyser<NumberPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link CharacterPrimaryExpression} instance.
	 */
	public abstract characterPrimaryExpression: TargetTokenSemanticAnalyser<CharacterPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link ListPrimaryExpression} instance.
	 */
	public abstract listPrimaryExpression: TargetTokenSemanticAnalyser<ListPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link IdentifierPrimaryExpression} instance.
	 */
	public abstract identifierPrimaryExpression: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link StringPrimaryExpression} instance.
	 */
	public abstract stringPrimaryExpression: TargetTokenSemanticAnalyser<StringPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link FStringPrimaryExpression} instance.
	 */
	public abstract fStringPrimaryExpression: TargetTokenSemanticAnalyser<FStringPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link TangledPrimaryExpression} instance.
	 */
	public abstract tangledPrimaryExpression: TargetTokenSemanticAnalyser<TangledPrimaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link ArraySpecifierExpression} instance.
	 */
	public abstract arraySpecifierExpression: TargetTokenSemanticAnalyser<ArraySpecifierExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link IncrementOrDecrementExpression} instance.
	 */
	public abstract incrementOrDecrementExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link FunctionCallPostfixExpression} instance.
	 */
	public abstract functionCallPostfixExpression: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link ArgumentExpressionListExpression} instance.
	 */
	public abstract argumentExpressionList: TargetTokenSemanticAnalyser<ArgumentExpressionListExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instance.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementUnaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instance.
	 */
	public abstract operatorModifiedUnaryExpression: TargetTokenSemanticAnalyser<OperatorModifiedUnaryExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link CastOrConvertExpression} instance.
	 */
	public abstract castOrConvertExpression: TargetTokenSemanticAnalyser<CastOrConvertExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link MultiplicativeExpression} instance.
	 */
	public abstract multiplicativeExpression: TargetTokenSemanticAnalyser<MultiplicativeExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link AdditiveExpression} instance.
	 */
	public abstract additiveExpression: TargetTokenSemanticAnalyser<AdditiveExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link RelationalExpression} instance.
	 */
	public abstract relationalExpression: TargetTokenSemanticAnalyser<RelationalExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link EqualityExpression} instance.
	 */
	public abstract equalityExpression: TargetTokenSemanticAnalyser<EqualityExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link LogicalAndExpression} instance.
	 */
	public abstract logicalAndExpression: TargetTokenSemanticAnalyser<LogicalAndExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link LogicalOrExpression} instance.
	 */
	public abstract logicalOrExpression: TargetTokenSemanticAnalyser<LogicalOrExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link ConditionalExpression} instance.
	 */
	public abstract conditionalExpression: TargetTokenSemanticAnalyser<ConditionalExpression>;
	/**
	 * Performs target-specific semantic analysis for {@link AssignmentExpression} instance.
	 */
	public abstract assignmentExpression: TargetTokenSemanticAnalyser<AssignmentExpression>;
}
