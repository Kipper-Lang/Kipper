/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import {
	type AdditiveExpression,
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
} from "../semantics/tokens";
import { TranslatedCodeLine, TranslatedExpression } from "../lib";

/**
 * Represents a function that translates a Kipper {@link CompilableParseToken token} code into a
 * {@link KipperCompileTarget specific language}.
 *
 * The return may only be of type {@link TranslatedExpression}, {@link TranslatedCodeLine} and
 * {@link TranslatedCodeLine Array<TranslatedCodeLine>}.
 * @since 0.5.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetTokenCodeGenerator<
	T extends CompilableParseToken<any>,
	R extends TranslatedExpression | TranslatedCodeLine | Array<TranslatedCodeLine>,
	// eslint-disable-next-line no-unused-vars
> = (token: T) => Promise<R>;

/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @since 0.5.0
 */
export abstract class KipperTargetCodeGenerator {
	/**
	 * Translates a {@link CompoundStatement} into a specific language.
	 */
	public abstract compoundStatement: TargetTokenCodeGenerator<CompoundStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link SelectionStatement} into a specific language.
	 */
	public abstract selectionStatement: TargetTokenCodeGenerator<SelectionStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ExpressionStatement} into a specific language.
	 */
	public abstract expressionStatement: TargetTokenCodeGenerator<ExpressionStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link IterationStatement} into a specific language.
	 */
	public abstract iterationStatement: TargetTokenCodeGenerator<IterationStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 */
	public abstract jumpStatement: TargetTokenCodeGenerator<JumpStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ParameterDeclaration} into a specific language.
	 */
	public abstract parameterDeclaration: TargetTokenCodeGenerator<ParameterDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link FunctionDeclaration} into a specific language.
	 */
	public abstract functionDeclaration: TargetTokenCodeGenerator<FunctionDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract variableDeclaration: TargetTokenCodeGenerator<VariableDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link NumberPrimaryExpression} into a specific language.
	 */
	public abstract numberPrimaryExpression: TargetTokenCodeGenerator<NumberPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link CharacterPrimaryExpression} into a specific language.
	 */
	public abstract characterPrimaryExpression: TargetTokenCodeGenerator<
		CharacterPrimaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link ListPrimaryExpression} into a specific language.
	 */
	public abstract listPrimaryExpression: TargetTokenCodeGenerator<ListPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into a specific language.
	 */
	public abstract identifierPrimaryExpression: TargetTokenCodeGenerator<
		IdentifierPrimaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link StringPrimaryExpression} into a specific language.
	 */
	public abstract stringPrimaryExpression: TargetTokenCodeGenerator<StringPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link FStringPrimaryExpression} into a specific language.
	 */
	public abstract fStringPrimaryExpression: TargetTokenCodeGenerator<FStringPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link TangledPrimaryExpression} into a specific language.
	 */
	public abstract tangledPrimaryExpression: TargetTokenCodeGenerator<TangledPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ArraySpecifierExpression} into a specific language.
	 */
	public abstract arraySpecifierExpression: TargetTokenCodeGenerator<ArraySpecifierExpression, TranslatedExpression>;

	/**
	 * Translates a {@link IncrementOrDecrementExpression} into a specific language.
	 */
	public abstract incrementOrDecrementExpression: TargetTokenCodeGenerator<
		IncrementOrDecrementExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link FunctionCallPostfixExpression} into a specific language.
	 */
	public abstract functionCallPostfixExpression: TargetTokenCodeGenerator<
		FunctionCallPostfixExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into a specific language.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetTokenCodeGenerator<
		IncrementOrDecrementUnaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into a specific language.
	 */
	public abstract operatorModifiedUnaryExpression: TargetTokenCodeGenerator<
		OperatorModifiedUnaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link CastOrConvertExpression} into a specific language.
	 */
	public abstract castOrConvertExpression: TargetTokenCodeGenerator<CastOrConvertExpression, TranslatedExpression>;

	/**
	 * Translates a {@link MultiplicativeExpression} into a specific language.
	 */
	public abstract multiplicativeExpression: TargetTokenCodeGenerator<MultiplicativeExpression, TranslatedExpression>;

	/**
	 * Translates a {@link AdditiveExpression} into a specific language.
	 */
	public abstract additiveExpression: TargetTokenCodeGenerator<AdditiveExpression, TranslatedExpression>;

	/**
	 * Translates a {@link RelationalExpression} into a specific language.
	 */
	public abstract relationalExpression: TargetTokenCodeGenerator<RelationalExpression, TranslatedExpression>;

	/**
	 * Translates a {@link EqualityExpression} into a specific language.
	 */
	public abstract equalityExpression: TargetTokenCodeGenerator<EqualityExpression, TranslatedExpression>;

	/**
	 * Translates a {@link LogicalAndExpression} into a specific language.
	 */
	public abstract logicalAndExpression: TargetTokenCodeGenerator<LogicalAndExpression, TranslatedExpression>;

	/**
	 * Translates a {@link LogicalOrExpression} into a specific language.
	 */
	public abstract logicalOrExpression: TargetTokenCodeGenerator<LogicalOrExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ConditionalExpression} into a specific language.
	 */
	public abstract conditionalExpression: TargetTokenCodeGenerator<ConditionalExpression, TranslatedExpression>;

	/**
	 * Translates a {@link AssignmentExpression} into a specific language.
	 */
	public abstract assignmentExpression: TargetTokenCodeGenerator<AssignmentExpression, TranslatedExpression>;
}
