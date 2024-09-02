/**
 * Target-specific Semantic Analyser.
 * @since 0.10.0
 */
import type {
	AdditiveExpression,
	AnalysableASTNode,
	ArrayPrimaryExpression,
	AssignmentExpression,
	BitwiseAndExpression,
	BitwiseOrExpression,
	BitwiseShiftExpression,
	BitwiseXorExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	ClassDeclaration,
	ClassMethodDeclaration,
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
	SemanticData,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TypeData,
	TypeofExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopIterationStatement,
} from "../ast";
import { KipperSemanticErrorHandler } from "../semantics";
import type { ClassConstructorDeclaration } from "../ast/nodes/declarations/type-declaration/class-declaration/class-member-declaration/class-constructor-declaration/class-constructor-declaration";
import type { NewInstantiationExpression } from "../ast/nodes/expressions/new-instantiation-expression";

/**
 * Represents a function that checks the semantics for a {@link AnalysableASTNode}.
 *
 * This function does not interpret but only check the logical integrity of the AST node.
 * @since 0.10.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetASTNodeSemanticAnalyser<T extends AnalysableASTNode<SemanticData, TypeData>> = (
	node: T,
) => Promise<void>;

/**
 * Represents a Semantic analyser that is specific for a {@link KipperCompileTarget}.
 * @since 0.10.0
 */
