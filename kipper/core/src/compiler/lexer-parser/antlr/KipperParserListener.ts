// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
// kind values.

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import {
	ActualAdditiveExpressionContext,
	ActualAssignmentExpressionContext,
	ActualBitwiseAndExpressionContext,
	ActualBitwiseOrExpressionContext,
	ActualBitwiseShiftExpressionContext,
	ActualBitwiseXorExpressionContext,
	ActualCastExpressionContext,
	ActualConditionalExpressionContext,
	ActualConvertExpressionContext,
	ActualEqualityExpressionContext,
	ActualForceCastExpressionContext,
	ActualInstanceOfExpressionContext,
	ActualLogicalAndExpressionContext,
	ActualLogicalOrExpressionContext,
	ActualMatchesExpressionContext,
	ActualMultiplicativeExpressionContext,
	ActualRelationalExpressionContext,
	ActualTryCastExpressionContext,
	AdditiveExpressionContext,
	ArgumentExpressionListContext,
	ArrayPrimaryExpressionContext,
	AssignmentExpressionContext,
	AssignmentOperatorContext,
	BitwiseAndExpressionContext,
	BitwiseOrExpressionContext,
	BitwiseShiftExpressionContext,
	BitwiseShiftOperatorsContext,
	BitwiseXorExpressionContext,
	BlockItemContext,
	BlockItemListContext,
	BoolPrimaryExpressionContext,
	BracketNotationContext,
	BracketNotationMemberAccessExpressionContext,
	CastExpressionContext,
	CastOrConvertExpressionContext,
	ClassConstructorDeclarationContext,
	ClassDeclarationContext,
	ClassMemberDeclarationContext,
	ClassMethodDeclarationContext,
	ClassPropertyDeclarationContext,
	CompilationUnitContext,
	CompoundStatementContext,
	ComputedPrimaryExpressionContext,
	ConditionalExpressionContext,
	ConvertExpressionContext,
	DeclarationContext,
	DeclaratorContext,
	DirectDeclaratorContext,
	DotNotationContext,
	DotNotationMemberAccessExpressionContext,
	DoWhileLoopIterationStatementContext,
	EqualityExpressionContext,
	ExplicitCallFunctionCallExpressionContext,
	ExpressionContext,
	ExpressionStatementContext,
	ExternalBlockItemContext,
	ExternalItemContext,
	ForceCastExpressionContext,
	ForLoopIterationStatementContext,
	FStringDoubleQuoteAtomContext,
	FStringPrimaryExpressionContext,
	FStringSingleQuoteAtomContext,
	FunctionCallExpressionContext,
	FunctionDeclarationContext,
	GenericTypeSpecifierExpressionContext,
	IdentifierContext,
	IdentifierOrStringPrimaryExpressionContext,
	IdentifierPrimaryExpressionContext,
	IdentifierTypeSpecifierExpressionContext,
	IfStatementContext,
	IncrementOrDecrementOperatorContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	InitDeclaratorContext,
	InitializerContext,
	InstanceOfExpressionContext,
	InterfaceDeclarationContext,
	InterfaceMemberDeclarationContext,
	InterfaceMethodDeclarationContext,
	InterfacePropertyDeclarationContext,
	IterationStatementContext,
	JumpStatementContext,
	LambdaPrimaryExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MatchesExpressionContext,
	MultiplicativeExpressionContext,
	NewInstantiationExpressionContext,
	NullableTypeSpecifierExpressionContext,
	NumberPrimaryExpressionContext,
	ObjectPrimaryExpressionContext,
	ObjectPropertyContext,
	OperatorModifiedUnaryExpressionContext,
	ParameterDeclarationContext,
	ParameterListContext,
	PassOnAdditiveExpressionContext,
	PassOnAssignmentExpressionContext,
	PassOnBitwiseAndExpressionContext,
	PassOnBitwiseOrExpressionContext,
	PassOnBitwiseShiftExpressionContext,
	PassOnBitwiseXorExpressionContext,
	PassOnCastOrConvertExpressionContext,
	PassOncomputedPrimaryExpressionContext,
	PassOnConditionalExpressionContext,
	PassOnEqualityExpressionContext,
	PassOnInstanceOfExpressionContext,
	PassOnLogicalAndExpressionContext,
	PassOnLogicalOrExpressionContext,
	PassOnMatchesExpressionContext,
	PassOnMultiplicativeExpressionContext,
	PassOnRelationalExpressionContext,
	PostfixExpressionContext,
	PrimaryExpressionContext,
	RelationalExpressionContext,
	ReturnStatementContext,
	SelectionStatementContext,
	SliceNotationContext,
	SliceNotationMemberAccessExpressionContext,
	StatementContext,
	StorageTypeSpecifierContext,
	StringPrimaryExpressionContext,
	SwitchLabeledStatementContext,
	SwitchStatementContext,
	TangledPrimaryExpressionContext,
	TranslationUnitContext,
	TryCastExpressionContext,
	TypeofExpressionContext,
	TypeofTypeSpecifierExpressionContext,
	TypeSpecifierExpressionContext,
	TypeSpecifierIdentifierContext,
	UnaryExpressionContext,
	UnaryOperatorContext,
	VariableDeclarationContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
	WhileLoopIterationStatementContext,
} from "./KipperParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `KipperParser`.
 */
