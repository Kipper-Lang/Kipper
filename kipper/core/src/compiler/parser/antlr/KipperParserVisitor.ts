// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
// kind values.
import { KipperParserRuleContext, ParseRuleKindMapping, ASTKind } from "..";
import KipperParserBase from "./base/KipperParserBase";

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PassOnBitwiseShiftExpressionContext } from "./KipperParser";
import { ActualBitwiseShiftExpressionContext } from "./KipperParser";
import { PassOnBitwiseAndExpressionContext } from "./KipperParser";
import { ActualBitwiseAndExpressionContext } from "./KipperParser";
import { PassOnLogicalAndExpressionContext } from "./KipperParser";
import { ActualLogicalAndExpressionContext } from "./KipperParser";
import { PassOnBitwiseXorExpressionContext } from "./KipperParser";
import { ActualBitwiseXorExpressionContext } from "./KipperParser";
import { ExternalBlockItemContext } from "./KipperParser";
import { PassOncomputedPrimaryExpressionContext } from "./KipperParser";
import { FunctionCallExpressionContext } from "./KipperParser";
import { ExplicitCallFunctionCallExpressionContext } from "./KipperParser";
import { DotNotationMemberAccessExpressionContext } from "./KipperParser";
import { BracketNotationMemberAccessExpressionContext } from "./KipperParser";
import { SliceNotationMemberAccessExpressionContext } from "./KipperParser";
import { PassOnAssignmentExpressionContext } from "./KipperParser";
import { ActualAssignmentExpressionContext } from "./KipperParser";
import { PassOnCastOrConvertExpressionContext } from "./KipperParser";
import { ActualCastOrConvertExpressionContext } from "./KipperParser";
import { PassOnBitwiseOrExpressionContext } from "./KipperParser";
import { ActualBitwiseOrExpressionContext } from "./KipperParser";
import { PassOnEqualityExpressionContext } from "./KipperParser";
import { ActualEqualityExpressionContext } from "./KipperParser";
import { PassOnAdditiveExpressionContext } from "./KipperParser";
import { ActualAdditiveExpressionContext } from "./KipperParser";
import { PassOnRelationalExpressionContext } from "./KipperParser";
import { ActualRelationalExpressionContext } from "./KipperParser";
import { PassOnConditionalExpressionContext } from "./KipperParser";
import { ActualConditionalExpressionContext } from "./KipperParser";
import { PassOnMultiplicativeExpressionContext } from "./KipperParser";
import { ActualMultiplicativeExpressionContext } from "./KipperParser";
import { PassOnLogicalOrExpressionContext } from "./KipperParser";
import { ActualLogicalOrExpressionContext } from "./KipperParser";
import { CompilationUnitContext } from "./KipperParser";
import { TranslationUnitContext } from "./KipperParser";
import { ExternalItemContext } from "./KipperParser";
import { BlockItemListContext } from "./KipperParser";
import { BlockItemContext } from "./KipperParser";
import { DeclarationContext } from "./KipperParser";
import { VariableDeclarationContext } from "./KipperParser";
import { StorageTypeSpecifierContext } from "./KipperParser";
import { InitDeclaratorContext } from "./KipperParser";
import { InitializerContext } from "./KipperParser";
import { DeclaratorContext } from "./KipperParser";
import { DirectDeclaratorContext } from "./KipperParser";
import { FunctionDeclarationContext } from "./KipperParser";
import { ParameterListContext } from "./KipperParser";
import { ParameterDeclarationContext } from "./KipperParser";
import { InterfaceDeclarationContext } from "./KipperParser";
import { InterfaceMemberDeclarationContext } from "./KipperParser";
import { InterfacePropertyDeclarationContext } from "./KipperParser";
import { InterfaceMethodDeclarationContext } from "./KipperParser";
import { ClassDeclarationContext } from "./KipperParser";
import { StatementContext } from "./KipperParser";
import { CompoundStatementContext } from "./KipperParser";
import { ExpressionStatementContext } from "./KipperParser";
import { SelectionStatementContext } from "./KipperParser";
import { IfStatementContext } from "./KipperParser";
import { SwitchStatementContext } from "./KipperParser";
import { SwitchLabeledStatementContext } from "./KipperParser";
import { IterationStatementContext } from "./KipperParser";
import { ForLoopIterationStatementContext } from "./KipperParser";
import { WhileLoopIterationStatementContext } from "./KipperParser";
import { DoWhileLoopIterationStatementContext } from "./KipperParser";
import { JumpStatementContext } from "./KipperParser";
import { ReturnStatementContext } from "./KipperParser";
import { PrimaryExpressionContext } from "./KipperParser";
import { TangledPrimaryExpressionContext } from "./KipperParser";
import { BoolPrimaryExpressionContext } from "./KipperParser";
import { IdentifierPrimaryExpressionContext } from "./KipperParser";
import { IdentifierContext } from "./KipperParser";
import { IdentifierOrStringPrimaryExpressionContext } from "./KipperParser";
import { StringPrimaryExpressionContext } from "./KipperParser";
import { FStringPrimaryExpressionContext } from "./KipperParser";
import { FStringSingleQuoteAtomContext } from "./KipperParser";
import { FStringDoubleQuoteAtomContext } from "./KipperParser";
import { NumberPrimaryExpressionContext } from "./KipperParser";
import { ArrayPrimaryExpressionContext } from "./KipperParser";
import { ObjectPrimaryExpressionContext } from "./KipperParser";
import { ObjectPropertyContext } from "./KipperParser";
import { VoidOrNullOrUndefinedPrimaryExpressionContext } from "./KipperParser";
import { ComputedPrimaryExpressionContext } from "./KipperParser";
import { ArgumentExpressionListContext } from "./KipperParser";
import { DotNotationContext } from "./KipperParser";
import { BracketNotationContext } from "./KipperParser";
import { SliceNotationContext } from "./KipperParser";
import { PostfixExpressionContext } from "./KipperParser";
import { IncrementOrDecrementPostfixExpressionContext } from "./KipperParser";
import { UnaryExpressionContext } from "./KipperParser";
import { IncrementOrDecrementUnaryExpressionContext } from "./KipperParser";
import { OperatorModifiedUnaryExpressionContext } from "./KipperParser";
import { IncrementOrDecrementOperatorContext } from "./KipperParser";
import { UnaryOperatorContext } from "./KipperParser";
import { CastOrConvertExpressionContext } from "./KipperParser";
import { MultiplicativeExpressionContext } from "./KipperParser";
import { AdditiveExpressionContext } from "./KipperParser";
import { BitwiseShiftExpressionContext } from "./KipperParser";
import { BitwiseShiftOperatorsContext } from "./KipperParser";
import { RelationalExpressionContext } from "./KipperParser";
import { EqualityExpressionContext } from "./KipperParser";
import { BitwiseAndExpressionContext } from "./KipperParser";
import { BitwiseXorExpressionContext } from "./KipperParser";
import { BitwiseOrExpressionContext } from "./KipperParser";
import { LogicalAndExpressionContext } from "./KipperParser";
import { LogicalOrExpressionContext } from "./KipperParser";
import { ConditionalExpressionContext } from "./KipperParser";
import { AssignmentExpressionContext } from "./KipperParser";
import { AssignmentOperatorContext } from "./KipperParser";
import { ExpressionContext } from "./KipperParser";
import { TypeSpecifierExpressionContext } from "./KipperParser";
import { IdentifierTypeSpecifierExpressionContext } from "./KipperParser";
import { GenericTypeSpecifierExpressionContext } from "./KipperParser";
import { TypeofTypeSpecifierExpressionContext } from "./KipperParser";
import { TypeSpecifierIdentifierContext } from "./KipperParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KipperParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KipperParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `passOnBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnBitwiseShiftExpression?: (ctx: PassOnBitwiseShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualBitwiseShiftExpression`
	 * labeled alternative in `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualBitwiseShiftExpression?: (ctx: ActualBitwiseShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnBitwiseAndExpression?: (ctx: PassOnBitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualBitwiseAndExpression`
	 * labeled alternative in `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualBitwiseAndExpression?: (ctx: ActualBitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnLogicalAndExpression?: (ctx: PassOnLogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualLogicalAndExpression`
	 * labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualLogicalAndExpression?: (ctx: ActualLogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnBitwiseXorExpression?: (ctx: PassOnBitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualBitwiseXorExpression`
	 * labeled alternative in `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualBitwiseXorExpression?: (ctx: ActualBitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalBlockItem?: (ctx: ExternalBlockItemContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOncomputedPrimaryExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOncomputedPrimaryExpression?: (ctx: PassOncomputedPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `explicitCallFunctionCallExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitCallFunctionCallExpression?: (ctx: ExplicitCallFunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dotNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotNotationMemberAccessExpression?: (ctx: DotNotationMemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketNotationMemberAccessExpression?: (ctx: BracketNotationMemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `sliceNotationMemberAccessExpression`
	 * labeled alternative in `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceNotationMemberAccessExpression?: (ctx: SliceNotationMemberAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnAssignmentExpression?: (ctx: PassOnAssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualAssignmentExpression`
	 * labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualAssignmentExpression?: (ctx: ActualAssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnCastOrConvertExpression?: (ctx: PassOnCastOrConvertExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualCastOrConvertExpression?: (ctx: ActualCastOrConvertExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnBitwiseOrExpression?: (ctx: PassOnBitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualBitwiseOrExpression`
	 * labeled alternative in `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualBitwiseOrExpression?: (ctx: ActualBitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnEqualityExpression?: (ctx: PassOnEqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualEqualityExpression`
	 * labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualEqualityExpression?: (ctx: ActualEqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnAdditiveExpression?: (ctx: PassOnAdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualAdditiveExpression`
	 * labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualAdditiveExpression?: (ctx: ActualAdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnRelationalExpression?: (ctx: PassOnRelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualRelationalExpression`
	 * labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualRelationalExpression?: (ctx: ActualRelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnConditionalExpression?: (ctx: PassOnConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualConditionalExpression`
	 * labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualConditionalExpression?: (ctx: ActualConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnMultiplicativeExpression?: (ctx: PassOnMultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualMultiplicativeExpression`
	 * labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualMultiplicativeExpression?: (ctx: ActualMultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnLogicalOrExpression?: (ctx: PassOnLogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `actualLogicalOrExpression`
	 * labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualLogicalOrExpression?: (ctx: ActualLogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalItem?: (ctx: ExternalItemContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItemList?: (ctx: BlockItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectDeclarator?: (ctx: DirectDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.interfacePropertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfacePropertyDeclaration?: (ctx: InterfacePropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionStatement?: (ctx: SelectionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.switchLabeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabeledStatement?: (ctx: SwitchLabeledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.forLoopIterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoopIterationStatement?: (ctx: ForLoopIterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.whileLoopIterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoopIterationStatement?: (ctx: WhileLoopIterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.doWhileLoopIterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileLoopIterationStatement?: (ctx: DoWhileLoopIterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpStatement?: (ctx: JumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.tangledPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTangledPrimaryExpression?: (ctx: TangledPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.boolPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolPrimaryExpression?: (ctx: BoolPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.identifierPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrimaryExpression?: (ctx: IdentifierPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.identifierOrStringPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrStringPrimaryExpression?: (ctx: IdentifierOrStringPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.stringPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringPrimaryExpression?: (ctx: StringPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.fStringPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringPrimaryExpression?: (ctx: FStringPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.fStringSingleQuoteAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringSingleQuoteAtom?: (ctx: FStringSingleQuoteAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.fStringDoubleQuoteAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringDoubleQuoteAtom?: (ctx: FStringDoubleQuoteAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.numberPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberPrimaryExpression?: (ctx: NumberPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.arrayPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayPrimaryExpression?: (ctx: ArrayPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.objectPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPrimaryExpression?: (ctx: ObjectPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.objectProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectProperty?: (ctx: ObjectPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.voidOrNullOrUndefinedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidOrNullOrUndefinedPrimaryExpression?: (ctx: VoidOrNullOrUndefinedPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.computedPrimaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedPrimaryExpression?: (ctx: ComputedPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.dotNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotNotation?: (ctx: DotNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketNotation?: (ctx: BracketNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.sliceNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceNotation?: (ctx: SliceNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.incrementOrDecrementPostfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOrDecrementPostfixExpression?: (ctx: IncrementOrDecrementPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.incrementOrDecrementUnaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOrDecrementUnaryExpression?: (ctx: IncrementOrDecrementUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.operatorModifiedUnaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorModifiedUnaryExpression?: (ctx: OperatorModifiedUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.incrementOrDecrementOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOrDecrementOperator?: (ctx: IncrementOrDecrementOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bitwiseShiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseShiftExpression?: (ctx: BitwiseShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bitwiseShiftOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseShiftOperators?: (ctx: BitwiseShiftOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bitwiseAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.bitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.typeSpecifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifierExpression?: (ctx: TypeSpecifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.identifierTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierTypeSpecifierExpression?: (ctx: IdentifierTypeSpecifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.genericTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypeSpecifierExpression?: (ctx: GenericTypeSpecifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.typeofTypeSpecifierExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofTypeSpecifierExpression?: (ctx: TypeofTypeSpecifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.typeSpecifierIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifierIdentifier?: (ctx: TypeSpecifierIdentifierContext) => Result;
}
