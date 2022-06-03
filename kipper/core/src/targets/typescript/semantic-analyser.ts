/**
 * The TypeScript target-specific semantic analyser.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CharacterPrimaryExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
	JumpStatement,
	KipperTargetSemanticAnalyser,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	SelectionStatement,
	SingleTypeSpecifierExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "../../compiler";

/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.8.0
 */
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
	 * Performs typescript-specific semantic analysis for {@link SingleTypeSpecifierExpression} instances.
	 */
	singleTypeSpecifierExpression = async (token: SingleTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	genericTypeSpecifierExpression = async (token: GenericTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	typeofTypeSpecifierExpression = async (token: TypeofTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	stringPrimaryExpression = async (token: StringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	fStringPrimaryExpression = async (token: FStringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	boolPrimaryExpression = async (token: BoolPrimaryExpression) => {};

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
