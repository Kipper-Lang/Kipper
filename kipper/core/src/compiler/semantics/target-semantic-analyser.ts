import type {
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
	IdentifierTypeSpecifierExpression,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
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
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "./language";
import { IfStatement } from "./language";
import type { CompilableASTNode } from "../parser";
import { KipperSemanticErrorHandler } from "./semantics-error-handler";

/**
 * Represents a function that checks the semantics for a {@link CompilableASTNode}.
 *
 * This function does not interpret but only check the logical integrity of the AST node.
 * @since 0.5.0
 */
// eslint-disable-next-line no-unused-vars
export type TargetASTNodeSemanticAnalyser<T extends CompilableASTNode<any, any>> = (node: T) => Promise<void>;

/**
 * Represents a Semantic analyser that is specific for a {@link KipperCompileTarget}.
 * @since 0.5.0
 */
export abstract class KipperTargetSemanticAnalyser extends KipperSemanticErrorHandler {
	/**type
	 * Performs translation-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	public abstract compoundStatement: TargetASTNodeSemanticAnalyser<CompoundStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link IfStatement} instances.
	 */
	public abstract ifStatement: TargetASTNodeSemanticAnalyser<IfStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link SwitchStatement} instances.
	 */
	public abstract switchStatement: TargetASTNodeSemanticAnalyser<SwitchStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	public abstract expressionStatement: TargetASTNodeSemanticAnalyser<ExpressionStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link IterationStatement} instances.
	 */
	public abstract iterationStatement: TargetASTNodeSemanticAnalyser<IterationStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link JumpStatement} instances.
	 */
	public abstract jumpStatement: TargetASTNodeSemanticAnalyser<JumpStatement>;

	/**
	 * Performs translation-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	public abstract parameterDeclaration: TargetASTNodeSemanticAnalyser<ParameterDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	public abstract functionDeclaration: TargetASTNodeSemanticAnalyser<FunctionDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	public abstract variableDeclaration: TargetASTNodeSemanticAnalyser<VariableDeclaration>;

	/**
	 * Performs translation-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	public abstract numberPrimaryExpression: TargetASTNodeSemanticAnalyser<NumberPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link CharacterPrimaryExpression} instances.
	 */
	public abstract characterPrimaryExpression: TargetASTNodeSemanticAnalyser<CharacterPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	public abstract listPrimaryExpression: TargetASTNodeSemanticAnalyser<ListPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	public abstract identifierPrimaryExpression: TargetASTNodeSemanticAnalyser<IdentifierPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	public abstract stringPrimaryExpression: TargetASTNodeSemanticAnalyser<StringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	public abstract fStringPrimaryExpression: TargetASTNodeSemanticAnalyser<FStringPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	public abstract boolPrimaryExpression: TargetASTNodeSemanticAnalyser<BoolPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IdentifierTypeSpecifierExpression} instances.
	 */
	public abstract identifierTypeSpecifierExpression: TargetASTNodeSemanticAnalyser<IdentifierTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	public abstract genericTypeSpecifierExpression: TargetASTNodeSemanticAnalyser<GenericTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	public abstract typeofTypeSpecifierExpression: TargetASTNodeSemanticAnalyser<TypeofTypeSpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	public abstract tangledPrimaryExpression: TargetASTNodeSemanticAnalyser<TangledPrimaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	public abstract arraySpecifierExpression: TargetASTNodeSemanticAnalyser<ArraySpecifierExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IncrementOrDecrementExpression} instances.
	 */
	public abstract incrementOrDecrementExpression: TargetASTNodeSemanticAnalyser<IncrementOrDecrementExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	public abstract functionCallPostfixExpression: TargetASTNodeSemanticAnalyser<FunctionCallPostfixExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	public abstract incrementOrDecrementUnaryExpression: TargetASTNodeSemanticAnalyser<IncrementOrDecrementUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	public abstract operatorModifiedUnaryExpression: TargetASTNodeSemanticAnalyser<OperatorModifiedUnaryExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	public abstract castOrConvertExpression: TargetASTNodeSemanticAnalyser<CastOrConvertExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	public abstract multiplicativeExpression: TargetASTNodeSemanticAnalyser<MultiplicativeExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	public abstract additiveExpression: TargetASTNodeSemanticAnalyser<AdditiveExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	public abstract relationalExpression: TargetASTNodeSemanticAnalyser<RelationalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	public abstract equalityExpression: TargetASTNodeSemanticAnalyser<EqualityExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	public abstract logicalAndExpression: TargetASTNodeSemanticAnalyser<LogicalAndExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	public abstract logicalOrExpression: TargetASTNodeSemanticAnalyser<LogicalOrExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	public abstract conditionalExpression: TargetASTNodeSemanticAnalyser<ConditionalExpression>;

	/**
	 * Performs translation-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	public abstract assignmentExpression: TargetASTNodeSemanticAnalyser<AssignmentExpression>;
}
