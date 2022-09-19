// Generated from ./Kipper.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PassOnLogicalAndExpressionContext } from "./KipperParser";
import { ActualLogicalAndExpressionContext } from "./KipperParser";
import { PassOnUnaryExpressionContext } from "./KipperParser";
import { IncrementOrDecrementUnaryExpressionContext } from "./KipperParser";
import { OperatorModifiedUnaryExpressionContext } from "./KipperParser";
import { ExternalFunctionDeclarationContext } from "./KipperParser";
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
import { IfStatementContext } from "./KipperParser";
import { SwitchStatementContext } from "./KipperParser";
import { PassOnPostfixExpressionContext } from "./KipperParser";
import { ArraySpecifierPostfixExpressionContext } from "./KipperParser";
import { IncrementOrDecrementPostfixExpressionContext } from "./KipperParser";
import { FunctionCallPostfixExpressionContext } from "./KipperParser";
import { TangledPrimaryExpressionContext } from "./KipperParser";
import { BoolPrimaryExpressionContext } from "./KipperParser";
import { IdentifierPrimaryExpressionContext } from "./KipperParser";
import { StringPrimaryExpressionContext } from "./KipperParser";
import { FStringPrimaryExpressionContext } from "./KipperParser";
import { NumberPrimaryExpressionContext } from "./KipperParser";
import { ListPrimaryExpressionContext } from "./KipperParser";
import { VoidOrNullOrUndefinedPrimaryExpressionContext } from "./KipperParser";
import { PassOnConditionalExpressionContext } from "./KipperParser";
import { ActualConditionalExpressionContext } from "./KipperParser";
import { IdentifierTypeSpecifierContext } from "./KipperParser";
import { GenericTypeSpecifierContext } from "./KipperParser";
import { TypeofTypeSpecifierContext } from "./KipperParser";
import { PassOnMultiplicativeExpressionContext } from "./KipperParser";
import { ActualMultiplicativeExpressionContext } from "./KipperParser";
import { PassOnLogicalOrExpressionContext } from "./KipperParser";
import { ActualLogicalOrExpressionContext } from "./KipperParser";
import { CompilationUnitContext } from "./KipperParser";
import { TranslationUnitContext } from "./KipperParser";
import { ExternalItemContext } from "./KipperParser";
import { FunctionDeclarationContext } from "./KipperParser";
import { EndOfLineContext } from "./KipperParser";
import { PrimaryExpressionContext } from "./KipperParser";
import { PostfixExpressionContext } from "./KipperParser";
import { ArraySpecifierContext } from "./KipperParser";
import { ArgumentExpressionListContext } from "./KipperParser";
import { UnaryExpressionContext } from "./KipperParser";
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
import { ConstantExpressionContext } from "./KipperParser";
import { DeclarationContext } from "./KipperParser";
import { StorageTypeSpecifierContext } from "./KipperParser";
import { DeclarationSpecifiersContext } from "./KipperParser";
import { DeclarationSpecifierContext } from "./KipperParser";
import { InitDeclaratorContext } from "./KipperParser";
import { TypeSpecifierContext } from "./KipperParser";
import { TypeSpecifierIdentifierContext } from "./KipperParser";
import { DeclaratorContext } from "./KipperParser";
import { DirectDeclaratorContext } from "./KipperParser";
import { ParameterTypeListContext } from "./KipperParser";
import { ParameterListContext } from "./KipperParser";
import { ParameterDeclarationContext } from "./KipperParser";
import { InitializerContext } from "./KipperParser";
import { StatementContext } from "./KipperParser";
import { CompoundStatementContext } from "./KipperParser";
import { BlockItemListContext } from "./KipperParser";
import { BlockItemContext } from "./KipperParser";
import { ExpressionStatementContext } from "./KipperParser";
import { SelectionStatementContext } from "./KipperParser";
import { SwitchLabeledStatementContext } from "./KipperParser";
import { IterationStatementContext } from "./KipperParser";
import { ForConditionContext } from "./KipperParser";
import { ForDeclarationContext } from "./KipperParser";
import { ForExpressionContext } from "./KipperParser";
import { JumpStatementContext } from "./KipperParser";
import { ReturnStatementContext } from "./KipperParser";

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KipperParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KipperVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by the `passOnUnaryExpression`
	 * labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnUnaryExpression?: (ctx: PassOnUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `incrementOrDecrementUnaryExpression`
	 * labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOrDecrementUnaryExpression?: (ctx: IncrementOrDecrementUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `operatorModifiedUnaryExpression`
	 * labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorModifiedUnaryExpression?: (ctx: OperatorModifiedUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalFunctionDeclaration`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalFunctionDeclaration?: (ctx: ExternalFunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalBlockItem?: (ctx: ExternalBlockItemContext) => Result;

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
	 * Visit a parse tree produced by the `ifStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `switchStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `passOnPostfixExpression`
	 * labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassOnPostfixExpression?: (ctx: PassOnPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arraySpecifierPostfixExpression`
	 * labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySpecifierPostfixExpression?: (ctx: ArraySpecifierPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `incrementOrDecrementPostfixExpression`
	 * labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementOrDecrementPostfixExpression?: (ctx: IncrementOrDecrementPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallPostfixExpression`
	 * labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallPostfixExpression?: (ctx: FunctionCallPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `tangledPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTangledPrimaryExpression?: (ctx: TangledPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolPrimaryExpression?: (ctx: BoolPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrimaryExpression?: (ctx: IdentifierPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringPrimaryExpression?: (ctx: StringPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `fStringPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFStringPrimaryExpression?: (ctx: FStringPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberPrimaryExpression?: (ctx: NumberPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPrimaryExpression?: (ctx: ListPrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `voidOrNullOrUndefinedPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidOrNullOrUndefinedPrimaryExpression?: (ctx: VoidOrNullOrUndefinedPrimaryExpressionContext) => Result;

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
	 * Visit a parse tree produced by the `identifierTypeSpecifier`
	 * labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierTypeSpecifier?: (ctx: IdentifierTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `genericTypeSpecifier`
	 * labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypeSpecifier?: (ctx: GenericTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeofTypeSpecifier`
	 * labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofTypeSpecifier?: (ctx: TypeofTypeSpecifierContext) => Result;

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
	 * Visit a parse tree produced by `KipperParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.endOfLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndOfLine?: (ctx: EndOfLineContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySpecifier?: (ctx: ArraySpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

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
	 * Visit a parse tree produced by `KipperParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.typeSpecifierIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifierIdentifier?: (ctx: TypeSpecifierIdentifierContext) => Result;

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
	 * Visit a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterTypeList?: (ctx: ParameterTypeListContext) => Result;

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
	 * Visit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

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
	 * Visit a parse tree produced by `KipperParser.forCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForCondition?: (ctx: ForConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.forDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForDeclaration?: (ctx: ForDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KipperParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

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
}
