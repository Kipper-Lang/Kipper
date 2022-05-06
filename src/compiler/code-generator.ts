/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import {
	type AdditiveExpression,
	type ArgumentExpressionListExpression,
	type ArraySpecifierExpression,
	type AssignmentExpression,
	type CastOrConvertExpression,
	type CharacterPrimaryExpression,
	type CompilableParseToken,
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
 * Represents a function that generates code into a
 * {@link KipperCompileTarget specific language} for a
 * {@link CompilableParseToken}.
 * @since 0.5.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetTokenCodeGenerator<T extends CompilableParseToken<any>> = (token: T) => Promise<Array<string | Array<string>>>;

/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @since 0.5.0
 */
export abstract class KipperCodeGenerator {
	/**
	 * Translates a {@link CompoundStatement} into a specific language.
	 */
	public abstract compoundStatement: TokenCodeGenerator<CompoundStatement>;
	/**
	 * Translates a {@link SelectionStatement} into a specific language.
	 */
	public abstract selectionStatement: TokenCodeGenerator<SelectionStatement>;
	/**
	 * Translates a {@link ExpressionStatement} into a specific language.
	 */
	public abstract expressionStatement: TokenCodeGenerator<ExpressionStatement>;
	/**
	 * Translates a {@link IterationStatement} into a specific language.
	 */
	public abstract iterationStatement: TokenCodeGenerator<IterationStatement>;
	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 */
	public abstract jumpStatement: TokenCodeGenerator<JumpStatement>;
	/**
	 * Translates a {@link ParameterDeclaration} into a specific language.
	 */
	public abstract parameterDeclaration: TokenCodeGenerator<ParameterDeclaration>;
	/**
	 * Translates a {@link FunctionDeclaration} into a specific language.
	 */
	public abstract functionDeclaration: TokenCodeGenerator<FunctionDeclaration>;
	/**
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract variableDeclaration: TokenCodeGenerator<VariableDeclaration>;
	/**
	 * Translates a {@link NumberPrimaryExpression} into a specific language.
	 */
	public abstract numberPrimaryExpression: TokenCodeGenerator<NumberPrimaryExpression>;
	/**
	 * Translates a {@link CharacterPrimaryExpression} into a specific language.
	 */
	public abstract characterPrimaryExpression: TokenCodeGenerator<CharacterPrimaryExpression>;
	/**
	 * Translates a {@link ListPrimaryExpression} into a specific language.
	 */
	public abstract listPrimaryExpression: TokenCodeGenerator<ListPrimaryExpression>;
	/**
	 * Translates a {@link IdentifierPrimaryExpression} into a specific language.
	 */
	public abstract identifierPrimaryExpression: TokenCodeGenerator<IdentifierPrimaryExpression>;
	/**
	 * Translates a {@link StringPrimaryExpression} into a specific language.
	 */
	public abstract stringPrimaryExpression: TokenCodeGenerator<StringPrimaryExpression>;
	/**
	 * Translates a {@link FStringPrimaryExpression} into a specific language.
	 */
	public abstract fStringPrimaryExpression: TokenCodeGenerator<FStringPrimaryExpression>;
	/**
	 * Translates a {@link TangledPrimaryExpression} into a specific language.
	 */
	public abstract tangledPrimaryExpression: TokenCodeGenerator<TangledPrimaryExpression>;
	/**
	 * Translates a {@link ArraySpecifierExpression} into a specific language.
	 */
	public abstract arraySpecifierExpression: TokenCodeGenerator<ArraySpecifierExpression>;
	/**
	 * Translates a {@link IncrementOrDecrementExpression} into a specific language.
	 */
	public abstract incrementOrDecrementExpression: TokenCodeGenerator<IncrementOrDecrementExpression>;
	/**
	 * Translates a {@link FunctionCallPostfixExpression} into a specific language.
	 */
	public abstract functionCallPostfixExpression: TokenCodeGenerator<FunctionCallPostfixExpression>;
	/**
	 * Translates a {@link ArgumentExpressionListExpression} into a specific language.
	 */
	public abstract argumentExpressionList: TargetTokenCodeGenerator<ArgumentExpressionListExpression, string>;
	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into a specific language.
	 */
	public abstract incrementOrDecrementUnaryExpression: TokenCodeGenerator<IncrementOrDecrementUnaryExpression>;
	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into a specific language.
	 */
	public abstract operatorModifiedUnaryExpression: TokenCodeGenerator<OperatorModifiedUnaryExpression>;
	/**
	 * Translates a {@link CastOrConvertExpression} into a specific language.
	 */
	public abstract castOrConvertExpression: TokenCodeGenerator<CastOrConvertExpression>;
	/**
	 * Translates a {@link MultiplicativeExpression} into a specific language.
	 */
	public abstract multiplicativeExpression: TokenCodeGenerator<MultiplicativeExpression>;
	/**
	 * Translates a {@link AdditiveExpression} into a specific language.
	 */
	public abstract additiveExpression: TokenCodeGenerator<AdditiveExpression>;
	/**
	 * Translates a {@link RelationalExpression} into a specific language.
	 */
	public abstract relationalExpression: TokenCodeGenerator<RelationalExpression>;
	/**
	 * Translates a {@link EqualityExpression} into a specific language.
	 */
	public abstract equalityExpression: TokenCodeGenerator<EqualityExpression>;
	/**
	 * Translates a {@link LogicalAndExpression} into a specific language.
	 */
	public abstract logicalAndExpression: TokenCodeGenerator<LogicalAndExpression>;
	/**
	 * Translates a {@link LogicalOrExpression} into a specific language.
	 */
	public abstract logicalOrExpression: TokenCodeGenerator<LogicalOrExpression>;
	/**
	 * Translates a {@link ConditionalExpression} into a specific language.
	 */
	public abstract conditionalExpression: TokenCodeGenerator<ConditionalExpression>;
	/**
	 * Translates a {@link AssignmentExpression} into a specific language.
	 */
	public abstract assignmentExpression: TokenCodeGenerator<AssignmentExpression>;
}
