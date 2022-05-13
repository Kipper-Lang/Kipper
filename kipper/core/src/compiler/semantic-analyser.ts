import {
	type AdditiveExpression,
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
	 * Performs target-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	public abstract compoundStatement: TargetTokenSemanticAnalyser<CompoundStatement>;

	/**
	 * Performs target-specific semantic analysis for {@link SelectionStatement} instances.
	 */
	public abstract selectionStatement: TargetTokenSemanticAnalyser<SelectionStatement>;

	/**
	 * Performs target-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	public abstract expressionStatement: TargetTokenSemanticAnalyser<ExpressionStatement>;

	/**
	 * Performs target-specific semantic analysis for {@link IterationStatement} instances.
	 */
	public abstract iterationStatement: TargetTokenSemanticAnalyser<IterationStatement>;

	/**
	 * Performs target-specific semantic analysis for {@link JumpStatement} instances.
	 */
	public abstract jumpStatement: TargetTokenSemanticAnalyser<JumpStatement>;

	/**
	 * Performs target-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	public abstract parameterDeclaration: TargetTokenSemanticAnalyser<ParameterDeclaration>;

	/**
	 * Performs target-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	public abstract functionDeclaration: TargetTokenSemanticAnalyser<FunctionDeclaration>;

	/**
	 * Performs target-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	public abstract variableDeclaration: TargetTokenSemanticAnalyser<VariableDeclaration>;

	/**
	 * Performs target-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	public abstract numberPrimaryExpression: TargetTokenSemanticAnalyser<NumberPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link CharacterPrimaryExpression} instances.
	 */
	public abstract characterPrimaryExpression: TargetTokenSemanticAnalyser<CharacterPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	public abstract listPrimaryExpression: TargetTokenSemanticAnalyser<ListPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	public abstract identifierPrimaryExpression: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	public abstract stringPrimaryExpression: TargetTokenSemanticAnalyser<StringPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	public abstract fStringPrimaryExpression: TargetTokenSemanticAnalyser<FStringPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	public abstract tangledPrimaryExpression: TargetTokenSemanticAnalyser<TangledPrimaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	public abstract arraySpecifierExpression: TargetTokenSemanticAnalyser<ArraySpecifierExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link IncrementOrDecrementExpression} instances.
	 */
	public abstract incrementOrDecrementExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	public abstract functionCallPostfixExpression: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementUnaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	public abstract operatorModifiedUnaryExpression: TargetTokenSemanticAnalyser<OperatorModifiedUnaryExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	public abstract castOrConvertExpression: TargetTokenSemanticAnalyser<CastOrConvertExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	public abstract multiplicativeExpression: TargetTokenSemanticAnalyser<MultiplicativeExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	public abstract additiveExpression: TargetTokenSemanticAnalyser<AdditiveExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	public abstract relationalExpression: TargetTokenSemanticAnalyser<RelationalExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	public abstract equalityExpression: TargetTokenSemanticAnalyser<EqualityExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	public abstract logicalAndExpression: TargetTokenSemanticAnalyser<LogicalAndExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	public abstract logicalOrExpression: TargetTokenSemanticAnalyser<LogicalOrExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	public abstract conditionalExpression: TargetTokenSemanticAnalyser<ConditionalExpression>;

	/**
	 * Performs target-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	public abstract assignmentExpression: TargetTokenSemanticAnalyser<AssignmentExpression>;
}
