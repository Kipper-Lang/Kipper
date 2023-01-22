/**
 * AST Node factories which are used to create AST nodes from the ANTLR4 parse tree.
 * @since 0.10.0
 */
import type { CompilableASTNode, CompilableNodeParent } from "../compilable-ast-node";
import { ParserASTMapping, KipperParserRuleContext } from "../../parser";
import {
	AdditiveExpression,
	ArrayLiteralPrimaryExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	ConditionalExpression,
	EqualityExpression,
	Expression,
	FStringPrimaryExpression,
	FunctionCallExpression,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MemberAccessExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParserExpressionContextType,
	ASTExpressionKind,
	RelationalExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VoidOrNullOrUndefinedPrimaryExpression,
} from "./expressions";
import {
	Declaration,
	FunctionDeclaration,
	ParameterDeclaration,
	ParserDeclarationContextType,
	ASTDeclarationKind,
	VariableDeclaration,
} from "./definitions";
import {
	CompoundStatement,
	DoWhileLoopStatement,
	ExpressionStatement,
	ForLoopStatement,
	IfStatement,
	JumpStatement,
	ParserStatementContextType,
	ASTStatementKind,
	ReturnStatement,
	Statement,
	SwitchStatement,
	WhileLoopStatement,
} from "./statements";

/**
 * A simple blueprint for a factory for creating AST nodes from a parser context.
 * @since 0.10.0
 */
export interface ASTNodeFactory<
	T extends CompilableASTNode = CompilableASTNode,
	U extends KipperParserRuleContext = KipperParserRuleContext,
> {
	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	create(antlrRuleCtx: U, parent: CompilableASTNode): T;
}