export abstract class KipperTargetSemanticAnalyser extends KipperSemanticErrorHandler {
	/**
	 * Performs translation-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	public abstract compoundStatement?: TargetASTNodeSemanticAnalyser<CompoundStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link IfStatement} instances.
	 */
	public abstract ifStatement?: TargetASTNodeSemanticAnalyser<IfStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link SwitchStatement} instances.
	 */
	public abstract switchStatement?: TargetASTNodeSemanticAnalyser<SwitchStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	public abstract expressionStatement?: TargetASTNodeSemanticAnalyser<ExpressionStatement>;

	/**
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract doWhileLoopIterationStatement?: TargetASTNodeSemanticAnalyser<DoWhileLoopIterationStatement>;

	/**
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract whileLoopIterationStatement?: TargetASTNodeSemanticAnalyser<WhileLoopIterationStatement>;

	/**
	 * Translates a {@link ForLoopIterationStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract forLoopIterationStatement?: TargetASTNodeSemanticAnalyser<ForLoopIterationStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link JumpStatement} instances.
	 * @since 0.10.0
	 */
	public abstract jumpStatement?: TargetASTNodeSemanticAnalyser<JumpStatement>;

	/**
	 * Translates a {@link JumpStatement} into a specific language.
	 * @since 0.10.0
	 */
	public abstract returnStatement?: TargetASTNodeSemanticAnalyser<ReturnStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	public abstract parameterDeclaration?: TargetASTNodeSemanticAnalyser<ParameterDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	public abstract functionDeclaration?: TargetASTNodeSemanticAnalyser<FunctionDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	public abstract variableDeclaration?: TargetASTNodeSemanticAnalyser<VariableDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link ClassDeclaration} instances.
	 */
	public abstract classDeclaration?: TargetASTNodeSemanticAnalyser<ClassDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link NewInstantiationExpression} instances.
	 */
	public abstract newInstantiationExpression?: TargetASTNodeSemanticAnalyser<NewInstantiationExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ClassMethodDeclaration} instances.
	 */
	public abstract classMethodDeclaration?: TargetASTNodeSemanticAnalyser<ClassMethodDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link ClassConstructorDeclaration} instances.
	 */
	public abstract classConstructorDeclaration?: TargetASTNodeSemanticAnalyser<ClassConstructorDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link InterfaceDeclaration} instances.
	 */
	public abstract interfaceDeclaration?: TargetASTNodeSemanticAnalyser<InterfaceDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link InterfacePropertyDeclaration} instances.
	 */
	public abstract interfacePropertyDeclaration?: TargetASTNodeSemanticAnalyser<InterfacePropertyDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link InterfaceMethodDeclaration} instances.
	 */
	public abstract interfaceMethodDeclaration?: TargetASTNodeSemanticAnalyser<InterfaceMethodDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	public abstract numberPrimaryExpression?: TargetASTNodeSemanticAnalyser<NumberPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ArrayPrimaryExpression} instances.
	 */
	public abstract arrayPrimaryExpression?: TargetASTNodeSemanticAnalyser<ArrayPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ObjectPrimaryExpression} instances.
	 */
	public abstract objectPrimaryExpression?: TargetASTNodeSemanticAnalyser<ObjectPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ObjectProperty} instances.
	 */
	public abstract objectProperty?: TargetASTNodeSemanticAnalyser<ObjectProperty>;

	/**
	 * Performs translation-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	public abstract identifierPrimaryExpression?: TargetASTNodeSemanticAnalyser<IdentifierPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link MemberAccessExpression} instances.
	 * @since 0.10.0
	 */
	public abstract memberAccessExpression?: TargetASTNodeSemanticAnalyser<MemberAccessExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	public abstract stringPrimaryExpression?: TargetASTNodeSemanticAnalyser<StringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	public abstract fStringPrimaryExpression?: TargetASTNodeSemanticAnalyser<FStringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	public abstract boolPrimaryExpression?: TargetASTNodeSemanticAnalyser<BoolPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IdentifierTypeSpecifierExpression} instances.
	 */
	public abstract identifierTypeSpecifierExpression?: TargetASTNodeSemanticAnalyser<IdentifierTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	public abstract genericTypeSpecifierExpression?: TargetASTNodeSemanticAnalyser<GenericTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	public abstract typeofTypeSpecifierExpression?: TargetASTNodeSemanticAnalyser<TypeofTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	public abstract tangledPrimaryExpression?: TargetASTNodeSemanticAnalyser<TangledPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link VoidOrNullOrUndefinedPrimaryExpression} instances.
	 */
	public abstract voidOrNullOrUndefinedPrimaryExpression?: TargetASTNodeSemanticAnalyser<VoidOrNullOrUndefinedPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link incrementOrDecrementPostfixExpression} instances.
	 */
	public abstract incrementOrDecrementPostfixExpression?: TargetASTNodeSemanticAnalyser<IncrementOrDecrementPostfixExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionCallExpression} instances.
	 */
	public abstract functionCallExpression?: TargetASTNodeSemanticAnalyser<FunctionCallExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	public abstract incrementOrDecrementUnaryExpression?: TargetASTNodeSemanticAnalyser<IncrementOrDecrementUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	public abstract operatorModifiedUnaryExpression?: TargetASTNodeSemanticAnalyser<OperatorModifiedUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	public abstract castOrConvertExpression?: TargetASTNodeSemanticAnalyser<CastOrConvertExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	public abstract multiplicativeExpression?: TargetASTNodeSemanticAnalyser<MultiplicativeExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	public abstract additiveExpression?: TargetASTNodeSemanticAnalyser<AdditiveExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	public abstract relationalExpression?: TargetASTNodeSemanticAnalyser<RelationalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	public abstract equalityExpression?: TargetASTNodeSemanticAnalyser<EqualityExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BitwiseAndExpression} instances.
	 */
	public abstract bitwiseAndExpression?: TargetASTNodeSemanticAnalyser<BitwiseAndExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BitwiseOrExpression} instances.
	 */
	public abstract bitwiseOrExpression?: TargetASTNodeSemanticAnalyser<BitwiseOrExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BitwiseXorExpression} instances.
	 */
	public abstract bitwiseXorExpression?: TargetASTNodeSemanticAnalyser<BitwiseXorExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BitwiseShiftExpression} instances.
	 */
	public abstract bitwiseShiftExpression?: TargetASTNodeSemanticAnalyser<BitwiseShiftExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	public abstract logicalAndExpression?: TargetASTNodeSemanticAnalyser<LogicalAndExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	public abstract logicalOrExpression?: TargetASTNodeSemanticAnalyser<LogicalOrExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	public abstract conditionalExpression?: TargetASTNodeSemanticAnalyser<ConditionalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	public abstract assignmentExpression?: TargetASTNodeSemanticAnalyser<AssignmentExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LambdaPrimaryExpression} instances.
	 */
	public abstract lambdaPrimaryExpression?: TargetASTNodeSemanticAnalyser<LambdaPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TypeofExpression} instances.
	 */
	public abstract typeofExpression?: TargetASTNodeSemanticAnalyser<TypeofExpression>;
}
