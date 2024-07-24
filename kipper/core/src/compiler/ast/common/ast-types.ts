/**
 * AST pre-set types that are used throughout the compiler.
 * @since 0.10.0
 */
import type {
	AdditiveExpressionContext,
	ArrayPrimaryExpressionContext,
	AssignmentExpressionContext,
	BitwiseAndExpressionContext,
	BitwiseOrExpressionContext,
	BitwiseShiftExpressionContext,
	BitwiseXorExpressionContext,
	BoolPrimaryExpressionContext,
	BracketNotationMemberAccessExpressionContext,
	CastOrConvertExpressionContext,
	ClassConstructorDeclarationContext,
	ClassDeclarationContext,
	ClassMethodDeclarationContext,
	ClassPropertyDeclarationContext,
	CompoundStatementContext,
	ConditionalExpressionContext,
	DotNotationMemberAccessExpressionContext,
	DoWhileLoopIterationStatementContext,
	EqualityExpressionContext,
	ExpressionStatementContext,
	ForLoopIterationStatementContext,
	FStringPrimaryExpressionContext,
	FunctionCallExpressionContext,
	FunctionDeclarationContext,
	GenericTypeSpecifierExpressionContext,
	IdentifierPrimaryExpressionContext,
	IdentifierTypeSpecifierExpressionContext,
	IfStatementContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	InterfaceDeclarationContext,
	InterfaceMethodDeclarationContext,
	InterfacePropertyDeclarationContext,
	JumpStatementContext,
	KindParseRuleMapping,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	ParameterDeclarationContext,
	ParseRuleKindMapping,
	RelationalExpressionContext,
	ReturnStatementContext,
	StringPrimaryExpressionContext,
	SwitchStatementContext,
	TangledPrimaryExpressionContext,
	TypeofTypeSpecifierExpressionContext,
	VariableDeclarationContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
	WhileLoopIterationStatementContext,
} from "../../lexer-parser";

/**
 * Union type of all usable expression rule context classes implemented by the {@link ParseRuleKindMapping} for an
 * {@link Expression}.
 */
export type ParserExpressionContext =
	| NumberPrimaryExpressionContext
	| ArrayPrimaryExpressionContext
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
	| IdentifierTypeSpecifierExpressionContext
	| DotNotationMemberAccessExpressionContext
	| BracketNotationMemberAccessExpressionContext
	| GenericTypeSpecifierExpressionContext
	| TypeofTypeSpecifierExpressionContext
	| BitwiseOrExpressionContext
	| BitwiseAndExpressionContext
	| BitwiseXorExpressionContext
	| BitwiseShiftExpressionContext;

/**
 * Union type of all usable statement rule context classes implemented by the {@link ParseRuleKindMapping} for a
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
 * Union type of all usable definition/declaration rule context classes implemented by the {@link ParseRuleKindMapping}
 * for a {@link Declaration}.
 */
export type ParserDeclarationContext =
	| FunctionDeclarationContext
	| ParameterDeclarationContext
	| VariableDeclarationContext
	| InterfaceDeclarationContext
	| InterfacePropertyDeclarationContext
	| InterfaceMethodDeclarationContext
	| ClassDeclarationContext
	| ClassPropertyDeclarationContext
	| ClassMethodDeclarationContext
	| ClassConstructorDeclarationContext;

/**
 * Union type of all rule context classes implemented by the {@link ParseRuleKindMapping} that have a corresponding AST node class.
 * @since 0.10.0
 */
export type ASTNodeParserContext = ParserExpressionContext | ParserStatementContext | ParserDeclarationContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link Declaration} AST node.
 *
 * Note that not all ParseRuleKindMapping rule context classes have a corresponding AST node class. For example, the
 * {@link ParseRuleKindMapping.declaration} rule context has no corresponding AST node class because it is a union of all
 * possible declaration types.
 * @since 0.10.0
 */
export type ASTDeclarationKind =
	| typeof ParseRuleKindMapping.RULE_functionDeclaration
	| typeof ParseRuleKindMapping.RULE_parameterDeclaration
	| typeof ParseRuleKindMapping.RULE_variableDeclaration
	| typeof ParseRuleKindMapping.RULE_interfaceDeclaration
	| typeof ParseRuleKindMapping.RULE_interfacePropertyDeclaration
	| typeof ParseRuleKindMapping.RULE_interfaceMethodDeclaration
	| typeof ParseRuleKindMapping.RULE_classDeclaration
	| typeof ParseRuleKindMapping.RULE_classPropertyDeclaration
	| typeof ParseRuleKindMapping.RULE_classMethodDeclaration
	| typeof ParseRuleKindMapping.RULE_classConstructorDeclaration;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link Statement} AST node.
 * @since 0.10.0
 */