/**
 * Factory class which generates statement class instances using {@link StatementASTNodeFactory.create StatementASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class StatementASTNodeFactory implements ASTNodeFactory<Statement, ParserExpressionContextType> {
	/**
	 * A table matching all {@link ASTStatementKind statement kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly statementMatchTable = {
		[ParserASTMapping.RULE_compoundStatement]: CompoundStatement,
		[ParserASTMapping.RULE_ifStatement]: IfStatement,
		[ParserASTMapping.RULE_switchStatement]: SwitchStatement,
		[ParserASTMapping.RULE_expressionStatement]: ExpressionStatement,
		[ParserASTMapping.RULE_doWhileLoopIterationStatement]: DoWhileLoopStatement,
		[ParserASTMapping.RULE_whileLoopIterationStatement]: WhileLoopStatement,
		[ParserASTMapping.RULE_forLoopIterationStatement]: ForLoopStatement,
		[ParserASTMapping.RULE_returnStatement]: ReturnStatement,
		[ParserASTMapping.RULE_jumpStatement]: JumpStatement,
	} satisfies Record<ASTStatementKind, typeof Statement<any, any>>;

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserStatementContextType, parent: CompilableNodeParent): ConstructableASTStatement {
		const astSyntaxKind = <keyof typeof this.statementMatchTable>antlrRuleCtx.astSyntaxKind;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.statementMatchTable[astSyntaxKind](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Statement AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTStatementClass =
	typeof StatementASTNodeFactory.prototype.statementMatchTable[ASTStatementKind];

/**
 * A union of all construable Statement AST nodes. Uses {@link ConstructableASTStatementClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTStatement = InstanceType<ConstructableASTStatementClass>;

/**
 * Factory class which generates expression class instances using {@link ExpressionASTNodeFactory.create ExpressionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class ExpressionASTNodeFactory implements ASTNodeFactory<Expression, ParserExpressionContextType> {
	/**
	 * A table matching all {@link ASTExpressionKind expression kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly expressionMatchTable = {
		[ParserASTMapping.RULE_numberPrimaryExpression]: NumberPrimaryExpression,
		[ParserASTMapping.RULE_arrayLiteralPrimaryExpression]: ArrayLiteralPrimaryExpression,
		[ParserASTMapping.RULE_identifierPrimaryExpression]: IdentifierPrimaryExpression,
		[ParserASTMapping.RULE_voidOrNullOrUndefinedPrimaryExpression]: VoidOrNullOrUndefinedPrimaryExpression,
		[ParserASTMapping.RULE_boolPrimaryExpression]: BoolPrimaryExpression,
		[ParserASTMapping.RULE_stringPrimaryExpression]: StringPrimaryExpression,
		[ParserASTMapping.RULE_fStringPrimaryExpression]: FStringPrimaryExpression,
		[ParserASTMapping.RULE_tangledPrimaryExpression]: TangledPrimaryExpression,
		[ParserASTMapping.RULE_incrementOrDecrementPostfixExpression]: IncrementOrDecrementPostfixExpression,
		[ParserASTMapping.RULE_functionCallExpression]: FunctionCallExpression,
		[ParserASTMapping.RULE_incrementOrDecrementUnaryExpression]: IncrementOrDecrementUnaryExpression,
		[ParserASTMapping.RULE_operatorModifiedUnaryExpression]: OperatorModifiedUnaryExpression,
		[ParserASTMapping.RULE_castOrConvertExpression]: CastOrConvertExpression,
		[ParserASTMapping.RULE_multiplicativeExpression]: MultiplicativeExpression,
		[ParserASTMapping.RULE_additiveExpression]: AdditiveExpression,
		[ParserASTMapping.RULE_relationalExpression]: RelationalExpression,
		[ParserASTMapping.RULE_equalityExpression]: EqualityExpression,
		[ParserASTMapping.RULE_logicalAndExpression]: LogicalAndExpression,
		[ParserASTMapping.RULE_logicalOrExpression]: LogicalOrExpression,
		[ParserASTMapping.RULE_conditionalExpression]: ConditionalExpression,
		[ParserASTMapping.RULE_assignmentExpression]: AssignmentExpression,
		[ParserASTMapping.RULE_identifierTypeSpecifier]: IdentifierTypeSpecifierExpression,
		[ParserASTMapping.RULE_genericTypeSpecifier]: GenericTypeSpecifierExpression,
		[ParserASTMapping.RULE_typeofTypeSpecifier]: TypeofTypeSpecifierExpression,
		[ParserASTMapping.RULE_memberAccessExpression]: MemberAccessExpression,
	} satisfies Record<ASTExpressionKind, typeof Expression<any, any>>;

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserExpressionContextType, parent: CompilableASTNode): ConstructableASTExpression {
		const astSyntaxKind = <keyof typeof this.expressionMatchTable>antlrRuleCtx.astSyntaxKind;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.expressionMatchTable[astSyntaxKind](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Expression AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTExpressionClass =
	typeof ExpressionASTNodeFactory.prototype.expressionMatchTable[ASTExpressionKind];

/**
 * A union of all construable Expression AST nodes. Uses {@link ConstructableASTExpressionClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTExpression = InstanceType<ConstructableASTExpressionClass>;

/**
 * Factory class which generates definition class instances using {@link DeclarationASTNodeFactory.create DefinitionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class DeclarationASTNodeFactory implements ASTNodeFactory<Declaration, ParserExpressionContextType> {
	/**
	 * A table matching all {@link ASTDeclarationKind declaration kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly declarationMatchTable = {
		[ParserASTMapping.RULE_functionDeclaration]: FunctionDeclaration,
		[ParserASTMapping.RULE_variableDeclaration]: VariableDeclaration,
		[ParserASTMapping.RULE_parameterDeclaration]: ParameterDeclaration,
	} satisfies Record<ASTDeclarationKind, typeof Declaration<any, any>>;

	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserDeclarationContextType, parent: CompilableNodeParent): ConstructableASTDeclaration {
		const astSyntaxKind = <keyof typeof this.declarationMatchTable>antlrRuleCtx.astSyntaxKind;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.declarationMatchTable[astSyntaxKind](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Declaration AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTDeclarationClass =
	typeof DeclarationASTNodeFactory.prototype.declarationMatchTable[ASTDeclarationKind];

/**
 * A union of all construable Declaration AST nodes. Uses {@link ConstructableASTDeclarationClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTDeclaration = InstanceType<ConstructableASTDeclarationClass>;

/**
 * A union of all construable AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTNodeClass =
	| ConstructableASTStatementClass
	| ConstructableASTExpressionClass
	| ConstructableASTDeclarationClass;

/**
 * A union of all construable AST nodes. Uses {@link ConstructableASTNodeClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTNode = InstanceType<ConstructableASTNodeClass>;
