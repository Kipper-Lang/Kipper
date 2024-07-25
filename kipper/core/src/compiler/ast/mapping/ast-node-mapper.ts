/**
 * Mapper class which maps kind ids or rule names to their corresponding AST classes.
 *
 * This is used to simplify the process of determining the relationships between parser, AST and code generators.
 * @since 0.11.0
 */
import {
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
	LambdaPrimaryExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	ObjectPrimaryExpressionContext,
	ObjectPropertyContext,
	OperatorModifiedUnaryExpressionContext,
	ParameterDeclarationContext,
	ParseRuleKindMapping,
	RelationalExpressionContext,
	ReturnStatementContext,
	SliceNotationMemberAccessExpressionContext,
	StringPrimaryExpressionContext,
	SwitchStatementContext,
	TangledPrimaryExpressionContext, TypeofExpressionContext,
	TypeofTypeSpecifierExpressionContext,
	VariableDeclarationContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
	WhileLoopIterationStatementContext,
} from "../../lexer-parser";
import type {
	ASTDeclarationKind,
	ASTDeclarationRuleName,
	ASTExpressionKind,
	ASTExpressionRuleName,
	ASTStatementKind,
	ASTStatementRuleName,
} from "../common";
import type { Declaration, Expression, Statement } from "../nodes";
import {
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
} from "../nodes";

/**
 * Mapper class which maps kind ids or rule names to their corresponding AST classes.
 *
 * This is used to simplify the process of determining the relationships between parser, AST and code generators.
 * @since 0.11.0
 */
