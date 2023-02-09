/**
 * AST pre-set types that are used throughout the compiler.
 * @since 0.10.0
 */
import type {
	AdditiveExpressionContext,
	ArrayLiteralPrimaryExpressionContext,
	AssignmentExpressionContext,
	BoolPrimaryExpressionContext,
	BracketNotationMemberAccessExpressionContext,
	CastOrConvertExpressionContext,
	ConditionalExpressionContext,
	DotNotationMemberAccessExpressionContext,
	EqualityExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallExpressionContext,
	GenericTypeSpecifierContext,
	IdentifierPrimaryExpressionContext,
	IdentifierTypeSpecifierContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	KipperParser,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	ParserASTMapping,
	RelationalExpressionContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	TypeofTypeSpecifierContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
	CompoundStatementContext,
	DoWhileLoopIterationStatementContext,
	ExpressionStatementContext,
	ForLoopIterationStatementContext,
	FunctionDeclarationContext,
	IfStatementContext,
	JumpStatementContext,
	ParameterDeclarationContext,
	ReturnStatementContext,
	SwitchStatementContext,
	VariableDeclarationContext,
	WhileLoopIterationStatementContext,
} from "../parser/";

/**
 * Union type of all usable expression rule context classes implemented by the {@link KipperParser} for an
 * {@link Expression}.
 */
export type ParserExpressionContext =
	| NumberPrimaryExpressionContext
	| ArrayLiteralPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
	| VoidOrNullOrUndefinedPrimaryExpressionContext
	| BoolPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| FStringPrimaryExpressionContext
	| TangledPrimaryExpressionContext
	| IncrementOrDecrementPostfixExpressionContext
	| FunctionCallExpressionContext
	| IncrementOrDecrementUnaryExpressionContext
	| OperatorModifiedUnaryExpressionContext
	| CastOrConvertExpressionContext
	| MultiplicativeExpressionContext
	| AdditiveExpressionContext
	| RelationalExpressionContext
	| EqualityExpressionContext
	| LogicalAndExpressionContext
	| LogicalOrExpressionContext
	| ConditionalExpressionContext
	| AssignmentExpressionContext
	| IdentifierTypeSpecifierContext
	| DotNotationMemberAccessExpressionContext
	| BracketNotationMemberAccessExpressionContext
	| GenericTypeSpecifierContext
	| TypeofTypeSpecifierContext;

/**
 * Union type of all usable statement rule context classes implemented by the {@link KipperParser} for a
 * {@link Statement}.
 */
export type ParserStatementContext =
	| CompoundStatementContext
	| IfStatementContext
	| SwitchStatementContext
	| ExpressionStatementContext
	| DoWhileLoopIterationStatementContext
	| WhileLoopIterationStatementContext
	| ForLoopIterationStatementContext
	| JumpStatementContext
	| ReturnStatementContext;

/**
 * Union type of all usable definition/declaration rule context classes implemented by the {@link KipperParser}
 * for a {@link Declaration}.
 */
export type ParserDeclarationContext =
	| FunctionDeclarationContext
	| ParameterDeclarationContext
	| VariableDeclarationContext;

/**
 * Union type of all rule context classes implemented by the {@link KipperParser} that have a corresponding AST node class.
 * @since 0.10.0
 */
export type ASTNodeParserContext = ParserExpressionContext | ParserStatementContext | ParserDeclarationContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link Declaration} AST node.
 *
 * Note that not all KipperParser rule context classes have a corresponding AST node class. For example, the
 * {@link KipperParser.declaration} rule context has no corresponding AST node class because it is a union of all
 * possible declaration types.
 * @since 0.10.0
 */
export type ASTDeclarationKind =
	| typeof KipperParser.RULE_functionDeclaration
	| typeof KipperParser.RULE_parameterDeclaration
	| typeof KipperParser.RULE_variableDeclaration;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link Statement} AST node.
 * @since 0.10.0
 */
export type ASTStatementKind =
	| typeof KipperParser.RULE_compoundStatement
	| typeof KipperParser.RULE_ifStatement
	| typeof KipperParser.RULE_switchStatement
	| typeof KipperParser.RULE_expressionStatement
	| typeof KipperParser.RULE_doWhileLoopIterationStatement
	| typeof KipperParser.RULE_whileLoopIterationStatement
	| typeof KipperParser.RULE_forLoopIterationStatement
	| typeof KipperParser.RULE_jumpStatement
	| typeof KipperParser.RULE_returnStatement;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link Expression} AST node.
 *
 * Note that not all KipperParser rule context classes have a corresponding AST node class. For example, the
 * {@link KipperParser.primaryExpression} rule context has no corresponding AST node class because it is a union of all
 * possible primary expression types.
 * @since 0.10.0
 */
export type ASTExpressionKind =
	| typeof ParserASTMapping.RULE_numberPrimaryExpression
	| typeof ParserASTMapping.RULE_arrayLiteralPrimaryExpression
	| typeof ParserASTMapping.RULE_identifierPrimaryExpression
	| typeof ParserASTMapping.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof ParserASTMapping.RULE_boolPrimaryExpression
	| typeof ParserASTMapping.RULE_stringPrimaryExpression
	| typeof ParserASTMapping.RULE_fStringPrimaryExpression
	| typeof ParserASTMapping.RULE_tangledPrimaryExpression
	| typeof ParserASTMapping.RULE_incrementOrDecrementPostfixExpression
	| typeof ParserASTMapping.RULE_functionCallExpression
	| typeof ParserASTMapping.RULE_incrementOrDecrementUnaryExpression
	| typeof ParserASTMapping.RULE_operatorModifiedUnaryExpression
	| typeof ParserASTMapping.RULE_castOrConvertExpression
	| typeof ParserASTMapping.RULE_multiplicativeExpression
	| typeof ParserASTMapping.RULE_additiveExpression
	| typeof ParserASTMapping.RULE_relationalExpression
	| typeof ParserASTMapping.RULE_equalityExpression
	| typeof ParserASTMapping.RULE_logicalAndExpression
	| typeof ParserASTMapping.RULE_logicalOrExpression
	| typeof ParserASTMapping.RULE_conditionalExpression
	| typeof ParserASTMapping.RULE_assignmentExpression
	| typeof ParserASTMapping.RULE_identifierTypeSpecifier
	| typeof ParserASTMapping.RULE_genericTypeSpecifier
	| typeof ParserASTMapping.RULE_typeofTypeSpecifier
	| typeof ParserASTMapping.RULE_memberAccessExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link CompilableASTNode}.
 *
 * This unlike {@link ASTKind} only contains the syntax kinds that have a corresponding constructable
 * {@link CompilableASTNode} implementation and as such can be created using an {@link ASTNodeFactory}.
 * @since 0.10.0
 */
export type ConstructableASTKind = ASTDeclarationKind | ASTStatementKind | ASTExpressionKind;
