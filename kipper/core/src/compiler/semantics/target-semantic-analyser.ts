import {
	type AdditiveExpression,
	type ArraySpecifierExpression,
	type AssignmentExpression,
	BoolPrimaryExpression,
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
	GenericTypeSpecifierExpression,
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
	SingleTypeSpecifierExpression,
	type StringPrimaryExpression,
	type TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	type VariableDeclaration,
} from "./tokens";
import { TranslatedExpression } from "./const";
import { TargetTokenCodeGenerator } from "../translation";

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
	 * Performs translation-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	public abstract compoundStatement: TargetTokenSemanticAnalyser<CompoundStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link SelectionStatement} instances.
	 */
	public abstract selectionStatement: TargetTokenSemanticAnalyser<SelectionStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	public abstract expressionStatement: TargetTokenSemanticAnalyser<ExpressionStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link IterationStatement} instances.
	 */
	public abstract iterationStatement: TargetTokenSemanticAnalyser<IterationStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link JumpStatement} instances.
	 */
	public abstract jumpStatement: TargetTokenSemanticAnalyser<JumpStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	public abstract parameterDeclaration: TargetTokenSemanticAnalyser<ParameterDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	public abstract functionDeclaration: TargetTokenSemanticAnalyser<FunctionDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	public abstract variableDeclaration: TargetTokenSemanticAnalyser<VariableDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	public abstract numberPrimaryExpression: TargetTokenSemanticAnalyser<NumberPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link CharacterPrimaryExpression} instances.
	 */
	public abstract characterPrimaryExpression: TargetTokenSemanticAnalyser<CharacterPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	public abstract listPrimaryExpression: TargetTokenSemanticAnalyser<ListPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	public abstract identifierPrimaryExpression: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	public abstract stringPrimaryExpression: TargetTokenSemanticAnalyser<StringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	public abstract fStringPrimaryExpression: TargetTokenSemanticAnalyser<FStringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	public abstract boolPrimaryExpression: TargetTokenSemanticAnalyser<BoolPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link SingleTypeSpecifierExpression} instances.
	 */
	public abstract singleTypeSpecifierExpression: TargetTokenSemanticAnalyser<SingleTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	public abstract genericTypeSpecifierExpression: TargetTokenSemanticAnalyser<GenericTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	public abstract typeofTypeSpecifierExpression: TargetTokenSemanticAnalyser<TypeofTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	public abstract tangledPrimaryExpression: TargetTokenSemanticAnalyser<TangledPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	public abstract arraySpecifierExpression: TargetTokenSemanticAnalyser<ArraySpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IncrementOrDecrementExpression} instances.
	 */
	public abstract incrementOrDecrementExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	public abstract functionCallPostfixExpression: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetTokenSemanticAnalyser<IncrementOrDecrementUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	public abstract operatorModifiedUnaryExpression: TargetTokenSemanticAnalyser<OperatorModifiedUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	public abstract castOrConvertExpression: TargetTokenSemanticAnalyser<CastOrConvertExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	public abstract multiplicativeExpression: TargetTokenSemanticAnalyser<MultiplicativeExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	public abstract additiveExpression: TargetTokenSemanticAnalyser<AdditiveExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	public abstract relationalExpression: TargetTokenSemanticAnalyser<RelationalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	public abstract equalityExpression: TargetTokenSemanticAnalyser<EqualityExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	public abstract logicalAndExpression: TargetTokenSemanticAnalyser<LogicalAndExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	public abstract logicalOrExpression: TargetTokenSemanticAnalyser<LogicalOrExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	public abstract conditionalExpression: TargetTokenSemanticAnalyser<ConditionalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	public abstract assignmentExpression: TargetTokenSemanticAnalyser<AssignmentExpression>;
}
