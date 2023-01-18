// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PassOnLogicalAndExpressionContext } from "./KipperParser";
import { ActualLogicalAndExpressionContext } from "./KipperParser";
import { ExternalBlockItemContext } from "./KipperParser";
import { PassOnAssignmentExpressionContext } from "./KipperParser";
import { ActualAssignmentExpressionContext } from "./KipperParser";
import { PassOnCastOrConvertExpressionContext } from "./KipperParser";
import { ActualCastOrConvertExpressionContext } from "./KipperParser";
import { PassOnEqualityExpressionContext } from "./KipperParser";
import { ActualEqualityExpressionContext } from "./KipperParser";
import { PassOnAdditiveExpressionContext } from "./KipperParser";
import { ActualAdditiveExpressionContext } from "./KipperParser";
import { PassOnRelationalExpressionContext } from "./KipperParser";
import { ActualRelationalExpressionContext } from "./KipperParser";
import { BracketNotationIndexContext } from "./KipperParser";
import { BracketNotationSliceContext } from "./KipperParser";
import { PassOnConditionalExpressionContext } from "./KipperParser";
import { ActualConditionalExpressionContext } from "./KipperParser";
import { PassOnMultiplicativeExpressionContext } from "./KipperParser";
import { ActualMultiplicativeExpressionContext } from "./KipperParser";
import { PassOnLogicalOrExpressionContext } from "./KipperParser";
import { ActualLogicalOrExpressionContext } from "./KipperParser";
import { CompilationUnitContext } from "./KipperParser";
import { TranslationUnitContext } from "./KipperParser";
import { ExternalItemContext } from "./KipperParser";
import { DeclarationContext } from "./KipperParser";
import { VariableDeclarationContext } from "./KipperParser";
import { FunctionDeclarationContext } from "./KipperParser";
import { DeclaratorContext } from "./KipperParser";
import { DirectDeclaratorContext } from "./KipperParser";
import { StorageTypeSpecifierContext } from "./KipperParser";
import { InitDeclaratorContext } from "./KipperParser";
import { ParameterListContext } from "./KipperParser";
import { ParameterDeclarationContext } from "./KipperParser";
import { InitializerContext } from "./KipperParser";
import { StatementContext } from "./KipperParser";
import { CompoundStatementContext } from "./KipperParser";
import { BlockItemListContext } from "./KipperParser";
import { BlockItemContext } from "./KipperParser";
import { ExpressionStatementContext } from "./KipperParser";
import { SelectionStatementContext } from "./KipperParser";
import { IfStatementContext } from "./KipperParser";
import { SwitchStatementContext } from "./KipperParser";
import { SwitchLabeledStatementContext } from "./KipperParser";
import { IterationStatementContext } from "./KipperParser";
import { ForLoopIterationStatementContext } from "./KipperParser";
import { WhileLoopIterationStatementContext } from "./KipperParser";
import { DoWhileLoopIterationStatementContext } from "./KipperParser";
import { ForConditionContext } from "./KipperParser";
import { ForDeclarationContext } from "./KipperParser";
import { ForExpressionContext } from "./KipperParser";
import { JumpStatementContext } from "./KipperParser";
import { ReturnStatementContext } from "./KipperParser";
import { PrimaryExpressionContext } from "./KipperParser";
import { TangledPrimaryExpressionContext } from "./KipperParser";
import { BoolPrimaryExpressionContext } from "./KipperParser";
import { IdentifierPrimaryExpressionContext } from "./KipperParser";
import { IdentifierContext } from "./KipperParser";
import { StringPrimaryExpressionContext } from "./KipperParser";
import { FStringPrimaryExpressionContext } from "./KipperParser";
import { NumberPrimaryExpressionContext } from "./KipperParser";
import { ArrayLiteralPrimaryExpressionContext } from "./KipperParser";
import { VoidOrNullOrUndefinedPrimaryExpressionContext } from "./KipperParser";
import { ComputedPrimaryExpressionContext } from "./KipperParser";
import { FunctionCallExpressionContext } from "./KipperParser";
import { MemberAccessExpressionContext } from "./KipperParser";
import { DotNotationMemberAccessExpressionContext } from "./KipperParser";
import { BracketNotationMemberAccessExpressionContext } from "./KipperParser";
import { BracketNotationContext } from "./KipperParser";
import { PostfixExpressionContext } from "./KipperParser";
import { IncrementOrDecrementPostfixExpressionContext } from "./KipperParser";
import { ArgumentExpressionListContext } from "./KipperParser";
import { UnaryExpressionContext } from "./KipperParser";
import { IncrementOrDecrementUnaryExpressionContext } from "./KipperParser";
import { OperatorModifiedUnaryExpressionContext } from "./KipperParser";
import { IncrementOrDecrementOperatorContext } from "./KipperParser";
import { UnaryOperatorContext } from "./KipperParser";
import { CastOrConvertExpressionContext } from "./KipperParser";
import { MultiplicativeExpressionContext } from "./KipperParser";
import { AdditiveExpressionContext } from "./KipperParser";
import { RelationalExpressionContext } from "./KipperParser";
import { EqualityExpressionContext } from "./KipperParser";
import { LogicalAndExpressionContext } from "./KipperParser";
import { LogicalOrExpressionContext } from "./KipperParser";
import { ConditionalExpressionContext } from "./KipperParser";
import { AssignmentExpressionContext } from "./KipperParser";
import { AssignmentOperatorContext } from "./KipperParser";
import { ExpressionContext } from "./KipperParser";
import { TypeSpecifierContext } from "./KipperParser";
import { IdentifierTypeSpecifierContext } from "./KipperParser";
import { GenericTypeSpecifierContext } from "./KipperParser";
import { TypeofTypeSpecifierContext } from "./KipperParser";
import { TypeSpecifierIdentifierContext } from "./KipperParser";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `KipperParser`.
 */
