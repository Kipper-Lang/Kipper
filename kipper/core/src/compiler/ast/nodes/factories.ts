/**
 * AST Node factories which are used to create AST nodes from the ANTLR4 parse tree.
 * @since 0.10.0
 */
import type { CompilableASTNode, CompilableNodeParent } from "../compilable-ast-node";
import { KipperParser } from "../../parser";
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
	ParserExpressionKind,
	RelationalExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VoidOrNullOrUndefinedPrimaryExpression,
} from "./expressions";
import { ParserRuleContext } from "antlr4ts";
import {
	Declaration,
	FunctionDeclaration,
	ParameterDeclaration,
	ParserDeclarationContextType,
	ParserDeclarationKind,
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
	ParserStatementKind,
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
	U extends ParserRuleContext = ParserRuleContext,
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
	 * A table matching all {@link ParserStatementKind statement kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly statementMatchTable = {
		[KipperParser.RULE_compoundStatement]: CompoundStatement,
		[KipperParser.RULE_ifStatement]: IfStatement,
		[KipperParser.RULE_switchStatement]: SwitchStatement,
		[KipperParser.RULE_expressionStatement]: ExpressionStatement,
		[KipperParser.RULE_doWhileLoopIterationStatement]: DoWhileLoopStatement,
		[KipperParser.RULE_whileLoopIterationStatement]: WhileLoopStatement,
		[KipperParser.RULE_forLoopIterationStatement]: ForLoopStatement,
		[KipperParser.RULE_returnStatement]: ReturnStatement,
		[KipperParser.RULE_jumpStatement]: JumpStatement,
	} satisfies Record<ParserStatementKind, typeof Statement<any, any>>;

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserStatementContextType, parent: CompilableNodeParent): ConstructableASTStatement {
		const ruleIndex = <keyof typeof this.statementMatchTable>antlrRuleCtx.ruleIndex;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.statementMatchTable[ruleIndex](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Statement AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTStatementClass =
	typeof StatementASTNodeFactory.prototype.statementMatchTable[ParserStatementKind];

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
	 * A table matching all {@link ParserExpressionKind expression kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly expressionMatchTable = {
		[KipperParser.RULE_numberPrimaryExpression]: NumberPrimaryExpression,
		[KipperParser.RULE_arrayLiteralPrimaryExpression]: ArrayLiteralPrimaryExpression,
		[KipperParser.RULE_identifierPrimaryExpression]: IdentifierPrimaryExpression,
		[KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression]: VoidOrNullOrUndefinedPrimaryExpression,
		[KipperParser.RULE_boolPrimaryExpression]: BoolPrimaryExpression,
		[KipperParser.RULE_stringPrimaryExpression]: StringPrimaryExpression,
		[KipperParser.RULE_fStringPrimaryExpression]: FStringPrimaryExpression,
		[KipperParser.RULE_tangledPrimaryExpression]: TangledPrimaryExpression,
		[KipperParser.RULE_incrementOrDecrementPostfixExpression]: IncrementOrDecrementPostfixExpression,
		[KipperParser.RULE_functionCallExpression]: FunctionCallExpression,
		[KipperParser.RULE_incrementOrDecrementUnaryExpression]: IncrementOrDecrementUnaryExpression,
		[KipperParser.RULE_operatorModifiedUnaryExpression]: OperatorModifiedUnaryExpression,
		[KipperParser.RULE_castOrConvertExpression]: CastOrConvertExpression,
		[KipperParser.RULE_multiplicativeExpression]: MultiplicativeExpression,
		[KipperParser.RULE_additiveExpression]: AdditiveExpression,
		[KipperParser.RULE_relationalExpression]: RelationalExpression,
		[KipperParser.RULE_equalityExpression]: EqualityExpression,
		[KipperParser.RULE_logicalAndExpression]: LogicalAndExpression,
		[KipperParser.RULE_logicalOrExpression]: LogicalOrExpression,
		[KipperParser.RULE_conditionalExpression]: ConditionalExpression,
		[KipperParser.RULE_assignmentExpression]: AssignmentExpression,
		[KipperParser.RULE_identifierTypeSpecifier]: IdentifierTypeSpecifierExpression,
		[KipperParser.RULE_genericTypeSpecifier]: GenericTypeSpecifierExpression,
		[KipperParser.RULE_typeofTypeSpecifier]: TypeofTypeSpecifierExpression,
		[KipperParser.RULE_memberAccessExpression]: MemberAccessExpression,
	} satisfies Record<ParserExpressionKind, typeof Expression<any, any>>;

	/**
	 * Fetches the AST node class and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserExpressionContextType, parent: CompilableASTNode): ConstructableASTExpression {
		const ruleIndex = <keyof typeof this.expressionMatchTable>antlrRuleCtx.ruleIndex;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.expressionMatchTable[ruleIndex](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Expression AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTExpressionClass =
	typeof ExpressionASTNodeFactory.prototype.expressionMatchTable[ParserExpressionKind];

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
	 * A table matching all {@link ParserDeclarationKind declaration kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public readonly declarationMatchTable = {
		[KipperParser.RULE_functionDeclaration]: FunctionDeclaration,
		[KipperParser.RULE_variableDeclaration]: VariableDeclaration,
		[KipperParser.RULE_parameterDeclaration]: ParameterDeclaration,
	} satisfies Record<ParserDeclarationKind, typeof Declaration<any, any>>;

	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The parent of the AST node that is being created.
	 * @since 0.9.0
	 */
	public create(antlrRuleCtx: ParserDeclarationContextType, parent: CompilableNodeParent): ConstructableASTDeclaration {
		const ruleIndex = <keyof typeof this.declarationMatchTable>antlrRuleCtx.ruleIndex;

		// Forcing compatibility using 'any', since it's not already inferred
		return new this.declarationMatchTable[ruleIndex](<any>antlrRuleCtx, parent);
	}
}

/**
 * A union of all construable Declaration AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTDeclarationClass =
	typeof DeclarationASTNodeFactory.prototype.declarationMatchTable[ParserDeclarationKind];

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
