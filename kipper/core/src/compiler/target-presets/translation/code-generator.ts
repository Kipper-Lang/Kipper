/**
 * Code generator specifying how a Kipper parse tree should be translated into a specific language.
 * @since 0.10.0
 */
import type {
	AdditiveExpression,
	ArrayPrimaryExpression,
	AssignmentExpression,
	BitwiseAndExpression,
	BitwiseOrExpression,
	BitwiseShiftExpression,
	BitwiseXorExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	ClassConstructorDeclaration,
	ClassDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
	CompilableASTNode,
	CompoundStatement,
	ConditionalExpression,
	DoWhileLoopIterationStatement,
	EqualityExpression,
	ExpressionStatement,
	ForLoopIterationStatement,
	FStringPrimaryExpression,
	FunctionCallExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IfStatement,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	InterfaceDeclaration,
	InterfaceMethodDeclaration,
	InterfacePropertyDeclaration,
	JumpStatement,
	LambdaPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MemberAccessExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	ObjectPrimaryExpression,
	ObjectProperty,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ReturnStatement,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopIterationStatement,
} from "../../ast";
import type { TranslatedCodeLine, TranslatedExpression } from "../../const";
import type { KipperProgramContext } from "../../program-ctx";

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
	T extends CompilableASTNode,
	R extends TranslatedExpression | TranslatedCodeLine | Array<TranslatedCodeLine>,
> = Function & ((node: T) => Promise<R>);

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
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract doWhileLoopIterationStatement: TargetASTNodeCodeGenerator<
		DoWhileLoopIterationStatement,
		Array<TranslatedCodeLine>
	>;

	/**
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0s
	 */
	public abstract whileLoopIterationStatement: TargetASTNodeCodeGenerator<
		WhileLoopIterationStatement,
		Array<TranslatedCodeLine>
	>;

	/**
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract forLoopIterationStatement: TargetASTNodeCodeGenerator<
		ForLoopIterationStatement,
		Array<TranslatedCodeLine>
	>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract jumpStatement: TargetASTNodeCodeGenerator<JumpStatement, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 * @since 0.10.0
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
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract classDeclaration: TargetASTNodeCodeGenerator<ClassDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translated a {@link ClassPropertyDeclaration} into a specific language.
	 */

	public abstract classPropertyDeclaration: TargetASTNodeCodeGenerator<ClassPropertyDeclaration, TranslatedCodeLine>;

	/**
	 * Translated a {@link ClassMethodDeclaration} into a specific language.
	 */
	public abstract classMethodDeclaration: TargetASTNodeCodeGenerator<ClassMethodDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link ClassConstructorDeclaration} into a specific language.
	 */
	public abstract classConstructorDeclaration: TargetASTNodeCodeGenerator<
		ClassConstructorDeclaration,
		Array<TranslatedCodeLine>
	>;

	/**
	 * Translates a {@link VariableDeclaration} into a specific language.
	 */
	public abstract interfaceDeclaration: TargetASTNodeCodeGenerator<InterfaceDeclaration, Array<TranslatedCodeLine>>;

	/**
	 * Translates a {@link InterfacePropertyDeclaration} into a specific language.
	 */
	public abstract interfacePropertyDeclaration: TargetASTNodeCodeGenerator<
		InterfacePropertyDeclaration,
		TranslatedCodeLine[]
	>;

	/**
	 * Translates a {@link InterfaceMethodDeclaration} into a specific language.
	 */
	public abstract interfaceMethodDeclaration: TargetASTNodeCodeGenerator<
		InterfaceMethodDeclaration,
		TranslatedCodeLine[]
	>;

	/**
	 * Translates a {@link NumberPrimaryExpression} into a specific language.
	 */
	public abstract numberPrimaryExpression: TargetASTNodeCodeGenerator<NumberPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ArrayPrimaryExpression} into a specific language.
	 * @since 0.10.0
	 */
	public abstract arrayPrimaryExpression: TargetASTNodeCodeGenerator<ArrayPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ObjectPrimaryExpression} into a specific language.
	 */
	public abstract objectPrimaryExpression: TargetASTNodeCodeGenerator<ObjectPrimaryExpression, TranslatedExpression>;

	/**
	 * Translates a {@link ObjectProperty} into a specific language.
	 */
	public abstract objectProperty: TargetASTNodeCodeGenerator<ObjectProperty, TranslatedExpression>;

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into a specific language.
	 */
	public abstract identifierPrimaryExpression: TargetASTNodeCodeGenerator<
		IdentifierPrimaryExpression,
		TranslatedExpression
	>;

	/**
	 * Translates a {@link MemberAccessExpression} into a specific language.
	 * @since 0.10.0
	 */
	public abstract memberAccessExpression: TargetASTNodeCodeGenerator<MemberAccessExpression, TranslatedExpression>;

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
	 * Translates a {@link FunctionCallExpression} into a specific language.
	 */
	public abstract functionCallExpression: TargetASTNodeCodeGenerator<FunctionCallExpression, TranslatedExpression>;

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
	 * Translates a {@link BitwiseAndExpression} into a specific language.
	 */
	public abstract bitwiseAndExpression: TargetASTNodeCodeGenerator<BitwiseAndExpression, TranslatedExpression>;

	/**
	 * Translates a {@link BitwiseOrExpression} into a specific language.
	 */
	public abstract bitwiseOrExpression: TargetASTNodeCodeGenerator<BitwiseOrExpression, TranslatedExpression>;

	/**
	 * Translates a {@link BitwiseXorExpression} into a specific language.
	 */
	public abstract bitwiseXorExpression: TargetASTNodeCodeGenerator<BitwiseXorExpression, TranslatedExpression>;

	/**
	 * Translates a {@link BitwiseShiftExpression} into a specific language.
	 */
	public abstract bitwiseShiftExpression: TargetASTNodeCodeGenerator<BitwiseShiftExpression, TranslatedExpression>;

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

	/**
	 * Translates a {@link LambdaPrimaryExpression} into a specific language.
	 */
	public abstract lambdaPrimaryExpression: TargetASTNodeCodeGenerator<LambdaPrimaryExpression, TranslatedExpression>;
}