export interface KipperParserListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by the `actualCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterActualCastOrConvertExpression?: (ctx: ActualCastOrConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `actualCastOrConvertExpression`
	 * labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitActualCastOrConvertExpression?: (ctx: ActualCastOrConvertExpressionContext) => void;

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
	 * Enter a parse tree produced by the `bracketNotationIndex`
	 * labeled alternative in `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	enterBracketNotationIndex?: (ctx: BracketNotationIndexContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketNotationIndex`
	 * labeled alternative in `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	exitBracketNotationIndex?: (ctx: BracketNotationIndexContext) => void;

	/**
	 * Enter a parse tree produced by the `bracketNotationSlice`
	 * labeled alternative in `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	enterBracketNotationSlice?: (ctx: BracketNotationSliceContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketNotationSlice`
	 * labeled alternative in `KipperParser.bracketNotation`.
	 * @param ctx the parse tree
	 */
	exitBracketNotationSlice?: (ctx: BracketNotationSliceContext) => void;

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
	 * Enter a parse tree produced by `KipperParser.forCondition`.
	 * @param ctx the parse tree
	 */
	enterForCondition?: (ctx: ForConditionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.forCondition`.
	 * @param ctx the parse tree
	 */
	exitForCondition?: (ctx: ForConditionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForDeclaration?: (ctx: ForDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForDeclaration?: (ctx: ForDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

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
	 * Enter a parse tree produced by `KipperParser.arrayLiteralPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralPrimaryExpression?: (ctx: ArrayLiteralPrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.arrayLiteralPrimaryExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralPrimaryExpression?: (ctx: ArrayLiteralPrimaryExpressionContext) => void;

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
	 * Enter a parse tree produced by `KipperParser.functionCallExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.functionCallExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.memberAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.memberAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.dotNotationMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterDotNotationMemberAccessExpression?: (ctx: DotNotationMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.dotNotationMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitDotNotationMemberAccessExpression?: (ctx: DotNotationMemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.bracketNotationMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	enterBracketNotationMemberAccessExpression?: (ctx: BracketNotationMemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.bracketNotationMemberAccessExpression`.
	 * @param ctx the parse tree
	 */
	exitBracketNotationMemberAccessExpression?: (ctx: BracketNotationMemberAccessExpressionContext) => void;

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
	 * Enter a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.identifierTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifierTypeSpecifier?: (ctx: IdentifierTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.identifierTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifierTypeSpecifier?: (ctx: IdentifierTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.genericTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterGenericTypeSpecifier?: (ctx: GenericTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.genericTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitGenericTypeSpecifier?: (ctx: GenericTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeofTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeofTypeSpecifier?: (ctx: TypeofTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeofTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeofTypeSpecifier?: (ctx: TypeofTypeSpecifierContext) => void;

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