export type ASTStatementKind =
	| typeof ParseRuleKindMapping.RULE_compoundStatement
	| typeof ParseRuleKindMapping.RULE_ifStatement
	| typeof ParseRuleKindMapping.RULE_switchStatement
	| typeof ParseRuleKindMapping.RULE_expressionStatement
	| typeof ParseRuleKindMapping.RULE_doWhileLoopIterationStatement
	| typeof ParseRuleKindMapping.RULE_whileLoopIterationStatement
	| typeof ParseRuleKindMapping.RULE_forLoopIterationStatement
	| typeof ParseRuleKindMapping.RULE_jumpStatement
	| typeof ParseRuleKindMapping.RULE_returnStatement;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link Expression} AST node.
 *
 * Note that not all ParseRuleKindMapping rule context classes have a corresponding AST node class. For example, the
 * {@link ParseRuleKindMapping.primaryExpression} rule context has no corresponding AST node class because it is a union of all
 * possible primary expression types.
 * @since 0.10.0
 */
export type ASTExpressionKind =
	| typeof ParseRuleKindMapping.RULE_numberPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_arrayPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_objectProperty
	| typeof ParseRuleKindMapping.RULE_objectPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_identifierPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_boolPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_stringPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_fStringPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_tangledPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_incrementOrDecrementPostfixExpression
	| typeof ParseRuleKindMapping.RULE_functionCallExpression
	| typeof ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression
	| typeof ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression
	| typeof ParseRuleKindMapping.RULE_castOrConvertExpression
	| typeof ParseRuleKindMapping.RULE_multiplicativeExpression
	| typeof ParseRuleKindMapping.RULE_additiveExpression
	| typeof ParseRuleKindMapping.RULE_relationalExpression
	| typeof ParseRuleKindMapping.RULE_equalityExpression
	| typeof ParseRuleKindMapping.RULE_logicalAndExpression
	| typeof ParseRuleKindMapping.RULE_logicalOrExpression
	| typeof ParseRuleKindMapping.RULE_conditionalExpression
	| typeof ParseRuleKindMapping.RULE_assignmentExpression
	| typeof ParseRuleKindMapping.RULE_identifierTypeSpecifierExpression
	| typeof ParseRuleKindMapping.RULE_genericTypeSpecifierExpression
	| typeof ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseOrExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseAndExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseXorExpression
	| typeof ParseRuleKindMapping.RULE_bitwiseShiftExpression
	| typeof ParseRuleKindMapping.RULE_lambdaPrimaryExpression
	| typeof ParseRuleKindMapping.RULE_memberAccessExpression;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link CompilableASTNode}.
 *
 * This unlike {@link ASTKind} only contains the syntax kinds that have a corresponding constructable
 * {@link CompilableASTNode} implementation and as such can be created using an {@link ASTNodeFactory}.
 * @since 0.10.0
 */
export type ConstructableASTKind = ASTDeclarationKind | ASTStatementKind | ASTExpressionKind;

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values that have a constructable {@link Declaration} AST
 * node.
 * @since 0.11.0
 */
export type ASTDeclarationRuleName =
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_functionDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_parameterDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_variableDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_interfaceDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_interfacePropertyDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_interfaceMethodDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_classDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_classPropertyDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_classMethodDeclaration]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_classConstructorDeclaration];

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values that have a constructable {@link Statement} AST
 * node.
 * @since 0.11.0
 */
export type ASTStatementRuleName =
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_compoundStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_ifStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_switchStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_expressionStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_doWhileLoopIterationStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_whileLoopIterationStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_forLoopIterationStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_jumpStatement]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_returnStatement];

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values that have a constructable {@link Expression} AST
 * node.
 * @since 0.11.0
 */
export type ASTExpressionRuleName =
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_numberPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_arrayPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_objectProperty]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_objectPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_identifierPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_voidOrNullOrUndefinedPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_boolPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_stringPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_fStringPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_tangledPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_incrementOrDecrementPostfixExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_functionCallExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_castOrConvertExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_multiplicativeExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_additiveExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_relationalExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_equalityExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_logicalAndExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_logicalOrExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_conditionalExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_assignmentExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_identifierTypeSpecifierExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_genericTypeSpecifierExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_bitwiseOrExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_bitwiseAndExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_bitwiseXorExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_bitwiseShiftExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_lambdaPrimaryExpression]
	| (typeof KindParseRuleMapping)[typeof ParseRuleKindMapping.RULE_memberAccessExpression];

/**
 * Union type of all possible {@link ParserASTNode.ruleName} values that have a constructable {@link CompilableASTNode}.
 * @since 0.11.0
 */
export type ConstructableASTRuleName = ASTDeclarationRuleName | ASTStatementRuleName | ASTExpressionRuleName;