export class ASTNodeMapper {
	/**
	 * A mapping matching all {@link ASTDeclarationKind declaration kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public static readonly declarationKindToClassMap = {
		[ParseRuleKindMapping.RULE_functionDeclaration]: FunctionDeclaration,
		[ParseRuleKindMapping.RULE_variableDeclaration]: VariableDeclaration,
		[ParseRuleKindMapping.RULE_parameterDeclaration]: ParameterDeclaration,
		[ParseRuleKindMapping.RULE_interfaceDeclaration]: InterfaceDeclaration,
		[ParseRuleKindMapping.RULE_interfacePropertyDeclaration]: InterfacePropertyDeclaration,
		[ParseRuleKindMapping.RULE_interfaceMethodDeclaration]: InterfaceMethodDeclaration,
		[ParseRuleKindMapping.RULE_classDeclaration]: ClassDeclaration,
		[ParseRuleKindMapping.RULE_classPropertyDeclaration]: ClassPropertyDeclaration,
		[ParseRuleKindMapping.RULE_classMethodDeclaration]: ClassMethodDeclaration,
		[ParseRuleKindMapping.RULE_classConstructorDeclaration]: ClassConstructorDeclaration,
	} satisfies Record<ASTDeclarationKind, typeof Declaration<any, any>>;

	/**
	 * A mapping matching all {@link ASTExpressionKind expression kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public static readonly expressionKindToClassMap = {
		[ParseRuleKindMapping.RULE_numberPrimaryExpression]: NumberPrimaryExpression,
		[ParseRuleKindMapping.RULE_arrayPrimaryExpression]: ArrayPrimaryExpression,
		[ParseRuleKindMapping.RULE_objectPrimaryExpression]: ObjectPrimaryExpression,
		[ParseRuleKindMapping.RULE_objectProperty]: ObjectProperty,
		[ParseRuleKindMapping.RULE_identifierPrimaryExpression]: IdentifierPrimaryExpression,
		[ParseRuleKindMapping.RULE_voidOrNullOrUndefinedPrimaryExpression]: VoidOrNullOrUndefinedPrimaryExpression,
		[ParseRuleKindMapping.RULE_boolPrimaryExpression]: BoolPrimaryExpression,
		[ParseRuleKindMapping.RULE_stringPrimaryExpression]: StringPrimaryExpression,
		[ParseRuleKindMapping.RULE_fStringPrimaryExpression]: FStringPrimaryExpression,
		[ParseRuleKindMapping.RULE_tangledPrimaryExpression]: TangledPrimaryExpression,
		[ParseRuleKindMapping.RULE_incrementOrDecrementPostfixExpression]: IncrementOrDecrementPostfixExpression,
		[ParseRuleKindMapping.RULE_functionCallExpression]: FunctionCallExpression,
		[ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression]: IncrementOrDecrementUnaryExpression,
		[ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression]: OperatorModifiedUnaryExpression,
		[ParseRuleKindMapping.RULE_castOrConvertExpression]: CastOrConvertExpression,
		[ParseRuleKindMapping.RULE_multiplicativeExpression]: MultiplicativeExpression,
		[ParseRuleKindMapping.RULE_additiveExpression]: AdditiveExpression,
		[ParseRuleKindMapping.RULE_relationalExpression]: RelationalExpression,
		[ParseRuleKindMapping.RULE_equalityExpression]: EqualityExpression,
		[ParseRuleKindMapping.RULE_logicalAndExpression]: LogicalAndExpression,
		[ParseRuleKindMapping.RULE_logicalOrExpression]: LogicalOrExpression,
		[ParseRuleKindMapping.RULE_conditionalExpression]: ConditionalExpression,
		[ParseRuleKindMapping.RULE_assignmentExpression]: AssignmentExpression,
		[ParseRuleKindMapping.RULE_identifierTypeSpecifierExpression]: IdentifierTypeSpecifierExpression,
		[ParseRuleKindMapping.RULE_genericTypeSpecifierExpression]: GenericTypeSpecifierExpression,
		[ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression]: TypeofTypeSpecifierExpression,
		[ParseRuleKindMapping.RULE_memberAccessExpression]: MemberAccessExpression,
		[ParseRuleKindMapping.RULE_bitwiseOrExpression]: BitwiseOrExpression,
		[ParseRuleKindMapping.RULE_bitwiseAndExpression]: BitwiseAndExpression,
		[ParseRuleKindMapping.RULE_bitwiseXorExpression]: BitwiseXorExpression,
		[ParseRuleKindMapping.RULE_bitwiseShiftExpression]: BitwiseShiftExpression,
		[ParseRuleKindMapping.RULE_lambdaPrimaryExpression]: LambdaPrimaryExpression,
	} satisfies Record<ASTExpressionKind, typeof Expression<any, any, any>>;

	/**
	 * A mapping matching all {@link ASTStatementKind statement kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.10.0
	 */
	public static readonly statementKindToClassMap = {
		[ParseRuleKindMapping.RULE_compoundStatement]: CompoundStatement,
		[ParseRuleKindMapping.RULE_ifStatement]: IfStatement,
		[ParseRuleKindMapping.RULE_switchStatement]: SwitchStatement,
		[ParseRuleKindMapping.RULE_expressionStatement]: ExpressionStatement,
		[ParseRuleKindMapping.RULE_doWhileLoopIterationStatement]: DoWhileLoopIterationStatement,
		[ParseRuleKindMapping.RULE_whileLoopIterationStatement]: WhileLoopIterationStatement,
		[ParseRuleKindMapping.RULE_forLoopIterationStatement]: ForLoopIterationStatement,
		[ParseRuleKindMapping.RULE_returnStatement]: ReturnStatement,
		[ParseRuleKindMapping.RULE_jumpStatement]: JumpStatement,
	} satisfies Record<ASTStatementKind, typeof Statement<any, any>>;

	/**
	 * A mapping matching all {@link ASTDeclarationKind declaration kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.11.0
	 */
	public static readonly declarationKindToRuleContextMap = {
		[ParseRuleKindMapping.RULE_functionDeclaration]: FunctionDeclarationContext,
		[ParseRuleKindMapping.RULE_variableDeclaration]: VariableDeclarationContext,
		[ParseRuleKindMapping.RULE_parameterDeclaration]: ParameterDeclarationContext,
		[ParseRuleKindMapping.RULE_interfaceDeclaration]: InterfaceDeclarationContext,
		[ParseRuleKindMapping.RULE_interfacePropertyDeclaration]: InterfacePropertyDeclarationContext,
		[ParseRuleKindMapping.RULE_interfaceMethodDeclaration]: InterfaceMethodDeclarationContext,
		[ParseRuleKindMapping.RULE_classDeclaration]: ClassDeclarationContext,
		[ParseRuleKindMapping.RULE_classPropertyDeclaration]: ClassPropertyDeclarationContext,
		[ParseRuleKindMapping.RULE_classMethodDeclaration]: ClassMethodDeclarationContext,
		[ParseRuleKindMapping.RULE_classConstructorDeclaration]: ClassConstructorDeclarationContext,
	} satisfies Record<ASTDeclarationKind, any>;

