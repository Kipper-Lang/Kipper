/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @since 0.10.0
 */
import type {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IfStatement,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	JumpStatement,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TranslatedCodeLine,
	TranslatedExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "../../semantics";
import {
	DoWhileLoopStatement,
	ForLoopStatement,
	ReturnStatement,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopStatement,
} from "../../semantics";
import type { KipperProgramContext } from "../../program-ctx";
import type { CompilableASTNode } from "../../parser";

/**
 * Represents a function that translates a Kipper {@link CompilableASTNode token} code into a
 * {@link KipperCompileTarget specific language}.
 *
 * The return may only be of type {@link TranslatedExpression}, {@link TranslatedCodeLine} or
 * {@link TranslatedCodeLine Array<TranslatedCodeLine>}.
 * @since 0.10.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetASTNodeCodeGenerator<
	T extends CompilableASTNode<any, any>,
	R extends TranslatedExpression | TranslatedCodeLine | Array<TranslatedCodeLine>,
	// eslint-disable-next-line no-unused-vars
> = (node: T) => Promise<R>;

/**
 * Represents a function that generates setup code for a Kipper file.
 *
 * This is not intended as a replacement to {@link KipperTargetBuiltInGenerator}.
 * @since 0.10.0
 */
export type TargetSetUpCodeGenerator = (programCtx: KipperProgramContext) => Promise<Array<TranslatedCodeLine>>;

/**
 * Represents a function that generates wrap up code for a Kipper file.
 *
 * This is not intended as a replacement to {@link KipperTargetBuiltInGenerator}.
 * @since 0.10.0
 */
export type TargetWrapUpCodeGenerator = (programCtx: KipperProgramContext) => Promise<Array<TranslatedCodeLine>>;

/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @since 0.10.0
 */
export abstract class KipperTargetCodeGenerator {
	/**
	 * Code generation function, which is called at the start of a translation and generates
	 * the dependencies for a file in the target language.
	 *
	 * This should be only used to set up a Kipper file in the target language and not as a
	 * replacement to {@link KipperTargetBuiltInGenerator}.
	 * @since 0.10.0
	 */
	public abstract setUp: TargetSetUpCodeGenerator;

	/**
	 * Code generation function, which is called at the end of a translation and should wrap
	 * up a program in the target language.
	 *
	 * This should be only used to add additional items to finish a Kipper file in the target
	 * language and not as a replacement to {@link KipperTargetBuiltInGenerator}.
	 * @since 0.10.0
	 */
	public abstract wrapUp: TargetWrapUpCodeGenerator;

	/**
	 * Translates a {@link CompoundStatement} into a specific language.
	 */
	public abstract compoundStatement: TargetASTNodeCodeGenerator<CompoundStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link IfStatement} into a specific language.
	 */
	public abstract ifStatement: TargetASTNodeCodeGenerator<IfStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link SwitchStatement} into a specific language.
	 */
	public abstract switchStatement: TargetASTNodeCodeGenerator<SwitchStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ExpressionStatement} into a specific language.
	 */
	public abstract expressionStatement: TargetASTNodeCodeGenerator<ExpressionStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ForLoopStatement} into a specific language.
	 */
	public abstract doWhileLoopStatement: TargetASTNodeCodeGenerator<DoWhileLoopStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ForLoopStatement} into a specific language.
	 */
	public abstract whileLoopStatement: TargetASTNodeCodeGenerator<WhileLoopStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ForLoopStatement} into a specific language.
	 */
	public abstract forLoopStatement: TargetASTNodeCodeGenerator<ForLoopStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 */
	public abstract jumpStatement: TargetASTNodeCodeGenerator<JumpStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 */
	public abstract returnStatement: TargetASTNodeCodeGenerator<ReturnStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ParameterDeclaration} into a specific language.
	 */
	public abstract parameterDeclaration: TargetASTNodeCodeGenerator<ParameterDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link FunctionDeclaration} into a specific language.
	 */
	public abstract functionDeclaration: TargetASTNodeCodeGenerator<FunctionDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract variableDeclaration: TargetASTNodeCodeGenerator<VariableDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link NumberPrimaryExpression} into a specific language.
	 */
	public abstract numberPrimaryExpression: TargetASTNodeCodeGenerator<NumberPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ListPrimaryExpression} into a specific language.
	 */
	public abstract listPrimaryExpression: TargetASTNodeCodeGenerator<ListPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into a specific language.
	 */
	public abstract identifierPrimaryExpression: TargetASTNodeCodeGenerator<
		IdentifierPrimaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link StringPrimaryExpression} into a specific language.
	 */
	public abstract stringPrimaryExpression: TargetASTNodeCodeGenerator<StringPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link FStringPrimaryExpression} into a specific language.
	 */
	public abstract fStringPrimaryExpression: TargetASTNodeCodeGenerator<FStringPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link BoolPrimaryExpression} into a specific language.
	 */
	public abstract boolPrimaryExpression: TargetASTNodeCodeGenerator<BoolPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link IdentifierTypeSpecifierExpression} into a specific language.
	 */
	public abstract identifierTypeSpecifierExpression: TargetASTNodeCodeGenerator<
		IdentifierTypeSpecifierExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link GenericTypeSpecifierExpression} into a specific language.
	 */
	public abstract genericTypeSpecifierExpression: TargetASTNodeCodeGenerator<
		GenericTypeSpecifierExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link TypeofTypeSpecifierExpression} into a specific language.
	 */
	public abstract typeofTypeSpecifierExpression: TargetASTNodeCodeGenerator<
		TypeofTypeSpecifierExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link TangledPrimaryExpression} into a specific language.
	 */
	public abstract tangledPrimaryExpression: TargetASTNodeCodeGenerator<TangledPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ArraySpecifierExpression} into a specific language.
	 */
	public abstract arraySpecifierExpression: TargetASTNodeCodeGenerator<ArraySpecifierExpression, TranslatedExpression>;

	/**
	 * Translates a {@link VoidOrNullOrUndefinedPrimaryExpression} into a specific language.
	 */
	public abstract voidOrNullOrUndefinedPrimaryExpression: TargetASTNodeCodeGenerator<
		VoidOrNullOrUndefinedPrimaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link incrementOrDecrementPostfixExpression} into a specific language.
	 */
	public abstract incrementOrDecrementPostfixExpression: TargetASTNodeCodeGenerator<
		IncrementOrDecrementPostfixExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link FunctionCallPostfixExpression} into a specific language.
	 */
	public abstract functionCallPostfixExpression: TargetASTNodeCodeGenerator<
		FunctionCallPostfixExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into a specific language.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetASTNodeCodeGenerator<
		IncrementOrDecrementUnaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into a specific language.
	 */
	public abstract operatorModifiedUnaryExpression: TargetASTNodeCodeGenerator<
		OperatorModifiedUnaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link CastOrConvertExpression} into a specific language.
	 */
	public abstract castOrConvertExpression: TargetASTNodeCodeGenerator<CastOrConvertExpression, TranslatedExpression>;

	/**
	 * Translates a {@link MultiplicativeExpression} into a specific language.
	 */
	public abstract multiplicativeExpression: TargetASTNodeCodeGenerator<MultiplicativeExpression, TranslatedExpression>;

	/**
	 * Translates a {@link AdditiveExpression} into a specific language.
	 */
	public abstract additiveExpression: TargetASTNodeCodeGenerator<AdditiveExpression, TranslatedExpression>;

	/**
	 * Translates a {@link RelationalExpression} into a specific language.
	 */
	public abstract relationalExpression: TargetASTNodeCodeGenerator<RelationalExpression, TranslatedExpression>;

	/**
	 * Translates a {@link EqualityExpression} into a specific language.
	 */
	public abstract equalityExpression: TargetASTNodeCodeGenerator<EqualityExpression, TranslatedExpression>;

	/**
	 * Translates a {@link LogicalAndExpression} into a specific language.
	 */
	public abstract logicalAndExpression: TargetASTNodeCodeGenerator<LogicalAndExpression, TranslatedExpression>;

	/**
	 * Translates a {@link LogicalOrExpression} into a specific language.
	 */
	public abstract logicalOrExpression: TargetASTNodeCodeGenerator<LogicalOrExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ConditionalExpression} into a specific language.
	 */
	public abstract conditionalExpression: TargetASTNodeCodeGenerator<ConditionalExpression, TranslatedExpression>;

	/**
	 * Translates a {@link AssignmentExpression} into a specific language.
	 */
	public abstract assignmentExpression: TargetASTNodeCodeGenerator<AssignmentExpression, TranslatedExpression>;
}