export interface KipperParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `passOnMatchesExpression`
	 * labeled alternative in `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnMatchesExpression?: (ctx: PassOnMatchesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnMatchesExpression`
	 * labeled alternative in `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnMatchesExpression?: (ctx: PassOnMatchesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualMatchesExpression`
	 * labeled alternative in `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	enterActualMatchesExpression?: (ctx: ActualMatchesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualMatchesExpression`
	 * labeled alternative in `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	exitActualMatchesExpression?: (ctx: ActualMatchesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnBitwiseShiftExpression?: (ctx: PassOnBitwiseShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnBitwiseShiftExpression?: (ctx: PassOnBitwiseShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	enterActualBitwiseShiftExpression?: (ctx: ActualBitwiseShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	exitActualBitwiseShiftExpression?: (ctx: ActualBitwiseShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnBitwiseAndExpression?: (ctx: PassOnBitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnBitwiseAndExpression?: (ctx: PassOnBitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	enterActualBitwiseAndExpression?: (ctx: ActualBitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	exitActualBitwiseAndExpression?: (ctx: ActualBitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnLogicalAndExpression?: (ctx: PassOnLogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnLogicalAndExpression?: (ctx: PassOnLogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterActualLogicalAndExpression?: (ctx: ActualLogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitActualLogicalAndExpression?: (ctx: ActualLogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnBitwiseXorExpression?: (ctx: PassOnBitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnBitwiseXorExpression?: (ctx: PassOnBitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterActualBitwiseXorExpression?: (ctx: ActualBitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitActualBitwiseXorExpression?: (ctx: ActualBitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalBlockItem?: (ctx: ExternalBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalBlockItem?: (ctx: ExternalBlockItemContext) => void;

	/**
	 * Enter a parse tree produced by the `passOncomputedPrimaryExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOncomputedPrimaryExpression?: (ctx: PassOncomputedPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOncomputedPrimaryExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOncomputedPrimaryExpression?: (ctx: PassOncomputedPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `dotNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterDotNotationMemberAccessExpression?: (ctx: DotNotationMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `dotNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitDotNotationMemberAccessExpression?: (ctx: DotNotationMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bracketNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBracketNotationMemberAccessExpression?: (ctx: BracketNotationMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBracketNotationMemberAccessExpression?: (ctx: BracketNotationMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `sliceNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterSliceNotationMemberAccessExpression?: (ctx: SliceNotationMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `sliceNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitSliceNotationMemberAccessExpression?: (ctx: SliceNotationMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `explicitCallFunctionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterExplicitCallFunctionCallExpression?: (ctx: ExplicitCallFunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `explicitCallFunctionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitExplicitCallFunctionCallExpression?: (ctx: ExplicitCallFunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `newInstantiationExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNewInstantiationExpression?: (ctx: NewInstantiationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `newInstantiationExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNewInstantiationExpression?: (ctx: NewInstantiationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnAssignmentExpression?: (ctx: PassOnAssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnAssignmentExpression?: (ctx: PassOnAssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterActualAssignmentExpression?: (ctx: ActualAssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitActualAssignmentExpression?: (ctx: ActualAssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnCastOrConvertExpression?: (ctx: PassOnCastOrConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnCastOrConvertExpression?: (ctx: PassOnCastOrConvertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterActualConvertExpression?: (ctx: ActualConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitActualConvertExpression?: (ctx: ActualConvertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterActualCastExpression?: (ctx: ActualCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitActualCastExpression?: (ctx: ActualCastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualForceCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterActualForceCastExpression?: (ctx: ActualForceCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualForceCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitActualForceCastExpression?: (ctx: ActualForceCastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualTryCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterActualTryCastExpression?: (ctx: ActualTryCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualTryCastExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitActualTryCastExpression?: (ctx: ActualTryCastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnBitwiseOrExpression?: (ctx: PassOnBitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnBitwiseOrExpression?: (ctx: PassOnBitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterActualBitwiseOrExpression?: (ctx: ActualBitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitActualBitwiseOrExpression?: (ctx: ActualBitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnEqualityExpression?: (ctx: PassOnEqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnEqualityExpression?: (ctx: PassOnEqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterActualEqualityExpression?: (ctx: ActualEqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitActualEqualityExpression?: (ctx: ActualEqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnAdditiveExpression?: (ctx: PassOnAdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnAdditiveExpression?: (ctx: PassOnAdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterActualAdditiveExpression?: (ctx: ActualAdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitActualAdditiveExpression?: (ctx: ActualAdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnRelationalExpression?: (ctx: PassOnRelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnRelationalExpression?: (ctx: PassOnRelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterActualRelationalExpression?: (ctx: ActualRelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitActualRelationalExpression?: (ctx: ActualRelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnInstanceOfExpression`
	 * labeled alternative in `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnInstanceOfExpression?: (ctx: PassOnInstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnInstanceOfExpression`
	 * labeled alternative in `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnInstanceOfExpression?: (ctx: PassOnInstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualInstanceOfExpression`
	 * labeled alternative in `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	enterActualInstanceOfExpression?: (ctx: ActualInstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualInstanceOfExpression`
	 * labeled alternative in `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	exitActualInstanceOfExpression?: (ctx: ActualInstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnConditionalExpression?: (ctx: PassOnConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnConditionalExpression?: (ctx: PassOnConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterActualConditionalExpression?: (ctx: ActualConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitActualConditionalExpression?: (ctx: ActualConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnMultiplicativeExpression?: (ctx: PassOnMultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnMultiplicativeExpression?: (ctx: PassOnMultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterActualMultiplicativeExpression?: (ctx: ActualMultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitActualMultiplicativeExpression?: (ctx: ActualMultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `passOnLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPassOnLogicalOrExpression?: (ctx: PassOnLogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `passOnLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPassOnLogicalOrExpression?: (ctx: PassOnLogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `actualLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterActualLogicalOrExpression?: (ctx: ActualLogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitActualLogicalOrExpression?: (ctx: ActualLogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	enterTranslationUnit?: (ctx: TranslationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	exitTranslationUnit?: (ctx: TranslationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalItem?: (ctx: ExternalItemContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalItem?: (ctx: ExternalItemContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	enterBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	exitBlockItemList?: (ctx: BlockItemListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitDeclarator?: (ctx: InitDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitDeclarator?: (ctx: InitDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	enterDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	exitDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.interfacePropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfacePropertyDeclaration?: (ctx: InterfacePropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.interfacePropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfacePropertyDeclaration?: (ctx: InterfacePropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.classPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyDeclaration?: (ctx: ClassPropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.classPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyDeclaration?: (ctx: ClassPropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.classMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassMethodDeclaration?: (ctx: ClassMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.classMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassMethodDeclaration?: (ctx: ClassMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.classConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassConstructorDeclaration?: (ctx: ClassConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.classConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassConstructorDeclaration?: (ctx: ClassConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectionStatement?: (ctx: SelectionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectionStatement?: (ctx: SelectionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.switchLabeledStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabeledStatement?: (ctx: SwitchLabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.switchLabeledStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabeledStatement?: (ctx: SwitchLabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.forLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForLoopIterationStatement?: (ctx: ForLoopIterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.forLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForLoopIterationStatement?: (ctx: ForLoopIterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.whileLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileLoopIterationStatement?: (ctx: WhileLoopIterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.whileLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileLoopIterationStatement?: (ctx: WhileLoopIterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.doWhileLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileLoopIterationStatement?: (ctx: DoWhileLoopIterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.doWhileLoopIterationStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileLoopIterationStatement?: (ctx: DoWhileLoopIterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	enterJumpStatement?: (ctx: JumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	exitJumpStatement?: (ctx: JumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.lambdaPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaPrimaryExpression?: (ctx: LambdaPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.lambdaPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaPrimaryExpression?: (ctx: LambdaPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.tangledPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterTangledPrimaryExpression?: (ctx: TangledPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.tangledPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitTangledPrimaryExpression?: (ctx: TangledPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.boolPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBoolPrimaryExpression?: (ctx: BoolPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.boolPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBoolPrimaryExpression?: (ctx: BoolPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.identifierPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPrimaryExpression?: (ctx: IdentifierPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.identifierPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPrimaryExpression?: (ctx: IdentifierPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.identifierOrStringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrStringPrimaryExpression?: (ctx: IdentifierOrStringPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.identifierOrStringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrStringPrimaryExpression?: (ctx: IdentifierOrStringPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.stringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringPrimaryExpression?: (ctx: StringPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.stringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringPrimaryExpression?: (ctx: StringPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.fStringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFStringPrimaryExpression?: (ctx: FStringPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.fStringPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFStringPrimaryExpression?: (ctx: FStringPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.fStringSingleQuoteAtom`.
	 * @param ctx the parse tree
	 */
	enterFStringSingleQuoteAtom?: (ctx: FStringSingleQuoteAtomContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.fStringSingleQuoteAtom`.
	 * @param ctx the parse tree
	 */
	exitFStringSingleQuoteAtom?: (ctx: FStringSingleQuoteAtomContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.fStringDoubleQuoteAtom`.
	 * @param ctx the parse tree
	 */
	enterFStringDoubleQuoteAtom?: (ctx: FStringDoubleQuoteAtomContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.fStringDoubleQuoteAtom`.
	 * @param ctx the parse tree
	 */
	exitFStringDoubleQuoteAtom?: (ctx: FStringDoubleQuoteAtomContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.numberPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumberPrimaryExpression?: (ctx: NumberPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.numberPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumberPrimaryExpression?: (ctx: NumberPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.arrayPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayPrimaryExpression?: (ctx: ArrayPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.arrayPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayPrimaryExpression?: (ctx: ArrayPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.objectPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectPrimaryExpression?: (ctx: ObjectPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.objectPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectPrimaryExpression?: (ctx: ObjectPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.objectProperty`.
	 * @param ctx the parse tree
	 */
	enterObjectProperty?: (ctx: ObjectPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.objectProperty`.
	 * @param ctx the parse tree
	 */
	exitObjectProperty?: (ctx: ObjectPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.voidOrNullOrUndefinedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidOrNullOrUndefinedPrimaryExpression?: (ctx: VoidOrNullOrUndefinedPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.voidOrNullOrUndefinedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidOrNullOrUndefinedPrimaryExpression?: (ctx: VoidOrNullOrUndefinedPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterComputedPrimaryExpression?: (ctx: ComputedPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitComputedPrimaryExpression?: (ctx: ComputedPrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.dotNotation`.
	 * @param ctx the parse tree
	 */
	enterDotNotation?: (ctx: DotNotationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.dotNotation`.
	 * @param ctx the parse tree
	 */
	exitDotNotation?: (ctx: DotNotationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	enterBracketNotation?: (ctx: BracketNotationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	exitBracketNotation?: (ctx: BracketNotationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.sliceNotation`.
	 * @param ctx the parse tree
	 */
	enterSliceNotation?: (ctx: SliceNotationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.sliceNotation`.
	 * @param ctx the parse tree
	 */
	exitSliceNotation?: (ctx: SliceNotationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.incrementOrDecrementPostfixExpression`.
	 * @param ctx the parse tree
	 */
	enterIncrementOrDecrementPostfixExpression?: (ctx: IncrementOrDecrementPostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.incrementOrDecrementPostfixExpression`.
	 * @param ctx the parse tree
	 */
	exitIncrementOrDecrementPostfixExpression?: (ctx: IncrementOrDecrementPostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeofExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeofExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.incrementOrDecrementUnaryExpression`.
	 * @param ctx the parse tree
	 */
	enterIncrementOrDecrementUnaryExpression?: (ctx: IncrementOrDecrementUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.incrementOrDecrementUnaryExpression`.
	 * @param ctx the parse tree
	 */
	exitIncrementOrDecrementUnaryExpression?: (ctx: IncrementOrDecrementUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.operatorModifiedUnaryExpression`.
	 * @param ctx the parse tree
	 */
	enterOperatorModifiedUnaryExpression?: (ctx: OperatorModifiedUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.operatorModifiedUnaryExpression`.
	 * @param ctx the parse tree
	 */
	exitOperatorModifiedUnaryExpression?: (ctx: OperatorModifiedUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.incrementOrDecrementOperator`.
	 * @param ctx the parse tree
	 */
	enterIncrementOrDecrementOperator?: (ctx: IncrementOrDecrementOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.incrementOrDecrementOperator`.
	 * @param ctx the parse tree
	 */
	exitIncrementOrDecrementOperator?: (ctx: IncrementOrDecrementOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.convertExpression`.
	 * @param ctx the parse tree
	 */
	enterConvertExpression?: (ctx: ConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.convertExpression`.
	 * @param ctx the parse tree
	 */
	exitConvertExpression?: (ctx: ConvertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.forceCastExpression`.
	 * @param ctx the parse tree
	 */
	enterForceCastExpression?: (ctx: ForceCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.forceCastExpression`.
	 * @param ctx the parse tree
	 */
	exitForceCastExpression?: (ctx: ForceCastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.tryCastExpression`.
	 * @param ctx the parse tree
	 */
	enterTryCastExpression?: (ctx: TryCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.tryCastExpression`.
	 * @param ctx the parse tree
	 */
	exitTryCastExpression?: (ctx: TryCastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseShiftExpression?: (ctx: BitwiseShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseShiftExpression?: (ctx: BitwiseShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bitwiseShiftOperators`.
	 * @param ctx the parse tree
	 */
	enterBitwiseShiftOperators?: (ctx: BitwiseShiftOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bitwiseShiftOperators`.
	 * @param ctx the parse tree
	 */
	exitBitwiseShiftOperators?: (ctx: BitwiseShiftOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.instanceOfExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	enterMatchesExpression?: (ctx: MatchesExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.matchesExpression`.
	 * @param ctx the parse tree
	 */
	exitMatchesExpression?: (ctx: MatchesExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifierExpression?: (ctx: TypeSpecifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifierExpression?: (ctx: TypeSpecifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.identifierTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierTypeSpecifierExpression?: (ctx: IdentifierTypeSpecifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.identifierTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierTypeSpecifierExpression?: (ctx: IdentifierTypeSpecifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.genericTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	enterGenericTypeSpecifierExpression?: (ctx: GenericTypeSpecifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.genericTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	exitGenericTypeSpecifierExpression?: (ctx: GenericTypeSpecifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeofTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofTypeSpecifierExpression?: (ctx: TypeofTypeSpecifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeofTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofTypeSpecifierExpression?: (ctx: TypeofTypeSpecifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.nullableTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	enterNullableTypeSpecifierExpression?: (ctx: NullableTypeSpecifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.nullableTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 */
	exitNullableTypeSpecifierExpression?: (ctx: NullableTypeSpecifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeSpecifierIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifierIdentifier?: (ctx: TypeSpecifierIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifierIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifierIdentifier?: (ctx: TypeSpecifierIdentifierContext) => void;
}