	/**
	 * A mapping matching all {@link ASTExpressionKind expression kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.11.0
	 */
	public static readonly expressionKindToRuleContextMap = {
		[ParseRuleKindMapping.RULE_numberPrimaryExpression]: NumberPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_arrayPrimaryExpression]: ArrayPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_objectProperty]: ObjectPropertyContext,
		[ParseRuleKindMapping.RULE_objectPrimaryExpression]: ObjectPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_identifierPrimaryExpression]: IdentifierPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_voidOrNullOrUndefinedPrimaryExpression]: VoidOrNullOrUndefinedPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_boolPrimaryExpression]: BoolPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_stringPrimaryExpression]: StringPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_fStringPrimaryExpression]: FStringPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_tangledPrimaryExpression]: TangledPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_incrementOrDecrementPostfixExpression]: IncrementOrDecrementPostfixExpressionContext,
		[ParseRuleKindMapping.RULE_functionCallExpression]: FunctionCallExpressionContext,
		[ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression]: IncrementOrDecrementUnaryExpressionContext,
		[ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression]: OperatorModifiedUnaryExpressionContext,
		[ParseRuleKindMapping.RULE_castOrConvertExpression]: CastOrConvertExpressionContext,
		[ParseRuleKindMapping.RULE_multiplicativeExpression]: MultiplicativeExpressionContext,
		[ParseRuleKindMapping.RULE_additiveExpression]: AdditiveExpressionContext,
		[ParseRuleKindMapping.RULE_relationalExpression]: RelationalExpressionContext,
		[ParseRuleKindMapping.RULE_equalityExpression]: EqualityExpressionContext,
		[ParseRuleKindMapping.RULE_logicalAndExpression]: LogicalAndExpressionContext,
		[ParseRuleKindMapping.RULE_logicalOrExpression]: LogicalOrExpressionContext,
		[ParseRuleKindMapping.RULE_conditionalExpression]: ConditionalExpressionContext,
		[ParseRuleKindMapping.RULE_assignmentExpression]: AssignmentExpressionContext,
		[ParseRuleKindMapping.RULE_identifierTypeSpecifierExpression]: IdentifierTypeSpecifierExpressionContext,
		[ParseRuleKindMapping.RULE_genericTypeSpecifierExpression]: GenericTypeSpecifierExpressionContext,
		[ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression]: TypeofTypeSpecifierExpressionContext,
		[ParseRuleKindMapping.RULE_bitwiseOrExpression]: BitwiseOrExpressionContext,
		[ParseRuleKindMapping.RULE_bitwiseAndExpression]: BitwiseAndExpressionContext,
		[ParseRuleKindMapping.RULE_bitwiseXorExpression]: BitwiseXorExpressionContext,
		[ParseRuleKindMapping.RULE_bitwiseShiftExpression]: BitwiseShiftExpressionContext,
		[ParseRuleKindMapping.RULE_lambdaPrimaryExpression]: LambdaPrimaryExpressionContext,
		[ParseRuleKindMapping.RULE_typeofExpression]: TypeofExpressionContext,
		[ParseRuleKindMapping.RULE_memberAccessExpression]: [
			// Due to the nature of the parser not handling the notations as one rule, it's an array
			DotNotationMemberAccessExpressionContext,
			BracketNotationMemberAccessExpressionContext,
			SliceNotationMemberAccessExpressionContext,
		],
	} satisfies Record<ASTExpressionKind, any | Array<any>>;

	/**
	 * A mapping matching all {@link ASTStatementKind statement kinds} to their respective constructable AST node
	 * classes.
	 * @since 0.11.0
	 */
	public static readonly statementKindToRuleContextMap = {
		[ParseRuleKindMapping.RULE_compoundStatement]: CompoundStatementContext,
		[ParseRuleKindMapping.RULE_ifStatement]: IfStatementContext,
		[ParseRuleKindMapping.RULE_switchStatement]: SwitchStatementContext,
		[ParseRuleKindMapping.RULE_expressionStatement]: ExpressionStatementContext,
		[ParseRuleKindMapping.RULE_doWhileLoopIterationStatement]: DoWhileLoopIterationStatementContext,
		[ParseRuleKindMapping.RULE_whileLoopIterationStatement]: WhileLoopIterationStatementContext,
		[ParseRuleKindMapping.RULE_forLoopIterationStatement]: ForLoopIterationStatementContext,
		[ParseRuleKindMapping.RULE_returnStatement]: ReturnStatementContext,
		[ParseRuleKindMapping.RULE_jumpStatement]: JumpStatementContext,
	} satisfies Record<ASTStatementKind, any>;

	/**
	 * A mapping matching all {@link ASTDeclarationRuleName declaration rule names} to their respective constructable
	 * AST node classes.
	 * @since 0.11.0
	 */
	public static readonly declarationRuleNameToClassMap = {
		RULE_functionDeclaration: FunctionDeclaration,
		RULE_variableDeclaration: VariableDeclaration,
		RULE_parameterDeclaration: ParameterDeclaration,
		RULE_interfaceDeclaration: InterfaceDeclaration,
		RULE_interfacePropertyDeclaration: InterfacePropertyDeclaration,
		RULE_interfaceMethodDeclaration: InterfaceMethodDeclaration,
		RULE_classDeclaration: ClassDeclaration,
		RULE_classPropertyDeclaration: ClassPropertyDeclaration,
		RULE_classMethodDeclaration: ClassMethodDeclaration,
		RULE_classConstructorDeclaration: ClassConstructorDeclaration,
	} satisfies Record<ASTDeclarationRuleName, typeof Declaration<any, any>>;

	/**
	 * A mapping matching all {@link ASTExpressionRuleName expression rule names} to their respective constructable AST
	 * node classes.
	 * @since 0.11.0
	 */
	public static readonly expressionRuleNameToClassMap = {
		RULE_numberPrimaryExpression: NumberPrimaryExpression,
		RULE_arrayPrimaryExpression: ArrayPrimaryExpression,
		RULE_objectProperty: ObjectProperty,
		RULE_objectPrimaryExpression: ObjectPrimaryExpression,
		RULE_identifierPrimaryExpression: IdentifierPrimaryExpression,
		RULE_voidOrNullOrUndefinedPrimaryExpression: VoidOrNullOrUndefinedPrimaryExpression,
		RULE_boolPrimaryExpression: BoolPrimaryExpression,
		RULE_stringPrimaryExpression: StringPrimaryExpression,
		RULE_fStringPrimaryExpression: FStringPrimaryExpression,
		RULE_tangledPrimaryExpression: TangledPrimaryExpression,
		RULE_incrementOrDecrementPostfixExpression: IncrementOrDecrementPostfixExpression,
		RULE_functionCallExpression: FunctionCallExpression,
		RULE_incrementOrDecrementUnaryExpression: IncrementOrDecrementUnaryExpression,
		RULE_operatorModifiedUnaryExpression: OperatorModifiedUnaryExpression,
		RULE_castOrConvertExpression: CastOrConvertExpression,
		RULE_multiplicativeExpression: MultiplicativeExpression,
		RULE_additiveExpression: AdditiveExpression,
		RULE_relationalExpression: RelationalExpression,
		RULE_equalityExpression: EqualityExpression,
		RULE_logicalAndExpression: LogicalAndExpression,
		RULE_logicalOrExpression: LogicalOrExpression,
		RULE_conditionalExpression: ConditionalExpression,
		RULE_assignmentExpression: AssignmentExpression,
		RULE_identifierTypeSpecifierExpression: IdentifierTypeSpecifierExpression,
		RULE_genericTypeSpecifierExpression: GenericTypeSpecifierExpression,
		RULE_typeofTypeSpecifierExpression: TypeofTypeSpecifierExpression,
		RULE_memberAccessExpression: MemberAccessExpression,
		RULE_bitwiseOrExpression: BitwiseOrExpression,
		RULE_bitwiseAndExpression: BitwiseAndExpression,
		RULE_bitwiseXorExpression: BitwiseXorExpression,
		RULE_bitwiseShiftExpression: BitwiseShiftExpression,
		RULE_lambdaPrimaryExpression: LambdaPrimaryExpression,
	} satisfies Record<ASTExpressionRuleName, typeof Expression<any, any, any>>;

	/**
	 * A mapping matching all {@link ASTStatementRuleName statement rule names} to their respective constructable AST
	 * node classes.
	 * @since 0.11.0
	 */
	public static readonly statementRuleNameToClassMap = {
		RULE_compoundStatement: CompoundStatement,
		RULE_ifStatement: IfStatement,
		RULE_switchStatement: SwitchStatement,
		RULE_expressionStatement: ExpressionStatement,
		RULE_doWhileLoopIterationStatement: DoWhileLoopIterationStatement,
		RULE_whileLoopIterationStatement: WhileLoopIterationStatement,
		RULE_forLoopIterationStatement: ForLoopIterationStatement,
		RULE_returnStatement: ReturnStatement,
		RULE_jumpStatement: JumpStatement,
	} satisfies Record<ASTStatementRuleName, typeof Statement<any, any>>;

	/**
	 * A mapping function matching all {@link ASTDeclarationKind declaration kinds} to their respective constructable
	 * {@link Declaration} AST node classes.
	 * @param kind The declaration kind to map to a class.
	 * @returns The class matching the given declaration kind.
	 * @since 0.11.0
	 */
	public static mapDeclarationKindToClass<T extends ASTDeclarationKind>(
		kind: T,
	): (typeof ASTNodeMapper.declarationKindToClassMap)[T] {
		return this.declarationKindToClassMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTExpressionKind expression kinds} to their respective constructable
	 * {@link Expression} AST node classes.
	 * @param kind The expression kind to map to a class.
	 * @returns The class matching the given expression kind.
	 * @since 0.11.0
	 */
	public static mapExpressionKindToClass<T extends ASTExpressionKind>(
		kind: T,
	): (typeof ASTNodeMapper.expressionKindToClassMap)[T] {
		return this.expressionKindToClassMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTStatementKind statement kinds} to their respective constructable
	 * {@link Statement} AST node classes.
	 * @param kind The statement kind to map to a class.
	 * @returns The class matching the given statement kind.
	 * @since 0.11.0
	 * @since 0.11.0
	 */
	public static mapStatementKindToClass<T extends ASTStatementKind>(
		kind: T,
	): (typeof ASTNodeMapper.statementKindToClassMap)[T] {
		return this.statementKindToClassMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTExpressionRuleName expression rule names} to their respective
	 * constructable {@link Declaration} AST node classes.
	 * @param kind The declaration rule name to map to a class.
	 * @returns The class matching the given declaration rule name.
	 * @since 0.11.0
	 */
	public static mapDeclarationKindToRuleContext<T extends ASTDeclarationKind>(
		kind: T,
	): (typeof ASTNodeMapper.declarationKindToRuleContextMap)[T] {
		return this.declarationKindToRuleContextMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTExpressionRuleName expression rule names} to their respective
	 * constructable {@link Expression} AST node classes.
	 * @param kind The expression rule name to map to a class.
	 * @returns The class matching the given expression rule name.
	 * @since 0.11.0
	 */
	public static mapExpressionKindToRuleContext<T extends ASTExpressionKind>(
		kind: T,
	): (typeof ASTNodeMapper.expressionKindToRuleContextMap)[T] {
		return this.expressionKindToRuleContextMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTExpressionRuleName expression rule names} to their respective
	 * constructable {@link Statement} AST node classes.
	 * @param kind The statement rule name to map to a class.
	 * @returns The class matching the given statement rule name.
	 * @since 0.11.0
	 */
	public static mapStatementKindToRuleContext<T extends ASTStatementKind>(
		kind: T,
	): (typeof ASTNodeMapper.statementKindToRuleContextMap)[T] {
		return this.statementKindToRuleContextMap[kind];
	}

	/**
	 * A mapping function matching all {@link ASTDeclarationRuleName declaration rule names} to their respective
	 * constructable {@link Declaration} AST node classes.
	 * @param name The declaration rule name to map to a class.
	 * @returns The class matching the given declaration rule name.
	 * @since 0.11.0
	 */
	public static mapDeclarationRuleNameToClass<T extends ASTDeclarationRuleName>(
		name: T,
	): (typeof ASTNodeMapper.declarationRuleNameToClassMap)[T] {
		return this.declarationRuleNameToClassMap[name];
	}

	/**
	 * A mapping function matching all {@link ASTExpressionRuleName expression rule names} to their respective
	 * constructable {@link Expression} AST node classes.
	 * @param name The expression rule name to map to a class.
	 * @returns The class matching the given expression rule name.
	 * @since 0.11.0
	 */
	public static mapExpressionRuleNameToClass<T extends ASTExpressionRuleName>(
		name: T,
	): (typeof ASTNodeMapper.expressionRuleNameToClassMap)[T] {
		return this.expressionRuleNameToClassMap[name];
	}

	/**
	 * A mapping function matching all {@link ASTStatementRuleName statement rule names} to their respective
	 * constructable {@link Statement} AST node classes.
	 * @param name The statement rule name to map to a class.
	 * @returns The class matching the given statement rule name.
	 * @since 0.11.0
	 */
	public static mapStatementRuleNameToClass<T extends ASTStatementRuleName>(
		name: T,
	): (typeof ASTNodeMapper.statementRuleNameToClassMap)[T] {
		return this.statementRuleNameToClassMap[name];
	}
}
